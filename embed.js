(function () {
    'use strict';
    var _config = window.disqus_config;
    window.disqus_config = function () {
        if (_config) 
            _config.call(this);
        this.server_side = {
            "bin": "embed:promoted_discovery:dynamic:network_default_hidden:fallthrough",
            "variant": "fallthrough",
            "bottom_placement_url": "",
            "engage_lite_html": "",
            "forum_id": "3440079",
            "inthread_show_after_comment": "3",
            "inthread_repeat_comment_count": "6",
            "inthread_placement_url": "",
            "top_placement_url": "",
            "engage_lite_url": "",
            "inthread_minimum_comment_count": "4",
            "inthread_trailing_comment_count": "1",
            "service": "dynamic",
            "inthread_count_children": "",
            "inthread_leading_comment_count": "3",
            "experiment": "network_default_hidden",
            "inthread_multiple_ads": ""
        };
    };
})();
!function(a, b) {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y = {}, Z = {}, $ = {}, _ = {}, aa = {}, ba = {}, ca = {}, da = {};
    c = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }, d = function(a) {
        return function(b, c) {
            var d = b.length, e = Array.prototype.forEach;
            if (isNaN(d))
                for (var f in b)
                    a(b, f) && c(b[f], f, b);
            else if (e)
                e.call(b, c);
            else 
                for (var g = 0; d > g; g++)
                    c(b[g], g, b)
        }
    }(c), Y = function(a) {
        var c = d;
        return a = function(a) {
            var d = [];
            return c(a, function(a, c) {
                a !== b && d.push(c + (null === a ? "" : "=" + encodeURIComponent(a)))
            }), d.join("&")
        }
    }(Y), Z = function(a) {
        var b = Y;
        return a = function c(a, d, e) {
            if (d && ( - 1 === a.indexOf("?") ? a += "?" : "&" !== a.charAt(a.length - 1) && (a += "&"), a += b(d)), e) {
                var f = {};
                return f[(new Date).getTime()] = null, c(a, f)
            }
            var g = a.length;
            return "&" === a.charAt(g - 1) ? a.slice(0, g - 1) : a
        }
    }(Z), $ = function(b) {
        var c = Z, d = a.document, e = d.head || d.getElementsByTagName("head")[0] || d.body;
        return b = function(a, b, f) {
            var g = d.createElement("script");
            g.src = c(a, b, f), g.async=!0, g.charset = "UTF-8", e.appendChild(g)
        }
    }($), e = function(a) {
        try {
            return a.self !== a.top
        } catch (b) {
            return !0
        }
    }, f = function(a, b) {
        return function(c) {
            return a(Array.prototype.slice.call(arguments, 1), function(a) {
                for (var d in a)
                    b(a, d) && (c[d] = a[d])
            }), c
        }
    }(d, c), g = function(a) {
        var b;
        return function() {
            return a && (b = a.apply(this, arguments), a = null), b
        }
    }, h = function(b) {
        function c(a) {
            var b = a.split("."), c = b.length > 2 ? b[b.length - 2]: "";
            return c.match(/^[0-9a-f]{32}$/i) && c
        }
        function d(b) {
            (new a.Image).src = f(g + "/stat.gif", {
                event: b
            })
        }
        function e(b) {
            (new a.Image).src = f(g + "/event.gif", b)
        }
        var f = Z, g = "https://referrer.disqus.com/juggler";
        return {
            getLoaderVersionFromUrl: c,
            logStat: d,
            reportJester: e
        }
    }({}), i = function() {
        function b(b) {
            b = b || {};
            var c = b.Math || a.Math, d = b.Date || a.Date;
            try {
                var e = (new d).getTimezoneOffset(), f = 1, g = a.screen;
                g && g.availWidth ? f = g.availWidth * g.availHeight + g.colorDepth : g && g.width && (f = g.width * g.height);
                var h = a.document.documentElement, i = h.clientWidth * h.clientHeight;
                return c.abs(17 * e + 25 * f - i)
            } catch (j) {
                return 1
            }
        }
        return {
            get: b
        }
    }(), j = function(b) {
        function c(b) {
            b = b || {};
            var c = b.Uint32Array || a.Uint32Array, d = b.crypto || a.crypto, e = b.Math || a.Math;
            try {
                var f = new c(1);
                return d.getRandomValues(f), f[0]
            } catch (g) {
                return e.floor(1e9 * e.random())
            }
        }
        function d() {
            var b = a.performance, c = b && b.timing;
            if (!c)
                return 1e5;
            var d = c.domainLookupEnd - c.domainLookupStart, e = c.connectEnd - c.connectStart, f = c.responseStart - c.navigationStart;
            return 11 * d + 13 * e + 17 * f
        }
        function e(e) {
            e = e || {};
            var f = e.Math || a.Math, g = Number((new Date).getTime().toString().substring(3)), h = f.abs(g + d() - b.get()).toString(32);
            return h += c(e).toString(32)
        }
        return {
            generate: e
        }
    }(i), k = function(b) {
        var c = a.document, d = c.createElement("iframe");
        return d.style.display = "none", c.body.appendChild(d), function(b) {
            try {
                return d.contentWindow[b] || a[b]
            } catch (c) {
                return a[b]
            }
        }
    }({}), l = function(a) {
        return "[object String]" === Object.prototype.toString.call(a)
    }, m = function() {
        return a.getComputedStyle ? function(b, c, d) {
            try {
                return a.document.defaultView.getComputedStyle(b, null).getPropertyValue(c)
            } catch (e) {
                return null
            }
        } : function(a, b, c) {
            return a.currentStyle[b] || a.currentStyle[c]
        }
    }(), n = function(a) {
        function b(a) {
            return a.replace(/\s+/g, "").toLowerCase()
        }
        var c = d, e = l, g = f;
        return function(a, d, f) {
            var h = {};
            e(d) ? h[d] = f : h = d;
            var i = g({}, h);
            c(i, function(a, c) {
                var d = b(c);
                d !== c && (delete i[c], i[d] = a), null === a && (i[d] = ""), void 0 === a && delete i[d]
            });
            var j = a.style;
            c(i, function(a, b) {
                j.setProperty(b, String(a), "important")
            })
        }
    }({}), o = function(b) {
        function c(a) {
            return a.replace(/\s+/g, "").toLowerCase()
        }
        function d(a) {
            return a = a.replace(/^#([a-f0-9])([a-f0-9])([a-f0-9])$/, "#$1$1$2$2$3$3"), a = a.slice(1), {
                red: parseInt(a.slice(0, 2), 16),
                green: parseInt(a.slice(2, 4), 16),
                blue: parseInt(a.slice(4, 6), 16)
            }
        }
        function e(a) {
            var b = a.match(/^rgb\((\d+),(\d+),(\d+)\)$/);
            return {
                red: parseInt(b[1], 10),
                green: parseInt(b[2], 10),
                blue: parseInt(b[3], 10)
            }
        }
        function f(a) {
            var b = a.match(/^rgba\((\d+),(\d+),(\d+),([\d.]+)\)$/);
            return {
                red: parseInt(b[1], 10),
                green: parseInt(b[2], 10),
                blue: parseInt(b[3], 10),
                alpha: parseFloat(b[4])
            }
        }
        function g(b, c, d, e) {
            return c = a.document.createElement(c), i(c, {
                visibility: "hidden",
                color: d
            }), b.appendChild(c), d = e(c), b.removeChild(c), d
        }
        function h(b, d) {
            d = d || {};
            var f = d.container || a.document.body;
            return a.getComputedStyle ? (b = g(f, "span", b, function(b) {
                return a.getComputedStyle(b, null).getPropertyValue("color")
            }), e(c(b))) : (b = g(f, "textarea", b, function(a) {
                return a.createTextRange().queryCommandValue("ForeColor")
            }), {
                red: 255 & b,
                blue: b>>>16,
                green: (65280 & b)>>>8
            })
        }
        var i = n;
        return function(a, b) {
            a = c(a);
            var g;
            if ("transparent" === a)
                return {
                    red: 0,
                    green: 0,
                    blue: 0,
                    alpha: 0
                };
            if ("#" === a.charAt(0))
                g = d;
            else if ("rgba(" === a.slice(0, 5))
                g = f;
            else if ("rgb(" === a.slice(0, 4))
                g = e;
            else {
                if (!/^[a-z]+$/.test(a))
                    throw new Error("parseColor received unparseable color: " + a);
                g = h
            }
            return g(a, b)
        }
    }({}), p = function(c) {
        function d(a) {
            if (!a || "embed.js" !== a.substring(a.length - 8))
                return null;
            for (var b, c = [/(https?:)?\/\/(www\.)?disqus\.com\/forums\/([\w_\-]+)/i, /(https?:)?\/\/(www\.)?([\w_\-]+)\.disqus\.com/i, /(https?:)?\/\/(www\.)?dev\.disqus\.org\/forums\/([\w_\-]+)/i, /(https?:)?\/\/(www\.)?([\w_\-]+)\.dev\.disqus\.org/i], d = c.length, e = 0; d > e; e++)
                if (b = a.match(c[e]), b && b.length && 4 === b.length)
                    return b[3];
            return null
        }
        function e(a, b) {
            var c, e, f, g = a.getElementsByTagName("script"), h = g.length;
            b = b || d;
            for (var i = h - 1; i >= 0; i--)
                if (c = g[i], e = c.getAttribute ? c.getAttribute("src") : c.src, f = b(e), null !== f)
                    return f.toLowerCase();
            return null
        }
        function f(a, b) {
            var c, d, e = 0, f = new Array(a.length);
            for (c = 0; c <= a.length; c++)
                for (f[c] = new Array(b.length)
                    , d = 0;
            d <= b.length;
            d++)f[c][d] = 0;
            for (c = 0; c < a.length; c++)
                for (d = 0; d < b.length; d++)
                    a[c] === b[d] && (f[c + 1][d + 1] = f[c][d] + 1, f[c + 1][d + 1] > e && (e = f[c + 1][d + 1]));
            return e
        }
        function g() {
            for (var a = v.getElementsByTagName("h1"), c = v.title, d = c.length, e = c, g = .6, h = function(a) {
                var h, i = a.textContent || a.innerText;
                null !== i && i !== b && (h = f(c, i) / d, h > g && (g = h, e = i))
            }, i = 0; i < a.length; i++)
                h(a[i]);
            return e
        }
        function h(a) {
            return a.toLowerCase().replace(/^\s+|\s+$/g, "").replace(/['"]/g, "")
        }
        function i(a) {
            var b = 0, c = 1, d = 2;
            if (!a.atob)
                return c;
            try {
                a.postMessage("ping", "*")
            } catch (e) {
                return d
            }
            return b
        }
        function j(a, b, c) {
            c = c || b;
            var d = t(a, b, c);
            return !d || /color/i.test(b) && 0 === u(d).alpha ? a && j(a.parentNode, b, c) || d : d || null
        }
        function k(a, b, c, d) {
            s(b) && (b = v.createElement(b));
            var e = null;
            return b.style.visibility = "hidden", a.appendChild(b), e = j(b, c, d), a.removeChild(b), e
        }
        function n(a) {
            for (var b, c = k(a, "span", "font-family", "fontFamily"), d = c.split(","), e = {
                courier: 1,
                times: 1,
                "times new roman": 1,
                georgia: 1,
                palatino: 1,
                serif: 1
            }, f = 0; f < d.length; f++)
                if (b = h(d[f]), e.hasOwnProperty(b))
                    return !0;
            return !1
        }
        function p(a) {
            var b = v.createElement("a");
            return b.href = Number(new Date), u(k(a, b, "color"), {
                container: a
            })
        }
        function q(a) {
            var b = a.red, c = a.green, d = a.blue;
            if (a.hasOwnProperty("alpha")) {
                var e = a.alpha, f = function(a) {
                    return Math.round(a * e + 255 * (1 - e))
                };
                b = f(b), c = f(c), d = f(d)
            }
            return (299 * b + 587 * c + 114 * d) / 1e3
        }
        function r(a) {
            var b = k(a, "span", "background-color", "backgroundColor"), c = u(b, {
                container: a
            });
            return 0 === c.alpha ? "light" : q(c) < 128 ? "dark" : "light"
        }
        var s = l, t = m, u = o, v = a.document, w = function() {
            var a, b, c = function() {
                return !1
            };
            if ("hidden"in v)
                a = "hidden", b = "visibilitychange";
            else {
                if (!("webkitHidden"in v))
                    return {
                        isHidden: c,
                        listen: c,
                        stopListening: c
                    };
                a = "webkitHidden", b = "webkitvisibilitychange"
            }
            return {
                isHidden: function() {
                    return v[a]
                },
                listen: function(a) {
                    return v.addEventListener(b, a)
                },
                stopListening: function(a) {
                    return v.removeEventListener(b, a)
                }
            }
        }(), x = function() {
            var a = v.createElement("div");
            a.style.visibility = "hidden", a.style.width = "100px", a.style.msOverflowStyle = "scrollbar", v.body.appendChild(a);
            var b = a.offsetWidth;
            a.style.overflow = "scroll";
            var c = v.createElement("div");
            c.style.width = "100%", a.appendChild(c);
            var d = c.offsetWidth;
            return a.parentNode.removeChild(a), b - d
        }, y = {
            isIE: function() {
                return Boolean(v.documentMode)
            },
            isSafari: function() {
                var b = a.navigator.userAgent.toLowerCase();
                return b.indexOf("safari")>-1&&-1 === b.indexOf("chrome")
            }
        }, z = {
            getItem: function(b) {
                try {
                    return a.localStorage.getItem(b)
                } catch (c) {}
            },
            setItem: function(b, c) {
                try {
                    return a.localStorage.setItem(b, c)
                } catch (d) {}
            }
        }, A = 1, B = function(a) {
            if (a.nodeType === A) {
                var b = t(a, "max-height", "maxHeight"), c = t(a, "overflow-y", "overflowY");
                return b && "none" !== b && c && "visible" !== c
            }
        }, C = 4, D = function(a) {
            return a.nodeType === A ? a.scrollHeight - a.clientHeight > C : void 0
        }, E = function() {
            if (v.querySelector) {
                var a = v.querySelector("link[rel=canonical]");
                if (a)
                    return a.href
            }
        };
        return {
            MAX_Z_INDEX: 2147483647,
            getShortnameFromUrl: d,
            getForum: e,
            guessThreadTitle: g,
            getContrastYIQ: q,
            getColorScheme: r,
            getElementStyle: k,
            getAnchorColor: p,
            normalizeFontValue: h,
            isSerif: n,
            getBrowserSupport: i,
            pageVisibility: w,
            getScrollbarWidth: x,
            browser: y,
            storage: z,
            appearsToHideContent: B,
            hasOverflow: D,
            getCanonicalUrl: E
        }
    }({}), q = function(a) {
        var c = d, e = j, f = k, g = p, h = function(a, c) {
            this.win = a, this.configurator = c, this.config = {
                page: {
                    url: b,
                    title: b,
                    slug: b,
                    category_id: b,
                    identifier: b,
                    language: b,
                    api_key: b,
                    remote_auth_s3: b,
                    author_s3: b
                },
                experiment: {
                    enable_scroll_container: !0,
                    force_auto_styles: b,
                    sort_order: b,
                    force_mobile: b
                },
                server_side: {
                    service: "static",
                    experiment: "default",
                    variant: "control",
                    top_placement_url: b,
                    bottom_placement_url: b,
                    inthread_placement_url: b,
                    inthread_minimum_comment_count: b,
                    inthread_show_after_comment: b,
                    inthread_leading_comment_count: b,
                    inthread_repeat_comment_count: b,
                    inthread_trailing_comment_count: b,
                    inthread_count_children: b,
                    inthread_multiple_ads: b,
                    engage_lite_html: b,
                    engage_lite_url: b,
                    forum_id: b
                },
                discovery: {
                    disable_all: b,
                    disable_promoted: b,
                    sponsored_comment_id: b,
                    preview: !1,
                    adsFixture: b,
                    pdFixture: b
                },
                strings: b,
                sso: {},
                callbacks: {
                    preData: [],
                    preInit: [],
                    onInit: [],
                    afterRender: [],
                    onReady: [],
                    onNewComment: [],
                    preReset: [],
                    onPaginate: [],
                    onIdentify: [],
                    beforeComment: []
                }
            }
        };
        h.DISQUS_GLOBALS = ["shortname", "identifier", "url", "title", "category_id", "slug"];
        var i = h.prototype;
        return i.getContainer = function() {
            var a = this.win;
            return a.document.getElementById(a.disqus_container_id || "disqus_thread")
        }, i.runConfigurator = function() {
            var a = this.configurator || this.win.disqus_config;
            if ("function" == typeof a)
                try {
                    a.call(this.config)
            } catch (b) {}
        }, i.getValuesFromGlobals = function() {
            var a, b = this.win, d = this.config, e = d.page;
            c(h.DISQUS_GLOBALS, function(a) {
                var c = b["disqus_" + a];
                "undefined" != typeof c && (e[a] = c)
            }), this.runConfigurator(), d.forum || (a = e.shortname, d.forum = a ? a.toLowerCase() : g.getForum(b.document))
        }, i.toJSON = function() {
            var a, b = this.win, c = this.config, d = c.page, h = this.getContainer();
            return this.getValuesFromGlobals(), (c.server_side.top_placement_url || c.server_side.inthread_placement_url || c.server_side.bottom_placement_url) && (a = e.generate({
                Math: f("Math"),
                crypto: f("crypto"),
                Uint32Array: f("Uint32Array"),
                Date: f("Date")
            })), {
                impressionId: a || null,
                container: h,
                forum: c.forum,
                sortOrder: c.experiment.sort_order || g.storage.getItem("disqus.sort") || "default",
                language: c.language,
                typeface: g.isSerif(h) ? "serif": "sans-serif",
                anchorColor: g.getAnchorColor(h),
                colorScheme: g.getColorScheme(h),
                canonicalUrl: g.getCanonicalUrl(),
                url: d.url || b.location.href.replace(/#.*$/, ""),
                title: d.title,
                documentTitle: g.guessThreadTitle(),
                slug: d.slug,
                category: d.category_id,
                identifier: d.identifier,
                discovery: c.discovery,
                experimentName: c.server_side.experiment,
                experimentVariant: c.server_side.variant,
                experimentService: c.server_side.service,
                forumId: c.server_side.forum_id,
                topPlacementUrl: c.server_side.top_placement_url,
                bottomPlacementUrl: c.server_side.bottom_placement_url,
                inthreadPlacementUrl: c.server_side.inthread_placement_url,
                inthreadMinimumCommentCount: c.server_side.inthread_minimum_comment_count,
                inthreadShowAfterComment: c.server_side.inthread_show_after_comment,
                inthreadLeadingCommentCount: c.server_side.inthread_leading_comment_count,
                inthreadRepeatCommentCount: c.server_side.inthread_repeat_comment_count,
                inthreadTrailingCommentCount: c.server_side.inthread_trailing_comment_count,
                inthreadCountChildren: c.server_side.inthread_count_children,
                inthreadMultipleAds: c.server_side.inthread_multiple_ads,
                apiKey: d.api_key,
                remoteAuthS3: d.remote_auth_s3,
                sso: c.sso,
                unsupported: g.getBrowserSupport(b),
                callbacks: c.callbacks,
                enableScrollContainer: c.experiment.enable_scroll_container,
                forceAutoStyles: c.experiment.force_auto_styles,
                forceMobile: c.experiment.force_mobile,
                engageLiteHTML: c.server_side.engage_lite_html,
                engageLiteURL: c.server_side.engage_lite_url
            }
        }, {
            HostConfig: h
        }
    }({}), r = function() {
        var a;
        return a = "undefined" == typeof console ? function() {} : "function" == typeof console.log ? function() {
            return console.log(Array.prototype.slice.call(arguments, 0).join(" "))
        } : function() {
            return console.log.apply(console, arguments)
        }, {
            log: a
        }
    }(), s = function(a) {
        return function(b) {
            return Boolean(b && (b.offsetWidth || b.offsetHeight || b.getClientRects().length) && "hidden" !== a(b, "visibility"))
        }
    }(m), t = function(a, b, c) {
        var d = function() {
            var e = a();
            return e ? void b(e) : void setTimeout(d, c)
        };
        d()
    }, u = function(b) {
        function c(a) {
            return f.getElementById(a) || f.body || f.documentElement
        }
        function d(a) {
            return g.href = a, g.hostname
        }
        function e(a, b) {
            b = b || f.documentElement;
            for (var c = a, d = 0, e = 0; c && c !== b;)
                d += c.offsetLeft, e += c.offsetTop, c = c.offsetParent;
            return {
                top: e,
                left: d,
                height: a.offsetHeight,
                width: a.offsetWidth
            }
        }
        var f = a.document, g = f.createElement("a");
        return {
            getContainer: c,
            getHost: d,
            getOffset: e
        }
    }({}), v = function() {
        var a = 0;
        return function(b) {
            a += 1;
            var c = String(a);
            return b ? b + c : c
        }
    }(), w = function(a) {
        var b = d, e = c, f = v, g = function(a) {
            var b, c=!1;
            return function() {
                return c ? b : (c=!0, b = a.apply(this, arguments), a = null, b)
            }
        }, h = Object.keys || function(a) {
            if (a !== Object(a))
                throw new TypeError("Invalid object");
            var b = [];
            for (var c in a)
                e(a, c) && (b[b.length] = c);
            return b
        }, i = [].slice, j = {
            on: function(a, b, c) {
                if (!l(this, "on", a, [b, c]) ||!b)
                    return this;
                this._events = this._events || {};
                var d = this._events[a] || (this._events[a] = []);
                return d.push({
                    callback: b,
                    context: c,
                    ctx: c || this
                }), this
            },
            once: function(a, b, c) {
                if (!l(this, "once", a, [b, c]) ||!b)
                    return this;
                var d = this, e = g(function() {
                    d.off(a, e), b.apply(this, arguments)
                });
                return e._callback = b, this.on(a, e, c)
            },
            off: function(a, b, c) {
                var d, e, f, g, i, j, k, m;
                if (!this._events ||!l(this, "off", a, [b, c]))
                    return this;
                if (!a&&!b&&!c)
                    return this._events = {}, this;
                for (g = a ? [a] : h(this._events), i = 0, j = g.length; j > i; i++)
                    if (a = g[i], f = this._events[a]) {
                        if (this._events[a] = d = [], b || c)
                            for (k = 0, m = f.length; m > k; k++)
                                e = f[k], (c && c !== e.context || b && b !== e.callback && b !== e.callback._callback) && d.push(e);
                                d.length || delete this._events[a]
                    }
                return this
            },
            trigger: function(a) {
                if (!this._events)
                    return this;
                var b = i.call(arguments, 1);
                if (!l(this, "trigger", a, b))
                    return this;
                var c = this._events[a], d = this._events.all;
                return c && m(c, b), d && m(d, arguments), this
            },
            stopListening: function(a, b, c) {
                var d = this._listeners;
                if (!d)
                    return this;
                var e=!b&&!c;
                "object" == typeof b && (c = this), a && ((d = {})[a._listenerId] = a);
                for (var f in d)
                    d[f].off(b, c, this), e && delete this._listeners[f];
                return this
            }
        }, k = /\s+/, l = function(a, b, c, d) {
            if (!c)
                return !0;
            if ("object" == typeof c) {
                for (var e in c)
                    a[b].apply(a, [e, c[e]].concat(d));
                return !1
            }
            if (k.test(c)) {
                for (var f = c.split(k), g = 0, h = f.length; h > g; g++)
                    a[b].apply(a, [f[g]].concat(d));
                return !1
            }
            return !0
        }, m = function(a, b) {
            var c, d, e = a.length, f = b[0], g = b[1], h = b[2];
            switch (b.length) {
            case 0:
                for (d = 0; e > d; d++)(c = a[d])
                    .callback.call(c.ctx);
                return;
            case 1:
                for (d = 0; e > d; d++)(c = a[d])
                    .callback.call(c.ctx, f);
                return;
            case 2:
                for (d = 0; e > d; d++)(c = a[d])
                    .callback.call(c.ctx, f, g);
                return;
            case 3:
                for (d = 0; e > d; d++)(c = a[d])
                    .callback.call(c.ctx, f, g, h);
                return;
            default:
                for (d = 0; e > d; d++)(c = a[d])
                    .callback.apply(c.ctx, b)
            }
        }, n = {
            listenTo: "on",
            listenToOnce: "once"
        };
        return b(n, function(a, b) {
            j[b] = function(b, c, d) {
                var e = this._listeners || (this._listeners = {}), g = b._listenerId || (b._listenerId = f("l"));
                return e[g] = b, "object" == typeof c && (d = this), b[a](c, d, this), this
            }
        }), j.bind = j.on, j.unbind = j.off, j
    }({}), x = function(b) {
        var c, d = k;
        return c = "[object JSON]" === a.Object.prototype.toString.call(a.JSON) ? a.JSON : d("JSON"), c ? c : {}
    }({}), y = function(a) {
        var b = w, c = f, d = v, e = u, g = x, h = function(a) {
            a = a || {}, this.state = h.INIT, this.uid = a.uid || d("dsq-frame"), this.origin = a.origin, this.host = e.getHost(this.origin), this.target = a.target, this.window = null, h.windows[this.uid] = this, this.on("ready", function() {
                this.state = h.READY
            }, this), this.on("die", function() {
                this.state = h.KILLED
            }, this)
        };
        return c(h, {
            INIT: 0,
            READY: 1,
            KILLED: 2,
            windows: {},
            postMessage: function(a, b, c) {
                return a.postMessage(b, c)
            }
        }), c(h.prototype, b), h.prototype.requiresWindow = function(a) {
            var b = this;
            return function() {
                var c = Array.prototype.slice.call(arguments), d = function() {
                    var e = b.window;
                    e ? a.apply(b, c) : setTimeout(d, 500)
                };
                b.isReady() ? d() : b.on("ready", d)
            }
        }, h.prototype.sendMessage = function(a, b) {
            var c = g.stringify({
                scope: "client",
                name: a,
                data: b
            });
            this.requiresWindow(function(a) {
                h.postMessage(this.window, a, this.origin)
            })(c)
        }, h.prototype.hide = function() {}, h.prototype.show = function() {}, h.prototype.url = function() {
            return this.target
        }, h.prototype.destroy = function() {
            this.state = h.KILLED, this.off()
        }, h.prototype.isReady = function() {
            return this.state === h.READY
        }, h.prototype.isKilled = function() {
            return this.state === h.KILLED
        }, h
    }({}), z = function(b) {
        var c = n, d = f, e = y, g = u, h = a.document, i = function(a) {
            e.call(this, a), this.styles = a.styles || {}, this.tabIndex = a.tabIndex || 0, this.title = a.title || "Disqus", this.container = a.container, this.elem = null
        };
        return d(i.prototype, e.prototype), i.prototype.load = function() {
            var a = this.elem = h.createElement("iframe");
            a.setAttribute("id", this.uid), a.setAttribute("name", this.uid), a.setAttribute("allowTransparency", "true"), a.setAttribute("frameBorder", "0"), a.setAttribute("scrolling", "no"), this.role && a.setAttribute("role", this.role), a.setAttribute("tabindex", this.tabIndex), a.setAttribute("title", this.title), this.setInlineStyle(this.styles)
        }, i.prototype.getOffset = function(a) {
            return g.getOffset(this.elem, a)
        }, i.prototype.setInlineStyle = function(a, b) {
            return c(this.elem, a, b)
        }, i.prototype.removeInlineStyle = function(a) {
            var b = this.elem.style;
            return "removeProperty"in b ? void b.removeProperty(a) : void(b[a] = "")
        }, i.prototype.hide = function() {
            this.setInlineStyle("display", "none")
        }, i.prototype.show = function() {
            this.removeInlineStyle("display")
        }, i.prototype.destroy = function() {
            return this.elem && this.elem.parentNode && (this.elem.parentNode.removeChild(this.elem), this.elem = null), e.prototype.destroy.call(this)
        }, i
    }({}), A = function(b) {
        var c = l, d = f, e = u, g = z, h = a.document, i = function(a) {
            g.call(this, a), this.contents = a.contents || "", this.styles = d({
                width: "100%",
                border: "none",
                overflow: "hidden"
            }, a.styles || {})
        };
        return d(i.prototype, g.prototype), i.prototype.load = function(a) {
            g.prototype.load.call(this);
            var b = this.elem, d = c(this.container) ? e.getContainer(this.container): this.container;
            d.appendChild(b), this.window = b.contentWindow;
            try {
                this.window.document.open()
            } catch (f) {
                b.src = 'javascript:var d=document.open();d.domain="' + h.domain + '";void(0);'
            }
            return this.document = this.window.document, this.document.write(this.contents), this.document.close(), this.updateHeight(), a && setTimeout(a, 0), this
        }, i.prototype.updateHeight = function() {
            var a = this.document.body;
            if (a) {
                var b = a.offsetHeight + "px";
                this.setInlineStyle({
                    height: b,
                    "min-height": b,
                    "max-height": b
                })
            }
        }, i.prototype.show = function() {
            this.setInlineStyle("display", "block"), this.updateHeight()
        }, i.prototype.click = function(a) {
            var b = this, c = b.document.body;
            c.addEventListener("click", function(c) {
                a.call(b, c)
            })
        }, i
    }({}), B = function(b) {
        var c = m, d = a.document.body;
        return function() {
            var a = d.offsetHeight, b = parseInt(c(d, "margin-top", "marginTop"), 10);
            b && (a += b);
            var e = parseInt(c(d, "margin-bottom", "marginBottom"), 10);
            return e && (a += e), a
        }
    }({}), C = function(b) {
        var c = f, d = Z, e = "default", g = {
            lounge: "http://disqus.com/embed/comments/",
            home: "https://disqus.com/home/".replace("home/", "")
        }, h = function(a, b) {
            return /^http/.test(b) || (b = "http:"), b + "//" + a.replace(/^\s*(\w+:)?\/\//, "")
        }, i = function(b, f, i) {
            var j = g[b];
            if (!j)
                throw new Error("Unknown app: " + b);
            var k = h(j, a.document.location.protocol), l = c({
                base: e
            }, f || {}), m = i ? "#" + encodeURIComponent(JSON.stringify(i)): "";
            return d(k, l) + m
        };
        return {
            BASE: e,
            apps: g,
            get: i,
            ensureHttpBasedProtocol: h
        }
    }({}), D = function(a) {
        var b = w, d = f, e = c, g = v, h = function(a) {
            this.uid = g("dsq-app"), this.settings = a || {};
            var b = [], c = this.constructor.prototype;
            do 
                b.unshift(c), c = c.constructor.__super__;
            while (c);
            for (var d = 0, f = b.length; f > d; d++)
                c = b[d], e(c, "events") && this.on(c.events, this), e(c, "onceEvents") && this.once(c.onceEvents, this)
        };
        return d(h.prototype, b), h.prototype.destroy = function() {
            this.off(), this.stopListening()
        }, h.extend = function(a, b) {
            var c, f = this;
            c = a && e(a, "constructor") ? a.constructor : function() {
                return f.apply(this, arguments)
            }, d(c, f, b);
            var g = function() {
                this.constructor = c
            };
            return g.prototype = f.prototype, c.prototype = new g, a && d(c.prototype, a), c.__super__ = f.prototype, c
        }, h
    }({}), E = function(a, b, c) {
        c || (c = 0);
        var d, e, f, g, h = 0, i = function() {
            h = new Date, f = null, g = a.apply(d, e)
        };
        return function() {
            var j = new Date, k = b - (j - h);
            return d = this, e = arguments, 0 >= k ? (clearTimeout(f), f = null, h = j, g = a.apply(d, e)) : f || (f = setTimeout(i, k + c)), g
        }
    }, _ = function(b) {
        var d = w, e = l, g = c, h = f, i = z, j = y, k = u, m = x, n = a.document;
        b.throttle = E, a.addEventListener("message", function(a) {
            var b;
            try {
                b = m.parse(a.data)
            } catch (c) {
                return 
            }
            var d = b.sender, e = g(j.windows, d) && j.windows[d];
            e && k.getHost(a.origin) === e.host && (a.origin !== e.origin && (e.origin = a.origin), "host" === b.scope && e.trigger(b.name, b.data))
        }), a.addEventListener("hashchange", function() {
            b.trigger("window.hashchange", {
                hash: a.location.hash
            })
        }), a.addEventListener("resize", b.throttle(function() {
            b.trigger("window.resize")
        }, 250, 50)), n.addEventListener("mousemove", b.throttle(function() {
            b.trigger("window.mousemove")
        }, 250, 50));
        var o = function() {
            b.trigger("window.scroll")
        };
        a.addEventListener("scroll", b.throttle(o, 250, 50), !1), n.addEventListener("click", function() {
            b.trigger("window.click")
        });
        var p = b.Popup = function(a) {
            a.uid = a.windowName, j.call(this, a)
        };
        h(p.prototype, j.prototype), p.prototype.load = function() {
            var b = this.window = a.open("", this.uid || "_blank");
            b.location = this.url()
        }, p.prototype.isKilled = function() {
            return j.prototype.isKilled() || this.window.closed
        };
        var q = b.Channel = function(a) {
            var b = this;
            b.window = null, i.call(b, a), this.insertBeforeEl = a.insertBeforeEl, this.insertAfterEl = a.insertAfterEl, b.styles = h({
                width: "1px",
                "min-width": "100%",
                border: "none",
                overflow: "hidden",
                height: "0"
            }, a.styles || {})
        };
        return h(q.prototype, i.prototype), q.prototype.load = function(a) {
            var b = this;
            i.prototype.load.call(b);
            var c = b.elem;
            c.setAttribute("width", "100%"), c.setAttribute("src", this.url()), c.addEventListener("load", function() {
                b.window = c.contentWindow, a && a()
            });
            var d = e(b.container) ? k.getContainer(b.container): b.container, f = (b.insertAfterEl ? b.insertAfterEl.nextSibling : b.insertBeforeEl) || null;
            d.insertBefore(c, f)
        }, q.prototype.destroy = function() {
            return this.window = null, i.prototype.destroy.call(this)
        }, b.on = d.on, b.off = d.off, b.trigger = d.trigger, b
    }(_), F = function() {
        var b = a.document, c = b.location.protocol;
        return c
    }(), G = function(b) {
        var c = f, d = C, e = D, g = _, h = F, i = a.document, j = e.extend({
            name: null,
            loaderVersion: null,
            frame: null,
            origin: d.ensureHttpBasedProtocol("https://disqus.com", h),
            state: null,
            getUrl: function(a, b) {
                return a = this.loaderVersion ? c({
                    version: this.loaderVersion
                }, a) : c({
                    disqus_version: this.settings.version
                }, a), d.ensureHttpBasedProtocol(d.get(this.name, a, b), h)
            },
            getFrameSettings: function() {
                var a = {
                    target: this.getUrl(),
                    origin: this.origin,
                    uid: this.uid
                }, b = this.settings;
                return b.windowName ? a.windowName = b.windowName : a.container = b.container || i.body, a
            },
            getFrame: function() {
                var a = this.getFrameSettings(), b = a.windowName ? g.Popup: g.Channel;
                return new b(a)
            },
            setState: function(a) {
                var b = this.constructor;
                return a in b.states ? (this.state = b.states[a], void this.trigger("state:" + a)) : !1
            },
            init: function() {
                var a, b = this;
                b.frame = a = this.getFrame(), b.listenTo(a, "all", function(c, d) {
                    b.trigger("frame:" + c, d, a)
                }), b.trigger("change:frame", a), b.frame.load(function() {
                    b.setState("LOADED")
                }), b.setState("INIT")
            },
            destroy: function() {
                var a = this.frame;
                a && (this.stopListening(a), a.destroy()), this.setState("KILLED"), this.frame = null, e.prototype.destroy.call(this)
            },
            events: {
                "frame:ready": function() {
                    this.setState("READY")
                }
            }
        }, {
            states: {
                INIT: 0,
                LOADED: 1,
                READY: 2,
                RUNNING: 3,
                KILLED: 4
            }
        });
        return j
    }({}), H = function(b) {
        var c = m, d = B, e = s, f = G, g = _, h = F, i = p, j = a.document, k = j.querySelector("html"), l = f.extend({
            getUrl: function() {
                var b = this.settings, c = {
                    f: b.forum,
                    t_i: b.identifier,
                    t_u: b.url || a.location.href,
                    t_s: b.slug,
                    t_e: b.title,
                    t_d: b.documentTitle,
                    t_t: b.title || b.documentTitle,
                    t_c: b.category,
                    s_o: b.sortOrder,
                    l: b.language
                };
                return b.unsupported && (c.n_s = b.unsupported), f.prototype.getUrl.call(this, c)
            },
            getFrameInitParams: function(b) {
                var c = this.settings, d = {
                    permalink: c.permalink,
                    anchorColor: c.anchorColor,
                    referrer: a.location.href,
                    hostReferrer: j.referrer,
                    canonicalUrl: c.canonicalUrl,
                    colorScheme: c.colorScheme,
                    typeface: c.typeface,
                    remoteAuthS3: c.remoteAuthS3,
                    apiKey: c.apiKey,
                    sso: c.sso,
                    parentWindowHash: a.location.hash,
                    forceAutoStyles: c.forceAutoStyles,
                    forceMobile: c.forceMobile,
                    layout: c.layout,
                    version: c.version,
                    timestamp: this.timestamp,
                    embedLoadTime: this.getBootloaderTimingInfo(),
                    isHeightRestricted: this.isHeightRestricted()
                };
                return d.initialPosition = this.getViewportAndScrollStatus(), d
            },
            listenToScrollEvent: function(a) {
                var b = this, c = b.getScrollContainer();
                if (c === k)
                    return b.listenTo(g, "window.scroll", a), function() {
                        b.stopListening(g, "window.scroll", a)
                    };
                var d = g.throttle(function() {
                    a.call(b)
                }, 250, 50);
                return c.addEventListener("scroll", d), function() {
                    c.removeEventListener("scroll", d)
                }
            },
            getScrollContainer: function() {
                if (this.scrollContainer)
                    return this.scrollContainer;
                if (!this.settings.enableScrollContainer)
                    return k;
                var a = this.settings.container;
                do {
                    var b = c(a, "overflow-y", "overflowY");
                    if (("scroll" === b || "auto" === b) && a.clientHeight < a.scrollHeight)
                        break;
                    a = a.parentNode
                }
                while (a && a !== k);
                return a && a !== j.body || (a = k), this.scrollContainer = a
            },
            getViewportCoords: function() {
                return this.getScrollContainer() === k ? this.getWindowCoords() : this.getScrollContainerCoords()
            },
            getWindowCoords: function() {
                if ("number" == typeof a.pageYOffset)
                    this.getWindowScroll = function() {
                        return a.pageYOffset
                    }, this.getWindowHeight = function() {
                        return a.innerHeight
                    };
                else {
                    var b = k.clientHeight || k.clientWidth ? k: j.body;
                    this.getWindowScroll = function() {
                        return b.scrollTop
                    }, this.getWindowHeight = function() {
                        return b.clientHeight
                    }
                }
                return this.getWindowCoords = function() {
                    return {
                        top: this.getWindowScroll(),
                        height: this.getWindowHeight()
                    }
                }, this.getWindowCoords()
            },
            getScrollContainerCoords: function() {
                var a = this.getScrollContainer();
                return {
                    top: a.scrollTop,
                    height: a.clientHeight
                }
            },
            getBootloaderTimingInfo: function() {
                if (a.performance && a.performance.getEntriesByName) {
                    var b = j.currentScript ? j.currentScript.src: h + "//" + this.settings.forum + ".disqus.com/embed.js", c = a.performance.getEntriesByName(b)[0];
                    return c && c.duration
                }
            },
            getViewportAndScrollStatus: function() {
                var a = this.frame;
                if (!a ||!a.getOffset)
                    return null;
                if (!e(a.elem))
                    return null;
                var b = this.getViewportCoords();
                return {
                    frameOffset: a.getOffset(this.getScrollContainer()),
                    pageOffset: b.top,
                    height: b.height
                }
            },
            communicateViewportAndScrollStatus: function() {
                var a = this.getViewportAndScrollStatus();
                if (a) {
                    var b = a.frameOffset, c = b.top, d = c + b.height, e = a.pageOffset, f = a.height, g = e + f, h=!1, i=!1;
                    g + f >= c && (h = d >= e, i = h && g >= c);
                    var j = this.frame;
                    j.sendMessage("window.scroll.always", a), h && j.sendMessage("window.scroll", a), i !== this.wasInViewport && (j.sendMessage(i ? "window.inViewport" : "window.scrollOffViewport"), this.wasInViewport = i)
                }
            },
            getBestNextFrameHeight: function(a) {
                var b = this.getViewportAndScrollStatus();
                if (!b || this.settings.enableScrollContainer ||!this.getScrollContainer())
                    return a;
                var c = b.frameOffset;
                if (a >= c.height)
                    return a;
                var e = d(), f = e - (c.height + c.top), g = b.pageOffset + b.height - (c.top + f);
                return g > a ? g + 1 : a
            },
            isHeightRestricted: function(a) {
                function b() {
                    return i.appearsToHideContent(d) || f && i.appearsToHideContent(e)
                }
                function c() {
                    return i.appearsToHideContent(d) && i.hasOverflow(d) || f && i.appearsToHideContent(e) && i.hasOverflow(e)
                }
                a = a || {};
                var d = this.settings.container, e = d.parentNode, f = e !== k && e !== j.body;
                return a.checkScrollHeight ? c() : b()
            },
            events: {
                "state:INIT": function() {
                    this.settings.unsupported || (this.settings.windowName || (this.listenToScrollEvent(this.communicateViewportAndScrollStatus), this.listenTo(g, "window.resize", this.communicateViewportAndScrollStatus)), this.timestamp = Number(new Date))
                },
                "state:LOADED": function() {
                    var a = this.frame, b = a.elem;
                    this.settings.unsupported ? (a.setInlineStyle("height", "500px"), b.setAttribute("scrolling", "yes"), b.setAttribute("horizontalscrolling", "no"), b.setAttribute("verticalscrolling", "yes"), a.show()) : this.settings.windowName || (this.rendered=!1, a.setInlineStyle("height", "0"), b.setAttribute("scrolling", "no"), b.setAttribute("horizontalscrolling", "no"), b.setAttribute("verticalscrolling", "no"))
                },
                "frame:ready": function(a, b) {
                    var c = this.getFrameInitParams(a, b);
                    b.sendMessage("init", c)
                },
                "frame:resize": function(a, b) {
                    var c = a.height;
                    b.elem && this.rendered && (c = this.getBestNextFrameHeight(c), b.setInlineStyle("height", c + "px"), b.sendMessage("embed.resized")), this.communicateViewportAndScrollStatus()
                },
                "frame:rendered": function(a, b) {
                    this.rendered=!0, this.wasInViewport=!1, b.trigger("resize", a), b.sendMessage("embed.rendered")
                },
                "frame:fail": function(a, b) {
                    b.elem && b.setInlineStyle("height", a && a.height || "75px")
                },
                "frame:scrollTo": function(b, c) {
                    if (c.elem && c.getOffset) {
                        var d = this.getScrollContainer(), e = c.getOffset(d), f = "window" === b.relative ? b.top: e.top + b.top, g = this.getViewportCoords();
                        !b.force && f > g.top && f < g.top + g.height || (d === k ? a.scrollTo(0, f) : d.scrollTop = f)
                    }
                }
            }
        });
        return l
    }({}), I = function(b) {
        var c = m, d = Z, e = p, f = C, g = G, h = a.document, i = /^calc\((.+)\)$/, j = g.extend({
            name: "home",
            events: {
                "frame:close": function(b, c) {
                    c.hide(), a.focus()
                },
                "frame:openReady": function() {
                    this.frame.show(), this.frame.sendMessage("open"), (e.browser.isIE() || e.browser.isSafari()) && this.preventScrolling()
                },
                "state:LOADED": function() {
                    this.frame.removeInlineStyle("visibility")
                },
                "frame:after:render": function() {
                    e.browser.isSafari() && this.triggerHostReflow()
                }
            },
            preventScrolling: function() {
                var a = this.getBodyOverflow(), b = h.body.style.marginRight, d = h.documentElement.style, e = d.overflow;
                this.listenToOnce(this, "frame:close", function() {
                    this.setBodyStyles({
                        overflow: a,
                        marginRight: b
                    }), d.overflow = e
                }), this.setBodyStyles({
                    overflow: "hidden",
                    marginRight: this.calcMargin(c(h.body, "margin-right", "marginRight") || b)
                }), d.overflow = "hidden"
            },
            triggerHostReflow: function() {
                var a = h.createElement("style");
                h.body.appendChild(a), h.body.removeChild(a)
            },
            calcMargin: function(a) {
                var b = a.match(i);
                return b && (a = b[1]), a ? "calc(" + a + " + " + e.getScrollbarWidth() + "px)" : e.getScrollbarWidth() + "px"
            },
            setBodyStyles: function(a) {
                for (var b in a)
                    h.body.style[b] = a[b]
            },
            getBodyOverflow: function() {
                return h.body.style.overflow
            },
            getSecureOrigin: function() {
                var a = f.ensureHttpBasedProtocol(j.SECURE_HOME_URL, "https:"), b = a.split("/"), c = b[0], d = b[2];
                return c + "//" + d
            },
            getFrameSettings: function() {
                var a = g.prototype.getFrameSettings.call(this);
                return a.role = "dialog", a.origin = this.getSecureOrigin(), a.styles = {
                    height: "100%",
                    position: "fixed",
                    top: 0,
                    right: 0,
                    left: "auto",
                    bottom: "auto",
                    "z-index": e.MAX_Z_INDEX,
                    visibility: "hidden"
                }, a
            },
            getUrl: function() {
                var a = this.settings.path || "", b = this.settings.language, c = {
                    utm_source: "disqus_embed"
                };
                return b && "en" !== b && (c.l = b), d(f.apps[this.name] + a, c)
            },
            show: function(a) {
                if (!this.frame.isReady())
                    return void this.once("frame:ready", function() {
                    this.show(a)
                }, this);
                var b = {
                    disableMOTD: this.settings.disableMOTD,
                    path: a
                };
                this.settings.sso && (b.sso = this.settings.sso), this.frame.sendMessage("showPath", b)
            }
        }, {
            SECURE_HOME_URL: "https://disqus.com/home/",
            READY_TIMEOUT: 1e4,
            getInstanceOrLoad: function(a) {
                var b = j.instance;
                return b ? b : (b = j.instance = new j(a), a.preload && b.listenToOnce(b, "state:INIT", function() {
                    b.frame.hide()
                }), j.setHomeTimeout(b), b.init(), b)
            },
            setHomeTimeout: function(a) {
                j.homeTimeoutId && clearTimeout(j.homeTimeoutId);
                var b = j.homeTimeoutId = setTimeout(function() {
                    a.frame.destroy(), a.trigger("timeout")
                }, j.READY_TIMEOUT);
                a.listenToOnce(a, "state:READY", function() {
                    clearTimeout(b)
                })
            },
            preload: function(a) {
                return a.preload=!0, j.getInstanceOrLoad(a)
            },
            destroy: function() {
                var a = j.instance;
                a && (a.destroy(), j.instance = null)
            },
            show: function(a) {
                var b = j.getInstanceOrLoad(a);
                return b.show(a.path), b
            }
        });
        return {
            show: j.show,
            preload: j.preload,
            destroy: j.destroy,
            HomeApp: j
        }
    }({}), J = function(b) {
        var c = a.document, e = d, g = $, i = f, j = s, k = t, l = h, m = A, n = u, o = H, q = _, v = r, w = p, x = I, y = o.extend({
            name: "lounge",
            loaderVersion: l.getLoaderVersionFromUrl("https://a.disquscdn.com/next/embed/lounge.load.ad354e715491ccebd881b7e86f44a85c.js"),
            indicators: null,
            wasInViewport: !1,
            triggeredSlowEvent: !1,
            events: {
                "state:INIT": function() {
                    var a = this.settings, b = a.server_side;
                    b && "fallback" === b.service && l.logStat("embed.fallback"), a.unsupported || (this.indicators = {},
                    this.isContainerVisible() ? this.addLoadingAnim() : this.addLoadingAnimOnContainerVisible(), this.bindPublisherCallbacks(), this.forwardGlobalEvents())
                },
                "state:LOADED": function() {
                    this.isContainerVisible() && this.addLoadingAnim()
                },
                "frame:reload": function() {
                    a.location.reload()
                },
                "frame:navigate": function(b) {
                    a.location.href = b
                },
                "frame:session.identify": function(a) {
                    this.trigger("session.identify", a)
                },
                "frame:posts.paginate": function() {
                    this.trigger("posts.paginate")
                },
                "frame:posts.count": function(a) {
                    this.trigger("posts.count", a)
                },
                "frame:posts.create": function(a) {
                    this.trigger("posts.create", {
                        id: a.id,
                        text: a.raw_message
                    })
                },
                "frame:posts.beforeCreate": function(a) {
                    this.onBeforePostCreate(a)
                },
                "frame:home.destroy": function() {
                    this.destroyHome()
                },
                "frame:home.preload": function(a) {
                    this.preloadHome(a)
                },
                "frame:home.show": function(a) {
                    this.showHome(a)
                },
                "frame:home.open": function(b) {
                    a.location = b
                },
                "frame:indicator:init": function(a, b) {
                    if (b.getOffset) {
                        for (var c, d, e = ["north", "south"], f = this.indicators, g = b.getOffset().width + "px", h = {
                            width: g,
                            "min-width": g,
                            "max-width": g,
                            position: "fixed",
                            "z-index": w.MAX_Z_INDEX - 1
                        }, j = {
                            north: {
                                top: "0"
                            },
                            south: {
                                bottom: "0"
                            }
                        }, k = function() {
                            b.sendMessage("indicator:click", this.uid.split("-")[1])
                        }, l = 0; l < e.length; l++) {
                            d = e[l], c = new m({
                                uid: "indicator-" + d,
                                container: this.settings.container,
                                contents: a[d].contents,
                                styles: i(j[d], h),
                                role: "alert",
                                type: d
                            });
                            try {
                                c.load()
                            } catch (n) {
                                continue
                            }
                            c.hide(), c.click(k), f[d] = c
                        }
                        this.on({
                            "frame:indicator:show": function(a) {
                                var b = f[a.type];
                                b && (b.document.getElementById("message").innerHTML = a.content, b.show())
                            },
                            "frame:indicator:hide": function(a) {
                                var b = a && a.type, c = b && f[b];
                                if (c)
                                    c.hide();
                                else if (!b)
                                    for (var d = 0; d < e.length; d++)
                                        b = e[d], c = f[b], c && c.hide()
                            }
                        })
                    }
                },
                "frame:change:sort": function(a) {
                    w.storage.setItem("disqus.sort", a)
                },
                "frame:fail frame:rendered": function() {
                    this.removeLoadingAnim(), this.setState("RUNNING")
                },
                "frame:fail": function(a) {
                    l.logStat("failed_embed.server." + a.code)
                },
                "frame:rendered": function() {
                    this.triggeredSlowEvent && l.logStat("rendered_embed.slow")
                }
            },
            onceEvents: {
                "frame:viglink:init": function(b, c) {
                    var d = function() {
                        for (var b in a)
                            if (0 === b.indexOf("skimlinks") || 0 === b.indexOf("skimwords"))
                                return !0;
                        return !1
                    };
                    if (!(a.vglnk_self || a.vglnk || d())) {
                        var e = b.apiUrl, f = b.key, h = String(b.id);
                        null != b.clientUrl && null != e && null != f && null != b.id && (this.listenForAffiliationRequests(e, f, h), DISQUS.vglnk = {
                            api_url: e,
                            key: f,
                            sub_id: h,
                            onlibready: function() {
                                c.sendMessage("viglink:change:timeout", {
                                    timeout: DISQUS.vglnk.opt("click_timeout")
                                })
                            }
                        }, a.vglnk_self = "DISQUS.vglnk", g(b.clientUrl))
                    }
                }
            },
            getFrameInitParams: function(a, b) {
                var c = o.prototype.getFrameInitParams.call(this, a, b);
                return c.experiment = {
                    experiment: this.settings.experimentName,
                    variant: this.settings.experimentVariant,
                    service: this.settings.experimentService
                }, c.isBehindClick = this.isHeightRestricted() ||!j(b.elem), c.startedFullyVisible=!1, this.whenFullyVisible(function() {
                    c.startedFullyVisible=!0, b.sendMessage("frame.visible", {})
                }), c.discovery = this.settings.discovery, c.isHostIframed = this.settings.isHostIframed, c.inthreadMinimumCommentCount = this.settings.inthreadMinimumCommentCount, c.inthreadShowAfterComment = this.settings.inthreadShowAfterComment, c.inthreadPlacementUrl = this.settings.inthreadPlacementUrl, c.inthreadLeadingCommentCount = this.settings.inthreadLeadingCommentCount, c.inthreadRepeatCommentCount = this.settings.inthreadRepeatCommentCount, c.inthreadTrailingCommentCount = this.settings.inthreadTrailingCommentCount, c.inthreadCountChildren = this.settings.inthreadCountChildren, c.inthreadMultipleAds = this.settings.inthreadMultipleAds, this.settings.impressionId && (c.impressionId = this.settings.impressionId), (this.settings.discoveryDisabled || this.settings.isHostIframed) && (c.discoveryDisabled=!0), c
            },
            onBeforePostCreate: function(a) {
                var b = {
                    text: a.raw_message
                };
                try {
                    var c = this.settings.callbacks.beforeComment;
                    if (c)
                        for (var d = 0; d < c.length; d++)
                            b = c[d](b)
                } catch (e) {
                    v.log("Error processing Disqus callback: ", e.toString())
                } finally {
                    this.frame.sendMessage("posts.beforeCreate.response", b && b.text)
                }
            },
            destroyHome: function() {
                x.destroy()
            },
            preloadHome: function(a) {
                a.path = "home/preload/";
                var b = this.home = x.preload(this.getHomeData(a));
                this.listenToOnce(b, "frame:ready", function() {
                    this.frame.sendMessage("home.ready")
                }), this.handleHomeTimeout(b)
            },
            handleHomeTimeout: function(a) {
                this.listenTo(a, "timeout", function() {
                    this.frame.sendMessage("home.timeout")
                })
            },
            showHome: function(a) {
                var b = this.home = x.show(this.getHomeData(a));
                this.listenToOnce(b, "frame:openReady", function() {
                    this.frame.sendMessage("home.opened")
                }), this.handleHomeTimeout(b)
            },
            getHomeData: function(a) {
                var b = this.settings;
                return a.language || (a.language = b.language), b.apiKey && b.remoteAuthS3 && (a.sso = {
                    apiKey: b.apiKey,
                    remoteAuthS3: b.remoteAuthS3
                }), a
            },
            listenForAffiliationRequests: function(a, b, c) {
                var d = this.frame;
                this.on("frame:viglink:getaffiliatelink", function(e) {
                    function f(a) {
                        return function(b) {
                            var c = {
                                linkId: a
                            };
                            b && (c.url = b), d.sendMessage("viglink:getaffiliatelink:response", c)
                        }
                    }
                    var g = DISQUS.vglnk.$;
                    return g ? void g.request(a + "/click", {
                        format : "jsonp", out : e.url, key : b, loc : d.target, subId : c
                    }, {
                        fn: f(e.linkId),
                        timeout: DISQUS.vglnk.opt("click_timeout")
                    }) : void d.sendMessage("viglink:getaffiliatelink:response")
                })
            }, forwardGlobalEvents : function() {
                var a = this;
                a.settings.windowName || (a.listenTo(q, "window.resize", function() {
                    a.frame.sendMessage("window.resize")
                }), a.listenTo(q, "window.click", function() {
                    a.frame.sendMessage("window.click")
                }), a.listenTo(q, "window.mousemove", function() {
                    a.frame.sendMessage("window.mousemove")
                })), a.listenTo(q, "window.hashchange", function(b) {
                    a.frame.sendMessage("window.hashchange", b.hash)
                })
            }, bindPublisherCallbacks: function() {
                var a = this, b = a.settings, c = y.LEGACY_EVENTS_MAPPING, d = b.callbacks;
                d && e(d, function(b, d) {
                    c[d] && e(b, function(b) {
                        a.on(c[d], b)
                    })
                })
            }, isContainerVisible: function() {
                var a = this.getViewportCoords(), b = n.getOffset(this.settings.container, this.getScrollContainer()), c = b.top + b.height - a.top;
                return c > 0 && c <= a.height
            }, pollFullyVisible: function() {
                if (!this.pollingFullVisibility) {
                    this.pollingFullVisibility=!0;
                    var a = this.isHeightRestricted(), b = {}, c = this;
                    k(function() {
                        return c.frame && c.frame.elem ? a&&!c.rendered?!1 : j(c.frame.elem)&&!c.isHeightRestricted({
                            checkScrollHeight: !0
                        }) : b
                    }, function(a) {
                        a !== b && (c.fullyVisible=!0, c.trigger("fullyVisible"))
                    }, this.constructor.VISIBILITY_POLL_INTERVAL)
                }
            }, whenFullyVisible: function(a) {
                this.pollFullyVisible(), this.fullyVisible ? a() : this.once("fullyVisible", a)
            }, showSlowLoadingMessage: function() {
                var a, b = this;
                if (b.loadingElem) {
                    if (w.pageVisibility.isHidden())
                        return a = function() {
                            w.pageVisibility.stopListening(a), b.setSlowLoadingMessageTimer(2e3)
                        }, void w.pageVisibility.listen(a);
                    b.triggeredSlowEvent=!0, b.state === b.constructor.states.READY ? l.logStat("slow_embed.got_ready") : b.state === b.constructor.states.LOADED ? l.logStat("slow_embed.loaded") : l.logStat("slow_embed.no_ready"), b.loadingElem.firstChild.insertAdjacentHTML("afterend", '<p align="center">Disqus seems to be taking longer than usual. <a href="#" onclick="DISQUS.reset({reload: true}); return false;">Reload</a>?</p>')
                }
            }, clearSlowLoadingMessageTimer: function() {
                this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }, setSlowLoadingMessageTimer: function(a) {
                var b = this;
                b.clearSlowLoadingMessageTimer(), b.timeout = setTimeout(function() {
                    b.showSlowLoadingMessage()
                }, a)
            }, addLoadingAnimOnContainerVisible: function() {
                var a, b = this;
                a = b.listenToScrollEvent(function() {
                    var c = b.isContainerVisible();
                    (c || b.state >= b.constructor.states.RUNNING) && a(), c && b.addLoadingAnim()
                })
            }, addLoadingAnim: function() {
                var a, b, d, e = this, f = e.settings.container;
                if (e.loadingElem)
                    return e.loadingElem;
                if (!(e.state >= e.constructor.states.RUNNING)) {
                    var g = c.createElement("link");
                    g.rel = "stylesheet", g.href = "https://a.disquscdn.com/next/embed/styles/loading.88cedde79846569c88b36b63a7cc7414.css", c.head.appendChild(g), a = c.createElement("div"), b = c.createElement("div"), d = c.createElement("div"), b.appendChild(d), a.appendChild(b), a.dir = "ltr", a.style.overflow = "hidden";
                    var h = "dark" === e.settings.colorScheme;
                    b.className = "disqus-loader-bubble";
                    var i = b.style;
                    i.height = "52px", i.width = "54px", i.margin = "0 auto", i.overflow = "hidden", i.position = "relative", h && (i.backgroundPosition = "0 -52px");
                    var j = 13, k = h ? "rgba(223, 228, 237, .4)": "rgba(51, 54, 58, .4)", m = h ? "#6D6F72": "#A3A7AD", n = d.style;
                    return i.boxSizing = n.boxSizing = "border-box", n.height = n.width = 2 * j + "px", n.position = "absolute", n.top = "13px", n.left = "15px", "borderRadius"in n ? (n.borderWidth = "3px", n.borderStyle = "solid", n.borderColor = k + " transparent", n.borderRadius = j + "px", n.transformOrigin = "50% 50% 0px", d.className = "disqus-loader-spinner") : n.borderLeft = "3px solid " + m, f.appendChild(a), e.loadingElem = a, l.logStat("lounge.loading.view"), e.setSlowLoadingMessageTimer(15e3), e.loadingElem
                }
            }, removeLoadingAnim: function() {
                var a = this.loadingElem, b = this.settings.container;
                this.clearSlowLoadingMessageTimer(), a && a.parentNode === b && (b.removeChild(a), this.loadingElem = null)
            }, destroy: function() {
                var a = this.indicators;
                this.removeLoadingAnim(), a && a.north && (a.north.destroy(), a.north = null), a && a.south && (a.south.destroy(), a.south = null), o.prototype.destroy.call(this)
            }
        }, {
            LEGACY_EVENTS_MAPPING: {
                onReady: "frame:rendered",
                onNewComment: "posts.create",
                onPaginate: "posts.paginate",
                onCommentCountChange: "posts.count",
                onIdentify: "session.identify"
            }
        }, {
            VISIBILITY_POLL_INTERVAL: 500
        }), z = function(a) {
            return new y(a)
        };
        return {
            Lounge: z
        }
    }({}), K = function(a, b, c) {
        var d, e, f, g, h, i = function() {
            var j = (new Date).getTime() - g;
            b > j && j >= 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null)))
        };
        return function() {
            f = this, e = arguments, g = (new Date).getTime();
            var j = c&&!d;
            return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h
        }
    }, L = function(a, b) {
        for (var c = 0; c < a.length; ++c)
            if (a[c] === b)
                return c;
        return - 1
    }, M = function(a, b, c) {
        for (var d = 0; d < a.length; ++d)
            if (b.call(c, a[d], d, a))
                return !0;
        return !1
    }, N = function(a) {
        return "[object Function]" === Object.prototype.toString.call(a)
    }, O = function(a) {
        return function(b, c, d) {
            var e = null === b || void 0 === b ? void 0 : b[c];
            return void 0 === e && (e = d), a(e) ? e.call(b) : e
        }
    }(N), P = function(a) {
        return Boolean(a && 1 === a.nodeType)
    }, aa = function(a, b, c) {
        return a.getElement = function(a) {
            return b(a) ? a : a && a.el
        }, a.EL_ID_ATTR = "data-visibility-id", a.OBJ_ID_PROP = "_visibility_id", a.getId = function(d) {
            var e = null;
            return b(d) ? (e = d.getAttribute(a.EL_ID_ATTR) || null, e || (e = c(), d.setAttribute(a.EL_ID_ATTR, e))) : d && (e = d[a.OBJ_ID_PROP] || null, e || (e = d[a.OBJ_ID_PROP] = c())), e
        }, a.visiblePercent = function(a, b) {
            var c = 0;
            if (!b)
                return c;
            var d = a.top, e = d + a.height, f = b.visibleTop < d, g = b.visibleBottom > e;
            return !f&&!g || f && g ? c = 1 : f ? c = (b.height - (d - b.visibleTop)) / b.height : g && (c = (e - b.visibleTop) / b.height), Math.round(100 * c)
        }, a
    }(aa, P, v), ba = function(c, d, e, f, g, h) {
        return h.events = [], h.lastPos = null, h.clearCache = function(a) {
            if (a === b)
                h.getElementOffset.cache = {};
            else {
                var c = g.getId(a);
                c && (h.getElementOffset.cache[c] = null)
            }
        }, h.calculateOffset = function(b) {
            if (!b)
                return null;
            if (!e(b))
                return null;
            var c = b.ownerDocument.documentElement;
            return {
                height: b.offsetHeight,
                top: b.getBoundingClientRect().top + a.pageYOffset - (c.clientTop || 0)
            }
        }, h._getElementOffset = function(a) {
            var b = g.getElement(a);
            if (!b)
                return null;
            var c = h.calculateOffset(b);
            return c ? {
                visibleTop: c.top + (f(a, "topEdgeOffset") || 0),
                visibleBottom: c.top + c.height - (f(a, "bottomEdgeOffset") || 0),
                offsetTop: c.top,
                height: c.height
            } : null
        }, h.getElementOffset = function() {
            var a = function(b) {
                var c = a.cache, d = g.getId(b);
                if (d && c[d])
                    return c[d];
                var e = h._getElementOffset(b);
                return d && e && (c[d] = e), e
            };
            return a.cache = {}, a
        }(), h.EVENT_NAMES = ["enter", "exit", "visible", "invisible", "all"], h.updateTracking = function(a) {
            var e, f = function(a) {
                return a ? function(b) {
                    return a[b]
                } : function() {
                    return b
                }
            };
            d(h.EVENT_NAMES, f(a._events)) ? (e = c(h.events, a), - 1 === e && h.events.push(a)) : (e = c(h.events, a), - 1 !== e && h.events.splice(e, 1))
        }, h.processEvents = function(a) {
            h.lastPos = a;
            var b = h.events;
            if (b.length)
                for (var c = b.length - 1; c >= 0; --c) {
                    var d = b[c], e = d.isVisible(a);
                    null !== e && (e !== d.lastVisible && d.trigger(e ? "enter" : "exit", d, a), d.trigger(e ? "visible" : "invisible", d, a), d.lastVisible = e)
                }
        }, h
    }(L, M, s, O, aa, ba), Q = function(b, c, d, e, f) {
        function g(a) {
            return this instanceof g ? (this.obj = a, void(this.lastVisible=!1)) : new g(a)
        }
        var h = c(function() {
            f.processEvents(f.lastPos)
        }, 250);
        return e(g.prototype, b, {
            on: function(a) {
                var c=!(this._events && this._events[a]), d = b.on.apply(this, arguments);
                return c && f.updateTracking(this), h(), d
            },
            off: function(a) {
                var c = b.off.apply(this, arguments);
                return this._events && this._events[a] || f.updateTracking(this), c
            },
            offset: function() {
                return f.getElementOffset(this.obj)
            },
            isVisible: function(a) {
                if (a = a || f.lastPos, !a)
                    return null;
                var b = a.top, c = b + a.height, d = this.offset();
                return d ? d.offsetTop >= b && d.visibleTop < c || d.offsetTop + d.height <= c && d.visibleBottom > b : !1
            },
            invalidate: function() {
                return f.clearCache(this.obj), this
            }
        }), e(g, {
            invalidate: f.clearCache,
            scroll: f.processEvents,
            _windowScrollHandlerBound: !1,
            _ignoreCache: !1,
            _windowScrollHandler: d(function() {
                g._ignoreCache && g.invalidate(), f.processEvents({
                    top: a.pageYOffset,
                    height: a.document.documentElement.clientHeight
                })
            }, 250),
            bindWindowEvents: function(b) {
                this._windowScrollHandlerBound || ("undefined" != typeof b && (g._ignoreCache = b), a.addEventListener("scroll", this._windowScrollHandler), a.addEventListener("resize", this._windowScrollHandler), this._windowScrollHandlerBound=!0, this._windowScrollHandler())
            },
            unbindWindowEvents: function() {
                g._ignoreCache=!1, a.removeEventListener("scroll", this._windowScrollHandler), a.removeEventListener("resize", this._windowScrollHandler), this._windowScrollHandlerBound=!1
            }
        }), g
    }(w, K, E, f, ba), R = function(a) {
        return a
    }(Q), ca = function(a) {
        return a = function(a, b) {
            var c = null, d=!1;
            this.start = function() {
                d || (c = setTimeout(function() {
                    d=!0, a()
                }, b))
            }, this.clear = function() {
                clearTimeout(c)
            }
        }
    }(ca), S = function() {
        function a(a) {
            if (a = Number(a), isNaN(a) || a > 255)
                throw new Error("Color components should be numbers less than 256");
            return a = a.toString(16), 1 === a.length ? "0" + a : String(a)
        }
        return function(b) {
            return "#" + a(b.red) + a(b.green) + a(b.blue)
        }
    }(), T = function(b) {
        return function(c) {
            "undefined" == typeof c && (c = a.location.search);
            var d = {};
            return b(c.substr(1).split("&"), function(a) {
                var b = a.split("=").map(function(a) {
                    return decodeURIComponent(a.replace(/\+/g, "%20"))
                });
                b[0] && (d[b[0]] = b[1])
            }), d
        }
    }(d), U = function() {
        var b = {}, c = a.document.createElement("a");
        return b.getOrigin = function(a) {
            c.href = a;
            var b = c.href.split("/");
            return b[0] + "//" + b[2]
        }, b.getHostName = function(a) {
            return c.href = a, c.hostname
        }, b.getDomainPart = function(a, c) {
            "undefined" == typeof c && (c = 0);
            var d = b.getHostName(a), e = d.split(".").reverse();
            return e[c]
        }, b.getQuery = function(a) {
            return c.href = a, c.search
        }, b.getPathname = function(a) {
            return c.href = a, c.pathname
        }, b
    }(), V = function(c) {
        var d = C, e = G, g = x, i = Q, j = aa, k = ca, l = S, m = f, n = T, o = Z, p = U.getOrigin, q = U.getQuery, r = h, s = y, t = {
            adsnative: 160465,
            prebid: 160465,
            displayonly: 160465,
            gravity: 184723,
            taboola: 184193,
            outbrain: 185359
        }, u = e.extend({
            name: "ads",
            origin: b,
            onceEvents: {
                "view:enter": function() {
                    this._report({
                        verb: "view",
                        adverb: "0ms-no50perc"
                    })
                },
                "view:iab": function() {
                    this._report({
                        verb: "view",
                        adverb: "iab-scroll"
                    })
                }
            },
            events: {
                "frame:ready": function(a) {
                    this.forumId = a.forumId, this._reportOnce({
                        verb: "load",
                        extra_data: a.extraData
                    }, "load"), this.bindViewEvents()
                },
                "frame:resize": function(a) {
                    this.frame.setInlineStyle("height", a.height + "px")
                },
                "frame:click": function() {
                    this._reportOnce({
                        verb: "click"
                    }, "click")
                },
                "frame:error-provider-not-ready": function() {
                    this._report({
                        verb: "fail",
                        object_type: "provider",
                        object_id: this.getProvider(),
                        adverb: "provider_not_ready"
                    })
                },
                "frame:error-no-height": function() {
                    this._report({
                        verb: "fail",
                        object_type: "provider",
                        object_id: this.getProvider(),
                        adverb: "no_height"
                    })
                }
            },
            constructor: function() {
                e.apply(this, arguments), this.origin = p(this.settings.adUrl), this._reportOnceHistory = {}
            },
            init: function() {
                if (!this.settings.isHostIframed && (this.settings.forum = n(q(this.settings.adUrl)).shortname, this.settings.forum)) {
                    var b = this.settings.discovery, c = 0 === a.location.href.indexOf(d.apps.home);
                    (c ||!b ||!b.disable_all&&!b.disable_promoted) && (this._reportOnce({
                        verb: "call",
                        object_type: "provider",
                        object_id: this.getProvider(),
                        adjective: 1
                    }, "call"), e.prototype.init.call(this))
                }
            },
            getProvider: function() {
                if (this._provider)
                    return this._provider;
                var a = this.settings.adUrl.match(/provider=(\w+)/);
                return a && (this._provider = a[1]), this._provider
            },
            getUrl: function() {
                var b = this.settings;
                return o(b.adUrl, {
                    anchorColor: l(b.anchorColor),
                    colorScheme: b.colorScheme,
                    sourceUrl: a.document.location.href,
                    typeface: b.typeface,
                    canonicalUrl: b.canonicalUrl,
                    disqus_version: b.version
                })
            },
            bindViewEvents: function() {
                if (!this._viewEventsBound) {
                    this._viewEventsBound=!0, i.bindWindowEvents(!0);
                    var a = this, b = function(b, c) {
                        a.postMessageDirect({
                            event: b,
                            percentViewable: c
                        })
                    }, c = 1e3, d = new k(function() {
                        a.trigger("view:iab"), b("view:iab")
                    }, c), e=!1;
                    this.listenTo(i({
                        el: this.frame.elem
                    }), {
                        enter: function() {
                            a.trigger("view:enter"), b("view:enter")
                        },
                        exit: function() {
                            b("view:exit"), e && (e=!1, b("view:50out"), d.clear())
                        },
                        visible: function(a, c) {
                            var f = j.visiblePercent(c, a.offset());
                            f >= 50&&!e ? (e=!0, b("view:50in"), d.start()) : 50 > f && e && (e=!1, b("view:50out"), d.clear()), b("view", f)
                        }
                    })
                }
            },
            postMessageDirect: function(a) {
                this.frame.requiresWindow(function(a) {
                    var b = g.stringify(m({}, a, {
                        space: "disqus"
                    }));
                    s.postMessage(this.window, b, this.origin), s.postMessage(this.window, "disqus." + a.event, this.origin)
                })(a)
            },
            _report: function(b) {
                var c = this.settings, d = this.getProvider(), e = t[d];
                b.forum_id = c.forumId || this.forumId, r.reportJester(m({
                    imp: c.impressionId,
                    experiment: c.experimentName,
                    variant: c.experimentVariant,
                    service: c.experimentService,
                    bin: "embed:promoted_discovery:" + c.experimentService + ":" + c.experimentName + ":" + c.experimentVariant,
                    area: c.placement,
                    product: "embed",
                    forum: c.forum,
                    zone: "thread",
                    version: r.getLoaderVersionFromUrl("https://a.disquscdn.com/next/embed/lounge.load.ad354e715491ccebd881b7e86f44a85c.js"),
                    page_url: a.document.location.href,
                    page_referrer: a.document.referrer,
                    object_type: "advertisement",
                    object_id: "[" + e + "]",
                    provider: d,
                    advertisement_id: e,
                    ad_product_name: "iab_display",
                    ad_product_layout: "iab_display",
                    event: "activity",
                    section: "default"
                }, b))
            },
            _reportOnce: function(a, b) {
                this._reportOnceHistory[b] || (this._report(a), this._reportOnceHistory[b]=!0)
            },
            getFrameSettings: function() {
                var a = e.prototype.getFrameSettings.call(this);
                return a.insertBeforeEl = this.settings.insertBeforeEl, a.insertAfterEl = this.settings.insertAfterEl, a
            }
        }), v = function(a) {
            return new u(a)
        };
        return {
            Ads: v
        }
    }({}), W = function(a) {
        var b = U, c = C, d = G, e = A, f = _, g = F, h = d.extend({
            events: {
                "frame:resize": function(a) {
                    var b = a.height + "px";
                    this.frame.setInlineStyle({
                        height: b,
                        "min-height": b,
                        "max-height": b
                    })
                }
            },
            getFrameSettings: function() {
                var a = {
                    container: this.settings.container,
                    contents: this.settings.engageLiteHTML
                }, d = this.settings.engageLiteURL;
                return d && (d = c.ensureHttpBasedProtocol(d, g), a.origin = b.getOrigin(d), a.target = d), a
            },
            getFrame: function() {
                var a = this.getFrameSettings(), b = a.target ? f.Channel: e;
                return new b(a)
            }
        }), i = function(a) {
            return new h(a)
        };
        return i
    }({}), da = function(b) {
        var c = e, d = f, i = g, j = h, k = q.HostConfig, l = r, m = J, n = V, o = W, p = new k(a);
        b.configAdapter = p;
        var s = [], t=!1, u = c(a), v = b.removeDisqusLink = function() {
            var b = a.document;
            if (b.getElementsByClassName) {
                if ("complete" !== b.readyState)
                    return a.addEventListener("load", v);
                var c = b.getElementsByClassName("dsq-brlink"), d = c && c.length && c[0];
                d && d.parentNode.removeChild(d)
            }
        };
        b.VERSION = "62f36fc", b.loadEmbed = function(a) {
            if (s.length)
                return x({
                    reload: !0
                }), l.log("Use DISQUS.reset instead of reloading embed.js please."), void l.log("See https://help.disqus.com/customer/portal/articles/472107-using-disqus-on-ajax-sites");
            p.configurator = a;
            var c = p.toJSON();
            c.version = b.VERSION, t || (c.container.innerHTML = "", t=!0), b.loadApps(c), b.removeDisqusLink()
        };
        var w = function(a) {
            var b = m.Lounge(d({}, a, {
                discoveryDisabled: a.topPlacementUrl || a.bottomPlacementUrl,
                isHostIframed: u
            }));
            s.push(b), b.init();
            var c = function(a) {
                b.whenFullyVisible(a)
            }, e = null;
            if (a.topPlacementUrl && (e = n.Ads(d({
                adUrl: a.topPlacementUrl,
                placement: "top"
            }, a, {
                isHostIframed: u,
                insertBeforeEl: b.frame.elem
            })), s.push(e), c(function() {
                e.init()
            })), a.bottomPlacementUrl) {
                var f = n.Ads(d({
                    adUrl: a.bottomPlacementUrl,
                    placement: "bottom"
                }, a, {
                    isHostIframed: u,
                    insertAfterEl: b.frame.elem
                }));
                s.push(f), c(function() {
                    null === e ? f.init() : f.listenToOnce(e, "frame:ready", function() {
                        f.init()
                    })
                })
            }
        };
        b.loadApps = function(a) {
            var b = a.engageLiteURL;
            if (b && (b = b.replace(/__disqus_identifier__/g, encodeURIComponent(a.identifier || "")).replace(/__disqus_url__/g, encodeURIComponent(a.url || ""))), a.engageLiteHTML || b) {
                var c = new o(d({}, a, {
                    engageLiteURL: b
                }));
                s.push(c), c.init(), c.on("frame:click", i(function() {
                    c.destroy(), w(a)
                }))
            } else 
                w(a)
        };
        var x = b.reset = function(a) {
            a = a || {};
            for (var c = s.pop(); c;)
                c.triggeredSlowEvent && c.state !== c.constructor.states.RUNNING && j.logStat("reset_embed.slow"), c.destroy(), c = s.pop();
            a.reload && b.loadEmbed(a.config)
        };
        return b
    }(da), X = function(b) {
        var c = a.DISQUS || {}, d = $;
        c.reset || (c.reset = da.reset), c.request || (c.request = {}), c.request.get || (c.request.get = function(a, b, c) {
            d(a, b, c)
        }), c.host || (c.host = {}), c.host._loadEmbed || (c.host._loadEmbed = da.loadEmbed), a.DISQUS = c
    }({})
}(this), this.DISQUS.host._loadEmbed();
