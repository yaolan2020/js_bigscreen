!
    function(a, b) {
        "object" == typeof exports && "object" == typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? exports.cyberplayer = b() : a.cyberplayer = b()
    } (this,
        function() {
            return function(a) {
                function b(c) {
                    if (d[c]) return d[c].exports;
                    var e = d[c] = {
                        exports: {},
                        id: c,
                        loaded: !1
                    };
                    return a[c].call(e.exports, e, e.exports, b),
                        e.loaded = !0,
                        e.exports
                }
                var c = window.webpackJsonpcyberplayer;
                window.webpackJsonpcyberplayer = function(d, f) {
                    for (var g, h, i = 0,
                             j = []; i < d.length; i++) h = d[i],
                    e[h] && j.push.apply(j, e[h]),
                        e[h] = 0;
                    for (g in f) a[g] = f[g];
                    for (c && c(d, f); j.length;) j.shift().call(null, b)
                };
                var d = {},
                    e = {
                        0 : 0
                    };
                return b.e = function(a, c) {
                    if (0 === e[a]) return c.call(null, b);
                    if (void 0 !== e[a]) e[a].push(c);
                    else {
                        e[a] = [c];
                        var d = document.getElementsByTagName("head")[0],
                            f = document.createElement("script");
                        f.type = "text/javascript",
                            f.charset = "utf-8",
                            f.async = !0,
                            f.src = b.p + "" + ({
                                    1 : "flv"
                                } [a] || a) + ".js",
                            d.appendChild(f)
                    }
                },
                    b.m = a,
                    b.c = d,
                    b.p = "",
                    b(0)
            } ([function(a, b, c) {
                c(36),
                    c(35),
                    c(37),
                    a.exports = c(108)
            },
                function(a, b, c) {
                    var d, e;
                    d = [],
                    void 0 !== (e = function() {
                        var a = {},
                            b = Array.prototype,
                            c = Object.prototype,
                            d = Function.prototype,
                            e = b.slice,
                            f = b.concat,
                            g = c.toString,
                            h = c.hasOwnProperty,
                            i = b.map,
                            j = b.reduce,
                            k = b.forEach,
                            l = b.filter,
                            m = b.every,
                            n = b.some,
                            o = b.indexOf,
                            p = Array.isArray,
                            q = Object.keys,
                            r = d.bind,
                            s = function z(a) {
                                return a instanceof z ? a: this instanceof z ? void 0 : new z(a)
                            },
                            t = s.each = s.forEach = function(b, c, d) {
                                if (null == b) return b;
                                if (k && b.forEach === k) b.forEach(c, d);
                                else if (b.length === +b.length) {
                                    for (var e = 0,
                                             f = b.length; e < f; e++) if (c.call(d, b[e], e, b) === a) return
                                } else for (var g = s.keys(b), e = 0, f = g.length; e < f; e++) if (c.call(d, b[g[e]], g[e], b) === a) return;
                                return b
                            };
                        s.map = s.collect = function(a, b, c) {
                            var d = [];
                            return null == a ? d: i && a.map === i ? a.map(b, c) : (t(a,
                                function(a, e, f) {
                                    d.push(b.call(c, a, e, f))
                                }), d)
                        };
                        s.reduce = s.foldl = s.inject = function(a, b, c, d) {
                            var e = arguments.length > 2;
                            if (null == a && (a = []), j && a.reduce === j) return d && (b = s.bind(b, d)),
                                e ? a.reduce(b, c) : a.reduce(b);
                            if (t(a,
                                    function(a, f, g) {
                                        e ? c = b.call(d, c, a, f, g) : (c = a, e = !0)
                                    }), !e) throw new TypeError("Reduce of empty array with no initial value");
                            return c
                        },
                            s.find = s.detect = function(a, b, c) {
                                var d;
                                return u(a,
                                    function(a, e, f) {
                                        if (b.call(c, a, e, f)) return d = a,
                                            !0
                                    }),
                                    d
                            },
                            s.filter = s.select = function(a, b, c) {
                                var d = [];
                                return null == a ? d: l && a.filter === l ? a.filter(b, c) : (t(a,
                                    function(a, e, f) {
                                        b.call(c, a, e, f) && d.push(a)
                                    }), d)
                            },
                            s.reject = function(a, b, c) {
                                return s.filter(a,
                                    function(a, d, e) {
                                        return ! b.call(c, a, d, e)
                                    },
                                    c)
                            },
                            s.compact = function(a) {
                                return s.filter(a, s.identity)
                            },
                            s.every = s.all = function(b, c, d) {
                                c || (c = s.identity);
                                var e = !0;
                                return null == b ? e: m && b.every === m ? b.every(c, d) : (t(b,
                                    function(b, f, g) {
                                        if (! (e = e && c.call(d, b, f, g))) return a
                                    }), !!e)
                            };
                        var u = s.some = s.any = function(b, c, d) {
                            c || (c = s.identity);
                            var e = !1;
                            return null == b ? e: n && b.some === n ? b.some(c, d) : (t(b,
                                function(b, f, g) {
                                    if (e || (e = c.call(d, b, f, g))) return a
                                }), !!e)
                        };
                        s.size = function(a) {
                            return null == a ? 0 : a.length === +a.length ? a.length: s.keys(a).length
                        },
                            s.last = function(a, b, c) {
                                if (null != a) return null == b || c ? a[a.length - 1] : e.call(a, Math.max(a.length - b, 0))
                            },
                            s.after = function(a, b) {
                                return function() {
                                    if (--a < 1) return b.apply(this, arguments)
                                }
                            },
                            s.before = function(a, b) {
                                var c;
                                return function() {
                                    return--a > 0 && (c = b.apply(this, arguments)),
                                    a <= 1 && (b = null),
                                        c
                                }
                            };
                        var v = function(a) {
                                return null == a ? s.identity: s.isFunction(a) ? a: s.property(a)
                            },
                            w = function(a) {
                                return function(b, c, d) {
                                    var e = {};
                                    return c = v(c),
                                        t(b,
                                            function(f, g) {
                                                var h = c.call(d, f, g, b);
                                                a(e, h, f)
                                            }),
                                        e
                                }
                            };
                        s.groupBy = w(function(a, b, c) {
                            s.has(a, b) ? a[b].push(c) : a[b] = [c]
                        }),
                            s.indexBy = w(function(a, b, c) {
                                a[b] = c
                            }),
                            s.sortedIndex = function(a, b, c, d) {
                                c = v(c);
                                for (var e = c.call(d, b), f = 0, g = a.length; f < g;) {
                                    var h = f + g >>> 1;
                                    c.call(d, a[h]) < e ? f = h + 1 : g = h
                                }
                                return f
                            };
                        var u = s.some = s.any = function(b, c, d) {
                            c || (c = s.identity);
                            var e = !1;
                            return null == b ? e: n && b.some === n ? b.some(c, d) : (t(b,
                                function(b, f, g) {
                                    if (e || (e = c.call(d, b, f, g))) return a
                                }), !!e)
                        };
                        s.contains = s.include = function(a, b) {
                            return null != a && (a.length !== +a.length && (a = s.values(a)), s.indexOf(a, b) >= 0)
                        },
                            s.pluck = function(a, b) {
                                return s.map(a, s.property(b))
                            },
                            s.where = function(a, b) {
                                return s.filter(a, s.matches(b))
                            },
                            s.findWhere = function(a, b) {
                                return s.find(a, s.matches(b))
                            },
                            s.max = function(a, b, c) {
                                if (!b && s.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.max.apply(Math, a);
                                var d = -1 / 0,
                                    e = -1 / 0;
                                return t(a,
                                    function(a, f, g) {
                                        var h = b ? b.call(c, a, f, g) : a;
                                        h > e && (d = a, e = h)
                                    }),
                                    d
                            },
                            s.difference = function(a) {
                                var c = f.apply(b, e.call(arguments, 1));
                                return s.filter(a,
                                    function(a) {
                                        return ! s.contains(c, a)
                                    })
                            },
                            s.without = function(a) {
                                return s.difference(a, e.call(arguments, 1))
                            },
                            s.indexOf = function(a, b, c) {
                                if (null == a) return - 1;
                                var d = 0,
                                    e = a.length;
                                if (c) {
                                    if ("number" != typeof c) return d = s.sortedIndex(a, b),
                                        a[d] === b ? d: -1;
                                    d = c < 0 ? Math.max(0, e + c) : c
                                }
                                if (o && a.indexOf === o) return a.indexOf(b, c);
                                for (; d < e; d++) if (a[d] === b) return d;
                                return - 1
                            };
                        var x = function() {};
                        s.bind = function(a, b) {
                            var c, d;
                            if (r && a.bind === r) return r.apply(a, e.call(arguments, 1));
                            if (!s.isFunction(a)) throw new TypeError;
                            return c = e.call(arguments, 2),
                                d = function() {
                                    if (! (this instanceof d)) return a.apply(b, c.concat(e.call(arguments)));
                                    x.prototype = a.prototype;
                                    var f = new x;
                                    x.prototype = null;
                                    var g = a.apply(f, c.concat(e.call(arguments)));
                                    return Object(g) === g ? g: f
                                }
                        },
                            s.partial = function(a) {
                                var b = e.call(arguments, 1);
                                return function() {
                                    for (var c = 0,
                                             d = b.slice(), e = 0, f = d.length; e < f; e++) d[e] === s && (d[e] = arguments[c++]);
                                    for (; c < arguments.length;) d.push(arguments[c++]);
                                    return a.apply(this, d)
                                }
                            },
                            s.once = s.partial(s.before, 2),
                            s.memoize = function(a, b) {
                                var c = {};
                                return b || (b = s.identity),
                                    function() {
                                        var d = b.apply(this, arguments);
                                        return s.has(c, d) ? c[d] : c[d] = a.apply(this, arguments)
                                    }
                            },
                            s.delay = function(a, b) {
                                var c = e.call(arguments, 2);
                                return setTimeout(function() {
                                        return a.apply(null, c)
                                    },
                                    b)
                            },
                            s.defer = function(a) {
                                return s.delay.apply(s, [a, 1].concat(e.call(arguments, 1)))
                            },
                            s.throttle = function(a, b, c) {
                                var d, e, f, g = null,
                                    h = 0;
                                c || (c = {});
                                var i = function() {
                                    h = !1 === c.leading ? 0 : s.now(),
                                        g = null,
                                        f = a.apply(d, e),
                                        d = e = null
                                };
                                return function() {
                                    var j = s.now();
                                    h || !1 !== c.leading || (h = j);
                                    var k = b - (j - h);
                                    return d = this,
                                        e = arguments,
                                        k <= 0 ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e), d = e = null) : g || !1 === c.trailing || (g = setTimeout(i, k)),
                                        f
                                }
                            },
                            s.keys = function(a) {
                                if (!s.isObject(a)) return [];
                                if (q) return q(a);
                                var b = [];
                                for (var c in a) s.has(a, c) && b.push(c);
                                return b
                            },
                            s.invert = function(a) {
                                for (var b = {},
                                         c = s.keys(a), d = 0, e = c.length; d < e; d++) b[a[c[d]]] = c[d];
                                return b
                            },
                            s.defaults = function(a) {
                                return t(e.call(arguments, 1),
                                    function(b) {
                                        if (b) for (var c in b) void 0 === a[c] && (a[c] = b[c])
                                    }),
                                    a
                            },
                            s.extend = function(a) {
                                return t(e.call(arguments, 1),
                                    function(b) {
                                        if (b) for (var c in b) a[c] = b[c]
                                    }),
                                    a
                            },
                            s.pick = function(a) {
                                var c = {},
                                    d = f.apply(b, e.call(arguments, 1));
                                return t(d,
                                    function(b) {
                                        b in a && (c[b] = a[b])
                                    }),
                                    c
                            },
                            s.omit = function(a) {
                                var c = {},
                                    d = f.apply(b, e.call(arguments, 1));
                                for (var g in a) s.contains(d, g) || (c[g] = a[g]);
                                return c
                            },
                            s.clone = function(a) {
                                return s.isObject(a) ? s.isArray(a) ? a.slice() : s.extend({},
                                    a) : a
                            },
                            s.isArray = p ||
                                function(a) {
                                    return "[object Array]" == g.call(a)
                                },
                            s.isObject = function(a) {
                                return a === Object(a)
                            },
                            t(["Arguments", "Function", "String", "Number", "Date", "RegExp"],
                                function(a) {
                                    s["is" + a] = function(b) {
                                        return g.call(b) == "[object " + a + "]"
                                    }
                                }),
                        s.isArguments(arguments) || (s.isArguments = function(a) {
                            return ! (!a || !s.has(a, "callee"))
                        }),
                            s.isFunction = function(a) {
                                return "function" == typeof a
                            },
                            s.isFinite = function(a) {
                                return isFinite(a) && !isNaN(parseFloat(a))
                            },
                            s.isNaN = function(a) {
                                return s.isNumber(a) && a != +a
                            },
                            s.isBoolean = function(a) {
                                return ! 0 === a || !1 === a || "[object Boolean]" == g.call(a)
                            },
                            s.isNull = function(a) {
                                return null === a
                            },
                            s.isUndefined = function(a) {
                                return void 0 === a
                            },
                            s.has = function(a, b) {
                                return h.call(a, b)
                            },
                            s.identity = function(a) {
                                return a
                            },
                            s.constant = function(a) {
                                return function() {
                                    return a
                                }
                            },
                            s.property = function(a) {
                                return function(b) {
                                    return b[a]
                                }
                            },
                            s.propertyOf = function(a) {
                                return null == a ?
                                    function() {}: function(b) {
                                        return a[b]
                                    }
                            },
                            s.matches = function(a) {
                                return function(b) {
                                    if (b === a) return ! 0;
                                    for (var c in a) if (a[c] !== b[c]) return ! 1;
                                    return ! 0
                                }
                            },
                            s.now = Date.now ||
                                function() {
                                    return (new Date).getTime()
                                },
                            s.result = function(a, b) {
                                if (null != a) {
                                    var c = a[b];
                                    return s.isFunction(c) ? c.call(a) : c
                                }
                            };
                        var y = 0;
                        return s.uniqueId = function(a) {
                            var b = ++y + "";
                            return a ? a + b: b
                        },
                            s
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e, f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function(a) {
                            return typeof a
                        }: function(a) {
                            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol": typeof a
                        };
                    d = [c(8), c(1), c(63), c(27), c(15), c(40), c(65), c(62), c(42), c(122), c(125), c(123)],
                    void 0 !== (e = function(a, b, c, d, e, g, h, i, j, k, l, m) {
                        var n = {};
                        return n.log = function() {
                            window.console && ("object" === f(console.log) ? console.log(Array.prototype.slice.call(arguments, 0)) : console.log.apply(console, arguments))
                        },
                            n.between = function(a, b, c) {
                                return Math.max(Math.min(a, c), b)
                            },
                            n.foreach = function(a, b) {
                                var c, d;
                                for (c in a)"function" === n.typeOf(a.hasOwnProperty) ? a.hasOwnProperty(c) && (d = a[c], b(c, d)) : (d = a[c], b(c, d))
                            },
                            n.indexOf = b.indexOf,
                            n.noop = function() {},
                            n.seconds = a.seconds,
                            n.prefix = a.prefix,
                            n.suffix = a.suffix,
                            b.extend(n, g, h, j, c, i, d, e, k, l, m),
                            n
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e, f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function(a) {
                            return typeof a
                        }: function(a) {
                            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol": typeof a
                        };
                    d = [c(1)],
                    void 0 !== (e = function(a) {
                        var b = [],
                            c = b.slice,
                            d = {
                                on: function(a, b, c) {
                                    return g(this, "on", a, [b, c]) && b ? (this._events || (this._events = {}), (this._events[a] || (this._events[a] = [])).push({
                                        callback: b,
                                        context: c
                                    }), this) : this
                                },
                                once: function(b, c, d) {
                                    if (!g(this, "once", b, [c, d]) || !c) return this;
                                    var e = this,
                                        f = a.once(function() {
                                            e.off(b, f),
                                                c.apply(this, arguments)
                                        });
                                    return f._callback = c,
                                        this.on(b, f, d)
                                },
                                off: function(b, c, d) {
                                    var e, f, h, i, j, k, l, m;
                                    if (!this._events || !g(this, "off", b, [c, d])) return this;
                                    if (!b && !c && !d) return this._events = void 0,
                                        this;
                                    for (i = b ? [b] : a.keys(this._events), j = 0, k = i.length; j < k; j++) if (b = i[j], h = this._events[b]) {
                                        if (this._events[b] = e = [], c || d) for (l = 0, m = h.length; l < m; l++) f = h[l],
                                        (c && c !== f.callback && c !== f.callback._callback || d && d !== f.context) && e.push(f);
                                        e.length || delete this._events[b]
                                    }
                                    return this
                                },
                                trigger: function(a) {
                                    if (!this._events) return this;
                                    var b = c.call(arguments, 1);
                                    if (!g(this, "trigger", a, b)) return this;
                                    var d = this._events[a],
                                        e = this._events.all;
                                    return d && h(d, b, this),
                                    e && h(e, arguments, this),
                                        this
                                },
                                triggerSafe: function(a) {
                                    if (!this._events) return this;
                                    var b = c.call(arguments, 1);
                                    if (!g(this, "trigger", a, b)) return this;
                                    var d = this._events[a],
                                        e = this._events.all;
                                    return d && i(d, b, this),
                                    e && i(e, arguments, this),
                                        this
                                }
                            },
                            e = /\s+/,
                            g = function(a, b, c, d) {
                                if (!c) return ! 0;
                                if ("object" === (void 0 === c ? "undefined": f(c))) {
                                    for (var g in c) a[b].apply(a, [g, c[g]].concat(d));
                                    return ! 1
                                }
                                if (e.test(c)) {
                                    for (var h = c.split(e), i = 0, j = h.length; i < j; i++) a[b].apply(a, [h[i]].concat(d));
                                    return ! 1
                                }
                                return ! 0
                            },
                            h = function(a, b, c) {
                                var d, e = -1,
                                    f = a.length,
                                    g = b[0],
                                    h = b[1],
                                    i = b[2];
                                switch (b.length) {
                                    case 0:
                                        for (; ++e < f;)(d = a[e]).callback.call(d.context || c);
                                        return;
                                    case 1:
                                        for (; ++e < f;)(d = a[e]).callback.call(d.context || c, g);
                                        return;
                                    case 2:
                                        for (; ++e < f;)(d = a[e]).callback.call(d.context || c, g, h);
                                        return;
                                    case 3:
                                        for (; ++e < f;)(d = a[e]).callback.call(d.context || c, g, h, i);
                                        return;
                                    default:
                                        for (; ++e < f;)(d = a[e]).callback.apply(d.context || c, b);
                                        return
                                }
                            },
                            i = function(a, b, c) {
                                for (var d, e = -1,
                                         f = a.length; ++e < f;) try { (d = a[e]).callback.apply(d.context || c, b)
                                } catch(g) {}
                            };
                        return d
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [],
                    void 0 !== (e = function() {
                        var a = {
                                DRAG: "drag",
                                DRAG_START: "dragStart",
                                DRAG_END: "dragEnd",
                                CLICK: "click",
                                DOUBLE_CLICK: "doubleClick",
                                TAP: "tap",
                                DOUBLE_TAP: "doubleTap",
                                OVER: "over",
                                MOVE: "move",
                                OUT: "out"
                            },
                            b = {
                                COMPLETE: "complete",
                                ERROR: "error",
                                JWPLAYER_AD_CLICK: "adClick",
                                JWPLAYER_AD_COMPANIONS: "adCompanions",
                                JWPLAYER_AD_COMPLETE: "adComplete",
                                JWPLAYER_AD_ERROR: "adError",
                                JWPLAYER_AD_IMPRESSION: "adImpression",
                                JWPLAYER_AD_META: "adMeta",
                                JWPLAYER_AD_PAUSE: "adPause",
                                JWPLAYER_AD_PLAY: "adPlay",
                                JWPLAYER_AD_SKIPPED: "adSkipped",
                                JWPLAYER_AD_TIME: "adTime",
                                JWPLAYER_CAST_AD_CHANGED: "castAdChanged",
                                JWPLAYER_MEDIA_COMPLETE: "complete",
                                JWPLAYER_READY: "ready",
                                JWPLAYER_MEDIA_SEEK: "seek",
                                JWPLAYER_MEDIA_BEFOREPLAY: "beforePlay",
                                JWPLAYER_MEDIA_BEFORECOMPLETE: "beforeComplete",
                                JWPLAYER_MEDIA_BUFFER_FULL: "bufferFull",
                                JWPLAYER_DISPLAY_CLICK: "displayClick",
                                JWPLAYER_PLAYLIST_COMPLETE: "playlistComplete",
                                JWPLAYER_CAST_SESSION: "cast",
                                JWPLAYER_MEDIA_ERROR: "mediaError",
                                JWPLAYER_MEDIA_FIRST_FRAME: "firstFrame",
                                JWPLAYER_MEDIA_PLAY_ATTEMPT: "playAttempt",
                                JWPLAYER_MEDIA_LOADED: "loaded",
                                JWPLAYER_MEDIA_SEEKED: "seeked",
                                JWPLAYER_SETUP_ERROR: "setupError",
                                JWPLAYER_ERROR: "error",
                                JWPLAYER_PLAYER_STATE: "state",
                                JWPLAYER_CAST_AVAILABLE: "castAvailable",
                                JWPLAYER_MEDIA_BUFFER: "bufferChange",
                                JWPLAYER_MEDIA_TIME: "time",
                                JWPLAYER_MEDIA_TYPE: "mediaType",
                                JWPLAYER_MEDIA_VOLUME: "volume",
                                JWPLAYER_MEDIA_MUTE: "mute",
                                JWPLAYER_MEDIA_META: "meta",
                                JWPLAYER_MEDIA_LEVELS: "levels",
                                JWPLAYER_MEDIA_LEVEL_CHANGED: "levelsChanged",
                                JWPLAYER_CONTROLS: "controls",
                                JWPLAYER_FULLSCREEN: "fullscreen",
                                JWPLAYER_RESIZE: "resize",
                                JWPLAYER_PLAYLIST_ITEM: "playlistItem",
                                JWPLAYER_PLAYLIST_LOADED: "playlist",
                                JWPLAYER_AUDIO_TRACKS: "audioTracks",
                                JWPLAYER_AUDIO_TRACK_CHANGED: "audioTrackChanged",
                                JWPLAYER_CONNECTING: "connecting",
                                JWPLAYER_CONNECT_FAILD: "connectFaild",
                                JWPLAYER_NO_LIVE_STREAM: "noLiveStream",
                                JWPLAYER_ALIVE: "alive",
                                JWPLAYER_LIVE_STOP: "liveStop",
                                JWPLAYER_PLAYBACKRATE: "playbackRate",
                                JWPLAYER_LOGO_CLICK: "logoClick",
                                JWPLAYER_CAPTIONS_LIST: "captionsList",
                                JWPLAYER_CAPTIONS_CHANGED: "captionsChanged",
                                JWPLAYER_PROVIDER_CHANGED: "providerChanged",
                                JWPLAYER_PROVIDER_FIRST_FRAME: "providerFirstFrame",
                                JWPLAYER_USER_ACTION: "userAction",
                                JWPLAYER_PROVIDER_CLICK: "providerClick",
                                JWPLAYER_VIEW_TAB_FOCUS: "tabFocus",
                                JWPLAYER_CONTROLBAR_DRAGGING: "scrubbing",
                                JWPLAYER_INSTREAM_CLICK: "instreamClick",
                                JWPLAYER_CUEPOINT: "cuepoint",
                                JWPLAYER_SEEK_FORWARD_FORBIDDEN: "seekForwardForbidden"
                            };
                        return b.touchEvents = a,
                            b
                    }.apply(b, d)) && (a.exports = e)
                },
                , ,
                function(a, b, c) {
                    var d, e;
                    d = [],
                    void 0 !== (e = function() {
                        return {
                            BUFFERING: "buffering",
                            IDLE: "idle",
                            COMPLETE: "complete",
                            PAUSED: "paused",
                            PLAYING: "playing",
                            ERROR: "error",
                            LOADING: "loading",
                            STALLED: "stalled"
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(1)],
                    void 0 !== (e = function(a) {
                        function b(a) {
                            return !! /[\(,]format=m3u8-/i.test(a) && "m3u8"
                        }
                        var c = function(a) {
                                return a.replace(/^\s+|\s+$/g, "")
                            },
                            d = function(a, b, c) {
                                for (a = "" + a, c = c || "0"; a.length < b;) a = c + a;
                                return a
                            },
                            e = function(a, b) {
                                for (var c = 0; c < a.attributes.length; c++) if (a.attributes[c].name && a.attributes[c].name.toLowerCase() === b.toLowerCase()) return a.attributes[c].value.toString();
                                return ""
                            },
                            f = function(a) {
                                if (!a || "rtmp" === a.substr(0, 4)) return "";
                                var c = b(a);
                                return c || (a = a.split("?")[0].split("#")[0], a.lastIndexOf(".") > -1 ? a.substr(a.lastIndexOf(".") + 1, a.length).toLowerCase() : void 0)
                            },
                            g = function(a) {
                                var b = parseInt(a / 3600),
                                    c = parseInt(a / 60) % 60,
                                    e = a % 60;
                                return d(b, 2) + ":" + d(c, 2) + ":" + d(e.toFixed(3), 6)
                            },
                            h = function(b) {
                                if (a.isNumber(b)) return b;
                                b = b.replace(",", ".");
                                var c = b.split(":"),
                                    d = 0;
                                return "s" === b.slice( - 1) ? d = parseFloat(b) : "m" === b.slice( - 1) ? d = 60 * parseFloat(b) : "h" === b.slice( - 1) ? d = 3600 * parseFloat(b) : c.length > 1 ? (d = parseFloat(c[c.length - 1]), d += 60 * parseFloat(c[c.length - 2]), 3 === c.length && (d += 3600 * parseFloat(c[c.length - 3]))) : d = parseFloat(b),
                                    d
                            },
                            i = function(b, c) {
                                return a.map(b,
                                    function(a) {
                                        return c + a
                                    })
                            };
                        return {
                            trim: c,
                            pad: d,
                            xmlAttribute: e,
                            extension: f,
                            hms: g,
                            seconds: h,
                            suffix: function(b, c) {
                                return a.map(b,
                                    function(a) {
                                        return a + c
                                    })
                            },
                            prefix: i
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(3), c(4), c(1), c(2)],
                    void 0 !== (e = function(a, b, c, d) {
                        function e(a, b) {
                            return /touch/.test(a.type) ? (a.originalEvent || a).changedTouches[0]["page" + b] : a["page" + b]
                        }
                        function f(a) {
                            var b = a || window.event;
                            return !! (d.isPoorIE() || a instanceof MouseEvent) && ("which" in b ? 3 === b.which: "button" in b && 2 === b.button)
                        }
                        function g(a, b, c) {
                            var e;
                            e = !d.isPoorIE() && b instanceof MouseEvent || !b.touches && !b.changedTouches ? b: b.touches && b.touches.length ? b.touches[0] : b.changedTouches[0];
                            var f = document.documentElement.scrollLeft || document.body.scrollLeft,
                                g = document.documentElement.scrollTop || document.body.scrollTop;
                            return {
                                type: a,
                                target: b.target || b.srcElement,
                                currentTarget: c,
                                pageX: e.pageX || e.clientX + f,
                                pageY: e.pageY || e.clientY + g
                            }
                        }
                        function h(a) { (d.isPoorIE() || a instanceof MouseEvent || a instanceof window.TouchEvent) && (a.preventManipulation && a.preventManipulation(), a.cancelable && a.preventDefault && a.preventDefault())
                        }
                        var i = !c.isUndefined(window.PointerEvent),
                            j = !i && d.isMobile(),
                            k = !i && !j,
                            l = d.isFF() && d.isOSX(),
                            m = function(a, j) {
                                function m(a) { (k || i && "touch" !== a.pointerType) && s(b.touchEvents.OVER, a)
                                }
                                function n(a) { (k || i && "touch" !== a.pointerType) && s(b.touchEvents.MOVE, a)
                                }
                                function o(c) { (k || i && "touch" !== c.pointerType && !a.contains(document.elementFromPoint(c.x, c.y))) && s(b.touchEvents.OUT, c)
                                }
                                function p(b) {
                                    t = b.target,
                                        x = e(b, "X"),
                                        y = e(b, "Y"),
                                    f(b) || (i ? b.isPrimary && (j.preventScrolling && (u = b.pointerId, a.setPointerCapture(u)), d.addEventListener(a, "pointermove", q), d.addEventListener(a, "pointercancel", r), d.addEventListener(a, "pointerup", r)) : k && (d.addEventListener(document, "mousemove", q), l && "object" === b.target.nodeName.toLowerCase() ? d.addEventListener(a, "click", r) : d.addEventListener(document, "mouseup", r)), t && (d.addEventListener(t, "touchmove", q), d.addEventListener(t, "touchcancel", r), d.addEventListener(t, "touchend", r)))
                                }
                                function q(a) {
                                    var c = b.touchEvents;
                                    if (w) s(c.DRAG, a);
                                    else {
                                        var d = e(a, "X"),
                                            f = e(a, "Y"),
                                            g = d - x,
                                            i = f - y;
                                        g * g + i * i > 36 && (s(c.DRAG_START, a), w = !0, s(c.DRAG, a))
                                    }
                                    j.preventScrolling && h(a)
                                }
                                function r(c) {
                                    var e = b.touchEvents;
                                    i ? (j.preventScrolling && a.releasePointerCapture(u), d.removeEventListener(a, "pointermove", q), d.removeEventListener(a, "pointercancel", r), d.removeEventListener(a, "pointerup", r)) : k && (d.removeEventListener(document, "mousemove", q), d.removeEventListener(document, "mouseup", r)),
                                    t && (d.removeEventListener(t, "touchmove", q), d.removeEventListener(t, "touchcancel", r), d.removeEventListener(t, "touchend", r)),
                                        w ? s(e.DRAG_END, c) : j.directSelect && c.target !== a || -1 !== c.type.indexOf("cancel") || (i && c instanceof window.PointerEvent ? "touch" === c.pointerType ? s(e.TAP, c) : s(e.CLICK, c) : k ? s(e.CLICK, c) : (s(e.TAP, c), h(c))),
                                        t = null,
                                        w = !1
                                }
                                function s(a, d) {
                                    var e;
                                    if (j.enableDoubleTap && (a === b.touchEvents.CLICK || a === b.touchEvents.TAP)) if (c.now() - z < A) {
                                        var f = a === b.touchEvents.CLICK ? b.touchEvents.DOUBLE_CLICK: b.touchEvents.DOUBLE_TAP;
                                        e = g(f, d, v),
                                            B.trigger(f, e),
                                            z = 0
                                    } else z = c.now();
                                    e = g(a, d, v),
                                        B.trigger(a, e)
                                }
                                var t, u, v = a,
                                    w = !1,
                                    x = 0,
                                    y = 0,
                                    z = 0,
                                    A = 300;
                                j = j || {},
                                    i ? (d.addEventListener(a, "pointerdown", p), j.useHover && (d.addEventListener(a, "pointerover", m), d.addEventListener(a, "pointerout", o)), j.useMove && d.addEventListener(a, "pointermove", n)) : k && (d.addEventListener(a, "mousedown", p), j.useHover && (d.addEventListener(a, "mouseover", m), d.addEventListener(a, "mouseout", o)), j.useMove && d.addEventListener(a, "mousemove", n)),
                                    d.addEventListener(a, "touchstart", p);
                                var B = this;
                                return this.triggerEvent = s,
                                    this.destroy = function() {
                                        d.removeEventListener(a, "touchstart", p),
                                            d.removeEventListener(a, "mousedown", p),
                                        t && (d.removeEventListener(t, "touchmove", q), d.removeEventListener(t, "touchcancel", r), d.removeEventListener(t, "touchend", r)),
                                        i && (j.preventScrolling && a.releasePointerCapture(u), d.removeEventListener(a, "pointerover", m), d.removeEventListener(a, "pointerdown", p), d.removeEventListener(a, "pointermove", q), d.removeEventListener(a, "pointermove", n), d.removeEventListener(a, "pointercancel", r), d.removeEventListener(a, "pointerout", o), d.removeEventListener(a, "pointerup", r)),
                                            d.removeEventListener(a, "click", r),
                                            d.removeEventListener(a, "mouseover", m),
                                            d.removeEventListener(a, "mousemove", n),
                                            d.removeEventListener(a, "mouseout", o),
                                            d.removeEventListener(document, "mousemove", q),
                                            d.removeEventListener(document, "mouseup", r)
                                    },
                                    this
                            };
                        return c.extend(m.prototype, a),
                            m
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    a.exports = c(149)["default"]
                },
                , ,
                function(a, b) {
                    "use strict";
                    function c(a) {
                        return k[a]
                    }
                    function d(a) {
                        for (var b = 1; b < arguments.length; b++) for (var c in arguments[b]) Object.prototype.hasOwnProperty.call(arguments[b], c) && (a[c] = arguments[b][c]);
                        return a
                    }
                    function e(a, b) {
                        for (var c = 0,
                                 d = a.length; c < d; c++) if (a[c] === b) return c;
                        return - 1
                    }
                    function f(a) {
                        if ("string" != typeof a) {
                            if (a && a.toHTML) return a.toHTML();
                            if (null == a) return "";
                            if (!a) return a + "";
                            a = "" + a
                        }
                        return m.test(a) ? a.replace(l, c) : a
                    }
                    function g(a) {
                        return ! a && 0 !== a || !(!p(a) || 0 !== a.length)
                    }
                    function h(a) {
                        var b = d({},
                            a);
                        return b._parent = a,
                            b
                    }
                    function i(a, b) {
                        return a.path = b,
                            a
                    }
                    function j(a, b) {
                        return (a ? a + ".": "") + b
                    }
                    b.__esModule = !0,
                        b.extend = d,
                        b.indexOf = e,
                        b.escapeExpression = f,
                        b.isEmpty = g,
                        b.createFrame = h,
                        b.blockParams = i,
                        b.appendContextPath = j;
                    var k = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#x27;",
                            "`": "&#x60;",
                            "=": "&#x3D;"
                        },
                        l = /[&<>"'`=]/g,
                        m = /[&<>"'`=]/,
                        n = Object.prototype.toString;
                    b.toString = n;
                    var o = function(a) {
                        return "function" == typeof a
                    };
                    o(/x/) && (b.isFunction = o = function(a) {
                        return "function" == typeof a && "[object Function]" === n.call(a)
                    }),
                        b.isFunction = o;
                    var p = Array.isArray ||
                        function(a) {
                            return ! (!a || "object" != typeof a) && "[object Array]" === n.call(a)
                        };
                    b.isArray = p
                },
                ,
                function(a, b, c) {
                    var d, e, f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function(a) {
                            return typeof a
                        }: function(a) {
                            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol": typeof a
                        };
                    d = [c(8), c(68)],
                    void 0 !== (e = function(a, b) {
                        function c(a) {
                            a = a.split("-");
                            for (var b = 1; b < a.length; b++) a[b] = a[b].charAt(0).toUpperCase() + a[b].slice(1);
                            return a.join("")
                        }
                        function d(b, c, d) {
                            if ("" === c || void 0 === c || null === c) return "";
                            var e = d ? " !important": "";
                            return "string" == typeof c && isNaN(c) ? /png|gif|jpe?g/i.test(c) && c.indexOf("url") < 0 ? "url(" + c + ")": c + e: 0 === c || "z-index" === b || "opacity" === b ? "" + c + e: /color/i.test(b) ? "#" + a.pad(c.toString(16).replace(/^0x/i, ""), 6) + e: Math.ceil(c) + "px" + e
                        }
                        var e = function(a, c, d) {
                                d = d || "all-players";
                                var e = "";
                                if ("object" === (void 0 === c ? "undefined": f(c))) {
                                    var h = document.createElement("div");
                                    g(h, c),
                                        e = "{" + h.style.cssText + "}"
                                } else "string" == typeof c && (e = c);
                                b.style([[a, a + e]], d)
                            },
                            g = function(a, b) {
                                if (void 0 !== a && null !== a) {
                                    void 0 === a.length && (a = [a]);
                                    var e, f = {};
                                    for (e in b) f[e] = d(e, b[e]);
                                    for (var g = 0; g < a.length; g++) {
                                        var h, i = a[g];
                                        if (void 0 !== i && null !== i) for (e in f) h = c(e),
                                        i.style[h] !== f[e] && (i.style[h] = f[e])
                                    }
                                }
                            },
                            h = function(a, b) {
                                g(a, {
                                    transform: b,
                                    webkitTransform: b,
                                    msTransform: b,
                                    mozTransform: b,
                                    oTransform: b
                                })
                            },
                            i = function(a, b) {
                                g(a, {
                                    animation: b,
                                    webkitAnimation: b,
                                    msAnimation: b,
                                    mozAnimation: b,
                                    oAnimation: b
                                })
                            },
                            j = function(a, b) {
                                var c = "rgb";
                                a ? (a = String(a).replace("#", ""), 3 === a.length && (a = a.charAt(0) + a.charAt(0) + a.charAt(1) + a.charAt(1) + a.charAt(2) + a.charAt(2))) : a = "000000";
                                var d = [parseInt(a.substr(0, 2), 16), parseInt(a.substr(2, 2), 16), parseInt(a.substr(4, 2), 16)];
                                return void 0 !== b && 100 !== b && (c += "a", d.push(b / 100)),
                                c + "(" + d.join(",") + ")"
                            };
                        return {
                            css: e,
                            style: g,
                            clearCss: b.clear,
                            transform: h,
                            animation: i,
                            hexToRgba: j
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [],
                    void 0 !== (e = function() {
                        return "3.4.0"
                    }.apply(b, d)) && (a.exports = e)
                },
                , ,
                function(a, b, c) {
                    var d, e;
                    d = [c(8)],
                    void 0 !== (e = function(a) {
                        return {
                            localName: function(a) {
                                return a ? a.localName ? a.localName: a.baseName ? a.baseName: "": ""
                            },
                            textContent: function(b) {
                                return b ? b.textContent ? a.trim(b.textContent) : b.text ? a.trim(b.text) : "": ""
                            },
                            getChildNode: function(a, b) {
                                return a.childNodes[b]
                            },
                            numChildren: function(a) {
                                return a.childNodes ? a.childNodes.length: 0
                            }
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(26), c(60), c(118), c(1)],
                    void 0 !== (e = function(a, b, d, e) {
                        function f(a) {
                            this.providers = b.slice(),
                                this.config = a || {},
                                this.reorderProviders()
                        }
                        return f.registerProvider = function(c) {
                            var f = c.getName().name;
                            if (!d[f]) {
                                if (!e.find(b, e.matches({
                                        name: f
                                    }))) {
                                    if (!e.isFunction(c.supports)) throw {
                                        message: "Tried to register a provider with an invalid object"
                                    };
                                    b.unshift({
                                        name: f,
                                        supports: c.supports
                                    })
                                }
                                var g = function() {};
                                g.prototype = a,
                                    c.prototype = new g,
                                    d[f] = c
                            }
                        },
                            f.load = function(a) {
                                return Promise.all(e.map(a,
                                    function(a) {
                                        return new Promise(function(b) {
                                            switch (a.name) {
                                                case "html5":
                                                    !
                                                        function(require) {
                                                            b(c(39))
                                                        } ();
                                                    break;
                                                case "flash":
                                                    !
                                                        function(require) {
                                                            b(c(38))
                                                        } ();
                                                    break;
                                                default:
                                                    b()
                                            }
                                        }).then(function(a) {
                                            a && f.registerProvider(a)
                                        })
                                    }))
                            },
                            e.extend(f.prototype, {
                                reorderProviders: function() {
                                    var a, b, c, d;
                                    "flash" === this.config.primary && (a = e.indexOf(this.providers, e.findWhere(this.providers, {
                                        name: "flash"
                                    })), b = this.providers.splice(a, 1)[0], c = e.indexOf(this.providers, e.findWhere(this.providers, {
                                        name: "html5"
                                    })), this.providers.splice(c, 0, b)),
                                    "videojs" === this.config.primary && (a = e.indexOf(this.providers, e.findWhere(this.providers, {
                                        name: "flash"
                                    })), b = this.providers.splice(a, 1)[0], c = e.indexOf(this.providers, e.findWhere(this.providers, {
                                        name: "html5"
                                    })), d = this.providers.splice(c, 1)[0], this.providers.push(d), this.providers.push(b)),
                                    "justflash" === this.config.primary && (a = e.indexOf(this.providers, e.findWhere(this.providers, {
                                        name: "flash"
                                    })), b = this.providers.splice(a, 1)[0], this.providers = [], this.providers.push(b))
                                },
                                providerSupports: function(a, b) {
                                    return a.supports(b)
                                },
                                required: function(a, b) {
                                    return a = a.slice(),
                                        e.compact(e.map(this.providers,
                                            function(c) {
                                                for (var d = !1,
                                                         e = a.length; e--;) {
                                                    var f = a[e],
                                                        g = c.supports(f.sources[0], b);
                                                    g && a.splice(e, 1),
                                                        d = d || g
                                                }
                                                if (d) return c
                                            }))
                                },
                                choose: function(a) {
                                    a = e.isObject(a) ? a: {};
                                    for (var b = this.providers.length,
                                             c = 0; c < b; c++) {
                                        var f = this.providers[c];
                                        if (this.providerSupports(f, a)) {
                                            return {
                                                priority: b - c - 1,
                                                name: f.name,
                                                type: a.type,
                                                provider: d[f.name]
                                            }
                                        }
                                    }
                                    return null
                                }
                            }),
                            f
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [],
                    void 0 !== (e = function() {
                        return {
                            repo: "https://cdn.bdstatic.com/jwplayer/",
                            SkinsIncluded: ["bce"],
                            SkinsLoadable: ["beelden", "bekle", "five", "glow", "roundster", "six", "seven", "stormtrooper", "vapor"],
                            dvrSeekLimit: -25
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(64), c(2)],
                    void 0 !== (e = function(a, b) {
                        return a.extend({
                            constructor: function(a) {
                                if (this.el = document.createElement("div"), this.el.className = "jw-icon jw-icon-tooltip " + a + " jw-button-color jw-reset jw-hidden", this.container = document.createElement("div"), this.container.className = "jw-overlay jw-reset", this.openClass = "jw-open", this.componentType = "tooltip", "jw-icon-hd" === a) {
                                    var b = document.createElement("span");
                                    b.className = "jw-hd-label",
                                        this.el.appendChild(b)
                                } else if ("jw-icon-playrate" === a) {
                                    var c = document.createElement("span");
                                    c.className = "jw-playrate-label",
                                        this.el.appendChild(c)
                                } else if ("jw-icon-cc" === a) {
                                    var d = document.createElement("span");
                                    d.className = "jw-cc-label",
                                        this.el.appendChild(d)
                                }
                                this.el.appendChild(this.container)
                            },
                            addContent: function(a) {
                                this.content && this.removeContent(),
                                    this.content = a,
                                    this.container.appendChild(a)
                            },
                            removeContent: function() {
                                this.content && (this.container.removeChild(this.content), this.content = null)
                            },
                            hasContent: function() {
                                return !! this.content
                            },
                            element: function() {
                                return this.el
                            },
                            openTooltip: function(a) {
                                this.trigger("open-" + this.componentType, a, {
                                    isOpen: !0
                                }),
                                    this.isOpen = !0,
                                    b.toggleClass(this.el, this.openClass, this.isOpen)
                            },
                            closeTooltip: function(a) {
                                this.trigger("close-" + this.componentType, a, {
                                    isOpen: !1
                                }),
                                    this.isOpen = !1,
                                    b.toggleClass(this.el, this.openClass, this.isOpen)
                            },
                            toggleOpenState: function(a) {
                                this.isOpen ? this.closeTooltip(a) : this.openTooltip(a)
                            }
                        })
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b) {
                    "use strict";
                    function c(a, b) {
                        var e = b && b.loc,
                            f = void 0,
                            g = void 0;
                        e && (f = e.start.line, g = e.start.column, a += " - " + f + ":" + g);
                        for (var h = Error.prototype.constructor.call(this, a), i = 0; i < d.length; i++) this[d[i]] = h[d[i]];
                        Error.captureStackTrace && Error.captureStackTrace(this, c),
                        e && (this.lineNumber = f, this.column = g)
                    }
                    b.__esModule = !0;
                    var d = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
                    c.prototype = new Error,
                        b["default"] = c,
                        a.exports = b["default"]
                },
                ,
                function(a, b, c) {
                    var d, e;
                    d = [c(8)],
                    void 0 !== (e = function(a) {
                        var b = {},
                            c = b.pluginPathType = {
                                ABSOLUTE: 0,
                                RELATIVE: 1,
                                CDN: 2
                            };
                        return b.getPluginPathType = function(b) {
                            if ("string" == typeof b) {
                                b = b.split("?")[0];
                                var d = b.indexOf("://");
                                if (d > 0) return c.ABSOLUTE;
                                var e = b.indexOf("/"),
                                    f = a.extension(b);
                                return ! (d < 0 && e < 0) || f && isNaN(f) ? c.RELATIVE: c.CDN
                            }
                        },
                            b.getPluginName = function(a) {
                                return a.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/, "$2")
                            },
                            b.getPluginVersion = function(a) {
                                return a.replace(/[^-]*-?([^\.]*).*$/, "$1")
                            },
                            b
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(2), c(4), c(7), c(1)],
                    void 0 !== (e = function(a, b, c, d) {
                        var e = a.noop,
                            f = d.constant(!1);
                        return {
                            supports: f,
                            play: e,
                            load: e,
                            stop: e,
                            volume: e,
                            mute: e,
                            seek: e,
                            resize: e,
                            remove: e,
                            destroy: e,
                            setVisibility: e,
                            setFullscreen: f,
                            getFullscreen: e,
                            getContainer: e,
                            setContainer: f,
                            getName: e,
                            getQualityLevels: e,
                            getCurrentQuality: e,
                            setCurrentQuality: e,
                            getAudioTracks: e,
                            getCurrentAudioTrack: e,
                            setCurrentAudioTrack: e,
                            checkComplete: e,
                            setControls: e,
                            attachMedia: e,
                            detachMedia: e,
                            setState: function(a) {
                                var d = this.state || c.IDLE;
                                this.state = a,
                                a !== d && this.trigger(b.JWPLAYER_PLAYER_STATE, {
                                    newstate: a
                                })
                            },
                            sendMediaType: function(a) {
                                var c = a[0].type,
                                    d = "oga" === c || "aac" === c || "mp3" === c || "mpeg" === c || "vorbis" === c;
                                this.trigger(b.JWPLAYER_MEDIA_TYPE, {
                                    mediaType: d ? "audio": "video"
                                })
                            }
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(8), c(1), c(121)],
                    void 0 !== (e = function(a, b, c) {
                        var d = {};
                        d.createElement = function(a) {
                            var b = document.createElement("div");
                            return b.innerHTML = a,
                                b.firstChild
                        },
                            d.styleDimension = function(a) {
                                return a + (a.toString().indexOf("%") > 0 ? "": "px")
                            };
                        var e = function(a) {
                                return b.isString(a.className) ? a.className.split(" ") : []
                            },
                            f = function(b, c) {
                                c = a.trim(c),
                                b.className !== c && (b.className = c)
                            };
                        return d.classList = function(a) {
                            return a.classList ? a.classList: e(a)
                        },
                            d.hasClass = c.hasClass,
                            d.addClass = function(a, c) {
                                var d = e(a),
                                    g = b.isArray(c) ? c: c.split(" ");
                                b.each(g,
                                    function(a) {
                                        b.contains(d, a) || d.push(a)
                                    }),
                                    f(a, d.join(" "))
                            },
                            d.removeClass = function(a, c) {
                                var d = e(a),
                                    g = b.isArray(c) ? c: c.split(" ");
                                f(a, b.difference(d, g).join(" "))
                            },
                            d.replaceClass = function(a, b, c) {
                                var d = a.className || "";
                                b.test(d) ? d = d.replace(b, c) : c && (d += " " + c),
                                    f(a, d)
                            },
                            d.toggleClass = function(a, c, e) {
                                var f = d.hasClass(a, c); (e = b.isBoolean(e) ? e: !f) !== f && (e ? d.addClass(a, c) : d.removeClass(a, c))
                            },
                            d.emptyElement = function(a) {
                                for (; a.firstChild;) a.removeChild(a.firstChild)
                            },
                            d.addStyleSheet = function(a) {
                                var b = document.createElement("link");
                                b.rel = "stylesheet",
                                    b.href = a,
                                    document.getElementsByTagName("head")[0].appendChild(b)
                            },
                            d.empty = function(a) {
                                if (a) for (; a.childElementCount > 0;) a.removeChild(a.children[0])
                            },
                            d.bounds = function(a) {
                                var b = {
                                    left: 0,
                                    right: 0,
                                    width: 0,
                                    height: 0,
                                    top: 0,
                                    bottom: 0
                                };
                                if (!a || !document.body.contains(a)) return b;
                                var c = a.getBoundingClientRect(a),
                                    d = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                                    e = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
                                return c.width || c.height || c.left || c.top ? (b.left = c.left + e, b.right = c.right + e, b.top = c.top + d, b.bottom = c.bottom + d, b.width = c.right - c.left, b.height = c.bottom - c.top, b) : b
                            },
                            d
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(2), c(20), c(45), c(85), c(1), c(3), c(124), c(4), c(7), c(76)],
                    void 0 !== (e = function(a, b, c, d, e, f, g, h, i, j) {
                        var k = function() {
                                function g(a, b) {
                                    var c = e.extend({},
                                        b, {
                                            type: a
                                        });
                                    switch (a) {
                                        case "flashThrottle":
                                            var d = "resume" !== b.state;
                                            this.set("flashThrottle", d),
                                                this.set("flashBlocked", d);
                                            break;
                                        case "flashBlocked":
                                            return void this.set("flashBlocked", !0);
                                        case "flashUnblocked":
                                            return void this.set("flashBlocked", !1);
                                        case "volume":
                                        case "mute":
                                            return void this.set(a, b[a]);
                                        case h.JWPLAYER_MEDIA_TYPE:
                                            return void(this.mediaModel.get("mediaType") !== b.mediaType && (this.mediaModel.set("mediaType", b.mediaType), this.mediaController.trigger(a, c)));
                                        case h.JWPLAYER_PLAYER_STATE:
                                            return void this.mediaModel.set("state", b.newstate);
                                        case h.JWPLAYER_MEDIA_BUFFER:
                                            this.set("buffer", b.bufferPercent);
                                        case h.JWPLAYER_MEDIA_META:
                                            var f = b.duration;
                                            e.isNumber(f) && (this.mediaModel.set("duration", f), this.set("duration", f)),
                                            b.duration === 1 / 0 && this.trigger("alive");
                                            break;
                                        case h.JWPLAYER_MEDIA_BUFFER_FULL:
                                            this.mediaModel.get("playAttempt") ? this.playVideo() : this.mediaModel.on("change:playAttempt",
                                                function() {
                                                    this.playVideo()
                                                },
                                                this);
                                            break;
                                        case h.JWPLAYER_MEDIA_TIME:
                                            this.mediaModel.set("position", b.position),
                                                this.set("position", b.position),
                                            e.isNumber(b.duration) && (this.mediaModel.set("duration", b.duration), this.set("duration", b.duration), b.duration > 0 && this.recordMediaPosition(b.position, b.duration), b.duration === 1 / 0 && this.trigger("alive")),
                                            this.advManage && this.get("imageAdvs").advs && this.advManage.refreshProcessAdv(b.position);
                                            break;
                                        case h.JWPLAYER_PROVIDER_CHANGED:
                                            this.set("provider", m.getName());
                                            break;
                                        case h.JWPLAYER_MEDIA_LEVELS:
                                            this.setQualityLevel(b.currentQuality, b.levels),
                                                this.mediaModel.set("levels", b.levels);
                                            break;
                                        case h.JWPLAYER_MEDIA_LEVEL_CHANGED:
                                            this.setQualityLevel(b.currentQuality, b.levels),
                                                this.persistQualityLevel(b.currentQuality, b.levels);
                                            break;
                                        case h.JWPLAYER_AUDIO_TRACKS:
                                            this.setCurrentAudioTrack(b.currentTrack, b.tracks),
                                                this.mediaModel.set("audioTracks", b.tracks);
                                            break;
                                        case h.JWPLAYER_AUDIO_TRACK_CHANGED:
                                            this.setCurrentAudioTrack(b.currentTrack, b.tracks);
                                            break;
                                        case h.JWPLAYER_CONNECTING:
                                            this.trigger("connecting");
                                            break;
                                        case h.JWPLAYER_CONNECT_FAILD:
                                            this.trigger("connectFaild");
                                            break;
                                        case h.JWPLAYER_ALIVE:
                                            this.trigger("alive");
                                            break;
                                        case h.JWPLAYER_NO_LIVE_STREAM:
                                            this.trigger("noLiveStream");
                                            break;
                                        case h.JWPLAYER_LIVE_STOP:
                                            this.trigger("liveStop");
                                            break;
                                        case "stop":
                                            this.set("duration", 0);
                                            break;
                                        case "subtitlesTrackChanged":
                                            this.setVideoSubtitleTrack(b.currentTrack, b.tracks);
                                            break;
                                        case "visualQuality":
                                            var g = e.extend({},
                                                b);
                                            this.mediaModel.set("visualQuality", g);
                                            break;
                                        case h.JWPLAYER_PLAYBACKRATE:
                                            this.set("playbackRate", b.playbackRate),
                                                this.mediaModel.set("playbackRate", b.playbackRate)
                                    }
                                    this.mediaController.trigger(a, c)
                                }
                                var k, m, n, o, p = this,
                                    q = a.noop;
                                this.mediaController = e.extend({},
                                    f),
                                    this.mediaModel = new l,
                                    this.advManage = null,
                                    d.model(this),
                                    this.set("mediaModel", this.mediaModel),
                                    this.setup = function(b) {
                                        return o = new c,
                                            e.extend(this.attributes, b, {
                                                item: 0,
                                                state: i.IDLE,
                                                flashBlocked: !1,
                                                fullscreen: !1,
                                                compactUI: !1,
                                                scrubbing: !1,
                                                duration: 0,
                                                position: 0,
                                                buffer: 0
                                            }),
                                        a.isMobile() && !b.mobileSdk && this.set("autostart", !1),
                                        this.get("imageAdvs") && (this.advManage = new j(this.get("imageAdvs"))),
                                            this.updateProviders(),
                                            this
                                    },
                                    this.getConfiguration = function() {
                                        return e.omit(this.clone(), ["mediaModel"])
                                    },
                                    this.updateProviders = function() {
                                        k = new b(this.getConfiguration())
                                    },
                                    this.recordMediaPosition = function(a, b) {
                                        var c = n && n.sources && n.sources[0];
                                        c && c.file && !isNaN(a) && !isNaN(b) && b > 0 && !1 !== isFinite(b) && e.each(n.sources,
                                            function(c) {
                                                a < b && a > 2 ? o.setItem("filePostion." + c.file, a) : a >= b && o.clearItem("filePostion." + c.file)
                                            })
                                    },
                                    this.getLastPosition = function(b) {
                                        var c = 0;
                                        return b && "array" === a.typeOf(b.sources) && b.sources.length > 0 && o.getItem("filePostion." + b.sources[0].file) && (c = o.getItem("filePostion." + b.sources[0].file)),
                                            c
                                    },
                                    this.setQualityLevel = function(a, b) {
                                        a > -1 && b.length > 1 && this.mediaModel.set("currentLevel", parseInt(a))
                                    },
                                    this.setCurrentQuality = function(a) {
                                        m.setCurrentQuality(a)
                                    },
                                    this.persistQualityLevel = function(a, b) {
                                        var c = b[a] || {},
                                            d = c.label;
                                        this.set("qualityLabel", d)
                                    },
                                    this.setCurrentAudioTrack = function(a, b) {
                                        a > -1 && b.length > 0 && a < b.length && this.mediaModel.set("currentAudioTrack", parseInt(a))
                                    },
                                    this.onMediaContainer = function() {
                                        var a = this.get("mediaContainer");
                                        q.setContainer(a)
                                    },
                                    this.changeVideoProvider = function(a) {
                                        var b = function() {
                                            this.setVolume(this.get("volume"))
                                        };
                                        if (this.off("change:mediaContainer", this.onMediaContainer), m && (m.off(null, null, this), m.getContainer() && m.remove()), !a) return m = q = a,
                                            void this.set("provider", void 0);
                                        q = new a(p.get("id"), p.getConfiguration());
                                        var c = this.get("mediaContainer");
                                        c ? q.setContainer(c) : this.once("change:mediaContainer", this.onMediaContainer),
                                            this.once("change:provider", b, this),
                                            this.set("provider", q.getName()),
                                        -1 === q.getName().name.indexOf("flash") && (this.set("flashThrottle", void 0), this.set("flashBlocked", !1)),
                                            m = q,
                                            m.volume(p.get("volume")),
                                            m.mute(p.get("mute")),
                                            m.on("all", g, this)
                                    },
                                    this.destroy = function() {
                                        m && (m.off(null, null, this), m.destroy())
                                    },
                                    this.getVideo = function() {
                                        return m
                                    },
                                    this.setFullscreen = function(a) { (a = !!a) !== p.get("fullscreen") && p.set("fullscreen", a)
                                    },
                                    this.chooseProvider = function(a) {
                                        return k.choose(a).provider
                                    },
                                    this.setActiveItem = function(a) {
                                        this.mediaModel.off(),
                                            this.mediaModel = new l,
                                            this.set("mediaModel", this.mediaModel),
                                            this.set("position", a.starttime || 0),
                                            this.set("duration", a.duration || 0),
                                            this.setProvider(a)
                                    },
                                    this.setProvider = function(a) {
                                        var b = a && a.sources && a.sources[0];
                                        if (void 0 !== b) {
                                            n = a;
                                            var c = this.chooseProvider(b);
                                            c && q instanceof c || p.changeVideoProvider(c),
                                            q && (q.init && q.init(a, this.attributes), this.trigger("itemReady", a))
                                        }
                                    },
                                    this.getCurrentItem = function() {
                                        return n
                                    },
                                    this.getProviders = function() {
                                        return k
                                    },
                                    this.resetProvider = function() {
                                        q = null
                                    },
                                    this.setVolume = function(a) {
                                        a = Math.round(a),
                                            a = m && "html5" === m.getName().name ? Math.min(a, 100) : Math.min(a, 500),
                                            p.set("volume", a),
                                        m && m.volume(a);
                                        var b = 0 === a;
                                        b !== p.get("mute") && p.setMute(b)
                                    },
                                    this.enableGPU = function() {
                                        m.enableGPU()
                                    },
                                    this.disableGPU = function() {
                                        m.disableGPU()
                                    },
                                    this.setToken = function(a) {
                                        var b = [];
                                        "string" == typeof arguments[0] && "string" == typeof arguments[1] && (b[0] = {
                                            file: arguments[0],
                                            tokenText: arguments[1]
                                        },
                                            a = b),
                                        m.setToken && m.setToken(a)
                                    },
                                    this.setMute = function(b) {
                                        if (a.exists(b) || (b = !this.get("mute")), this.set("mute", b), m && m.mute(b), !b) {
                                            var c = Math.max(10, this.get("volume"));
                                            this.setVolume(c)
                                        }
                                    },
                                    this.loadVideo = function(a) {
                                        if (!a) {
                                            var b = this.get("item");
                                            a = this.get("playlist")[b]
                                        }
                                        a.starttime = this.getLastPosition(a),
                                        void 0 !== this.get("starttime") && (a.starttime = this.get("starttime")),
                                            this.set("position", a.starttime || 0),
                                            this.set("duration", a.duration || 0),
                                            this.mediaModel.set("playAttempt", !0),
                                            this.mediaController.trigger(h.JWPLAYER_MEDIA_PLAY_ATTEMPT, {
                                                playReason: this.get("playReason")
                                            }),
                                            m.load(a)
                                    },
                                    this.stopVideo = function() {
                                        m && m.stop()
                                    },
                                    this.playVideo = function() {
                                        m.play()
                                    },
                                    this.persistCaptionsTrack = function() {
                                        var a = this.get("captionsTrack");
                                        a ? this.set("captionLabel", a.label) : this.set("captionLabel", "Off")
                                    },
                                    this.setVideoSubtitleTrack = function(a, b) {
                                        this.set("captionsIndex", a),
                                        a && b && a <= b.length && b[a - 1].data && this.set("captionsTrack", b[a - 1]),
                                        m && m.setSubtitlesTrack && m.setSubtitlesTrack(a)
                                    },
                                    this.persistVideoSubtitleTrack = function(a) {
                                        this.setVideoSubtitleTrack(a),
                                            this.persistCaptionsTrack()
                                    },
                                    this.setPlaybackRate = function(a) {
                                        m.setPlaybackRate(a)
                                    }
                            },
                            l = k.MediaModel = function() {
                                this.set("state", i.IDLE)
                            };
                        return e.extend(k.prototype, g),
                            e.extend(l.prototype, g),
                            k
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(7)],
                    void 0 !== (e = function(a) {
                        function b(b) {
                            return b === a.COMPLETE || b === a.ERROR ? a.IDLE: b
                        }
                        return function(a, c, d) {
                            if (c = b(c), d = b(d), c !== d) {
                                var e = c.replace(/(?:ing|d)$/, ""),
                                    f = {
                                        type: e,
                                        newstate: c,
                                        oldstate: d,
                                        reason: a.mediaModel.get("state")
                                    };
                                "play" === e && (f.playReason = a.get("playReason")),
                                    this.trigger(e, f)
                            }
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                , , ,
                function(a, b, c) {
                    var d, e;
                    d = [c(2), c(8)],
                    void 0 !== (e = function(a, b) {
                        function c(a) {
                            var b = {},
                                c = a.split("\r\n");
                            1 === c.length && (c = a.split("\n"));
                            var e = 1;
                            if (c[0].indexOf(" --\x3e ") > 0 && (e = 0), c.length > e + 1 && c[e + 1]) {
                                var f = c[e],
                                    g = f.indexOf(" --\x3e ");
                                g > 0 && (b.begin = d(f.substr(0, g)), b.end = d(f.substr(g + 5)), b.text = c.slice(e + 1).join("<br/>"))
                            }
                            return b
                        }
                        var d = a.seconds;
                        return function(a) {
                            var d = [];
                            a = b.trim(a);
                            var e = a.split("\r\n\r\n");
                            1 === e.length && (e = a.split("\n\n"));
                            for (var f = 0; f < e.length; f++) if ("WEBVTT" !== e[f]) {
                                var g = c(e[f]);
                                g.text && d.push(g)
                            }
                            return d
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(115), c(117), c(59), c(25)],
                    void 0 !== (e = function(a, b, c, d) {
                        var e = {},
                            f = {};
                        return {
                            loadPlugins: function(c, d) {
                                return f[c] = new a(new b(e), d),
                                    f[c]
                            },
                            registerPlugin: function(a, b, f, g) {
                                var h = d.getPluginName(a);
                                e[h] || (e[h] = new c(a)),
                                    e[h].registerPlugin(a, b, f, g)
                            }
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [],
                    void 0 !== (e = function() {
                        function a(a) {
                            this.message = a
                        }
                        var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        a.prototype = new Error,
                            a.prototype.name = "InvalidCharacterError",
                        window.btoa || (window.btoa = function(c) {
                            for (var d, e, f = String(c), g = 0, h = b, i = ""; f.charAt(0 | g) || (h = "=", g % 1); i += h.charAt(63 & d >> 8 - g % 1 * 8)) {
                                if ((e = f.charCodeAt(g += .75)) > 255) throw new a("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                                d = d << 8 | e
                            }
                            return i
                        }),
                        window.atob || (window.atob = function(c) {
                            var d = String(c).replace(/=+$/, "");
                            if (d.length % 4 == 1) throw new a("'atob' failed: The string to be decoded is not correctly encoded.");
                            for (var e, f, g = 0,
                                     h = 0,
                                     i = ""; f = d.charAt(h++);~f && (e = g % 4 ? 64 * e + f: f, g++%4) ? i += String.fromCharCode(255 & e >> ( - 2 * g & 6)) : 0) f = b.indexOf(f);
                            return i
                        })
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e, f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function(a) {
                            return typeof a
                        }: function(a) {
                            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol": typeof a
                        };
                    d = [],
                    void 0 !== (e = function() {
                        "object" !== ("undefined" == typeof JSON ? "undefined": f(JSON)) && (JSON = {}),
                            function() {
                                "use strict";
                                function a(a) {
                                    return a < 10 ? "0" + a: a
                                }
                                function b(a) {
                                    return e.lastIndex = 0,
                                        e.test(a) ? '"' + a.replace(e,
                                                function(a) {
                                                    var b = i[a];
                                                    return "string" == typeof b ? b: "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
                                                }) + '"': '"' + a + '"'
                                }
                                function c(a, d) {
                                    var e, i, k, l, m, n = g,
                                        o = d[a];
                                    switch (o && "object" === (void 0 === o ? "undefined": f(o)) && "function" == typeof o.toJSON && (o = o.toJSON(a)), "function" == typeof j && (o = j.call(d, a, o)), void 0 === o ? "undefined": f(o)) {
                                        case "string":
                                            return b(o);
                                        case "number":
                                            return isFinite(o) ? String(o) : "null";
                                        case "boolean":
                                        case "null":
                                            return String(o);
                                        case "object":
                                            if (!o) return "null";
                                            if (g += h, m = [], "[object Array]" === Object.prototype.toString.apply(o)) {
                                                for (l = o.length, e = 0; e < l; e += 1) m[e] = c(e, o) || "null";
                                                return k = 0 === m.length ? "[]": g ? "[\n" + g + m.join(",\n" + g) + "\n" + n + "]": "[" + m.join(",") + "]",
                                                    g = n,
                                                    k
                                            }
                                            if (j && "object" === (void 0 === j ? "undefined": f(j))) for (l = j.length, e = 0; e < l; e += 1)"string" == typeof j[e] && (i = j[e], (k = c(i, o)) && m.push(b(i) + (g ? ": ": ":") + k));
                                            else for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (k = c(i, o)) && m.push(b(i) + (g ? ": ": ":") + k);
                                            return k = 0 === m.length ? "{}": g ? "{\n" + g + m.join(",\n" + g) + "\n" + n + "}": "{" + m.join(",") + "}",
                                                g = n,
                                                k
                                    }
                                }
                                "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z": null
                                },
                                    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                                        return this.valueOf()
                                    });
                                var d, e, g, h, i, j;
                                "function" != typeof JSON.stringify && (e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, i = {
                                    "\b": "\\b",
                                    "\t": "\\t",
                                    "\n": "\\n",
                                    "\f": "\\f",
                                    "\r": "\\r",
                                    '"': '\\"',
                                    "\\": "\\\\"
                                },
                                    JSON.stringify = function(a, b, d) {
                                        var e;
                                        if (g = "", h = "", "number" == typeof d) for (e = 0; e < d; e += 1) h += " ";
                                        else "string" == typeof d && (h = d);
                                        if (j = b, b && "function" != typeof b && ("object" !== (void 0 === b ? "undefined": f(b)) || "number" != typeof b.length)) throw new Error("JSON.stringify");
                                        return c("", {
                                            "": a
                                        })
                                    }),
                                "function" != typeof JSON.parse && (d = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, JSON.parse = function(a, b) {
                                    function c(a, d) {
                                        var e, g, h = a[d];
                                        if (h && "object" === (void 0 === h ? "undefined": f(h))) for (e in h) Object.prototype.hasOwnProperty.call(h, e) && (g = c(h, e), void 0 !== g ? h[e] = g: delete h[e]);
                                        return b.call(a, d, h)
                                    }
                                    var e;
                                    if (a = String(a), d.lastIndex = 0, d.test(a) && (a = a.replace(d,
                                            function(a) {
                                                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
                                            })), /^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"),
                                        "function" == typeof b ? c({
                                                "": e
                                            },
                                            "") : e;
                                    throw new SyntaxError("JSON.parse")
                                })
                            } (),
                        window.JSON || (window.JSON = JSON)
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e, f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function(a) {
                            return typeof a
                        }: function(a) {
                            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol": typeof a
                        };
                    d = [c(1)],
                    void 0 !== (e = function(a) {
                        function b(a, b) {
                            return function() {
                                a.apply(b, arguments)
                            }
                        }
                        function c(a) {
                            if ("object" !== f(this)) throw new TypeError("Promises must be constructed via new");
                            if ("function" != typeof a) throw new TypeError("not a function");
                            this._state = null,
                                this._value = null,
                                this._deferreds = [],
                                j(a, b(e, this), b(g, this))
                        }
                        function d(a) {
                            var b = this;
                            return null === this._state ? void this._deferreds.push(a) : void k(function() {
                                var c = b._state ? a.onFulfilled: a.onRejected;
                                if (null === c) return void(b._state ? a.resolve: a.reject)(b._value);
                                var d;
                                try {
                                    d = c(b._value)
                                } catch(e) {
                                    return void a.reject(e)
                                }
                                a.resolve(d)
                            })
                        }
                        function e(a) {
                            try {
                                if (a === this) throw new TypeError("A promise cannot be resolved with itself.");
                                if (a && ("object" === (void 0 === a ? "undefined": f(a)) || "function" == typeof a)) {
                                    var c = a.then;
                                    if ("function" == typeof c) return void j(b(c, a), b(e, this), b(g, this))
                                }
                                this._state = !0,
                                    this._value = a,
                                    h.call(this)
                            } catch(d) {
                                g.call(this, d)
                            }
                        }
                        function g(a) {
                            this._state = !1,
                                this._value = a,
                                h.call(this)
                        }
                        function h() {
                            for (var a = 0,
                                     b = this._deferreds.length; a < b; a++) d.call(this, this._deferreds[a]);
                            this._deferreds = null
                        }
                        function i(a, b, c, d) {
                            this.onFulfilled = "function" == typeof a ? a: null,
                                this.onRejected = "function" == typeof b ? b: null,
                                this.resolve = c,
                                this.reject = d
                        }
                        function j(a, b, c) {
                            var d = !1;
                            try {
                                a(function(a) {
                                        d || (d = !0, b(a))
                                    },
                                    function(a) {
                                        d || (d = !0, c(a))
                                    })
                            } catch(e) {
                                if (d) return;
                                d = !0,
                                    c(e)
                            }
                        }
                        var k = a.defer,
                            l = Array.isArray ||
                                function(a) {
                                    return "[object Array]" === Object.prototype.toString.call(a)
                                };
                        c.prototype["catch"] = function(a) {
                            return this.then(null, a)
                        },
                            c.prototype.then = function(a, b) {
                                var e = this;
                                return new c(function(c, f) {
                                    d.call(e, new i(a, b, c, f))
                                })
                            },
                            c.all = function() {
                                var a = Array.prototype.slice.call(1 === arguments.length && l(arguments[0]) ? arguments[0] : arguments);
                                return new c(function(b, c) {
                                    function d(g, h) {
                                        try {
                                            if (h && ("object" === (void 0 === h ? "undefined": f(h)) || "function" == typeof h)) {
                                                var i = h.then;
                                                if ("function" == typeof i) return void i.call(h,
                                                    function(a) {
                                                        d(g, a)
                                                    },
                                                    c)
                                            }
                                            a[g] = h,
                                            0 == --e && b(a)
                                        } catch(j) {
                                            c(j)
                                        }
                                    }
                                    if (0 === a.length) return b([]);
                                    for (var e = a.length,
                                             g = 0; g < a.length; g++) d(g, a[g])
                                })
                            },
                            c.resolve = function(a) {
                                return a && "object" === (void 0 === a ? "undefined": f(a)) && a.constructor === c ? a: new c(function(b) {
                                    b(a)
                                })
                            },
                            c.reject = function(a) {
                                return new c(function(b, c) {
                                    c(a)
                                })
                            },
                            c.race = function(a) {
                                return new c(function(b, c) {
                                    for (var d = 0,
                                             e = a.length; d < e; d++) a[d].then(b, c)
                                })
                            },
                            c._setImmediateFn = function(a) {
                                k = a
                            },
                        window.Promise || (window.Promise = c)
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(2), c(1), c(4), c(7), c(120), c(26), c(3)],
                    void 0 !== (e = function(a, b, c, d, e, f, g) {
                        function h(a) {
                            return a + "_swf_" + k++
                        }
                        function i(b) {
                            var c = document.createElement("a");
                            c.href = b.flashplayer;
                            var d = c.hostname === window.location.host;
                            return a.isChrome() && !d
                        }
                        function j(j, k) {
                            function l(a) {
                                if (G) for (var b = 0; b < a.length; b++) {
                                    var c = a[b];
                                    if (c.bitrate) {
                                        var d = Math.round(c.bitrate / 1e3);
                                        c.label = m(d)
                                    }
                                }
                            }
                            function m(a) {
                                var b = G[a];
                                if (!b) {
                                    for (var c = 1 / 0,
                                             d = G.bitrates.length; d--;) {
                                        var e = Math.abs(G.bitrates[d] - a);
                                        if (e > c) break;
                                        c = e
                                    }
                                    b = G.labels[G.bitrates[d + 1]],
                                        G[a] = b
                                }
                                return b
                            }
                            function n() {
                                u = setTimeout(function() {
                                        g.trigger.call(D, "flashBlocked")
                                    },
                                    3e4),
                                    r.once("embedded",
                                        function() {
                                            p(),
                                                g.trigger.call(D, "flashUnblocked")
                                        },
                                        D)
                            }
                            function o() {
                                p(),
                                    n()
                            }
                            function p() {
                                clearTimeout(u),
                                    a.removeEventListener(window, "focus", o, !1)
                            }
                            var q, r, s, t = null,
                                u = -1,
                                v = !1,
                                w = -1,
                                x = null,
                                y = -1,
                                z = null,
                                A = !0,
                                B = !1,
                                C = null,
                                D = this,
                                E = function() {
                                    return r && r.__ready
                                },
                                F = function() {
                                    r && r.triggerFlash.apply(r, arguments)
                                },
                                G = function() {
                                    var a = k.hlslabels;
                                    if (!a) return null;
                                    var b = {},
                                        c = [];
                                    for (var d in a) {
                                        var e = parseFloat(d);
                                        if (!isNaN(e)) {
                                            var f = Math.round(e);
                                            b[f] = a[d],
                                                c.push(f)
                                        }
                                    }
                                    return 0 === c.length ? null: (c.sort(function(a, b) {
                                        return a - b
                                    }), {
                                        labels: b,
                                        bitrates: c
                                    })
                                } ();
                            b.extend(this, g, {
                                init: function(a) {
                                    a.preload && "none" !== a.preload && !k.autostart && (t = a)
                                },
                                load: function(a) {
                                    t = a,
                                        v = !1,
                                        this.setState(d.LOADING),
                                        F("load", a),
                                    a.sources.length && "hls" !== a.sources[0].type && this.sendMediaType(a.sources)
                                },
                                play: function() {
                                    F("play")
                                },
                                pause: function() {
                                    F("pause"),
                                        this.setState(d.PAUSED)
                                },
                                stop: function() {
                                    F("stop"),
                                        w = -1,
                                        t = null,
                                        C = null,
                                        this.setState(d.IDLE),
                                        this.trigger("stop")
                                },
                                seek: function(a) {
                                    F("seek", a)
                                },
                                volume: function(a) {
                                    if (b.isNumber(a)) {
                                        var c = Math.min(Math.max(0, a), 100);
                                        E() && F("volume", c)
                                    }
                                },
                                enableGPU: function() {
                                    F("enableGPU")
                                },
                                disableGPU: function() {
                                    F("disableGPU")
                                },
                                setToken: function(a) {
                                    F("setToken", a)
                                },
                                mute: function(a) {
                                    E() && F("mute", a)
                                },
                                setState: function() {
                                    return f.setState.apply(this, arguments)
                                },
                                checkComplete: function() {
                                    return v
                                },
                                attachMedia: function() {
                                    A = !0,
                                    v && (this.setState(d.COMPLETE), this.trigger(c.JWPLAYER_MEDIA_COMPLETE), v = !1)
                                },
                                detachMedia: function() {
                                    return A = !1,
                                        null
                                },
                                getSwfObject: function(a) {
                                    var b = a.getElementsByTagName("object")[0];
                                    return b ? (b.off(null, null, this), b) : e.embed(k.flashplayer, a, h(j), k.wmode, k.playlistItem, k.flashUI)
                                },
                                getContainer: function() {
                                    return q
                                },
                                setContainer: function(e) {
                                    if (q !== e) {
                                        q = e,
                                            r = this.getSwfObject(e),
                                            document.hasFocus() ? n() : a.addEventListener(window, "focus", o, !1),
                                            r.once("ready",
                                                function() {
                                                    p(),
                                                        r.once("pluginsLoaded",
                                                            function() {
                                                                r.queueCommands = !1,
                                                                    F("setupCommandQueue", r.__commandQueue),
                                                                    r.__commandQueue = []
                                                            });
                                                    var a = b.extend({},
                                                        k),
                                                        d = r.triggerFlash("setup", a);
                                                    d === r ? r.__ready = !0 : this.trigger(c.JWPLAYER_MEDIA_ERROR, d),
                                                    t && F("init", t)
                                                },
                                                this);
                                        var f = [c.JWPLAYER_MEDIA_META, c.JWPLAYER_MEDIA_ERROR, c.JWPLAYER_MEDIA_SEEK, c.JWPLAYER_MEDIA_SEEKED, "subtitlesTracks", "subtitlesTrackChanged", "subtitlesTrackData", "mediaType"],
                                            h = [c.JWPLAYER_MEDIA_BUFFER, c.JWPLAYER_MEDIA_TIME],
                                            j = [c.JWPLAYER_MEDIA_BUFFER_FULL];
                                        r.on(c.JWPLAYER_MEDIA_LEVELS,
                                            function(a) {
                                                l(a.levels),
                                                    w = a.currentQuality,
                                                    x = a.levels,
                                                    this.trigger(a.type, a)
                                            },
                                            this),
                                            r.on(c.JWPLAYER_MEDIA_LEVEL_CHANGED,
                                                function(a) {
                                                    l(a.levels),
                                                        w = a.currentQuality,
                                                        x = a.levels,
                                                        this.trigger(a.type, a)
                                                },
                                                this),
                                            r.on(c.JWPLAYER_AUDIO_TRACKS,
                                                function(a) {
                                                    y = a.currentTrack,
                                                        z = a.tracks,
                                                        this.trigger(a.type, a)
                                                },
                                                this),
                                            r.on(c.JWPLAYER_AUDIO_TRACK_CHANGED,
                                                function(a) {
                                                    y = a.currentTrack,
                                                        z = a.tracks,
                                                        this.trigger(a.type, a)
                                                },
                                                this),
                                            r.on(c.JWPLAYER_PLAYER_STATE,
                                                function(a) {
                                                    var b = a.newstate;
                                                    b !== d.IDLE && this.setState(b)
                                                },
                                                this),
                                            r.on(h.join(" "),
                                                function(a) {
                                                    "Infinity" === a.duration && (a.duration = 1 / 0),
                                                        this.trigger(a.type, a)
                                                },
                                                this),
                                            r.on(f.join(" "),
                                                function(a) {
                                                    this.trigger(a.type, a)
                                                },
                                                this),
                                            r.on(j.join(" "),
                                                function(a) {
                                                    this.trigger(a.type)
                                                },
                                                this),
                                            r.on(c.JWPLAYER_CONNECTING,
                                                function(a) {
                                                    g.trigger.call(D, "connecting", a)
                                                },
                                                this),
                                            r.on(c.JWPLAYER_CONNECT_FAILD,
                                                function(a) {
                                                    g.trigger.call(D, "connectFaild", a),
                                                        g.trigger.call(D, c.JWPLAYER_MEDIA_ERROR, {
                                                            message: "连接已断开，请稍后重试"
                                                        })
                                                },
                                                this),
                                            r.on(c.JWPLAYER_ALIVE,
                                                function(a) {
                                                    g.trigger.call(D, "alive", a)
                                                },
                                                this),
                                            r.on(c.JWPLAYER_NO_LIVE_STREAM,
                                                function(a) {
                                                    g.trigger.call(D, "noLiveStream", a)
                                                },
                                                this),
                                            r.on(c.JWPLAYER_LIVE_STOP,
                                                function(a) {
                                                    g.trigger.call(D, "liveStop", a)
                                                },
                                                this),
                                            r.on(c.JWPLAYER_CUEPOINT,
                                                function(a) {
                                                    g.trigger.call(D, a.name, a.args)
                                                },
                                                this),
                                            r.on(c.JWPLAYER_MEDIA_BEFORECOMPLETE,
                                                function(a) {
                                                    v = !0,
                                                        this.trigger(a.type),
                                                    !0 === A && (v = !1)
                                                },
                                                this),
                                            r.on(c.JWPLAYER_MEDIA_COMPLETE,
                                                function(a) {
                                                    v || (this.setState(d.COMPLETE), this.trigger(a.type))
                                                },
                                                this),
                                            r.on("visualQuality",
                                                function(a) {
                                                    a.reason = a.reason || "api",
                                                        this.trigger("visualQuality", a),
                                                        this.trigger(c.JWPLAYER_PROVIDER_FIRST_FRAME, {})
                                                },
                                                this),
                                            r.on(c.JWPLAYER_PROVIDER_CHANGED,
                                                function(a) {
                                                    s = a.message,
                                                        this.trigger(c.JWPLAYER_PROVIDER_CHANGED, a)
                                                },
                                                this),
                                            r.on(c.JWPLAYER_ERROR,
                                                function(b) {
                                                    a.log("Error playing media: %o %s", b.code, b.message, b),
                                                        this.trigger(c.JWPLAYER_MEDIA_ERROR, b)
                                                },
                                                this),
                                        i(k) && r.on("throttle",
                                            function(a) {
                                                p(),
                                                    "resume" === a.state ? g.trigger.call(D, "flashThrottle", a) : u = setTimeout(function() {
                                                            g.trigger.call(D, "flashThrottle", a)
                                                        },
                                                        250)
                                            },
                                            this)
                                    }
                                },
                                remove: function() {
                                    w = -1,
                                        x = null,
                                        e.remove(r)
                                },
                                setVisibility: function(a) {
                                    a = !!a,
                                        q.style.opacity = a ? 1 : 0
                                },
                                resize: function(a, b, c) {
                                    c && F("stretch", c)
                                },
                                setControls: function(a) {
                                    F("setControls", a)
                                },
                                setFullscreen: function(a) {
                                    B = a,
                                        F("fullscreen", a)
                                },
                                getFullScreen: function() {
                                    return B
                                },
                                setCurrentQuality: function(a) {
                                    F("setCurrentQuality", a)
                                },
                                getCurrentQuality: function() {
                                    return w
                                },
                                setSubtitlesTrack: function(a) {
                                    F("setSubtitlesTrack", a)
                                },
                                getName: function() {
                                    return s ? {
                                        name: "flash_" + s
                                    }: {
                                        name: "flash"
                                    }
                                },
                                getQualityLevels: function() {
                                    return x || t.sources
                                },
                                getAudioTracks: function() {
                                    return z
                                },
                                getCurrentAudioTrack: function() {
                                    return y
                                },
                                setCurrentAudioTrack: function(a) {
                                    F("setCurrentAudioTrack", a)
                                },
                                destroy: function() {
                                    p(),
                                        this.remove(),
                                    r && (r.off(), r = null),
                                        q = null,
                                        t = null,
                                        this.off()
                                }
                            }),
                                this.trigger = function(a, b) {
                                    if (A) return g.trigger.call(this, a, b)
                                }
                        }
                        var k = 0,
                            l = function() {};
                        return l.prototype = f,
                            j.prototype = new l,
                            j.getName = function() {
                                return {
                                    name: "flash"
                                }
                            },
                            j
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(15), c(2), c(27), c(1), c(4), c(7), c(26), c(3), c(61)],
                    void 0 !== (e = function(a, b, c, d, e, f, g, h, i) {
                        function j(a, c) {
                            b.foreach(a,
                                function(a, d) {
                                    b.addEventListener(c, a, d, !1)
                                })
                        }
                        function k(a, c) {
                            b.foreach(a,
                                function(a, d) {
                                    b.removeEventListener(c, a, d, !1)
                                })
                        }
                        function l(a) {
                            if ("hls" === a.type) if (!1 !== a.androidhls) {
                                var c = b.isAndroidNative;
                                if (c(2) || c(3) || c("4.0")) return ! 1;
                                if (b.isAndroid()) return ! 0
                            } else if (b.isAndroid()) return ! 1;
                            return null
                        }
                        function m(m, x) {
                            function y() {
                                ya && (ia(Ma.audioTracks), sa.setTextTracks(Ma.textTracks), Ma.setAttribute("jw-loaded", "data"), Ka.isLive && J())
                            }
                            function z() {
                                ya && Ma.setAttribute("jw-loaded", "started")
                            }
                            function A(a) {
                                sa.trigger("click", a)
                            }
                            function B() {
                                ya && !Aa && (I(H()), F(ba(), pa, oa))
                            }
                            function C() {
                                ya && F(ba(), pa, oa)
                            }
                            function D() {
                                n(wa),
                                    ua = !0,
                                ya && (sa.state === f.STALLED ? sa.setState(f.PLAYING) : sa.state === f.PLAYING && (wa = setTimeout(aa, o)), Aa && Ma.duration === 1 / 0 && 0 === Ma.currentTime || (I(H()), G(Ma.currentTime), F(ba(), pa, oa), sa.state === f.PLAYING && (sa.trigger(e.JWPLAYER_MEDIA_TIME, {
                                    position: pa,
                                    duration: oa
                                }), E())))
                            }
                            function E() {
                                var a = Ia.level;
                                if (a.width !== Ma.videoWidth || a.height !== Ma.videoHeight) {
                                    if (a.width = Ma.videoWidth, a.height = Ma.videoHeight, ma(), !a.width || !a.height) return;
                                    Ia.reason = Ia.reason || "auto",
                                        Ia.mode = "hls" === ra[za].type ? "auto": "manual",
                                        Ia.bitrate = 0,
                                        a.index = za,
                                        a.label = ra[za].label,
                                        sa.trigger("visualQuality", Ia),
                                        Ia.reason = ""
                                }
                            }
                            function F(a, b, c) {
                                a === xa && c === oa || (xa = a, sa.trigger(e.JWPLAYER_MEDIA_BUFFER, {
                                    bufferPercent: 100 * a,
                                    position: b,
                                    duration: c
                                }))
                            }
                            function G(a) {
                                oa < 0 && (a = -(Z() - a)),
                                    pa = a
                            }
                            function H() {
                                var a = Ma.duration,
                                    b = Z();
                                if (a === 1 / 0 && b) {
                                    var c = b - Ma.seekable.start(0);
                                    c !== 1 / 0 && c > 120 && (a = -c)
                                }
                                return a
                            }
                            function I(a) {
                                oa = a,
                                va && a && a !== 1 / 0 && sa.seek(va)
                            }
                            function J() {
                                var a = H();
                                Aa && a === 1 / 0 && (a = 0);
                                var b = {
                                    duration: a,
                                    height: Ma.videoHeight,
                                    width: Ma.videoWidth
                                };
                                sa.trigger(e.JWPLAYER_MEDIA_META, b),
                                    I(a)
                            }
                            function K() {
                                ya && (ua = !0, Aa || ma(), M())
                            }
                            function L() {
                                ya && (Ma.muted && (Ma.muted = !1, Ma.muted = !0), Ma.setAttribute("jw-loaded", "meta"), J())
                            }
                            function M() {
                                qa || (qa = !0, sa.trigger(e.JWPLAYER_MEDIA_BUFFER_FULL))
                            }
                            function N() {
                                sa.setState(f.PLAYING),
                                Ma.hasAttribute("jw-played") || Ma.setAttribute("jw-played", ""),
                                    sa.trigger(e.JWPLAYER_PROVIDER_FIRST_FRAME, {})
                            }
                            function O() {
                                sa.state !== f.COMPLETE && Ma.currentTime !== Ma.duration && sa.setState(f.PAUSED)
                            }
                            function P() {
                                Aa || Ma.paused || Ma.ended || sa.state !== f.LOADING && sa.state !== f.ERROR && (sa.seeking || sa.setState(f.STALLED))
                            }
                            function Q() {
                                if (ya) {
                                    b.log("Error playing media: %o %s", Ma.error, Ma.src);
                                    var a = "加载失败: 不能播放当前文件";
                                    b.isMobile() && b.isHls(Ma.src) && Ka.tokenEncrypt && !b.isFlvjsSupported() && (a = "当前系统及浏览器环境不支持“token加密”的hls视频播放"),
                                        sa.trigger(e.JWPLAYER_MEDIA_ERROR, {
                                            message: a,
                                            code: "111",
                                            detail: Ma.error,
                                            videoSrc: Ma.src
                                        })
                                }
                            }
                            function R(a) {
                                var c;
                                return "array" === b.typeOf(a) && a.length > 0 && (c = d.map(a,
                                    function(a, b) {
                                        return {
                                            label: a.label || b
                                        }
                                    })),
                                    c
                            }
                            function S(a) {
                                ra = a,
                                    za = T(a);
                                var b = R(a);
                                b && sa.trigger(e.JWPLAYER_MEDIA_LEVELS, {
                                    levels: b,
                                    currentQuality: za
                                })
                            }
                            function T(a) {
                                var b = Math.max(0, za),
                                    c = x.qualityLabel;
                                if (a) for (var d = 0; d < a.length; d++) if (a[d]["default"] && (b = d), c && a[d].label === c) return d;
                                return Ia.reason = "initial choice",
                                    Ia.level = {},
                                    b
                            }
                            function U() {
                                return Ma.play()
                            }
                            function V(a, c) {
                                va = 0,
                                    n(wa);
                                var d = document.createElement("source");
                                d.src = ra[za].file;
                                var e = Ma.src !== d.src,
                                    g = Ma.getAttribute("jw-loaded"),
                                    h = Ma.hasAttribute("jw-played");
                                e || "none" === g || "started" === g ? (oa = c, sa.setupSideloadedTracks(Ha), b.isHtml5Flv(ra[za].file, ra[za].type) && Ja ? (Ja.load(), Ja.play()) : (W(ra[za]), Ma.load()), s && Ma.paused && U()) : (0 === a && Ma.currentTime > 0 && (va = -1, sa.seek(a)), b.isHtml5Flv(ra[za].file, ra[za].type) && Ja ? Ja.play() : U()),
                                    pa = Ma.currentTime,
                                r && !h && (M(), Ma.paused || sa.state === f.PLAYING || sa.setState(f.LOADING)),
                                b.isIOS() && sa.getFullScreen() && (Ma.controls = !0),
                                a > 0 && sa.seek(a),
                                Ka.playbackRate > 1 && sa.setPlaybackRate(Ka.playbackRate)
                            }
                            function W(a) {
                                Ea = null,
                                    Fa = -1,
                                    Ga = -1,
                                Ia.reason || (Ia.reason = "initial choice", Ia.level = {}),
                                    ua = !1,
                                    qa = !1,
                                    Aa = l(a);
                                var b = a.preload || "metadata";
                                "none" !== b && Ma.setAttribute("preload", b);
                                var c = document.createElement("source");
                                c.src = a.file,
                                Ma.src !== c.src && (Ma.setAttribute("jw-loaded", "none"), Ma.src = a.file)
                            }
                            function X() {
                                Ma && (sa.disableTextTrack(), Ma.removeAttribute("crossorigin"), Ma.removeAttribute("preload"), Ma.removeAttribute("src"), Ma.removeAttribute("jw-loaded"), Ma.removeAttribute("jw-played"), c.emptyElement(Ma), za = -1, Ha = null, !q && "load" in Ma && Ma.load(), sa.trigger("stop"))
                            }
                            function Y() {
                                for (var a = Ma.seekable ? Ma.seekable.length: 0, b = 1 / 0; a--;) b = Math.min(b, Ma.seekable.start(a));
                                return b
                            }
                            function Z() {
                                for (var a = Ma.seekable ? Ma.seekable.length: 0, b = 0; a--;) b = Math.max(b, Ma.seekable.end(a));
                                return b
                            }
                            function $() {
                                sa.seeking = !1,
                                    sa.trigger(e.JWPLAYER_MEDIA_SEEKED)
                            }
                            function _() {
                                sa.trigger("volume", {
                                    volume: Math.round(100 * Ma.volume)
                                }),
                                    sa.trigger("mute", {
                                        mute: Ma.muted
                                    })
                            }
                            function aa() {
                                Ma.currentTime === pa && P()
                            }
                            function ba() {
                                var a = Ma.buffered,
                                    c = Ma.duration;
                                return ! a || 0 === a.length || c <= 0 || c === 1 / 0 ? 0 : b.between(a.end(a.length - 1) / c, 0, 1)
                            }
                            function ca() {
                                if (ya && sa.state !== f.IDLE && sa.state !== f.COMPLETE) {
                                    if (n(wa), za = -1, Ca = !0, sa.trigger(e.JWPLAYER_MEDIA_BEFORECOMPLETE), !ya) return;
                                    da()
                                }
                            }
                            function da() {
                                n(wa),
                                    sa.setState(f.COMPLETE),
                                    Ca = !1,
                                    sa.trigger(e.JWPLAYER_MEDIA_COMPLETE)
                            }
                            function ea(a) {
                                Da = !0,
                                    ha(a),
                                b.isIOS() && (Ma.controls = !1)
                            }
                            function fa() {
                                for (var a = -1,
                                         b = 0; b < Ma.audioTracks.length; b++) if (Ma.audioTracks[b].enabled) {
                                    a = b;
                                    break
                                }
                                ja(a)
                            }
                            function ga(a) {
                                Da = !1,
                                    ha(a),
                                b.isIOS() && (Ma.controls = !1)
                            }
                            function ha(a) {
                                sa.trigger("fullscreenchange", {
                                    target: a.target,
                                    jwstate: Da
                                })
                            }
                            function ia(a) {
                                if (Ea = null, a) {
                                    if (a.length) {
                                        for (var b = 0; b < a.length; b++) if (a[b].enabled) {
                                            Fa = b;
                                            break
                                        } - 1 === Fa && (Fa = 0, a[Fa].enabled = !0),
                                            Ea = d.map(a,
                                                function(a) {
                                                    return {
                                                        name: a.label || a.language,
                                                        language: a.language
                                                    }
                                                })
                                    }
                                    sa.addTracksListener(a, "change", fa),
                                    Ea && sa.trigger("audioTracks", {
                                        currentTrack: Fa,
                                        tracks: Ea
                                    })
                                }
                            }
                            function ja(a) {
                                Ma && Ma.audioTracks && Ea && a > -1 && a < Ma.audioTracks.length && a !== Fa && (Ma.audioTracks[Fa].enabled = !1, Fa = a, Ma.audioTracks[Fa].enabled = !0, sa.trigger("audioTrackChanged", {
                                    currentTrack: Fa,
                                    tracks: Ea
                                }))
                            }
                            function ka() {
                                return Ea || []
                            }
                            function la() {
                                return Fa
                            }
                            function ma() {
                                if ("hls" === ra[0].type) {
                                    var a = "video";
                                    0 === Ma.videoHeight && (a = "audio"),
                                        sa.trigger("mediaType", {
                                            mediaType: a
                                        })
                                }
                            }
                            this.state = f.IDLE,
                                this.seeking = !1,
                                d.extend(this, h, i),
                                this.trigger = function(a, b) {
                                    if (ya) return h.trigger.call(this, a, b)
                                },
                                this.setState = function(a) {
                                    if (ya) return g.setState.call(this, a)
                                };
                            var na, oa, pa, qa, ra, sa = this,
                                ta = {
                                    click: A,
                                    durationchange: B,
                                    ended: ca,
                                    error: Q,
                                    loadstart: z,
                                    loadeddata: y,
                                    loadedmetadata: L,
                                    canplay: K,
                                    playing: N,
                                    progress: C,
                                    pause: O,
                                    seeked: $,
                                    timeupdate: D,
                                    volumechange: _,
                                    webkitbeginfullscreen: ea,
                                    webkitendfullscreen: ga
                                },
                                ua = !1,
                                va = 0,
                                wa = -1,
                                xa = -1,
                                ya = !0,
                                za = -1,
                                Aa = null,
                                Ba = !!x.sdkplatform,
                                Ca = !1,
                                Da = !1,
                                Ea = null,
                                Fa = -1,
                                Ga = -1,
                                Ha = null,
                                Ia = {
                                    level: {}
                                },
                                Ja = null,
                                Ka = null,
                                La = document.getElementById(m),
                                Ma = La ? La.querySelector("video") : void 0;
                            Ma = Ma || document.createElement("video"),
                                Ma.className = "jw-video jw-reset",
                                this.isSDK = Ba,
                                this.itemTracks = Ha,
                                this.video = Ma,
                            d.isObject(x.cast) && x.cast.appid && Ma.setAttribute("disableRemotePlayback", ""),
                                j(ta, Ma),
                            u || (Ma.controls = !0, Ma.controls = !1),
                                Ma.setAttribute("disableRemotePlayback", ""),
                                Ma.setAttribute("x-webkit-airplay", "allow"),
                                Ma.setAttribute("webkit-playsinline", ""),
                                Ma.setAttribute("playsinline", ""),
                                Ma.setAttribute("x5-playsinline", ""),
                                Ma.setAttribute("x5-video-player-type", "h5"),
                                Ma.setAttribute("x5-video-player-fullscreen", "true"),
                                this.stop = function() {
                                    n(wa),
                                    ya && (X(), b.isIETrident() && Ma.pause(), this.setState(f.IDLE))
                                },
                                this.destroy = function() {
                                    k(ta, Ma),
                                        this.removeTracksListener(Ma.audioTracks, "change", fa),
                                        this.removeTracksListener(Ma.textTracks, "change", sa.textTrackChangeHandler),
                                        this.remove(),
                                        this.off(),
                                    Ja && (Ja.destroy(), Ja = null)
                                },
                                this.init = function(a, c) {
                                    ya && (Ha = null, ra = a.sources, za = T(a.sources), a.sources.length && "hls" !== a.sources[0].type && this.sendMediaType(a.sources), pa = a.starttime || 0, oa = a.duration || 0, Ia.reason = "", W(ra[za]), this.setupSideloadedTracks(a.tracks), Ha = this.itemTracks, Ka = c, b.isHtml5Flv(ra[za].file, ra[za].type) && this.initFlvPlayer(), Ka.crossoriginAnonymous && Ma.setAttribute("crossorigin", "anonymous"))
                                },
                                this.initFlvPlayer = function() {
                                    var a = this;
                                    Ja && Ja.destroy();
                                    var b = {
                                        enableWorker: !1,
                                        lazyLoadMaxDuration: 180,
                                        seekType: "range"
                                    };
                                    Ka.minBufferLength > 0 && (b.lazyLoadMaxDuration = Ka.minBufferLength, Ka.minBufferLength < 30 && (b.lazyLoadRecoverDuration = Ka.minBufferLength));
                                    var c = {
                                        hasAudio: !0,
                                        hasVideo: !0,
                                        isLive: Ka.isLive,
                                        type: "flv",
                                        url: ra[za].file,
                                        withCredentials: !1
                                    };
                                    Ja = window.flvjs.createPlayer(c, b),
                                        Ja.attachMediaElement(Ma),
                                        Ja.on(e.JWPLAYER_ERROR,
                                            function(b, c, d) {
                                                "CodecUnsupported" === c && (Ja.unload(), Ja.detachMediaElement()),
                                                    a.trigger(e.JWPLAYER_MEDIA_ERROR, {
                                                        type: b,
                                                        detail: c + "," + d.msg,
                                                        code: "111",
                                                        message: "加载失败: 不能播放当前文件"
                                                    })
                                            }),
                                        Ja.on(e.JWPLAYER_ALIVE,
                                            function() {
                                                a.trigger(e.JWPLAYER_ALIVE)
                                            }),
                                        Ja.on(e.JWPLAYER_NO_LIVE_STREAM,
                                            function() {
                                                a.trigger(e.JWPLAYER_NO_LIVE_STREAM)
                                            })
                                },
                                this.load = function(a) {
                                    ya && (S(a.sources), a.sources.length && "hls" !== a.sources[0].type && this.sendMediaType(a.sources), r && !Ma.hasAttribute("jw-played") || sa.setState(f.LOADING), V(a.starttime || 0, a.duration || 0))
                                },
                                this.play = function() {
                                    return sa.seeking ? (sa.setState(f.LOADING), void sa.once(e.JWPLAYER_MEDIA_SEEKED, sa.play)) : void U()
                                },
                                this.pause = function() {
                                    n(wa),
                                        Ma.pause(),
                                        this.setState(f.PAUSED)
                                },
                                this.seek = function(a) {
                                    if (ya) if (a < 0 && (a += Y() + Z()), 0 === va && this.trigger(e.JWPLAYER_MEDIA_SEEK, {
                                            position: Ma.currentTime,
                                            offset: a
                                        }), ua || (ua = !!Z()), ua) {
                                        va = 0;
                                        try {
                                            sa.seeking = !0,
                                                Ma.currentTime = a
                                        } catch(b) {
                                            sa.seeking = !1,
                                                va = a
                                        }
                                    } else va = a,
                                    s && Ma.paused && U()
                                },
                                this.volume = function(a) {
                                    a = b.between(a / 100, 0, 1),
                                        Ma.volume = a
                                },
                                this.enableGPU = function() {
                                    throw "只有使用Flash播放才支持开启GPU"
                                },
                                this.disableGPU = function() {
                                    throw "只有使用Flash播放才支持开启GPU"
                                },
                                this.mute = function(a) {
                                    Ma.muted = !!a
                                },
                                this.checkComplete = function() {
                                    return Ca
                                },
                                this.detachMedia = function() {
                                    return n(wa),
                                        this.disableTextTrack(),
                                        ya = !1,
                                        Ma
                                },
                                this.attachMedia = function() {
                                    ya = !0,
                                        ua = !1,
                                        this.seeking = !1,
                                        Ma.loop = !1,
                                    Ca && da()
                                },
                                this.setContainer = function(a) {
                                    na = a,
                                        a.appendChild(Ma)
                                },
                                this.getContainer = function() {
                                    return na
                                },
                                this.remove = function() {
                                    X(),
                                        n(wa),
                                    na === Ma.parentNode && na.removeChild(Ma),
                                    Ja && (Ja.pause(), Ja.unload(), Ja.detachMediaElement())
                                },
                                this.setVisibility = function(b) {
                                    b = !!b,
                                        b || t ? a.style(na, {
                                            visibility: "visible",
                                            opacity: 1
                                        }) : a.style(na, {
                                            visibility: "",
                                            opacity: 0
                                        })
                                },
                                this.resize = function(b, c, d) {
                                    if (! (b && c && Ma.videoWidth && Ma.videoHeight)) return ! 1;
                                    var e = {
                                        objectFit: ""
                                    };
                                    if ("uniform" === d) {
                                        var f = b / c,
                                            g = Ma.videoWidth / Ma.videoHeight;
                                        Math.abs(f - g) < .09 && (e.objectFit = "fill", d = "exactfit")
                                    }
                                    if (p || t || u || v) {
                                        var h = -Math.floor(Ma.videoWidth / 2 + 1),
                                            i = -Math.floor(Ma.videoHeight / 2 + 1),
                                            j = Math.ceil(100 * b / Ma.videoWidth) / 100,
                                            k = Math.ceil(100 * c / Ma.videoHeight) / 100;
                                        "none" === d ? j = k = 1 : "fill" === d ? j = k = Math.max(j, k) : "uniform" === d && (j = k = Math.min(j, k)),
                                            e.width = Ma.videoWidth,
                                            e.height = Ma.videoHeight,
                                            e.top = e.left = "50%",
                                            e.margin = 0,
                                            a.transform(Ma, "translate(" + h + "px, " + i + "px) scale(" + j.toFixed(2) + ", " + k.toFixed(2) + ")")
                                    }
                                    return a.style(Ma, e),
                                        !1
                                },
                                this.setFullscreen = function(a) {
                                    if (a = !!a) {
                                        return ! (b.tryCatch(function() {
                                                var a = Ma.webkitEnterFullscreen || Ma.webkitEnterFullScreen;
                                                a && a.apply(Ma)
                                            }) instanceof b.Error) && sa.getFullScreen()
                                    }
                                    var c = Ma.webkitExitFullscreen || Ma.webkitExitFullScreen;
                                    return c && c.apply(Ma),
                                        a
                                },
                                sa.getFullScreen = function() {
                                    return Da || !!Ma.webkitDisplayingFullscreen
                                },
                                this.setCurrentQuality = function(a) {
                                    if (za !== a && a >= 0 && ra && ra.length > a) {
                                        za = a,
                                            Ia.reason = "api",
                                            Ia.level = {},
                                            this.trigger(e.JWPLAYER_MEDIA_LEVEL_CHANGED, {
                                                currentQuality: a,
                                                levels: R(ra)
                                            }),
                                            x.qualityLabel = ra[a].label;
                                        var c = Ma.currentTime || 0,
                                            d = Ma.duration || 0;
                                        d <= 0 && (d = oa),
                                            sa.setState(f.LOADING),
                                        b.isHtml5Flv(ra[za].file, ra[za].type) && this.initFlvPlayer(),
                                            V(c, d)
                                    }
                                },
                                this.getCurrentQuality = function() {
                                    return za
                                },
                                this.getQualityLevels = function() {
                                    return R(ra)
                                },
                                this.getName = function() {
                                    return {
                                        name: w
                                    }
                                },
                                this.setCurrentAudioTrack = ja,
                                this.getAudioTracks = ka,
                                this.getCurrentAudioTrack = la,
                                this.setPlaybackRate = function(a) {
                                    Ka.isLive || (Ma.playbackRate = a, this.trigger(e.JWPLAYER_PLAYBACKRATE, {
                                        playbackRate: a
                                    }))
                                }
                        }
                        var n = window.clearTimeout,
                            o = 256,
                            p = b.isIE(),
                            q = b.isMSIE(),
                            r = b.isMobile(),
                            s = b.isFF(),
                            t = b.isAndroidNative(),
                            u = b.isIOS(7),
                            v = b.isIOS(8),
                            w = "html5",
                            x = function() {};
                        return x.prototype = g,
                            m.prototype = new x,
                            m.getName = function() {
                                return {
                                    name: "html5"
                                }
                            },
                            m
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(1), c(42)],
                    void 0 !== (e = function(a, b) {
                        function c(a) {
                            return /^(?:(?:https?|file)\:)?\/\//.test(a)
                        }
                        function d(b) {
                            return a.some(b,
                                function(a) {
                                    return "parsererror" === a.nodeName
                                })
                        }
                        var e = {};
                        return e.getAbsolutePath = function(a, d) {
                            if (b.exists(d) || (d = document.location.href), b.exists(a)) {
                                if (c(a)) return a;
                                var e, f = d.substring(0, d.indexOf("://") + 3),
                                    g = d.substring(f.length, d.indexOf("/", f.length + 1));
                                if (0 === a.indexOf("/")) e = a.split("/");
                                else {
                                    var h = d.split("?")[0];
                                    h = h.substring(f.length + g.length + 1, h.lastIndexOf("/")),
                                        e = h.split("/").concat(a.split("/"))
                                }
                                for (var i = [], j = 0; j < e.length; j++) e[j] && b.exists(e[j]) && "." !== e[j] && (".." === e[j] ? i.pop() : i.push(e[j]));
                                return f + g + "/" + i.join("/")
                            }
                        },
                            e.getScriptPath = a.memoize(function(a) {
                                for (var b = document.getElementsByTagName("script"), c = 0; c < b.length; c++) {
                                    var d = b[c].src;
                                    if (d && d.indexOf(a) >= 0) return d.substr(0, d.indexOf(a))
                                }
                                return ""
                            }),
                            e.parseXML = function(a) {
                                var b = null;
                                try {
                                    "DOMParser" in window ? (b = (new window.DOMParser).parseFromString(a, "text/xml"), (d(b.childNodes) || b.childNodes && d(b.childNodes[0].childNodes)) && (b = null)) : (b = new window.ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a))
                                } catch(c) {}
                                return b
                            },
                            e.serialize = function(a) {
                                if (void 0 === a) return null;
                                if ("string" == typeof a && a.length < 6) {
                                    var b = a.toLowerCase();
                                    if ("true" === b) return ! 0;
                                    if ("false" === b) return ! 1;
                                    if (!isNaN(Number(a)) && !isNaN(parseFloat(a))) return Number(a)
                                }
                                return a
                            },
                            e.parseDimension = function(a) {
                                return "string" == typeof a ? "" === a ? 0 : a.lastIndexOf("%") > -1 ? a: parseInt(a.replace("px", ""), 10) : a
                            },
                            e.timeFormat = function(a, b) {
                                if (a <= 0 && !b) return "00:00";
                                var c = a < 0 ? "-": "";
                                a = Math.abs(a);
                                var d = Math.floor(a / 3600),
                                    e = Math.floor((a - 3600 * d) / 60),
                                    f = Math.floor(a % 60);
                                return c + (d ? d + ":": "") + (e < 10 ? "0": "") + e + ":" + (f < 10 ? "0": "") + f
                            },
                            e.adaptiveType = function(a) {
                                if (0 !== a) {
                                    if (a <= -120) return "DVR";
                                    if (a < 0 || a === 1 / 0) return "LIVE"
                                }
                                return "VOD"
                            },
                            e
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(4), c(3), c(1)],
                    void 0 !== (e = function(a, b, c) {
                        var d = {},
                            e = {
                                NEW: 0,
                                LOADING: 1,
                                ERROR: 2,
                                COMPLETE: 3
                            },
                            f = function(f, g) {
                                function h(b) {
                                    k = e.ERROR,
                                        j.trigger(a.ERROR, b)
                                }
                                function i(b) {
                                    k = e.COMPLETE,
                                        j.trigger(a.COMPLETE, b)
                                }
                                var j = c.extend(this, b),
                                    k = e.NEW;
                                this.addEventListener = this.on,
                                    this.removeEventListener = this.off,
                                    this.makeStyleLink = function(a) {
                                        var b = document.createElement("link");
                                        return b.type = "text/css",
                                            b.rel = "stylesheet",
                                            b.href = a,
                                            b
                                    },
                                    this.makeScriptTag = function(a) {
                                        var b = document.createElement("script");
                                        return b.src = a,
                                            b
                                    },
                                    this.makeTag = g ? this.makeStyleLink: this.makeScriptTag,
                                    this.load = function() {
                                        if (k === e.NEW) {
                                            var b = d[f];
                                            if (b && (k = b.getStatus()) < 2) return b.on(a.ERROR, h),
                                                void b.on(a.COMPLETE, i);
                                            var c = document.getElementsByTagName("head")[0] || document.documentElement,
                                                j = this.makeTag(f),
                                                l = !1;
                                            j.onload = j.onreadystatechange = function(a) {
                                                l || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (l = !0, i(a), j.onload = j.onreadystatechange = null, c && j.parentNode && !g && c.removeChild(j))
                                            },
                                                j.onerror = h,
                                                c.insertBefore(j, c.firstChild),
                                                k = e.LOADING,
                                                d[f] = this
                                        }
                                    },
                                    this.getStatus = function() {
                                        return k
                                    }
                            };
                        return f.loaderstatus = e,
                            f
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e, f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function(a) {
                            return typeof a
                        }: function(a) {
                            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol": typeof a
                        };
                    d = [c(1), c(8)],
                    void 0 !== (e = function(a, b) {
                        var c = {};
                        return c.exists = function(a) {
                            switch (void 0 === a ? "undefined": f(a)) {
                                case "string":
                                    return a.length > 0;
                                case "object":
                                    return null !== a;
                                case "undefined":
                                    return ! 1
                            }
                            return ! 0
                        },
                            c.isHTTPS = function() {
                                return 0 === window.location.href.indexOf("https")
                            },
                            c.isRtmp = function(a, b) {
                                return a && (0 === a.indexOf("rtmp") || "rtmp" === b)
                            },
                            c.isHls = function(a, c) {
                                return a && ("m3u8" === b.extension(a) || "hls" === b.extension(a) || "hls" === c)
                            },
                            c.isFlv = function(a, c) {
                                return a && ("flv" === b.extension(a) || "flv" === c)
                            },
                            c.isMp4 = function(a, c) {
                                return a && ("mp4" === b.extension(a) || "mp4" === c)
                            },
                            c.isHtml5Flv = function(a) {
                                var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                                return c.isFlv(a, b) && c.isFlvjsSupported()
                            },
                            c.isFlvjsSupported = function() {
                                return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
                            },
                            c.isMutipleHls = function(b) {
                                if (a.isArray(b) && b.length > 1) {
                                    var d = 0;
                                    if (a.each(b,
                                            function(a) {
                                                c.isHls(a.file, a.type) && d++
                                            }), d === b.length) return ! 0
                                }
                                return ! 1
                            },
                            c.typeOf = function(b) {
                                if (null === b) return "null";
                                var c = void 0 === b ? "undefined": f(b);
                                return "object" === c && a.isArray(b) ? "array": c
                            },
                            c
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(64), c(9), c(176), c(2)],
                    void 0 !== (e = function(a, b, c, d) {
                        return a.extend({
                            constructor: function(a, b) {
                                this.className = a + " jw-background-color jw-reset",
                                    this.orientation = b,
                                    this.dragStartListener = this.dragStart.bind(this),
                                    this.dragMoveListener = this.dragMove.bind(this),
                                    this.dragEndListener = this.dragEnd.bind(this),
                                    this.tapListener = this.tap.bind(this),
                                    this.setup()
                            },
                            setup: function() {
                                var a = {
                                    "default": this["default"],
                                    className: this.className,
                                    orientation: "jw-slider-" + this.orientation
                                };
                                this.el = d.createElement(c(a)),
                                    this.elementRail = d.getElementsByClassName("jw-slider-container", this.el)[0],
                                    this.elementBuffer = d.getElementsByClassName("jw-buffer", this.el)[0],
                                    this.elementProgress = d.getElementsByClassName("jw-progress", this.el)[0],
                                    this.elementThumb = d.getElementsByClassName("jw-knob", this.el)[0],
                                    this.userInteract = new b(this.element(), {
                                        preventScrolling: !0
                                    }),
                                    this.userInteract.on("dragStart", this.dragStartListener),
                                    this.userInteract.on("drag", this.dragMoveListener),
                                    this.userInteract.on("dragEnd", this.dragEndListener),
                                    this.userInteract.on("tap click", this.tapListener)
                            },
                            dragStart: function() {
                                this.trigger("dragStart"),
                                    this.railBounds = d.bounds(this.elementRail)
                            },
                            dragEnd: function(a) {
                                this.dragMove(a),
                                    this.trigger("dragEnd")
                            },
                            dragMove: function(a) {
                                var b, c, e = this.railBounds = this.railBounds ? this.railBounds: d.bounds(this.elementRail);
                                "horizontal" === this.orientation ? (b = a.pageX, c = b < e.left ? 0 : b > e.right ? 100 : 100 * d.between((b - e.left) / e.width, 0, 1)) : (b = a.pageY, c = b >= e.bottom ? 0 : b <= e.top ? 100 : 100 * d.between((e.height - (b - e.top)) / e.height, 0, 1));
                                var f = this.limit(c);
                                return this.render(f),
                                "drag" === a.type && d.hasClass(a.currentTarget, "jw-slider-time") || this.update(f),
                                    !1
                            },
                            tap: function(a) {
                                this.railBounds = d.bounds(this.elementRail),
                                    this.dragMove(a)
                            },
                            limit: function(a) {
                                return a
                            },
                            update: function(a) {
                                this.trigger("update", {
                                    percentage: a
                                })
                            },
                            render: function(a) {
                                a = Math.max(0, Math.min(a, 100)),
                                    "horizontal" === this.orientation ? (this.elementThumb.style.left = a + "%", this.elementProgress.style.width = a + "%") : (this.elementThumb.style.bottom = a + "%", this.elementProgress.style.height = a + "%")
                            },
                            updateBuffer: function(a) {
                                a && (this.elementBuffer.style.width = a + "%")
                            },
                            element: function() {
                                return this.el
                            }
                        })
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(73), c(1), c(20), c(60), c(34)],
                    void 0 !== (e = function(a, b, c, d, e) {
                        var f = [],
                            g = 0,
                            h = function(b) {
                                var c, d;
                                return b ? "string" == typeof b ? (c = i(b)) || (d = document.getElementById(b)) : "number" == typeof b ? c = f[b] : b.nodeType && (d = b, c = i(d.id)) : c = f[0],
                                c || (d ? j(new a(d, k)) : {
                                    registerPlugin: e.registerPlugin
                                })
                            },
                            i = function(a) {
                                for (var b = 0; b < f.length; b++) if (f[b].id === a) return f[b];
                                return null
                            },
                            j = function(a) {
                                return g++,
                                    a.uniqueId = g,
                                    f.push(a),
                                    a
                            },
                            k = function(a) {
                                for (var b = f.length; b--;) if (f[b].uniqueId === a.uniqueId) {
                                    f.splice(b, 1);
                                    break
                                }
                            },
                            l = {
                                selectPlayer: h,
                                registerProvider: c.registerProvider,
                                availableProviders: d,
                                registerPlugin: e.registerPlugin
                            };
                        return h.api = l,
                            l
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(1), c(2)],
                    void 0 !== (e = function(a, b) {
                        function c(a) {
                            return ("baiducyberplayer." + a).toString()
                        }
                        function d() {
                            return a.reduce(this.persistItems,
                                function(a, d) {
                                    var e = k[c(d)];
                                    return e && (a[d] = b.serialize(e)),
                                        a
                                },
                                {})
                        }
                        function e(a, b) {
                            try {
                                k[c(a)] = b
                            } catch(d) {}
                        }
                        function f(a) {
                            return k[c(a)]
                        }
                        function g(a) {
                            return k.removeItem(c(a))
                        }
                        function h() {
                            a.each(this.persistItems,
                                function(a) {
                                    k.removeItem(c(a))
                                })
                        }
                        function i() {
                            this.persistItems = ["volume", "mute", "captionLabel", "qualityLabel", "playbackRate"]
                        }
                        function j(b) {
                            a.each(this.persistItems,
                                function(a) {
                                    b.on("change:" + a,
                                        function(b, c) {
                                            e(a, c)
                                        })
                                })
                        }
                        var k = {
                            getItem: b.noop,
                            setItem: b.noop,
                            removeItem: b.noop
                        };
                        try {
                            k = window.localStorage
                        } catch(l) {}
                        return a.extend(i.prototype, {
                            getAllItems: d,
                            track: j,
                            clear: h,
                            setItem: e,
                            getItem: f,
                            clearItem: g
                        }),
                            i
                    }.apply(b, d)) && (a.exports = e)
                },
                , , , , , , , , , ,
                function(a, b, c) {
                    var d, e;
                    d = [c(1), c(58), c(114)],
                    void 0 !== (e = function(a, b, c) {
                        var d = {
                            sources: [],
                            tracks: []
                        };
                        return function(e) {
                            e = e || {},
                            a.isArray(e.tracks) || delete e.tracks;
                            var f = a.extend({},
                                d, e);
                            a.isObject(f.sources) && !a.isArray(f.sources) && (f.sources = [b(f.sources)]),
                            a.isArray(f.sources) && 0 !== f.sources.length || (e.levels ? f.sources = e.levels: f.sources = [b(e)]);
                            for (var g = 0; g < f.sources.length; g++) {
                                var h = f.sources[g];
                                if (h) {
                                    var i = h["default"];
                                    h["default"] = !!i && "true" === i.toString(),
                                    f.sources[g].label || (f.sources[g].label = g.toString()),
                                        f.sources[g] = b(f.sources[g])
                                }
                            }
                            return f.sources = a.compact(f.sources),
                            a.isArray(f.tracks) || (f.tracks = []),
                            a.isArray(f.captions) && (f.tracks = f.tracks.concat(f.captions), delete f.captions),
                                f.tracks = a.compact(a.map(f.tracks, c)),
                                f
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(19), c(112), c(2), c(4), c(3), c(1)],
                    void 0 !== (e = function(a, b, c, d, e, f) {
                        return function() {
                            function g(e) {
                                c.tryCatch(function() {
                                    var c, g = e.responseXML ? e.responseXML.childNodes: null,
                                        h = "";
                                    if (g) {
                                        for (var k = 0; k < g.length && (h = g[k], 8 === h.nodeType); k++);
                                        "xml" === a.localName(h) && (h = h.nextSibling),
                                        "rss" === a.localName(h) && (c = {
                                            playlist: b.parse(h)
                                        })
                                    }
                                    if (!c) try {
                                        var l = JSON.parse(e.responseText);
                                        if (f.isArray(l)) c = {
                                            playlist: l
                                        };
                                        else {
                                            if (!f.isArray(l.playlist)) throw null;
                                            c = l
                                        }
                                    } catch(m) {
                                        return void i("Not a valid RSS/JSON feed")
                                    }
                                    j.trigger(d.JWPLAYER_PLAYLIST_LOADED, c)
                                }) instanceof c.Error && i()
                            }
                            function h(a) {
                                i("Playlist load error: " + a)
                            }
                            function i(a) {
                                j.trigger(d.JWPLAYER_ERROR, {
                                    message: a || "文件加载失败"
                                })
                            }
                            var j = f.extend(this, e);
                            this.load = function(a) {
                                c.ajax(a, g, h)
                            },
                                this.destroy = function() {
                                    this.off()
                                }
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(2), c(8), c(1)],
                    void 0 !== (e = function(a, b, c) {
                        var d = {
                            "default": !1
                        };
                        return function(e) {
                            if (e && e.file) { (a.isRtmp(e.file) || a.isFlv(e.file)) && a.isMobile() && e.fallbackfile && a.isHls(e.fallbackfile) && (e.file = e.fallbackfile),
                            a.isMobile() || a.isFlvjsSupported() || !a.isHls(e.file) && !a.isFlv(e.file) || !e.fallbackfile || (e.file = e.fallbackfile);
                                var f = c.extend({},
                                    d, e);
                                f.file = b.trim("" + f.file),
                                    f.file = decodeURI(f.file),
                                    f.file = f.file.replace("%3F", "?"),
                                    f.file = f.file.replace("%3D", "="),
                                    f.file = f.file.replace("%2F", "/");
                                var g = /^[^\/]+\/(?:x-)?([^\/]+)$/;
                                if (a.isRtmp(f.file) ? f.type = "rtmp": g.test(f.type) ? f.type = f.type.replace(g, "$1") : f.type || (f.type = b.extension(f.file)), f.type) {
                                    switch (f.type) {
                                        case "m3u8":
                                        case "vnd.apple.mpegurl":
                                            f.type = "hls";
                                            break;
                                        case "dash+xml":
                                            f.type = "dash";
                                            break;
                                        case "smil":
                                            f.type = "rtmp";
                                            break;
                                        case "m4a":
                                            f.type = "aac"
                                    }
                                    return c.each(f,
                                        function(a, b) {
                                            "" === a && delete f[b]
                                        }),
                                        f
                                }
                            }
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e, f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function(a) {
                            return typeof a
                        }: function(a) {
                            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol": typeof a
                        };
                    d = [c(2), c(25), c(4), c(3), c(41), c(1)],
                    void 0 !== (e = function(a, b, c, d, e, g) {
                        var h = {
                            FLASH: 0,
                            JAVASCRIPT: 1,
                            HYBRID: 2
                        };
                        return function(i) {
                            function j() {
                                switch (b.getPluginPathType(i)) {
                                    case b.pluginPathType.ABSOLUTE:
                                        return i;
                                    case b.pluginPathType.RELATIVE:
                                        return a.getAbsolutePath(i, window.location.href)
                                }
                            }
                            function k() {
                                g.defer(function() {
                                    r = e.loaderstatus.COMPLETE,
                                        q.trigger(c.COMPLETE)
                                })
                            }
                            function l() {
                                r = e.loaderstatus.ERROR,
                                    q.trigger(c.ERROR, {
                                        url: i
                                    })
                            }
                            var m, n, o, p, q = g.extend(this, d),
                                r = e.loaderstatus.NEW;
                            this.load = function() {
                                if (r === e.loaderstatus.NEW) {
                                    if (i.lastIndexOf(".swf") > 0) return m = i,
                                        r = e.loaderstatus.COMPLETE,
                                        void q.trigger(c.COMPLETE);
                                    if (b.getPluginPathType(i) === b.pluginPathType.CDN) return r = e.loaderstatus.COMPLETE,
                                        void q.trigger(c.COMPLETE);
                                    r = e.loaderstatus.LOADING;
                                    var a = new e(j());
                                    a.on(c.COMPLETE, k),
                                        a.on(c.ERROR, l),
                                        a.load()
                                }
                            },
                                this.registerPlugin = function(a, b, d, f) {
                                    p && (clearTimeout(p), p = void 0),
                                        o = b,
                                        d && f ? (m = f, n = d) : "string" == typeof d ? m = d: "function" == typeof d ? n = d: d || f || (m = a),
                                        r = e.loaderstatus.COMPLETE,
                                        q.trigger(c.COMPLETE)
                                },
                                this.getStatus = function() {
                                    return r
                                },
                                this.getPluginName = function() {
                                    return b.getPluginName(i)
                                },
                                this.getFlashPath = function() {
                                    if (m) switch (b.getPluginPathType(m)) {
                                        case b.pluginPathType.ABSOLUTE:
                                            return m;
                                        case b.pluginPathType.RELATIVE:
                                            return i.lastIndexOf(".swf") > 0 ? a.getAbsolutePath(m, window.location.href) : a.getAbsolutePath(m, j())
                                    }
                                    return null
                                },
                                this.getJS = function() {
                                    return n
                                },
                                this.getTarget = function() {
                                    return o
                                },
                                this.getPluginmode = function() {
                                    return void 0 !== (void 0 === m ? "undefined": f(m)) && void 0 !== (void 0 === n ? "undefined": f(n)) ? h.HYBRID: void 0 !== (void 0 === m ? "undefined": f(m)) ? h.FLASH: void 0 !== (void 0 === n ? "undefined": f(n)) ? h.JAVASCRIPT: void 0
                                },
                                this.getNewInstance = function(a, b, c) {
                                    return new n(a, b, c)
                                },
                                this.getURL = function() {
                                    return i
                                }
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(2), c(1), c(126)],
                    void 0 !== (e = function(a, b, c) {
                        function d(b) {
                            if ("hls" === b.type) if (!1 !== b.androidhls) {
                                var c = a.isAndroidNative;
                                if (c(2) || c(3) || c("4.0")) return ! 1;
                                if (a.isAndroid()) return ! 0
                            } else if (a.isAndroid()) return ! 1;
                            return null
                        }
                        return [{
                            name: "html5",
                            supports: function(b) {
                                var e = {
                                    aac: "audio/mp4",
                                    mp4: "video/mp4",
                                    f4v: "video/mp4",
                                    m4v: "video/mp4",
                                    mov: "video/mp4",
                                    mkv: "video/mp4",
                                    mp3: "audio/mpeg",
                                    wav: "audio/wav",
                                    mpeg: "audio/mpeg",
                                    ogv: "video/ogg",
                                    ogg: "video/ogg",
                                    oga: "video/ogg",
                                    vorbis: "video/ogg",
                                    webm: "video/webm",
                                    f4a: "video/aac",
                                    m3u8: "application/vnd.apple.mpegurl",
                                    m3u: "application/vnd.apple.mpegurl",
                                    hls: "application/vnd.apple.mpegurl"
                                };
                                a.isFlvjsSupported() && (e.flv = "video/mp4");
                                var f = b.file,
                                    g = b.type,
                                    h = d(b);
                                if (null !== h) return h;
                                if (a.isRtmp(f, g)) return ! 1;
                                if (!e[g]) return ! 1;
                                if (a.isEdge() && a.isHls(f, g)) return ! 1;
                                if (a.isPoorIE()) return ! 1;
                                if (a.isHls(f, g) && a.isSafari() && !a.isMobile()) return ! 1;
                                if (c.canPlayType) {
                                    return !! c.canPlayType(e[g])
                                }
                                return ! 1
                            }
                        },
                            {
                                name: "videojs",
                                supports: function(b) {
                                    return ! (a.isChrome() && parseInt(a.getChromeVersion()) < 50) && window.videojs && window.videojs.MediaSource && window.videojs.MediaSource.supportsNativeMediaSources() && a.isHls(b.file, b.type)
                                }
                            },
                            {
                                name: "flash",
                                supports: function(c) {
                                    var d = {
                                            flv: "video",
                                            f4v: "video",
                                            mov: "video",
                                            m4a: "video",
                                            m4v: "video",
                                            mp4: "video",
                                            aac: "video",
                                            f4a: "video",
                                            mp3: "sound",
                                            mpeg: "sound",
                                            smil: "rtmp",
                                            m3u8: "hls",
                                            hls: "hls"
                                        },
                                        e = b.keys(d);
                                    if (!a.isFlashSupported()) return ! 1;
                                    var f = c.file,
                                        g = c.type;
                                    return !! a.isRtmp(f, g) || b.contains(e, g)
                                }
                            }]
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(1), c(65), c(2), c(27)],
                    void 0 !== (e = function(a, b, c, d) {
                        function e(c) {
                            var d = c.currentTarget.activeCues;
                            if (d && d.length) {
                                var e = d[d.length - 1].startTime,
                                    f = [];
                                if (a.each(d,
                                        function(a) {
                                            a.startTime < e || (a.data ? f.push(a) : a.text && this.trigger("meta", {
                                                    metadataTime: e,
                                                    metadata: JSON.parse(a.text)
                                                }))
                                        },
                                        this), f.length) {
                                    var g = b.parseID3(f);
                                    this.trigger("meta", {
                                        metadataTime: e,
                                        metadata: g
                                    })
                                }
                            }
                        }
                        function f() {
                            var a = this.video.textTracks;
                            if (v = -1, a) {
                                if (t || k(), a.length) {
                                    var b = 0,
                                        c = a.length;
                                    for (w = 0, b; b < c; b++) {
                                        var d = a[b];
                                        if (!u[b + d.kind]) if ("metadata" === d.kind) d.oncuechange = e.bind(this),
                                            d.mode = "showing",
                                            u[b + d.kind] = d,
                                        "ID3 Metadata" === d.label && w++;
                                        else if ("subtitles" === d.kind || "captions" === d.kind) {
                                            var f = d.mode;
                                            if (d.mode = "hidden", !d.cues.length && "caterpillar" === this.getName().name && "Unknown CC" === d.label) continue;
                                            d.mode = f,
                                                t.push(d),
                                                u[b + d.kind] = d,
                                            "Unknown CC" === d.label && w++
                                        }
                                    }
                                }
                                this.addTracksListener(a, "change", p),
                                t && t.length && this.trigger("subtitlesTracks", {
                                    tracks: t
                                })
                            }
                        }
                        function g(a) {
                            var b = c.isChrome() || c.isIOS() || c.isSafari(); ! this._isSDK && b && a && (h.call(this, a) || (r(), d.emptyElement(this.video), i(), this.itemTracks = a, j.call(this, a)))
                        }
                        function h(a) {
                            return a === this.itemTracks && t && t.length === w + this.itemTracks.length
                        }
                        function i() {
                            if (t) {
                                var b = a.filter(t,
                                    function(a) {
                                        return "Unknown CC" === a.label || "ID3 Metadata" === a.label
                                    });
                                k(),
                                    a.each(b,
                                        function(a, b) {
                                            u[b + a] = a
                                        }),
                                    t = b
                            }
                        }
                        function j(a) {
                            if (a) {
                                var b = !1;
                                t || k();
                                for (var d = 0; d < a.length; d++) {
                                    var e = a[d];
                                    if (/\.(?:web)?vtt(?:\?.*)?$/i.test(e.file)) {
                                        if (/subtitles|captions|descriptions|chapters|metadata/i.test(e.kind)) {
                                            b || !this.video.hasAttribute("crossorigin") && c.crossdomain(e.file) && (this.video.setAttribute("crossorigin", "anonymous"), b = !0);
                                            var f = document.createElement("track");
                                            f.src = e.file,
                                                f.kind = e.kind,
                                                f.srclang = e.language || "",
                                                f.label = e.label,
                                                f.mode = "disabled",
                                                f.id = e.defaulttrack ? "default": "",
                                                this.video.appendChild(f)
                                        }
                                    } else t.push(e),
                                        u[d + e.kind] = f
                                }
                            }
                        }
                        function k() {
                            t = [],
                                u = {}
                        }
                        function l(b) {
                            t && (0 === b && a.each(t,
                                function(a) {
                                    a.mode = "disabled"
                                }), v !== b - 1 && (r(), v = b - 1, t[v] && (t[v].mode = "showing"), this.trigger("subtitlesTrackChanged", {
                                currentTrack: v + 1,
                                tracks: t
                            })))
                        }
                        function m() {
                            return v
                        }
                        function n(a, b, c) {
                            c = c.bind(this),
                                a.addEventListener ? a.addEventListener(b, c) : a["on" + b] = c
                        }
                        function o(a, b, c) {
                            a && (a.removeEventListener ? a.removeEventListener(b, c) : a["on" + b] = null)
                        }
                        function p() {
                            if (t) {
                                var a = -1,
                                    b = 0;
                                for (b; b < t.length; b++) if ("showing" === t[b].mode) {
                                    a = b;
                                    break
                                }
                                this.setSubtitlesTrack(a + 1)
                            } else this.setTextTracks()
                        }
                        function q() {
                            t = null,
                                u = null,
                                w = 0
                        }
                        function r() {
                            t && t[v] && (t[v].mode = "disabled")
                        }
                        var s = {
                                addTracksListener: n,
                                clearTracks: q,
                                disableTextTrack: r,
                                getSubtitlesTrack: m,
                                removeTracksListener: o,
                                setTextTracks: f,
                                setupSideloadedTracks: g,
                                setSubtitlesTrack: l,
                                textTrackChangeHandler: p
                            },
                            t = null,
                            u = null,
                            v = -1,
                            w = 0;
                        return s
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(1), c(40)],
                    void 0 !== (e = function(a, b) {
                        function c(a) {
                            a.onload = null,
                                a.onprogress = null,
                                a.onreadystatechange = null,
                                a.onerror = null,
                            "abort" in a && a.abort()
                        }
                        function d(b, d) {
                            return function(e) {
                                var f = e && e.currentTarget || d.xhr;
                                if (clearTimeout(d.timeoutId), d.retryWithoutCredentials && d.xhr.withCredentials) {
                                    c(f);
                                    var g = a.extend({},
                                        d, {
                                            xhr: null,
                                            withCredentials: !1,
                                            retryWithoutCredentials: !1
                                        });
                                    return void l(g)
                                }
                                d.onerror(b, d.url, f)
                            }
                        }
                        function e(a) {
                            return function(b) {
                                var c = b && b.currentTarget || a.xhr;
                                if (4 === c.readyState) {
                                    if (clearTimeout(a.timeoutId), c.status >= 400) {
                                        var d;
                                        return d = 404 === c.status ? "File not found": c.status + "(" + c.statusText + ")",
                                            a.onerror(d, a.url, c)
                                    }
                                    if (200 === c.status) return f(a)(b)
                                }
                            }
                        }
                        function f(a) {
                            return function(c) {
                                var d = c && c.currentTarget || a.xhr;
                                if (clearTimeout(a.timeoutId), a.responseType) {
                                    if ("json" === a.responseType) return g(d, a)
                                } else {
                                    var e, f = d.responseXML;
                                    if (f) try {
                                        e = f.firstChild
                                    } catch(i) {}
                                    if (f && e) return h(d, f, a);
                                    if (j && d.responseText && !f && (f = b.parseXML(d.responseText)) && f.firstChild) return h(d, f, a);
                                    if (a.requireValidXML) return void a.onerror("Invalid XML", a.url, d)
                                }
                                a.oncomplete(d)
                            }
                        }
                        function g(b, c) {
                            if (!b.response || a.isString(b.response) && '"' !== b.responseText.substr(1)) try {
                                b = a.extend({},
                                    b, {
                                        response: JSON.parse(b.responseText)
                                    })
                            } catch(d) {
                                return void c.onerror("Invalid JSON", c.url, b)
                            }
                            return c.oncomplete(b)
                        }
                        function h(b, c, d) {
                            var e = c.documentElement;
                            return d.requireValidXML && ("parsererror" === e.nodeName || e.getElementsByTagName("parsererror").length) ? void d.onerror("Invalid XML", d.url, b) : (b.responseXML || (b = a.extend({},
                                b, {
                                    responseXML: c
                                })), d.oncomplete(b))
                        }
                        var i = function() {},
                            j = !1,
                            k = function(a) {
                                var b = document.createElement("a"),
                                    c = document.createElement("a");
                                b.href = location.href;
                                try {
                                    return c.href = a,
                                        c.href = c.href,
                                    b.protocol + "//" + b.host != c.protocol + "//" + c.host
                                } catch(d) {}
                                return ! 0
                            },
                            l = function(b, g, h, l) {
                                a.isObject(b) && (l = b, b = l.url);
                                var m, n = a.extend({
                                        xhr: null,
                                        url: b,
                                        withCredentials: !1,
                                        retryWithoutCredentials: !1,
                                        timeout: 6e4,
                                        timeoutId: -1,
                                        oncomplete: g || i,
                                        onerror: h || i,
                                        mimeType: l && !l.responseType ? "text/xml": "",
                                        requireValidXML: !1,
                                        responseType: l && l.plainText ? "text": ""
                                    },
                                    l);
                                if ("XDomainRequest" in window && k(b)) m = n.xhr = new window.XDomainRequest,
                                    m.onload = f(n),
                                    m.ontimeout = m.onprogress = i,
                                    j = !0;
                                else {
                                    if (! ("XMLHttpRequest" in window)) return void n.onerror("", b);
                                    m = n.xhr = new window.XMLHttpRequest,
                                        m.onreadystatechange = e(n)
                                }
                                var o = d("文件加载失败", n);
                                m.onerror = o,
                                    "overrideMimeType" in m ? n.mimeType && m.overrideMimeType(n.mimeType) : j = !0;
                                try {
                                    b = b.replace(/#.*$/, ""),
                                        m.open("GET", b, !0)
                                } catch(p) {
                                    return o(p),
                                        m
                                }
                                if (n.responseType) try {
                                    m.responseType = n.responseType
                                } catch(p) {}
                                n.timeout && (n.timeoutId = setTimeout(function() {
                                        c(m),
                                            n.onerror("Timeout", b, m)
                                    },
                                    n.timeout), m.onabort = function() {
                                    clearTimeout(n.timeoutId)
                                });
                                try {
                                    n.withCredentials && "withCredentials" in m && (m.withCredentials = !0),
                                        m.send()
                                } catch(p) {
                                    o(p)
                                }
                                return m
                            };
                        return {
                            ajax: l,
                            crossdomain: k
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(1)],
                    void 0 !== (e = function(a) {
                        function b(a) {
                            return function() {
                                return d(a)
                            }
                        }
                        var c = {},
                            d = a.memoize(function(a) {
                                return null !== navigator.userAgent.toLowerCase().match(a)
                            }),
                            e = c.isInt = function(a) {
                                return parseFloat(a) % 1 == 0
                            };
                        c.isFlashSupported = function() {
                            var a = c.flashVersion();
                            return a && a >= 11.2
                        },
                            c.isFF = b(/firefox/i),
                            c.isIPod = b(/iP(hone|od)/i),
                            c.isIPad = b(/iPad/i),
                            c.isSafari602 = b(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i),
                            c.isOSX = b(/Mac OS X/i),
                            c.isEdge = b(/\sedge\/\d+/i);
                        var f = c.isIETrident = function(a) {
                                return !! c.isEdge() || (a ? (a = parseFloat(a).toFixed(1), d(new RegExp("trident/.+rv:\\s*" + a, "i"))) : d(/trident/i))
                            },
                            g = c.isMSIE = function(a) {
                                return a ? (a = parseFloat(a).toFixed(1), d(new RegExp("msie\\s*" + a, "i"))) : d(/msie/i)
                            },
                            h = b(/chrome/i);
                        c.isChrome = function() {
                            return h() && !c.isEdge()
                        },
                            c.isChrome66 = function() {
                                var a = window.navigator.userAgent.toLowerCase(),
                                    b = a.match(/chrome\/([\d.]+)/);
                                return !! (this.isChrome() && b && b[1] && parseInt(b[1]) >= 66)
                            },
                            c.isIE = function(a) {
                                return a ? (a = parseFloat(a).toFixed(1), a >= 11 ? f(a) : g(a)) : g() || f()
                            },
                            c.isSafari = function() {
                                return d(/safari/i) && !d(/chrome/i) && !d(/chromium/i) && !d(/android/i)
                            };
                        var i = c.isIOS = function(a) {
                            return d(a ? new RegExp("iP(hone|ad|od).+\\s(OS\\s" + a + "|.*\\sVersion/" + a + ")", "i") : /iP(hone|ad|od)/i)
                        };
                        c.isAndroidNative = function(a) {
                            return j(a, !0)
                        };
                        var j = c.isAndroid = function(a, b) {
                            return ! (b && d(/chrome\/[123456789]/i) && !d(/chrome\/18/)) && (a ? (e(a) && !/\./.test(a) && (a += "."), d(new RegExp("Android\\s*" + a, "i"))) : d(/Android/i))
                        };
                        return c.isMobile = function() {
                            return i() || j()
                        },
                            c.isIframe = function() {
                                return window.frameElement && "IFRAME" === window.frameElement.nodeName
                            },
                            c.flashVersion = function() {
                                if (c.isAndroid()) return 0;
                                var a, b = navigator.plugins;
                                if (b && (a = b["Shockwave Flash"]) && a.description) return parseFloat(a.description.replace(/\D+(\d+\.?\d*).*/, "$1"));
                                if ("undefined" != typeof window.ActiveXObject) {
                                    try {
                                        if (a = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return parseFloat(a.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/, "."))
                                    } catch(d) {
                                        return 0
                                    }
                                    return a
                                }
                                return 0
                            },
                            c.getBrowserInfo = function() {
                                var a = window.navigator.userAgent.toLowerCase(),
                                    b = "";
                                if (this.isIE()) b = a.match(/msie ([\d.]+)/) ? "IE-" + a.match(/msie ([\d.]+)/)[1] : "IE-unknown";
                                else if (this.isChrome()) {
                                    var c = a.match(/chrome\/([\d.]+)/);
                                    b = c && c.length > 1 ? "Chrome-" + c[1] : "Chrome-unknown"
                                } else if (this.isFF()) b = "Firefox-" + a.match(/firefox\/([\d.]+)/)[1];
                                else if (this.isSafari()) {
                                    var d = a.match(/version\/([\d.]+)/);
                                    b = "Safari" + (d && d.length ? "-" + a.match(/version\/([\d.]+)/)[1] : "")
                                } else b = i() ? "ios": j() ? "android": "other";
                                return b
                            },
                            c.isPoorIE = function() {
                                return this.isIE() && (g(8) || g(7) || g(6) || document.documentMode && document.documentMode <= 8)
                            },
                            c.getChromeVersion = function() {
                                var a = window.navigator.userAgent.toLowerCase();
                                if (this.isChrome()) {
                                    var b = a.match(/chrome\/([\d.]+)/);
                                    return b && b.length > 1 ? b[1] : -1
                                }
                                return - 1
                            },
                            c
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(3), c(1)],
                    void 0 !== (e = function(a, b) {
                        function c() {}
                        var d = function(a, c) {
                            var d, e = this;
                            d = a && b.has(a, "constructor") ? a.constructor: function() {
                                return e.apply(this, arguments)
                            },
                                b.extend(d, e, c);
                            var f = function() {
                                this.constructor = d
                            };
                            return f.prototype = e.prototype,
                                d.prototype = new f,
                            a && b.extend(d.prototype, a),
                                d.__super__ = e.prototype,
                                d
                        };
                        return c.extend = d,
                            b.extend(c.prototype, a),
                            c
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(1)],
                    void 0 !== (e = function(a) {
                        var b = {},
                            c = {
                                TIT2: "title",
                                TT2: "title",
                                WXXX: "url",
                                TPE1: "artist",
                                TP1: "artist",
                                TALB: "album",
                                TAL: "album"
                            };
                        return b.utf8ArrayToStr = function(a, b) {
                            var c, d, e, f, g, h;
                            for (c = "", e = a.length, d = b || 0; d < e;) if (0 !== (f = a[d++]) && 3 !== f) switch (f >> 4) {
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                    c += String.fromCharCode(f);
                                    break;
                                case 12:
                                case 13:
                                    g = a[d++],
                                        c += String.fromCharCode((31 & f) << 6 | 63 & g);
                                    break;
                                case 14:
                                    g = a[d++],
                                        h = a[d++],
                                        c += String.fromCharCode((15 & f) << 12 | (63 & g) << 6 | (63 & h) << 0)
                            }
                            return c
                        },
                            b.utf16BigEndianArrayToStr = function(a, b) {
                                var c, d, e;
                                for (c = "", e = a.length - 1, d = b || 0; d < e;) 254 === a[d] && 255 === a[d + 1] || (c += String.fromCharCode((a[d] << 8) + a[d + 1])),
                                    d += 2;
                                return c
                            },
                            b.syncSafeInt = function(a) {
                                var c = b.arrayToInt(a);
                                return 127 & c | (32512 & c) >> 1 | (8323072 & c) >> 2 | (2130706432 & c) >> 3
                            },
                            b.arrayToInt = function(a) {
                                for (var b = "0x",
                                         c = 0; c < a.length; c++) b += a[c].toString(16);
                                return parseInt(b)
                            },
                            b.parseID3 = function(d) {
                                return a.reduce(d,
                                    function(d, e) {
                                        if (! ("value" in e) && "data" in e && e.data instanceof ArrayBuffer) {
                                            var f = e,
                                                g = new Uint8Array(f.data),
                                                h = g.length;
                                            e = {
                                                value: {
                                                    key: "",
                                                    data: ""
                                                }
                                            };
                                            for (var i = 10; i < 14 && i < g.length && 0 !== g[i];) e.value.key += String.fromCharCode(g[i]),
                                                i++;
                                            var j = 19,
                                                k = g[j];
                                            3 !== k && 0 !== k || (k = g[++j], h--);
                                            var l = 0;
                                            if (1 !== k && 2 !== k) for (var m = j + 1; m < h; m++) if (0 === g[m]) {
                                                l = m - j;
                                                break
                                            }
                                            if (l > 0) {
                                                var n = b.utf8ArrayToStr(g.subarray(j, j += l), 0);
                                                if ("PRIV" === e.value.key) {
                                                    if ("com.apple.streaming.transportStreamTimestamp" === n) {
                                                        var o = 1 & b.syncSafeInt(g.subarray(j, j += 4)),
                                                            p = b.syncSafeInt(g.subarray(j, j += 4));
                                                        o && (p += 4294967296),
                                                            e.value.data = p
                                                    } else e.value.data = b.utf8ArrayToStr(g, j + 1);
                                                    e.value.info = n
                                                } else e.value.info = n,
                                                    e.value.data = b.utf8ArrayToStr(g, j + 1)
                                            } else {
                                                var q = g[j];
                                                e.value.data = 1 === q || 2 === q ? b.utf16BigEndianArrayToStr(g, j + 1) : b.utf8ArrayToStr(g, j + 1)
                                            }
                                        }
                                        if (c.hasOwnProperty(e.value.key) && (d[c[e.value.key]] = e.value.data), e.value.info) {
                                            var r = d[e.value.key];
                                            a.isObject(r) || (r = {},
                                                d[e.value.key] = r),
                                                r[e.value.info] = e.value.data
                                        } else d[e.value.key] = e.value.data;
                                        return d
                                    },
                                    {})
                            },
                            b
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(1)],
                    void 0 !== (e = function(a) {
                        return function() {
                            var b = {},
                                c = {},
                                d = {},
                                e = {};
                            return {
                                start: function(c) {
                                    b[c] = a.now(),
                                        d[c] = d[c] + 1 || 1
                                },
                                end: function(d) {
                                    if (b[d]) {
                                        var e = a.now() - b[d];
                                        c[d] = c[d] + e || e
                                    }
                                },
                                dump: function() {
                                    return {
                                        counts: d,
                                        sums: c,
                                        events: e
                                    }
                                },
                                tick: function(b, c) {
                                    e[b] = c || a.now()
                                },
                                between: function(a, b) {
                                    return e[b] && e[a] ? e[b] - e[a] : -1
                                }
                            }
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    "use strict";
                    function d(a) {
                        return a && a.__esModule ? a: {
                            "default": a
                        }
                    }
                    function e(a, b, c) {
                        this.helpers = a || {},
                            this.partials = b || {},
                            this.decorators = c || {},
                            i.registerDefaultHelpers(this),
                            j.registerDefaultDecorators(this)
                    }
                    b.__esModule = !0,
                        b.HandlebarsEnvironment = e;
                    var f = c(13),
                        g = c(23),
                        h = d(g),
                        i = c(152),
                        j = c(150),
                        k = c(160),
                        l = d(k);
                    b.VERSION = "4.0.5";
                    b.COMPILER_REVISION = 7;
                    var m = {
                        1 : "<= 1.0.rc.2",
                        2 : "== 1.0.0-rc.3",
                        3 : "== 1.0.0-rc.4",
                        4 : "== 1.x.x",
                        5 : "== 2.0.0-alpha.x",
                        6 : ">= 2.0.0-beta.1",
                        7 : ">= 4.0.0"
                    };
                    b.REVISION_CHANGES = m;
                    var n = "[object Object]";
                    e.prototype = {
                        constructor: e,
                        logger: l["default"],
                        log: l["default"].log,
                        registerHelper: function(a, b) {
                            if (f.toString.call(a) === n) {
                                if (b) throw new h["default"]("Arg not supported with multiple helpers");
                                f.extend(this.helpers, a)
                            } else this.helpers[a] = b
                        },
                        unregisterHelper: function(a) {
                            delete this.helpers[a]
                        },
                        registerPartial: function(a, b) {
                            if (f.toString.call(a) === n) f.extend(this.partials, a);
                            else {
                                if (void 0 === b) throw new h["default"]('Attempting to register a partial called "' + a + '" as undefined');
                                this.partials[a] = b
                            }
                        },
                        unregisterPartial: function(a) {
                            delete this.partials[a]
                        },
                        registerDecorator: function(a, b) {
                            if (f.toString.call(a) === n) {
                                if (b) throw new h["default"]("Arg not supported with multiple decorators");
                                f.extend(this.decorators, a)
                            } else this.decorators[a] = b
                        },
                        unregisterDecorator: function(a) {
                            delete this.decorators[a]
                        }
                    };
                    var o = l["default"].log;
                    b.log = o,
                        b.createFrame = f.createFrame,
                        b.logger = l["default"]
                },
                function(a, b, c) {
                    var d;
                    void 0 !== (d = function(require, a, b) {
                        function c(a, b) {
                            e(b, f(a))
                        }
                        function d(a) {
                            var b = k[a];
                            if (b) {
                                for (var c = Object.keys(b), d = 0; d < c.length; d += 1) for (var e = b[c[d]], f = 0; f < e.parts.length; f += 1) e.parts[f]();
                                delete k[a]
                            }
                        }
                        function e(a, b) {
                            for (var c = 0; c < b.length; c++) {
                                var d = b[c],
                                    e = (k[a] || {})[d.id];
                                if (e) {
                                    for (var f = 0; f < e.parts.length; f++) e.parts[f](d.parts[f]);
                                    for (; f < d.parts.length; f++) e.parts.push(i(a, d.parts[f]))
                                } else {
                                    for (var g = [], f = 0; f < d.parts.length; f++) g.push(i(a, d.parts[f]));
                                    k[a] = k[a] || {},
                                        k[a][d.id] = {
                                            id: d.id,
                                            parts: g
                                        }
                                }
                            }
                        }
                        function f(a) {
                            for (var b = [], c = {},
                                     d = 0; d < a.length; d++) {
                                var e = a[d],
                                    f = e[0],
                                    g = e[1],
                                    h = e[2],
                                    i = {
                                        css: g,
                                        media: h
                                    };
                                c[f] ? c[f].parts.push(i) : b.push(c[f] = {
                                    id: f,
                                    parts: [i]
                                })
                            }
                            return b
                        }
                        function g(a) {
                            m().appendChild(a)
                        }
                        function h(a) {
                            var b = document.createElement("style");
                            return b.type = "text/css",
                                b.setAttribute("data-jwplayer-id", a),
                                g(b),
                                b
                        }
                        function i(a, b) {
                            var c, d, e, f = l[a];
                            f || (f = l[a] = {
                                element: h(a),
                                counter: 0
                            });
                            var g = f.counter++;
                            return c = f.element,
                                d = j.bind(null, c, g, !1),
                                e = j.bind(null, c, g, !0),
                                d(b),
                                function(a) {
                                    if (a) {
                                        if (a.css === b.css && a.media === b.media) return;
                                        d(b = a)
                                    } else e()
                                }
                        }
                        function j(a, b, c, d) {
                            var e = c ? "": d.css;
                            if (a.styleSheet) a.styleSheet.cssText = n(b, e);
                            else {
                                var f = document.createTextNode(e),
                                    g = a.childNodes;
                                g[b] && a.removeChild(g[b]),
                                    g.length ? a.insertBefore(f, g[b]) : a.appendChild(f)
                            }
                        }
                        var k = {},
                            l = {},
                            m = function(a) {
                                var b;
                                return function() {
                                    return void 0 === b && (b = a.apply(this, arguments)),
                                        b
                                }
                            } (function() {
                                return document.head || document.getElementsByTagName("head")[0]
                            });
                        b.exports = {
                            style: c,
                            clear: d
                        };
                        var n = function() {
                            var a = [];
                            return function(b, c) {
                                return a[b] = c,
                                    a.filter(Boolean).join("\n")
                            }
                        } ()
                    }.call(b, c, b, a)) && (a.exports = d)
                },
                ,
                function(a, b, c) {
                    b = a.exports = c(147)(),
                        b.push([a.id, ".jw-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;text-transform:none;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}@font-face{font-family:jw-icons;src:url(" + c(178) + ") format('woff'),url(" + c(179) + ') format(\'truetype\');font-weight:400;font-style:normal}.jw-controlbar .jw-menu .jw-option:before,.jw-icon-display,.jw-icon-inline,.jw-icon-tooltip{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-icon-audio-tracks:before{content:"\\E600"}.jw-icon-buffer:before{content:"\\E601"}.jw-icon-cast:before{content:"\\E603"}.jw-icon-cast.jw-off:before{content:"\\E602"}.jw-icon-cc:before{content:"\\E605"}.jw-icon-cue:before,.jw-icon-menu-bullet:before{content:"\\E606"}.jw-icon-error:before{content:"\\E607"}.jw-icon-fullscreen:before{content:"\\E608"}.jw-icon-fullscreen.jw-off:before{content:"\\E613"}.jw-icon-hd:before{content:none}.jw-rightclick-logo:before,.jw-watermark:before{content:"\\E60B"}.jw-icon-next:before{content:"\\E60C"}.jw-icon-pause:before{content:"\\E60D"}.jw-icon-play:before{content:"\\E60E"}.jw-icon-prev:before{content:"\\E60F"}.jw-icon-replay:before{content:"\\E610"}.jw-icon-volume:before{content:"\\E612"}.jw-icon-volume.jw-off:before{content:"\\E611"}.jw-icon-more:before{content:"\\E614"}.jw-icon-close:before{content:"\\E615"}.jw-icon-playlist:before{content:"\\E616"}.jw-icon-barlogo:before{content:"\\E617"}.jw-icon-barlogo-new:before{content:"\\E618"}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:visible;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jwplayer.jw-no-focus:focus,.jwplayer .jw-swf{outline:none}.jwplayer.jw-ie:focus{outline:1px dotted #585858}.jwplayer:hover .jw-display-icon-container{background-color:#333;background:#333;background-size:#333}.jw-adv,.jw-controls,.jw-media,.jw-overlays,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jwplayer .jw-adv{background-size:100% 100%;cursor:pointer}.jwplayer .jw-adv .adv-countdown{position:absolute;width:95px;padding-left:10px;height:30px;line-height:30px;background-color:#202020;opacity:.7;color:#ee6002;font-size:14px;top:0;right:0;display:none}.jwplayer .jw-adv .adv-close{position:absolute;height:22px;line-height:22px;color:#fff;font-weight:700;font-size:14px;width:20px;top:0;right:5px;display:none;text-align:center}.jw-media{overflow:hidden;cursor:pointer}.jw-overlays{cursor:auto}.jw-media.jw-media-show{visibility:visible;opacity:1}.jw-controls.jw-controls-disabled{display:none}.jw-controls .jw-controls-right{position:absolute;top:0;right:0;left:0;bottom:2em}.jw-warning{color:red;top:30px;right:10px;position:absolute;z-index:10000;width:320px;display:none}.jw-warning a{color:#108cee}.jw-marquee{opacity:0;color:#fff;width:auto;font-size:16px;font-weight:700;white-space:nowrap;position:absolute}@-webkit-keyframes marquee1{0%{left:100%}to{left:-110px}}@keyframes marquee1{0%{left:100%}to{left:-110px}}@-webkit-keyframes marquee2{0%{left:100%}to{left:-110px}}@keyframes marquee2{0%{left:100%}to{left:-110px}}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:400;color:#fff;text-align:center;font-variant:normal;font-stretch:normal}.jw-plugin{position:absolute;bottom:2.5em}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-cast-screen{width:100%;height:100%}.jw-instream{position:absolute;top:0;right:0;bottom:0;left:0;display:none}.jw-icon-playback:before{content:"\\E60E"}.jw-captions,.jw-controls,.jw-overlays,.jw-preview,.jw-title{pointer-events:none}.jw-controlbar,.jw-display-icon-container,.jw-dock,.jw-logo,.jw-media,.jw-overlays>div,.jw-skip{pointer-events:all}.jwplayer video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent}.jwplayer video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform video{-o-object-fit:contain;object-fit:contain}.jwplayer.jw-stretch-none video{-o-object-fit:none;object-fit:none}.jwplayer.jw-stretch-fill video{-o-object-fit:cover;object-fit:cover}.jwplayer.jw-stretch-exactfit video{-o-object-fit:fill;object-fit:fill}.jw-adv,.jw-click,.jw-preview{position:absolute;width:100%;height:100%}.jw-adv,.jw-preview{display:none;opacity:1;visibility:visible;background:#000 no-repeat 50% 50%}.jw-error .jw-preview,.jw-stretch-uniform .jw-preview,.jwplayer .jw-preview{background-size:100% 100%}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-display-icon-container{position:relative;top:50%;display:table;height:3.5em;width:3.5em;margin:-1.75em auto 0;cursor:pointer}.jw-display-icon-container .jw-icon-display{position:relative;display:table-cell;text-align:center;vertical-align:middle!important;background-position:50% 50%;background-repeat:no-repeat;font-size:2em}.jw-flag-audio-player .jw-display-icon-container,.jw-flag-dragging .jw-display-icon-container{display:none}.jw-icon{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-controlbar{display:table;position:absolute;right:0;left:0;bottom:0;height:2em;padding:0 .25em}.jw-controlbar .jw-hidden{display:none}.jw-controlbar.jw-drawer-expanded .jw-controlbar-center-group,.jw-controlbar.jw-drawer-expanded .jw-controlbar-left-group{opacity:0}.jw-controlbar-textshow .jw-controlbar-center-group .jw-slider-time,.jw-controlbar-textshow .jw-controlbar-center-group .jw-text-duration,.jw-controlbar-textshow .jw-controlbar-center-group .jw-text-elapsed{display:none}.jw-controlbar-textshow .jw-controlbar-center-group .jw-text-alt{display:inline}.jw-background-color{background-color:#414040}.jw-group{display:table-cell}.jw-controlbar-center-group{width:100%;padding:0 .25em}.jw-controlbar-center-group .jw-slider-time,.jw-controlbar-center-group .jw-text-alt{padding:0}.jw-controlbar-center-group .jw-text-alt{display:none}.jw-controlbar-left-group,.jw-controlbar-right-group{white-space:nowrap}.jw-icon-display:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-knob:hover,.jw-option:before:hover{color:#eee}.jw-icon-inline,.jw-icon-tooltip,.jw-slider-horizontal,.jw-text-duration,.jw-text-elapsed{display:inline-block;height:2em;position:relative;line-height:2em;vertical-align:middle;cursor:pointer}.jw-icon-inline,.jw-icon-tooltip{min-width:1.25em;text-align:center}.jw-icon-playback{min-width:2.25em}.jw-icon-barlogo{font-size:19px;min-width:1.75em}.jw-icon-barlogo-new{font-size:20px;min-width:1.5em;height:1em;line-height:1em}.jw-icon-volume{min-width:1.75em;text-align:left}.jw-time-tip{line-height:1em;pointer-events:none}.jw-icon-inline:after,.jw-icon-tooltip:after{width:100%;height:100%;font-size:1em}.jw-icon-cast,.jw-icon-inline.jw-icon-volume,.jw-slider-volume.jw-slider-horizontal{display:none}.jw-icon-hd .jw-hd-label{font-size:12px;vertical-align:text-top;display:inline-block;height:14px;line-height:14px}.jw-controlbar .jw-icon-playrate .jw-overlay{bottom:1.5em}.jw-controlbar .jw-icon-playrate .jw-playrate-label{font-size:.75em;border-left:1px solid #666;padding:0 .7em;display:inline-block;line-height:16px;height:16px;vertical-align:text-top}.jw-controlbar .jw-icon-cc:before{content:none}.jw-controlbar .jw-icon-cc .jw-cc-label{font-size:.75em;padding:0 .7em;display:inline-block;line-height:16px;height:16px;vertical-align:text-top}.jw-dock{margin:.75em;display:block;opacity:1;clear:right}.jw-dock:after{content:\'\';clear:both;display:block}.jw-dock-button{cursor:pointer;float:right;position:relative;width:2.5em;height:2.5em;margin:.5em}.jw-dock-button .jw-arrow{display:none;position:absolute;bottom:-.2em;width:.5em;height:.2em;left:50%;margin-left:-.25em}.jw-dock-button .jw-overlay{display:none;position:absolute;top:2.5em;right:0;margin-top:.25em;padding:.5em;white-space:nowrap}.jw-dock-button:hover .jw-arrow,.jw-dock-button:hover .jw-overlay{display:block}.jw-dock-image{width:100%;height:100%;background-position:50% 50%;background-repeat:no-repeat;opacity:.75}.jw-title{display:none;position:absolute;top:0;width:100%;font-size:.875em;height:8em;background:-webkit-linear-gradient(top,#000,#000 18%,transparent);background:linear-gradient(180deg,#000 0,#000 18%,transparent)}.jw-title-primary,.jw-title-secondary{padding:.75em 1.5em;min-height:2.5em;width:100%;color:#fff;white-space:nowrap;text-overflow:ellipsis;overflow-x:hidden}.jw-title-primary{font-weight:700}.jw-title-secondary{margin-top:-.5em}.jw-slider-container{display:inline-block;height:1em;position:relative;touch-action:none}.jw-buffer,.jw-progress,.jw-rail{position:absolute;cursor:pointer}.jw-progress{background-color:#fff}.jw-rail{background-color:#aaa}.jw-buffer{background-color:#202020}.jw-cue,.jw-knob{position:absolute;cursor:pointer}.jw-cue{background-color:#fff;width:.1em;height:.4em}.jw-knob{background-color:#aaa;width:.4em;height:.4em}.jw-slider-horizontal{width:4em;height:1em}.jw-slider-horizontal.jw-slider-volume{margin-right:5px}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{width:100%;height:.4em}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress{width:0}.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-slider-container{width:100%}.jw-slider-horizontal .jw-knob{left:0;margin-left:-.325em}.jw-slider-vertical{width:.75em;height:4em;bottom:0;position:absolute;padding:1em}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{bottom:0;height:100%}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress{height:0}.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-slider-container{bottom:0;width:.75em;height:100%;left:0;right:0;margin:0 auto}.jw-slider-vertical .jw-slider-container{height:4em;position:relative}.jw-slider-vertical .jw-knob{bottom:0;left:0;right:0;margin:0 auto}.jw-slider-time{right:0;left:0;width:100%}.jw-tooltip-time{position:absolute}.jw-slider-volume .jw-buffer{display:none}.jwplayer .jw-process-adv{position:absolute;top:0;left:0;display:none}.jwplayer .jw-process-adv img{border:none}.jw-captions{position:absolute;display:none;margin:0 auto;width:100%;left:0;bottom:3em;right:0;max-width:90%;text-align:center}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-text,.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{color:#fff;background-color:#000;word-wrap:break-word;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none;line-height:1.3em;padding:.1em .8em}.jwplayer video::-webkit-media-controls{-webkit-box-pack:start;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-container{max-height:84.5%;line-height:1.3em}.jwplayer.jw-flag-compact-player video::-webkit-media-text-track-container{max-height:82%}.jwplayer .jw-rightclick{display:none;position:absolute;white-space:nowrap}.jwplayer .jw-rightclick.jw-open{display:block}.jwplayer .jw-rightclick ul{list-style:none;font-weight:700;border-radius:.15em;margin:0;border:1px solid #444;padding:0}.jwplayer .jw-rightclick ul li{background-color:#000;border-bottom:1px solid #444;margin:0}.jwplayer .jw-rightclick ul li .jw-rightclick-logo{font-size:2em;color:#ff0147;vertical-align:middle;padding-right:.3em;margin-right:.3em;border-right:1px solid #444}.jwplayer .jw-rightclick ul li a{color:#fff;text-decoration:none;padding:1em;display:block;font-size:.6875em;line-height:1em}.jwplayer .jw-rightclick ul li:last-child{border-bottom:none}.jwplayer .jw-rightclick ul li:hover{background-color:#1a1a1a;cursor:pointer}.jwplayer .jw-rightclick ul .jw-featured{background-color:#252525;vertical-align:middle}.jwplayer .jw-rightclick ul .jw-featured a{color:#777}.jw-logo{position:absolute;margin:.75em;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto}.jw-logo .jw-flag-audio-player{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{bottom:0;left:0}.jw-logo-bottom-right,.jw-watermark{bottom:0;right:0}.jw-watermark{position:absolute;top:50%;left:0;text-align:center;font-size:14em;color:#eee;opacity:.33;pointer-events:none}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;visibility:visible}.jw-icon-tooltip.jw-hidden,.jw-icon-tooltip.jw-open-drawer:before,.jw-overlay-horizontal{display:none}.jw-icon-tooltip.jw-open-drawer .jw-overlay-horizontal{opacity:1;display:inline-block;vertical-align:top}.jw-overlay:before{position:absolute;top:0;bottom:0;left:-50%;width:100%;background-color:transparent;content:" "}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-menu,.jw-time-tip,.jw-volume-tip{position:relative;left:-50%;border:1px solid #000;margin:0}.jw-volume-value-tip{font-size:12px;position:absolute;top:-26px;right:20px;background-color:#000;line-height:20px;border-radius:3px;padding:0 3px;color:#fff}.jw-volume-tip{width:100%;height:100%;display:block}.jw-time-tip{text-align:center;font-family:inherit;color:#aaa;bottom:1em;border:4px solid #000}.jw-time-tip .jw-text{line-height:1em}.jw-controlbar .jw-overlay{margin:0;position:absolute;bottom:2em;left:50%;opacity:0;visibility:hidden}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;color:#aaa;padding:0 .5em;font-size:.8em}.jw-controlbar .jw-option:before:hover,.jw-controlbar .jw-option:hover{color:#eee}.jw-controlbar .jw-option:before{padding-right:.125em}.jw-playlist-container ::-webkit-scrollbar-track{background-color:#333;border-radius:10px}.jw-playlist-container ::-webkit-scrollbar{width:5px;border:10px solid #000;border-bottom:0;border-top:0}.jw-playlist-container ::-webkit-scrollbar-thumb{background-color:#fff;border-radius:5px}.jw-tooltip-title{border-bottom:1px solid #444;text-align:left;padding-left:.7em}.jw-playlist{max-height:11em;min-height:4.5em;overflow-x:hidden;overflow-y:scroll;width:calc(100% - 4px)}.jw-playlist .jw-option{height:3em;margin-right:5px;color:#fff;padding-left:1em;font-size:.8em}.jw-playlist .jw-label,.jw-playlist .jw-name{display:inline-block;line-height:3em;text-align:left;overflow:hidden;white-space:nowrap}.jw-playlist .jw-label{width:1em}.jw-playlist .jw-name{width:11em}.jw-skip{cursor:default;position:absolute;float:right;display:inline-block;right:.75em;bottom:3em}.jw-skip.jw-skippable{cursor:pointer}.jw-skip.jw-hidden{visibility:hidden}.jw-skip .jw-skip-icon{display:none;margin-left:-.75em}.jw-skip .jw-skip-icon:before{content:"\\E60C"}.jw-skip .jw-skip-icon,.jw-skip .jw-text{color:#aaa;vertical-align:middle;line-height:1.5em;font-size:.7em}.jw-skip.jw-skippable:hover{cursor:pointer}.jw-skip.jw-skippable:hover .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-text{color:#eee}.jw-skip.jw-skippable .jw-skip-icon{display:inline;margin:0}.jwplayer.jw-state-paused.jw-flag-casting .jw-display-icon-container,.jwplayer.jw-state-playing.jw-flag-casting .jw-display-icon-container{display:table}.jwplayer.jw-flag-casting .jw-display-icon-container{border-radius:0;border:1px solid #fff;position:absolute;top:auto;left:.5em;right:.5em;bottom:50%;margin-bottom:-12.5%;height:50%;width:50%;padding:0;background-repeat:no-repeat;background-position:50%}.jwplayer.jw-flag-casting .jw-display-icon-container .jw-icon{font-size:3em}.jwplayer.jw-flag-casting.jw-state-complete .jw-preview{display:none}.jw-cast{position:absolute;width:100%;height:100%;background-repeat:no-repeat;background-size:auto;background-position:50% 50%}.jw-cast-label{position:absolute;left:.5em;right:.5em;bottom:75%;margin-bottom:1.5em;text-align:center}.jw-cast-name{color:#ccc}.jw-state-idle .jw-preview{display:block}.jw-state-idle .jw-icon-display:before{content:"\\E60E"}.jw-state-idle .jw-captions,.jw-state-idle .jw-controlbar{display:none}.jw-state-idle .jw-title{display:block}.jwplayer.jw-state-playing .jw-display-icon-container{display:none}.jwplayer.jw-state-playing .jw-display-icon-container .jw-icon-display:before,.jwplayer.jw-state-playing .jw-icon-playback:before{content:"\\E60D"}.jwplayer.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-state-paused .jw-display-icon-container .jw-icon-display:before,.jwplayer.jw-state-paused .jw-icon-playback:before{content:"\\E60E"}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display:before{content:"\\E601"}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn)}}@keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-buffering .jw-icon-playback:before{content:"\\E60D"}.jwplayer.jw-state-complete .jw-preview{display:block}.jwplayer.jw-state-complete .jw-display-icon-container{z-index:10}.jwplayer.jw-state-complete .jw-display-icon-container .jw-icon-display:before{content:"\\E610"}.jwplayer.jw-state-complete .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-complete .jw-icon-playback:before{content:"\\E60E"}.jwplayer.jw-state-complete .jw-captions{display:none}.jwplayer.jw-state-error .jw-title,body .jw-error .jw-title{display:block;z-index:1;pointer-events:auto}.jwplayer.jw-state-error .jw-title .jw-title-primary,body .jw-error .jw-title .jw-title-primary{white-space:normal}.jwplayer.jw-state-error .jw-title .jw-title-primary a,body .jw-error .jw-title .jw-title-primary a{cursor:pointer;color:#699f00;pointer-events:auto}.jwplayer.jw-state-error .jw-preview,body .jw-error .jw-preview{display:block}.jwplayer.jw-state-error .jw-captions,.jwplayer.jw-state-error .jw-controlbar,body .jw-error .jw-captions,body .jw-error .jw-controlbar{display:none}.jwplayer.jw-state-error:hover .jw-display-icon-container,body .jw-error:hover .jw-display-icon-container{cursor:default;color:#fff;background:#000}.jwplayer.jw-state-error .jw-icon-display,body .jw-error .jw-icon-display{cursor:default;font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jwplayer.jw-state-error .jw-icon-display:before,body .jw-error .jw-icon-display:before{content:"\\E607"}.jwplayer.jw-state-error .jw-icon-display:hover,body .jw-error .jw-icon-display:hover{color:#fff}body .jw-error{font-size:16px;background-color:#000;color:#eee;width:100%;height:100%;display:table;opacity:1;position:relative}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jwplayer.jw-flag-cast-available .jw-controlbar{display:table}.jwplayer.jw-flag-cast-available .jw-icon-cast{display:inline-block}.jwplayer.jw-flag-skin-loading .jw-captions,.jwplayer.jw-flag-skin-loading .jw-controls,.jwplayer.jw-flag-skin-loading .jw-title{display:none}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-live .jw-controlbar{border-top:1px solid #333}.jwplayer.jw-flag-live .jw-controlbar .jw-icon-playrate,.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed,.jwplayer.jw-flag-live .jw-controlbar .jw-text-split{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:inline}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-controlbar,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-dock,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-logo.jw-hide{display:none}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-captions,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-plugin{bottom:.5em}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-media{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-user-inactive.jw-state-playing video::-webkit-media-text-track-container{max-height:none}.jwplayer.jw-flag-user-inactive.jw-state-buffering .jw-controlbar{display:none}.jwplayer.jw-flag-media-audio .jw-controlbar,.jwplayer.jw-flag-media-audio.jw-flag-user-inactive .jw-controlbar{display:table}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing .jw-captions,.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing .jw-plugin{bottom:3em}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing video::-webkit-media-text-track-container{max-height:84.5%}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-captions.jw-captions-enabled,.jwplayer.jw-flag-ads .jw-dock,.jwplayer.jw-flag-ads .jw-logo,.jwplayer.jw-flag-ads .jw-preview{display:none}.jwplayer.jw-flag-ads video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-horizontal,.jwplayer.jw-flag-ads .jw-controlbar .jw-text{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-fullscreen,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-playback,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:inline}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline.jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-ads-googleima .jw-controlbar{display:table;bottom:0}.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-controlbar{font-size:1em}.jwplayer.jw-flag-ads-googleima.jw-flag-touch.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-flag-ads-googleima.jw-skin-seven .jw-controlbar{font-size:.9em}.jwplayer.jw-flag-ads-vpaid .jw-controlbar{display:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls{display:none!important}.jwplayer.jw-flag-ads.jw-flag-touch .jw-controlbar{display:table}.jwplayer.jw-flag-overlay-open-related .jw-controls,.jwplayer.jw-flag-overlay-open-related .jw-title,.jwplayer.jw-flag-overlay-open-sharing .jw-controls,.jwplayer.jw-flag-overlay-open-sharing .jw-title,.jwplayer.jw-flag-overlay-open .jw-controls-right .jw-logo,.jwplayer.jw-flag-overlay-open .jw-title{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-controls-disabled .jw-controls{visibility:hidden}.jw-flag-controls-disabled .jw-logo{visibility:visible}.jw-flag-controls-disabled .jw-media{cursor:auto}body .jwplayer.jw-flag-flash-blocked .jw-title{display:block}body .jwplayer.jw-flag-flash-blocked .jw-controls,body .jwplayer.jw-flag-flash-blocked .jw-overlays,body .jwplayer.jw-flag-flash-blocked .jw-preview{display:none}.jw-flag-touch .jw-controlbar,.jw-flag-touch .jw-plugin,.jw-flag-touch .jw-skip{font-size:1.5em}.jw-flag-touch .jw-captions{bottom:4.25em}.jw-flag-touch video::-webkit-media-text-track-container{max-height:70%}.jw-flag-touch .jw-icon-tooltip.jw-open-drawer:before{display:inline;content:"\\E615"}.jw-flag-touch .jw-display-icon-container{pointer-events:none}.jw-flag-touch.jw-state-paused .jw-display-icon-container{display:table}.jw-flag-compact-player .jw-icon-playlist,.jw-flag-compact-player .jw-text-duration,.jw-flag-compact-player .jw-text-elapsed,.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display-icon-container{display:none}.jwplayer.jw-flag-audio-player{background-color:transparent}.jwplayer.jw-flag-audio-player .jw-media{visibility:hidden}.jwplayer.jw-flag-audio-player .jw-media object{width:1px;height:1px}.jwplayer.jw-flag-audio-player .jw-display-icon-container,.jwplayer.jw-flag-audio-player .jw-preview{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar{display:table;height:auto;left:0;bottom:0;margin:0;width:100%;min-width:100%;opacity:1}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-fullscreen,.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-inline.jw-icon-volume,.jwplayer.jw-flag-audio-player .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-audio-player.jw-flag-user-inactive .jw-controlbar{display:table}.jw-ie-poorie.jw-flag-media-audio .jw-preview{display:none}.jw-ie-poorie .jw-display-icon-container .jw-icon-display{background-image:url(\'http://cyberplayer.bcelive.com/resource/img/display_play.png\');width:56px;height:56px}.jw-ie-poorie.jw-state-complete .jw-icon-display,.jw-ie-poorie.jw-state-idle .jw-icon-display,.jw-ie-poorie.jwplayer.jw-flag-audio-player .jw-media{visibility:visible}.jw-ie-poorie.jwplayer.jw-flag-audio-player .jw-media object{width:100%;height:100%}.background-base{background-repeat:no-repeat;background-position:50%}.jw-ie-poorie .jw-playlist-container .jw-label .jw-icon-play{background-image:url(\'http://cyberplayer.bcelive.com/resource/img/play_small.png\');background-repeat:no-repeat;background-position:0}.jw-ie-poorie .jw-controlbar .jw-icon-barlogo{background-image:url(\'http://cyberplayer.bcelive.com/resource/img/baiduLogo.png\');background-repeat:no-repeat;background-position:50%;width:15px;height:15px}.jw-ie-poorie .jw-controlbar .jw-icon-barlogo-new{background-image:url(\'http://cyberplayer.bcelive.com/resource/img/bce.png\');background-repeat:no-repeat;background-position:50%;width:13px;height:14px}.jw-ie-poorie .jw-controlbar .jw-icon-playback{background-image:url(\'http://cyberplayer.bcelive.com/resource/img/play.png\');background-repeat:no-repeat;background-position:50%;width:15px;height:15px}.jw-ie-poorie .jw-controlbar .jw-icon-prev{background-image:url(\'http://cyberplayer.bcelive.com/resource/img/prev.png\');background-repeat:no-repeat;background-position:50%;width:26px;height:21px}.jw-ie-poorie .jw-controlbar .jw-icon-next{background-image:url(\'http://cyberplayer.bcelive.com/resource/img/next.png\');background-repeat:no-repeat;background-position:50%}.jw-ie-poorie .jw-controlbar .jw-icon-playlist{background-image:url(\'http://cyberplayer.bcelive.com/resource/img/playlist.png\');background-repeat:no-repeat;background-position:50%}.jw-ie-poorie .jw-controlbar .jw-knob{background-image:url(\'http://cyberplayer.bcelive.com/resource/img/cue.png\');background-repeat:no-repeat;background-position:50%;width:10px;height:10px;background-color:inherit}.jw-ie-poorie .jw-controlbar .jw-icon-cc{background-image:url(\'http://cyberplayer.bcelive.com/resource/img/cc.png\');background-repeat:no-repeat;background-position:50%}.jw-ie-poorie .jw-controlbar .jw-icon-volume{background-image:url(\'http://cyberplayer.bcelive.com/resource/img/volume.png\');background-repeat:no-repeat;background-position:50%}.jw-ie-poorie .jw-controlbar .jw-icon-fullscreen{background-image:url(\'http://cyberplayer.bcelive.com/resource/img/fullscreen.png\');background-repeat:no-repeat;background-position:50%}.jw-ie-poorie .jw-controls-right{display:none}.jw-ie-poorie .jw-display-icon-container{text-align:center}.jw-ie-poorie.jw-state-buffering .jw-icon-playback,.jw-ie-poorie.jw-state-playing .jw-icon-playback{background-image:url(\'http://cyberplayer.bcelive.com/resource/img/pause.png\');background-repeat:no-repeat;background-position:50%}.jw-ie-poorie.jw-state-buffering .jw-icon-display{background-image:url(\'http://cyberplayer.bcelive.com/resource/img/loading.gif\');background-repeat:no-repeat;background-position:50%;width:56px;height:56px}.jw-ie-poorie.jw-state-error .jw-icon-display{background-image:url(\'http://cyberplayer.bcelive.com/resource/img/error.png\');background-repeat:no-repeat;background-position:50%;width:36px;height:32px}.jw-ie-poorie.jw-state-complete .jw-icon-display{background-image:url(\'http://cyberplayer.bcelive.com/resource/img/replay.png\');background-repeat:no-repeat;background-position:50%;width:28px;height:32px}.jw-flashui .jw-controlbar,.jw-flashui.jw-state-buffering .jw-display-icon-container{display:none}.jw-skin-bce{outline:none}.jw-skin-bce .jw-background-color{background:#000}.jw-skin-bce .jw-controlbar{border:none;height:2.5em}.jw-skin-bce .jw-group{vertical-align:middle}.jw-skin-bce .jw-playlist{background-color:rgba(0,0,0,.5)}.jw-skin-bce .jw-playlist-container{left:-43%;background-color:rgba(0,0,0,.5)}.jw-skin-bce .jw-playlist-container .jw-option{border-bottom:1px solid #444}.jw-skin-bce .jw-playlist-container .jw-option.jw-active-option,.jw-skin-bce .jw-playlist-container .jw-option:hover{background-color:#000}.jw-skin-bce .jw-playlist-container .jw-option:hover .jw-label{color:#108cee}.jw-skin-bce .jw-playlist-container .jw-icon-playlist{margin-left:0}.jw-skin-bce .jw-playlist-container .jw-label .jw-icon-play{color:#108cee}.jw-skin-bce .jw-playlist-container .jw-label .jw-icon-play:before{padding-left:0}.jw-skin-bce .jw-icon-playlist .jw-overlay{z-index:100;bottom:1.6em}.jw-skin-bce .jw-tooltip-title{background-color:#000;color:#fff}.jw-skin-bce .jw-button-color,.jw-skin-bce .jw-text{color:#fff}.jw-skin-bce .jw-button-color:hover,.jw-skin-bce .jw-toggle{color:#108cee}.jw-skin-bce .jw-toggle.jw-off{color:#fff}.jw-skin-bce .jw-controlbar .jw-icon:before,.jw-skin-bce .jw-text-duration,.jw-skin-bce .jw-text-elapsed{padding:0 .7em}.jw-skin-bce .jw-controlbar .jw-icon-barlogo-new:before{padding:0}.jw-skin-bce .jw-controlbar .jw-icon-prev:before{padding-right:.25em}.jw-skin-bce .jw-controlbar .jw-icon-playlist:before{padding:0 .45em}.jw-skin-bce .jw-controlbar .jw-icon-next:before{padding-left:.25em}.jw-skin-bce .jw-controlbar .jw-icon-hd:before{content:none}.jw-skin-bce .jw-controlbar .jw-icon-hd .jw-hd-label{color:#000;background:#fff;padding:0 4px;border-radius:2px;margin:0 .7em;margin-top:1px}.jw-skin-bce .jw-controlbar .jw-icon-hd .jw-hd-label:hover{background:#108cee}.jw-skin-bce .jw-icon-next,.jw-skin-bce .jw-icon-prev{font-size:.7em}.jw-skin-bce .jw-icon-prev:before{border-left:1px solid #666}.jw-skin-bce .jw-icon-next:before{border-right:1px solid #666}.jw-skin-bce .jw-icon-display{color:#fff}.jw-skin-bce .jw-icon-display:before{padding-left:0}.jw-skin-bce .jw-display-icon-container{border-radius:50%;border:1px solid #333}.jw-skin-bce .jw-rail{background-color:#333;box-shadow:none}.jw-skin-bce .jw-buffer{background-color:#666f82}.jw-skin-bce .jw-progress{background:#108cee}.jw-skin-bce .jw-knob{width:.6em;height:.6em;background-color:#fff;border-radius:1em;display:none}.jw-skin-bce .jw-slider-volume .jw-knob{display:inline-block}.jw-skin-bce .jw-slider-horizontal .jw-slider-container{position:relative;height:.95em;vertical-align:top}.jw-skin-bce .jw-slider-horizontal .jw-buffer,.jw-skin-bce .jw-slider-horizontal .jw-progress,.jw-skin-bce .jw-slider-horizontal .jw-rail{height:.2em;top:5px;border-radius:0}.jw-skin-bce .jw-slider-horizontal .jw-knob{top:-.2em;top:0}.jw-skin-bce .jw-slider-horizontal .jw-cue{top:.2em;width:.4em;height:.4em;background-color:#fff;border-radius:50%;margin-left:-.325em}.jw-skin-bce .jw-slider-vertical .jw-buffer,.jw-skin-bce .jw-slider-vertical .jw-progress,.jw-skin-bce .jw-slider-vertical .jw-rail{width:.2em}.jw-skin-bce .jw-slider-vertical .jw-knob{margin-bottom:-.3em}.jw-skin-bce .jw-volume-tip{width:100%;left:-45%;padding-bottom:.7em}.jw-skin-bce .jw-text-duration{color:#666f82}.jw-skin-bce .jw-controlbar-right-group .jw-icon-inline:first-child:before{border:none}.jw-skin-bce .jw-dock .jw-dock-button{border-radius:50%;border:1px solid #333}.jw-skin-bce .jw-dock .jw-overlay{border-radius:2.5em}.jw-skin-bce .jw-icon-tooltip .jw-active-option{background-color:#108cee;color:#fff}.jw-skin-bce .jw-icon-volume{min-width:2.6em}.jw-skin-bce .jw-menu,.jw-skin-bce .jw-skip,.jw-skin-bce .jw-time-tip,.jw-skin-bce .jw-volume-tip{border:1px solid #333}.jw-skin-bce .jw-time-tip{padding:.2em;bottom:-18px}.jw-skin-bce .jw-menu,.jw-skin-bce .jw-volume-tip{bottom:.24em}.jw-skin-bce .jw-skip{padding:.4em;border-radius:1.75em}.jw-skin-bce .jw-skip .jw-icon-inline,.jw-skin-bce .jw-skip .jw-text{color:#fff;line-height:1.75em}.jw-skin-bce .jw-skip.jw-skippable:hover .jw-icon-inline,.jw-skin-bce .jw-skip.jw-skippable:hover .jw-text{color:#108cee}.jw-skin-bce.jw-flag-touch .jw-controlbar .jw-icon:before,.jw-skin-bce.jw-flag-touch .jw-text-duration,.jw-skin-bce.jw-flag-touch .jw-text-elapsed{padding:0 .35em}.jw-skin-bce.jw-flag-touch .jw-controlbar .jw-icon-prev:before{padding:0 .125em 0 .7em}.jw-skin-bce.jw-flag-touch .jw-controlbar .jw-icon-next:before{padding:0 .7em 0 .125em}.jw-skin-bce.jw-flag-touch .jw-controlbar .jw-icon-playlist:before{padding:0 .225em}.jw-skin-bce .jw-slider-time{background:0 0;position:absolute;top:-8px;height:8px;line-height:1em}.jw-skin-bce .jw-slider-time .jw-slider-container{height:8px;vertical-align:top}.jw-skin-bce .jw-slider-time:hover .jw-knob{display:block}.jw-skin-bce .jw-slider-time:hover .jw-slider-container{vertical-align:top}.jw-skin-bce .jw-slider-time:hover .jw-slider-container .jw-buffer,.jw-skin-bce .jw-slider-time:hover .jw-slider-container .jw-progress,.jw-skin-bce .jw-slider-time:hover .jw-slider-container .jw-rail{height:.6em;border-radius:0;top:0}.jw-skin-bce .jw-slider-time:hover .jw-cue{top:0;width:.6em;height:.6em}.jw-skin-bce .jw-controlbar-left-group .jw-text-elapsed{padding-right:0;cursor:default}.jw-skin-bce .jw-controlbar-left-group .jw-text-split{padding:0 2px;cursor:default}.jw-skin-bce .jw-controlbar-left-group .jw-text-duration{padding-left:0;color:#fff;cursor:default}.jw-skin-bce .jw-controlbar-center-group .jw-tooltip-time{top:-7px;height:1em}.jw-skin-bce .jw-controlbar-center-group .jw-overlay{z-index:100}.jw-skin-bce .jw-controlbar-right-group .jw-icon-playrate{height:24px;line-height:24px;margin-top:-2px}.jw-skin-bce .jw-controlbar-right-group .jw-icon-playrate .jw-playrate-label{border:1px solid #333;line-height:24px;height:24px;vertical-align:bottom}.jw-skin-bce .jw-media{width:100%;height:100%}', ""])
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(34), c(1)],
                    void 0 !== (e = function(a, b) {
                        return function(c, d) {
                            var e = ["seek", "skipAd", "stop", "playlistNext", "playlistPrev", "playlistItem", "resize", "addButton", "removeButton", "registerPlugin", "attachMedia"];
                            b.each(e,
                                function(a) {
                                    c[a] = function() {
                                        return d[a].apply(d, arguments),
                                            c
                                    }
                                }),
                                c.registerPlugin = a.registerPlugin
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(1)],
                    void 0 !== (e = function(a) {
                        return function(b, c) {
                            var d = ["buffer", "controls", "position", "duration", "fullscreen", "volume", "mute", "item", "stretching", "playlist", "captions", "playbackRate"];
                            a.each(d,
                                function(a) {
                                    var d = a.slice(0, 1).toUpperCase() + a.slice(1);
                                    b["get" + d] = function() {
                                        return c._model.get(a)
                                    }
                                });
                            var e = ["getAudioTracks", "getCaptionsList", "getWidth", "getHeight", "getCurrentAudioTrack", "setCurrentAudioTrack", "getCurrentCaptions", "setCurrentCaptions", "getCurrentQuality", "setCurrentQuality", "getQualityLevels", "getVisualQuality", "getConfig", "getState", "getSafeRegion", "isBeforeComplete", "isBeforePlay", "getProvider", "detachMedia"],
                                f = ["setControls", "setKeyControls", "setFullscreen", "setVolume", "enableGPU", "disableGPU", "setMute", "setCues", "setCaptions", "setToken", "setThumbnails", "setPlaybackRate"];
                            a.each(e,
                                function(a) {
                                    b[a] = function() {
                                        return c[a] ? c[a].apply(c, arguments) : null
                                    }
                                }),
                                a.each(f,
                                    function(a) {
                                        b[a] = function() {
                                            return c[a].apply(c, arguments),
                                                b
                                        }
                                    }),
                                b.getPlaylistIndex = b.getItem
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(4), c(7), c(3), c(2), c(66), c(1), c(81), c(71), c(72), c(74), c(78), c(16)],
                    void 0 !== (e = function(a, b, c, d, e, f, g, h, i, j, k, l) {
                        return function(m, n) {
                            var o, p = this,
                                q = !1,
                                r = {};
                            f.extend(this, c),
                                this.utils = d,
                                this._ = f,
                                this.Events = c,
                                this.version = l,
                                this.trigger = function(a, b) {
                                    return b = f.isObject(b) ? f.extend({},
                                        b) : {},
                                        b.type = a,
                                        window.jwplayer && window.jwplayer.debug ? c.trigger.call(p, a, b) : c.triggerSafe.call(p, a, b)
                                },
                                this.dispatchEvent = this.trigger,
                                this.removeEventListener = this.off.bind(this);
                            var s = function() {
                                o = new g(m),
                                    h(p, o),
                                    i(p, o),
                                    o.on(a.JWPLAYER_PLAYLIST_ITEM,
                                        function() {
                                            r = {}
                                        }),
                                    o.on(a.JWPLAYER_MEDIA_META,
                                        function(a) {
                                            f.extend(r, a)
                                        }),
                                    o.on(a.JWPLAYER_READY,
                                        function(a) {
                                            q = !0,
                                                t.tick("ready"),
                                                a.setupTime = t.between("setup", "ready"),
                                                new k(p.getConfig(), p).userCertify()
                                        }),
                                    o.on("all", p.trigger),
                                    o.on(a.JWPLAYER_ERROR,
                                        function(a) {
                                            if ("mediaError" === a.type && d.isMp4(a.videoSrc) && a.detail && ("DEMUXER_ERROR_COULD_NOT_OPEN: FFmpegDemuxer: open context failed" === a.detail.message || 4 === a.detail.code)) {
                                                var b = p.getConfig().options;
                                                b.primary = "justflash",
                                                    o.setup(b, p)
                                            }
                                        })
                            };
                            s(),
                                j(this),
                                this.id = m.id;
                            var t = this._qoe = new e;
                            t.tick("init");
                            var u = function() {
                                q = !1,
                                    r = {},
                                    p.off(),
                                o && o.off(),
                                o && o.playerDestroy && o.playerDestroy()
                            };
                            return this.getPlugin = function(a) {
                                return p.plugins && p.plugins[a]
                            },
                                this.addPlugin = function(a, b) {
                                    this.plugins = this.plugins || {},
                                        this.plugins[a] = b,
                                        this.onReady(b.addToPlayer),
                                    b.resize && this.onResize(b.resizeHandler)
                                },
                                this.setup = function(a) {
                                    return t.tick("setup"),
                                        u(),
                                        s(),
                                        d.foreach(a.events,
                                            function(a, b) {
                                                var c = p[a];
                                                "function" == typeof c && c.call(p, b)
                                            }),
                                        a.id = p.id,
                                        o.setup(a, this),
                                        p
                                },
                                this.qoe = function() {
                                    var b = o.getItemQoe();
                                    return {
                                        setupTime: t.between("setup", "ready"),
                                        firstFrame: b.between(a.JWPLAYER_MEDIA_PLAY_ATTEMPT, a.JWPLAYER_MEDIA_FIRST_FRAME),
                                        player: t.dump(),
                                        item: b.dump()
                                    }
                                },
                                this.getContainer = function() {
                                    return o.getContainer ? o.getContainer() : m
                                },
                                this.getMeta = this.getItemMeta = function() {
                                    return r
                                },
                                this.getPlaylistItem = function(a) {
                                    if (!d.exists(a)) return o._model.get("playlistItem");
                                    var b = p.getPlaylist();
                                    return b ? b[a] : null
                                },
                                this.getRenderingMode = function() {
                                    return "html5"
                                },
                                this.load = function(a) {
                                    var b = this.getPlugin("vast") || this.getPlugin("googima");
                                    return b && b.destroy(),
                                        o.load(a),
                                        p
                                },
                                this.play = function(a, c) {
                                    if (f.isBoolean(a) || (c = a), c || (c = {
                                            reason: "external"
                                        }), !0 === a) return o.play(c),
                                        p;
                                    if (!1 === a) return o.pause(),
                                        p;
                                    switch (a = p.getState()) {
                                        case b.PLAYING:
                                            o.pause();
                                            break;
                                        default:
                                            o.play(c)
                                    }
                                    return p
                                },
                                this.pause = function(a) {
                                    return f.isBoolean(a) ? this.play(!a) : this.play()
                                },
                                this.createInstream = function() {
                                    return o.createInstream()
                                },
                                this.castToggle = function() {
                                    o && o.castToggle && o.castToggle()
                                },
                                this.playAd = this.pauseAd = d.noop,
                                this.remove = function() {
                                    return n(p),
                                        p.trigger("remove"),
                                        u(),
                                        p
                                },
                                this
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(1), c(4)],
                    void 0 !== (e = function(a, b) {
                        return function(c) {
                            var d = {
                                    onBufferChange: b.JWPLAYER_MEDIA_BUFFER,
                                    onBufferFull: b.JWPLAYER_MEDIA_BUFFER_FULL,
                                    onError: b.JWPLAYER_ERROR,
                                    onSetupError: b.JWPLAYER_SETUP_ERROR,
                                    onFullscreen: b.JWPLAYER_FULLSCREEN,
                                    onMeta: b.JWPLAYER_MEDIA_META,
                                    onMute: b.JWPLAYER_MEDIA_MUTE,
                                    onPlaylist: b.JWPLAYER_PLAYLIST_LOADED,
                                    onPlaylistItem: b.JWPLAYER_PLAYLIST_ITEM,
                                    onPlaylistComplete: b.JWPLAYER_PLAYLIST_COMPLETE,
                                    onReady: b.JWPLAYER_READY,
                                    onResize: b.JWPLAYER_RESIZE,
                                    onComplete: b.JWPLAYER_MEDIA_COMPLETE,
                                    onSeek: b.JWPLAYER_MEDIA_SEEK,
                                    onTime: b.JWPLAYER_MEDIA_TIME,
                                    onVolume: b.JWPLAYER_MEDIA_VOLUME,
                                    onBeforePlay: b.JWPLAYER_MEDIA_BEFOREPLAY,
                                    onBeforeComplete: b.JWPLAYER_MEDIA_BEFORECOMPLETE,
                                    onDisplayClick: b.JWPLAYER_DISPLAY_CLICK,
                                    onControls: b.JWPLAYER_CONTROLS,
                                    onQualityLevels: b.JWPLAYER_MEDIA_LEVELS,
                                    onQualityChange: b.JWPLAYER_MEDIA_LEVEL_CHANGED,
                                    onCaptionsList: b.JWPLAYER_CAPTIONS_LIST,
                                    onCaptionsChange: b.JWPLAYER_CAPTIONS_CHANGED,
                                    onAdError: b.JWPLAYER_AD_ERROR,
                                    onAdClick: b.JWPLAYER_AD_CLICK,
                                    onAdImpression: b.JWPLAYER_AD_IMPRESSION,
                                    onAdTime: b.JWPLAYER_AD_TIME,
                                    onAdComplete: b.JWPLAYER_AD_COMPLETE,
                                    onAdCompanions: b.JWPLAYER_AD_COMPANIONS,
                                    onAdSkipped: b.JWPLAYER_AD_SKIPPED,
                                    onAdPlay: b.JWPLAYER_AD_PLAY,
                                    onAdPause: b.JWPLAYER_AD_PAUSE,
                                    onAdMeta: b.JWPLAYER_AD_META,
                                    onCast: b.JWPLAYER_CAST_SESSION,
                                    onAudioTrackChange: b.JWPLAYER_AUDIO_TRACK_CHANGED,
                                    onAudioTracks: b.JWPLAYER_AUDIO_TRACKS,
                                    onCuepoint: b.JWPLAYER_CUEPOINT,
                                    onSeekForwardForbidden: b.JWPLAYER_SEEK_FORWARD_FORBIDDEN,
                                    onConnection: b.JWPLAYER_CONNECTING,
                                    onAlive: b.JWPLAYER_ALIVE,
                                    onNoLiveStream: b.JWPLAYER_NO_LIVE_STREAM,
                                    onLiveStop: b.JWPLAYER_LIVE_STOP,
                                    onPlaybackRate: b.JWPLAYER_PLAYBACKRATE
                                },
                                e = {
                                    onBuffer: "buffer",
                                    onPause: "pause",
                                    onPlay: "play",
                                    onIdle: "idle",
                                    onStop: "stop"
                                };
                            a.each(e,
                                function(b, d) {
                                    c[d] = a.partial(c.on, b, a)
                                }),
                                a.each(d,
                                    function(b, d) {
                                        c[d] = a.partial(c.on, b, a)
                                    })
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(2), c(1)],
                    void 0 !== (e = function(a, b) {
                        function d(c) {
                            b.each(c,
                                function(b, d) {
                                    c[d] = a.serialize(b)
                                })
                        }
                        function e(a) {
                            return a.slice && "px" === a.slice( - 2) && (a = a.slice(0, -2)),
                                a
                        }
                        function f(b) {
                            return (a.isMSIE(7) || a.isMSIE(6)) && (b.flashUI = !0),
                                b.skin = "bce",
                                b.startseek = !1,
                                delete b.skinColorInactive,
                                delete b.skinColorActive,
                                delete b.skinColorBackground,
                                b
                        }
                        function g(b, c) {
                            if ( - 1 === c.toString().indexOf("%")) return 0;
                            if ("string" != typeof b || !a.exists(b)) return 0;
                            if (/^\d*\.?\d+%$/.test(b)) return b;
                            var d = b.indexOf(":");
                            if ( - 1 === d) return 0;
                            var e = parseFloat(b.substr(0, d)),
                                f = parseFloat(b.substr(d + 1));
                            return e <= 0 || f <= 0 ? 0 : f / e * 100 + "%"
                        }
                        var h = {
                            autostart: !1,
                            controls: !0,
                            keyControls: !0,
                            displaytitle: !0,
                            displaydescription: !0,
                            mobilecontrols: !1,
                            repeat: !1,
                            castAvailable: !1,
                            skin: "bce",
                            stretching: "uniform",
                            mute: !1,
                            volume: 100,
                            width: 480,
                            height: 270,
                            controlbar: {
                                barLogo: !0,
                                barLogoUrl: "https://cloud.baidu.com/solution/media.html",
                                canDrag: !0
                            },
                            marquee: {
                                show: !1,
                                text: "百度云",
                                fontSize: 12,
                                color: "#FFF"
                            },
                            startseek: !0,
                            flashUI: !1,
                            playRate: !0,
                            playbackRate: 1,
                            playRateConfig: [{
                                label: "×1"
                            },
                                {
                                    label: "×1.5"
                                },
                                {
                                    label: "×2"
                                },
                                {
                                    label: "×3"
                                },
                                {
                                    label: "×4"
                                },
                                {
                                    label: "×5"
                                }],
                            isLive: !1,
                            allowDoubleClickFullscreen: !0,
                            allowClickToDisplay: !0,
                            retryCount: 0,
                            tokenEncrypt: !1,
                            crossoriginAnonymous: !1,
                            withLog: !0
                        };
                        return function(i, j) {
                            i.autoStart && (i.autostart = !0),
                            "over" !== i.controls && "none" !== i.controls || (i.controls = "over" === i.controls),
                            i.startParam && (i.startparam = i.startParam);
                            var k = j && j.getAllItems(),
                                l = b.extend({},
                                    (window.jwplayer || {}).defaults, k, i);
                            d(l);
                            var m = b.extend({},
                                h, l);
                            if (m.options = i, void 0 === m.controlbar.canDrag && (m.controlbar.canDrag = !0), "." === m.base && (m.base = a.getScriptPath("cyberplayer.js")), m.playRate || (m.playbackRate = 1), m.base = (m.base || a.loadFrom()).replace(/\/?$/, "/"), c.p = m.base, m.width = e(m.width), m.height = e(m.height), m.flashplayer = m.flashplayer || a.getScriptPath("cyberplayer.js") + "cyberplayer.flash.swf", "http:" === window.location.protocol && (m.flashplayer = m.flashplayer.replace("https", "http")), m.aspectratio = g(m.aspectratio, m.width), b.isObject(m.skin) && (m.skinUrl = m.skin.url, m.skinColorInactive = m.skin.inactive, m.skinColorActive = m.skin.active, m.skinColorBackground = m.skin.background, m.skin = b.isString(m.skin.name) ? m.skin.name: h.skin), b.isString(m.skin) && m.skin.indexOf(".xml") > 0 && (console.log("JW Player does not support XML skins, please update your config"), m.skin = m.skin.replace(".xml", "")), m.aspectratio || delete m.aspectratio, !m.playlist) {
                                var n = b.pick(m, ["title", "description", "type", "mediaid", "image", "file", "sources", "tracks", "preload", "fallbackfile"]);
                                m.playlist = [n]
                            }
                            return a.isPoorIE() && (m = f(m)),
                            a.isChrome66() && (m.originVolume = m.volume, m.volume = 0),
                                m
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    "use strict";
                    function d(a) {
                        return a && a.__esModule ? a: {
                            "default": a
                        }
                    }
                    function e(a, b) {
                        if (! (a instanceof b)) throw new TypeError("Cannot call a class as a function")
                    }
                    b.__esModule = !0;
                    var f = c(174),
                        g = d(f),
                        h = c(1),
                        i = d(h),
                        j = c(2),
                        k = d(j),
                        l = c(15),
                        m = d(l),
                        n = function() {
                            function a(b) {
                                e(this, a),
                                    this.api = null,
                                    b && b.advs && i["default"].isArray(b.advs) && b.advs.length ? (this.processAdvs = b.advs, this.hasProcessAdv = !0, this.el = k["default"].createElement((0, g["default"])())) : this.hasProcessAdv = !1,
                                    this.activeAdv = null
                            }
                            return a.prototype.setApi = function(a) {
                                this.api = a
                            },
                                a.prototype.refreshProcessAdv = function(a) {
                                    var b = i["default"].find(this.processAdvs,
                                        function(b) {
                                            return a >= b.begin && a <= b.end
                                        });
                                    b ? b !== this.activeAdv && (this.showAdv(b), this.activeAdv = b) : this.hideAllProcessAdvs()
                                },
                                a.prototype.showAdv = function(a) {
                                    var b = this.element().getElementsByTagName("a")[0],
                                        c = b.getElementsByTagName("img")[0];
                                    b.setAttribute("href", a.material.landingPage),
                                        c.setAttribute("src", a.material.image);
                                    var d = {
                                        display: "block",
                                        "z-index": 500,
                                        opacity: .9,
                                        left: "auto",
                                        right: "auto",
                                        top: "auto",
                                        bottom: "auto"
                                    };
                                    "left" === a.material.horizontalPosition ? d.left = 10 : d.right = 10,
                                        "top" === a.material.verticalPosition ? d.top = 10 : d.bottom = 50,
                                        m["default"].style(this.element(), d)
                                },
                                a.prototype.hideAllProcessAdvs = function() {
                                    this.element().style.display = "none",
                                        this.activeAdv = null
                                },
                                a.prototype.element = function() {
                                    if (this.api) {
                                        var a = this.api.getContainer();
                                        if (k["default"].getElementsByClassName("jw-process-adv", a).length > 0) return k["default"].getElementsByClassName("jw-process-adv", a)[0]
                                    }
                                    return this.el
                                },
                                a
                        } ();
                    b["default"] = n,
                        a.exports = b["default"]
                },
                function(a, b, c) {
                    var d, e, f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function(a) {
                            return typeof a
                        }: function(a) {
                            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol": typeof a
                        };
                    d = [c(44), c(1)],
                    void 0 !== (e = function(a, b) {
                        function c(a) {
                            for (var c = {},
                                     d = a.substr(a.indexOf("?") + 1).split("&"), g = 0; g < d.length; g++) {
                                var h = d[g],
                                    i = h.indexOf("=");
                                if (i > -1) {
                                    var j = h.substr(0, i),
                                        k = decodeURIComponent(h.substr(i + 1));
                                    b.contains(e, j) && (k = k.replace(/'/g, '"'), k = "object" === ("undefined" == typeof JSON ? "undefined": f(JSON)) && "function" == typeof JSON.parse ? JSON.parse(k) : eval("(" + k + ")")),
                                        c[j] = k
                                }
                            }
                            return c
                        }
                        function d() {
                            for (var d = document.getElementsByTagName("script"), e = d.length; e--;) {
                                var f = d[e],
                                    g = f.src;
                                if (g.indexOf("cyberplayer.js") > -1) {
                                    var h = c(g);
                                    if (b.size(h) > 3 && "DIV" === f.parentNode.nodeName) return a.selectPlayer(f.parentNode).setup(h)
                                }
                            }
                        }
                        var e = ["imageAdvs", "playlist", "listbar", "tracks", "captions", "controlbar", "logo", "skin", "marquee"];
                        return d(),
                            {
                                getParams: c,
                                loadPlayer: d
                            }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(16), c(2)],
                    void 0 !== (e = function(a, b) {
                        function c() {
                            for (var a = b.getElementsByClassName("jw-warning"), c = 0; c < a.length; c++) {
                                a[c].style.display = "block"
                            }
                        }
                        var d = function(a) { ! a.code || "UNAUTHORIZED" !== a.code && "BAD_REQUEST" !== a.code || c()
                            },
                            e = function(a, b) {
                                this.config = a,
                                    this.api = b
                            };
                        return e.prototype = {
                            userCertify: function() {
                                if (!1 === this.config.withLog) return ! 1;
                                var d = this.config.ak ? this.config.ak: "";
                                if (!/^[a-zA-Z0-9]{32}$/.test(d)) return c(),
                                    !1;
                                var e = "web-html5-" + a,
                                    f = b.getBrowserInfo(),
                                    g = "https://drm.media.baidubce.com/v1/playerAuth?ak=" + d + "&player=" + e + "&platform=" + f + "&callback=" + this._getCallback();
                                g = encodeURI(g);
                                var h = document.createElement("script");
                                h.type = "text/javascript",
                                    h.src = g,
                                    document.getElementsByTagName("head")[0].appendChild(h)
                            },
                            _getCallback: function() {
                                var a = (new Date).getTime(),
                                    b = 1e9 * Math.random() >>> 0,
                                    c = "jwplayer_" + a + "_" + b;
                                return window[c] = function(a) {
                                    try {
                                        d(a),
                                            delete window[c]
                                    } catch(b) {
                                        window[c] = null
                                    }
                                },
                                    c
                            }
                        },
                            e
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(86), c(3), c(1), c(4)],
                    void 0 !== (e = function(a, b, c, d) {
                        var e = function(b, e, f, g) {
                            function h() {
                                m("安装超时", "安装时间大于" + q + "秒，视频不能播放")
                            }
                            function i() {
                                c.each(p,
                                    function(a) { ! 0 !== a.complete && !0 !== a.running && null !== b && k(a.depends) && (a.running = !0, j(a))
                                    })
                            }
                            function j(a) {
                                var c = function(b) {
                                    b = b || {},
                                        l(a, b)
                                };
                                a.method(c, e, b, f, g)
                            }
                            function k(a) {
                                return c.all(a,
                                    function(a) {
                                        return p[a].complete
                                    })
                            }
                            function l(a, b) {
                                "error" === b.type ? m(b.msg, b.reason, b.code || "") : "complete" === b.type ? (clearTimeout(n), o.trigger(d.JWPLAYER_READY)) : (a.complete = !0, i())
                            }
                            function m(a, b, c) {
                                clearTimeout(n),
                                    o.trigger(d.JWPLAYER_SETUP_ERROR, {
                                        message: a + ": " + b,
                                        code: c
                                    }),
                                    o.destroy()
                            }
                            var n, o = this,
                                p = a.getQueue(),
                                q = 30;
                            this.start = function() {
                                n = setTimeout(h, 1e3 * q),
                                    i()
                            },
                                this.destroy = function() {
                                    clearTimeout(n),
                                        this.off(),
                                        p.length = 0,
                                        b = null,
                                        e = null,
                                        f = null
                                }
                        };
                        return e.prototype = b,
                            e
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(19), c(33), c(109), c(2)],
                    void 0 !== (e = function(a, b, c, d) {
                        return function(e, f) {
                            function g(a) {
                                if (a.tracks.length) {
                                    f.mediaController.off("meta", h),
                                        u = [],
                                        v = {},
                                        w = {},
                                        x = 0;
                                    for (var b = a.tracks || [], c = 0; c < b.length; c++) {
                                        var d = b[c];
                                        d.id = d.name,
                                            d.label = d.name || d.language,
                                            m(d)
                                    }
                                    var e = p();
                                    this.setCaptionsList(e),
                                        q()
                                }
                            }
                            function h(a) {
                                var b = a.metadata;
                                if (b && "textdata" === b.type) {
                                    if (!b.text) return;
                                    var c = v[b.trackid];
                                    if (!c) {
                                        c = {
                                            kind: "captions",
                                            id: b.trackid,
                                            data: []
                                        },
                                            m(c);
                                        var d = p();
                                        this.setCaptionsList(d)
                                    }
                                    var e, g;
                                    b.useDTS ? (c.source || (c.source = b.source || "mpegts"), e = b.begin, g = b.begin + "_" + b.text) : (e = a.position || f.get("position"), g = Math.round(10 * e) + "_" + b.text);
                                    var h = w[g];
                                    h || (h = {
                                        begin: e,
                                        text: b.text
                                    },
                                    b.end && (h.end = b.end), w[g] = h, c.data.push(h))
                                }
                            }
                            function i(a) {
                                d.log("CAPTIONS(" + a + ")")
                            }
                            function j(a, b) {
                                t = b,
                                    u = [],
                                    v = {},
                                    w = {},
                                    x = 0
                            }
                            function k(a) {
                                j(f, a),
                                    f.mediaController.off("meta", h),
                                    f.mediaController.off("subtitlesTracks", g);
                                var b, c, e, i, k = a.tracks,
                                    l = "flash" === f.get("provider").name,
                                    o = d.isChrome() || d.isIOS() || d.isSafari();
                                for (i = 0; i < k.length; i++) b = k[i],
                                    e = b.file && /\.(?:web)?vtt(?:\?.*)?$/i.test(b.file),
                                !l && e && !s && o || "captions" !== (c = b.kind.toLowerCase()) && "subtitles" !== c || (b.file ? (m(b), n(b)) : b.data && m(b));
                                u.length || (f.mediaController.on("meta", h, this), f.mediaController.on("subtitlesTracks", g, this));
                                var r = p();
                                this.setCaptionsList(r),
                                    q()
                            }
                            function l(a, b) {
                                var c = null;
                                0 !== b && (c = u[b - 1]),
                                    a.set("captionsTrack", c)
                            }
                            function m(a) {
                                "number" != typeof a.id && (a.id = a.name || a.file || "cc" + u.length),
                                    a.data = a.data || [],
                                a.label || (a.label = "Unknown CC", ++x > 1 && (a.label += " (" + x + ")")),
                                    u.push(a),
                                    v[a.id] = a
                            }
                            function n(a) {
                                d.ajax(a.file,
                                    function(b) {
                                        o(b, a)
                                    },
                                    i)
                            }
                            function o(d, e) {
                                var f = d.responseXML ? d.responseXML.firstChild: null;
                                if (f) for ("xml" === a.localName(f) && (f = f.nextSibling); f.nodeType === f.COMMENT_NODE;) f = f.nextSibling;
                                try {
                                    f && "tt" === a.localName(f) ? e.data = c(d.responseXML) : e.data = b(d.responseText)
                                } catch(g) {
                                    i(g.message + ": " + e.file)
                                }
                            }
                            function p() {
                                for (var a = [{
                                    id: "off",
                                    label: "Off"
                                }], b = 0; b < u.length; b++) a.push({
                                    id: u[b].id,
                                    label: u[b].label || "Unknown CC"
                                });
                                return a
                            }
                            function q() {
                                var a = 0,
                                    b = f.get("captionLabel");
                                if ("Off" === b) return void f.set("captionsIndex", 0);
                                for (var c = 0; c < u.length; c++) {
                                    var d = u[c];
                                    if (b && b === d.label) {
                                        a = c + 1;
                                        break
                                    }
                                    d["default"] || d.defaulttrack || "default" === d.id ? a = c + 1 : d.autoselect
                                }
                                r(a)
                            }
                            function r(a) {
                                u.length ? f.setVideoSubtitleTrack(a, u) : f.set("captionsIndex", a)
                            }
                            f.on("change:playlistItem", j, this),
                                f.on("change:captionsIndex", l, this),
                                f.on("itemReady", k, this),
                                f.mediaController.on("subtitlesTracks", g, this),
                                f.mediaController.on("subtitlesTrackData",
                                    function(a) {
                                        var b = v[a.name];
                                        if (b) {
                                            b.source = a.source;
                                            for (var c = a.captions || [], d = !1, e = 0; e < c.length; e++) {
                                                var f = c[e],
                                                    g = a.name + "_" + f.begin + "_" + f.end;
                                                w[g] || (w[g] = f, b.data.push(f), d = !0)
                                            }
                                            d && b.data.sort(function(a, b) {
                                                return a.begin - b.begin
                                            })
                                        }
                                    },
                                    this),
                                f.mediaController.on("meta", h, this);
                            var s = !!f.get("sdkplatform"),
                                t = {},
                                u = [],
                                v = {},
                                w = {},
                                x = 0;
                            this.getCurrentIndex = function() {
                                return f.get("captionsIndex")
                            },
                                this.getCaptionsList = function() {
                                    return f.get("captionsList")
                                },
                                this.setCaptionsList = function(a) {
                                    f.set("captionsList", a)
                                }
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e, f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function(a) {
                            return typeof a
                        }: function(a) {
                            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol": typeof a
                        };
                    d = [c(75), c(82), c(1), c(79), c(80), c(28), c(45), c(113), c(57), c(2), c(146), c(20), c(3), c(29), c(7), c(4), c(140), c(116)],
                    void 0 !== (e = function(a, b, c, d, e, g, h, i, j, k, l, m, n, o, p, q, r, s) {
                        function t(a) {
                            return function() {
                                var b = Array.prototype.slice.call(arguments, 0);
                                this._model.getVideo() ? this["_" + a].apply(this, b) : this.eventsQueue.push([a, b])
                            }
                        }
                        function u(a) {
                            return a === p.LOADING || a === p.STALLED ? p.BUFFERING: a
                        }
                        var v = function(a) {
                            this.originalContainer = this.currentContainer = a,
                                this.eventsQueue = [],
                                c.extend(this, n),
                                this._model = new g
                        };
                        return v.prototype = {
                            play: t("play"),
                            pause: t("pause"),
                            setVolume: t("setVolume"),
                            enableGPU: t("enableGPU"),
                            disableGPU: t("disableGPU"),
                            setToken: t("setToken"),
                            setMute: t("setMute"),
                            seek: t("seek"),
                            stop: t("stop"),
                            load: t("load"),
                            playlistNext: t("next"),
                            playlistPrev: t("prev"),
                            playlistItem: t("item"),
                            setFullscreen: t("setFullscreen"),
                            setCurrentCaptions: t("setCurrentCaptions"),
                            setCurrentQuality: t("setCurrentQuality"),
                            setup: function(g, n) {
                                function r() {
                                    ca.mediaModel.on("change:state",
                                        function(a, b) {
                                            "playing" === b && k.isChrome66() && 0 === n.getVolume() && ca.setVolume(ia.originVolume);
                                            var c = u(b);
                                            ca.set("state", c)
                                        })
                                }
                                function t() {
                                    _ = null,
                                        H(ca.get("item")),
                                        ca.on("change:state", o, this),
                                        ca.on("change:castState",
                                            function(a, b) {
                                                fa.trigger(q.JWPLAYER_CAST_SESSION, b)
                                            }),
                                        ca.on("change:fullscreen",
                                            function(a, b) {
                                                fa.trigger(q.JWPLAYER_FULLSCREEN, {
                                                    fullscreen: b
                                                })
                                            }),
                                        ca.on("itemReady",
                                            function() {
                                                fa.trigger(q.JWPLAYER_PLAYLIST_ITEM, {
                                                    index: ca.get("item"),
                                                    item: ca.get("playlistItem")
                                                })
                                            }),
                                        ca.on("change:playlist",
                                            function(a, b) {
                                                b.length && fa.trigger(q.JWPLAYER_PLAYLIST_LOADED, {
                                                    playlist: b
                                                })
                                            }),
                                        ca.on("change:volume",
                                            function(a, b) {
                                                fa.trigger(q.JWPLAYER_MEDIA_VOLUME, {
                                                    volume: b
                                                })
                                            }),
                                        ca.on("change:mute",
                                            function(a, b) {
                                                fa.trigger(q.JWPLAYER_MEDIA_MUTE, {
                                                    mute: b
                                                })
                                            }),
                                        ca.on("change:controls",
                                            function(a, b) {
                                                fa.trigger(q.JWPLAYER_CONTROLS, {
                                                    controls: b
                                                })
                                            }),
                                        ca.on("change:scrubbing",
                                            function(a, b) {
                                                b ? C() : A()
                                            }),
                                        ca.on("change:captionsList",
                                            function(a, b) {
                                                fa.trigger(q.JWPLAYER_CAPTIONS_LIST, {
                                                    tracks: b,
                                                    track: U()
                                                })
                                            }),
                                        ca.mediaModel.set("mediaType", null),
                                        ca.mediaController.on("all", fa.trigger.bind(fa)),
                                        Z.on("all", fa.trigger.bind(fa)),
                                        this.showView(Z.element()),
                                        c.defer(v)
                                }
                                function v() {
                                    fa.trigger(q.JWPLAYER_READY, {
                                        setupTime: 0
                                    }),
                                        fa.trigger(q.JWPLAYER_PLAYLIST_LOADED, {
                                            playlist: ca.get("playlist")
                                        }),
                                        fa.trigger(q.JWPLAYER_PLAYLIST_ITEM, {
                                            index: ca.get("item"),
                                            item: ca.get("playlistItem")
                                        }),
                                        fa.trigger(q.JWPLAYER_CAPTIONS_LIST, {
                                            tracks: ca.get("captionsList"),
                                            track: ca.get("captionsIndex")
                                        }),
                                    ca.get("autostart") && (!k.isPoorIE() && ca.get("imageAdvs") && ca.get("imageAdvs").start ? Z.beginStartAdv() : A({
                                        reason: "autostart"
                                    })),
                                        w()
                                }
                                function w() {
                                    for (; fa.eventsQueue.length > 0;) {
                                        var a = fa.eventsQueue.shift(),
                                            b = a[0],
                                            c = a[1] || [];
                                        fa["_" + b].apply(fa, c)
                                    }
                                }
                                function x(a) {
                                    switch (ca.get("state") === p.ERROR && ca.set("state", p.IDLE), B(!0), ca.get("autostart") && ca.once("itemReady", A), void 0 === a ? "undefined": f(a)) {
                                        case "string":
                                            y(a);
                                            break;
                                        case "object":
                                            var b = i(a),
                                                c = ca.get("edition"),
                                                d = ca.getProviders(),
                                                e = d.required(b, c);
                                            m.load(e, c).then(function() {
                                                fa.getProvider() || (ca.setProvider(ca.get("playlistItem")), w())
                                            });
                                            G(a) && H(0);
                                            break;
                                        case "number":
                                            H(a)
                                    }
                                }
                                function y(a) {
                                    var b = new j;
                                    b.on(q.JWPLAYER_PLAYLIST_LOADED,
                                        function(a) {
                                            x(a.playlist)
                                        }),
                                        b.on(q.JWPLAYER_ERROR,
                                            function(a) {
                                                a.message = "播放列表加载失败: " + a.message,
                                                    this.triggerError(a)
                                            },
                                            this),
                                        b.load(a)
                                }
                                function z() {
                                    var a = fa._instreamAdapter && fa._instreamAdapter.getState();
                                    return c.isString(a) ? a: ca.get("state")
                                }
                                function A(a) {
                                    var b;
                                    if (a && ca.set("playReason", a.reason), ca.get("state") !== p.ERROR) {
                                        var d = fa._instreamAdapter && fa._instreamAdapter.getState();
                                        if (c.isString(d)) return n.pauseAd(!1);
                                        if (ca.get("state") === p.COMPLETE && (B(!0), H(0)), !da) {
                                            da = !0;
                                            var e = ca.getVideo().getCurrentQuality(),
                                                f = ca.get("playlistItem"),
                                                g = !1;
                                            if (e < 0 && f && ca.get("qualityLabel")) {
                                                for (var h = 0; h < f.sources.length; h++) f.sources[h].label.toString() === ca.get("qualityLabel").toString() && (e = h);
                                                "flash" === ca.getVideo().getName().name && (g = !0)
                                            }
                                            if (e < 0 && (e = 0), fa.trigger(q.JWPLAYER_MEDIA_BEFOREPLAY, {
                                                    file: ca.get("file") || ca.get("playlistItem").sources[e].file,
                                                    currentQuality: g ? ++e: e
                                                }), da = !1, ba) return ba = !1,
                                                void(aa = null)
                                        }
                                        if (D()) {
                                            if (0 === ca.get("playlist").length) return ! 1; ! k.isPoorIE() && ca.get("imageAdvs") && ca.get("imageAdvs").start ? Z.beginStartAdv() : b = k.tryCatch(function() {
                                                ca.loadVideo()
                                            })
                                        } else ca.get("state") === p.PAUSED && (b = k.tryCatch(function() {
                                            ca.playVideo()
                                        }));
                                        return ! (b instanceof k.Error && (fa.triggerError(b), aa = null, 1))
                                    }
                                }
                                function B(a) {
                                    ca.off("itemReady", A);
                                    var b = !a;
                                    aa = null;
                                    var c = k.tryCatch(function() {
                                            ca.stopVideo()
                                        },
                                        fa);
                                    return c instanceof k.Error ? (fa.triggerError(c), !1) : (b && (ea = !0), da && (ba = !0), !0)
                                }
                                function C() {
                                    aa = null;
                                    var a = fa._instreamAdapter && fa._instreamAdapter.getState();
                                    if (c.isString(a)) return n.pauseAd(!0);
                                    switch (ca.get("state")) {
                                        case p.ERROR:
                                            return ! 1;
                                        case p.PLAYING:
                                        case p.BUFFERING:
                                            var b = k.tryCatch(function() {
                                                    ga().pause()
                                                },
                                                this);
                                            if (b instanceof k.Error) return fa.triggerError(b),
                                                !1;
                                            break;
                                        default:
                                            da && (ba = !0)
                                    }
                                    return ! 0
                                }
                                function D() {
                                    var a = ca.get("state");
                                    return a === p.IDLE || a === p.COMPLETE || a === p.ERROR
                                }
                                function E(a) {
                                    if (ca.get("state") !== p.ERROR) {
                                        if (this.getConfig().disableSeekForward && a > this._model.get("position")) return void fa.trigger(q.JWPLAYER_SEEK_FORWARD_FORBIDDEN);
                                        ca.get("scrubbing") || ca.get("state") === p.PLAYING || A(!0),
                                            ga().seek(a)
                                    }
                                }
                                function F(a, b) {
                                    B(!0),
                                        H(a),
                                        A(b)
                                }
                                function G(a) {
                                    var b = i(a);
                                    return b = i.filterPlaylist(b, ca.getProviders(), ca.get("androidhls"), ca.get("drm"), ca.get("preload"), ca.get("feedid"), ca.get("withCredentials")),
                                        ca.set("playlist", b),
                                        !(!c.isArray(b) || 0 === b.length)
                                }
                                function H(a) {
                                    var b = ca.get("playlist");
                                    a = parseInt(a, 10) || 0,
                                        a = (a + b.length) % b.length,
                                        ca.set("item", a),
                                        ca.set("playlistItem", b[a]),
                                        ca.setActiveItem(b[a])
                                }
                                function I(a) {
                                    F(ca.get("item") - 1, a || {
                                            reason: "external"
                                        })
                                }
                                function J(a) {
                                    F(ca.get("item") + 1, a || {
                                            reason: "external"
                                        })
                                }
                                function K() {
                                    if (D()) {
                                        if (ea) return void(ea = !1);
                                        aa = K;
                                        return ca.get("item") === ca.get("playlist").length - 1 ? void(ca.get("repeat") ? J({
                                            reason: "repeat"
                                        }) : (ca.set("state", p.COMPLETE), fa.trigger(q.JWPLAYER_PLAYLIST_COMPLETE, {}))) : void J({
                                            reason: "playlist"
                                        })
                                    }
                                }
                                function L(a) {
                                    ga() && (a = parseInt(a, 10) || 0, ga().setCurrentQuality(a))
                                }
                                function M() {
                                    return ga() ? ga().getCurrentQuality() : -1
                                }
                                function N() {
                                    if (this._model) return this._model.getConfiguration()
                                }
                                function O() {
                                    if (this._model.mediaModel) return this._model.mediaModel.get("visualQuality");
                                    var a = P();
                                    if (a) {
                                        var b = M(),
                                            d = a[b];
                                        if (d) return {
                                            level: c.extend({
                                                    index: b
                                                },
                                                d),
                                            mode: "",
                                            reason: ""
                                        }
                                    }
                                    return null
                                }
                                function P() {
                                    return ga() ? ga().getQualityLevels() : null
                                }
                                function Q(a) {
                                    ga() && (a = parseInt(a, 10) || 0, ga().setCurrentAudioTrack(a))
                                }
                                function R() {
                                    return ga() ? ga().getCurrentAudioTrack() : -1
                                }
                                function S() {
                                    return ga() ? ga().getAudioTracks() : null
                                }
                                function T(a) {
                                    a = parseInt(a, 10) || 0,
                                        ca.persistVideoSubtitleTrack(a),
                                        fa.trigger(q.JWPLAYER_CAPTIONS_CHANGED, {
                                            tracks: V(),
                                            track: a
                                        })
                                }
                                function U() {
                                    return $.getCurrentIndex()
                                }
                                function V() {
                                    return $.getCaptionsList()
                                }
                                function W() {
                                    var a = ca.getVideo();
                                    if (a) {
                                        var b = a.detachMedia();
                                        if (b instanceof HTMLVideoElement) return b
                                    }
                                    return null
                                }
                                function X() {
                                    var a = k.tryCatch(function() {
                                        ca.getVideo().attachMedia()
                                    });
                                    return a instanceof k.Error ? void k.log("Error calling _attachMedia", a) : void("function" == typeof aa && aa())
                                }
                                function Y(a) {
                                    c.isBoolean(a) || (a = !ca.get("fullscreen")),
                                        ca.set("fullscreen", a),
                                    this._instreamAdapter && this._instreamAdapter._adModel && this._instreamAdapter._adModel.set("fullscreen", a)
                                }
                                var Z, $, _, aa, ba, ca = this._model,
                                    da = !1,
                                    ea = !1,
                                    fa = this,
                                    ga = function() {
                                        return ca.getVideo()
                                    },
                                    ha = new h;
                                ha.track(ca);
                                var ia = new a(g, ha);
                                ca.setup(ia, ha),
                                ca.advManage && ca.advManage.setApi(n),
                                    Z = this._view = new l(n, ca),
                                    new s(n, ca),
                                    $ = new e(n, ca),
                                    _ = new d(n, ca, Z, G),
                                    _.on(q.JWPLAYER_READY, t, this),
                                    _.on(q.JWPLAYER_SETUP_ERROR, this.setupError, this),
                                    ca.mediaController.on(q.JWPLAYER_MEDIA_COMPLETE,
                                        function() {
                                            c.defer(K)
                                        }),
                                    ca.mediaController.on(q.JWPLAYER_MEDIA_ERROR, this.triggerError, this),
                                    ca.on("change:flashBlocked",
                                        function(a, b) {
                                            if (!b) return void this._model.set("errorEvent", void 0);
                                            var c = !!a.get("flashThrottle"),
                                                d = {
                                                    message: c ? "Click to run Flash": "Flash plugin failed to load"
                                                };
                                            c || this.trigger(q.JWPLAYER_ERROR, d),
                                                this._model.set("errorEvent", d)
                                        },
                                        this),
                                    r(),
                                    ca.on("change:mediaModel", r),
                                    this._play = A,
                                    this._pause = C,
                                    this._seek = E,
                                    this._stop = B,
                                    this._load = x,
                                    this._next = J,
                                    this._prev = I,
                                    this._item = F,
                                    this._setCurrentCaptions = T,
                                    this._setCurrentQuality = L,
                                    this._setFullscreen = Y,
                                    this.detachMedia = W,
                                    this.attachMedia = X,
                                    this.getCurrentQuality = M,
                                    this.getQualityLevels = P,
                                    this.setCurrentAudioTrack = Q,
                                    this.getCurrentAudioTrack = R,
                                    this.getAudioTracks = S,
                                    this.getCurrentCaptions = U,
                                    this.getCaptionsList = V,
                                    this.getVisualQuality = O,
                                    this.getConfig = N,
                                    this.getState = z,
                                    this.setVolume = ca.setVolume.bind(ca),
                                    this.setMute = ca.setMute.bind(ca),
                                    this.enableGPU = ca.enableGPU,
                                    this.disableGPU = ca.disableGPU,
                                    this.setToken = ca.setToken,
                                    this.setPlaybackRate = ca.setPlaybackRate,
                                    this.getProvider = function() {
                                        return ca.get("provider")
                                    },
                                    this.getWidth = function() {
                                        return ca.get("containerWidth")
                                    },
                                    this.getHeight = function() {
                                        return ca.get("containerHeight")
                                    },
                                    this.getContainer = function() {
                                        return this.currentContainer
                                    },
                                    this.resize = Z.resize,
                                    this.getSafeRegion = Z.getSafeRegion,
                                    this.setCues = Z.addCues,
                                    this.setThumbnails = Z.addThumbnails,
                                    this.setCaptions = Z.setCaptions,
                                    this.addButton = function(a, b, d, e, f) {
                                        var g = {
                                                img: a,
                                                tooltip: b,
                                                callback: d,
                                                id: e,
                                                btnClass: f
                                            },
                                            h = ca.get("dock");
                                        h = h ? h.slice(0) : [],
                                            h = c.reject(h, c.matches({
                                                id: g.id
                                            })),
                                            h.push(g),
                                            ca.set("dock", h)
                                    },
                                    this.removeButton = function(a) {
                                        var b = ca.get("dock") || [];
                                        b = c.reject(b, c.matches({
                                            id: a
                                        })),
                                            ca.set("dock", b)
                                    },
                                    this.checkBeforePlay = function() {
                                        return da
                                    },
                                    this.getItemQoe = function() {
                                        return ca._qoeItem
                                    },
                                    this.setControls = function(a) {
                                        c.isBoolean(a) || (a = !ca.get("controls")),
                                            ca.set("controls", a);
                                        var b = ca.getVideo();
                                        b && b.setControls(a)
                                    },
                                    this.setKeyControls = function(a) {
                                        ca.set("keyControls", a)
                                    },
                                    this.playerDestroy = function() {
                                        this.stop(),
                                            this.showView(this.originalContainer),
                                        Z && Z.destroy(),
                                        ca && ca.destroy(),
                                        _ && (_.destroy(), _ = null)
                                    },
                                    this.isBeforePlay = this.checkBeforePlay,
                                    this.isBeforeComplete = function() {
                                        return ca.getVideo().checkComplete()
                                    },
                                    this.createInstream = function() {
                                        return this.instreamDestroy(),
                                            this._instreamAdapter = new b(this, ca, Z),
                                            this._instreamAdapter
                                    },
                                    this.skipAd = function() {
                                        this._instreamAdapter && this._instreamAdapter.skipAd()
                                    },
                                    this.instreamDestroy = function() {
                                        fa._instreamAdapter && fa._instreamAdapter.destroy()
                                    },
                                    _.start()
                            },
                            showView: function(a) { (document.documentElement.contains(this.currentContainer) || (this.currentContainer = document.getElementById(this._model.get("id")), this.currentContainer)) && (this.currentContainer.parentElement && this.currentContainer.parentElement.replaceChild(a, this.currentContainer), this.currentContainer = a)
                            },
                            triggerError: function(a) {
                                this._model.set("errorEvent", a),
                                    this._model.set("state", p.ERROR),
                                    this._model.once("change:state",
                                        function() {
                                            this._model.set("errorEvent", void 0)
                                        },
                                        this),
                                    this.trigger(q.JWPLAYER_ERROR, a)
                            },
                            setupError: function(a) {
                                var b = a.message,
                                    d = k.createElement(r(this._model.get("id"), this._model.get("skin"), b)),
                                    e = this._model.get("width"),
                                    f = this._model.get("height");
                                k.style(d, {
                                    width: e.toString().indexOf("%") > 0 ? e: e + "px",
                                    height: f.toString().indexOf("%") > 0 ? f: f + "px"
                                }),
                                    this.showView(d);
                                var g = this;
                                c.defer(function() {
                                    g.trigger(q.JWPLAYER_SETUP_ERROR, {
                                        message: b,
                                        code: a.code
                                    })
                                })
                            }
                        },
                            v
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(84), c(83), c(4), c(7), c(2), c(3), c(1)],
                    void 0 !== (e = function(a, b, c, d, e, f, g) {
                        function h(c) {
                            return (c.get("provider").name || "").indexOf("flash") >= 0 ? b: a
                        }
                        var i = {
                                skipoffset: null,
                                tag: null
                            },
                            j = function(a, b, f) {
                                function j(a, b) {
                                    "complete" !== a && (b = b || {},
                                    u.tag && !b.tag && (b.tag = u.tag), this.trigger(a, b))
                                }
                                function k(a) {
                                    s._adModel.set("duration", a.duration),
                                        s._adModel.set("position", a.position)
                                }
                                function l(a) {
                                    var d = {};
                                    if (u.tag && (d.tag = u.tag), m && t + 1 < m.length) {
                                        this.trigger(c.JWPLAYER_MEDIA_COMPLETE, d),
                                            s._adModel.set("state", "buffering"),
                                            b.set("skipButton", !1),
                                            t++;
                                        var e, f = m[t];
                                        n && (e = n[t]),
                                            this.loadItem(f, e)
                                    } else a.type === c.JWPLAYER_MEDIA_COMPLETE && (this.trigger(c.JWPLAYER_MEDIA_COMPLETE, d), this.trigger(c.JWPLAYER_PLAYLIST_COMPLETE, {})),
                                        this.destroy()
                                }
                                var m, n, o, p, q, r = h(b),
                                    s = new r(a, b),
                                    t = 0,
                                    u = {},
                                    v = g.bind(function(a) {
                                            a = a || {},
                                                a.hasControls = !!b.get("controls"),
                                                this.trigger(c.JWPLAYER_INSTREAM_CLICK, a),
                                            s && s._adModel && (s._adModel.get("state") === d.PAUSED ? a.hasControls && s.instreamPlay() : s.instreamPause())
                                        },
                                        this),
                                    w = g.bind(function() {
                                            s && s._adModel && s._adModel.get("state") === d.PAUSED && b.get("controls") && (a.setFullscreen(), a.play())
                                        },
                                        this);
                                this.type = "instream",
                                    this.init = function() {
                                        o = b.getVideo(),
                                            p = b.get("position"),
                                            q = b.get("playlist")[b.get("item")],
                                            s.on("all", j, this),
                                            s.on(c.JWPLAYER_MEDIA_TIME, k, this),
                                            s.on(c.JWPLAYER_MEDIA_COMPLETE, l, this),
                                            s.init(),
                                            o.detachMedia(),
                                            b.mediaModel.set("state", d.BUFFERING),
                                            a.checkBeforePlay() || 0 === p && !o.checkComplete() ? (p = 0, b.set("preInstreamState", "instream-preroll")) : o && o.checkComplete() || b.get("state") === d.COMPLETE ? b.set("preInstreamState", "instream-postroll") : b.set("preInstreamState", "instream-midroll");
                                        var g = b.get("state");
                                        return g !== d.PLAYING && g !== d.BUFFERING || o.pause(),
                                            f.setupInstream(s._adModel),
                                            s._adModel.set("state", d.BUFFERING),
                                            f.clickHandler().setAlternateClickHandlers(e.noop, null),
                                            this.setText("Loading ad"),
                                            this
                                    },
                                    this.loadItem = function(a, d) {
                                        if (e.isAndroid(2.3)) return void this.trigger({
                                            type: c.JWPLAYER_ERROR,
                                            message: "流加载失败：在Android 2.3上不能加载流"
                                        });
                                        g.isArray(a) && (m = a, n = d, a = m[t], n && (d = n[t])),
                                            this.trigger(c.JWPLAYER_PLAYLIST_ITEM, {
                                                index: t,
                                                item: a
                                            }),
                                            u = g.extend({},
                                                i, d),
                                            s.load(a),
                                            this.addClickHandler();
                                        var f = a.skipoffset || u.skipoffset;
                                        f && (s._adModel.set("skipMessage", u.skipMessage), s._adModel.set("skipText", u.skipText), s._adModel.set("skipOffset", f), b.set("skipButton", !0))
                                    },
                                    this.applyProviderListeners = function(a) {
                                        s.applyProviderListeners(a),
                                            this.addClickHandler()
                                    },
                                    this.play = function() {
                                        s.instreamPlay()
                                    },
                                    this.pause = function() {
                                        s.instreamPause()
                                    },
                                    this.hide = function() {
                                        s.hide()
                                    },
                                    this.addClickHandler = function() {
                                        f.clickHandler().setAlternateClickHandlers(v, w),
                                            s.on(c.JWPLAYER_MEDIA_META, this.metaHandler, this)
                                    },
                                    this.skipAd = function(a) {
                                        var b = c.JWPLAYER_AD_SKIPPED;
                                        this.trigger(b, a),
                                            l.call(this, {
                                                type: b
                                            })
                                    },
                                    this.metaHandler = function(a) {
                                        a.width && a.height && f.resizeMedia()
                                    },
                                    this.destroy = function() {
                                        if (this.off(), b.set("skipButton", !1), s) {
                                            f.clickHandler() && f.clickHandler().revertAlternateClickHandlers(),
                                                s.instreamDestroy(),
                                                f.destroyInstream(),
                                                s = null,
                                                a.attachMedia();
                                            switch (b.get("preInstreamState")) {
                                                case "instream-preroll":
                                                case "instream-midroll":
                                                    var c = g.extend({},
                                                        q);
                                                    c.starttime = p,
                                                        b.loadVideo(c),
                                                    e.isMobile() && b.mediaModel.get("state") === d.BUFFERING && o.setState(d.BUFFERING),
                                                        o.play();
                                                    break;
                                                case "instream-postroll":
                                                case "instream-idle":
                                                    o.stop()
                                            }
                                        }
                                    },
                                    this.getState = function() {
                                        return ! (!s || !s._adModel) && s._adModel.get("state")
                                    },
                                    this.setText = function(a) {
                                        f.setAltText(a || "")
                                    },
                                    this.hide = function() {
                                        f.useExternalControls()
                                    }
                            };
                        return g.extend(j.prototype, f),
                            j
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(3), c(28), c(29), c(4), c(7), c(2), c(1)],
                    void 0 !== (e = function(a, b, c, d, e, f, g) {
                        var h = function(a, d) {
                            this.model = d,
                                this._adModel = (new b).setup({
                                    id: d.get("id"),
                                    volume: d.get("volume"),
                                    fullscreen: d.get("fullscreen"),
                                    mute: d.get("mute")
                                }),
                                this._adModel.on("change:state", c, this);
                            var e = a.getContainer();
                            this.swf = e.querySelector("object")
                        };
                        return h.prototype = g.extend({
                                init: function() {
                                    if (f.isChrome()) {
                                        var a = -1,
                                            b = !1;
                                        this.swf.on("throttle",
                                            function(c) {
                                                if (clearTimeout(a), "resume" === c.state) b && (b = !1, this.instreamPlay());
                                                else {
                                                    var d = this;
                                                    a = setTimeout(function() {
                                                            d._adModel.get("state") === e.PLAYING && (b = !0, d.instreamPause())
                                                        },
                                                        250)
                                                }
                                            },
                                            this)
                                    }
                                    this.swf.on("instream:state",
                                        function(a) {
                                            switch (a.newstate) {
                                                case e.PLAYING:
                                                    this._adModel.set("state", a.newstate);
                                                    break;
                                                case e.PAUSED:
                                                    this._adModel.set("state", a.newstate)
                                            }
                                        },
                                        this).on("instream:time",
                                        function(a) {
                                            this._adModel.set("position", a.position),
                                                this._adModel.set("duration", a.duration),
                                                this.trigger(d.JWPLAYER_MEDIA_TIME, a)
                                        },
                                        this).on("instream:complete",
                                        function(a) {
                                            this.trigger(d.JWPLAYER_MEDIA_COMPLETE, a)
                                        },
                                        this).on("instream:error",
                                        function(a) {
                                            this.trigger(d.JWPLAYER_MEDIA_ERROR, a)
                                        },
                                        this),
                                        this.swf.triggerFlash("instream:init"),
                                        this.applyProviderListeners = function(a) {
                                            this.model.on("change:volume",
                                                function(b, c) {
                                                    a.volume(c)
                                                },
                                                this),
                                                this.model.on("change:mute",
                                                    function(b, c) {
                                                        a.mute(c)
                                                    },
                                                    this)
                                        }
                                },
                                instreamDestroy: function() {
                                    this._adModel && (this.off(), this.swf.off(null, null, this), this.swf.triggerFlash("instream:destroy"), this.swf = null, this._adModel.off(), this._adModel = null, this.model = null)
                                },
                                load: function(a) {
                                    this.swf.triggerFlash("instream:load", a)
                                },
                                instreamPlay: function() {
                                    this.swf.triggerFlash("instream:play")
                                },
                                instreamPause: function() {
                                    this.swf.triggerFlash("instream:pause")
                                }
                            },
                            a),
                            h
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(1), c(3), c(29), c(4), c(7), c(28)],
                    void 0 !== (e = function(a, b, c, d, e, f) {
                        return function(g, h) {
                            function i(b) {
                                var e = b || m.getVideo();
                                if (n !== e) {
                                    if (n = e, !e) return;
                                    e.off(),
                                        e.on("all",
                                            function(b, c) {
                                                c = a.extend({},
                                                    c, {
                                                        type: b
                                                    }),
                                                    this.trigger(b, c)
                                            },
                                            o),
                                        e.on(d.JWPLAYER_MEDIA_BUFFER_FULL, l),
                                        e.on(d.JWPLAYER_PLAYER_STATE, j),
                                        e.attachMedia(),
                                        e.volume(h.get("volume")),
                                        e.mute(h.get("mute")),
                                        m.on("change:state", c, o)
                                }
                            }
                            function j(a) {
                                switch (a.newstate) {
                                    case e.PLAYING:
                                        m.set("state", a.newstate);
                                        break;
                                    case e.PAUSED:
                                        m.set("state", a.newstate)
                                }
                            }
                            function k(a) {
                                h.trigger(a.type, a),
                                    o.trigger(d.JWPLAYER_FULLSCREEN, {
                                        fullscreen: a.jwstate
                                    })
                            }
                            function l() {
                                m.getVideo().play()
                            }
                            var m, n, o = a.extend(this, b);
                            return g.on(d.JWPLAYER_FULLSCREEN,
                                function(a) {
                                    this.trigger(d.JWPLAYER_FULLSCREEN, a)
                                },
                                o),
                                this.init = function() {
                                    m = (new f).setup({
                                        id: h.get("id"),
                                        volume: h.get("volume"),
                                        fullscreen: h.get("fullscreen"),
                                        mute: h.get("mute")
                                    }),
                                        m.on("fullscreenchange", k),
                                        this._adModel = m
                                },
                                o.load = function(a) {
                                    m.set("item", 0),
                                        m.set("playlistItem", a),
                                        m.setActiveItem(a),
                                        i(),
                                        m.off(d.JWPLAYER_ERROR),
                                        m.on(d.JWPLAYER_ERROR,
                                            function(a) {
                                                this.trigger(d.JWPLAYER_ERROR, a)
                                            },
                                            o),
                                        m.loadVideo(a)
                                },
                                o.applyProviderListeners = function(a) {
                                    i(a),
                                        a.off(d.JWPLAYER_ERROR),
                                        a.on(d.JWPLAYER_ERROR,
                                            function(a) {
                                                this.trigger(d.JWPLAYER_ERROR, a)
                                            },
                                            o),
                                        h.on("change:volume",
                                            function(a, b) {
                                                n.volume(b)
                                            },
                                            o),
                                        h.on("change:mute",
                                            function(a, b) {
                                                n.mute(b)
                                            },
                                            o)
                                },
                                this.instreamDestroy = function() {
                                    m && (m.off(), this.off(), n && (n.detachMedia(), n.off(), m.getVideo() && n.destroy()), m = null, g.off(null, null, this), g = null)
                                },
                                o.instreamPlay = function() {
                                    m.getVideo() && m.getVideo().play(!0)
                                },
                                o.instreamPause = function() {
                                    m.getVideo() && m.getVideo().pause(!0)
                                },
                                o
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(66), c(4), c(1)],
                    void 0 !== (e = function(a, b, c) {
                        function d(a) {
                            a.mediaController.off(b.JWPLAYER_MEDIA_PLAY_ATTEMPT, a._onPlayAttempt),
                                a.mediaController.off(b.JWPLAYER_PROVIDER_FIRST_FRAME, a._triggerFirstFrame),
                                a.mediaController.off(b.JWPLAYER_MEDIA_TIME, a._onTime)
                        }
                        function e(a) {
                            d(a),
                                a._triggerFirstFrame = c.once(function() {
                                    var c = a._qoeItem;
                                    c.tick(b.JWPLAYER_MEDIA_FIRST_FRAME);
                                    var e = c.between(b.JWPLAYER_MEDIA_PLAY_ATTEMPT, b.JWPLAYER_MEDIA_FIRST_FRAME);
                                    a.mediaController.trigger(b.JWPLAYER_MEDIA_FIRST_FRAME, {
                                        loadTime: e
                                    }),
                                        d(a)
                                }),
                                a._onTime = g(a._triggerFirstFrame),
                                a._onPlayAttempt = function() {
                                    a._qoeItem.tick(b.JWPLAYER_MEDIA_PLAY_ATTEMPT)
                                },
                                a.mediaController.on(b.JWPLAYER_MEDIA_PLAY_ATTEMPT, a._onPlayAttempt),
                                a.mediaController.once(b.JWPLAYER_PROVIDER_FIRST_FRAME, a._triggerFirstFrame),
                                a.mediaController.on(b.JWPLAYER_MEDIA_TIME, a._onTime)
                        }
                        function f(c) {
                            function d(c, d, f) {
                                c._qoeItem && f && c._qoeItem.end(f.get("state")),
                                    c._qoeItem = new a,
                                    c._qoeItem.tick(b.JWPLAYER_PLAYLIST_ITEM),
                                    c._qoeItem.start(d.get("state")),
                                    e(c),
                                    d.on("change:state",
                                        function(a, b, d) {
                                            c._qoeItem.end(d),
                                                c._qoeItem.start(b)
                                        })
                            }
                            c.on("change:mediaModel", d)
                        }
                        var g = function(a) {
                            var b = Number.MIN_VALUE;
                            return function(c) {
                                c.position > b && a(),
                                    b = c.position
                            }
                        };
                        return {
                            model: f
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(20), c(34), c(57), c(41), c(21), c(1), c(2), c(4), c(8), c(16)],
                    void 0 !== (e = function(a, b, d, e, f, g, h, i, j, k) {
                        function l() {
                            return {
                                LOAD_PROMISE_POLYFILL: {
                                    method: m,
                                    depends: []
                                },
                                LOAD_BASE64_POLYFILL: {
                                    method: n,
                                    depends: []
                                },
                                LOAD_JSON2: {
                                    method: o,
                                    depends: []
                                },
                                LOADED_POLYFILLS: {
                                    method: u,
                                    depends: ["LOAD_PROMISE_POLYFILL", "LOAD_BASE64_POLYFILL", "LOAD_JSON2"]
                                },
                                LOAD_PLUGINS: {
                                    method: v,
                                    depends: ["LOADED_POLYFILLS"]
                                },
                                INIT_PLUGINS: {
                                    method: w,
                                    depends: ["LOAD_PLUGINS", "SETUP_VIEW"]
                                },
                                LOAD_FLVJS: {
                                    method: p,
                                    depends: []
                                },
                                LOAD_VIDEOJS_LEVELS: {
                                    method: r,
                                    depends: ["LOAD_VIDEOJS_HLS"]
                                },
                                LOAD_VIDEOJS_HLS: {
                                    method: s,
                                    depends: ["LOAD_VIDEOJS"]
                                },
                                LOAD_VIDEOJS: {
                                    method: t,
                                    depends: []
                                },
                                LOAD_PROVIDERS: {
                                    method: H,
                                    depends: ["FILTER_PLAYLIST"]
                                },
                                LOAD_SKIN: {
                                    method: G,
                                    depends: ["LOADED_POLYFILLS"]
                                },
                                LOAD_PLAYLIST: {
                                    method: y,
                                    depends: ["LOADED_POLYFILLS"]
                                },
                                FILTER_PLAYLIST: {
                                    method: z,
                                    depends: ["LOAD_PLAYLIST", "LOAD_FLVJS", "LOAD_VIDEOJS_LEVELS"]
                                },
                                SETUP_VIEW: {
                                    method: I,
                                    depends: ["LOAD_SKIN"]
                                },
                                SEND_READY: {
                                    method: J,
                                    depends: ["INIT_PLUGINS", "LOAD_PROVIDERS", "SETUP_VIEW"]
                                }
                            }
                        }
                        function m(a) {
                            window.Promise ? a() : function(require) {
                                c(37),
                                    a()
                            } ()
                        }
                        function n(a) {
                            window.btoa && window.atob ? a() : function(require) {
                                c(35),
                                    a()
                            } ()
                        }
                        function o(a) {
                            window.JSON ? a() : function(require) {
                                c(36),
                                    a()
                            } ()
                        }
                        function p(a, b) {
                            var d = b.get("playlist");
                            h.isFlvjsSupported() && (h.isFlv(d[0].file) || d[0].sources && h.isFlv(d[0].sources[0].file)) ? c.e(1,
                                function(require) {
                                    c(50),
                                        a()
                                }) : a()
                        }
                        function q(a) {
                            return h.isFlvjsSupported() && !h.isMobile() && (h.isHls(a[0].file) || a[0].sources && h.isHls(a[0].sources[0].file))
                        }
                        function r(a, b) {
                            if (q(b.get("playlist")) && window.videojs && !window.videojs.getPlugin("qualityLevels") && !b.get("isLive")) {
                                var c = new e("" + f.repo + k + "/videojs/videojs-contrib-quality-levels.min.js", !1);
                                c.addEventListener(i.COMPLETE,
                                    function() {
                                        a()
                                    }),
                                    c.load()
                            } else a()
                        }
                        function s(a, b) {
                            if (q(b.get("playlist")) && window.videojs) {
                                var c = new e("" + f.repo + k + "/videojs/videojs-contrib-hls.min.js", !1);
                                c.addEventListener(i.COMPLETE,
                                    function() {
                                        a()
                                    }),
                                    c.load()
                            } else a()
                        }
                        function t(a, b) {
                            if (q(b.get("playlist")) && !window.videojs) {
                                var c = new e("" + f.repo + k + "/videojs/video.min.js", !1);
                                c.addEventListener(i.COMPLETE,
                                    function() {
                                        a()
                                    }),
                                    c.load()
                            } else a()
                        }
                        function u(a) {
                            a()
                        }
                        function v(a, c) {
                            L = b.loadPlugins(c.get("id"), c.get("plugins")),
                                L.on(i.COMPLETE, a),
                                L.on(i.ERROR, g.partial(x, a)),
                                L.load()
                        }
                        function w(a, b, c) {
                            L.setupPlugins(c, b),
                                a()
                        }
                        function x(a, b) {
                            K(a, "Could not load plugin", b.message)
                        }
                        function y(a, b) {
                            var c = b.get("playlist");
                            g.isString(c) ? (M = new d, M.on(i.JWPLAYER_PLAYLIST_LOADED,
                                function(c) {
                                    b.set("playlist", c.playlist),
                                        b.set("feedid", c.feedid),
                                        a()
                                }), M.on(i.JWPLAYER_ERROR, g.partial(D, a)), M.load(c)) : a()
                        }
                        function z(a, b, c, d, e) {
                            var f = b.get("playlist");
                            if (e(f)) a();
                            else {
                                var g = {},
                                    h = A(f);
                                g.message = h.errorMessage,
                                    g.code = h.errorCode,
                                    "111" === g.code ? B(a, g) : C(a, g)
                            }
                        }
                        function A(a) {
                            var b = "",
                                c = "";
                            return h.flashVersion() || h.isMobile() ? h.flashVersion() && h.flashVersion() < 11.2 ? (b = 'Flash Player版本必须大于11.2, <a href="https://get.adobe.com/cn/flashplayer/" target="_blank">更新Flash Player</a>', c = "102") : h.isMobile() && (h.isRtmp(a[0].file) || h.isFlv(a[0].file)) && (b = "手机上不能播放rtmp或flv格式的视频", c = "111") : (b = '未检测到Flash Player，请到<a href="https://get.adobe.com/cn/flashplayer/" target="_blank">安装</a>', c = "101"),
                                {
                                    errorMessage: b,
                                    errorCode: c
                                }
                        }
                        function B(a, b) {
                            b && b.message && K(a, "视频加载失败", b.message, b.code || "")
                        }
                        function C(a, b) {
                            b && b.message && K(a, "播放器加载失败", b.message, b.code || "")
                        }
                        function D(a, b) {
                            b && b.message ? K(a, "播放列表加载失败", b.message) : K(a, "播放器加载失败", "未发现可播放的资源")
                        }
                        function E(a, b) {
                            if (g.contains(f.SkinsLoadable, a)) return b + "skins/" + a + ".css"
                        }
                        function F(a) {
                            for (var b = document.styleSheets,
                                     c = 0,
                                     d = b.length; c < d; c++) if (b[c].href === a) return ! 0;
                            return ! 1
                        }
                        function G(a, b) {
                            var c = b.get("skin"),
                                d = b.get("skinUrl");
                            if (g.contains(f.SkinsIncluded, c)) return void a();
                            if (!d) {
                                d = E(c, f.repo)
                            }
                            if (g.isString(d) && !F(d)) {
                                b.set("skin-loading", !0);
                                var h = new e(d, !0);
                                h.addEventListener(i.COMPLETE,
                                    function() {
                                        b.set("skin-loading", !1)
                                    }),
                                    h.addEventListener(i.ERROR,
                                        function() {
                                            b.set("skin", "bce"),
                                                b.set("skin-loading", !1)
                                        }),
                                    h.load()
                            }
                            g.defer(function() {
                                a()
                            })
                        }
                        function H(b, c) {
                            var d = c.getProviders(),
                                e = c.get("playlist"),
                                f = d.required(e);
                            a.load(f).then(b)
                        }
                        function I(a, b, c, d) {
                            d.setup(),
                                a()
                        }
                        function J(a) {
                            a({
                                type: "complete"
                            })
                        }
                        function K(a, b, c, d) {
                            a({
                                type: "error",
                                msg: b,
                                reason: c,
                                code: d || ""
                            })
                        }
                        var L, M;
                        return {
                            getQueue: l,
                            error: K
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                , , , , , , , , , , , , , , , , , , , , ,
                function(a, b, c) {
                    var d, e;
                    d = [c(44), c(2), c(177), c(77)],
                    void 0 !== (e = function(a, b) {
                        return c.p = b.loadFrom(),
                            a.selectPlayer
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(8)],
                    void 0 !== (e = function(a) {
                        function b(a) {
                            a || c()
                        }
                        function c() {
                            throw new Error("Invalid DFXP file")
                        }
                        var d = a.seconds;
                        return function(e) {
                            b(e);
                            var f = [],
                                g = e.getElementsByTagName("p");
                            b(g),
                            g.length || (g = e.getElementsByTagName("tt:p"), g.length || (g = e.getElementsByTagName("tts:p")));
                            for (var h = 0; h < g.length; h++) {
                                var i = g[h],
                                    j = i.innerHTML || i.textContent || i.text || "",
                                    k = a.trim(j).replace(/>\s+</g, "><").replace(/tts?:/g, "");
                                if (k) {
                                    var l = i.getAttribute("begin"),
                                        m = i.getAttribute("dur"),
                                        n = i.getAttribute("end"),
                                        o = {
                                            begin: d(l),
                                            text: k
                                        };
                                    n ? o.end = d(n) : m && (o.end = o.begin + d(m)),
                                        f.push(o)
                                }
                            }
                            return f.length || c(),
                                f
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(19), c(8), c(2)],
                    void 0 !== (e = function(a, b, c) {
                        return function(d, e) {
                            for (var f = [], g = [], h = b.xmlAttribute, i = "default", j = "label", k = "file", l = 0; l < d.childNodes.length; l++) {
                                var m = d.childNodes[l];
                                if ("jwplayer" === m.prefix) {
                                    var n = a.localName(m);
                                    "source" === n ? (delete e.sources, f.push({
                                        file: h(m, k),
                                        "default": h(m, i),
                                        label: h(m, j),
                                        type: h(m, "type")
                                    })) : "track" === n ? (delete e.tracks, g.push({
                                        file: h(m, k),
                                        "default": h(m, i),
                                        kind: h(m, "kind"),
                                        label: h(m, j)
                                    })) : (e[n] = c.serialize(a.textContent(m)), "file" === n && e.sources && delete e.sources)
                                }
                                e[k] || (e[k] = e.link)
                            }
                            if (f.length) for (e.sources = [], l = 0; l < f.length; l++) f[l].file.length > 0 && (f[l][i] = "true" === f[l][i], f[l].label.length || delete f[l].label, e.sources.push(f[l]));
                            if (g.length) for (e.tracks = [], l = 0; l < g.length; l++) g[l].file.length > 0 && (g[l][i] = "true" === g[l][i], g[l].kind = g[l].kind.length ? g[l].kind: "captions", g[l].label.length || delete g[l].label, e.tracks.push(g[l]));
                            return e
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(19), c(8), c(2)],
                    void 0 !== (e = function(a, b, c) {
                        function d(a) {
                            for (var b = [], c = 0; c < h(a); c++) {
                                var d = a.childNodes[c];
                                "jwplayer" === d.prefix && "mediatypes" === f(d).toLowerCase() && b.push(g(d))
                            }
                            return b
                        }
                        var e = b.xmlAttribute,
                            f = a.localName,
                            g = a.textContent,
                            h = a.numChildren;
                        return function i(a, b) {
                            var j, k, l = "tracks",
                                m = [];
                            for (k = 0; k < h(a); k++) if (j = a.childNodes[k], "media" === j.prefix) {
                                if (!f(j)) continue;
                                switch (f(j).toLowerCase()) {
                                    case "content":
                                        if (e(j, "duration") && (b.duration = c.seconds(e(j, "duration"))), e(j, "url")) {
                                            b.sources || (b.sources = []);
                                            var n = {
                                                    file: e(j, "url"),
                                                    type: e(j, "type"),
                                                    width: e(j, "width"),
                                                    label: e(j, "label")
                                                },
                                                o = d(j);
                                            o.length && (n.mediaTypes = o),
                                                b.sources.push(n)
                                        }
                                        h(j) > 0 && (b = i(j, b));
                                        break;
                                    case "title":
                                        b.title = g(j);
                                        break;
                                    case "description":
                                        b.description = g(j);
                                        break;
                                    case "guid":
                                        b.mediaid = g(j);
                                        break;
                                    case "thumbnail":
                                        b.image || (b.image = e(j, "url"));
                                        break;
                                    case "player":
                                        break;
                                    case "group":
                                        i(j, b);
                                        break;
                                    case "subtitle":
                                        var p = {};
                                        p.file = e(j, "url"),
                                            p.kind = "captions",
                                        e(j, "lang").length > 0 && (p.label = function(a) {
                                            var b = {
                                                zh: "Chinese",
                                                nl: "Dutch",
                                                en: "English",
                                                fr: "French",
                                                de: "German",
                                                it: "Italian",
                                                ja: "Japanese",
                                                pt: "Portuguese",
                                                ru: "Russian",
                                                es: "Spanish"
                                            };
                                            return b[a] ? b[a] : a
                                        } (e(j, "lang"))),
                                            m.push(p)
                                }
                            }
                            for (b.hasOwnProperty(l) || (b[l] = []), k = 0; k < m.length; k++) b[l].push(m[k]);
                            return b
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(8), c(19), c(110), c(111), c(56)],
                    void 0 !== (e = function(a, b, c, d, e) {
                        function f(b) {
                            for (var f = {},
                                     h = 0; h < b.childNodes.length; h++) {
                                var i = b.childNodes[h],
                                    k = j(i);
                                if (k) switch (k.toLowerCase()) {
                                    case "enclosure":
                                        f.file = a.xmlAttribute(i, "url");
                                        break;
                                    case "title":
                                        f.title = g(i);
                                        break;
                                    case "guid":
                                        f.mediaid = g(i);
                                        break;
                                    case "pubdate":
                                        f.date = g(i);
                                        break;
                                    case "description":
                                        f.description = g(i);
                                        break;
                                    case "link":
                                        f.link = g(i);
                                        break;
                                    case "category":
                                        f.tags ? f.tags += g(i) : f.tags = g(i)
                                }
                            }
                            return f = d(b, f),
                                f = c(b, f),
                                new e(f)
                        }
                        var g = b.textContent,
                            h = b.getChildNode,
                            i = b.numChildren,
                            j = b.localName,
                            k = {};
                        return k.parse = function(a) {
                            for (var b = [], c = 0; c < i(a); c++) {
                                var d = h(a, c);
                                if ("channel" === j(d).toLowerCase()) for (var e = 0; e < i(d); e++) {
                                    var g = h(d, e);
                                    "item" === j(g).toLowerCase() && b.push(f(g))
                                }
                            }
                            return b
                        },
                            k
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(56), c(58), c(1), c(20)],
                    void 0 !== (e = function(a, b, c, d) {
                        function e(a, b) {
                            for (var c = 0; c < a.length; c++) {
                                var d = a[c];
                                if (b.choose(d)) return d.type
                            }
                            return null
                        }
                        function f(a, b) {
                            return c.isUndefined(a) ? b: a
                        }
                        var g = function(b) {
                            return b = c.isArray(b) ? b: [b],
                                c.compact(c.map(b, a))
                        };
                        g.filterPlaylist = function(a, b, d, e, g, j, k) {
                            var l = [];
                            return c.each(a,
                                function(a) {
                                    a = c.extend({},
                                        a),
                                        a.allSources = h(a.sources, d, a.drm || e, a.preload || g, f(a.withCredentials, k)),
                                        a.sources = i(a.allSources, b),
                                    a.sources.length && (a.file = a.sources[0].file, (a.preload || g) && (a.preload = a.preload || g), (a.feedid || j) && (a.feedid = a.feedid || j), l.push(a))
                                }),
                                l
                        };
                        var h = function(a, d, e, g, h) {
                                return c.compact(c.map(a,
                                    function(a) {
                                        if (c.isObject(a)) return void 0 !== d && null !== d && (a.androidhls = d),
                                        (a.drm || e) && (a.drm = a.drm || e),
                                        (a.preload || g) && (a.preload = a.preload || g),
                                            a.withCredentials = f(a.withCredentials, h),
                                            b(a)
                                    }))
                            },
                            i = function(a, b) {
                                b && b.choose || (b = new d({
                                    primary: b ? "flash": null
                                }));
                                var f = e(a, b);
                                return c.where(a, {
                                    type: f
                                })
                            };
                        return g
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(1)],
                    void 0 !== (e = function(a) {
                        var b = {
                            kind: "captions",
                            "default": !1
                        };
                        return function(c) {
                            if (c && c.file) return a.extend({},
                                b, c)
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(25), c(2), c(4), c(3), c(1), c(41)],
                    void 0 !== (e = function(a, b, c, d, e, f) {
                        function g(a, c, d) {
                            return function() {
                                var e = b.getElementsByClassName("jw-overlays", a.getContainer())[0];
                                e && (e.appendChild(d), d.left = e.style.left, d.top = e.style.top, c.displayArea = e)
                            }
                        }
                        function h(a) {
                            function b() {
                                var b = a.displayArea;
                                b && a.resize(b.clientWidth, b.clientHeight)
                            }
                            return function() {
                                b(),
                                    setTimeout(b, 400)
                            }
                        }
                        return function(i, j) {
                            function k() {
                                q || (q = !0, p = f.loaderstatus.COMPLETE, o.trigger(c.COMPLETE))
                            }
                            function l() {
                                if (!s && (j && 0 !== e.keys(j).length || k(), !q)) {
                                    var d = i.getPlugins();
                                    n = e.after(r, k),
                                        e.each(j,
                                            function(e, g) {
                                                var h = a.getPluginName(g),
                                                    i = d[h],
                                                    j = i.getJS(),
                                                    k = i.getTarget(),
                                                    l = i.getStatus();
                                                l !== f.loaderstatus.LOADING && l !== f.loaderstatus.NEW && (j && !b.versionCheck(k) && o.trigger(c.ERROR, {
                                                    message: "Incompatible player version"
                                                }), n())
                                            })
                                }
                            }
                            function m(a) {
                                if (!s) {
                                    var d = "File not found";
                                    a.url && b.log(d, a.url),
                                        this.off(),
                                        this.trigger(c.ERROR, {
                                            message: d
                                        }),
                                        l()
                                }
                            }
                            var n, o = e.extend(this, d),
                                p = f.loaderstatus.NEW,
                                q = !1,
                                r = e.size(j),
                                s = !1;
                            this.setupPlugins = function(c, d) {
                                var f = [],
                                    j = i.getPlugins(),
                                    k = d.get("plugins");
                                e.each(k,
                                    function(d, i) {
                                        var l = a.getPluginName(i),
                                            m = j[l],
                                            n = m.getFlashPath(),
                                            o = m.getJS(),
                                            p = m.getURL();
                                        if (n) {
                                            var q = e.extend({
                                                    name: l,
                                                    swf: n,
                                                    pluginmode: m.getPluginmode()
                                                },
                                                d);
                                            f.push(q)
                                        }
                                        b.tryCatch(function() {
                                            if (o && k[p]) {
                                                var a = document.createElement("div");
                                                a.id = c.id + "_" + l,
                                                    a.className = "jw-plugin jw-reset";
                                                var b = e.extend({},
                                                    k[p]),
                                                    d = m.getNewInstance(c, b, a);
                                                d.addToPlayer = g(c, d, a),
                                                    d.resizeHandler = h(d),
                                                    c.addPlugin(l, d, a)
                                            }
                                        }) instanceof b.Error && b.log("ERROR: Failed to load " + l + ".")
                                    }),
                                    d.set("flashPlugins", f)
                            },
                                this.load = function() {
                                    if (b.exists(j) && "object" !== b.typeOf(j)) return void l();
                                    p = f.loaderstatus.LOADING,
                                        e.each(j,
                                            function(a, d) {
                                                if (b.exists(d)) {
                                                    var e = i.addPlugin(d);
                                                    e.on(c.COMPLETE, l),
                                                        e.on(c.ERROR, m)
                                                }
                                            });
                                    var a = i.getPlugins();
                                    e.each(a,
                                        function(a) {
                                            a.load()
                                        }),
                                        l()
                                },
                                this.destroy = function() {
                                    s = !0,
                                        this.off()
                                },
                                this.getStatus = function() {
                                    return p
                                }
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e, f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function(a) {
                            return typeof a
                        }: function(a) {
                            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol": typeof a
                        };
                    d = [c(63), c(16), c(62)],
                    void 0 !== (e = function(a, b) {
                        function c(a) {
                            var b = new Date,
                                c = b.getFullYear(),
                                d = b.getMonth() + 1,
                                e = b.getDate(),
                                f = b.getHours(),
                                g = b.getMinutes(),
                                h = b.getSeconds(),
                                i = b.getMilliseconds();
                            d = d < 10 ? "0" + d: d,
                                e = e < 10 ? "0" + e: e,
                                f = f < 10 ? "0" + f: f,
                                g = g < 10 ? "0" + g: g,
                                h = h < 10 ? "0" + h: h;
                            var j = c + "-" + d + "-" + e + " " + f + ":" + g + ":" + h;
                            return a && (j = j + "." + i),
                                j
                        }
                        function d() {
                            return {
                                flashVersion: a.flashVersion(),
                                cyberPlayerVersion: b,
                                ak: i.ak || "",
                                provider: h.get("provider") ? h.get("provider").name: "",
                                config: ""
                            }
                        }
                        function e(a) {
                            var b = [];
                            for (var c in a)"object" === f(a[c]) ? b.push(c + "=" + encodeURIComponent(JSON.stringify(a[c]))) : b.push(c + "=" + a[c]);
                            return b.join("&")
                        }
                        function g(a) {
                            if (!s) {
                                var b = a.action;
                                delete a.action,
                                    a.sendTime = c(),
                                    a = e(a),
                                j && m.removeChild(j),
                                    j = document.createElement("script"),
                                    j.setAttribute("type", "text/javascript"),
                                    j.src = n + b + "?" + a,
                                    m.insertBefore(j, m.getElementsByTagName("script")[0])
                            }
                        }
                        var h, i, j, k, l = {},
                            m = document.getElementsByTagName("script")[0].parentNode,
                            n = "https://drm.media.baidubce.com:8888/v1/sdk-player",
                            o = 0,
                            p = 0,
                            q = !1,
                            r = (new Date).getTime() + "",
                            s = !1;
                        return function(a, b) {
                            if (h = b, i = h.getConfiguration(), !1 === i.withLog) return ! 1;
                            var e, f = {},
                                j = 0;
                            a.on("meta",
                                function(a) {
                                    for (var b in a.metadata) l[b] = a.metadata[b];
                                    l.cdn_ip && (f = {
                                        action: "/user/web/cdn",
                                        url: h.get("file") || h.getCurrentItem().file,
                                        cdn: l.cdn_ip
                                    },
                                        g(f))
                                }),
                                a.on("beforePlay",
                                    function() {
                                        s = !1,
                                            q = !1,
                                            e = setInterval(function() {
                                                    j += 100
                                                },
                                                100)
                                    }),
                                a.on("play",
                                    function() {
                                        return q ? (clearInterval(e), void(e = null)) : (e && (f = {
                                            action: "/media/web/available",
                                            videoUrl: h.get("file") || h.getCurrentItem().file,
                                            type: "play",
                                            duration: j,
                                            time: c(!0),
                                            sessionTime: r,
                                            env: d()
                                        },
                                            g(f), clearInterval(e), e = null), p = h.get("position"), f = {
                                            action: "/user/web/play",
                                            videoUrl: h.get("file") || h.getCurrentItem().file,
                                            videoHeight: encodeURIComponent(l.height) || "",
                                            videoWidth: encodeURIComponent(l.width) || "",
                                            playerHeight: encodeURIComponent(i.height),
                                            playerWidth: encodeURIComponent(i.width),
                                            duration: l.duration || "",
                                            size: l.filesize || "",
                                            startPosition: h.get("position"),
                                            service: this.getDuration() > 0 ? "vod": "lss",
                                            time: c(!0),
                                            sessionTime: r,
                                            env: d()
                                        },
                                            g(f), q = !0, void(k || (k = setInterval(function() {
                                                f = {
                                                    action: "/user/web/count",
                                                    session: r,
                                                    url: h.get("file") || h.getCurrentItem().file
                                                },
                                                    g(f)
                                            },
                                            6e4), f = {
                                            action: "/user/web/count",
                                            session: r,
                                            url: h.get("file") || h.getCurrentItem().file
                                        },
                                            g(f))))
                                    }),
                                a.on("seek",
                                    function(a) {
                                        o += a.position - p,
                                            p = a.offset,
                                            f = {
                                                action: "/user/web/seek",
                                                videoUrl: h.get("file") || h.getCurrentItem().file,
                                                from: a.position,
                                                to: a.offset,
                                                time: c(!0),
                                                sessionTime: r,
                                                env: d()
                                            },
                                            g(f)
                                    }),
                                a.on("pause",
                                    function() {
                                        o += h.get("position") - p,
                                            f = {
                                                action: "/user/web/pause",
                                                videoUrl: h.get("file") || h.getCurrentItem().file,
                                                time: c(!0),
                                                sessionTime: r,
                                                env: d()
                                            },
                                            g(f)
                                    }),
                                a.on("idle",
                                    function(a) {
                                        "complete" === a.reason && (o += h.get("duration") - p, f = {
                                            action: "/user/web/end",
                                            videoUrl: h.get("file") || h.getCurrentItem().file,
                                            playInterval: o,
                                            time: c(!0),
                                            sessionTime: r,
                                            env: d()
                                        },
                                            g(f))
                                    }),
                                a.on("stop",
                                    function() {
                                        s = !0,
                                            clearInterval(e),
                                            e = null,
                                            clearInterval(k),
                                            k = null,
                                        l.duration && (o += h.get("position") - p, f = {
                                            action: "/user/web/end",
                                            videoUrl: h.get("file") || h.getCurrentItem().file,
                                            playInterval: o,
                                            time: c(!0),
                                            sessionTime: r,
                                            env: d()
                                        },
                                            g(f))
                                    }),
                                a.on("error",
                                    function(a) {
                                        clearInterval(e),
                                            f = {
                                                action: "/core/web/error",
                                                videoUrl: h.get("file") || h.getCurrentItem().file,
                                                error: a.code,
                                                errorInfo: a.message,
                                                time: c(!0),
                                                sessionTime: r,
                                                env: d()
                                            },
                                            g(f)
                                    }),
                                a.on("setupError",
                                    function(a) {
                                        f = {
                                            action: "/core/web/error",
                                            videoUrl: h.get("file") || h.getCurrentItem().file,
                                            error: a.code,
                                            errorInfo: a.message,
                                            time: c(!0),
                                            sessionTime: r,
                                            env: d()
                                        },
                                            g(f)
                                    });
                            var m, n;
                            a.on("alive",
                                function() {
                                    m = (new Date).getTime()
                                }),
                                a.on("liveStop",
                                    function() {
                                        n = (new Date).getTime(),
                                            f = {
                                                action: "/user/web/end",
                                                videoUrl: h.get("file") || h.getCurrentItem().file,
                                                playInterval: (n - m) / 1e3,
                                                time: c(!0),
                                                sessionTime: r,
                                                env: d()
                                            },
                                            g(f)
                                    });
                            var t, u = !0,
                                v = !1,
                                w = 0,
                                x = 0;
                            a.on("alive",
                                function() {
                                    return v = !0,
                                        u ? void(u = !1) : void(t && (w = (new Date).getTime() - t, x++, f = {
                                            action: "/user/web/buffer",
                                            session: r,
                                            url: h.get("file") || h.getCurrentItem().file,
                                            bt: w,
                                            bc: x,
                                            env: d()
                                        },
                                            g(f), t = null))
                                }),
                                a.on("noLiveStream",
                                    function() {
                                        v && (t || (t = (new Date).getTime()))
                                    })
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(25), c(59)],
                    void 0 !== (e = function(a, b) {
                        return function(c) {
                            this.addPlugin = function(d) {
                                var e = a.getPluginName(d);
                                return c[e] || (c[e] = new b(d)),
                                    c[e]
                            },
                                this.getPlugins = function() {
                                    return c
                                }
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(39), c(38), c(119)],
                    void 0 !== (e = function(a, b, c) {
                        return {
                            html5: a,
                            flash: b,
                            videojs: c
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(15), c(2), c(27), c(1), c(4), c(7), c(26), c(3), c(61)],
                    void 0 !== (e = function(a, b, c, d, e, f, g, h, i) {
                        function j(a, c) {
                            b.foreach(a,
                                function(a, d) {
                                    b.addEventListener(c, a, d, !1)
                                })
                        }
                        function k(a, c) {
                            b.foreach(a,
                                function(a, d) {
                                    b.removeEventListener(c, a, d, !1)
                                })
                        }
                        function l(l, u) {
                            function v() {
                                ua && (ea(Fa.audioTracks), oa.setTextTracks(Fa.textTracks), Fa.setAttribute("jw-loaded", "data"))
                            }
                            function w() {
                                ua && Fa.setAttribute("jw-loaded", "started")
                            }
                            function x(a) {
                                oa.trigger("click", a)
                            }
                            function y() {
                                ua && (E(D()), B(Y(), la, ka))
                            }
                            function z() {
                                ua && B(Y(), la, ka)
                            }
                            function A() {
                                o(sa),
                                    qa = !0,
                                ua && (oa.state === f.STALLED ? oa.setState(f.PLAYING) : oa.state === f.PLAYING && (sa = setTimeout(X, p)), Fa.duration === 1 / 0 && 0 === Fa.currentTime || (E(D()), C(Fa.currentTime), B(Y(), la, ka), oa.state === f.PLAYING && oa.trigger(e.JWPLAYER_MEDIA_TIME, {
                                    position: la,
                                    duration: ka
                                })))
                            }
                            function B(a, b, c) {
                                a === ta && c === ka || (ta = a, oa.trigger(e.JWPLAYER_MEDIA_BUFFER, {
                                    bufferPercent: 100 * a,
                                    position: b,
                                    duration: c
                                }))
                            }
                            function C(a) {
                                ka < 0 && (a = -(U() - a)),
                                    la = a
                            }
                            function D() {
                                return Ga.duration()
                            }
                            function E(a) {
                                ka = a,
                                ra && a && a !== 1 / 0 && oa.seek(ra)
                            }
                            function F() {
                                var a = D();
                                a === 1 / 0 && (a = 0);
                                var b = {
                                    duration: a,
                                    height: Fa.videoHeight,
                                    width: Fa.videoWidth
                                };
                                oa.trigger(e.JWPLAYER_MEDIA_META, b),
                                    E(a)
                            }
                            function G() {
                                ua && (qa = !0, ia(), I())
                            }
                            function H() {
                                ua && (Fa.muted && (Fa.muted = !1, Fa.muted = !0), Fa.setAttribute("jw-loaded", "meta"), F())
                            }
                            function I() {
                                ma || (ma = !0, oa.trigger(e.JWPLAYER_MEDIA_BUFFER_FULL))
                            }
                            function J() {
                                oa.setState(f.PLAYING),
                                Fa.hasAttribute("jw-played") || Fa.setAttribute("jw-played", ""),
                                    oa.trigger(e.JWPLAYER_PROVIDER_FIRST_FRAME, {})
                            }
                            function K() {
                                oa.state !== f.COMPLETE && Fa.currentTime !== Fa.duration && oa.setState(f.PAUSED)
                            }
                            function L() {
                                Fa.paused || Fa.ended || oa.state !== f.LOADING && oa.state !== f.ERROR && (oa.seeking || oa.setState(f.STALLED))
                            }
                            function M() {
                                ua && (m.hls && m.hls.reconnecttime ? setTimeout(function() {
                                        return oa.load(n)
                                    },
                                    1e3 * m.hls.reconnecttime) : t < m.retryCount && n ? (t++, setTimeout(function() {
                                        return oa.load(n)
                                    },
                                    3e3)) : (b.log("Error playing media: %o %s", Fa.error, Fa.src), oa.trigger(e.JWPLAYER_MEDIA_ERROR, {
                                    message: "加载失败: 不能播放当前文件",
                                    code: "111"
                                })))
                            }
                            function N(a) {
                                var c;
                                return "array" === b.typeOf(a) && a.length > 0 && (c = d.map(a,
                                    function(a, b) {
                                        return {
                                            file: a.file,
                                            label: a.label || b
                                        }
                                    })),
                                    c
                            }
                            function O(a) {
                                na = a,
                                    va = P(a);
                                var b = N(a);
                                b && oa.trigger(e.JWPLAYER_MEDIA_LEVELS, {
                                    levels: b,
                                    currentQuality: va
                                })
                            }
                            function P(a) {
                                var b = Math.max(0, va),
                                    c = u.qualityLabel;
                                if (a) for (var d = 0; d < a.length; d++) if (a[d]["default"] && (b = d), c && a[d].label === c) return d;
                                return Da.reason = "initial choice",
                                    Da.level = {},
                                    b
                            }
                            function Q(a, b) {
                                ra = 0,
                                    o(sa);
                                var c = document.createElement("source");
                                c.src = na[va].file;
                                var d = Fa.src !== c.src,
                                    e = Fa.getAttribute("jw-loaded");
                                if (d || "none" === e || "started" === e) {
                                    ka = b,
                                        oa.setupSideloadedTracks(Ca),
                                        R(na[va]);
                                    var f = r ? 1e3: 500;
                                    setTimeout(function() {
                                            a > 0 && oa.seek(a),
                                                Ga.play(),
                                            m.playbackRate > 1 && oa.setPlaybackRate(m.playbackRate)
                                        },
                                        f),
                                    r && Fa.paused && setTimeout(function() {
                                            Ga.play()
                                        },
                                        2500)
                                } else 0 === a && Fa.currentTime > 0 && (ra = -1, oa.seek(a)),
                                    Ga.play();
                                la = Fa.currentTime,
                                a > 0 && oa.seek(a)
                            }
                            function R(a) {
                                za = null,
                                    Aa = -1,
                                    Ba = -1,
                                Da.reason || (Da.reason = "initial choice", Da.level = {}),
                                    qa = !1,
                                    ma = !1,
                                a.preload && a.preload !== Fa.getAttribute("preload") && Fa.setAttribute("preload", a.preload);
                                var b = document.createElement("source");
                                b.src = a.file,
                                Fa.src !== b.src && (Fa.setAttribute("jw-loaded", "none"), Ga.src({
                                    src: a.file,
                                    type: "application/x-mpegURL"
                                }))
                            }
                            function S() {
                                Fa && (oa.disableTextTrack(), Fa.removeAttribute("crossorigin"), Fa.removeAttribute("preload"), Fa.removeAttribute("src"), Fa.removeAttribute("jw-loaded"), Fa.removeAttribute("jw-played"), c.emptyElement(Fa), va = -1, Ca = null, !q && "load" in Fa && Ga.load())
                            }
                            function T() {
                                for (var a = Fa.seekable ? Fa.seekable.length: 0, b = 1 / 0; a--;) b = Math.min(b, Fa.seekable.start(a));
                                return b
                            }
                            function U() {
                                for (var a = Fa.seekable ? Fa.seekable.length: 0, b = 0; a--;) b = Math.max(b, Fa.seekable.end(a));
                                return b
                            }
                            function V() {
                                oa.seeking = !1,
                                    oa.trigger(e.JWPLAYER_MEDIA_SEEKED)
                            }
                            function W() {
                                oa.trigger("volume", {
                                    volume: Math.round(100 * Fa.volume)
                                }),
                                    oa.trigger("mute", {
                                        mute: Fa.muted
                                    })
                            }
                            function X() {
                                Fa.currentTime === la && L()
                            }
                            function Y() {
                                var a = Fa.buffered,
                                    c = Fa.duration;
                                return ! a || 0 === a.length || c <= 0 || c === 1 / 0 ? 0 : b.between(a.end(a.length - 1) / c, 0, 1)
                            }
                            function Z() {
                                if (ua && oa.state !== f.IDLE && oa.state !== f.COMPLETE) {
                                    if (o(sa), va = -1, xa = !0, oa.trigger(e.JWPLAYER_MEDIA_BEFORECOMPLETE), !ua) return;
                                    $()
                                }
                            }
                            function $() {
                                o(sa),
                                    oa.setState(f.COMPLETE),
                                    xa = !1,
                                    oa.trigger(e.JWPLAYER_MEDIA_COMPLETE)
                            }
                            function _(a) {
                                ya = !0,
                                    ca(a)
                            }
                            function aa() {
                                for (var a = -1,
                                         b = 0; b < Fa.audioTracks.length; b++) if (Fa.audioTracks[b].enabled) {
                                    a = b;
                                    break
                                }
                                fa(a)
                            }
                            function ba(a) {
                                ya = !1,
                                    ca(a)
                            }
                            function ca(a) {
                                oa.trigger("fullscreenchange", {
                                    target: a.target,
                                    jwstate: ya
                                })
                            }
                            function da(a) {
                                d.each(a,
                                    function(a) {
                                        a.label = a.height ? a.height + "p": a.width + "px"
                                    })
                            }
                            function ea(a) {
                                if (za = null, a) {
                                    if (a.length) {
                                        for (var b = 0; b < a.length; b++) if (a[b].enabled) {
                                            Aa = b;
                                            break
                                        } - 1 === Aa && (Aa = 0, a[Aa].enabled = !0),
                                            za = d.map(a,
                                                function(a) {
                                                    return {
                                                        name: a.label || a.language,
                                                        language: a.language
                                                    }
                                                })
                                    }
                                    oa.addTracksListener(a, "change", aa),
                                    za && oa.trigger("audioTracks", {
                                        currentTrack: Aa,
                                        tracks: za
                                    })
                                }
                            }
                            function fa(a) {
                                Fa && Fa.audioTracks && za && a > -1 && a < Fa.audioTracks.length && a !== Aa && (Fa.audioTracks[Aa].enabled = !1, Aa = a, Fa.audioTracks[Aa].enabled = !0, oa.trigger("audioTrackChanged", {
                                    currentTrack: Aa,
                                    tracks: za
                                }))
                            }
                            function ga() {
                                return za || []
                            }
                            function ha() {
                                return Aa
                            }
                            function ia() {
                                oa.trigger("mediaType", {
                                    mediaType: "video"
                                })
                            }
                            this.state = f.IDLE,
                                this.seeking = !1,
                                d.extend(this, h, i),
                                this.trigger = function(a, b) {
                                    if (ua) return h.trigger.call(this, a, b)
                                },
                                this.setState = function(a) {
                                    if (ua) return g.setState.call(this, a)
                                };
                            var ja, ka, la, ma, na, oa = this,
                                pa = {
                                    click: x,
                                    durationchange: y,
                                    ended: Z,
                                    loadstart: w,
                                    loadeddata: v,
                                    loadedmetadata: H,
                                    canplay: G,
                                    playing: J,
                                    progress: z,
                                    pause: K,
                                    seeked: V,
                                    timeupdate: A,
                                    volumechange: W,
                                    webkitbeginfullscreen: _,
                                    webkitendfullscreen: ba
                                },
                                qa = !1,
                                ra = 0,
                                sa = -1,
                                ta = -1,
                                ua = !0,
                                va = -1,
                                wa = !!u.sdkplatform,
                                xa = !1,
                                ya = !1,
                                za = null,
                                Aa = -1,
                                Ba = -1,
                                Ca = null,
                                Da = {
                                    level: {}
                                },
                                Ea = document.getElementById(l),
                                Fa = Ea ? Ea.querySelector("video") : void 0;
                            Fa = Fa || document.createElement("video"),
                                Fa.className = "jw-video jw-reset";
                            var Ga = window.videojs(Fa);
                            this.isSDK = wa,
                                this.itemTracks = Ca,
                                this.video = Fa,
                            d.isObject(u.cast) && u.cast.appid && Fa.setAttribute("disableRemotePlayback", ""),
                                j(pa, Fa),
                                Fa.controls = !0,
                                Fa.controls = !1,
                                Fa.setAttribute("disableRemotePlayback", ""),
                                Fa.setAttribute("x-webkit-airplay", "allow"),
                                Fa.setAttribute("webkit-playsinline", ""),
                                Fa.setAttribute("playsinline", ""),
                                Fa.setAttribute("x5-playsinline", ""),
                                this.stop = function() {
                                    o(sa),
                                    ua && (S(), b.isIETrident() && Ga.pause(), this.setState(f.IDLE))
                                },
                                this.setToken = function(a) {
                                    for (var b = {
                                            token: {}
                                        },
                                             c = 0; c < a.length; c++) b.token[a[c].file] = a[c].tokenText;
                                    setTimeout(function() {
                                            Ga.tech({
                                                IWillNotUseThisInPlugins: !0
                                            }).hls.options(b)
                                        },
                                        0)
                                },
                                this.destroy = function() {
                                    k(pa, Fa),
                                        this.removeTracksListener(Fa.audioTracks, "change", aa),
                                        this.removeTracksListener(Fa.textTracks, "change", oa.textTrackChangeHandler),
                                        this.remove(),
                                        this.off()
                                },
                                this.init = function(a, b) {
                                    ua && (t = 0, m = b, Ca = null, na = a.sources, va = P(a.sources), n = a, a.sources.length && "hls" !== a.sources[0].type && this.sendMediaType(a.sources), la = a.starttime || 0, ka = a.duration || 0, Da.reason = "", R(na[va]), this.setupSideloadedTracks(a.tracks), Ca = this.itemTracks, b.minBufferLength > 0 && (videojs.Hls.MAX_GOAL_BUFFER_LENGTH = b.minBufferLength, b.minBufferLength < 30 && (videojs.Hls.GOAL_BUFFER_LENGTH = b.minBufferLength)))
                                },
                                this.load = function(a) {
                                    ua && (O(a.sources), a.sources.length && "hls" !== a.sources[0].type && this.sendMediaType(a.sources), oa.setState(f.LOADING), Q(a.starttime || 0, a.duration || 0))
                                },
                                this.play = function() {
                                    return oa.seeking ? (oa.setState(f.LOADING), void oa.once(e.JWPLAYER_MEDIA_SEEKED, oa.play)) : void Ga.play()
                                },
                                this.pause = function() {
                                    o(sa),
                                        Ga.pause(),
                                        this.setState(f.PAUSED)
                                },
                                this.seek = function(a) {
                                    if (ua) if (a < 0 && (a += T() + U()), 0 === ra && this.trigger(e.JWPLAYER_MEDIA_SEEK, {
                                            position: Fa.currentTime,
                                            offset: a
                                        }), qa || (qa = !!U()), qa) {
                                        ra = 0;
                                        try {
                                            oa.seeking = !0,
                                                Ga.currentTime(a)
                                        } catch(b) {
                                            oa.seeking = !1,
                                                ra = a
                                        }
                                    } else ra = a,
                                    r && Fa.paused && Ga.play()
                                },
                                this.volume = function(a) {
                                    a = b.between(a / 100, 0, 1),
                                        Fa.volume = a
                                },
                                this.enableGPU = function() {
                                    throw "只有使用Flash播放才支持开启GPU"
                                },
                                this.disableGPU = function() {
                                    throw "只有使用Flash播放才支持开启GPU"
                                },
                                this.mute = function(a) {
                                    Fa.muted = !!a
                                },
                                this.checkComplete = function() {
                                    return xa
                                },
                                this.detachMedia = function() {
                                    return o(sa),
                                        this.disableTextTrack(),
                                        ua = !1,
                                        Fa
                                },
                                this.attachMedia = function() {
                                    ua = !0,
                                        qa = !1,
                                        this.seeking = !1,
                                        Fa.loop = !1,
                                    xa && $()
                                },
                                this.setContainer = function(a) {
                                    var c = this;
                                    ja = a,
                                        a.appendChild(Fa),
                                        Ga.on(e.JWPLAYER_MEDIA_LEVELS,
                                            function(a) {
                                                if (!b.isMutipleHls(na)) {
                                                    da(a.levels),
                                                        va = a.currentQuality,
                                                        _qualityLevels = a.levels;
                                                    var d = {
                                                        type: "levels",
                                                        levels: a.levels,
                                                        currentQuality: a.currentQuality
                                                    };
                                                    c.trigger("levels", d)
                                                }
                                            }),
                                        Ga.on(e.JWPLAYER_MEDIA_LEVEL_CHANGED,
                                            function(a) {
                                                if (!b.isMutipleHls(na)) {
                                                    da(a.levels),
                                                        va = a.currentQuality,
                                                        _qualityLevels = a.levels;
                                                    var d = {
                                                        type: "levelsChanged",
                                                        levels: a.levels,
                                                        currentQuality: a.currentQuality
                                                    };
                                                    c.trigger("levelsChanged", d)
                                                }
                                            }),
                                        Ga.on(e.JWPLAYER_CONNECTING,
                                            function(a) {
                                                h.trigger.call(c, "connecting", a)
                                            }),
                                        Ga.on(e.JWPLAYER_ERROR, M),
                                        Ga.tech({
                                            IWillNotUseThisInPlugins: !0
                                        }).on(e.JWPLAYER_ALIVE,
                                            function() {
                                                c.trigger(e.JWPLAYER_ALIVE)
                                            }),
                                        Ga.tech({
                                            IWillNotUseThisInPlugins: !0
                                        }).on(e.JWPLAYER_NO_LIVE_STREAM,
                                            function() {
                                                c.trigger(e.JWPLAYER_NO_LIVE_STREAM)
                                            }),
                                        Ga.tech({
                                            IWillNotUseThisInPlugins: !0
                                        }).on("retryplaylist",
                                            function() {
                                                c.trigger(e.JWPLAYER_NO_LIVE_STREAM)
                                            })
                                },
                                this.getContainer = function() {
                                    return ja
                                },
                                this.remove = function() {
                                    S(),
                                        o(sa),
                                    ja === Fa.parentNode && ja.removeChild(Fa),
                                        Ga.dispose()
                                },
                                this.setVisibility = function(b) {
                                    b = !!b,
                                        b ? a.style(ja, {
                                            visibility: "visible",
                                            opacity: 1
                                        }) : a.style(ja, {
                                            visibility: "",
                                            opacity: 0
                                        })
                                },
                                this.resize = function(b, c, d) {
                                    if (! (b && c && Fa.videoWidth && Fa.videoHeight)) return ! 1;
                                    var e = {
                                        objectFit: ""
                                    };
                                    if ("uniform" === d) {
                                        var f = b / c,
                                            g = Fa.videoWidth / Fa.videoHeight;
                                        Math.abs(f - g) < .09 && (e.objectFit = "fill", d = "exactfit")
                                    }
                                    return a.style(Fa, e),
                                        !1
                                },
                                this.setFullscreen = function(a) {
                                    if (a = !!a) {
                                        return ! (b.tryCatch(function() {
                                                var a = Fa.webkitEnterFullscreen || Fa.webkitEnterFullScreen;
                                                a && a.apply(Fa)
                                            }) instanceof b.Error) && oa.getFullScreen()
                                    }
                                    var c = Fa.webkitExitFullscreen || Fa.webkitExitFullScreen;
                                    return c && c.apply(Fa),
                                        a
                                },
                                oa.getFullScreen = function() {
                                    return ya || !!Fa.webkitDisplayingFullscreen
                                },
                                this.setCurrentQuality = function(a) {
                                    if (! (va === a || a < 0)) if (b.isMutipleHls(na)) {
                                        va = a,
                                            this.trigger(e.JWPLAYER_MEDIA_LEVEL_CHANGED, {
                                                currentQuality: a,
                                                levels: N(na)
                                            });
                                        var c = Fa.currentTime || 0,
                                            d = Fa.duration || 0;
                                        d <= 0 && (d = ka),
                                            oa.setState(f.LOADING),
                                            Q(c, d)
                                    } else {
                                        var g = Ga.qualityLevels();
                                        g[a] && Ga.tech({
                                            IWillNotUseThisInPlugins: !0
                                        }).hls.playlists.media(g[a].id)
                                    }
                                },
                                this.getCurrentQuality = function() {
                                    return va
                                },
                                this.getQualityLevels = function() {
                                    return N(na)
                                },
                                this.getName = function() {
                                    return {
                                        name: s
                                    }
                                },
                                this.setCurrentAudioTrack = fa,
                                this.getAudioTracks = ga,
                                this.getCurrentAudioTrack = ha,
                                this.setPlaybackRate = function(a) {
                                    m.isLive || (Fa.playbackRate = a, this.trigger(e.JWPLAYER_PLAYBACKRATE, {
                                        playbackRate: a
                                    }))
                                }
                        }
                        var m, n, o = window.clearTimeout,
                            p = 256,
                            q = b.isMSIE(),
                            r = b.isFF(),
                            s = "videojs",
                            t = 0,
                            u = function() {};
                        return u.prototype = g,
                            l.prototype = new u,
                            l.getName = function() {
                                return {
                                    name: "videojs"
                                }
                            },
                            l
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e, f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function(a) {
                            return typeof a
                        }: function(a) {
                            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol": typeof a
                        };
                    d = [c(2), c(3), c(1)],
                    void 0 !== (e = function(a, b, c) {
                        function d(a, b, c) {
                            var d = document.createElement("param");
                            d.setAttribute("name", b),
                                d.setAttribute("value", c),
                                a.appendChild(d)
                        }
                        function e(e, g, j, k, l, m) {
                            var n;
                            if (k = k || "opaque", a.isMSIE() || a.isPoorIE()) {
                                var o = document.createElement("div");
                                g.appendChild(o),
                                    o.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="' + j + '" name="' + j + '" tabindex="0"><param name="movie" value="' + e + '"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="wmode" value="' + k + '"><param name="bgcolor" value="' + i + '"><param name="menu" value="false">' + (m ? '<param name="flashVars" value="enableControlbar=true">': "") + "</object>";
                                for (var p = g.getElementsByTagName("object"), q = p.length; q--;) p[q].id === j && (n = p[q])
                            } else n = document.createElement("object"),
                                n.setAttribute("type", "application/x-shockwave-flash"),
                                n.setAttribute("data", e),
                                n.setAttribute("width", "100%"),
                                n.setAttribute("height", "100%"),
                                n.setAttribute("bgcolor", i),
                                n.setAttribute("id", j),
                                n.setAttribute("name", j),
                            m && d(n, "flashVars", "enableControlbar=true"),
                                d(n, "allowfullscreen", "true"),
                                d(n, "allowscriptaccess", "always"),
                                d(n, "wmode", k),
                                d(n, "menu", "false"),
                                g.appendChild(n, g);
                            return n.className = "jw-swf jw-reset",
                                n.style.display = "block",
                                n.style.position = "absolute",
                                n.style.left = 0,
                                n.style.right = 0,
                                n.style.top = 0,
                                n.style.bottom = 0,
                                c.extend(n, b),
                                n.queueCommands = !0,
                                n.triggerFlash = function(b) {
                                    var d = this;
                                    if ("setup" !== b && d.queueCommands || !d.__externalCall) {
                                        for (var e = d.__commandQueue,
                                                 g = e.length; g--;) e[g][0] === b && e.splice(g, 1);
                                        return e.push(Array.prototype.slice.call(arguments)),
                                            d
                                    }
                                    var i = Array.prototype.slice.call(arguments, 1),
                                        j = a.tryCatch(function() {
                                            if (i.length) {
                                                for (var a = i.length; a--;)"object" === f(i[a]) && c.each(i[a], h);
                                                var e = JSON.stringify(i);
                                                d.__externalCall(b, e)
                                            } else d.__externalCall(b)
                                        });
                                    return j instanceof a.Error && (console.error(b, j), "setup" === b) ? (j.name = "Failed to setup flash", j) : d
                                },
                                n.__commandQueue = [],
                                n
                        }
                        function g(a) {
                            a && a.parentNode && (a.style.display = "none", a.parentNode.removeChild(a))
                        }
                        function h(b, c, d) { (a.isPoorIE() && b && b.childNodes || window.HTMLElement && b instanceof window.HTMLElement) && delete d[c]
                        }
                        var i = "#000000";
                        return {
                            embed: e,
                            remove: g
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [],
                    void 0 !== (e = function() {
                        return {
                            hasClass: function(a, b) {
                                var c = " " + b + " ";
                                return 1 === a.nodeType && (" " + a.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(c) >= 0
                            }
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(21), c(1), c(42), c(40), c(16)],
                    void 0 !== (e = function(a, b, c, d, e) {
                        var f = {};
                        return f.repo = b.memoize(function() {
                            var b = e.split("+")[0],
                                d = a.repo + b + "/";
                            return c.isHTTPS() ? d.replace(/^http:/, "https:") : d
                        }),
                            f.versionCheck = function(a) {
                                var b = ("0" + a).split(/\W/),
                                    c = e.split(/\W/),
                                    d = parseFloat(b[0]),
                                    f = parseFloat(c[0]);
                                return ! (d > f || d === f && parseFloat("0" + b[1]) > parseFloat(c[1]))
                            },
                            f.loadFrom = function() {
                                return f.repo()
                            },
                            f
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [],
                    void 0 !== (e = function() {
                        var a = {};
                        return a.getElementsByClassName = function(a, b, c) {
                            if (b = b || document, c = c || "*", b.getElementsByClassName) return b.getElementsByClassName(a);
                            for (var d = [], e = b.getElementsByTagName(c), f = e.length, g = new RegExp("(^|\\s)" + a + "(\\s|$)"), h = 0; h < f; h++) g.test(e[h].className) && d.push(e[h]);
                            return d
                        },
                            a.addEventListener = function(a, b, c, d) {
                                a = a || document,
                                    d = d || !1,
                                    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent("on" + b, c)
                            },
                            a.removeEventListener = function(a, b, c, d) {
                                a = a || document,
                                    d = d || !1,
                                    a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent("on" + b, c)
                            },
                            a.arrayFilter = function() {
                                Array.prototype.filter || (Array.prototype.filter = function(a) {
                                    if (void 0 === this || null === this) throw TypeError();
                                    var b = Object(this),
                                        c = b.length >>> 0;
                                    if ("function" != typeof a) throw TypeError();
                                    var d, e = [],
                                        f = arguments[1];
                                    for (d = 0; d < c; d++) if (d in b) {
                                        var g = b[d];
                                        a.call(f, g, d, b) && e.push(g)
                                    }
                                    return e
                                })
                            },
                            a.funcBind = function() {
                                Function.prototype.bind || (Function.prototype.bind = function(a) {
                                    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                                    var b = Array.prototype.slice.call(arguments, 1),
                                        c = this,
                                        d = function() {},
                                        e = function() {
                                            return c.apply(this instanceof d && a ? this: a || window, b.concat(Array.prototype.slice.call(arguments)))
                                        };
                                    return d.prototype = this.prototype,
                                        e.prototype = new d,
                                        e
                                })
                            },
                            a.arrayFilter(),
                            a.funcBind(),
                            a
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(1), c(3)],
                    void 0 !== (e = function(a, b) {
                        return a.extend({
                                get: function(a) {
                                    return this.attributes = this.attributes || {},
                                        this.attributes[a]
                                },
                                set: function(a, b) {
                                    if (this.attributes = this.attributes || {},
                                        this.attributes[a] !== b) {
                                        var c = this.attributes[a];
                                        this.attributes[a] = b,
                                            this.trigger("change:" + a, this, b, c)
                                    }
                                },
                                clone: function() {
                                    return a.clone(this.attributes)
                                }
                            },
                            b)
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [],
                    void 0 !== (e = function() {
                        var a = function(a, c, d) {
                                if (c = c || this, d = d || [], window.jwplayer && window.jwplayer.debug) return a.apply(c, d);
                                try {
                                    return a.apply(c, d)
                                } catch(e) {
                                    return new b(a.name, e)
                                }
                            },
                            b = function(a, b) {
                                this.name = a,
                                    this.message = b.message || b.toString(),
                                    this.error = b
                            };
                        return {
                            tryCatch: a,
                            Error: b
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [],
                    void 0 !== (e = function() {
                        return document.createElement("video")
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(166), c(2), c(1), c(9), c(15)],
                    void 0 !== (e = function(a, b, c, d, e) {
                        var f = function(a, b) {
                            this.model = a,
                                this.api = b,
                                this.imageUrl = "",
                                this.setup(),
                                this.isHide = !0,
                                this.startAdvPlayed = !1
                        };
                        return c.extend(f.prototype, {
                            setup: function() {
                                var c = a();
                                this.el = b.createElement(c);
                                var d = this;
                                b.addEventListener(this.el, "click",
                                    function() {
                                        window.open(d.imageUrl)
                                    },
                                    !1)
                            },
                            loadAdv: function(a) {
                                var d = this.model.get("imageAdvs");
                                if (d && d[a] && d[a].image) {
                                    var f = d[a].image,
                                        g = b.getElementsByClassName("jw-media", this.api.getContainer())[0],
                                        h = this,
                                        i = {
                                            display: "block",
                                            "z-index": 1e3,
                                            width: "100%",
                                            height: "100%",
                                            top: 0,
                                            left: 0
                                        };
                                    if (c.isString(f) ? (f = encodeURI(f), i.backgroundImage = 'url("' + f + '")') : i.backgroundImage = "", "end" === a && (i["z-index"] = 0), "pause" === a) {
                                        var j = g ? g.clientHeight: this.model.get("height"),
                                            k = g ? g.clientWidth: this.model.get("width");
                                        i.width = "400px",
                                            i.height = "300px",
                                            i.top = (j - 300) / 2,
                                            i.left = (k - 400) / 2
                                    }
                                    e.style(this.el, i);
                                    var l = b.getElementsByClassName("adv-close", this.el)[0],
                                        m = b.getElementsByClassName("adv-countdown", this.el)[0];
                                    if (l.style.display = "none", m.style.display = "none", "start" === a) {
                                        var n = d[a].time <= 60 ? d[a].time: 60;
                                        m.style.display = "block",
                                            m.innerHTML = "广告: " + n + "秒"
                                    }
                                    "pause" === a && (l.addEventListener("click",
                                        function(a) {
                                            h.el.style.display = "none",
                                                a.stopPropagation()
                                        },
                                        !1), l.style.display = "block"),
                                        this.imageUrl = d[a].url,
                                    this.element() && this.api.getContainer().replaceChild(this.el, this.element()),
                                        this.isHide = !1
                                }
                            },
                            beginStartAdv: function() {
                                if (this.startAdvPlayed) return void this.model.loadVideo();
                                var a = this.model.get("imageAdvs").start;
                                this.loadAdv("start");
                                var c = a.time <= 60 ? a.time: 60,
                                    d = this.element(),
                                    e = this,
                                    f = setInterval(function() {
                                            if (--c > 0) {
                                                var a = "广告: " + c + "秒";
                                                b.getElementsByClassName("adv-countdown", d)[0].innerHTML = a
                                            } else d.style.display = "none",
                                                clearInterval(f),
                                                e.isHide = !0,
                                                e.startAdvPlayed = !0,
                                                e.model.loadVideo()
                                        },
                                        1e3)
                            },
                            element: function() {
                                var a = this.api.getContainer();
                                return b.getElementsByClassName("jw-adv", a).length > 0 ? b.getElementsByClassName("jw-adv", a)[0] : this.el
                            },
                            isHidden: function() {
                                return this.isHide
                            },
                            hide: function() {
                                this.isHide = !0,
                                    this.element().style.display = "none"
                            },
                            resizePauseAdv: function(a, b) {
                                e.style(this.element(), {
                                    top: (b - 300) / 2,
                                    left: (a - 400) / 2
                                })
                            }
                        }),
                            f
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(2), c(15), c(7), c(1)],
                    void 0 !== (e = function(a, b, c, d) {
                        var e = b.style,
                            f = {
                                back: !0,
                                fontSize: 15,
                                fontFamily: "Arial,sans-serif",
                                fontOpacity: 100,
                                color: "#FFF",
                                backgroundColor: "#000",
                                backgroundOpacity: 100,
                                edgeStyle: null,
                                windowColor: "#FFF",
                                windowOpacity: 0,
                                preprocessor: d.identity
                            };
                        return function(g) {
                            function h(b) {
                                b = b || "";
                                var c = "jw-captions-window jw-reset";
                                b ? (t.innerHTML = b, s.className = c + " jw-captions-window-active") : (s.className = c, a.empty(t))
                            }
                            function i(a) {
                                q = a,
                                    k(o, q)
                            }
                            function j(a, b) {
                                var c = a.source,
                                    e = b.metadata;
                                return c ? !(!e || !d.isNumber(e[c])) && e[c] : b.position
                            }
                            function k(a, b) {
                                if (a && a.data && b) {
                                    var c = j(a, b);
                                    if (!1 !== c) {
                                        var d = a.data;
                                        if (! (p >= 0 && l(d, p, c))) {
                                            for (var e = -1,
                                                     f = 0; f < d.length; f++) if (l(d, f, c)) {
                                                e = f;
                                                break
                                            } - 1 === e ? h("") : e !== p && (p = e, h(u.preprocessor(d[p].text)))
                                        }
                                    }
                                }
                            }
                            function l(a, b, c) {
                                return a[b].begin <= c && (!a[b].end || a[b].end >= c) && (b === a.length - 1 || a[b + 1].begin >= c)
                            }
                            function m(a, c, d) {
                                if (b.css("#" + a + " .jw-video::-webkit-media-text-track-display", c, a), b.css("#" + a + " .jw-video::cue", d, a), d.backgroundColor) {
                                    var e = "{background-color: " + d.backgroundColor + " !important;}";
                                    b.css("#" + a + " .jw-video::-webkit-media-text-track-display-backdrop", e, a)
                                }
                            }
                            function n(a, c, d) {
                                var e = b.hexToRgba("#000000", d);
                                "dropshadow" === a ? c.textShadow = "0 2px 1px " + e: "raised" === a ? c.textShadow = "0 0 5px " + e + ", 0 1px 5px " + e + ", 0 2px 5px " + e: "depressed" === a ? c.textShadow = "0 -2px 1px " + e: "uniform" === a && (c.textShadow = "-2px 0 1px " + e + ",2px 0 1px " + e + ",0 -2px 1px " + e + ",0 2px 1px " + e + ",-1px 1px 1px " + e + ",1px 1px 1px " + e + ",1px -1px 1px " + e + ",1px 1px 1px " + e)
                            }
                            var o, p, q, r, s, t, u = {};
                            r = document.createElement("div"),
                                r.className = "jw-captions jw-reset",
                                this.show = function() {
                                    r.className = "jw-captions jw-captions-enabled jw-reset"
                                },
                                this.hide = function() {
                                    r.className = "jw-captions jw-reset"
                                },
                                this.populate = function(a) {
                                    return p = -1,
                                        o = a,
                                        a ? void k(a, q) : void h("")
                                },
                                this.resize = function() {
                                    var a = r.clientWidth,
                                        b = Math.pow(a / 400, .6);
                                    if (b) {
                                        var c = u.fontSize * b;
                                        e(r, {
                                            fontSize: Math.round(c) + "px"
                                        })
                                    }
                                },
                                this.setup = function(a, c) {
                                    if (s = document.createElement("div"), t = document.createElement("span"), s.className = "jw-captions-window jw-reset", t.className = "jw-captions-text jw-reset", u = d.extend({},
                                            f, c), c) {
                                        var h = u.fontOpacity,
                                            i = u.windowOpacity,
                                            j = u.edgeStyle,
                                            k = u.backgroundColor,
                                            l = {},
                                            o = {
                                                color: b.hexToRgba(u.color, h),
                                                fontFamily: u.fontFamily,
                                                fontStyle: u.fontStyle,
                                                fontWeight: u.fontWeight,
                                                textDecoration: u.textDecoration
                                            };
                                        i && (l.backgroundColor = b.hexToRgba(u.windowColor, i)),
                                            n(j, o, h),
                                            u.back ? o.backgroundColor = b.hexToRgba(k, u.backgroundOpacity) : null === j && n("uniform", o),
                                            e(s, l),
                                            e(t, o),
                                            m(a, l, o)
                                    }
                                    s.appendChild(t),
                                        r.appendChild(s),
                                        this.populate(g.get("captionsTrack")),
                                        g.set("captions", u)
                                },
                                this.clear = function() {
                                    a.empty(r)
                                },
                                this.element = function() {
                                    return r
                                },
                                g.on("change:playlistItem",
                                    function() {
                                        q = null,
                                            p = -1,
                                            h("")
                                    },
                                    this),
                                g.on("change:captionsTrack",
                                    function(a, b) {
                                        this.populate(b)
                                    },
                                    this),
                                g.mediaController.on("seek",
                                    function() {
                                        p = -1
                                    },
                                    this),
                                g.mediaController.on("time seek", i, this),
                                g.mediaController.on("subtitlesTrackData",
                                    function() {
                                        k(o, q)
                                    },
                                    this),
                                g.on("change:state",
                                    function(a, b) {
                                        switch (b) {
                                            case c.IDLE:
                                            case c.ERROR:
                                            case c.COMPLETE:
                                                this.hide();
                                                break;
                                            default:
                                                this.show()
                                        }
                                    },
                                    this)
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(9), c(4), c(3), c(1)],
                    void 0 !== (e = function(a, b, c, d) {
                        return function(e, f, g) {
                            function h(a) {
                                if (!e.get("flashBlocked")) return k ? void k(a) : void o.trigger(a.type === b.touchEvents.CLICK ? "click": "tap")
                            }
                            function i() {
                                return l ? void l() : void o.trigger("doubleClick")
                            }
                            var j, k, l, m = {
                                enableDoubleTap: !0,
                                useMove: !0
                            };
                            d.extend(this, c),
                                j = f,
                                this.element = function() {
                                    return j
                                };
                            var n = new a(j, d.extend(m, g));
                            n.on("click tap", h),
                                n.on("doubleClick doubleTap", i),
                                n.on("move",
                                    function() {
                                        o.trigger("move")
                                    }),
                                n.on("over",
                                    function() {
                                        o.trigger("over")
                                    }),
                                n.on("out",
                                    function() {
                                        o.trigger("out")
                                    }),
                                this.clickHandler = h;
                            var o = this;
                            this.setAlternateClickHandlers = function(a, b) {
                                k = a,
                                    l = b || null
                            },
                                this.revertAlternateClickHandlers = function() {
                                    k = null,
                                        l = null
                                }
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(1), c(2), c(33)],
                    void 0 !== (e = function(a, b, c) {
                        function d(a, b) {
                            this.time = a,
                                this.text = b,
                                this.el = document.createElement("div"),
                                this.el.className = "jw-cue jw-reset",
                                this.el.time = a
                        }
                        return a.extend(d.prototype, {
                            align: function(a) {
                                if ("%" === this.time.toString().slice( - 1)) this.pct = this.time;
                                else {
                                    var b = this.time / a * 100;
                                    this.pct = b + "%"
                                }
                                this.el.style.left = this.pct
                            }
                        }),
                            {
                                loadChapters: function(a) {
                                    b.ajax(a, this.chaptersLoaded.bind(this), this.chaptersFailed, {
                                        plainText: !0
                                    })
                                },
                                chaptersLoaded: function(b) {
                                    var d = c(b.responseText);
                                    a.isArray(d) && (a.each(d, this.addCue, this), this.drawCues())
                                },
                                chaptersFailed: function() {},
                                addCue: function(a) {
                                    this.cues.push(new d(a.begin, a.text))
                                },
                                drawCues: function() {
                                    var c = this._model.mediaModel.get("duration");
                                    if (!c || c <= 0) return void this._model.mediaModel.once("change:duration", this.drawCues, this);
                                    var d = this;
                                    a.each(this.cues,
                                        function(a) {
                                            a.align(c),
                                                b.addEventListener(a.el, "mouseover",
                                                    function() {
                                                        d.activeCue = a
                                                    }),
                                                b.addEventListener(a.el, "mouseout",
                                                    function() {
                                                        d.activeCue = null
                                                    }),
                                                b.addEventListener(a.el, "click",
                                                    function(a) {
                                                        d._api.seek(a.target.time)
                                                    }),
                                                d.elementRail.appendChild(a.el)
                                        })
                                },
                                resetChapters: function() {
                                    a.each(this.cues,
                                        function(a) {
                                            a.el.parentNode && a.el.parentNode.removeChild(a.el)
                                        },
                                        this),
                                        this.cues = []
                                }
                            }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(22), c(2), c(1), c(9)],
                    void 0 !== (e = function(a, b, c, d) {
                        return a.extend({
                            constructor: function(b) {
                                a.call(this, b),
                                    this.container.className = "jw-overlay-horizontal jw-reset",
                                    this.openClass = "jw-open-drawer",
                                    this.componentType = "drawer"
                            },
                            setup: function(a, e) {
                                this.iconUI || (this.iconUI = new d(this.el, {
                                    useHover: !0,
                                    directSelect: !0
                                }), this.toggleOpenStateListener = this.toggleOpenState.bind(this), this.openTooltipListener = this.openTooltip.bind(this), this.closeTooltipListener = this.closeTooltip.bind(this)),
                                    this.reset(),
                                    a = c.isArray(a) ? a: [],
                                    this.activeContents = c.filter(a,
                                        function(a) {
                                            return a.isActive
                                        }),
                                    b.toggleClass(this.el, "jw-hidden", !e || this.activeContents.length < 2),
                                e && this.activeContents.length > 1 && (b.removeClass(this.el, "jw-off"), this.iconUI.on("tap", this.toggleOpenStateListener).on("over", this.openTooltipListener).on("out", this.closeTooltipListener), c.each(a,
                                    function(a) {
                                        this.container.appendChild(a.el)
                                    },
                                    this))
                            },
                            reset: function() {
                                b.addClass(this.el, "jw-off"),
                                    this.iconUI.off(),
                                this.contentUI && this.contentUI.off().destroy(),
                                    this.removeContent()
                            }
                        })
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(22), c(2), c(1), c(9), c(171)],
                    void 0 !== (e = function(a, b, c, d, e) {
                        return a.extend({
                            setup: function(a, f, g) {
                                this.iconUI || (this.iconUI = new d(this.el, {
                                    useHover: !0,
                                    directSelect: !0
                                }), this.toggleValueListener = this.toggleValue.bind(this), this.toggleOpenStateListener = this.toggleOpenState.bind(this), this.openTooltipListener = this.openTooltip.bind(this), this.closeTooltipListener = this.closeTooltip.bind(this), this.selectListener = this.select.bind(this)),
                                    this.reset(),
                                    a = c.isArray(a) ? a: [],
                                    this.list = a,
                                    b.toggleClass(this.el, "jw-hidden", a.length < 2);
                                var h = a.length > 2 || 2 === a.length && g && !1 === g.toggle,
                                    i = !h && 2 === a.length;
                                if (b.toggleClass(this.el, "jw-toggle", i), b.toggleClass(this.el, "jw-button-color", !i), this.isActive = h || i, h) {
                                    b.removeClass(this.el, "jw-off"),
                                        this.iconUI.on("tap", this.toggleOpenStateListener).on("over", this.openTooltipListener).on("out", this.closeTooltipListener);
                                    var j = e(a),
                                        k = b.createElement(j);
                                    this.addContent(k),
                                        this.contentUI = new d(this.content).on("click tap", this.selectListener)
                                } else i && this.iconUI.on("click tap", this.toggleValueListener);
                                this.selectItem(f)
                            },
                            toggleValue: function() {
                                this.trigger("toggleValue")
                            },
                            select: function(a) {
                                if (a.target.parentElement === this.content) {
                                    var d = b.classList(a.target),
                                        e = c.find(d,
                                            function(a) {
                                                return 0 === a.indexOf("jw-item")
                                            });
                                    e && (this.trigger("select", parseInt(e.split("-")[2])), this.closeTooltipListener())
                                }
                            },
                            selectItem: function(a) {
                                if (this.content) for (var c = 0; c < this.content.children.length; c++) b.toggleClass(this.content.children[c], "jw-active-option", a === c);
                                else b.toggleClass(this.el, "jw-off", 0 === a);
                                if (this.isHDMenu() && this.list && this.list.length >= 2) {
                                    var d = this.list[a].label,
                                        e = b.getElementsByClassName("jw-hd-label", this.el)[0];
                                    e.innerHTML = d
                                }
                                if (this.isCCMenu() && this.list && this.list.length >= 2 && this.list[a]) {
                                    var e = b.getElementsByClassName("jw-cc-label", this.el)[0];
                                    e.innerHTML = this.list[a].label
                                }
                                this.isPlayrateMenu() && this.list[a] && (b.getElementsByClassName("jw-playrate-label", this.el)[0].innerHTML = this.list[a].label)
                            },
                            reset: function() {
                                b.addClass(this.el, "jw-off"),
                                    this.iconUI.off(),
                                this.contentUI && this.contentUI.off().destroy(),
                                    this.removeContent()
                            },
                            isHDMenu: function() {
                                return b.hasClass(this.el, "jw-icon-hd")
                            },
                            isPlayrateMenu: function() {
                                return b.hasClass(this.el, "jw-icon-playrate")
                            },
                            isCCMenu: function() {
                                return b.hasClass(this.el, "jw-icon-cc")
                            },
                            show: function() {
                                this.el.style.display = ""
                            },
                            hide: function() {
                                this.el.style.display = "none"
                            }
                        })
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(2), c(1), c(22), c(9), c(173)],
                    void 0 !== (e = function(a, b, c, d, e) {
                        return c.extend({
                            setup: function(c, e) {
                                if (this.iconUI || (this.iconUI = new d(this.el, {
                                        useHover: !0
                                    }), this.toggleOpenStateListener = this.toggleOpenState.bind(this), this.openTooltipListener = this.openTooltip.bind(this), this.closeTooltipListener = this.closeTooltip.bind(this), this.selectListener = this.onSelect.bind(this)), this.reset(), c = b.isArray(c) ? c: [], a.toggleClass(this.el, "jw-hidden", c.length < 2), c.length >= 2) {
                                    this.iconUI = new d(this.el, {
                                        useHover: !0
                                    }).on("tap", this.toggleOpenStateListener).on("over", this.openTooltipListener).on("out", this.closeTooltipListener);
                                    var f = this.menuTemplate(c, e),
                                        g = a.createElement(f);
                                    this.addContent(g),
                                        this.contentUI = new d(this.content),
                                        this.contentUI.on("click tap", this.selectListener)
                                }
                                this.originalList = c
                            },
                            menuTemplate: function(c, d) {
                                var f = b.map(c,
                                    function(b, c) {
                                        var e = "";
                                        if (b.title) {
                                            var f = a.createElement(b.title);
                                            e = f.textContent ? f.textContent: f.data
                                        }
                                        return {
                                            active: c === d,
                                            label: c + 1 + ".",
                                            title: e
                                        }
                                    });
                                return e(f)
                            },
                            onSelect: function(c) {
                                var d = c.target;
                                if ("UL" !== d.tagName) {
                                    "LI" !== d.tagName && (d = d.parentElement);
                                    var e = a.classList(d),
                                        f = b.find(e,
                                            function(a) {
                                                return 0 === a.indexOf("jw-item")
                                            });
                                    f && (this.trigger("select", parseInt(f.split("-")[2])), this.closeTooltip())
                                }
                            },
                            selectItem: function(a) {
                                this.setup(this.originalList, a)
                            },
                            reset: function() {
                                this.iconUI.off(),
                                this.contentUI && this.contentUI.off().destroy(),
                                    this.removeContent()
                            }
                        })
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(1), c(2), c(33)],
                    void 0 !== (e = function(a, b, c) {
                        function d(a) {
                            this.begin = a.begin,
                                this.end = a.end,
                                this.img = a.text
                        }
                        return {
                            loadThumbnails: function(a) {
                                a && (this.vttPath = a.split("?")[0].split("/").slice(0, -1).join("/"), this.individualImage = null, b.ajax(a, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), {
                                    plainText: !0
                                }))
                            },
                            thumbnailsLoaded: function(b) {
                                var e = c(b.responseText);
                                a.isArray(e) && (a.each(e,
                                    function(a) {
                                        this.thumbnails.push(new d(a))
                                    },
                                    this), this.drawCues())
                            },
                            thumbnailsFailed: function() {},
                            addThumbnail: function(a) {
                                this.thumbnails.push(new d(a))
                            },
                            chooseThumbnail: function(b) {
                                if (!a.find(this.thumbnails,
                                        function(a) {
                                            return a.begin <= b && a.end >= b
                                        })) return "";
                                var c = a.sortedIndex(this.thumbnails, {
                                        end: b
                                    },
                                    a.property("end"));
                                c >= this.thumbnails.length && (c = this.thumbnails.length - 1);
                                var d = this.thumbnails[c].img;
                                return d.indexOf("://") < 0 && (d = this.vttPath ? this.vttPath + "/" + d: d),
                                    d
                            },
                            loadThumbnail: function(b) {
                                var c = this.chooseThumbnail(b),
                                    d = {
                                        display: "block",
                                        margin: "0 auto",
                                        backgroundPosition: "0 0",
                                        backgroundRepeat: "no-repeat"
                                    };
                                if (c.indexOf("#xywh") > 0) try {
                                    var e = /(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(c);
                                    c = e[1],
                                        d.backgroundPosition = -1 * e[2] + "px " + -1 * e[3] + "px",
                                        d.width = e[4],
                                        d.height = e[5]
                                } catch(f) {
                                    return
                                } else c && (this.individualImage ? (d.width = this.individualImage.width, d.height = this.individualImage.height) : (this.individualImage = new Image, this.individualImage.onload = a.bind(function() {
                                        this.individualImage.onload = null,
                                            this.timeTip.image({
                                                width: this.individualImage.width,
                                                height: this.individualImage.height
                                            })
                                    },
                                    this), this.individualImage.src = c));
                                return "" === c && (d.width = 0, d.height = 0),
                                    d.backgroundImage = 'url("' + c + '")',
                                    d
                            },
                            showThumbnail: function(a) {
                                this.thumbnails.length < 1 || this.timeTip.image(this.loadThumbnail(a))
                            },
                            resetThumbnails: function() {
                                this.timeTip.image({
                                    backgroundImage: "",
                                    width: 0,
                                    height: 0
                                }),
                                    this.thumbnails = []
                            }
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(1), c(2), c(21), c(43), c(22), c(130), c(134)],
                    void 0 !== (e = function(a, b, c, d, e, f, g) {
                        var h = e.extend({
                                setup: function() {
                                    this.text = document.createElement("span"),
                                        this.text.className = "jw-text jw-reset",
                                        this.img = document.createElement("div"),
                                        this.img.className = "jw-reset";
                                    var a = document.createElement("div");
                                    a.className = "jw-time-tip jw-background-color jw-reset",
                                        a.appendChild(this.img),
                                        a.appendChild(this.text),
                                        b.removeClass(this.el, "jw-hidden"),
                                        this.addContent(a)
                                },
                                image: function(a) {
                                    b.style(this.img, a)
                                },
                                update: function(a) {
                                    this.text.innerHTML = a
                                }
                            }),
                            i = d.extend({
                                constructor: function(b, c) {
                                    this._model = b,
                                        this._api = c,
                                        this.timeTip = new h("jw-tooltip-time"),
                                        this.timeTip.setup(),
                                        this.cues = [],
                                        this.seekThrottled = a.throttle(this.performSeek, 400),
                                        this._model.on("change:playlistItem", this.onPlaylistItem, this).on("change:position", this.onPosition, this).on("change:duration", this.onDuration, this).on("change:buffer", this.onBuffer, this),
                                        d.call(this, "jw-slider-time", "horizontal")
                                },
                                setup: function() {
                                    d.prototype.setup.apply(this, arguments),
                                    this._model.get("playlistItem") && this.onPlaylistItem(this._model, this._model.get("playlistItem")),
                                        this.elementRail.appendChild(this.timeTip.element()),
                                        b.addEventListener(this.el, "mousemove", this.showTimeTooltip.bind(this), !1),
                                        b.addEventListener(this.el, "mouseout", this.hideTimeTooltip.bind(this), !1)
                                },
                                limit: function(d) {
                                    if (this.activeCue && a.isNumber(this.activeCue.pct)) return this.activeCue.pct;
                                    var e = this._model.get("duration");
                                    if ("DVR" === b.adaptiveType(e)) {
                                        var f = (1 - d / 100) * e,
                                            g = this._model.get("position");
                                        return 100 - 100 * Math.min(f, Math.max(c.dvrSeekLimit, g)) / e
                                    }
                                    return d
                                },
                                update: function(a) {
                                    this.seekTo = a,
                                        this.seekThrottled(),
                                        d.prototype.update.apply(this, arguments)
                                },
                                dragStart: function() {
                                    this._model.set("scrubbing", !0),
                                        d.prototype.dragStart.apply(this, arguments)
                                },
                                dragEnd: function() {
                                    d.prototype.dragEnd.apply(this, arguments),
                                        this._model.set("scrubbing", !1)
                                },
                                onSeeked: function() {
                                    this._model.get("scrubbing") && this.performSeek()
                                },
                                onBuffer: function(a, b) {
                                    this.updateBuffer(b)
                                },
                                onPosition: function(a, b) {
                                    this.updateTime(b, a.get("duration"))
                                },
                                onDuration: function(a, b) {
                                    this.updateTime(a.get("position"), b)
                                },
                                updateTime: function(a, c) {
                                    var d = 0;
                                    if (c) {
                                        var e = b.adaptiveType(c);
                                        "DVR" === e ? d = (c - a) / c * 100 : "VOD" === e && (d = a / c * 100)
                                    }
                                    this.render(d)
                                },
                                onPlaylistItem: function(b, c) {
                                    this.reset(),
                                        b.mediaModel.on("seeked", this.onSeeked, this);
                                    var d = c.tracks;
                                    a.each(d,
                                        function(a) {
                                            a && a.kind && "thumbnails" === a.kind.toLowerCase() ? this.loadThumbnails(a.file) : a && a.kind && "chapters" === a.kind.toLowerCase() && this.loadChapters(a.file)
                                        },
                                        this)
                                },
                                performSeek: function() {
                                    var a, c = this.seekTo,
                                        d = this._model.get("duration"),
                                        e = b.adaptiveType(d);
                                    0 === d ? this._api.play() : "DVR" === e ? (a = (100 - c) / 100 * d, this._api.seek(a)) : this._model.attributes.controlbar.canDrag && (a = c / 100 * d, this._api.seek(Math.min(a, d - .25)))
                                },
                                showTimeTooltip: function(a) {
                                    var d = this._model.get("duration");
                                    if (0 !== d) {
                                        var e = b.bounds(this.elementRail),
                                            f = document.documentElement.scrollLeft || document.body.scrollLeft,
                                            g = a.pageX || a.clientX + f,
                                            h = g - e.left;
                                        h = b.between(h, 0, e.width);
                                        var i = h / e.width,
                                            j = d * i;
                                        d < 0 && (j = d - j);
                                        var k;
                                        if (this.activeCue) k = this.activeCue.text;
                                        else {
                                            k = b.timeFormat(j, !0),
                                            d < 0 && j > c.dvrSeekLimit && (k = "Live")
                                        }
                                        this.timeTip.update(k),
                                            this.showThumbnail(j),
                                            b.addClass(this.timeTip.el, "jw-open"),
                                            this.timeTip.el.style.left = 100 * i + "%"
                                    }
                                },
                                hideTimeTooltip: function() {
                                    b.removeClass(this.timeTip.el, "jw-open")
                                },
                                reset: function() {
                                    this.resetChapters(),
                                        this.resetThumbnails()
                                }
                            });
                        return a.extend(i.prototype, f, g),
                            i
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(22), c(43), c(9), c(2)],
                    void 0 !== (e = function(a, b, c, d) {
                        return a.extend({
                            constructor: function(e, f) {
                                this._model = e,
                                    a.call(this, f),
                                    this.volumeSlider = new b("jw-slider-volume jw-volume-tip", "vertical"),
                                    this.addContent(this.volumeSlider.element()),
                                    this.addVolumeValueTip(),
                                    this.volumeSlider.on("update",
                                        function(a) {
                                            this.trigger("update", a)
                                        },
                                        this),
                                    d.removeClass(this.el, "jw-hidden"),
                                    new c(this.el, {
                                        useHover: !0,
                                        directSelect: !0
                                    }).on("click", this.toggleValue, this).on("tap", this.toggleOpenState, this).on("over", this.openTooltip, this).on("out", this.closeTooltip, this)
                            },
                            toggleValue: function() {
                                this.trigger("toggleValue")
                            },
                            addVolumeValueTip: function() {
                                var a = document.createElement("div");
                                a.className = "jw-volume-value-tip",
                                    d.getElementsByClassName("jw-overlay", this.el)[0].appendChild(a),
                                    this.valuetip = a
                            }
                        })
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(2), c(1), c(3), c(21), c(9), c(43), c(135), c(132), c(133), c(136), c(131)],
                    void 0 !== (e = function(a, b, c, d, e, f, g, h, i, j, k) {
                        function l(a, b) {
                            var c = document.createElement("div");
                            return c.className = "jw-icon jw-icon-inline jw-button-color jw-reset " + a,
                                c.style.display = "none",
                            b && new e(c).on("click tap",
                                function() {
                                    b()
                                }),
                                {
                                    element: function() {
                                        return c
                                    },
                                    toggle: function(a) {
                                        a ? this.show() : this.hide()
                                    },
                                    show: function() {
                                        c.style.display = ""
                                    },
                                    hide: function() {
                                        c.style.display = "none"
                                    }
                                }
                        }
                        function m(a) {
                            var b = document.createElement("span");
                            return b.className = "jw-text jw-reset " + a,
                                b
                        }
                        function n(a) {
                            return new h(a)
                        }
                        function o(a, c) {
                            var d = document.createElement("div");
                            return d.className = "jw-group jw-controlbar-" + a + "-group jw-reset",
                                b.each(c,
                                    function(a) {
                                        a.element && (a = a.element()),
                                            d.appendChild(a)
                                    }),
                                d
                        }
                        function p(b, c) {
                            this._api = b,
                                this._model = c,
                                this._isMobile = a.isMobile(),
                                this._compactModeMaxSize = 400,
                                this._maxCompactWidth = -1,
                                this.setup()
                        }
                        return b.extend(p.prototype, c, {
                            setup: function() {
                                this.build(),
                                    this.initialize()
                            },
                            build: function() {
                                var a, c, d, e, h = this,
                                    p = new g(this._model, this._api),
                                    q = new k("jw-icon-more"); ! 1 !== this._model.get("visualplaylist") && (a = new i("jw-icon-playlist")),
                                this._isMobile || (e = l("jw-icon-volume", this._api.setMute), c = new f("jw-slider-volume", "horizontal"), d = new j(this._model, "jw-icon-volume")),
                                    this.elements = {
                                        alt: m("jw-text-alt"),
                                        barLogo: l("jw-icon-barlogo-new",
                                            function() {
                                                window.open(h._model.get("controlbar").barLogoUrl)
                                            }),
                                        play: l("jw-icon-playback", this._api.play.bind(this, {
                                            reason: "interaction"
                                        })),
                                        prev: l("jw-icon-prev", this._api.playlistPrev.bind(this, {
                                            reason: "interaction"
                                        })),
                                        next: l("jw-icon-next", this._api.playlistNext.bind(this, {
                                            reason: "interaction"
                                        })),
                                        playlist: a,
                                        elapsed: m("jw-text-elapsed"),
                                        split: m("jw-text-split"),
                                        time: p,
                                        duration: m("jw-text-duration"),
                                        playRate: n("jw-icon-playrate"),
                                        drawer: q,
                                        hd: n("jw-icon-hd"),
                                        cc: n("jw-icon-cc"),
                                        audiotracks: n("jw-icon-audio-tracks"),
                                        mute: e,
                                        volume: c,
                                        volumetooltip: d,
                                        cast: l("jw-icon-cast jw-off", this._api.castToggle),
                                        fullscreen: l("jw-icon-fullscreen", this._api.setFullscreen)
                                    },
                                    this.elements.split.innerHTML = "/",
                                    this.layout = {
                                        left: [this.elements.barLogo, this.elements.play, this.elements.prev, this.elements.playlist, this.elements.next, this.elements.elapsed, this.elements.split, this.elements.duration],
                                        center: [this.elements.time, this.elements.alt],
                                        right: [this.elements.playRate, this.elements.hd, this.elements.cc, this.elements.audiotracks, this.elements.drawer, this.elements.mute, this.elements.cast, this.elements.volume, this.elements.volumetooltip, this.elements.fullscreen],
                                        drawer: [this.elements.hd, this.elements.cc, this.elements.audiotracks]
                                    },
                                    this.menus = b.compact([this.elements.playlist, this.elements.hd, this.elements.cc, this.elements.audiotracks, this.elements.volumetooltip]),
                                    this.layout.left = b.compact(this.layout.left),
                                    this.layout.center = b.compact(this.layout.center),
                                    this.layout.right = b.compact(this.layout.right),
                                    this.layout.drawer = b.compact(this.layout.drawer),
                                    this.el = document.createElement("div"),
                                    this.el.className = "jw-controlbar jw-background-color jw-reset",
                                    this.elements.left = o("left", this.layout.left),
                                    this.elements.center = o("center", this.layout.center),
                                    this.elements.right = o("right", this.layout.right),
                                    this.el.appendChild(this.elements.left),
                                    this.el.appendChild(this.elements.center),
                                    this.el.appendChild(this.elements.right)
                            },
                            initialize: function() {
                                this._model.get("controlbar").barLogo && this.elements.barLogo.show(),
                                    this.elements.play.show(),
                                    this.elements.fullscreen.show(),
                                this.elements.mute && this.elements.mute.show(),
                                    this.onVolume(this._model, this._model.get("volume")),
                                    this.onPlaylist(this._model, this._model.get("playlist")),
                                    this.onPlaylistItem(this._model, this._model.get("playlistItem")),
                                    this.onMediaModel(this._model, this._model.get("mediaModel")),
                                    this.onCastAvailable(this._model, this._model.get("castAvailable")),
                                    this.onCastActive(this._model, this._model.get("castActive")),
                                    this.onCaptionsList(this._model, this._model.get("captionsList")),
                                    this._model.on("change:volume", this.onVolume, this),
                                    this._model.on("change:mute", this.onMute, this),
                                    this._model.on("change:playlist", this.onPlaylist, this),
                                    this._model.on("change:playlistItem", this.onPlaylistItem, this),
                                    this._model.on("change:mediaModel", this.onMediaModel, this),
                                    this._model.on("change:castAvailable", this.onCastAvailable, this),
                                    this._model.on("change:castActive", this.onCastActive, this),
                                    this._model.on("change:duration", this.onDuration, this),
                                    this._model.on("change:position", this.onElapsed, this),
                                    this._model.on("change:fullscreen", this.onFullscreen, this),
                                    this._model.on("change:captionsList", this.onCaptionsList, this),
                                    this._model.on("change:captionsIndex", this.onCaptionsIndex, this),
                                    this._model.on("change:compactUI", this.onCompactUI, this),
                                    this._model.on("change:provider", this.onProvider, this),
                                this.elements.volume && this.elements.volume.on("update",
                                    function(a) {
                                        var b = a.percentage;
                                        this._api.setVolume(b)
                                    },
                                    this),
                                this.elements.volumetooltip && (this.elements.volumetooltip.on("update",
                                    function(a) {
                                        var b = a.percentage;
                                        this._api.setVolume(b)
                                    },
                                    this), this.elements.volumetooltip.on("toggleValue",
                                    function() {
                                        this._api.setMute()
                                    },
                                    this)),
                                this.elements.playlist && this.elements.playlist.on("select",
                                    function(a) {
                                        this._model.once("itemReady",
                                            function() {
                                                this._api.play({
                                                    reason: "interaction"
                                                })
                                            },
                                            this),
                                            this._api.load(a)
                                    },
                                    this),
                                    this.elements.playRate.on("select",
                                        function(a) {
                                            var b = this._model.get("playRateConfig")[a].label;
                                            b = parseFloat(b.substring(1)),
                                                this._model.setPlaybackRate(b)
                                        },
                                        this),
                                    this.elements.hd.on("select",
                                        function(a) {
                                            this._model.setCurrentQuality(a)
                                        },
                                        this),
                                    this.elements.hd.on("toggleValue",
                                        function() {
                                            this._model.getVideo().setCurrentQuality(0 === this._model.getVideo().getCurrentQuality() ? 1 : 0)
                                        },
                                        this),
                                    this.elements.cc.on("select",
                                        function(a) {
                                            this._api.setCurrentCaptions(a)
                                        },
                                        this),
                                    this.elements.cc.on("toggleValue",
                                        function() {
                                            var a = this._model.get("captionsIndex");
                                            this._api.setCurrentCaptions(a ? 0 : 1)
                                        },
                                        this),
                                    this.elements.audiotracks.on("select",
                                        function(a) {
                                            this._model.getVideo().setCurrentAudioTrack(a)
                                        },
                                        this),
                                    new e(this.elements.duration).on("click tap",
                                        function() {
                                            if ("DVR" === a.adaptiveType(this._model.get("duration"))) {
                                                var b = this._model.get("position");
                                                this._api.seek(Math.max(d.dvrSeekLimit, b))
                                            }
                                        },
                                        this),
                                    new e(this.el).on("click tap drag",
                                        function() {
                                            this.trigger("userAction")
                                        },
                                        this),
                                    this.elements.drawer.on("open-drawer close-drawer",
                                        function(b, c) {
                                            a.toggleClass(this.el, "jw-drawer-expanded", c.isOpen),
                                            c.isOpen || this.closeMenus()
                                        },
                                        this),
                                    b.each(this.menus,
                                        function(a) {
                                            a.on("open-tooltip", this.closeMenus, this)
                                        },
                                        this)
                            },
                            onCaptionsList: function(a, b) {
                                var c = a.get("captionsIndex");
                                this.elements.cc.setup(b, c),
                                    this.clearCompactMode()
                            },
                            onCaptionsIndex: function(a, b) {
                                this.elements.cc.selectItem(b)
                            },
                            onPlaylist: function(a, b) {
                                var c = b.length > 1;
                                this.elements.next.toggle(c),
                                    this.elements.prev.toggle(c),
                                this.elements.playlist && this.elements.playlist.setup(b, a.get("item"))
                            },
                            onPlaylistItem: function(a) {
                                this.elements.time.updateBuffer(0),
                                    this.elements.time.render(0),
                                    this.elements.duration.innerHTML = "00:00",
                                    this.elements.elapsed.innerHTML = "00:00",
                                    this.clearCompactMode();
                                var b = a.get("item");
                                this.elements.playlist && this.elements.playlist.selectItem(b),
                                    this.elements.audiotracks.setup()
                            },
                            onMediaModel: function(c, d) {
                                d.on("change:levels",
                                    function(a, b) {
                                        this.elements.hd.setup(b, a.get("currentLevel"), {
                                            toggle: !1
                                        }),
                                            this.clearCompactMode()
                                    },
                                    this),
                                    d.on("change:currentLevel",
                                        function(a, b) {
                                            this.elements.hd.selectItem(b)
                                        },
                                        this),
                                    d.on("change:audioTracks",
                                        function(a, c) {
                                            var d = b.map(c,
                                                function(a) {
                                                    return {
                                                        label: a.name
                                                    }
                                                });
                                            this.elements.audiotracks.setup(d, a.get("currentAudioTrack"), {
                                                toggle: !1
                                            }),
                                                this.clearCompactMode()
                                        },
                                        this),
                                    d.on("change:currentAudioTrack",
                                        function(a, b) {
                                            this.elements.audiotracks.selectItem(b)
                                        },
                                        this),
                                    d.on("change:state",
                                        function(b, c) {
                                            "complete" === c && (this.elements.drawer.closeTooltip(), a.removeClass(this.el, "jw-drawer-expanded"))
                                        },
                                        this),
                                    d.on("change:playbackRate",
                                        function(a, b) {
                                            for (var c = this._model.get("playRateConfig"), d = -1, e = 0; e < c.length; e++) c[e].label === "×" + b && (d = e);
                                            this.elements.playRate.selectItem(d)
                                        },
                                        this)
                            },
                            onProvider: function(a, b) { / (html5 | videojs) / .test(b.name) && a.get("playRate") && !this._isMobile ? this.elements.playRate.setup(a.get("playRateConfig"), 0) : this.elements.playRate.hide()
                            },
                            onVolume: function(a, b, c) {
                                this.renderVolume(a.get("mute"), b, c)
                            },
                            onMute: function(a, b) {
                                this.renderVolume(b, a.get("volume"))
                            },
                            renderVolume: function(b, c, d) {
                                var e;
                                d || (d = c),
                                this.elements.mute && a.toggleClass(this.elements.mute.element(), "jw-off", b),
                                this.elements.volume && this.elements.volume.render(b ? 0 : c),
                                this.elements.volumetooltip && (this.elements.volumetooltip.volumeSlider.render(b ? 0 : c), a.toggleClass(this.elements.volumetooltip.element(), "jw-off", b)),
                                this.elements.volumetooltip && this.elements.volumetooltip.valuetip && (e = this.elements.volumetooltip.valuetip, b ? e.innerHTML = "0%": 100 === c && c > d && this._model.get("provider") && /^flash/.test(this._model.get("provider").name) ? e.innerHTML = "100%(按↑可以继续增大音量)": e.innerHTML = c + "%")
                            },
                            onCastAvailable: function(a, b) {
                                this.elements.cast.toggle(b),
                                    this.clearCompactMode()
                            },
                            onCastActive: function(b, c) {
                                a.toggleClass(this.elements.cast.element(), "jw-off", !c)
                            },
                            onElapsed: function(b, c) {
                                var d, e = b.get("duration");
                                d = "DVR" === a.adaptiveType(e) ? "-" + a.timeFormat( - e) : a.timeFormat(c),
                                    this.elements.elapsed.innerHTML = d
                            },
                            onDuration: function(b, c) {
                                var d;
                                "DVR" === a.adaptiveType(c) ? (d = "Live", this.clearCompactMode()) : d = a.timeFormat(c),
                                /NaN/.test(d) || (this.elements.duration.innerHTML = d)
                            },
                            onFullscreen: function(b, c) {
                                a.toggleClass(this.elements.fullscreen.element(), "jw-off", c)
                            },
                            element: function() {
                                return this.el
                            },
                            getVisibleBounds: function() {
                                var b, c = this.el;
                                return "table" === (getComputedStyle ? getComputedStyle(c) : c.currentStyle).display ? a.bounds(c) : (c.style.visibility = "hidden", c.style.display = "table", b = a.bounds(c), c.style.visibility = c.style.display = "", b)
                            },
                            setAltText: function(a) {
                                this.elements.alt.innerHTML = a
                            },
                            addCues: function(a) {
                                this.elements.time && (b.each(a,
                                    function(a) {
                                        this.elements.time.addCue(a)
                                    },
                                    this), 0 === a.length && this.elements.time.resetChapters(), this.elements.time.drawCues())
                            },
                            addThumbnails: function(a) {
                                this.elements.time && (b.each(a,
                                    function(a) {
                                        this.elements.time.addThumbnail(a)
                                    },
                                    this), this.elements.time.drawCues())
                            },
                            closeMenus: function(a) {
                                b.each(this.menus,
                                    function(b) {
                                        a && a.target === b.el || b.closeTooltip(a)
                                    })
                            },
                            hideComponents: function() {
                                this.closeMenus(),
                                    this.elements.drawer.closeTooltip(),
                                    a.removeClass(this.el, "jw-drawer-expanded")
                            },
                            clearCompactMode: function() {
                                this._maxCompactWidth = -1,
                                    this._model.set("compactUI", !1),
                                this._containerWidth && this.checkCompactMode(this._containerWidth)
                            },
                            setCompactModeBounds: function() {
                                if (this.element().offsetWidth > 0) {
                                    var b = this.elements.left.offsetWidth + this.elements.right.offsetWidth;
                                    if ("LIVE" === a.adaptiveType(this._model.get("duration"))) this._maxCompactWidth = b + this.elements.alt.offsetWidth;
                                    else {
                                        var c = b + (this.elements.center.offsetWidth - this.elements.time.el.offsetWidth);
                                        this._maxCompactWidth = c / .8
                                    }
                                }
                            },
                            checkCompactMode: function(a) {
                                this.setCompactModeBounds(),
                                    this._containerWidth = a,
                                -1 !== this._maxCompactWidth && (a >= this._compactModeMaxSize && a > this._maxCompactWidth ? this._model.set("compactUI", !1) : (a < this._compactModeMaxSize || a <= this._maxCompactWidth) && this._model.set("compactUI", !0))
                            },
                            onCompactUI: function(c, d) {
                                a.removeClass(this.el, "jw-drawer-expanded"),
                                    this.elements.drawer.setup(this.layout.drawer, d),
                                (!d || this.elements.drawer.activeContents.length < 2) && b.each(this.layout.drawer,
                                    function(a) {
                                        this.elements.right.insertBefore(a.el, this.elements.drawer.el)
                                    },
                                    this)
                            }
                        }),
                            p
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(2), c(3), c(9), c(167), c(1)],
                    void 0 !== (e = function(a, b, c, d, e) {
                        var f = function(f) {
                            e.extend(this, b),
                                this.model = f,
                                this.el = a.createElement(d({}));
                            var g = this;
                            this.iconUI = new c(this.el).on("click tap",
                                function(a) {
                                    g.trigger(a.type)
                                })
                        };
                        return e.extend(f.prototype, {
                            element: function() {
                                return this.el
                            }
                        }),
                            f
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(168), c(2), c(1), c(9)],
                    void 0 !== (e = function(a, b, c, d) {
                        var e = function(a) {
                            this.model = a,
                                this.setup(),
                                this.model.on("change:dock", this.render, this)
                        };
                        return c.extend(e.prototype, {
                            setup: function() {
                                var c = this.model.get("dock"),
                                    e = this.click.bind(this),
                                    f = a(c);
                                this.el = b.createElement(f),
                                    new d(this.el).on("click tap", e)
                            },
                            getDockButton: function(a) {
                                return b.hasClass(a.target, "jw-dock-button") ? a.target: b.hasClass(a.target, "jw-dock-text") ? a.target.parentElement.parentElement: a.target.parentElement
                            },
                            click: function(a) {
                                var b = this.getDockButton(a),
                                    d = b.getAttribute("button"),
                                    e = this.model.get("dock"),
                                    f = c.findWhere(e, {
                                        id: d
                                    });
                                f && f.callback && f.callback(a)
                            },
                            render: function() {
                                var c = this.model.get("dock"),
                                    d = a(c),
                                    e = b.createElement(d);
                                this.el.innerHTML = e.innerHTML
                            },
                            element: function() {
                                return this.el
                            }
                        }),
                            e
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(169)],
                    void 0 !== (e = function(a) {
                        function b(b, c, d, e) {
                            return a({
                                id: b,
                                skin: c,
                                title: d,
                                body: e
                            })
                        }
                        return b
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(9), c(2), c(4), c(1), c(3), c(170)],
                    void 0 !== (e = function(a, b, c, d, e, f) {
                        var g = b.style,
                            h = {
                                linktarget: "_blank",
                                margin: 8,
                                hide: !1,
                                position: "top-right"
                            };
                        return function(i) {
                            var j, k, l = new Image,
                                m = d.extend({},
                                    i.get("logo"));
                            return d.extend(this, e),
                                this.setup = function(e) {
                                    if (k = d.extend({},
                                            h, m), k.hide = "true" === k.hide.toString(), j = b.createElement(f()), k.file) {
                                        k.hide && b.addClass(j, "jw-hide"),
                                            b.addClass(j, "jw-logo-" + (k.position || h.position)),
                                        "top-right" === k.position && (i.on("change:dock", this.topRight, this), i.on("change:controls", this.topRight, this), this.topRight(i)),
                                            i.set("logo", k),
                                            l.onload = function() {
                                                var a = {
                                                    backgroundImage: 'url("' + this.src + '")',
                                                    width: this.width,
                                                    height: this.height
                                                };
                                                if (k.margin !== h.margin) {
                                                    var b = /(\w+)-(\w+)/.exec(k.position);
                                                    3 === b.length && (a["margin-" + b[1]] = k.margin, a["margin-" + b[2]] = k.margin)
                                                }
                                                g(j, a),
                                                    i.set("logoWidth", a.width)
                                            },
                                            l.src = k.file;
                                        new a(j).on("click tap",
                                            function(a) {
                                                b.exists(a) && a.stopPropagation && a.stopPropagation(),
                                                    this.trigger(c.JWPLAYER_LOGO_CLICK, {
                                                        link: k.link,
                                                        linktarget: k.linktarget
                                                    })
                                            },
                                            this),
                                            e.appendChild(j)
                                    }
                                },
                                this.topRight = function(a) {
                                    var b = a.get("controls"),
                                        c = a.get("dock"),
                                        d = b && (c && c.length || a.get("sharing") || a.get("related"));
                                    g(j, {
                                        top: d ? "3.5em": 0
                                    })
                                },
                                this.element = function() {
                                    return j
                                },
                                this.position = function() {
                                    return k.position
                                },
                                this.destroy = function() {
                                    l.onload = null
                                },
                                this
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(2), c(1), c(15)],
                    void 0 !== (e = function(a, b, c) {
                        function d(a) {
                            return a > 100 ? 30 + Math.random() * (a - 100) : a / 2
                        }
                        var e = function(a, b) {
                            this.model = a,
                                this.element = b,
                                this.times = 0,
                                this.init()
                        };
                        return b.extend(e.prototype, {
                            init: function() {
                                if (a.isMSIE(9)) return c.style(this.element, {
                                    display: "none"
                                }),
                                    !1;
                                var b = this.model.get("marquee").text,
                                    d = this.model.get("marquee").color,
                                    e = this.model.get("marquee").fontSize;
                                b && (this.element.innerHTML = b),
                                d && c.style(this.element, {
                                    color: d
                                }),
                                e && c.style(this.element, {
                                    fontSize: e,
                                    lineHeight: e + 8
                                }),
                                    this.reset()
                            },
                            start: function() {
                                return ! a.isMSIE(9) && void c.style(this.element, {
                                        animationPlayState: "running",
                                        opacity: 1,
                                        display: "block"
                                    })
                            },
                            stop: function() {
                                this.reset(),
                                    c.style(this.element, {
                                        animationPlayState: "paused",
                                        opacity: 0,
                                        display: "none"
                                    })
                            },
                            pause: function() {
                                "running" === this.element.style.animationPlayState && c.style(this.element, {
                                    animationPlayState: "paused"
                                }),
                                    c.style(this.element, {
                                        opacity: 0
                                    })
                            },
                            reset: function(b, d) {
                                b = b || this.model.get("width"),
                                    d = d || this.model.get("height");
                                var e = this.element,
                                    f = this.times % 2 == 0 ? "marquee1": "marquee2",
                                    g = this;
                                c.animation(e, f + " 18s infinite"),
                                    this.randomTop(e, d),
                                    a.addEventListener(e, "webkitAnimationIteration",
                                        function() {
                                            g.randomTop(e, d)
                                        },
                                        !1),
                                    a.addEventListener(e, "animationiteration",
                                        function() {
                                            g.randomTop(e, d)
                                        },
                                        !1),
                                    this.times++
                            },
                            randomTop: function() {
                                var a = 0;
                                this.model.get("containerHeight") && (a = this.model.get("containerHeight")),
                                    c.style(this.element, {
                                        top: d(a)
                                    })
                            }
                        }),
                            e
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(1), c(2)],
                    void 0 !== (e = function(a, b) {
                        function c(a, b) {
                            b.off("change:mediaType", null, this),
                                b.on("change:mediaType",
                                    function(b, c) {
                                        "audio" === c && this.setImage(a.get("playlistItem").image)
                                    },
                                    this)
                        }
                        function d(a, c) {
                            return a.get("autostart") && !b.isMobile() || a.get("item") > 0 ? (this.setImage(null), a.off("change:state", null, this), void a.on("change:state",
                                function(a, b) {
                                    "complete" !== b && "idle" !== b && "error" !== b || this.setImage(c.image)
                                },
                                this)) : void this.setImage(c.image)
                        }
                        var e = function(a) {
                            this.model = a,
                                a.on("change:playlistItem", d, this),
                                a.on("change:mediaModel", c, this)
                        };
                        return a.extend(e.prototype, {
                            setup: function(a) {
                                this.el = a;
                                var b = this.model.get("playlistItem");
                                b && this.setImage(b.image)
                            },
                            setImage: function(c) {
                                var d = this.image;
                                d && (d.onload = null, this.image = null),
                                    this.model.off("change:state", null, this);
                                var e = "";
                                a.isString(c) && (e = 'url("' + c + '")', d = this.image = new Image, d.src = c),
                                    b.isPoorIE() ? this.el.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + c + '",sizingMethod="scale"': b.style(this.el, {
                                        backgroundImage: e
                                    })
                            },
                            resize: function(a, c, d) {
                                if ("uniform" === d) {
                                    var e = a / c,
                                        f = this.image,
                                        g = null;
                                    if (f) {
                                        if (0 === f.width) {
                                            var h = this;
                                            return void(f.onload = function() {
                                                h.resize(a, c, d)
                                            })
                                        }
                                        var i = f.width / f.height;
                                        Math.abs(e - i) < .09 && (g = "cover")
                                    }
                                    b.style(this.el, {
                                        backgroundSize: g
                                    })
                                }
                            },
                            element: function() {
                                return this.el
                            }
                        }),
                            e
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(2), c(175), c(1), c(9), c(16)],
                    void 0 !== (e = function(a, b, c, d, e) {
                        var f = function() {};
                        return c.extend(f.prototype, {
                            buildArray: function() {
                                var b = e.split("+"),
                                    d = b[0],
                                    f = {
                                        items: []
                                    },
                                    g = this.model.get("rightclick");
                                g && c.isArray(g) && g.length > 0 ? c.each(g,
                                    function(a) {
                                        f.items.push({
                                            title: a.title,
                                            link: a.link
                                        })
                                    }) : f.items.push({
                                    title: "About Cyber Player " + d,
                                    link: "https://bce.baidu.com/doc/MCT/Web-SDK.html#.E6.92.AD.E6.94.BE.E5.99.A8.20Web.20SDK.20.E7.AE.80.E4.BB.8B"
                                });
                                var h = this.model.get("provider");
                                if (h && h.name.indexOf("flash") >= 0) {
                                    var i = "Flash Version " + a.flashVersion();
                                    f.items.push({
                                        title: i,
                                        link: "http://www.adobe.com/software/flash/about/"
                                    })
                                }
                                return f
                            },
                            buildMenu: function() {
                                var c = this.buildArray();
                                return a.createElement(b(c))
                            },
                            updateHtml: function() {
                                this.el.innerHTML = this.buildMenu().innerHTML
                            },
                            rightClick: function(a) {
                                return this.lazySetup(),
                                !this.mouseOverContext && (this.hideMenu(), this.showMenu(a), !1)
                            },
                            getOffset: function(b) {
                                var c = b.target,
                                    d = b.layerX || b.offsetX,
                                    e = b.layerY || b.offsetY;
                                if (a.isIE() && (a.hasClass(c, "jw-video") || a.hasClass(c, "jw-warning"))) return {
                                    x: d,
                                    y: e + 40
                                };
                                for (; c !== this.playerElement;) d += c.offsetLeft,
                                    e += c.offsetTop,
                                    c = c.parentNode;
                                return d = d <= this.playerElement.clientWidth ? d: this.playerElement.clientWidth,
                                    e = e <= this.playerElement.clientHeight ? e: this.playerElement.clientHeight,
                                    {
                                        x: d,
                                        y: e
                                    }
                            },
                            showMenu: function(b) {
                                var c = this.getOffset(b);
                                return this.el.style.left = c.x + "px",
                                    this.el.style.top = c.y + "px",
                                    a.addClass(this.playerElement, "jw-flag-rightclick-open"),
                                    a.addClass(this.el, "jw-open"),
                                    !1
                            },
                            hideMenu: function() {
                                this.mouseOverContext || (a.removeClass(this.playerElement, "jw-flag-rightclick-open"), a.removeClass(this.el, "jw-open"))
                            },
                            lazySetup: function() {
                                this.el || (this.el = this.buildMenu(), this.layer.appendChild(this.el), this.hideMenuHandler = this.hideMenu.bind(this), this.addOffListener(this.playerElement), this.addOffListener(document), this.model.on("change:provider", this.updateHtml, this), this.elementUI = new d(this.el, {
                                    useHover: !0
                                }).on("over",
                                    function() {
                                        this.mouseOverContext = !0
                                    },
                                    this).on("out",
                                    function() {
                                        this.mouseOverContext = !1
                                    },
                                    this))
                            },
                            setup: function(b, c, d) {
                                this.playerElement = c,
                                    this.model = b,
                                    this.mouseOverContext = !1,
                                    this.layer = d,
                                a.isPoorIE() || (c.oncontextmenu = this.rightClick.bind(this))
                            },
                            addOffListener: function(b) {
                                a.addEventListener(b, "mousedown", this.hideMenuHandler),
                                    a.addEventListener(b, "touchstart", this.hideMenuHandler),
                                    a.addEventListener(b, "pointerdown", this.hideMenuHandler)
                            },
                            removeOffListener: function(b) {
                                a.removeEventListener(b, "mousedown", this.hideMenuHandler),
                                    a.removeEventListener(b, "touchstart", this.hideMenuHandler),
                                    a.removeEventListener(b, "pointerdown", this.hideMenuHandler)
                            },
                            destroy: function() {
                                this.el && (this.hideMenu(), this.elementUI.off(), this.removeOffListener(this.playerElement), this.removeOffListener(document), this.hideMenuHandler = null, this.el = null),
                                this.playerElement && (this.playerElement.oncontextmenu = null, this.playerElement = null),
                                this.model && (this.model.off("change:provider", this.updateHtml), this.model = null)
                            }
                        }),
                            f
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(1), c(2)],
                    void 0 !== (e = function(a, b) {
                        var c = function(a) {
                            this.model = a,
                                this.model.on("change:playlistItem", this.playlistItem, this)
                        };
                        return a.extend(c.prototype, {
                            hide: function() {
                                this.el.style.display = "none"
                            },
                            show: function() {
                                this.el.style.display = ""
                            },
                            setup: function(a) {
                                this.el = a;
                                var b = this.el.getElementsByTagName("div");
                                this.title = b[0],
                                    this.description = b[1],
                                this.model.get("playlistItem") && this.playlistItem(this.model, this.model.get("playlistItem")),
                                    this.model.on("change:logoWidth", this.update, this),
                                    this.model.on("change:dock", this.update, this)
                            },
                            update: function(a) {
                                var c = {
                                        paddingLeft: 0,
                                        paddingRight: 0
                                    },
                                    d = a.get("controls"),
                                    e = a.get("dock"),
                                    f = a.get("logo");
                                if (f) {
                                    var g = 1 * ("" + f.margin).replace("px", ""),
                                        h = a.get("logoWidth") + (isNaN(g) ? 0 : g);
                                    "top-left" === f.position ? c.paddingLeft = h: "top-right" === f.position && (c.paddingRight = h)
                                }
                                if (d && e && e.length) {
                                    var i = 56 * e.length;
                                    c.paddingRight = Math.max(c.paddingRight, i)
                                }
                                b.style(this.el, c)
                            },
                            playlistItem: function(a, b) {
                                if (a.get("displaytitle") || a.get("displaydescription")) {
                                    var c = "",
                                        d = "";
                                    b.title && a.get("displaytitle") && (c = b.title),
                                    b.description && a.get("displaydescription") && (d = b.description),
                                        this.updateText(c, d)
                                } else this.hide()
                            },
                            updateText: function(a, b) {
                                this.title.innerHTML = a,
                                    this.description.innerHTML = b,
                                    this.title.firstChild || this.description.firstChild ? this.show() : this.hide()
                            },
                            element: function() {
                                return this.el
                            }
                        }),
                            c
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b, c) {
                    var d, e;
                    d = [c(2), c(4), c(3), c(21), c(7), c(128), c(129), c(138), c(139), c(141), c(137), c(143), c(127), c(142), c(144), c(145), c(1), c(172)],
                    void 0 !== (e = function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
                        var s = a.style,
                            t = a.bounds,
                            u = a.isMobile(),
                            v = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
                        return function(w, x) {
                            function y(b) {
                                var c = 0,
                                    e = x.get("duration"),
                                    f = x.get("position");
                                "DVR" === a.adaptiveType(e) && (c = e, e = Math.max(f, d.dvrSeekLimit));
                                var g = a.between(f + b, c, e);
                                w.seek(g)
                            }
                            function z(b) {
                                var c, d = x.get("volume");
                                "-" === b ? c = d > 100 ? -50 : -10 : (c = d >= 100 ? 50 : 10, d < 100 && d + c > 100 && (c = 100 - d));
                                var e = x.getVideo(),
                                    f = e && 0 === e.getName().name.indexOf("flash"),
                                    g = f ? 500 : 100,
                                    h = a.between(x.get("volume") + c, 0, g);
                                w.setVolume(h)
                            }
                            function A(a) {
                                return ! a.ctrlKey && !a.metaKey && !!x.get("controls")
                            }
                            function B(a) {
                                var b = x.get("keyControls");
                                if (!A(a)) return ! 0;
                                switch (Ja || ca(), a.keyCode) {
                                    case 27:
                                        w.setFullscreen(!1);
                                        break;
                                    case 13:
                                    case 32:
                                        b && w.play({
                                            reason: "interaction"
                                        });
                                        break;
                                    case 37:
                                        Ja || y( - 5);
                                        break;
                                    case 39:
                                        Ja || y(5);
                                        break;
                                    case 38:
                                        z("+");
                                        break;
                                    case 40:
                                        z("-");
                                        break;
                                    case 67:
                                        var c = w.getCaptionsList(),
                                            d = c.length;
                                        if (d) {
                                            var e = (w.getCurrentCaptions() + 1) % d;
                                            w.setCurrentCaptions(e)
                                        }
                                        break;
                                    case 77:
                                        b && w.setMute();
                                        break;
                                    case 70:
                                        b && w.setFullscreen();
                                        break;
                                    default:
                                        if (b && a.keyCode >= 48 && a.keyCode <= 59) {
                                            var f = a.keyCode - 48,
                                                g = f / 10 * x.get("duration");
                                            w.seek(g)
                                        }
                                }
                                return /13|32|37|38|39|40/.test(a.keyCode) ? (a.preventDefault && a.preventDefault(), !1) : void 0
                            }
                            function C() {
                                Oa = !1,
                                    a.removeClass(la, "jw-no-focus")
                            }
                            function D() {
                                Oa = !0,
                                    a.addClass(la, "jw-no-focus")
                            }
                            function E() {
                                Oa || C(),
                                Ja || ca()
                            }
                            function F() {
                                var c = t(la),
                                    d = Math.round(c.width),
                                    e = Math.round(c.height);
                                return document.body.contains(la) ? d && e && (d === oa && e === pa || (oa = d, pa = e, clearTimeout(La), La = setTimeout(Z, 50), x.set("containerWidth", d), x.set("containerHeight", e), Pa.trigger(b.JWPLAYER_RESIZE, {
                                        width: d,
                                        height: e
                                    }))) : (a.removeEventListener(window, "resize", F), u && a.removeEventListener(window, "orientationchange", F)),
                                    c
                            }
                            function G(b, c) {
                                c = c || !1,
                                    a.toggleClass(la, "jw-flag-casting", c)
                            }
                            function H(b, c) {
                                a.toggleClass(la, "jw-flag-cast-available", c),
                                    a.toggleClass(ma, "jw-flag-cast-available", c)
                            }
                            function I(b, c) {
                                a.replaceClass(la, /jw-stretch-\S+/, "jw-stretch-" + c)
                            }
                            function J(b, c) {
                                a.toggleClass(la, "jw-flag-compact-player", c)
                            }
                            function K(b) {
                                b && !u && (a.addEventListener(b.element(), "mousemove", N, !1), a.addEventListener(b.element(), "mouseout", O, !1))
                            }
                            function L() {
                                x.get("state") !== e.IDLE && x.get("state") !== e.COMPLETE && x.get("state") !== e.PAUSED || !x.get("controls") || w.play({
                                    reason: "interaction"
                                }),
                                    Ka ? ba() : ca()
                            }
                            function M(a) {
                                a.link ? (w.pause(!0), w.setFullscreen(!1), window.open(a.link, a.linktarget)) : x.get("controls") && w.play({
                                        reason: "interaction"
                                    })
                            }
                            function N() {
                                clearTimeout(Ga)
                            }
                            function O() {
                                ca()
                            }
                            function P(a) {
                                Pa.trigger(a.type, a)
                            }
                            function Q(b, c) {
                                c ? (Ca && Ca.destroy(), a.addClass(la, "jw-flag-flash-blocked")) : (Ca && Ca.setup(x, la, la), a.removeClass(la, "jw-flag-flash-blocked"))
                            }
                            function R() {
                                x.get("controls") && w.setFullscreen()
                            }
                            function S() {
                                var c = a.getElementsByClassName("jw-overlays", la)[0];
                                a.addEventListener(c, "mousemove", ca),
                                    va = new g(x, na, {
                                        useHover: !0
                                    }),
                                    va.on("click",
                                        function() {
                                            P({
                                                type: b.JWPLAYER_DISPLAY_CLICK
                                            }),
                                            x.get("controls") && !x.get("flashUI") && x.get("allowClickToDisplay") && w.play({
                                                reason: "interaction"
                                            })
                                        }),
                                    va.on("tap",
                                        function() {
                                            P({
                                                type: b.JWPLAYER_DISPLAY_CLICK
                                            }),
                                                L()
                                        }),
                                x.get("allowDoubleClickFullscreen") && va.on("doubleClick", R),
                                    va.on("move", ca),
                                    va.on("over", ca);
                                var d = new h(x);
                                d.on("click",
                                    function() {
                                        P({
                                            type: b.JWPLAYER_DISPLAY_CLICK
                                        }),
                                            w.play({
                                                reason: "interaction"
                                            })
                                    }),
                                    d.on("tap",
                                        function() {
                                            P({
                                                type: b.JWPLAYER_DISPLAY_CLICK
                                            }),
                                                L()
                                        }),
                                    ma.appendChild(d.element()),
                                    xa = new i(x),
                                    ya = new j(x),
                                    ya.on(b.JWPLAYER_LOGO_CLICK, M);
                                var e = document.createElement("div");
                                e.className = "jw-controls-right jw-reset",
                                    ya.setup(e),
                                    e.appendChild(xa.element()),
                                    ma.appendChild(e),
                                    Aa = new f(x),
                                    Aa.setup(la.id, x.get("captions")),
                                    ma.parentNode.insertBefore(Aa.element(), za.element());
                                var l = x.get("height");
                                u && ("string" == typeof l || l >= 1.5 * Ia) ? a.addClass(la, "jw-flag-touch") : (Ca = new o, Ca.setup(x, la, la)),
                                    ra = new k(w, x),
                                    ra.on(b.JWPLAYER_USER_ACTION, ca),
                                    x.on("change:scrubbing", U),
                                    x.on("change:compactUI", J),
                                    ma.appendChild(ra.element()),
                                    a.addEventListener(la, "focus", E),
                                    a.addEventListener(la, "blur", C),
                                    a.addEventListener(la, "keydown", B),
                                    la.onmousedown = D
                            }
                            function T(b) {
                                return b.get("state") === e.PAUSED ? void b.once("change:state", T) : void(!1 === b.get("scrubbing") && a.removeClass(la, "jw-flag-dragging"))
                            }
                            function U(b, c) {
                                b.off("change:state", T),
                                    c ? a.addClass(la, "jw-flag-dragging") : T(b)
                            }
                            function V(b, c, d) {
                                var e, f = la.className;
                                d = !!d,
                                d && (f = f.replace(/\s*aspectMode/, ""), la.className !== f && (la.className = f), a.style(la, {
                                        display: "block"
                                    },
                                    d)),
                                a.exists(b) && a.exists(c) && (x.set("width", b), x.set("height", c)),
                                    e = {
                                        width: b
                                    },
                                a.hasClass(la, "jw-flag-aspect-mode") || (e.height = c),
                                    s(la, e, !0),
                                    W(c),
                                    Z(b, c)
                            }
                            function W(b) {
                                if (Ba = X(b), ra && !Ba) {
                                    var c = Ja ? qa: x;
                                    ka(c, c.get("state"))
                                }
                                a.toggleClass(la, "jw-flag-audio-player", Ba)
                            }
                            function X(a) {
                                return ! x.get("aspectratio") && (!(q.isString(a) && a.indexOf("%") > -1) && Y(q.isNumber(a) ? a: x.get("containerHeight")))
                            }
                            function Y(a) {
                                return a && a <= Ia * (u ? 1.75 : 1)
                            }
                            function Z(b, c) {
                                if (!b || isNaN(Number(b))) {
                                    if (!na) return;
                                    b = na.clientWidth
                                }
                                if (!c || isNaN(Number(c))) {
                                    if (!na) return;
                                    c = na.clientHeight
                                }
                                sa && sa.resize(b, c, x.get("stretching")),
                                a.isMSIE(9) && document.all && !window.atob && (b = c = "100%");
                                var d = x.getVideo();
                                if (d) {
                                    d.resize(b, c, x.get("stretching")) && (clearTimeout(La), La = setTimeout(Z, 250)),
                                        Aa.resize(),
                                        ra.checkCompactMode(b),
                                    x.get("state") === e.PAUSED && x.get("imageAdvs") && x.get("imageAdvs").pause && ta && !ta.isHidden() && ta.resizePauseAdv(b, c)
                                }
                            }
                            function $() {
                                if (Na) {
                                    var a = document.fullscreenElement || document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                                    return ! (!a || a.id !== x.get("id"))
                                }
                                return Ja ? qa.getVideo().getFullScreen() : x.getVideo().getFullScreen()
                            }
                            function _(a) {
                                var b = x.get("fullscreen"),
                                    c = void 0 !== a.jwstate ? a.jwstate: $();
                                b !== c && x.set("fullscreen", c),
                                    clearTimeout(La),
                                    La = setTimeout(Z, 200)
                            }
                            function aa(b, c) {
                                c ? (a.addClass(b, "jw-flag-fullscreen"), s(document.body, {
                                    "overflow-y": "hidden"
                                }), ca()) : (a.removeClass(b, "jw-flag-fullscreen"), s(document.body, {
                                    "overflow-y": ""
                                })),
                                    Z()
                            }
                            function ba() {
                                Ka = !1,
                                    clearTimeout(Ga),
                                    ra.hideComponents(),
                                    a.addClass(la, "jw-flag-user-inactive")
                            }
                            function ca() {
                                Ka || (a.removeClass(la, "jw-flag-user-inactive"), ra.checkCompactMode(na.clientWidth)),
                                    Ka = !0,
                                    clearTimeout(Ga),
                                    Ga = setTimeout(ba, Ha)
                            }
                            function da() {
                                w.setFullscreen(!1),
                                x.get("imageAdvs") && x.get("imageAdvs").end && ta && ta.loadAdv("end")
                            }
                            function ea() {
                                wa && wa.setState(x.get("state")),
                                    fa(x, x.mediaModel.get("mediaType")),
                                    x.mediaModel.on("change:mediaType", fa, this)
                            }
                            function fa(b, c) {
                                var d = "audio" === c,
                                    e = x.getVideo(),
                                    f = e && 0 === e.getName().name.indexOf("flash");
                                a.toggleClass(la, "jw-flag-media-audio", d),
                                    d && !f ? la.insertBefore(sa.el, na) : la.insertBefore(sa.el, Aa.element())
                            }
                            function ga(b, c) {
                                var d = !0 === b.get("isLive") || "LIVE" === a.adaptiveType(c) || "DVR" === a.adaptiveType(c);
                                a.toggleClass(la, "jw-flag-live", d),
                                d || Pa.setAltText("")
                            }
                            function ha(a, b) {
                                return b ? void(b.name ? za.updateText(b.name, b.message) : za.updateText(b.message, "")) : void za.playlistItem(a, a.get("playlistItem"))
                            }
                            function ia() {
                                var a = x.getVideo();
                                return !! a && a.isCaster
                            }
                            function ja() {
                                a.replaceClass(la, /jw-state-\S+/, "jw-state-" + Da)
                            }
                            function ka(b, c) {
                                if (Da = c, clearTimeout(Ma), c === e.COMPLETE || c === e.IDLE ? Ma = setTimeout(ja, 100) : ja(), ia()) return void a.addClass(na, "jw-media-show");
                                switch (c) {
                                    case e.PLAYING:
                                        ta && ta.hide(),
                                            Z(),
                                        ua && x.get("marquee").show && ua.start();
                                        break;
                                    case e.PAUSED:
                                        ta && x.get("imageAdvs") && x.get("imageAdvs").pause && ta.loadAdv("pause"),
                                            ca(),
                                        ua && x.get("marquee").show && ua.pause();
                                        break;
                                    case e.IDLE:
                                        ua && x.get("marquee").show && ua.pause();
                                        break;
                                    case e.COMPLETE:
                                        ua && ua.stop()
                                }
                            }
                            var la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, Aa, Ba, Ca, Da, Ea, Fa, Ga = -1,
                                Ha = 2e3,
                                Ia = 40,
                                Ja = !1,
                                Ka = !1,
                                La = -1,
                                Ma = -1,
                                Na = !1,
                                Oa = !1,
                                Pa = q.extend(this, c);
                            this.model = x,
                                this.api = w,
                                la = a.createElement(r({
                                    id: x.get("id")
                                })),
                            a.isIE() && a.addClass(la, "jw-ie"),
                            a.isPoorIE() && a.addClass(la, "jw-ie-poorie"),
                            x.get("flashUI") && a.addClass(la, "jw-flashui");
                            var Qa = x.get("width"),
                                Ra = x.get("height");
                            s(la, {
                                width: Qa.toString().indexOf("%") > 0 ? Qa: Qa + "px",
                                height: Ra.toString().indexOf("%") > 0 ? Ra: Ra + "px"
                            }),
                                Ea = la.requestFullscreen || la.webkitRequestFullscreen || la.webkitRequestFullScreen || la.mozRequestFullScreen || la.msRequestFullscreen,
                                Fa = document.exitFullscreen || document.webkitExitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen,
                                Na = Ea && Fa,
                                this.onChangeSkin = function(b, c) {
                                    a.replaceClass(la, /jw-skin-\S+/, c ? "jw-skin-" + c: "")
                                },
                                this.handleColorOverrides = function() {
                                    function b(b, d, e) {
                                        if (e) {
                                            b = a.prefix(b, "#" + c + " ");
                                            var f = {};
                                            f[d] = e,
                                                a.css(b.join(", "), f, c)
                                        }
                                    }
                                    var c = x.get("id"),
                                        d = x.get("skinColorActive"),
                                        e = x.get("skinColorInactive"),
                                        f = x.get("skinColorBackground");
                                    b([".jw-toggle", ".jw-button-color:hover"], "color", d),
                                        b([".jw-active-option", ".jw-progress", ".jw-playlist-container .jw-option.jw-active-option", ".jw-playlist-container .jw-option:hover"], "background", d),
                                        b([".jw-text", ".jw-option", ".jw-button-color", ".jw-toggle.jw-off", ".jw-tooltip-title", ".jw-skip .jw-skip-icon", ".jw-playlist-container .jw-icon"], "color", e),
                                        b([".jw-cue", ".jw-knob"], "background", e),
                                        b([".jw-playlist-container .jw-option"], "border-bottom-color", e),
                                        b([".jw-background-color", ".jw-tooltip-title", ".jw-playlist", ".jw-playlist-container .jw-option"], "background", f),
                                        b([".jw-playlist-container ::-webkit-scrollbar"], "border-color", f)
                                },
                                this.setup = function() {
                                    this.handleColorOverrides(),
                                    !0 === x.get("skin-loading") && (a.addClass(la, "jw-flag-skin-loading"), x.once("change:skin-loading",
                                        function() {
                                            a.removeClass(la, "jw-flag-skin-loading")
                                        })),
                                        this.onChangeSkin(x, x.get("skin"), ""),
                                        x.on("change:skin", this.onChangeSkin, this),
                                        na = a.getElementsByClassName("jw-media", la)[0],
                                        ma = a.getElementsByClassName("jw-controls", la)[0];
                                    var c = a.getElementsByClassName("jw-preview", la)[0];
                                    sa = new l(x),
                                        sa.setup(c);
                                    var d = a.getElementsByClassName("jw-title", la)[0];
                                    if (za = new p(x), za.setup(d), a.isPoorIE()) a.style(a.getElementsByClassName("jw-marquee", la)[0], {
                                        display: "none"
                                    });
                                    else if (ta = new m(x, w), x.get("imageAdvs") && la.appendChild(ta.element()), x.get("marquee").show) {
                                        var f = a.getElementsByClassName("jw-marquee", la)[0];
                                        ua = new n(x, f),
                                            a.style(la, {
                                                overflow: "hidden"
                                            })
                                    }
                                    x.advManage && x.advManage.hasProcessAdv && la.appendChild(x.advManage.element()),
                                        S(),
                                        ca(),
                                        x.set("mediaContainer", na),
                                        x.mediaController.on("fullscreenchange", _);
                                    for (var g = v.length; g--;) a.addEventListener(document, v[g], _, !1);
                                    a.removeEventListener(window, "resize", F),
                                        a.addEventListener(window, "resize", F, !1),
                                    u && (a.removeEventListener(window, "orientationchange", F), a.addEventListener(window, "orientationchange", F, !1)),
                                        x.on("change:errorEvent", ha),
                                        x.on("change:controls", Sa),
                                        Sa(x, x.get("controls")),
                                        x.on("change:state", ka),
                                        x.on("change:duration", ga, this),
                                        x.on("change:flashBlocked", Q),
                                        Q(x, x.get("flashBlocked")),
                                        w.onPlaylistComplete(da),
                                        w.onPlaylistItem(ea),
                                        x.on("change:castAvailable", H),
                                        H(x, x.get("castAvailable")),
                                        x.on("change:castActive", G),
                                        G(x, x.get("castActive")),
                                    x.get("stretching") && I(x, x.get("stretching")),
                                        x.on("change:stretching", I),
                                        ka(x, e.IDLE),
                                        x.on("change:fullscreen", Ta),
                                        K(ra),
                                        K(ya);
                                    var h = x.get("aspectratio");
                                    if (h) {
                                        a.addClass(la, "jw-flag-aspect-mode");
                                        var i = a.getElementsByClassName("jw-aspect", la)[0];
                                        s(i, {
                                            paddingTop: h
                                        })
                                    }
                                    w.on(b.JWPLAYER_READY,
                                        function() {
                                            F(),
                                                V(x.get("width"), x.get("height"))
                                        }),
                                        x.on("connecting",
                                            function() {
                                                Pa.setAltText("正在与服务器建立连接"),
                                                    a.toggleClass(la, "jw-flag-live", !0)
                                            }),
                                        x.on("connectFaild",
                                            function() {
                                                w.stop(),
                                                    Pa.setAltText("连接已断开，请稍后重试"),
                                                    a.toggleClass(la, "jw-flag-live", !0),
                                                    a.getElementsByClassName("jw-controlbar", la)[0].style.display = "block"
                                            }),
                                        x.on("alive",
                                            function() {
                                                "idle" !== Pa.model.get("state") && (Pa.setAltText("直播中"), a.toggleClass(la, "jw-flag-live", !0), c.style.display = "none")
                                            }),
                                        x.on("noLiveStream",
                                            function() {
                                                "idle" !== Pa.model.get("state") && x.get("isLive") && (Pa.setAltText("无直播流"), a.toggleClass(la, "jw-flag-live", !0), x.get("image") && (c.style.display = "block"), a.getElementsByClassName("jw-controlbar", la)[0].style.display = "block")
                                            }),
                                        x.on("liveStop",
                                            function() {
                                                w.stop(),
                                                    Pa.setAltText("直播结束"),
                                                    a.toggleClass(la, "jw-flag-live", !0),
                                                    a.getElementsByClassName("jw-controlbar", la)[0].style.display = "block"
                                            }),
                                        x.on("seekAfterLoadSuccess",
                                            function() {
                                                Pa.setAltText("自动跳转到上次的播放时间..."),
                                                    a.addClass(ra.element(), "jw-controlbar-textshow"),
                                                    setTimeout(function() {
                                                            a.removeClass(ra.element(), "jw-controlbar-textshow")
                                                        },
                                                        1e3)
                                            })
                                };
                            var Sa = function(b, c) {
                                    if (c) {
                                        ka(b, Ja ? qa.get("state") : x.get("state"))
                                    }
                                    a.toggleClass(la, "jw-flag-controls-disabled", !c)
                                },
                                Ta = function(b, c) {
                                    var d = x.getVideo();
                                    Na ? (c ? Ea.apply(la) : Fa.apply(document), aa(la, c)) : a.isIE() ? aa(la, c) : (qa && qa.getVideo() && qa.getVideo().setFullscreen(c), d.setFullscreen(c)),
                                    d && 0 === d.getName().name.indexOf("flash") && d.setFullscreen(c),
                                    ua && x.get("marquee").show && ua.reset(la.clientWidth, la.clientHeight)
                                };
                            this.resize = function(a, b) {
                                V(a, b, !0),
                                    F()
                            },
                                this.resizeMedia = Z,
                                this.reset = function() {
                                    document.contains(la) && la.parentNode.replaceChild(void 0, la),
                                        a.emptyElement(la)
                                },
                                this.setupInstream = function(b) {
                                    this.instreamModel = qa = b,
                                        qa.on("change:controls", Sa, this),
                                        qa.on("change:state", ka, this),
                                        Ja = !0,
                                        a.addClass(la, "jw-flag-ads"),
                                        ca()
                                },
                                this.setAltText = function(a) {
                                    ra.setAltText(a)
                                },
                                this.useExternalControls = function() {
                                    a.addClass(la, "jw-flag-ads-hide-controls")
                                },
                                this.destroyInstream = function() {
                                    if (Ja = !1, qa && (qa.off(null, null, this), qa = null), this.setAltText(""), a.removeClass(la, "jw-flag-ads"), a.removeClass(la, "jw-flag-ads-hide-controls"), x.getVideo) {
                                        x.getVideo().setContainer(na)
                                    }
                                    ga(x, x.get("duration")),
                                        va.revertAlternateClickHandlers()
                                },
                                this.addCues = function(a) {
                                    ra && ra.addCues(a)
                                },
                                this.addThumbnails = function(a) {
                                    ra && ra.addThumbnails(a)
                                },
                                this.clickHandler = function() {
                                    return va
                                },
                                this.controlsContainer = function() {
                                    return ma
                                },
                                this.getContainer = this.element = function() {
                                    return la
                                },
                                this.getSafeRegion = function(b) {
                                    var c = {
                                            x: 0,
                                            y: 0,
                                            width: x.get("containerWidth") || 0,
                                            height: x.get("containerHeight") || 0
                                        },
                                        d = x.get("dock");
                                    return d && d.length && x.get("controls") && (c.y = xa.element().clientHeight, c.height -= c.y),
                                        b = b || !a.exists(b),
                                    b && x.get("controls") && (c.height -= ra.element().clientHeight),
                                        c
                                },
                                this.setCaptions = function(a) {
                                    Aa.clear(),
                                        Aa.setup(x.get("id"), a),
                                        Aa.resize()
                                },
                                this.destroy = function() {
                                    a.removeEventListener(window, "resize", F),
                                        a.removeEventListener(window, "orientationchange", F);
                                    for (var b = v.length; b--;) a.removeEventListener(document, v[b], _, _, !1);
                                    x.mediaController && x.mediaController.off("fullscreenchange", _),
                                        a.removeEventListener(la, "keydown", B),
                                    Ca && Ca.destroy(),
                                    wa && (x.off("change:state", wa.statusDelegate), wa.destroy(), wa = null),
                                    Ja && this.destroyInstream(),
                                    ya && ya.destroy(),
                                        a.clearCss(x.get("id"))
                                },
                                this.showAdv = function(a) {
                                    ta && ta.loadAdv(a)
                                },
                                this.beginStartAdv = function() {
                                    ta && ta.beginStartAdv()
                                }
                        }
                    }.apply(b, d)) && (a.exports = e)
                },
                function(a, b) {
                    a.exports = function() {
                        var a = [];
                        return a.toString = function() {
                            for (var a = [], b = 0; b < this.length; b++) {
                                var c = this[b];
                                c[2] ? a.push("@media " + c[2] + "{" + c[1] + "}") : a.push(c[1])
                            }
                            return a.join("")
                        },
                            a.i = function(b, c) {
                                "string" == typeof b && (b = [[null, b, ""]]);
                                for (var d = {},
                                         e = 0; e < this.length; e++) {
                                    var f = this[e][0];
                                    "number" == typeof f && (d[f] = !0)
                                }
                                for (e = 0; e < b.length; e++) {
                                    var g = b[e];
                                    "number" == typeof g[0] && d[g[0]] || (c && !g[2] ? g[2] = c: c && (g[2] = "(" + g[2] + ") and (" + c + ")"), a.push(g))
                                }
                            },
                            a
                    }
                },
                ,
                function(a, b, c) {
                    "use strict";
                    function d(a) {
                        return a && a.__esModule ? a: {
                            "default": a
                        }
                    }
                    function e(a) {
                        if (a && a.__esModule) return a;
                        var b = {};
                        if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                        return b["default"] = a,
                            b
                    }
                    function f() {
                        var a = new h.HandlebarsEnvironment;
                        return n.extend(a, h),
                            a.SafeString = j["default"],
                            a.Exception = l["default"],
                            a.Utils = n,
                            a.escapeExpression = n.escapeExpression,
                            a.VM = p,
                            a.template = function(b) {
                                return p.template(b, a)
                            },
                            a
                    }
                    b.__esModule = !0;
                    var g = c(67),
                        h = e(g),
                        i = c(163),
                        j = d(i),
                        k = c(23),
                        l = d(k),
                        m = c(13),
                        n = e(m),
                        o = c(162),
                        p = e(o),
                        q = c(161),
                        r = d(q),
                        s = f();
                    s.create = f,
                        r["default"](s),
                        s["default"] = s,
                        b["default"] = s,
                        a.exports = b["default"]
                },
                function(a, b, c) {
                    "use strict";
                    function d(a) {
                        f["default"](a)
                    }
                    b.__esModule = !0,
                        b.registerDefaultDecorators = d;
                    var e = c(151),
                        f = function(a) {
                            return a && a.__esModule ? a: {
                                "default": a
                            }
                        } (e)
                },
                function(a, b, c) {
                    "use strict";
                    b.__esModule = !0;
                    var d = c(13);
                    b["default"] = function(a) {
                        a.registerDecorator("inline",
                            function(a, b, c, e) {
                                var f = a;
                                return b.partials || (b.partials = {},
                                    f = function(e, f) {
                                        var g = c.partials;
                                        c.partials = d.extend({},
                                            g, b.partials);
                                        var h = a(e, f);
                                        return c.partials = g,
                                            h
                                    }),
                                    b.partials[e.args[0]] = e.fn,
                                    f
                            })
                    },
                        a.exports = b["default"]
                },
                function(a, b, c) {
                    "use strict";
                    function d(a) {
                        return a && a.__esModule ? a: {
                            "default": a
                        }
                    }
                    function e(a) {
                        g["default"](a),
                            i["default"](a),
                            k["default"](a),
                            m["default"](a),
                            o["default"](a),
                            q["default"](a),
                            s["default"](a)
                    }
                    b.__esModule = !0,
                        b.registerDefaultHelpers = e;
                    var f = c(153),
                        g = d(f),
                        h = c(154),
                        i = d(h),
                        j = c(155),
                        k = d(j),
                        l = c(156),
                        m = d(l),
                        n = c(157),
                        o = d(n),
                        p = c(158),
                        q = d(p),
                        r = c(159),
                        s = d(r)
                },
                function(a, b, c) {
                    "use strict";
                    b.__esModule = !0;
                    var d = c(13);
                    b["default"] = function(a) {
                        a.registerHelper("blockHelperMissing",
                            function(b, c) {
                                var e = c.inverse,
                                    f = c.fn;
                                if (!0 === b) return f(this);
                                if (!1 === b || null == b) return e(this);
                                if (d.isArray(b)) return b.length > 0 ? (c.ids && (c.ids = [c.name]), a.helpers.each(b, c)) : e(this);
                                if (c.data && c.ids) {
                                    var g = d.createFrame(c.data);
                                    g.contextPath = d.appendContextPath(c.data.contextPath, c.name),
                                        c = {
                                            data: g
                                        }
                                }
                                return f(b, c)
                            })
                    },
                        a.exports = b["default"]
                },
                function(a, b, c) {
                    "use strict";
                    b.__esModule = !0;
                    var d = c(13),
                        e = c(23),
                        f = function(a) {
                            return a && a.__esModule ? a: {
                                "default": a
                            }
                        } (e);
                    b["default"] = function(a) {
                        a.registerHelper("each",
                            function(a, b) {
                                function c(b, c, f) {
                                    j && (j.key = b, j.index = c, j.first = 0 === c, j.last = !!f, k && (j.contextPath = k + b)),
                                        i += e(a[b], {
                                            data: j,
                                            blockParams: d.blockParams([a[b], b], [k + b, null])
                                        })
                                }
                                if (!b) throw new f["default"]("Must pass iterator to #each");
                                var e = b.fn,
                                    g = b.inverse,
                                    h = 0,
                                    i = "",
                                    j = void 0,
                                    k = void 0;
                                if (b.data && b.ids && (k = d.appendContextPath(b.data.contextPath, b.ids[0]) + "."), d.isFunction(a) && (a = a.call(this)), b.data && (j = d.createFrame(b.data)), a && "object" == typeof a) if (d.isArray(a)) for (var l = a.length; h < l; h++) h in a && c(h, h, h === a.length - 1);
                                else {
                                    var m = void 0;
                                    for (var n in a) a.hasOwnProperty(n) && (void 0 !== m && c(m, h - 1), m = n, h++);
                                    void 0 !== m && c(m, h - 1, !0)
                                }
                                return 0 === h && (i = g(this)),
                                    i
                            })
                    },
                        a.exports = b["default"]
                },
                function(a, b, c) {
                    "use strict";
                    b.__esModule = !0;
                    var d = c(23),
                        e = function(a) {
                            return a && a.__esModule ? a: {
                                "default": a
                            }
                        } (d);
                    b["default"] = function(a) {
                        a.registerHelper("helperMissing",
                            function() {
                                if (1 !== arguments.length) throw new e["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"')
                            })
                    },
                        a.exports = b["default"]
                },
                function(a, b, c) {
                    "use strict";
                    b.__esModule = !0;
                    var d = c(13);
                    b["default"] = function(a) {
                        a.registerHelper("if",
                            function(a, b) {
                                return d.isFunction(a) && (a = a.call(this)),
                                    !b.hash.includeZero && !a || d.isEmpty(a) ? b.inverse(this) : b.fn(this)
                            }),
                            a.registerHelper("unless",
                                function(b, c) {
                                    return a.helpers["if"].call(this, b, {
                                        fn: c.inverse,
                                        inverse: c.fn,
                                        hash: c.hash
                                    })
                                })
                    },
                        a.exports = b["default"]
                },
                function(a, b) {
                    "use strict";
                    b.__esModule = !0,
                        b["default"] = function(a) {
                            a.registerHelper("log",
                                function() {
                                    for (var b = [void 0], c = arguments[arguments.length - 1], d = 0; d < arguments.length - 1; d++) b.push(arguments[d]);
                                    var e = 1;
                                    null != c.hash.level ? e = c.hash.level: c.data && null != c.data.level && (e = c.data.level),
                                        b[0] = e,
                                        a.log.apply(a, b)
                                })
                        },
                        a.exports = b["default"]
                },
                function(a, b) {
                    "use strict";
                    b.__esModule = !0,
                        b["default"] = function(a) {
                            a.registerHelper("lookup",
                                function(a, b) {
                                    return a && a[b]
                                })
                        },
                        a.exports = b["default"]
                },
                function(a, b, c) {
                    "use strict";
                    b.__esModule = !0;
                    var d = c(13);
                    b["default"] = function(a) {
                        a.registerHelper("with",
                            function(a, b) {
                                d.isFunction(a) && (a = a.call(this));
                                var c = b.fn;
                                if (d.isEmpty(a)) return b.inverse(this);
                                var e = b.data;
                                return b.data && b.ids && (e = d.createFrame(b.data), e.contextPath = d.appendContextPath(b.data.contextPath, b.ids[0])),
                                    c(a, {
                                        data: e,
                                        blockParams: d.blockParams([a], [e && e.contextPath])
                                    })
                            })
                    },
                        a.exports = b["default"]
                },
                function(a, b, c) {
                    "use strict";
                    b.__esModule = !0;
                    var d = c(13),
                        e = {
                            methodMap: ["debug", "info", "warn", "error"],
                            level: "info",
                            lookupLevel: function(a) {
                                if ("string" == typeof a) {
                                    var b = d.indexOf(e.methodMap, a.toLowerCase());
                                    a = b >= 0 ? b: parseInt(a, 10)
                                }
                                return a
                            },
                            log: function(a) {
                                if (a = e.lookupLevel(a), "undefined" != typeof console && e.lookupLevel(e.level) <= a) {
                                    var b = e.methodMap[a];
                                    console[b] || (b = "log");
                                    for (var c = arguments.length,
                                             d = Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++) d[f - 1] = arguments[f];
                                    console[b].apply(console, d)
                                }
                            }
                        };
                    b["default"] = e,
                        a.exports = b["default"]
                },
                function(a, b) { (function(c) {
                    "use strict";
                    b.__esModule = !0,
                        b["default"] = function(a) {
                            var b = void 0 !== c ? c: window,
                                d = b.Handlebars;
                            a.noConflict = function() {
                                return b.Handlebars === a && (b.Handlebars = d),
                                    a
                            }
                        },
                        a.exports = b["default"]
                }).call(b,
                    function() {
                        return this
                    } ())
                },
                function(a, b, c) {
                    "use strict";
                    function d(a) {
                        var b = a && a[0] || 1,
                            c = p.COMPILER_REVISION;
                        if (b !== c) {
                            if (b < c) {
                                var d = p.REVISION_CHANGES[c],
                                    e = p.REVISION_CHANGES[b];
                                throw new o["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").")
                            }
                            throw new o["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").")
                        }
                    }
                    function e(a, b) {
                        function c(c, d, e) {
                            e.hash && (d = m.extend({},
                                d, e.hash), e.ids && (e.ids[0] = !0)),
                                c = b.VM.resolvePartial.call(this, c, d, e);
                            var f = b.VM.invokePartial.call(this, c, d, e);
                            if (null == f && b.compile && (e.partials[e.name] = b.compile(c, a.compilerOptions, b), f = e.partials[e.name](d, e)), null != f) {
                                if (e.indent) {
                                    for (var g = f.split("\n"), h = 0, i = g.length; h < i && (g[h] || h + 1 !== i); h++) g[h] = e.indent + g[h];
                                    f = g.join("\n")
                                }
                                return f
                            }
                            throw new o["default"]("The partial " + e.name + " could not be compiled when running in runtime-only mode")
                        }
                        function d(b) {
                            function c(b) {
                                return "" + a.main(e, b, e.helpers, e.partials, g, i, h)
                            }
                            var f = arguments.length <= 1 || void 0 === arguments[1] ? {}: arguments[1],
                                g = f.data;
                            d._setup(f),
                            !f.partial && a.useData && (g = j(b, g));
                            var h = void 0,
                                i = a.useBlockParams ? [] : void 0;
                            return a.useDepths && (h = f.depths ? b !== f.depths[0] ? [b].concat(f.depths) : f.depths: [b]),
                                (c = k(a.main, c, e, f.depths || [], g, i))(b, f)
                        }
                        if (!b) throw new o["default"]("No environment passed to template");
                        if (!a || !a.main) throw new o["default"]("Unknown template object: " + typeof a);
                        a.main.decorator = a.main_d,
                            b.VM.checkRevision(a.compiler);
                        var e = {
                            strict: function(a, b) {
                                if (! (b in a)) throw new o["default"]('"' + b + '" not defined in ' + a);
                                return a[b]
                            },
                            lookup: function(a, b) {
                                for (var c = a.length,
                                         d = 0; d < c; d++) if (a[d] && null != a[d][b]) return a[d][b]
                            },
                            lambda: function(a, b) {
                                return "function" == typeof a ? a.call(b) : a
                            },
                            escapeExpression: m.escapeExpression,
                            invokePartial: c,
                            fn: function(b) {
                                var c = a[b];
                                return c.decorator = a[b + "_d"],
                                    c
                            },
                            programs: [],
                            program: function(a, b, c, d, e) {
                                var g = this.programs[a],
                                    h = this.fn(a);
                                return b || e || d || c ? g = f(this, a, h, b, c, d, e) : g || (g = this.programs[a] = f(this, a, h)),
                                    g
                            },
                            data: function(a, b) {
                                for (; a && b--;) a = a._parent;
                                return a
                            },
                            merge: function(a, b) {
                                var c = a || b;
                                return a && b && a !== b && (c = m.extend({},
                                    b, a)),
                                    c
                            },
                            noop: b.VM.noop,
                            compilerInfo: a.compiler
                        };
                        return d.isTop = !0,
                            d._setup = function(c) {
                                c.partial ? (e.helpers = c.helpers, e.partials = c.partials, e.decorators = c.decorators) : (e.helpers = e.merge(c.helpers, b.helpers), a.usePartial && (e.partials = e.merge(c.partials, b.partials)), (a.usePartial || a.useDecorators) && (e.decorators = e.merge(c.decorators, b.decorators)))
                            },
                            d._child = function(b, c, d, g) {
                                if (a.useBlockParams && !d) throw new o["default"]("must pass block params");
                                if (a.useDepths && !g) throw new o["default"]("must pass parent depths");
                                return f(e, b, a[b], c, 0, d, g)
                            },
                            d
                    }
                    function f(a, b, c, d, e, f, g) {
                        function h(b) {
                            var e = arguments.length <= 1 || void 0 === arguments[1] ? {}: arguments[1],
                                h = g;
                            return g && b !== g[0] && (h = [b].concat(g)),
                                c(a, b, a.helpers, a.partials, e.data || d, f && [e.blockParams].concat(f), h)
                        }
                        return h = k(c, h, a, g, d, f),
                            h.program = b,
                            h.depth = g ? g.length: 0,
                            h.blockParams = e || 0,
                            h
                    }
                    function g(a, b, c) {
                        return a ? a.call || c.name || (c.name = a, a = c.partials[a]) : a = "@partial-block" === c.name ? c.data["partial-block"] : c.partials[c.name],
                            a
                    }
                    function h(a, b, c) {
                        c.partial = !0,
                        c.ids && (c.data.contextPath = c.ids[0] || c.data.contextPath);
                        var d = void 0;
                        if (c.fn && c.fn !== i && (c.data = p.createFrame(c.data), d = c.data["partial-block"] = c.fn, d.partials && (c.partials = m.extend({},
                                c.partials, d.partials))), void 0 === a && d && (a = d), void 0 === a) throw new o["default"]("The partial " + c.name + " could not be found");
                        if (a instanceof Function) return a(b, c)
                    }
                    function i() {
                        return ""
                    }
                    function j(a, b) {
                        return b && "root" in b || (b = b ? p.createFrame(b) : {},
                            b.root = a),
                            b
                    }
                    function k(a, b, c, d, e, f) {
                        if (a.decorator) {
                            var g = {};
                            b = a.decorator(b, g, c, d && d[0], e, f, d),
                                m.extend(b, g)
                        }
                        return b
                    }
                    b.__esModule = !0,
                        b.checkRevision = d,
                        b.template = e,
                        b.wrapProgram = f,
                        b.resolvePartial = g,
                        b.invokePartial = h,
                        b.noop = i;
                    var l = c(13),
                        m = function(a) {
                            if (a && a.__esModule) return a;
                            var b = {};
                            if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                            return b["default"] = a,
                                b
                        } (l),
                        n = c(23),
                        o = function(a) {
                            return a && a.__esModule ? a: {
                                "default": a
                            }
                        } (n),
                        p = c(67)
                },
                function(a, b) {
                    "use strict";
                    function c(a) {
                        this.string = a
                    }
                    b.__esModule = !0,
                        c.prototype.toString = c.prototype.toHTML = function() {
                            return "" + this.string
                        },
                        b["default"] = c,
                        a.exports = b["default"]
                },
                , ,
                function(a, b, c) {
                    var d = c(10);
                    a.exports = (d["default"] || d).template({
                        compiler: [7, ">= 4.0.0"],
                        main: function(a, b, c, d, e) {
                            return '<div class="jw-adv jw-reset">\n    <div class="adv-countdown"></div>\n    <div class="adv-close">X</div>\n</div>'
                        },
                        useData: !0
                    })
                },
                function(a, b, c) {
                    var d = c(10);
                    a.exports = (d["default"] || d).template({
                        compiler: [7, ">= 4.0.0"],
                        main: function(a, b, c, d, e) {
                            return '<div class="jw-display-icon-container jw-background-color jw-reset">\n    <div class="jw-icon jw-icon-display jw-button-color jw-reset"></div>\n</div>\n'
                        },
                        useData: !0
                    })
                },
                function(a, b, c) {
                    var d = c(10);
                    a.exports = (d["default"] || d).template({
                        1 : function(a, b, c, d, e) {
                            var f, g, h = null != b ? b: {};
                            return '    <div class="jw-dock-button jw-background-color jw-reset' + (null != (f = c["if"].call(h, null != b ? b.btnClass: b, {
                                    name: "if",
                                    hash: {},
                                    fn: a.program(2, e, 0),
                                    inverse: a.noop,
                                    data: e
                                })) ? f: "") + '" button="' + a.escapeExpression((g = null != (g = c.id || (null != b ? b.id: b)) ? g: c.helperMissing, "function" == typeof g ? g.call(h, {
                                    name: "id",
                                    hash: {},
                                    data: e
                                }) : g)) + '">\n        <div class="jw-icon jw-dock-image jw-reset" ' + (null != (f = c["if"].call(h, null != b ? b.img: b, {
                                    name: "if",
                                    hash: {},
                                    fn: a.program(4, e, 0),
                                    inverse: a.noop,
                                    data: e
                                })) ? f: "") + '></div>\n        <div class="jw-arrow jw-reset"></div>\n' + (null != (f = c["if"].call(h, null != b ? b.tooltip: b, {
                                    name: "if",
                                    hash: {},
                                    fn: a.program(6, e, 0),
                                    inverse: a.noop,
                                    data: e
                                })) ? f: "") + "    </div>\n"
                        },
                        2 : function(a, b, c, d, e) {
                            var f;
                            return " " + a.escapeExpression((f = null != (f = c.btnClass || (null != b ? b.btnClass: b)) ? f: c.helperMissing, "function" == typeof f ? f.call(null != b ? b: {},
                                    {
                                        name: "btnClass",
                                        hash: {},
                                        data: e
                                    }) : f))
                        },
                        4 : function(a, b, c, d, e) {
                            var f;
                            return "style='background-image: url(\"" + a.escapeExpression((f = null != (f = c.img || (null != b ? b.img: b)) ? f: c.helperMissing, "function" == typeof f ? f.call(null != b ? b: {},
                                    {
                                        name: "img",
                                        hash: {},
                                        data: e
                                    }) : f)) + "\")'"
                        },
                        6 : function(a, b, c, d, e) {
                            var f;
                            return '        <div class="jw-overlay jw-background-color jw-reset">\n            <span class="jw-text jw-dock-text jw-reset">' + a.escapeExpression((f = null != (f = c.tooltip || (null != b ? b.tooltip: b)) ? f: c.helperMissing, "function" == typeof f ? f.call(null != b ? b: {},
                                    {
                                        name: "tooltip",
                                        hash: {},
                                        data: e
                                    }) : f)) + "</span>\n        </div>\n"
                        },
                        compiler: [7, ">= 4.0.0"],
                        main: function(a, b, c, d, e) {
                            var f;
                            return '<div class="jw-dock jw-reset">\n' + (null != (f = c.each.call(null != b ? b: {},
                                    b, {
                                        name: "each",
                                        hash: {},
                                        fn: a.program(1, e, 0),
                                        inverse: a.noop,
                                        data: e
                                    })) ? f: "") + "</div>"
                        },
                        useData: !0
                    })
                },
                function(a, b, c) {
                    var d = c(10);
                    a.exports = (d["default"] || d).template({
                        compiler: [7, ">= 4.0.0"],
                        main: function(a, b, c, d, e) {
                            var f, g, h = null != b ? b: {},
                                i = c.helperMissing,
                                j = "function",
                                k = a.escapeExpression;
                            return '<div id="' + k((g = null != (g = c.id || (null != b ? b.id: b)) ? g: i, typeof g === j ? g.call(h, {
                                    name: "id",
                                    hash: {},
                                    data: e
                                }) : g)) + '"class="jw-skin-' + k((g = null != (g = c.skin || (null != b ? b.skin: b)) ? g: i, typeof g === j ? g.call(h, {
                                    name: "skin",
                                    hash: {},
                                    data: e
                                }) : g)) + ' jw-error jw-reset">\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset">' + (null != (g = null != (g = c.title || (null != b ? b.title: b)) ? g: i, f = typeof g === j ? g.call(h, {
                                    name: "title",
                                    hash: {},
                                    data: e
                                }) : g) ? f: "") + '</div>\n        <div class="jw-title-secondary jw-reset">' + k((g = null != (g = c.body || (null != b ? b.body: b)) ? g: i, typeof g === j ? g.call(h, {
                                    name: "body",
                                    hash: {},
                                    data: e
                                }) : g)) + '</div>\n    </div>\n\n    <div class="jw-icon-container jw-reset">\n        <div class="jw-display-icon-container jw-background-color jw-reset">\n            <div class="jw-icon jw-icon-display jw-reset"></div>\n        </div>\n    </div>\n</div>\n'
                        },
                        useData: !0
                    })
                },
                function(a, b, c) {
                    var d = c(10);
                    a.exports = (d["default"] || d).template({
                        1 : function(a, b, c, d, e) {
                            var f;
                            return 'src="' + a.escapeExpression((f = null != (f = c.file || (null != b ? b.file: b)) ? f: c.helperMissing, "function" == typeof f ? f.call(null != b ? b: {},
                                    {
                                        name: "file",
                                        hash: {},
                                        data: e
                                    }) : f)) + '"'
                        },
                        compiler: [7, ">= 4.0.0"],
                        main: function(a, b, c, d, e) {
                            var f;
                            return '<div class="jw-logo jw-reset">\n    <img class="jw-logo-image" ' + (null != (f = c["if"].call(null != b ? b: {},
                                    null != b ? b.file: b, {
                                        name: "if",
                                        hash: {},
                                        fn: a.program(1, e, 0),
                                        inverse: a.noop,
                                        data: e
                                    })) ? f: "") + ">\n</div>"
                        },
                        useData: !0
                    })
                },
                function(a, b, c) {
                    var d = c(10);
                    a.exports = (d["default"] || d).template({
                        1 : function(a, b, c, d, e) {
                            var f, g = a.escapeExpression;
                            return "        <li class='jw-text jw-option jw-item-" + g((f = null != (f = c.index || e && e.index) ? f: c.helperMissing, "function" == typeof f ? f.call(null != b ? b: {},
                                    {
                                        name: "index",
                                        hash: {},
                                        data: e
                                    }) : f)) + " jw-reset'>" + g(a.lambda(null != b ? b.label: b, b)) + "</li>\n"
                        },
                        compiler: [7, ">= 4.0.0"],
                        main: function(a, b, c, d, e) {
                            var f;
                            return '<ul class="jw-menu jw-background-color jw-reset">\n' + (null != (f = c.each.call(null != b ? b: {},
                                    b, {
                                        name: "each",
                                        hash: {},
                                        fn: a.program(1, e, 0),
                                        inverse: a.noop,
                                        data: e
                                    })) ? f: "") + "</ul>"
                        },
                        useData: !0
                    })
                },
                function(a, b, c) {
                    var d = c(10);
                    a.exports = (d["default"] || d).template({
                        compiler: [7, ">= 4.0.0"],
                        main: function(a, b, c, d, e) {
                            var f;
                            return '<div id="' + a.escapeExpression((f = null != (f = c.id || (null != b ? b.id: b)) ? f: c.helperMissing, "function" == typeof f ? f.call(null != b ? b: {},
                                    {
                                        name: "id",
                                        hash: {},
                                        data: e
                                    }) : f)) + '" class="jwplayer jw-reset" tabindex="0">\n    <div class="jw-aspect jw-reset"></div>\n    <div class="jw-media jw-reset"></div>\n    <div class="jw-preview jw-reset"></div>\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset"></div>\n        <div class="jw-title-secondary jw-reset"></div>\n    </div>\n    <div class="jw-overlays jw-reset"></div>\n    <div class="jw-controls jw-reset"></div>\n    <div class="jw-warning jw-reset">\n        用户鉴权失败，请先<a target="_blank" href="http://bce.baidu.com">注册</a>成为百度云用户\n    </div>\n    <div class="jw-marquee">百度云</div>\n</div>'
                        },
                        useData: !0
                    })
                },
                function(a, b, c) {
                    var d = c(10);
                    a.exports = (d["default"] || d).template({
                        1 : function(a, b, c, d, e) {
                            var f;
                            return null != (f = c["if"].call(null != b ? b: {},
                                null != b ? b.active: b, {
                                    name: "if",
                                    hash: {},
                                    fn: a.program(2, e, 0),
                                    inverse: a.program(4, e, 0),
                                    data: e
                                })) ? f: ""
                        },
                        2 : function(a, b, c, d, e) {
                            var f, g = a.escapeExpression,
                                h = a.lambda;
                            return "                <li class='jw-option jw-text jw-active-option jw-item-" + g((f = null != (f = c.index || e && e.index) ? f: c.helperMissing, "function" == typeof f ? f.call(null != b ? b: {},
                                    {
                                        name: "index",
                                        hash: {},
                                        data: e
                                    }) : f)) + ' jw-reset\'>\n                    <span class="jw-label jw-reset"><span class="jw-icon jw-icon-play jw-reset"></span></span>\n                    <span class="jw-name jw-reset" title="' + g(h(null != b ? b.title: b, b)) + '">' + g(h(null != b ? b.title: b, b)) + "</span>\n                </li>\n"
                        },
                        4 : function(a, b, c, d, e) {
                            var f, g = a.escapeExpression,
                                h = a.lambda;
                            return "                <li class='jw-option jw-text jw-item-" + g((f = null != (f = c.index || e && e.index) ? f: c.helperMissing, "function" == typeof f ? f.call(null != b ? b: {},
                                    {
                                        name: "index",
                                        hash: {},
                                        data: e
                                    }) : f)) + ' jw-reset\'>\n                    <span class="jw-label jw-reset">' + g(h(null != b ? b.label: b, b)) + '</span>\n                    <span class="jw-name jw-reset" title="' + g(h(null != b ? b.title: b, b)) + '">' + g(h(null != b ? b.title: b, b)) + "</span>\n                </li>\n"
                        },
                        compiler: [7, ">= 4.0.0"],
                        main: function(a, b, c, d, e) {
                            var f;
                            return '<div class="jw-menu jw-playlist-container jw-background-color jw-reset">\n\n    <div class="jw-tooltip-title jw-reset">\n        <span class="jw-icon jw-icon-inline jw-icon-playlist jw-reset"></span>\n        <span class="jw-text jw-reset">播放列表</span>\n    </div>\n\n    <ul class="jw-playlist jw-reset">\n' + (null != (f = c.each.call(null != b ? b: {},
                                    b, {
                                        name: "each",
                                        hash: {},
                                        fn: a.program(1, e, 0),
                                        inverse: a.noop,
                                        data: e
                                    })) ? f: "") + "    </ul>\n</div>"
                        },
                        useData: !0
                    })
                },
                function(a, b, c) {
                    var d = c(10);
                    a.exports = (d["default"] || d).template({
                        compiler: [7, ">= 4.0.0"],
                        main: function(a, b, c, d, e) {
                            return '<div class="jw-process-adv jw-reset">\n    <a target="_blank"><img/></a>\n</div>'
                        },
                        useData: !0
                    })
                },
                function(a, b, c) {
                    var d = c(10);
                    a.exports = (d["default"] || d).template({
                        1 : function(a, b, c, d, e) {
                            var f, g, h = null != b ? b: {},
                                i = c.helperMissing,
                                j = "function",
                                k = a.escapeExpression;
                            return '        <li class="jw-reset' + (null != (f = c["if"].call(h, null != b ? b.featured: b, {
                                    name: "if",
                                    hash: {},
                                    fn: a.program(2, e, 0),
                                    inverse: a.noop,
                                    data: e
                                })) ? f: "") + '">\n            <a href="' + k((g = null != (g = c.link || (null != b ? b.link: b)) ? g: i, typeof g === j ? g.call(h, {
                                    name: "link",
                                    hash: {},
                                    data: e
                                }) : g)) + '" class="jw-reset" target="_blank">\n' + (null != (f = c["if"].call(h, null != b ? b.showLogo: b, {
                                    name: "if",
                                    hash: {},
                                    fn: a.program(4, e, 0),
                                    inverse: a.noop,
                                    data: e
                                })) ? f: "") + "                " + k((g = null != (g = c.title || (null != b ? b.title: b)) ? g: i, typeof g === j ? g.call(h, {
                                    name: "title",
                                    hash: {},
                                    data: e
                                }) : g)) + "\n            </a>\n        </li>\n"
                        },
                        2 : function(a, b, c, d, e) {
                            return " jw-featured"
                        },
                        4 : function(a, b, c, d, e) {
                            return '                <span class="jw-icon jw-rightclick-logo jw-reset"></span>\n'
                        },
                        compiler: [7, ">= 4.0.0"],
                        main: function(a, b, c, d, e) {
                            var f;
                            return '<div class="jw-rightclick jw-reset">\n    <ul class="jw-reset">\n' + (null != (f = c.each.call(null != b ? b: {},
                                    null != b ? b.items: b, {
                                        name: "each",
                                        hash: {},
                                        fn: a.program(1, e, 0),
                                        inverse: a.noop,
                                        data: e
                                    })) ? f: "") + "    </ul>\n</div>"
                        },
                        useData: !0
                    })
                },
                function(a, b, c) {
                    var d = c(10);
                    a.exports = (d["default"] || d).template({
                        compiler: [7, ">= 4.0.0"],
                        main: function(a, b, c, d, e) {
                            var f, g = null != b ? b: {},
                                h = c.helperMissing,
                                i = "function",
                                j = a.escapeExpression;
                            return '<div class="' + j((f = null != (f = c.className || (null != b ? b.className: b)) ? f: h, typeof f === i ? f.call(g, {
                                    name: "className",
                                    hash: {},
                                    data: e
                                }) : f)) + " " + j((f = null != (f = c.orientation || (null != b ? b.orientation: b)) ? f: h, typeof f === i ? f.call(g, {
                                    name: "orientation",
                                    hash: {},
                                    data: e
                                }) : f)) + ' jw-reset">\n    <div class="jw-slider-container jw-reset">\n        <div class="jw-rail jw-reset"></div>\n        <div class="jw-buffer jw-reset"></div>\n        <div class="jw-progress jw-reset"></div>\n        <div class="jw-knob jw-reset"></div>\n    </div>\n</div>'
                        },
                        useData: !0
                    })
                },
                function(a, b, c) {
                    var d = c(70);
                    "string" == typeof d && (d = [["all-players", d, ""]]),
                        c(68).style(d, "all-players"),
                    d.locals && (a.exports = d.locals)
                },
                function(a, b) {
                    a.exports = "data:application/font-woff;base64,d09GRgABAAAAABBsAAwAAAAAGrQAAQABAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABHAAAABwAAAAceNAbgU9TLzIAAAE4AAAAPAAAAGAPEwN7Y21hcAAAAXQAAABVAAABXhpX0/hnYXNwAAABzAAAAAgAAAAIAAAAEGdseWYAAAHUAAAMJQAAE8DyWIwraGVhZAAADfwAAAAzAAAANg6NKpBoaGVhAAAOMAAAACAAAAAkCUEFmmhtdHgAAA5QAAAATAAAAHh6CweJbG9jYQAADpwAAAA+AAAAPkNgPzJtYXhwAAAO3AAAABgAAAAgACcBc25hbWUAAA70AAAA7wAAAdeoyha4cG9zdAAAD+QAAACIAAABNQYi66kAAAABAAAAANIEFAUAAAAA0dQiKwAAAADU9+VQeJxjYGapYJzAwMrAwDST6QwDA0M/hGZ8zWDMyMmAChgFGDAA4zMJ5gP/DzA4MAMxiI8kp8DACABAdAqXeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCs8k/v/9/x+sSuEZA4T9/4kUK1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAPDoNNAAAAAABAAH//wAPeJy1V1tsXMUZnsuZM+d+8bnsOrZ3vRfvxuuNb+vdzcXebOLcGpQEkoBzAeSEKBdChQuq2kZJ2CoPRSIRQRFBRYoaiUpASkSUqEiNKuqWFqmVUvWhFVKfEA9ItEVCagtSsTf956zXcQK9PMDRnLnPP//MfPP9/yCM2h9BaBVB/6ssoWmE2GXaQKvRWrQBfQOhviA9SMpjleogLo/VSGk0QQJf5gkc+BbJuKNhrAYNgySTtqBBlEruCA5S5VRsMcL1wZ0TGQ2+TSdeeeSRV05sEvnMxM7BwtYEJqsPP7tt27OHV2OS2FogDxJ9/p8X8bebz23FA80/JRKiX+dgkJxMi5FCQnoyGUAVyMSzPZ1mlyVGCylWl9nZ03yUHnzxxfejACvDqI4QnYU1pRDy/AQsoUbKJaF9tDJYUyB0H3murcd9bS1FGik2256gXSvS+0QFgj0D+ZKQb6FuVEAjsGeDOJ9yUy4kEKd4ZpDmywkaGxnAd3LlBI6NkGcok4gxt0kf0KXx+V/s2qdsOH52x8E3zuxSfrqf51dvLUwc31lW3vr+0CZjvb5cI79sfkQ1grfM/Wr99h8cXa/sUe5vvDrdv2VVju/hYw8cGT+lbxgUJ8qW6NWJ8qiMxr+gGS5DBCqN4P+iYoPIjJhzdaOgSfX52WaD1pu98Y17n6jhFfuUjULdq2d2qjf28fyarYXxx3dW1JuN4Q1G3VhukNnmx0SheNPcLP7DJ/OzE0d2r4vNf7Lt2aPr+T7Q/DXQfGUOsuUHjqw5ZUwOLuwnE3pLSEVH0G8QKkW6Cr1ZDVcBYYA6UK0VMrCWdsikZW7hVhBgbHcqjVZgWLXUboOQSecWhwl4Q/NI6muVXmeNfzVY5XNf+ttcxkp5fjHekXLsbtPwFUUn+zFjkgYzKIqjOst0vYNzjUafxnmHri9zwpRh2HQfUbnimUa362T9eNH3UpYZ8OgLTHzTTPlesdNNOU63YQSKopF9hEmSLssg2VWcri9K7nKCtGFYdD9RFe4bRo/jZr3OouenTMvnXFE49y3amGvQ8nxI/vKeE1dUlTFma1rchpWoFucGYwqlRJZlF2pNs9syl5lmTNNcqDJNKx36WdfphsmhrCpqzLazvl+MxVcEftb+6iUiuogjBz2Jfo9QP07nyu5YpZQaDQPXlzM4Ou57T7z0/594K2S+9MRX4dTXK54VP39tYmpqQtoj4rmX4Szl6CxVR1EsmWuSJON9RFMUH7Di2KmOe7EiMDjQ6Wcdp8cADHKV7KO2YaSDCCMggUqUSvhniygB+HBblnVJYni/kBwYINlJufdipYVBD45HSOaKSvZTyzBTwV3om6qRh2pTU7X5K7Up/A8zrukOnCShVGHM4NxSQVs7rmmWzJiqKnEHzjdYEY8VfThfOwZHDt1BsW6Aqx+mLdNsYSVmmsssMAVfvUQU2ZP30WXaS95HPhSWmhFhGmnviu3HxsePbV/RTvHs0pJIUYRNR6rT85BzUBKhqopTfaOV8lgOMAFQKHmtnAtZqHbrBCz0HPxWEFjiz7QSK3DEvZwJHTseuk6IPxRp8z0R437o37Z9HNmCR2PVGI8JKs3zfDVfb1w7d63RfBr/HZ+LsgsJhboos2hHFvk4RCW0Yykj41K55GbKmSDjloK+NoKFi9BG9gB2S8KQcHcprmGpi4AewEu5cfdb09NvHTpEHvYTlg2QUmXOPcNIeV6x69q1sOBd3qzGVK1D4SYwhkSJGbX3utWIoirzMfJRc/Zqsz47i2evXgI42ukwGO6KD3ph2rbimsrxLOF8svlha3BMCHd7oiZbYkzYoIlF7uhBa9DeL2MPWHIZFl0uBSWX3VnK3auEylVL9mEJEyxsEVzkwuev1/bsqUlTIp6/MX3j0KEb0/ga6GUlPS8fXrvWVfS8hG14nMtEUb+jdGiqb2yueglD1OkSBa2ZyffUyO5Ixhu1PeTS1YUtOAVAFvsoN+sqV4Fe+7ywGO8ZDj9QTAL3Oym1eTfpeknbiHHA+OTt2/QyPY2eFz5TupwfzuWjAxNM1Y2DaAWtJY5URoNhn7fpa8nqadTUcguhLVxCajVaHY8gkINNoCNyujw8Ttpl3K6KEBLVjATnZUmRFMIsjas05DxlOzbnFTh/ypmuajGDmYzr3PAUNdkdMAbkpTAeuG7WFXUdzOo05NGVQ5LKjVCiE1vGJTaUddNwazQ53dcNUCI0vjyf03gR3wS+iNtM46ISIKJz/7jlmlzptb0LmnZp2CsLqaIZOtkZy59cP6Jpu57+bp+XccGacazxQHP7nPy2nPfmb9+wmUy4SSVgmBevPq+q5d2HR8prOIzWuh19+vEHNe1EmNzB6Oakd562PPJNAMRKdO8UhFIuXDOVuPTdmRlAeaP9N+vNOm1E/SGmjYV7ilKLN5Q0MLqNmkjEd8ZBsSGADjmYTsUulpCox7NCXrMO8rZC++r2/DC7W4L5b87MtATcM73ADOqlk/Qy6ofCwvugTY1lE5ejB8KC+w0nXaXmsu7xY2d37Dh7dGLi6NkduN68iypDbxd5bOCxcrtdpI2rNxpLqbT/vuTwgo9/mPRSD8mAV7fU5/Zl6rew1/z4Fi5h79b8rlsLfvp5UDaGBuB9sw72KF+j4u2SryaoUJePDOEWM4kKi/KRfLsYXdc8a4mmfy7kagOx2EAtVyhMDnd2Dk8Wfty/asOGVf2psayP/Wwp9U56+fJ0ITc8nCvM32qpkln+6LGnxse/dezR/szA4adOrlt38qnDA2cy5Rd2736hnElsuX/P0NDeBzb33Ai39A9sCjLdD4+V9yb76cIK0AKfv9PmcxxLRYyOBZkDp9PCTPP1mZe+98Nm7uKJizN46pvkaYhnLp640MyImuaVJ4TtwR6bJdPIgHdBTtgwGbwLcCqAnYLUfyzgcwc3bjxwYOPGgyQUsSiRnnYO32yl7fKdtIWN9YjQt4FPeoXWoc/l9BCGKJ8bWwtXfKxaGU1iiKDJxuSVz7LZ7GM9n34KUTb72d0lPPul1QslBAjYgCT6c3oyugcW8lAcOBzhFLxE3cUIl4C93cUIv0qC+b+2/+al69FHT+7d27zU+sm716+LevEj5fbbgLeX6UuA9fvRM+hNXMDjeC+eQajDwmlL8hNKTRtU0znvDuWJkB8kY+XB9jtB9heokeXCFtUJpxAIL50TzX64YEKJLzpHPYWYVEtIvoDzcmWhAyRtB7M1VwWu3RikWTktpy0wggBgP6GN1thogoKnMlqzxwbN9GCQztFIumB2eTSaIx/jrXfPEG5xdcuNreG1uBRNsRYnMc+A0rm06Fiuln4nq3LcNDgBk+oBMbMuZnoS87BEJAKBMcKIEufKBw7FssY4Zphi0ySYEn1VUurqYpqEOzzJkpsfaOBw9lgqVSiDt44GMvSQYSJhQjChUbAdtUMbAaeT9MnwRui1qNK9IgaOnQpisYaxhJnidlW4wZlBRJFQuXnGVnTGhPMHryGD8ZxqwIuHya4qycxRGOZgRwnI0zoNagQPabxHDY2apQWKypap6zu4zVSDqWAxwaPEIhBZclQma5rKqJ1nmgwN0M4NWaImSFVk1TjLYcGgu3CnqWpVcZ38QI+rkq5gortgvOGFLPSjHdkOafVuSngV0zWYnFc1HVYNJo+upi9hucPpjMfjSUVL22I7CTYYTYDi8nCPbJkykziYuWZTphi2TmYqCPWqcQILJj1DKvF79ZihB3q834aNBefRd3t1DlNTODXYokAHJYRBA9sJPpciLasEqs6J2jXURWCE3csYp/AuMKAziFzRBw8C3YWHhkQtSbgSFB6aqRrsMBZbqVlSh2QWZbB9OgbDTWTFdhlXXdXqsh1Fs9wuMLqqOCrCcDQGpEDWwIrMJd/itjGsmbJisoDJXNh3ux/Oy4Itl6mtcsplMVKSmp9SCpuowfwmt2wZH7wAZ6gzN6yoyxzYCkIANPBRvPk9gN4FSn4NVTJWbeNlKvzx6+g03U6PIxN1oSKwRXlsCLt+jIk0x7jcg/vADRepT/M5zmLhWlypVpIYUrwmf8DAhdxJA58+mcMF40C+csowmn88kM+dJlRTT+VzB/Fz54phtXnV4leeLIabOd8cFp+8ApduVzUsnjPxj6DqJyvDcAsoybaE4UqgzX8D/xsA5QAAAHicY2BkYGBglJx1TCcpIp7f5isDNwsDCFz5/kwXRv/f9/8/6wHmBUAuBwMTSBQAjKUO+QB4nGNgZGBgPvD/AAMDG8P/ff93sx5gAIqgADkAqTMG5XicY2GAAMZQCM0ExGwMDAksDAwOrFDMBsVAsQcsDWAaJmbL/IDBGSjmBhRrAOMGBi/mBqDYAaC6Awi1QNoJiF2YQv/vA9KbAI3bDwgAAAAAAAgACAAQABgAggCyAP4BWgJ+A6oDzAQABCIEnAUcBd4F9gYOBh4GNgZ0BoYG6AcKB0QHegesCZQJ4AAAeJxjYGRgYJBjLGTgYAABJgY0AAAPZgCceJyNjTFqw0AQRZ9s2SFOcBmCK3WpJBAEUqYLuHCTwpBSljdCxuyCJGO7ywVyjLSBnCMXyHHyJeYAXpjdN3/n/wHmfBPRn4hbFsYjrngyHkt/M47FH8YTbvgynkr/NZ6xiOZyRfG1lPshoeeRdj0Yj6U/G8fid+MJd3waT6X/GM945I8dR1Jaak56a0oCXj27Y9rWp7Qug1f3iqPiwJ6CRq2rDvtCcKH9wrG1tjTDWP+dkJOpWLumrYNP8iy/OOplkDuFVAr1Q3Ch3rGVtuGsezmYV6p+NpMp+C6pnHdN0bltsjknyzKsQvAZ/zFPTQYAeJx9zckOAVEYROF7btNtnmfiGe5vaG1paK+CRMTGwttLKFu1+VKr47z7v7lzeOeJXESBIjEJJcpUqFKjToMmLdp06NKjz4AhI8ZMmDKLz7fX42LJ834NIXzM0xDk7y/kUq7kWqZyIzO5lTu5lwd5lLk8fTX1TX1T39Q39U19U9/Ut+wNCxs9kg=="
                },
                function(a, b) {
                    a.exports = "data:application/octet-stream;base64,AAEAAAAMAIAAAwBARkZUTXjQG4EAABqYAAAAHE9TLzIPEwN7AAABSAAAAGBjbWFwGlfT+AAAAiAAAAFeZ2FzcAAAABAAABqQAAAACGdseWbyWIwrAAADwAAAE8BoZWFkDo0pogAAAMwAAAA2aGhlYQlBBZoAAAEEAAAAJGhtdHh6CweJAAABqAAAAHhsb2NhQ2A/MgAAA4AAAAA+bWF4cAAnAXMAAAEoAAAAIG5hbWWoyha4AAAXgAAAAddwb3N0BiLrqQAAGVgAAAE1AAEAAAABGZrGLGQ0Xw889QALBAAAAAAA1PfltgAAAADU9+W2/77//wXAA6AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABgD/vv+7BcAAAQAAAAAAAAAAAAAAAAAAAB4AAQAAAB4BcQAIAAAAAAACAAAAAAAAAAAAAAAAAAAAAAADBHgBkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAAAAAeYYA8D/wABAA8AAQAAAAAEAAAAAAAAAAAAAACAAAQQAAAAAAAAAAVUAAAAAAAACAAAABgAAYAQAAEAFAABABQAAQAYAAEAGAABABAAA4ASAAEAEAABABgAAQAYAAD0D4ABDBIAARgQAAIAEAACABIAASgOAAEMEwABABMAAQAQAAEAGAABABAAAQgQAAEQCVf++BAAAsgAAAAMAAAADAAAAHAABAAAAAABYAAMAAQAAABwABAA8AAAACgAIAAIAAgABACDmGP/9//8AAAAAACDmAP/9//8AAP/kGgUAAwABAAoAAAAAAAAAAAABAAMAAAEGAAABAwAAAAAAAAECAAAAAgAAAAAAAAAAAAAAAAAAAAEAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgACAAQABgAggCyAP4BWgJ+A6oDzAQABCIEnAUcBd4F9gYOBh4GNgZ0BoYG6AcKB0QHegesCZQJ4AAAAAEAAAAAAAAAAAACAAA5AgABAAAAAAAAAAAAAgAAOQIAAQAAAAAAAAAAAAIAADkCAAQAYAAABaADgAA6AD8ARABJAAAlFSIuAjU0NjcuATU0PgIzMh4CFRQGBx4BFRQOAiMRMhYXPgE1NC4CIyIOAhUUFhc+ATMRMQEVITUhFxUhNSEXFSE1IQFALlI9IwoKCgpGeqNdXaN6RgoKCgojPVIuKkoeAQI6ZohNTYhmOgECHkoqAlUCC/31lgF1/otKASv+1R4eIz1SLhkuFR9DIl2jekZGeqNdIkMfFS4ZLlI9IwHAHRkNGw5NiGY6OmaITQ4bDRkd/l4DYpWV4JWV4JWVAAAAAQBAAAADwAOAACEAABMUHgIzMj4CNTMUDgIjIi4CNTQ+AjMVIg4CFTGLOmaITU2IZjpLRnqjXV2jekZGeqNdTYhmOgHATYhmOjpmiE1do3pGRnqjXV2jekZLOmaITQAABABAAAAEwAOAAA4AHAAqADEAACUuASchESERLgEnESERIQcjLgMnNR4DFzErAS4DJzUeAxcxKwE1HgEXMQJ/AwUEAgz8RgsrCwQ8/b9TWghEa4xPYqyDUwi1WwcnOkoqPWtSNQi2gS9GDEILKAoCwf7pAwoCAUj8wkJOh2hCCFgIUICnYClIOSYHWAc0UWc8fQtELgAAAAAFAEAAAATAA4AADgAZACcANQA8AAAlLgEnIREhES4BJxEhESEBNSERIS4DJzEBIy4DJzUeAxcxKwEuAyc1HgMXMSsBNR4BFzECgAIGBQIN/EAMKgoEQP3A/oADQP4gGEVZbD4BLVoIRWuMT2Ktg1IJs1oHJztKKjxqUjYJuoAwRAxADCgMAsD+7QIIAwFG/MAB0PD9wD1nVEEX/fBNiGhCB1oIUICoYClIOCYHWgg1UWc7fQxDLgAABABAAAAFwAOAAAQACQBnAMUAADMRIREhASERIREFPgE3PgEzMhYXHgEXHgEXHgEXIy4BJy4BJy4BJy4BIyIGBw4BBw4BBw4BFRQWFx4BFx4BFx4BMzI2Nz4BNzMOAQcOAQcOAQcOASMiJicuAScuAScuATU0Njc+ATcxIT4BNz4BMzIWFx4BFx4BFx4BFyMuAScuAScuAScuASMiBgcOAQcOAQcOARUUFhceARceARceATMyNjc+ATczDgEHDgEHDgEHDgEjIiYnLgEnLgEnLgE1NDY3PgE3MUAFgPqABTb7FATs/CMOIRMULBgSIRAPHA0MFAgICwJbAQUFBAoGBw4ICBAJEBoLCxIHBwoDAwMDAwMKBwcSCwsaEBYhDAwPA1oCCQcIEw0MHBEQJBQYLBQTIQ4NFQcHBwcHBxUNAboNIRQTLBkRIRAQHAwMFQgICgJaAgUEBAsGBg4ICBEIEBsLCxIHBwoDAwMDAwMKBwcSCwsbEBUiDAwOA1sCCQgHFAwMHRARJBMZLBMUIQ0OFAcHCAgHBxQOA4D8gAM1/RYC6tcQGAgJCQUFBQ8KChgPDiETCQ4HBwwFBQgDAwIGBgYRCgoYDQ0cDg0aDQ0XCgoRBgYGDQ0OIhYUJBEQHAsLEgYGBgkICRcPDyQUFCwXGC0VFCQPEBgICQkFBQUPCgoYDw4hEwkOBwcMBQUIAwMCBgYGEQoKGA0NHA4NGg0NFwoKEQYGBg0NDiIWFCQREBwLCxIGBgYJCAkXDw8kFBQsFxgtFRQkDwADAEAAAAXAA4AAEABvAM4AACkBIiY1ETQ2MyEyFhURFAYjAT4BNz4BNz4BMzIWFx4BFx4BFx4BFzMuAScuAScuAScuASMiBgcOAQcOAQcOARUUFhceARceARceATMyNjc+ATc+ATc+ATcjDgEHDgEjIiYnLgEnLgEnLgE1NDY3OQEhPgE3PgE3PgEzMhYXHgEXHgEXHgEXMy4BJy4BJy4BJy4BIyIGBw4BBw4BBw4BFRQWFx4BFx4BFx4BMzI2Nz4BNz4BNz4BNyMOAQcOASMiJicuAScuAScuATU0Njc5AQUs+6g9V1c9BFg9V1c9/JoDCgcGEgsLGxAJEAgIDgYHCgQEBgFaAgoICBQNDBwQDyESGCwUEyEODRUHBwcHBwcVDQ4hExQrGRQkEBAdDAwUCAcJAloDDwwMIhUQGwsLEgYHCgMEAwMEAbkDCgcHEgsLGxAIEQgHDwYGCwQEBQFbAgoICBUMDBwQECERGSwTFCENDhQHBwgIBwcUDg0hFBMsGRMkERAdDAwUBwgJAlsDDgwNIRUQGwsLEgcHCgMDAwMDVz4CVj5XVz79qj5XAfQNGAoLEAYGBgIDAwgFBQwHBw4JEyEODxgKCg4GBQUJCQgYEA8kFBUtGBcsFBQkDw8XCQgJBgYGEgsLHBARJBQWIg4NDQYGBhEKChcNDRoODhsNDRgKCxAGBgYCAwMIBQUMBwcOCRMhDg8YCgoOBgUFCQkIGBAPJBQVLRgXLBQUJA8PFwkICQYGBhILCxwQESQUFiIODQ0GBgYRCgoXDQ0aDg4bDQAAAAABAOAAoAMgAuAAFAAAARQOAiMiLgI1ND4CMzIeAhUDIC1OaTw8aU4tLU5pPDxpTi0BwDxpTi0tTmk8PGlOLS1OaTwAAAMAQAAQBEADkAADABAAHwAANwkBISUyNjU0JiMiBhUUFjMTNCYjIgYVERQWMzI2NRFAAgACAPwAAgAOFRUODhUVDiMVDg4VFQ4OFRADgPyAcBYQDxgWERAWAeYPGBYR/tcPGBYRASkAAgBAAAADwAOAAAcADwAAMxEXNxcHFyEBIREnByc3J0CAsI2wgP5zAfMBjYCwjbCAAY2AsI2wgAOA/nOAsI2wgAAAAAAFAEAAAAXAA4AABAAJABYAMwBPAAAzESERIQEhESERATM1MxEjNSMVIxEzFSUeARceARceARUUBgcOAQcOAQcOASsBETMeARcxBxEzMjY3PgE3PgE3PgE1NCYnLgEnLgEnLgErAUAFgPqABTb7FATs/FS2YGC2ZGQCXBQeDg8UBwcJBgcHEwwMIRMTLBuwsBYqE6BHCRcJChIIBw0FBQUEAwINBwcTDAwgETcDgPyAAzb9FwLp/sCt/kDAwAHArZ0HFA4PIhYVMBsYLhMWIg8OGAoJBwHAAgcHQ/7mBAMCDQcHFwwMIRMRHQ8OGAoJDwQFBQAABAA9AAAFwAOAABAAHQA7AFkAACkBIiY1ETQ2MyEyFhURFAYjASMVIzUjETM1MxUzEQUuAScuAScuASsBETMyNjc+ATc+ATc+ATUuASc5AQcOAQcOASsBETMyFhceARceARceARUUBgcOAQc5AQUq+6k+WFg+BFc+WFg+/bNgs2Rks2ABsAcXDA4fExMnFrCwGywTEx4PDBMHBwYCCAl3CBIKCRQMRzcTHgwMEwcHCwQDBAUFBQ0HWD4CVD5YWD79rD5YAp2trf5AwMABwH0WIg4PFAcHBv5ACQcJGA8OJRMWLBgdMBbiCA0CAwQBHwQFBQ8KChgPDh8REx8PDBcHAAEAQ///A6ADfgCPAAATFCI1JzAmJzQmJy4BBw4BFRwBFR4BFx4BNz4BNz4BMTYyFTAUBxQWFx4BFx4BMzI2Nz4BNz4BNz4DMTYyFTAOAhUUFhceARcWNjc+ATc+ATc+ATc+Azc8ATU0JicmBgcOAzEGIjUwPAI1NCYnJgYHDgEHDgMxBiI1MCYnLgEnJgYHDgExFZAGBAgECAIFDgoHCQMWBwchDxAPBwc2BQQDAwcFCwkKFwwFDQUHCwcMEwgJHxwVBQUDBAMIBQcVEREkEQwTCAkSBQ4ZDAYyOC8ECQcMFgQDPUg8BAUvJBEiERAWCgYiJRwFBQQCAxgoJyYKBywBugUFDBgPBQoHBQQCAw0HBwsHFGsOEQ0HCCAPE5MKCp0wEzURDBMIBwUEAgUKBw8jDhRDQjEKClNzeCUTIxEQGAgHAQoHFQoRJRAnTSYTr8msDwUGAgcNAwQICQaVrY8JCTVUZjE1OwcCBQoKHBALYGpVCgp6Fh9PBQNHHxOQAwAAAAACAEYAAAQ2A4AABAAIAAAhETMRIwkCEQPGcHD8gAOA/IADgPyAA4D+QP5AA4AAAAACAIAAAAOAA4AABAAJAAAhESERIQEhESERAoABAP8A/gABAP8AA4D8gAOA/IADgAABAIAAAAQAA4AAAwAACQERAQQA/IADgAHA/kADgP5AAAIASgAABDoDgAAEAAgAADMRIxEzCQIRunBwA4D8gAOAA4D8gAOA/kD+QAOAAAAAAAEAQwAgA0MDoAApAAABHgEVFA4CIyIuAjU0PgIzNQ0BNSIOAhUUHgIzMj4CNTQmJzcDDRocPGmMT0+MaD09aIxPAUD+wDxpTi0tTmk8PGlOLRYTUwJjK2M1T4xoPT1ojE9PjGg9gK2zgC1OaTw8aU4tLU5pPClLHzAAAAABAEAAZgIgAxMABgAAExEzJRElI0DNARP+7c0BMwETzf1TzQAEAEAAAASQA4AAFwArADoAQQAAISc+AzU0LgInNx4DFRQOAgcxLwE+ATU0Jic3HgMVDgMHMSc+ATU0Jic3HgEVFAYHJwURMyURJSMD2iomPisXFys+JioqQzAZGTBDKqQpOUREOSkhNCQUARQkMyHDIigoIiomMDAmKv3NzQET/u3NIyheaXI8PHFpXikjK2ZyfEFBfHJmK4MjNZFUVJE1Ix5IUFgvL1lRRx2zFkgpK0YVIxxcNDVZHykDARPN/VPNAAAAAgBAAAADwwOAAAcADwAAARchERc3FwcBByc3JyERJwMqcP6pcJd5mf4mlnqWcAFXbQJzcAFXcJZ6k/4jlnqWcP6qbAADAEABEwXAAmAADAAZACYAAAEUBiMiJjU0NjMyFhUhFAYjIiY1NDYzMhYVIRQGIyImNTQ2MzIWFQGNYkVFYWFFRWICFmFFRWJiRUVhAh1hRUViYkVFYQG6RWJiRUVhYUVFYmJFRWFhRUViYkVFYWFFAAAAAAEAQgACA74DfgAgAAABFxYUBwYiLwEHBiInJjQ/AScmNDc2Mh8BNzYyFxYUDwECo/ckJCRjHfb2JGMdJCT39yQkJGMd9vYkYx0kJPcBwPYkYx0kJPf3JCQkYx329iRjHSQk9/ckJCRjHfYAAAYARAAEA7wDfAAEAAkADgATABgAHQAAASEVITURIRUhNREhFSE1ATMVIzURMxUjNREzFSM1AacCFf3rAhX96wIV/ev+nbKysrKysgN8WVn+nVlZ/p1ZWQLGsrL+nbKy/p2ysgAI/74AZgKaA5cAKQBQAH8ArwEqATwBWQFwAAASDgEiDgQUHgg+Ci4JIiYTPgE3PgE3PgE3PgE3PgEnLgI0NS4BBw4BBw4BBwYUFRQWFx4BFwUmFicuAScmBicuASMmBgciJgcOAQcUFg4BBw4BBw4CFA4BBwYWFx4BFzc+ATchLgI0NS4BJyoBJwY2Bw4BBw4CFAcOARceARceARczPgE3PgE3NjQ+AjQ+ATckBiIGIg4HFA4VFAYUHgoyPgUyHgMyHgIyPg80Lg0iLhUiJgMOAQcGFgcOARUGMhceARc3JxcHIy4BJy4BLwE+ATc+Azc+ATc+ATM+AT8BMxceARczPwEfAQcjJhYnJiIjLgEnNTczygYJBhgNDAcCBAMCEw8HBwUbBQ0TBAUTAQQCBAICBAIFBQIFAggYBwjiEAMBBgoFBwEFAQMBDQ0CAQMCCzkfBBsbBQoEARITBA4G/uIKCgcHHQ4JAwgDBQIJBwoBBAILFgUBAgQBAgIBAgMBAgMBAg8QCRIKMRQhDQIlBgMCBiAOAwgcLRcKDgYJAQMBAQoBAQQBBQgRGzYHDAcFDAIBAQQBAgMG/oMPCAsFBQYFBQkGBg4MBQcmCQwJCAcFBhEJBAYFEAgFAQcFBQUCAwIGChkMAwwVVgoHHQkWDD4OChUICQUaCUISBw8FCQwFCQQFBQgFBQEFBQEFAgYEEAkFBgoKCQUDDycFCgYIBQUJBAUHDAYEAw0EBgUIBgkMjAcKBQcCAgEEAwMEAwkONwFAAocLGAkECwgBAgsRAwQFCAMBAQIDBgMSJBIEOlQDAgc3AQM7AQKQCQoLAgQBDgoHAzoDlwEGEhAZGBgYHwgKIg8FAgUCAgEMBQMeBgUQBjAdBg4NBgUEBwkSBf7+BgMBAwgDBgUJAQECEzcYAgUGBQIdLwkCFCALFwwLFQsYKQ8DBQIVDg4UESALBwMBAQMCBAMBAQQVCwECAwQCBQoFAwQGBwcIBBo2FQkLBwIJGy8bAgMFAg8gBQUHAwYHCgwBAQQFAh0tJQgRCAsRCgQEBAMOBAIDBAEDBQQEIT4FBQYBBQEHBQoOBBIEDSwGDwUGCwEFDgoCBggPEQUHCREJDhsPEAgKDhEbBQUECQEEAQUCBQEGAQUBBwQCAwIFAQwBCAYHBBQOBw8MMAoNBggNBRUFBgcFDQUHDykJCAcOBgQQBgMPCQcDBwYFAgUBBAT+9gMDBQgDCgMFBA0HDg8GAWKTAgYKCwURFjYJGhADBgUCAgIDAQEBAQMBR9cHAQWTAwLEAgICBgEJDwyaAwAAAwCyAH4DTgNrAA0AGwAsAAABNTQvAREUFwU1NC8BJgUHBh0BJTY1EQcGHQEUAycmBwUXFj8BNjc2HwEWPwEBOydhDAEqJnwMAX58JgEqDGEnNn0MDP7UYScmfgIDCgl9JyZiAYuNLBY3/q0OB6pvLBZHBwdHFixvqgcOAVM3FiyNDQGfRwcHqzgWFkgBAQMFSBYWOAAAAAAAAA4ArgABAAAAAAABAAwAGgABAAAAAAACAAcANwABAAAAAAADAAwAWQABAAAAAAAEAAwAgAABAAAAAAAFAAsApQABAAAAAAAGAAwAywABAAAAAAAKABoBDgADAAEECQABABgAAAADAAEECQACAA4AJwADAAEECQADABgAPwADAAEECQAEABgAZgADAAEECQAFABYAjQADAAEECQAGABgAsQADAAEECQAKADQA2ABqAHcALQBzAGkAeAAtAGkAYwBvAG4AcwAAanctc2l4LWljb25zAABSAGUAZwB1AGwAYQByAABSZWd1bGFyAABqAHcALQBzAGkAeAAtAGkAYwBvAG4AcwAAanctc2l4LWljb25zAABqAHcALQBzAGkAeAAtAGkAYwBvAG4AcwAAanctc2l4LWljb25zAABWAGUAcgBzAGkAbwBuACAAMQAuADEAAFZlcnNpb24gMS4xAABqAHcALQBzAGkAeAAtAGkAYwBvAG4AcwAAanctc2l4LWljb25zAABGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAEZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAAABAgACAQMAAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcBmdseXBoMQd1bmkwMDAxB3VuaUU2MDAHdW5pRTYwMQd1bmlFNjAyB3VuaUU2MDMHdW5pRTYwNAd1bmlFNjA1B3VuaUU2MDYHdW5pRTYwNwd1bmlFNjA4B3VuaUU2MDkHdW5pRTYwQQd1bmlFNjBCB3VuaUU2MEMHdW5pRTYwRAd1bmlFNjBFB3VuaUU2MEYHdW5pRTYxMAd1bmlFNjExB3VuaUU2MTIHdW5pRTYxMwd1bmlFNjE0B3VuaUU2MTUHdW5pRTYxNgd1bmlFNjE3B3VuaUU2MTgAAAAAAQAB//8ADwAAAAEAAAAA0gQUBQAAAADR1CIrAAAAANT35VA="
                }])
        });