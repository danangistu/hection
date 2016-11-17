if (! function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function n(t) {
            var e = "length" in t && t.length,
                n = ot.type(t);
            return "function" !== n && !ot.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }

        function i(t, e, n) {
            if (ot.isFunction(e)) return ot.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return ot.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (ft.test(e)) return ot.filter(e, t, n);
                e = ot.filter(e, t)
            }
            return ot.grep(t, function(t) {
                return ot.inArray(t, e) >= 0 !== n
            })
        }

        function o(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function r(t) {
            var e = wt[t] = {};
            return ot.each(t.match(bt) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function s() {
            ht.addEventListener ? (ht.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (ht.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
        }

        function a() {
            (ht.addEventListener || "load" === event.type || "complete" === ht.readyState) && (s(), ot.ready())
        }

        function l(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(Et, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : kt.test(n) ? ot.parseJSON(n) : n)
                    } catch (o) {}
                    ot.data(t, e, n)
                } else n = void 0
            }
            return n
        }

        function c(t) {
            var e;
            for (e in t)
                if (("data" !== e || !ot.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function u(t, e, n, i) {
            if (ot.acceptData(t)) {
                var o, r, s = ot.expando,
                    a = t.nodeType,
                    l = a ? ot.cache : t,
                    c = a ? t[s] : t[s] && s;
                if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof e) return c || (c = a ? t[s] = Q.pop() || ot.guid++ : s), l[c] || (l[c] = a ? {} : {
                    toJSON: ot.noop
                }), ("object" == typeof e || "function" == typeof e) && (i ? l[c] = ot.extend(l[c], e) : l[c].data = ot.extend(l[c].data, e)), r = l[c], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[ot.camelCase(e)] = n), "string" == typeof e ? (o = r[e], null == o && (o = r[ot.camelCase(e)])) : o = r, o
            }
        }

        function d(t, e, n) {
            if (ot.acceptData(t)) {
                var i, o, r = t.nodeType,
                    s = r ? ot.cache : t,
                    a = r ? t[ot.expando] : ot.expando;
                if (s[a]) {
                    if (e && (i = n ? s[a] : s[a].data)) {
                        ot.isArray(e) ? e = e.concat(ot.map(e, ot.camelCase)) : e in i ? e = [e] : (e = ot.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                        for (; o--;) delete i[e[o]];
                        if (n ? !c(i) : !ot.isEmptyObject(i)) return
                    }(n || (delete s[a].data, c(s[a]))) && (r ? ot.cleanData([t], !0) : nt.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
                }
            }
        }

        function f() {
            return !0
        }

        function p() {
            return !1
        }

        function h() {
            try {
                return ht.activeElement
            } catch (t) {}
        }

        function g(t) {
            var e = Ht.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }

        function m(t, e) {
            var n, i, o = 0,
                r = typeof t.getElementsByTagName !== Ct ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Ct ? t.querySelectorAll(e || "*") : void 0;
            if (!r)
                for (r = [], n = t.childNodes || t; null != (i = n[o]); o++) !e || ot.nodeName(i, e) ? r.push(i) : ot.merge(r, m(i, e));
            return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], r) : r
        }

        function v(t) {
            Dt.test(t.type) && (t.defaultChecked = t.checked)
        }

        function y(t, e) {
            return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function b(t) {
            return t.type = (null !== ot.find.attr(t, "type")) + "/" + t.type, t
        }

        function w(t) {
            var e = Xt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function x(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) ot._data(n, "globalEval", !e || ot._data(e[i], "globalEval"))
        }

        function T(t, e) {
            if (1 === e.nodeType && ot.hasData(t)) {
                var n, i, o, r = ot._data(t),
                    s = ot._data(e, r),
                    a = r.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (n in a)
                        for (i = 0, o = a[n].length; o > i; i++) ot.event.add(e, n, a[n][i])
                }
                s.data && (s.data = ot.extend({}, s.data))
            }
        }

        function C(t, e) {
            var n, i, o;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !nt.noCloneEvent && e[ot.expando]) {
                    o = ot._data(e);
                    for (i in o.events) ot.removeEvent(e, i, o.handle);
                    e.removeAttribute(ot.expando)
                }
                "script" === n && e.text !== t.text ? (b(e).text = t.text, w(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), nt.html5Clone && t.innerHTML && !ot.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Dt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }

        function k(e, n) {
            var i, o = ot(n.createElement(e)).appendTo(n.body),
                r = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0])) ? i.display : ot.css(o[0], "display");
            return o.detach(), r
        }

        function E(t) {
            var e = ht,
                n = Zt[t];
            return n || (n = k(t, e), "none" !== n && n || (Yt = (Yt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Yt[0].contentWindow || Yt[0].contentDocument).document, e.write(), e.close(), n = k(t, e), Yt.detach()), Zt[t] = n), n
        }

        function N(t, e) {
            return {
                get: function() {
                    var n = t();
                    if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function S(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = fe.length; o--;)
                if (e = fe[o] + n, e in t) return e;
            return i
        }

        function $(t, e) {
            for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (r[s] = ot._data(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && $t(i) && (r[s] = ot._data(i, "olddisplay", E(i.nodeName)))) : (o = $t(i), (n && "none" !== n || !o) && ot._data(i, "olddisplay", o ? n : ot.css(i, "display"))));
            for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
            return t
        }

        function A(t, e, n) {
            var i = le.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function D(t, e, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += ot.css(t, n + St[r], !0, o)), i ? ("content" === n && (s -= ot.css(t, "padding" + St[r], !0, o)), "margin" !== n && (s -= ot.css(t, "border" + St[r] + "Width", !0, o))) : (s += ot.css(t, "padding" + St[r], !0, o), "padding" !== n && (s += ot.css(t, "border" + St[r] + "Width", !0, o)));
            return s
        }

        function j(t, e, n) {
            var i = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                r = te(t),
                s = nt.boxSizing && "border-box" === ot.css(t, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = ee(t, e, r), (0 > o || null == o) && (o = t.style[e]), ie.test(o)) return o;
                i = s && (nt.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + D(t, e, n || (s ? "border" : "content"), i, r) + "px"
        }

        function L(t, e, n, i, o) {
            return new L.prototype.init(t, e, n, i, o)
        }

        function O() {
            return setTimeout(function() {
                pe = void 0
            }), pe = ot.now()
        }

        function _(t, e) {
            var n, i = {
                    height: t
                },
                o = 0;
            for (e = e ? 1 : 0; 4 > o; o += 2 - e) n = St[o], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function I(t, e, n) {
            for (var i, o = (be[e] || []).concat(be["*"]), r = 0, s = o.length; s > r; r++)
                if (i = o[r].call(n, e, t)) return i
        }

        function H(t, e, n) {
            var i, o, r, s, a, l, c, u, d = this,
                f = {},
                p = t.style,
                h = t.nodeType && $t(t),
                g = ot._data(t, "fxshow");
            n.queue || (a = ot._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, d.always(function() {
                d.always(function() {
                    a.unqueued--, ot.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = ot.css(t, "display"), u = "none" === c ? ot._data(t, "olddisplay") || E(t.nodeName) : c, "inline" === u && "none" === ot.css(t, "float") && (nt.inlineBlockNeedsLayout && "inline" !== E(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (o = e[i], ge.exec(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[i]) continue;
                        h = !0
                    }
                    f[i] = g && g[i] || ot.style(t, i)
                } else c = void 0;
            if (ot.isEmptyObject(f)) "inline" === ("none" === c ? E(t.nodeName) : c) && (p.display = c);
            else {
                g ? "hidden" in g && (h = g.hidden) : g = ot._data(t, "fxshow", {}), r && (g.hidden = !h), h ? ot(t).show() : d.done(function() {
                    ot(t).hide()
                }), d.done(function() {
                    var e;
                    ot._removeData(t, "fxshow");
                    for (e in f) ot.style(t, e, f[e])
                });
                for (i in f) s = I(h ? g[i] : 0, i, d), i in g || (g[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function R(t, e) {
            var n, i, o, r, s;
            for (n in t)
                if (i = ot.camelCase(n), o = e[i], r = t[n], ot.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), s = ot.cssHooks[i], s && "expand" in s) {
                    r = s.expand(r), delete t[i];
                    for (n in r) n in t || (t[n] = r[n], e[n] = o)
                } else e[i] = o
        }

        function F(t, e, n) {
            var i, o, r = 0,
                s = ye.length,
                a = ot.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = pe || O(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
                    return a.notifyWith(t, [c, r, n]), 1 > r && l ? n : (a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: ot.extend({}, e),
                    opts: ot.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: pe || O(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = ot.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) c.tweens[n].run(1);
                        return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (R(u, c.opts.specialEasing); s > r; r++)
                if (i = ye[r].call(c, t, u, c.opts)) return i;
            return ot.map(u, I, c), ot.isFunction(c.opts.start) && c.opts.start.call(t, c), ot.fx.timer(ot.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function P(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    r = e.toLowerCase().match(bt) || [];
                if (ot.isFunction(n))
                    for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function q(t, e, n, i) {
            function o(a) {
                var l;
                return r[a] = !0, ot.each(t[a] || [], function(t, a) {
                    var c = a(e, n, i);
                    return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
                }), l
            }
            var r = {},
                s = t === Be;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function W(t, e) {
            var n, i, o = ot.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && ot.extend(!0, t, n), t
        }

        function M(t, e, n) {
            for (var i, o, r, s, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
            if (o)
                for (s in a)
                    if (a[s] && a[s].test(o)) {
                        l.unshift(s);
                        break
                    }
            if (l[0] in n) r = l[0];
            else {
                for (s in n) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                        r = s;
                        break
                    }
                    i || (i = s)
                }
                r = r || i
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
        }

        function B(t, e, n, i) {
            var o, r, s, a, l, c = {},
                u = t.dataTypes.slice();
            if (u[1])
                for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
            for (r = u.shift(); r;)
                if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (s = c[l + " " + r] || c["* " + r], !s)
                    for (o in c)
                        if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                            s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], u.unshift(a[1]));
                            break
                        }
                if (s !== !0)
                    if (s && t["throws"]) e = s(e);
                    else try {
                        e = s(e)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: s ? d : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function z(t, e, n, i) {
            var o;
            if (ot.isArray(e)) ot.each(e, function(e, o) {
                n || Xe.test(t) ? i(t, o) : z(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
            });
            else if (n || "object" !== ot.type(e)) i(t, e);
            else
                for (o in e) z(t + "[" + o + "]", e[o], n, i)
        }

        function U() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }

        function V() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function X(t) {
            return ot.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }
        var Q = [],
            K = Q.slice,
            G = Q.concat,
            J = Q.push,
            Y = Q.indexOf,
            Z = {},
            tt = Z.toString,
            et = Z.hasOwnProperty,
            nt = {},
            it = "1.11.3",
            ot = function(t, e) {
                return new ot.fn.init(t, e)
            },
            rt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            st = /^-ms-/,
            at = /-([\da-z])/gi,
            lt = function(t, e) {
                return e.toUpperCase()
            };
        ot.fn = ot.prototype = {
            jquery: it,
            constructor: ot,
            selector: "",
            length: 0,
            toArray: function() {
                return K.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : K.call(this)
            },
            pushStack: function(t) {
                var e = ot.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return ot.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(ot.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(K.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: J,
            sort: Q.sort,
            splice: Q.splice
        }, ot.extend = ot.fn.extend = function() {
            var t, e, n, i, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || ot.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (o = arguments[a]))
                    for (i in o) t = s[i], n = o[i], s !== n && (c && n && (ot.isPlainObject(n) || (e = ot.isArray(n))) ? (e ? (e = !1, r = t && ot.isArray(t) ? t : []) : r = t && ot.isPlainObject(t) ? t : {}, s[i] = ot.extend(c, r, n)) : void 0 !== n && (s[i] = n));
            return s
        }, ot.extend({
            expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === ot.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === ot.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return !ot.isArray(t) && t - parseFloat(t) + 1 >= 0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function(t) {
                var e;
                if (!t || "object" !== ot.type(t) || t.nodeType || ot.isWindow(t)) return !1;
                try {
                    if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (nt.ownLast)
                    for (e in t) return et.call(t, e);
                for (e in t);
                return void 0 === e || et.call(t, e)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[tt.call(t)] || "object" : typeof t
            },
            globalEval: function(e) {
                e && ot.trim(e) && (t.execScript || function(e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function(t) {
                return t.replace(st, "ms-").replace(at, lt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, i) {
                var o, r = 0,
                    s = t.length,
                    a = n(t);
                if (i) {
                    if (a)
                        for (; s > r && (o = e.apply(t[r], i), o !== !1); r++);
                    else
                        for (r in t)
                            if (o = e.apply(t[r], i), o === !1) break
                } else if (a)
                    for (; s > r && (o = e.call(t[r], r, t[r]), o !== !1); r++);
                else
                    for (r in t)
                        if (o = e.call(t[r], r, t[r]), o === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(rt, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? ot.merge(i, "string" == typeof t ? [t] : t) : J.call(i, t)), i
            },
            inArray: function(t, e, n) {
                var i;
                if (e) {
                    if (Y) return Y.call(e, t, n);
                    for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in e && e[n] === t) return n
                }
                return -1
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, o = t.length; n > i;) t[o++] = e[i++];
                if (n !== n)
                    for (; void 0 !== e[i];) t[o++] = e[i++];
                return t.length = o, t
            },
            grep: function(t, e, n) {
                for (var i, o = [], r = 0, s = t.length, a = !n; s > r; r++) i = !e(t[r], r), i !== a && o.push(t[r]);
                return o
            },
            map: function(t, e, i) {
                var o, r = 0,
                    s = t.length,
                    a = n(t),
                    l = [];
                if (a)
                    for (; s > r; r++) o = e(t[r], r, i), null != o && l.push(o);
                else
                    for (r in t) o = e(t[r], r, i), null != o && l.push(o);
                return G.apply([], l)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, o;
                return "string" == typeof e && (o = t[e], e = t, t = o), ot.isFunction(t) ? (n = K.call(arguments, 2), i = function() {
                    return t.apply(e || this, n.concat(K.call(arguments)))
                }, i.guid = t.guid = t.guid || ot.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: nt
        }), ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            Z["[object " + e + "]"] = e.toLowerCase()
        });
        var ct = function(t) {
            function e(t, e, n, i) {
                var o, r, s, a, l, c, d, p, h, g;
                if ((e ? e.ownerDocument || e : q) !== L && j(e), e = e || L, n = n || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return n;
                if (!i && _) {
                    if (11 !== a && (o = yt.exec(t)))
                        if (s = o[1]) {
                            if (9 === a) {
                                if (r = e.getElementById(s), !r || !r.parentNode) return n;
                                if (r.id === s) return n.push(r), n
                            } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && F(e, r) && r.id === s) return n.push(r), n
                        } else {
                            if (o[2]) return Y.apply(n, e.getElementsByTagName(t)), n;
                            if ((s = o[3]) && x.getElementsByClassName) return Y.apply(n, e.getElementsByClassName(s)), n
                        }
                    if (x.qsa && (!I || !I.test(t))) {
                        if (p = d = P, h = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (c = E(t), (d = e.getAttribute("id")) ? p = d.replace(wt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + f(c[l]);
                            h = bt.test(t) && u(e.parentNode) || e, g = c.join(",")
                        }
                        if (g) try {
                            return Y.apply(n, h.querySelectorAll(g)), n
                        } catch (m) {} finally {
                            d || e.removeAttribute("id")
                        }
                    }
                }
                return S(t.replace(lt, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[P] = !0, t
            }

            function o(t) {
                var e = L.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var n = t.split("|"), i = t.length; i--;) T.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function c(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function u(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function d() {}

            function f(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function p(t, e, n) {
                var i = e.dir,
                    o = n && "parentNode" === i,
                    r = M++;
                return e.first ? function(e, n, r) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) return t(e, n, r)
                } : function(e, n, s) {
                    var a, l, c = [W, r];
                    if (s) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || o) && t(e, n, s)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || o) {
                                if (l = e[P] || (e[P] = {}), (a = l[i]) && a[0] === W && a[1] === r) return c[2] = a[2];
                                if (l[i] = c, c[2] = t(e, n, s)) return !0
                            }
                }
            }

            function h(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function g(t, n, i) {
                for (var o = 0, r = n.length; r > o; o++) e(t, n[o], i);
                return i
            }

            function m(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(r = t[a]) && (!n || n(r, i, o)) && (s.push(r), c && e.push(a));
                return s
            }

            function v(t, e, n, o, r, s) {
                return o && !o[P] && (o = v(o)), r && !r[P] && (r = v(r, s)), i(function(i, s, a, l) {
                    var c, u, d, f = [],
                        p = [],
                        h = s.length,
                        v = i || g(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !i && e ? v : m(v, f, t, a, l),
                        b = n ? r || (i ? t : h || o) ? [] : s : y;
                    if (n && n(y, b, a, l), o)
                        for (c = m(b, p), o(c, [], a, l), u = c.length; u--;)(d = c[u]) && (b[p[u]] = !(y[p[u]] = d));
                    if (i) {
                        if (r || t) {
                            if (r) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                r(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = r ? tt(i, d) : f[u]) > -1 && (i[c] = !(s[c] = d))
                        }
                    } else b = m(b === s ? b.splice(h, b.length) : b), r ? r(null, s, b, l) : Y.apply(s, b)
                })
            }

            function y(t) {
                for (var e, n, i, o = t.length, r = T.relative[t[0].type], s = r || T.relative[" "], a = r ? 1 : 0, l = p(function(t) {
                        return t === e
                    }, s, !0), c = p(function(t) {
                        return tt(e, t) > -1
                    }, s, !0), u = [function(t, n, i) {
                        var o = !r && (i || n !== $) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                        return e = null, o
                    }]; o > a; a++)
                    if (n = T.relative[t[a].type]) u = [p(h(u), n)];
                    else {
                        if (n = T.filter[t[a].type].apply(null, t[a].matches), n[P]) {
                            for (i = ++a; o > i && !T.relative[t[i].type]; i++);
                            return v(a > 1 && h(u), a > 1 && f(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(lt, "$1"), n, i > a && y(t.slice(a, i)), o > i && y(t = t.slice(i)), o > i && f(t))
                        }
                        u.push(n)
                    }
                return h(u)
            }

            function b(t, n) {
                var o = n.length > 0,
                    r = t.length > 0,
                    s = function(i, s, a, l, c) {
                        var u, d, f, p = 0,
                            h = "0",
                            g = i && [],
                            v = [],
                            y = $,
                            b = i || r && T.find.TAG("*", c),
                            w = W += null == y ? 1 : Math.random() || .1,
                            x = b.length;
                        for (c && ($ = s !== L && s); h !== x && null != (u = b[h]); h++) {
                            if (r && u) {
                                for (d = 0; f = t[d++];)
                                    if (f(u, s, a)) {
                                        l.push(u);
                                        break
                                    }
                                c && (W = w)
                            }
                            o && ((u = !f && u) && p--, i && g.push(u))
                        }
                        if (p += h, o && h !== p) {
                            for (d = 0; f = n[d++];) f(g, v, s, a);
                            if (i) {
                                if (p > 0)
                                    for (; h--;) g[h] || v[h] || (v[h] = G.call(l));
                                v = m(v)
                            }
                            Y.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                        }
                        return c && (W = w, $ = y), g
                    };
                return o ? i(s) : s
            }
            var w, x, T, C, k, E, N, S, $, A, D, j, L, O, _, I, H, R, F, P = "sizzle" + 1 * new Date,
                q = t.document,
                W = 0,
                M = 0,
                B = n(),
                z = n(),
                U = n(),
                V = function(t, e) {
                    return t === e && (D = !0), 0
                },
                X = 1 << 31,
                Q = {}.hasOwnProperty,
                K = [],
                G = K.pop,
                J = K.push,
                Y = K.push,
                Z = K.slice,
                tt = function(t, e) {
                    for (var n = 0, i = t.length; i > n; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ot = it.replace("w", "w#"),
                rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]",
                st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
                at = new RegExp(nt + "+", "g"),
                lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                ct = new RegExp("^" + nt + "*," + nt + "*"),
                ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                ft = new RegExp(st),
                pt = new RegExp("^" + ot + "$"),
                ht = {
                    ID: new RegExp("^#(" + it + ")"),
                    CLASS: new RegExp("^\\.(" + it + ")"),
                    TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + rt),
                    PSEUDO: new RegExp("^" + st),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                },
                gt = /^(?:input|select|textarea|button)$/i,
                mt = /^h\d$/i,
                vt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                bt = /[+~]/,
                wt = /'|\\/g,
                xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                Tt = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                Ct = function() {
                    j()
                };
            try {
                Y.apply(K = Z.call(q.childNodes), q.childNodes), K[q.childNodes.length].nodeType
            } catch (kt) {
                Y = {
                    apply: K.length ? function(t, e) {
                        J.apply(t, Z.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            x = e.support = {}, k = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, j = e.setDocument = function(t) {
                var e, n, i = t ? t.ownerDocument || t : q;
                return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, O = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), _ = !k(i), x.attributes = o(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = o(function(t) {
                    return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = vt.test(i.getElementsByClassName), x.getById = o(function(t) {
                    return O.appendChild(t).id = P, !i.getElementsByName || !i.getElementsByName(P).length
                }), x.getById ? (T.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && _) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, T.filter.ID = function(t) {
                    var e = t.replace(xt, Tt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete T.find.ID, T.filter.ID = function(t) {
                    var e = t.replace(xt, Tt);
                    return function(t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), T.find.TAG = x.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, T.find.CLASS = x.getElementsByClassName && function(t, e) {
                    return _ ? e.getElementsByClassName(t) : void 0
                }, H = [], I = [], (x.qsa = vt.test(i.querySelectorAll)) && (o(function(t) {
                    O.appendChild(t).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + P + "-]").length || I.push("~="), t.querySelectorAll(":checked").length || I.push(":checked"), t.querySelectorAll("a#" + P + "+*").length || I.push(".#.+[+~]")
                }), o(function(t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
                })), (x.matchesSelector = vt.test(R = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function(t) {
                    x.disconnectedMatch = R.call(t, "div"), R.call(t, "[s!='']:x"), H.push("!=", st)
                }), I = I.length && new RegExp(I.join("|")), H = H.length && new RegExp(H.join("|")), e = vt.test(O.compareDocumentPosition), F = e || vt.test(O.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, V = e ? function(t, e) {
                    if (t === e) return D = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === q && F(q, t) ? -1 : e === i || e.ownerDocument === q && F(q, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return D = !0, 0;
                    var n, o = 0,
                        r = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        c = [e];
                    if (!r || !a) return t === i ? -1 : e === i ? 1 : r ? -1 : a ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                    if (r === a) return s(t, e);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (n = e; n = n.parentNode;) c.unshift(n);
                    for (; l[o] === c[o];) o++;
                    return o ? s(l[o], c[o]) : l[o] === q ? -1 : c[o] === q ? 1 : 0
                }, i) : L
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== L && j(t), n = n.replace(dt, "='$1']"), !(!x.matchesSelector || !_ || H && H.test(n) || I && I.test(n))) try {
                    var i = R.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (o) {}
                return e(n, L, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== L && j(t), F(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== L && j(t);
                var n = T.attrHandle[e.toLowerCase()],
                    i = n && Q.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !_) : void 0;
                return void 0 !== i ? i : x.attributes || !_ ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    o = 0;
                if (D = !x.detectDuplicates, A = !x.sortStable && t.slice(0), t.sort(V), D) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return A = null, t
            }, C = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i++];) n += C(e);
                return n
            }, T = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ht,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(xt, Tt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, Tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ft.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(xt, Tt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = B[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(o) {
                            var r = e.attr(o, t);
                            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(at, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var c, u, d, f, p, h, g = r !== s ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (d = e; d = d[g];)
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        h = g = "only" === t && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (u = m[P] || (m[P] = {}), c = u[t] || [], p = c[0] === W && c[1], f = c[0] === W && c[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (f = p = 0) || h.pop();)
                                        if (1 === d.nodeType && ++f && d === e) {
                                            u[t] = [W, p, f];
                                            break
                                        }
                                } else if (y && (c = (e[P] || (e[P] = {}))[t]) && c[0] === W) f = c[1];
                                else
                                    for (;
                                        (d = ++p && d && d[g] || (f = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[P] || (d[P] = {}))[t] = [W, f]), d !== e)););
                                return f -= o, f === i || f % i === 0 && f / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var o, r = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[P] ? r(n) : r.length > 1 ? (o = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, o = r(t, n), s = o.length; s--;) i = tt(t, o[s]), t[i] = !(e[i] = o[s])
                        }) : function(t) {
                            return r(t, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            o = N(t.replace(lt, "$1"));
                        return o[P] ? i(function(t, e, n, i) {
                            for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                        }) : function(t, i, r) {
                            return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return t = t.replace(xt, Tt),
                            function(e) {
                                return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function(t) {
                        return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, Tt).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = _ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === O
                    },
                    focus: function(t) {
                        return t === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !T.pseudos.empty(t)
                    },
                    header: function(t) {
                        return mt.test(t.nodeName)
                    },
                    input: function(t) {
                        return gt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(t, e) {
                        return [e - 1]
                    }),
                    eq: c(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: c(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: c(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: c(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: c(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[w] = a(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[w] = l(w);
            return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = e.tokenize = function(t, n) {
                var i, o, r, s, a, l, c, u = z[t + " "];
                if (u) return n ? 0 : u.slice(0);
                for (a = t, l = [], c = T.preFilter; a;) {
                    (!i || (o = ct.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ut.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(lt, " ")
                    }), a = a.slice(i.length));
                    for (s in T.filter) !(o = ht[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(),
                        r.push({
                            value: i,
                            type: s,
                            matches: o
                        }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? e.error(t) : z(t, l).slice(0)
            }, N = e.compile = function(t, e) {
                var n, i = [],
                    o = [],
                    r = U[t + " "];
                if (!r) {
                    for (e || (e = E(t)), n = e.length; n--;) r = y(e[n]), r[P] ? i.push(r) : o.push(r);
                    r = U(t, b(o, i)), r.selector = t
                }
                return r
            }, S = e.select = function(t, e, n, i) {
                var o, r, s, a, l, c = "function" == typeof t && t,
                    d = !i && E(t = c.selector || t);
                if (n = n || [], 1 === d.length) {
                    if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === e.nodeType && _ && T.relative[r[1].type]) {
                        if (e = (T.find.ID(s.matches[0].replace(xt, Tt), e) || [])[0], !e) return n;
                        c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                    }
                    for (o = ht.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !T.relative[a = s.type]);)
                        if ((l = T.find[a]) && (i = l(s.matches[0].replace(xt, Tt), bt.test(r[0].type) && u(e.parentNode) || e))) {
                            if (r.splice(o, 1), t = i.length && f(r), !t) return Y.apply(n, i), n;
                            break
                        }
                }
                return (c || N(t, d))(i, e, !_, n, bt.test(t) && u(e.parentNode) || e), n
            }, x.sortStable = P.split("").sort(V).join("") === P, x.detectDuplicates = !!D, j(), x.sortDetached = o(function(t) {
                return 1 & t.compareDocumentPosition(L.createElement("div"))
            }), o(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || r("value", function(t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), o(function(t) {
                return null == t.getAttribute("disabled")
            }) || r(et, function(t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        ot.find = ct, ot.expr = ct.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = ct.uniqueSort, ot.text = ct.getText, ot.isXMLDoc = ct.isXML, ot.contains = ct.contains;
        var ut = ot.expr.match.needsContext,
            dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ft = /^.[^:#\[\.,]*$/;
        ot.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ot.find.matchesSelector(i, t) ? [i] : [] : ot.find.matches(t, ot.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, ot.fn.extend({
            find: function(t) {
                var e, n = [],
                    i = this,
                    o = i.length;
                if ("string" != typeof t) return this.pushStack(ot(t).filter(function() {
                    for (e = 0; o > e; e++)
                        if (ot.contains(i[e], this)) return !0
                }));
                for (e = 0; o > e; e++) ot.find(t, i[e], n);
                return n = this.pushStack(o > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(i(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(i(this, t || [], !0))
            },
            is: function(t) {
                return !!i(this, "string" == typeof t && ut.test(t) ? ot(t) : t || [], !1).length
            }
        });
        var pt, ht = t.document,
            gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            mt = ot.fn.init = function(t, e) {
                var n, i;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : gt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || pt).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : ht, !0)), dt.test(n[1]) && ot.isPlainObject(e))
                            for (n in e) ot.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    if (i = ht.getElementById(n[2]), i && i.parentNode) {
                        if (i.id !== n[2]) return pt.find(t);
                        this.length = 1, this[0] = i
                    }
                    return this.context = ht, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? "undefined" != typeof pt.ready ? pt.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
            };
        mt.prototype = ot.fn, pt = ot(ht);
        var vt = /^(?:parents|prev(?:Until|All))/,
            yt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ot.extend({
            dir: function(t, e, n) {
                for (var i = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !ot(o).is(n));) 1 === o.nodeType && i.push(o), o = o[e];
                return i
            },
            sibling: function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), ot.fn.extend({
            has: function(t) {
                var e, n = ot(t, this),
                    i = n.length;
                return this.filter(function() {
                    for (e = 0; i > e; e++)
                        if (ot.contains(this, n[e])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, o = this.length, r = [], s = ut.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, t))) {
                            r.push(n);
                            break
                        }
                return this.pushStack(r.length > 1 ? ot.unique(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? ot.inArray(this[0], ot(t)) : ot.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(ot.unique(ot.merge(this.get(), ot(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ot.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return ot.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return ot.dir(t, "parentNode", n)
            },
            next: function(t) {
                return o(t, "nextSibling")
            },
            prev: function(t) {
                return o(t, "previousSibling")
            },
            nextAll: function(t) {
                return ot.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return ot.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return ot.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return ot.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return ot.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return ot.sibling(t.firstChild)
            },
            contents: function(t) {
                return ot.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ot.merge([], t.childNodes)
            }
        }, function(t, e) {
            ot.fn[t] = function(n, i) {
                var o = ot.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = ot.filter(i, o)), this.length > 1 && (yt[t] || (o = ot.unique(o)), vt.test(t) && (o = o.reverse())), this.pushStack(o)
            }
        });
        var bt = /\S+/g,
            wt = {};
        ot.Callbacks = function(t) {
            t = "string" == typeof t ? wt[t] || r(t) : ot.extend({}, t);
            var e, n, i, o, s, a, l = [],
                c = !t.once && [],
                u = function(r) {
                    for (n = t.memory && r, i = !0, s = a || 0, a = 0, o = l.length, e = !0; l && o > s; s++)
                        if (l[s].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                            n = !1;
                            break
                        }
                    e = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (l) {
                            var i = l.length;
                            ! function r(e) {
                                ot.each(e, function(e, n) {
                                    var i = ot.type(n);
                                    "function" === i ? t.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                                })
                            }(arguments), e ? o = l.length : n && (a = i, u(n))
                        }
                        return this
                    },
                    remove: function() {
                        return l && ot.each(arguments, function(t, n) {
                            for (var i;
                                (i = ot.inArray(n, l, i)) > -1;) l.splice(i, 1), e && (o >= i && o--, s >= i && s--)
                        }), this
                    },
                    has: function(t) {
                        return t ? ot.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], o = 0, this
                    },
                    disable: function() {
                        return l = c = n = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return c = void 0, n || d.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(t, n) {
                        return !l || i && !c || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? c.push(n) : u(n)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return d
        }, ot.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ot.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return ot.Deferred(function(n) {
                                ot.each(e, function(e, r) {
                                    var s = ot.isFunction(t[e]) && t[e];
                                    o[r[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && ot.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? ot.extend(t, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, ot.each(e, function(t, r) {
                    var s = r[2],
                        a = r[3];
                    i[r[1]] = s.add, a && s.add(function() {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), i.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e, n, i, o = 0,
                    r = K.call(arguments),
                    s = r.length,
                    a = 1 !== s || t && ot.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : ot.Deferred(),
                    c = function(t, n, i) {
                        return function(o) {
                            n[t] = this, i[t] = arguments.length > 1 ? K.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (e = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && ot.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, e)) : --a;
                return a || l.resolveWith(i, r), l.promise()
            }
        });
        var xt;
        ot.fn.ready = function(t) {
            return ot.ready.promise().done(t), this
        }, ot.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? ot.readyWait++ : ot.ready(!0)
            },
            ready: function(t) {
                if (t === !0 ? !--ot.readyWait : !ot.isReady) {
                    if (!ht.body) return setTimeout(ot.ready);
                    ot.isReady = !0, t !== !0 && --ot.readyWait > 0 || (xt.resolveWith(ht, [ot]), ot.fn.triggerHandler && (ot(ht).triggerHandler("ready"), ot(ht).off("ready")))
                }
            }
        }), ot.ready.promise = function(e) {
            if (!xt)
                if (xt = ot.Deferred(), "complete" === ht.readyState) setTimeout(ot.ready);
                else if (ht.addEventListener) ht.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
            else {
                ht.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                var n = !1;
                try {
                    n = null == t.frameElement && ht.documentElement
                } catch (i) {}
                n && n.doScroll && ! function o() {
                    if (!ot.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(o, 50)
                        }
                        s(), ot.ready()
                    }
                }()
            }
            return xt.promise(e)
        };
        var Tt, Ct = "undefined";
        for (Tt in ot(nt)) break;
        nt.ownLast = "0" !== Tt, nt.inlineBlockNeedsLayout = !1, ot(function() {
                var t, e, n, i;
                n = ht.getElementsByTagName("body")[0], n && n.style && (e = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Ct && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var t = ht.createElement("div");
                if (null == nt.deleteExpando) {
                    nt.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (e) {
                        nt.deleteExpando = !1
                    }
                }
                t = null
            }(), ot.acceptData = function(t) {
                var e = ot.noData[(t.nodeName + " ").toLowerCase()],
                    n = +t.nodeType || 1;
                return (1 === n || 9 === n) && (!e || e !== !0 && t.getAttribute("classid") === e)
            };
        var kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Et = /([A-Z])/g;
        ot.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? ot.cache[t[ot.expando]] : t[ot.expando], !!t && !c(t)
            },
            data: function(t, e, n) {
                return u(t, e, n)
            },
            removeData: function(t, e) {
                return d(t, e)
            },
            _data: function(t, e, n) {
                return u(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return d(t, e, !0)
            }
        }), ot.fn.extend({
            data: function(t, e) {
                var n, i, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = ot.data(r), 1 === r.nodeType && !ot._data(r, "parsedAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), l(r, i, o[i])));
                        ot._data(r, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    ot.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    ot.data(this, t, e)
                }) : r ? l(r, t, ot.data(r, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    ot.removeData(this, t)
                })
            }
        }), ot.extend({
            queue: function(t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = ot._data(t, e), n && (!i || ot.isArray(n) ? i = ot._data(t, e, ot.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = ot.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    r = ot._queueHooks(t, e),
                    s = function() {
                        ot.dequeue(t, e)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return ot._data(t, n) || ot._data(t, n, {
                    empty: ot.Callbacks("once memory").add(function() {
                        ot._removeData(t, e + "queue"), ot._removeData(t, n)
                    })
                })
            }
        }), ot.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = ot.queue(this, t, e);
                    ot._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ot.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    ot.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    o = ot.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = ot._data(r[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var Nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            St = ["Top", "Right", "Bottom", "Left"],
            $t = function(t, e) {
                return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
            },
            At = ot.access = function(t, e, n, i, o, r, s) {
                var a = 0,
                    l = t.length,
                    c = null == n;
                if ("object" === ot.type(n)) {
                    o = !0;
                    for (a in n) ot.access(t, e, a, n[a], !0, r, s)
                } else if (void 0 !== i && (o = !0, ot.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                        return c.call(ot(t), n)
                    })), e))
                    for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
            },
            Dt = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = ht.createElement("input"),
                e = ht.createElement("div"),
                n = ht.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === e.firstChild.nodeType, nt.tbody = !e.getElementsByTagName("tbody").length, nt.htmlSerialize = !!e.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ht.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), nt.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                    nt.noCloneEvent = !1
                }), e.cloneNode(!0).click()), null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete e.test
                } catch (i) {
                    nt.deleteExpando = !1
                }
            }
        }(),
        function() {
            var e, n, i = ht.createElement("div");
            for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + e, (nt[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), nt[e + "Bubbles"] = i.attributes[n].expando === !1);
            i = null
        }();
        var jt = /^(?:input|select|textarea)$/i,
            Lt = /^key/,
            Ot = /^(?:mouse|pointer|contextmenu)|click/,
            _t = /^(?:focusinfocus|focusoutblur)$/,
            It = /^([^.]*)(?:\.(.+)|)$/;
        ot.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, s, a, l, c, u, d, f, p, h, g, m = ot._data(t);
                if (m) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = ot.guid++), (s = m.events) || (s = m.events = {}), (u = m.handle) || (u = m.handle = function(t) {
                            return typeof ot === Ct || t && ot.event.triggered === t.type ? void 0 : ot.event.dispatch.apply(u.elem, arguments)
                        }, u.elem = t), e = (e || "").match(bt) || [""], a = e.length; a--;) r = It.exec(e[a]) || [], p = g = r[1], h = (r[2] || "").split(".").sort(), p && (c = ot.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = ot.event.special[p] || {}, d = ot.extend({
                        type: p,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && ot.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, l), (f = s[p]) || (f = s[p] = [], f.delegateCount = 0, c.setup && c.setup.call(t, i, h, u) !== !1 || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), ot.event.global[p] = !0);
                    t = null
                }
            },
            remove: function(t, e, n, i, o) {
                var r, s, a, l, c, u, d, f, p, h, g, m = ot.hasData(t) && ot._data(t);
                if (m && (u = m.events)) {
                    for (e = (e || "").match(bt) || [""], c = e.length; c--;)
                        if (a = It.exec(e[c]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p) {
                            for (d = ot.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = f.length; r--;) s = f[r], !o && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (f.splice(r, 1), s.selector && f.delegateCount--, d.remove && d.remove.call(t, s));
                            l && !f.length && (d.teardown && d.teardown.call(t, h, m.handle) !== !1 || ot.removeEvent(t, p, m.handle), delete u[p])
                        } else
                            for (p in u) ot.event.remove(t, p + e[c], n, i, !0);
                    ot.isEmptyObject(u) && (delete m.handle, ot._removeData(t, "events"))
                }
            },
            trigger: function(e, n, i, o) {
                var r, s, a, l, c, u, d, f = [i || ht],
                    p = et.call(e, "type") ? e.type : e,
                    h = et.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = u = i = i || ht, 3 !== i.nodeType && 8 !== i.nodeType && !_t.test(p + ot.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), s = p.indexOf(":") < 0 && "on" + p, e = e[ot.expando] ? e : new ot.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ot.makeArray(n, [e]), c = ot.event.special[p] || {}, o || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                    if (!o && !c.noBubble && !ot.isWindow(i)) {
                        for (l = c.delegateType || p, _t.test(l + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), u = a;
                        u === (i.ownerDocument || ht) && f.push(u.defaultView || u.parentWindow || t)
                    }
                    for (d = 0;
                        (a = f[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? l : c.bindType || p, r = (ot._data(a, "events") || {})[e.type] && ot._data(a, "handle"), r && r.apply(a, n), r = s && a[s], r && r.apply && ot.acceptData(a) && (e.result = r.apply(a, n), e.result === !1 && e.preventDefault());
                    if (e.type = p, !o && !e.isDefaultPrevented() && (!c._default || c._default.apply(f.pop(), n) === !1) && ot.acceptData(i) && s && i[p] && !ot.isWindow(i)) {
                        u = i[s], u && (i[s] = null), ot.event.triggered = p;
                        try {
                            i[p]()
                        } catch (g) {}
                        ot.event.triggered = void 0, u && (i[s] = u)
                    }
                    return e.result
                }
            },
            dispatch: function(t) {
                t = ot.event.fix(t);
                var e, n, i, o, r, s = [],
                    a = K.call(arguments),
                    l = (ot._data(this, "events") || {})[t.type] || [],
                    c = ot.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (s = ot.event.handlers.call(this, t, l), e = 0;
                        (o = s[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, r = 0;
                            (i = o.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((ot.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, r, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (o = [], r = 0; a > r; r++) i = e[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? ot(n, this).index(l) >= 0 : ot.find(n, this, null, [l]).length), o[n] && o.push(i);
                            o.length && s.push({
                                elem: l,
                                handlers: o
                            })
                        }
                return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            fix: function(t) {
                if (t[ot.expando]) return t;
                var e, n, i, o = t.type,
                    r = t,
                    s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = Ot.test(o) ? this.mouseHooks : Lt.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ot.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
                return t.target || (t.target = r.srcElement || ht), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, o, r = e.button,
                        s = e.fromElement;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || ht, o = i.documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== h() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === h() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return ot.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return ot.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n, i) {
                var o = ot.extend(new ot.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? ot.event.trigger(o, null, e) : ot.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, ot.removeEvent = ht.removeEventListener ? function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function(t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === Ct && (t[i] = null), t.detachEvent(i, n))
        }, ot.Event = function(t, e) {
            return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? f : p) : this.type = t, e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(t, e)
        }, ot.Event.prototype = {
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = f, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = f, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = f, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ot.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            ot.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                    return (!o || o !== i && !ot.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), nt.submitBubbles || (ot.event.special.submit = {
            setup: function() {
                return !ot.nodeName(this, "form") && void ot.event.add(this, "click._submit keypress._submit", function(t) {
                    var e = t.target,
                        n = ot.nodeName(e, "input") || ot.nodeName(e, "button") ? e.form : void 0;
                    n && !ot._data(n, "submitBubbles") && (ot.event.add(n, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), ot._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ot.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return !ot.nodeName(this, "form") && void ot.event.remove(this, "._submit")
            }
        }), nt.changeBubbles || (ot.event.special.change = {
            setup: function() {
                return jt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ot.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), ot.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), ot.event.simulate("change", this, t, !0)
                })), !1) : void ot.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    jt.test(e.nodeName) && !ot._data(e, "changeBubbles") && (ot.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || ot.event.simulate("change", this.parentNode, t, !0)
                    }), ot._data(e, "changeBubbles", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return ot.event.remove(this, "._change"), !jt.test(this.nodeName)
            }
        }), nt.focusinBubbles || ot.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                ot.event.simulate(e, t.target, ot.event.fix(t), !0)
            };
            ot.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = ot._data(i, e);
                    o || i.addEventListener(t, n, !0), ot._data(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = ot._data(i, e) - 1;
                    o ? ot._data(i, e, o) : (i.removeEventListener(t, n, !0), ot._removeData(i, e))
                }
            }
        }), ot.fn.extend({
            on: function(t, e, n, i, o) {
                var r, s;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = void 0);
                    for (r in t) this.on(r, e, n, t[r], o);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = p;
                else if (!i) return this;
                return 1 === o && (s = i, i = function(t) {
                    return ot().off(t), s.apply(this, arguments)
                }, i.guid = s.guid || (s.guid = ot.guid++)), this.each(function() {
                    ot.event.add(this, t, i, n, e)
                })
            },
            one: function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ot(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = p), this.each(function() {
                    ot.event.remove(this, t, n, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    ot.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? ot.event.trigger(t, e, n, !0) : void 0
            }
        });
        var Ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Rt = / jQuery\d+="(?:null|\d+)"/g,
            Ft = new RegExp("<(?:" + Ht + ")[\\s/>]", "i"),
            Pt = /^\s+/,
            qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Wt = /<([\w:]+)/,
            Mt = /<tbody/i,
            Bt = /<|&#?\w+;/,
            zt = /<(?:script|style|link)/i,
            Ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Vt = /^$|\/(?:java|ecma)script/i,
            Xt = /^true\/(.*)/,
            Qt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Kt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Gt = g(ht),
            Jt = Gt.appendChild(ht.createElement("div"));
        Kt.optgroup = Kt.option, Kt.tbody = Kt.tfoot = Kt.colgroup = Kt.caption = Kt.thead, Kt.th = Kt.td, ot.extend({
            clone: function(t, e, n) {
                var i, o, r, s, a, l = ot.contains(t.ownerDocument, t);
                if (nt.html5Clone || ot.isXMLDoc(t) || !Ft.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (Jt.innerHTML = t.outerHTML, Jt.removeChild(r = Jt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))
                    for (i = m(r), a = m(t), s = 0; null != (o = a[s]); ++s) i[s] && C(o, i[s]);
                if (e)
                    if (n)
                        for (a = a || m(t), i = i || m(r), s = 0; null != (o = a[s]); s++) T(o, i[s]);
                    else T(t, r);
                return i = m(r, "script"), i.length > 0 && x(i, !l && m(t, "script")), i = a = o = null, r
            },
            buildFragment: function(t, e, n, i) {
                for (var o, r, s, a, l, c, u, d = t.length, f = g(e), p = [], h = 0; d > h; h++)
                    if (r = t[h], r || 0 === r)
                        if ("object" === ot.type(r)) ot.merge(p, r.nodeType ? [r] : r);
                        else if (Bt.test(r)) {
                    for (a = a || f.appendChild(e.createElement("div")), l = (Wt.exec(r) || ["", ""])[1].toLowerCase(), u = Kt[l] || Kt._default, a.innerHTML = u[1] + r.replace(qt, "<$1></$2>") + u[2], o = u[0]; o--;) a = a.lastChild;
                    if (!nt.leadingWhitespace && Pt.test(r) && p.push(e.createTextNode(Pt.exec(r)[0])), !nt.tbody)
                        for (r = "table" !== l || Mt.test(r) ? "<table>" !== u[1] || Mt.test(r) ? 0 : a : a.firstChild, o = r && r.childNodes.length; o--;) ot.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                    for (ot.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = f.lastChild
                } else p.push(e.createTextNode(r));
                for (a && f.removeChild(a), nt.appendChecked || ot.grep(m(p, "input"), v), h = 0; r = p[h++];)
                    if ((!i || -1 === ot.inArray(r, i)) && (s = ot.contains(r.ownerDocument, r), a = m(f.appendChild(r), "script"), s && x(a), n))
                        for (o = 0; r = a[o++];) Vt.test(r.type || "") && n.push(r);
                return a = null, f
            },
            cleanData: function(t, e) {
                for (var n, i, o, r, s = 0, a = ot.expando, l = ot.cache, c = nt.deleteExpando, u = ot.event.special; null != (n = t[s]); s++)
                    if ((e || ot.acceptData(n)) && (o = n[a], r = o && l[o])) {
                        if (r.events)
                            for (i in r.events) u[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, r.handle);
                        l[o] && (delete l[o], c ? delete n[a] : typeof n.removeAttribute !== Ct ? n.removeAttribute(a) : n[a] = null, Q.push(o))
                    }
            }
        }), ot.fn.extend({
            text: function(t) {
                return At(this, function(t) {
                    return void 0 === t ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ht).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, i = t ? ot.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || ot.cleanData(m(n)), n.parentNode && (e && ot.contains(n.ownerDocument, n) && x(m(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && ot.cleanData(m(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && ot.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return ot.clone(this, t, e)
                })
            },
            html: function(t) {
                return At(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Rt, "") : void 0;
                    if (!("string" != typeof t || zt.test(t) || !nt.htmlSerialize && Ft.test(t) || !nt.leadingWhitespace && Pt.test(t) || Kt[(Wt.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(qt, "<$1></$2>");
                        try {
                            for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (ot.cleanData(m(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (o) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, ot.cleanData(m(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = G.apply([], t);
                var n, i, o, r, s, a, l = 0,
                    c = this.length,
                    u = this,
                    d = c - 1,
                    f = t[0],
                    p = ot.isFunction(f);
                if (p || c > 1 && "string" == typeof f && !nt.checkClone && Ut.test(f)) return this.each(function(n) {
                    var i = u.eq(n);
                    p && (t[0] = f.call(this, n, i.html())), i.domManip(t, e)
                });
                if (c && (a = ot.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                    for (r = ot.map(m(a, "script"), b), o = r.length; c > l; l++) i = a, l !== d && (i = ot.clone(i, !0, !0), o && ot.merge(r, m(i, "script"))), e.call(this[l], i, l);
                    if (o)
                        for (s = r[r.length - 1].ownerDocument, ot.map(r, w), l = 0; o > l; l++) i = r[l], Vt.test(i.type || "") && !ot._data(i, "globalEval") && ot.contains(s, i) && (i.src ? ot._evalUrl && ot._evalUrl(i.src) : ot.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Qt, "")));
                    a = n = null
                }
                return this
            }
        }), ot.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            ot.fn[t] = function(t) {
                for (var n, i = 0, o = [], r = ot(t), s = r.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), ot(r[i])[e](n), J.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var Yt, Zt = {};
        ! function() {
            var t;
            nt.shrinkWrapBlocks = function() {
                if (null != t) return t;
                t = !1;
                var e, n, i;
                return n = ht.getElementsByTagName("body")[0], n && n.style ? (e = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Ct && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ht.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
            }
        }();
        var te, ee, ne = /^margin/,
            ie = new RegExp("^(" + Nt + ")(?!px)[a-z%]+$", "i"),
            oe = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (te = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        }, ee = function(t, e, n) {
            var i, o, r, s, a = t.style;
            return n = n || te(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || ot.contains(t.ownerDocument, t) || (s = ot.style(t, e)), ie.test(s) && ne.test(e) && (i = a.width, o = a.minWidth,
                r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 === s ? s : s + ""
        }) : ht.documentElement.currentStyle && (te = function(t) {
            return t.currentStyle
        }, ee = function(t, e, n) {
            var i, o, r, s, a = t.style;
            return n = n || te(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), ie.test(s) && !oe.test(e) && (i = a.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
        }), ! function() {
            function e() {
                var e, n, i, o;
                n = ht.getElementsByTagName("body")[0], n && n.style && (e = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = s = !1, l = !0, t.getComputedStyle && (r = "1%" !== (t.getComputedStyle(e, null) || {}).top, s = "4px" === (t.getComputedStyle(e, null) || {
                    width: "4px"
                }).width, o = e.appendChild(ht.createElement("div")), o.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight), e.removeChild(o)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = e.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === o[0].offsetHeight, a && (o[0].style.display = "", o[1].style.display = "none", a = 0 === o[0].offsetHeight), n.removeChild(i))
            }
            var n, i, o, r, s, a, l;
            n = ht.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], (i = o && o.style) && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, ot.extend(nt, {
                reliableHiddenOffsets: function() {
                    return null == a && e(), a
                },
                boxSizingReliable: function() {
                    return null == s && e(), s
                },
                pixelPosition: function() {
                    return null == r && e(), r
                },
                reliableMarginRight: function() {
                    return null == l && e(), l
                }
            }))
        }(), ot.swap = function(t, e, n, i) {
            var o, r, s = {};
            for (r in e) s[r] = t.style[r], t.style[r] = e[r];
            o = n.apply(t, i || []);
            for (r in e) t.style[r] = s[r];
            return o
        };
        var re = /alpha\([^)]*\)/i,
            se = /opacity\s*=\s*([^)]*)/,
            ae = /^(none|table(?!-c[ea]).+)/,
            le = new RegExp("^(" + Nt + ")(.*)$", "i"),
            ce = new RegExp("^([+-])=(" + Nt + ")", "i"),
            ue = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            de = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            fe = ["Webkit", "O", "Moz", "ms"];
        ot.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = ee(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": nt.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = ot.camelCase(e),
                        l = t.style;
                    if (e = ot.cssProps[a] || (ot.cssProps[a] = S(l, a)), s = ot.cssHooks[e] || ot.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e];
                    if (r = typeof n, "string" === r && (o = ce.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(ot.css(t, e)), r = "number"), null != n && n === n && ("number" !== r || ot.cssNumber[a] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i))))) try {
                        l[e] = n
                    } catch (c) {}
                }
            },
            css: function(t, e, n, i) {
                var o, r, s, a = ot.camelCase(e);
                return e = ot.cssProps[a] || (ot.cssProps[a] = S(t.style, a)), s = ot.cssHooks[e] || ot.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = ee(t, e, i)), "normal" === r && e in de && (r = de[e]), "" === n || n ? (o = parseFloat(r), n === !0 || ot.isNumeric(o) ? o || 0 : r) : r
            }
        }), ot.each(["height", "width"], function(t, e) {
            ot.cssHooks[e] = {
                get: function(t, n, i) {
                    return n ? ae.test(ot.css(t, "display")) && 0 === t.offsetWidth ? ot.swap(t, ue, function() {
                        return j(t, e, i)
                    }) : j(t, e, i) : void 0
                },
                set: function(t, n, i) {
                    var o = i && te(t);
                    return A(t, n, i ? D(t, e, i, nt.boxSizing && "border-box" === ot.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), nt.opacity || (ot.cssHooks.opacity = {
            get: function(t, e) {
                return se.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var n = t.style,
                    i = t.currentStyle,
                    o = ot.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === ot.trim(r.replace(re, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = re.test(r) ? r.replace(re, o) : r + " " + o)
            }
        }), ot.cssHooks.marginRight = N(nt.reliableMarginRight, function(t, e) {
            return e ? ot.swap(t, {
                display: "inline-block"
            }, ee, [t, "marginRight"]) : void 0
        }), ot.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            ot.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + St[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, ne.test(t) || (ot.cssHooks[t + e].set = A)
        }), ot.fn.extend({
            css: function(t, e) {
                return At(this, function(t, e, n) {
                    var i, o, r = {},
                        s = 0;
                    if (ot.isArray(e)) {
                        for (i = te(t), o = e.length; o > s; s++) r[e[s]] = ot.css(t, e[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? ot.style(t, e, n) : ot.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return $(this, !0)
            },
            hide: function() {
                return $(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    $t(this) ? ot(this).show() : ot(this).hide()
                })
            }
        }), ot.Tween = L, L.prototype = {
            constructor: L,
            init: function(t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ot.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = L.propHooks[this.prop];
                return t && t.get ? t.get(this) : L.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = L.propHooks[this.prop];
                return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
            }
        }, L.prototype.init.prototype = L.prototype, L.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ot.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ot.cssProps[t.prop]] || ot.cssHooks[t.prop]) ? ot.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ot.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, ot.fx = L.prototype.init, ot.fx.step = {};
        var pe, he, ge = /^(?:toggle|show|hide)$/,
            me = new RegExp("^(?:([+-])=|)(" + Nt + ")([a-z%]*)$", "i"),
            ve = /queueHooks$/,
            ye = [H],
            be = {
                "*": [function(t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        o = me.exec(e),
                        r = o && o[3] || (ot.cssNumber[t] ? "" : "px"),
                        s = (ot.cssNumber[t] || "px" !== r && +i) && me.exec(ot.css(n.elem, t)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== r) {
                        r = r || s[3], o = o || [], s = +i || 1;
                        do a = a || ".5", s /= a, ot.style(n.elem, t, s + r); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                    }
                    return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };
        ot.Animation = ot.extend(F, {
                tweener: function(t, e) {
                    ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var n, i = 0, o = t.length; o > i; i++) n = t[i], be[n] = be[n] || [], be[n].unshift(e)
                },
                prefilter: function(t, e) {
                    e ? ye.unshift(t) : ye.push(t)
                }
            }), ot.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? ot.extend({}, t) : {
                    complete: n || !n && e || ot.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !ot.isFunction(e) && e
                };
                return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue)
                }, i
            }, ot.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter($t).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var o = ot.isEmptyObject(t),
                        r = ot.speed(e, n, i),
                        s = function() {
                            var e = F(this, ot.extend({}, t), r);
                            (o || ot._data(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            r = ot.timers,
                            s = ot._data(this);
                        if (o) s[o] && s[o].stop && i(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && ve.test(o) && i(s[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                        (e || !n) && ot.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, n = ot._data(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            r = ot.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, ot.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), ot.each(["toggle", "show", "hide"], function(t, e) {
                var n = ot.fn[e];
                ot.fn[e] = function(t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(_(e, !0), t, i, o)
                }
            }), ot.each({
                slideDown: _("show"),
                slideUp: _("hide"),
                slideToggle: _("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                ot.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), ot.timers = [], ot.fx.tick = function() {
                var t, e = ot.timers,
                    n = 0;
                for (pe = ot.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
                e.length || ot.fx.stop(), pe = void 0
            }, ot.fx.timer = function(t) {
                ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
            }, ot.fx.interval = 13, ot.fx.start = function() {
                he || (he = setInterval(ot.fx.tick, ot.fx.interval))
            }, ot.fx.stop = function() {
                clearInterval(he), he = null
            }, ot.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ot.fn.delay = function(t, e) {
                return t = ot.fx ? ot.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                    var i = setTimeout(e, t);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var t, e, n, i, o;
                e = ht.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = ht.createElement("select"), o = n.appendChild(ht.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== e.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!t.value, nt.optSelected = o.selected, nt.enctype = !!ht.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !o.disabled, t = ht.createElement("input"), t.setAttribute("value", ""), nt.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), nt.radioValue = "t" === t.value
            }();
        var we = /\r/g;
        ot.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0];
                return arguments.length ? (i = ot.isFunction(t), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? t.call(this, n, ot(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ot.isArray(o) && (o = ot.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = ot.valHooks[o.type] || ot.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(we, "") : null == n ? "" : n)) : void 0
            }
        }), ot.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = ot.find.attr(t, "value");
                        return null != e ? e : ot.trim(ot.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                            if (n = i[l], !(!n.selected && l !== o || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
                                if (e = ot(n).val(), r) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, r = ot.makeArray(e), s = o.length; s--;)
                            if (i = o[s], ot.inArray(ot.valHooks.option.get(i), r) >= 0) try {
                                i.selected = n = !0
                            } catch (a) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), ot.each(["radio", "checkbox"], function() {
            ot.valHooks[this] = {
                set: function(t, e) {
                    return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) >= 0 : void 0
                }
            }, nt.checkOn || (ot.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var xe, Te, Ce = ot.expr.attrHandle,
            ke = /^(?:checked|selected)$/i,
            Ee = nt.getSetAttribute,
            Ne = nt.input;
        ot.fn.extend({
            attr: function(t, e) {
                return At(this, ot.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    ot.removeAttr(this, t)
                })
            }
        }), ot.extend({
            attr: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === Ct ? ot.prop(t, e, n) : (1 === r && ot.isXMLDoc(t) || (e = e.toLowerCase(), i = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? Te : xe)), void 0 === n ? i && "get" in i && null !== (o = i.get(t, e)) ? o : (o = ot.find.attr(t, e), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void ot.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var n, i, o = 0,
                    r = e && e.match(bt);
                if (r && 1 === t.nodeType)
                    for (; n = r[o++];) i = ot.propFix[n] || n, ot.expr.match.bool.test(n) ? Ne && Ee || !ke.test(n) ? t[i] = !1 : t[ot.camelCase("default-" + n)] = t[i] = !1 : ot.attr(t, n, ""), t.removeAttribute(Ee ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!nt.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), Te = {
            set: function(t, e, n) {
                return e === !1 ? ot.removeAttr(t, n) : Ne && Ee || !ke.test(n) ? t.setAttribute(!Ee && ot.propFix[n] || n, n) : t[ot.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = Ce[e] || ot.find.attr;
            Ce[e] = Ne && Ee || !ke.test(e) ? function(t, e, i) {
                var o, r;
                return i || (r = Ce[e], Ce[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, Ce[e] = r), o
            } : function(t, e, n) {
                return n ? void 0 : t[ot.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), Ne && Ee || (ot.attrHooks.value = {
            set: function(t, e, n) {
                return ot.nodeName(t, "input") ? void(t.defaultValue = e) : xe && xe.set(t, e, n)
            }
        }), Ee || (xe = {
            set: function(t, e, n) {
                var i = t.getAttributeNode(n);
                return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
            }
        }, Ce.id = Ce.name = Ce.coords = function(t, e, n) {
            var i;
            return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
        }, ot.valHooks.button = {
            get: function(t, e) {
                var n = t.getAttributeNode(e);
                return n && n.specified ? n.value : void 0
            },
            set: xe.set
        }, ot.attrHooks.contenteditable = {
            set: function(t, e, n) {
                xe.set(t, "" !== e && e, n)
            }
        }, ot.each(["width", "height"], function(t, e) {
            ot.attrHooks[e] = {
                set: function(t, n) {
                    return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
                }
            }
        })), nt.style || (ot.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || void 0
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        });
        var Se = /^(?:input|select|textarea|button|object)$/i,
            $e = /^(?:a|area)$/i;
        ot.fn.extend({
            prop: function(t, e) {
                return At(this, ot.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = ot.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {}
                })
            }
        }), ot.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, e, n) {
                var i, o, r, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return r = 1 !== s || !ot.isXMLDoc(t), r && (e = ot.propFix[e] || e, o = ot.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = ot.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Se.test(t.nodeName) || $e.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), nt.hrefNormalized || ot.each(["href", "src"], function(t, e) {
            ot.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), nt.optSelected || (ot.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ot.propFix[this.toLowerCase()] = this
        }), nt.enctype || (ot.propFix.enctype = "encoding");
        var Ae = /[\t\r\n\f]/g;
        ot.fn.extend({
            addClass: function(t) {
                var e, n, i, o, r, s, a = 0,
                    l = this.length,
                    c = "string" == typeof t && t;
                if (ot.isFunction(t)) return this.each(function(e) {
                    ot(this).addClass(t.call(this, e, this.className))
                });
                if (c)
                    for (e = (t || "").match(bt) || []; l > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : " ")) {
                            for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            s = ot.trim(i), n.className !== s && (n.className = s)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, s, a = 0,
                    l = this.length,
                    c = 0 === arguments.length || "string" == typeof t && t;
                if (ot.isFunction(t)) return this.each(function(e) {
                    ot(this).removeClass(t.call(this, e, this.className))
                });
                if (c)
                    for (e = (t || "").match(bt) || []; l > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : "")) {
                            for (r = 0; o = e[r++];)
                                for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                            s = t ? ot.trim(i) : "", n.className !== s && (n.className = s)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(ot.isFunction(t) ? function(n) {
                    ot(this).toggleClass(t.call(this, n, this.className, e), e)
                } : function() {
                    if ("string" === n)
                        for (var e, i = 0, o = ot(this), r = t.match(bt) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else(n === Ct || "boolean" === n) && (this.className && ot._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ot._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ae, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            ot.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), ot.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var De = ot.now(),
            je = /\?/,
            Le = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ot.parseJSON = function(e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var n, i = null,
                o = ot.trim(e + "");
            return o && !ot.trim(o.replace(Le, function(t, e, o, r) {
                return n && e && (i = 0), 0 === i ? t : (n = o || e, i += !r - !o, "")
            })) ? Function("return " + o)() : ot.error("Invalid JSON: " + e)
        }, ot.parseXML = function(e) {
            var n, i;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
            } catch (o) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + e), n
        };
        var Oe, _e, Ie = /#.*$/,
            He = /([?&])_=[^&]*/,
            Re = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Pe = /^(?:GET|HEAD)$/,
            qe = /^\/\//,
            We = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Me = {},
            Be = {},
            ze = "*/".concat("*");
        try {
            _e = location.href
        } catch (Ue) {
            _e = ht.createElement("a"), _e.href = "", _e = _e.href
        }
        Oe = We.exec(_e.toLowerCase()) || [], ot.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: _e,
                type: "GET",
                isLocal: Fe.test(Oe[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ze,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ot.parseJSON,
                    "text xml": ot.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? W(W(t, ot.ajaxSettings), e) : W(ot.ajaxSettings, t)
            },
            ajaxPrefilter: P(Me),
            ajaxTransport: P(Be),
            ajax: function(t, e) {
                function n(t, e, n, i) {
                    var o, u, v, y, w, T = e;
                    2 !== b && (b = 2, a && clearTimeout(a), c = void 0, s = i || "", x.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, n && (y = M(d, x, n)), y = B(d, y, x, o), o ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ot.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (ot.etag[r] = w)), 204 === t || "HEAD" === d.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = y.state, u = y.data, v = y.error, o = !v)) : (v = T, (t || !T) && (T = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || T) + "", o ? h.resolveWith(f, [u, T, x]) : h.rejectWith(f, [x, T, v]), x.statusCode(m), m = void 0, l && p.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? u : v]), g.fireWith(f, [x, T]), l && (p.trigger("ajaxComplete", [x, d]), --ot.active || ot.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, o, r, s, a, l, c, u, d = ot.ajaxSetup({}, e),
                    f = d.context || d,
                    p = d.context && (f.nodeType || f.jquery) ? ot(f) : ot.event,
                    h = ot.Deferred(),
                    g = ot.Callbacks("once memory"),
                    m = d.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === b) {
                                if (!u)
                                    for (u = {}; e = Re.exec(s);) u[e[1].toLowerCase()] = e[2];
                                e = u[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? s : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return b || (t = y[n] = y[n] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return b || (d.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > b)
                                    for (e in t) m[e] = [m[e], t[e]];
                                else x.always(t[x.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || w;
                            return c && c.abort(e), n(0, e), this
                        }
                    };
                if (h.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || _e) + "").replace(Ie, "").replace(qe, Oe[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = ot.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain && (i = We.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Oe[1] && i[2] === Oe[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Oe[3] || ("http:" === Oe[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ot.param(d.data, d.traditional)), q(Me, d, e, x), 2 === b) return x;
                l = ot.event && d.global, l && 0 === ot.active++ && ot.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Pe.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (je.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = He.test(r) ? r.replace(He, "$1_=" + De++) : r + (je.test(r) ? "&" : "?") + "_=" + De++)), d.ifModified && (ot.lastModified[r] && x.setRequestHeader("If-Modified-Since", ot.lastModified[r]), ot.etag[r] && x.setRequestHeader("If-None-Match", ot.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + ze + "; q=0.01" : "") : d.accepts["*"]);
                for (o in d.headers) x.setRequestHeader(o, d.headers[o]);
                if (d.beforeSend && (d.beforeSend.call(f, x, d) === !1 || 2 === b)) return x.abort();
                w = "abort";
                for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[o](d[o]);
                if (c = q(Be, d, e, x)) {
                    x.readyState = 1, l && p.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (a = setTimeout(function() {
                        x.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, c.send(v, n)
                    } catch (T) {
                        if (!(2 > b)) throw T;
                        n(-1, T)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function(t, e, n) {
                return ot.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return ot.get(t, void 0, e, "script")
            }
        }), ot.each(["get", "post"], function(t, e) {
            ot[e] = function(t, n, i, o) {
                return ot.isFunction(n) && (o = o || i, i = n, n = void 0), ot.ajax({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }), ot._evalUrl = function(t) {
            return ot.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, ot.fn.extend({
            wrapAll: function(t) {
                if (ot.isFunction(t)) return this.each(function(e) {
                    ot(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = ot(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return this.each(ot.isFunction(t) ? function(e) {
                    ot(this).wrapInner(t.call(this, e))
                } : function() {
                    var e = ot(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = ot.isFunction(t);
                return this.each(function(n) {
                    ot(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ot.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (t.style && t.style.display || ot.css(t, "display"))
        }, ot.expr.filters.visible = function(t) {
            return !ot.expr.filters.hidden(t)
        };
        var Ve = /%20/g,
            Xe = /\[\]$/,
            Qe = /\r?\n/g,
            Ke = /^(?:submit|button|image|reset|file)$/i,
            Ge = /^(?:input|select|textarea|keygen)/i;
        ot.param = function(t, e) {
            var n, i = [],
                o = function(t, e) {
                    e = ot.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (n in t) z(n, t[n], e, o);
            return i.join("&").replace(Ve, "+")
        }, ot.fn.extend({
            serialize: function() {
                return ot.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = ot.prop(this, "elements");
                    return t ? ot.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !ot(this).is(":disabled") && Ge.test(this.nodeName) && !Ke.test(t) && (this.checked || !Dt.test(t))
                }).map(function(t, e) {
                    var n = ot(this).val();
                    return null == n ? null : ot.isArray(n) ? ot.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Qe, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Qe, "\r\n")
                    }
                }).get()
            }
        }), ot.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || V()
        } : U;
        var Je = 0,
            Ye = {},
            Ze = ot.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function() {
            for (var t in Ye) Ye[t](void 0, !0)
        }), nt.cors = !!Ze && "withCredentials" in Ze, Ze = nt.ajax = !!Ze, Ze && ot.ajaxTransport(function(t) {
            if (!t.crossDomain || nt.cors) {
                var e;
                return {
                    send: function(n, i) {
                        var o, r = t.xhr(),
                            s = ++Je;
                        if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (o in t.xhrFields) r[o] = t.xhrFields[o];
                        t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                        r.send(t.hasContent && t.data || null), e = function(n, o) {
                            var a, l, c;
                            if (e && (o || 4 === r.readyState))
                                if (delete Ye[s], e = void 0, r.onreadystatechange = ot.noop, o) 4 !== r.readyState && r.abort();
                                else {
                                    c = {}, a = r.status, "string" == typeof r.responseText && (c.text = r.responseText);
                                    try {
                                        l = r.statusText
                                    } catch (u) {
                                        l = ""
                                    }
                                    a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                                }
                            c && i(a, l, c, r.getAllResponseHeaders())
                        }, t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = Ye[s] = e : e()
                    },
                    abort: function() {
                        e && e(void 0, !0)
                    }
                }
            }
        }), ot.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return ot.globalEval(t), t
                }
            }
        }), ot.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), ot.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n = ht.head || ot("head")[0] || ht.documentElement;
                return {
                    send: function(i, o) {
                        e = ht.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
                        }, n.insertBefore(e, n.firstChild)
                    },
                    abort: function() {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var tn = [],
            en = /(=)\?(?=&|$)|\?\?/;
        ot.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = tn.pop() || ot.expando + "_" + De++;
                return this[t] = !0, t
            }
        }), ot.ajaxPrefilter("json jsonp", function(e, n, i) {
            var o, r, s, a = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + o) : e.jsonp !== !1 && (e.url += (je.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return s || ot.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
                s = arguments
            }, i.always(function() {
                t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, tn.push(o)), s && ot.isFunction(r) && r(s[0]), s = r = void 0
            }), "script") : void 0
        }), ot.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || ht;
            var i = dt.exec(t),
                o = !n && [];
            return i ? [e.createElement(i[1])] : (i = ot.buildFragment([t], e, o), o && o.length && ot(o).remove(), ot.merge([], i.childNodes))
        };
        var nn = ot.fn.load;
        ot.fn.load = function(t, e, n) {
            if ("string" != typeof t && nn) return nn.apply(this, arguments);
            var i, o, r, s = this,
                a = t.indexOf(" ");
            return a >= 0 && (i = ot.trim(t.slice(a, t.length)), t = t.slice(0, a)), ot.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && ot.ajax({
                url: t,
                type: r,
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, s.html(i ? ot("<div>").append(ot.parseHTML(t)).find(i) : t)
            }).complete(n && function(t, e) {
                s.each(n, o || [t.responseText, e, t])
            }), this
        }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            ot.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), ot.expr.filters.animated = function(t) {
            return ot.grep(ot.timers, function(e) {
                return t === e.elem
            }).length
        };
        var on = t.document.documentElement;
        ot.offset = {
            setOffset: function(t, e, n) {
                var i, o, r, s, a, l, c, u = ot.css(t, "position"),
                    d = ot(t),
                    f = {};
                "static" === u && (t.style.position = "relative"), a = d.offset(), r = ot.css(t, "top"), l = ot.css(t, "left"), c = ("absolute" === u || "fixed" === u) && ot.inArray("auto", [r, l]) > -1, c ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), ot.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (f.top = e.top - a.top + s), null != e.left && (f.left = e.left - a.left + o), "using" in e ? e.using.call(t, f) : d.css(f)
            }
        }, ot.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    ot.offset.setOffset(this, t, e)
                });
                var e, n, i = {
                        top: 0,
                        left: 0
                    },
                    o = this[0],
                    r = o && o.ownerDocument;
                return r ? (e = r.documentElement, ot.contains(e, o) ? (typeof o.getBoundingClientRect !== Ct && (i = o.getBoundingClientRect()), n = X(r), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === ot.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (n = t.offset()), n.top += ot.css(t[0], "borderTopWidth", !0), n.left += ot.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - ot.css(i, "marginTop", !0),
                        left: e.left - n.left - ot.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || on; t && !ot.nodeName(t, "html") && "static" === ot.css(t, "position");) t = t.offsetParent;
                    return t || on
                })
            }
        }), ot.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = /Y/.test(e);
            ot.fn[t] = function(i) {
                return At(this, function(t, i, o) {
                    var r = X(t);
                    return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : void(r ? r.scrollTo(n ? ot(r).scrollLeft() : o, n ? o : ot(r).scrollTop()) : t[i] = o)
                }, t, i, arguments.length, null)
            }
        }), ot.each(["top", "left"], function(t, e) {
            ot.cssHooks[e] = N(nt.pixelPosition, function(t, n) {
                return n ? (n = ee(t, e), ie.test(n) ? ot(t).position()[e] + "px" : n) : void 0
            })
        }), ot.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            ot.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                ot.fn[i] = function(i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || o === !0 ? "margin" : "border");
                    return At(this, function(e, n, i) {
                        var o;
                        return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? ot.css(e, n, s) : ot.style(e, n, i, s)
                    }, e, r ? i : void 0, r, null)
                }
            })
        }), ot.fn.size = function() {
            return this.length
        }, ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ot
        });
        var rn = t.jQuery,
            sn = t.$;
        return ot.noConflict = function(e) {
            return t.$ === ot && (t.$ = sn), e && t.jQuery === ot && (t.jQuery = rn), ot
        }, typeof e === Ct && (t.jQuery = t.$ = ot), ot
    }), ! function(t, e, n, i) {
        "use strict";

        function o(e, n) {
            this.element = e, this.settings = t.extend({}, d, n), this._defaults = d, this._name = u, this.init()
        }

        function r(t, i, o, r) {
            var s = e.innerWidth ? e.innerWidth : n.documentElement.clientWidth ? n.documentElement.clientWidth : screen.width,
                a = e.innerHeight ? e.innerHeight : n.documentElement.clientHeight ? n.documentElement.clientHeight : screen.height,
                l = s / 2 - o / 2 + 10,
                c = a / 2 - r / 2 + 50;
            e.open(t, i, "scrollbars=yes, width=" + o + ", height=" + r + ", top=" + c + ", left=" + l).focus()
        }

        function s(t) {
            return t >= 1e9 ? (t / 1e9).toFixed(1).replace(/\.0$/, "") + "G" : t >= 1e6 ? (t / 1e6).toFixed(1).replace(/\.0$/, "") + "M" : t >= 1e3 ? (t / 1e3).toFixed(1).replace(/\.0$/, "") + "K" : t
        }

        function a(i) {
            var o = e.innerWidth ? e.innerWidth : n.documentElement.clientWidth ? n.documentElement.clientWidth : screen.width;
            t.each(i, function() {
                961 > o ? t(this).css("width", 100 / i.length + "%") : t(this).removeAttr("style")
            })
        }

        function l(e, n) {
            e && e > 0 && n.append(t("<span>", {
                "class": "shareCount"
            }).append(s(e))).find("i").removeClass("margin-top-5")
        }

        function c(n, i, o, r) {
            switch (n) {
                case "facebook":
                    t.get("https://graph.facebook.com/" + i, function(t) {
                        l(t.share.share_count, o)
                    }, "jsonp");
                    break;
                case "google-plus":
                    t.get("https://share.yandex.ru/gpp.xml?url=" + i + "&callback=?", function(t) {
                        l(t, o)
                    }, "jsonp");
                    break;
                case "linkedin":
                    t.get("https://www.linkedin.com/countserv/count/share?url=" + i + "&callback=?", function(t) {
                        l(t.count, o)
                    }, "jsonp");
                    break;
                case "odnoklassniki":
                    t.get("https://connect.ok.ru/dk?st.cmd=extLike&ref=" + i + "&callback=?", function() {}, "jsonp"), e.ODKL = e.ODKL || {}, e.ODKL.updateCount = function(t, e) {
                        l(e, o)
                    };
                    break;
                case "pinterest":
                    t.get("https://api.pinterest.com/v1/urls/count.json?url=" + i + "&callback=?", function(t) {
                        l(t.count, o)
                    }, "jsonp");
                    break;
                case "reddit":
                    t.get("https://www.reddit.com/api/info.json?url=" + i + "&jsonp=?", function(t) {
                        l(t.data.children[0].data.score, o)
                    }, "jsonp");
                    break;
                case "tumblr":
                    t.get("https://api.tumblr.com/v2/share/stats?url=" + i + "&callback=?", function(t) {
                        l(t.response.note_count, o)
                    }, "jsonp");
                    break;
                case "twitter":
                    1 == r && t.get("https://opensharecount.com/count.json?url=" + i + "&callback=?", function(t) {
                        l(t.count, o)
                    }, "jsonp");
                    break;
                case "vk":
                    t.get("https://vk.com/share.php?act=count&index=1&url=" + i + "&callback=?", function() {}, "jsonp"), e.VK = e.VK || {}, e.VK.Share = e.VK.Share || {}, e.VK.Share.count = function(t, e) {
                        l(e, o)
                    };
                    break;
                default:
                    return -1
            }
        }
        var u = "floatingSocialShare",
            d = {
                place: "top-left",
                counter: !0,
                twitter_counter: !1,
                buttons: ["facebook", "twitter", "google-plus"],
                title: n.title,
                url: e.location.href,
                description: t('meta[name="description"]').attr("content") || "",
                media: t('meta[property="og:image"]').attr("content") || "",
                text: "share with ",
                popup_width: 400,
                popup_height: 300
            };
        t.extend(o.prototype, {
            init: function() {
                -1 == t.inArray(this.settings.place, f) && (this.settings.place = this._defaults.place);
                var n = this,
                    i = t("<div>", {
                        id: "floatingSocialShare"
                    }),
                    o = t("<div>", {
                        "class": this.settings.place
                    }).appendTo(i);
                t.each(this.settings.buttons, function(e, i) {
                    t.each(p, function(e, r) {
                        if (i === e) {
                            var s = t("<i>", {
                                    "class": "margin-top-5 fa fa-" + i
                                }),
                                a = r.url.replace("{url}", n.settings.url).replace("{title}", n.settings.title).replace("{description}", n.settings.description).replace("{media}", n.settings.media),
                                l = t("<a>", {
                                    title: n.settings.title,
                                    "class": r.className + " pop-upper"
                                }).attr("href", a).attr("title", n.settings.text + i).append(s);
                            return n.settings.counter === !0 && c(i, encodeURI(n.settings.url), l, n.settings.twitter_counter), o.append(l), !1
                        }
                    })
                }), i.appendTo(this.element);
                var s = t(this.element).find(".pop-upper");
                s.on("click", function(e) {
                    e.preventDefault(), r(t(this).attr("href"), t(this).attr("title"), n.settings.popup_width, n.settings.popup_height)
                }), a(s), t(e).resize(function() {
                    a(s)
                })
            }
        });
        var f = ["content-left", "top-left", "top-right"],
            p = {
                envelope: {
                    className: "envelope",
                    url: "mailto:user@domain.com?subject={url}"
                },
                facebook: {
                    className: "facebook",
                    url: "https://www.facebook.com/sharer/sharer.php?u={url}&t={title}"
                },
                "google-plus": {
                    className: "google-plus",
                    url: "https://plus.google.com/share?url={url}"
                },
                linkedin: {
                    className: "linkedin",
                    url: "https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={description}&source="
                },
                odnoklassniki: {
                    className: "odnoklassniki",
                    url: "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl={url}"
                },
                pinterest: {
                    className: "pinterest",
                    url: "https://pinterest.com/pin/create%2Fbutton/?url={url}&description={description}&media={media}"
                },
                reddit: {
                    className: "reddit",
                    url: "https://www.reddit.com/submit?url={url}&title={title}"
                },
                stumbleupon: {
                    className: "stumbleupon",
                    url: "https://www.stumbleupon.com/submit?url={url}&title={title}"
                },
                tumblr: {
                    className: "tumblr",
                    url: "https://www.tumblr.com/share/link?url={url}&name={title}&description={description}"
                },
                twitter: {
                    className: "twitter",
                    url: "https://twitter.com/home?status={url}"
                },
                vk: {
                    className: "vk",
                    url: "https://vk.com/share.php?url={url}&title={title}&description={description}"
                }
            };
        t.fn[u] = function(e) {
            return this.each(function() {
                t.data(this, "plugin_" + u) || t.data(this, "plugin_" + u, new o(this, e))
            })
        }
    }(jQuery, window, document), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var o = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t("#" === r ? [] : r);
        e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.button"),
                r = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function() {
            i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target).closest(".btn");
        e.call(i, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.carousel"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e),
            i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap) return e;
        var o = "prev" == t ? -1 : 1,
            r = (n + o) % this.$items.length;
        return this.$items.eq(r)
    }, n.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, n.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, n.prototype.slide = function(e, i) {
        var o = this.$element.find(".item.active"),
            r = i || this.getItemForDirection(e, o),
            s = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var c = r[0],
            u = t.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(r)]);
                d && d.addClass("active")
            }
            var f = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function() {
                r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(f)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(f)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    };
    var o = function(n) {
        var i, o = t(this),
            r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.collapse"),
                r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var r = e(o),
            s = r.data("bs.collapse"),
            a = s ? "toggle" : o.data();
        n.call(r, a)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(o).remove(), t(r).each(function() {
            var i = t(this),
                o = e(i),
                r = {
                    relatedTarget: this
                };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
        }))
    }

    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.7", s.prototype.toggle = function(i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = e(o),
                s = r.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (r.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, s.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = e(i),
                    s = o.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = o.find(".dropdown-menu" + a);
                if (l.length) {
                    var c = l.index(n.target);
                    38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, i) {
        return this.each(function() {
            var o = t(this),
                r = o.data("bs.modal"),
                s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new n(this, s)), "string" == typeof e ? r[e](i) : s.show && r.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var i = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            o = i.attr("href"),
            r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(r, s, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tooltip"),
                r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var o = this,
                r = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(a);
            c && (a = a.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                d = r[0].offsetWidth,
                f = r[0].offsetHeight;
            if (c) {
                var p = a,
                    h = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + f > h.bottom ? "top" : "top" == a && u.top - f < h.top ? "bottom" : "right" == a && u.right + d > h.width ? "left" : "left" == a && u.left - d < h.left ? "right" : a, r.removeClass(p).addClass(a)
            }
            var g = this.getCalculatedOffset(a, u, d, f);
            this.applyPlacement(g, a);
            var m = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != r && (e.top = e.top + r - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var d = /top|bottom/.test(n),
            f = d ? 2 * u.left - o + l : 2 * u.top - r + c,
            p = d ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(f, i[0][p], d)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(e) {
        function i() {
            "in" != o.hoverState && r.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }
        var o = this,
            r = t(this.$tip),
            s = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(s), !s.isDefaultPrevented()) return r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = window.SVGElement && n instanceof window.SVGElement,
            s = i ? {
                top: 0,
                left: 0
            } : r ? null : e.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, a, l, s)
    }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll,
                l = e.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var c = e.left - r,
                u = e.left + r + n;
            c < s.left ? o.left = s.left - c : u > s.right && (o.left = s.left + s.width - u)
        }
        return o
    }, n.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.popover"),
                r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                o = e.data("target") || e.attr("href"),
                r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [
                [r[n]().top + i, o]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                r = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, i, o) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var s = i.find("> .active"),
            a = o && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    };
    var o = function(n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.affix"),
                r = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(t, e, n, i) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return o < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - i) && "bottom";
        var a = null == this.affixed,
            l = a ? o : r.top,
            c = a ? s : e;
        return null != n && o <= n ? "top" : null != i && l + c >= t - i && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var a = this.getState(s, e, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - r
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery),
function() {
    function t(t, e, n) {
        return t.call.apply(t.bind, arguments)
    }

    function e(t, e, n) {
        if (!t) throw Error();
        if (2 < arguments.length) {
            var i = Array.prototype.slice.call(arguments, 2);
            return function() {
                var n = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(n, i), t.apply(e, n)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }

    function n(i, o, r) {
        return n = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? t : e, n.apply(null, arguments)
    }

    function i(t, e) {
        this.a = t, this.m = e || t, this.c = this.m.document
    }

    function o(t, e, n, i) {
        if (e = t.c.createElement(e), n)
            for (var o in n) n.hasOwnProperty(o) && ("style" == o ? e.style.cssText = n[o] : e.setAttribute(o, n[o]));
        return i && e.appendChild(t.c.createTextNode(i)), e
    }

    function r(t, e, n) {
        t = t.c.getElementsByTagName(e)[0], t || (t = document.documentElement), t.insertBefore(n, t.lastChild)
    }

    function s(t) {
        t.parentNode && t.parentNode.removeChild(t)
    }

    function a(t, e, n) {
        e = e || [], n = n || [];
        for (var i = t.className.split(/\s+/), o = 0; o < e.length; o += 1) {
            for (var r = !1, s = 0; s < i.length; s += 1)
                if (e[o] === i[s]) {
                    r = !0;
                    break
                }
            r || i.push(e[o])
        }
        for (e = [], o = 0; o < i.length; o += 1) {
            for (r = !1, s = 0; s < n.length; s += 1)
                if (i[o] === n[s]) {
                    r = !0;
                    break
                }
            r || e.push(i[o])
        }
        t.className = e.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function l(t, e) {
        for (var n = t.className.split(/\s+/), i = 0, o = n.length; i < o; i++)
            if (n[i] == e) return !0;
        return !1
    }

    function c(t) {
        if ("string" == typeof t.f) return t.f;
        var e = t.m.location.protocol;
        return "about:" == e && (e = t.a.location.protocol), "https:" == e ? "https:" : "http:"
    }

    function u(t) {
        return t.m.location.hostname || t.a.location.hostname
    }

    function d(t, e, n) {
        function i() {
            c && s && a && (c(l), c = null)
        }
        e = o(t, "link", {
            rel: "stylesheet",
            href: e,
            media: "all"
        });
        var s = !1,
            a = !0,
            l = null,
            c = n || null;
        it ? (e.onload = function() {
            s = !0, i()
        }, e.onerror = function() {
            s = !0, l = Error("Stylesheet failed to load"), i()
        }) : setTimeout(function() {
            s = !0, i()
        }, 0), r(t, "head", e)
    }

    function f(t, e, n, i) {
        var r = t.c.getElementsByTagName("head")[0];
        if (r) {
            var s = o(t, "script", {
                    src: e
                }),
                a = !1;
            return s.onload = s.onreadystatechange = function() {
                a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (a = !0, n && n(null), s.onload = s.onreadystatechange = null, "HEAD" == s.parentNode.tagName && r.removeChild(s))
            }, r.appendChild(s), setTimeout(function() {
                a || (a = !0, n && n(Error("Script load timeout")))
            }, i || 5e3), s
        }
        return null
    }

    function p() {
        this.a = 0, this.c = null
    }

    function h(t) {
        return t.a++,
            function() {
                t.a--, m(t)
            }
    }

    function g(t, e) {
        t.c = e, m(t)
    }

    function m(t) {
        0 == t.a && t.c && (t.c(), t.c = null)
    }

    function v(t) {
        this.a = t || "-"
    }

    function y(t, e) {
        this.c = t, this.f = 4, this.a = "n";
        var n = (e || "n4").match(/^([nio])([1-9])$/i);
        n && (this.a = n[1], this.f = parseInt(n[2], 10))
    }

    function b(t) {
        return T(t) + " " + (t.f + "00") + " 300px " + w(t.c)
    }

    function w(t) {
        var e = [];
        t = t.split(/,\s*/);
        for (var n = 0; n < t.length; n++) {
            var i = t[n].replace(/['"]/g, ""); - 1 != i.indexOf(" ") || /^\d/.test(i) ? e.push("'" + i + "'") : e.push(i)
        }
        return e.join(",")
    }

    function x(t) {
        return t.a + t.f
    }

    function T(t) {
        var e = "normal";
        return "o" === t.a ? e = "oblique" : "i" === t.a && (e = "italic"), e
    }

    function C(t) {
        var e = 4,
            n = "n",
            i = null;
        return t && ((i = t.match(/(normal|oblique|italic)/i)) && i[1] && (n = i[1].substr(0, 1).toLowerCase()), (i = t.match(/([1-9]00|normal|bold)/i)) && i[1] && (/bold/i.test(i[1]) ? e = 7 : /[1-9]00/.test(i[1]) && (e = parseInt(i[1].substr(0, 1), 10)))), n + e
    }

    function k(t, e) {
        this.c = t, this.f = t.m.document.documentElement, this.h = e, this.a = new v("-"), this.j = !1 !== e.events, this.g = !1 !== e.classes
    }

    function E(t) {
        t.g && a(t.f, [t.a.c("wf", "loading")]), S(t, "loading")
    }

    function N(t) {
        if (t.g) {
            var e = l(t.f, t.a.c("wf", "active")),
                n = [],
                i = [t.a.c("wf", "loading")];
            e || n.push(t.a.c("wf", "inactive")), a(t.f, n, i)
        }
        S(t, "inactive")
    }

    function S(t, e, n) {
        t.j && t.h[e] && (n ? t.h[e](n.c, x(n)) : t.h[e]())
    }

    function $() {
        this.c = {}
    }

    function A(t, e, n) {
        var i, o = [];
        for (i in e)
            if (e.hasOwnProperty(i)) {
                var r = t.c[i];
                r && o.push(r(e[i], n))
            }
        return o
    }

    function D(t, e) {
        this.c = t, this.f = e, this.a = o(this.c, "span", {
            "aria-hidden": "true"
        }, this.f)
    }

    function j(t) {
        r(t.c, "body", t.a)
    }

    function L(t) {
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + w(t.c) + ";" + ("font-style:" + T(t) + ";font-weight:" + (t.f + "00") + ";")
    }

    function O(t, e, n, i, o, r) {
        this.g = t, this.j = e, this.a = i, this.c = n, this.f = o || 3e3, this.h = r || void 0
    }

    function _(t, e, n, i, o, r, s) {
        this.v = t, this.B = e, this.c = n, this.a = i, this.s = s || "BESbswy", this.f = {}, this.w = o || 3e3, this.u = r || null, this.o = this.j = this.h = this.g = null, this.g = new D(this.c, this.s), this.h = new D(this.c, this.s), this.j = new D(this.c, this.s), this.o = new D(this.c, this.s), t = new y(this.a.c + ",serif", x(this.a)), t = L(t), this.g.a.style.cssText = t, t = new y(this.a.c + ",sans-serif", x(this.a)), t = L(t), this.h.a.style.cssText = t, t = new y("serif", x(this.a)), t = L(t), this.j.a.style.cssText = t, t = new y("sans-serif", x(this.a)), t = L(t), this.o.a.style.cssText = t, j(this.g), j(this.h), j(this.j), j(this.o)
    }

    function I() {
        if (null === rt) {
            var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            rt = !!t && (536 > parseInt(t[1], 10) || 536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10))
        }
        return rt
    }

    function H(t, e, n) {
        for (var i in ot)
            if (ot.hasOwnProperty(i) && e === t.f[ot[i]] && n === t.f[ot[i]]) return !0;
        return !1
    }

    function R(t) {
        var e, n = t.g.a.offsetWidth,
            i = t.h.a.offsetWidth;
        (e = n === t.f.serif && i === t.f["sans-serif"]) || (e = I() && H(t, n, i)), e ? nt() - t.A >= t.w ? I() && H(t, n, i) && (null === t.u || t.u.hasOwnProperty(t.a.c)) ? P(t, t.v) : P(t, t.B) : F(t) : P(t, t.v)
    }

    function F(t) {
        setTimeout(n(function() {
            R(this)
        }, t), 50)
    }

    function P(t, e) {
        setTimeout(n(function() {
            s(this.g.a), s(this.h.a), s(this.j.a), s(this.o.a), e(this.a)
        }, t), 0)
    }

    function q(t, e, n) {
        this.c = t, this.a = e, this.f = 0, this.o = this.j = !1, this.s = n
    }

    function W(t) {
        0 == --t.f && t.j && (t.o ? (t = t.a, t.g && a(t.f, [t.a.c("wf", "active")], [t.a.c("wf", "loading"), t.a.c("wf", "inactive")]), S(t, "active")) : N(t.a))
    }

    function M(t) {
        this.j = t, this.a = new $, this.h = 0, this.f = this.g = !0
    }

    function B(t, e, i, o, r) {
        var s = 0 == --t.h;
        (t.f || t.g) && setTimeout(function() {
            var t = r || null,
                l = o || null || {};
            if (0 === i.length && s) N(e.a);
            else {
                e.f += i.length, s && (e.j = s);
                var c, u = [];
                for (c = 0; c < i.length; c++) {
                    var d = i[c],
                        f = l[d.c],
                        p = e.a,
                        h = d;
                    p.g && a(p.f, [p.a.c("wf", h.c, x(h).toString(), "loading")]), S(p, "fontloading", h), p = null, null === st && (st = !!window.FontFace && (!(h = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)) || 42 < parseInt(h[1], 10))), p = st ? new O(n(e.g, e), n(e.h, e), e.c, d, e.s, f) : new _(n(e.g, e), n(e.h, e), e.c, d, e.s, t, f), u.push(p)
                }
                for (c = 0; c < u.length; c++) u[c].start()
            }
        }, 0)
    }

    function z(t, e, n) {
        var i = [],
            o = n.timeout;
        E(e);
        var i = A(t.a, n, t.c),
            r = new q(t.c, e, o);
        for (t.h = i.length, e = 0, n = i.length; e < n; e++) i[e].load(function(e, n, i) {
            B(t, r, e, n, i)
        })
    }

    function U(t, e) {
        this.c = t, this.a = e
    }

    function V(t, e, n) {
        var i = c(t.c);
        return t = (t.a.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, ""), i + "//" + t + "/" + e + ".js" + (n ? "?v=" + n : "")
    }

    function X(t, e) {
        this.c = t, this.a = e
    }

    function Q(t, e, n) {
        t ? this.c = t : this.c = e + at, this.a = [], this.f = [], this.g = n || ""
    }

    function K(t, e) {
        for (var n = e.length, i = 0; i < n; i++) {
            var o = e[i].split(":");
            3 == o.length && t.f.push(o.pop());
            var r = "";
            2 == o.length && "" != o[1] && (r = ":"), t.a.push(o.join(r))
        }
    }

    function G(t) {
        if (0 == t.a.length) throw Error("No fonts to load!");
        if (-1 != t.c.indexOf("kit=")) return t.c;
        for (var e = t.a.length, n = [], i = 0; i < e; i++) n.push(t.a[i].replace(/ /g, "+"));
        return e = t.c + "?family=" + n.join("%7C"), 0 < t.f.length && (e += "&subset=" + t.f.join(",")), 0 < t.g.length && (e += "&text=" + encodeURIComponent(t.g)), e
    }

    function J(t) {
        this.f = t, this.a = [], this.c = {}
    }

    function Y(t) {
        for (var e = t.f.length, n = 0; n < e; n++) {
            var i = t.f[n].split(":"),
                o = i[0].replace(/\+/g, " "),
                r = ["n4"];
            if (2 <= i.length) {
                var s, a = i[1];
                if (s = [], a)
                    for (var a = a.split(","), l = a.length, c = 0; c < l; c++) {
                        var u;
                        if (u = a[c], u.match(/^[\w-]+$/)) {
                            var d = dt.exec(u.toLowerCase());
                            if (null == d) u = "";
                            else {
                                if (u = d[2], u = null == u || "" == u ? "n" : ut[u], d = d[1], null == d || "" == d) d = "4";
                                else var f = ct[d],
                                    d = f ? f : isNaN(d) ? "4" : d.substr(0, 1);
                                u = [u, d].join("")
                            }
                        } else u = "";
                        u && s.push(u)
                    }
                0 < s.length && (r = s), 3 == i.length && (i = i[2], s = [], i = i ? i.split(",") : s, 0 < i.length && (i = lt[i[0]]) && (t.c[o] = i))
            }
            for (t.c[o] || (i = lt[o]) && (t.c[o] = i), i = 0; i < r.length; i += 1) t.a.push(new y(o, r[i]))
        }
    }

    function Z(t, e) {
        this.c = t, this.a = e
    }

    function tt(t, e) {
        this.c = t, this.a = e
    }

    function et(t, e) {
        this.c = t, this.f = e, this.a = []
    }
    var nt = Date.now || function() {
            return +new Date
        },
        it = !!window.FontFace;
    v.prototype.c = function(t) {
        for (var e = [], n = 0; n < arguments.length; n++) e.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
        return e.join(this.a)
    }, O.prototype.start = function() {
        var t = this.c.m.document,
            e = this,
            n = nt(),
            i = new Promise(function(i, o) {
                function r() {
                    nt() - n >= e.f ? o() : t.fonts.load(b(e.a), e.h).then(function(t) {
                        1 <= t.length ? i() : setTimeout(r, 25)
                    }, function() {
                        o()
                    })
                }
                r()
            }),
            o = new Promise(function(t, n) {
                setTimeout(n, e.f)
            });
        Promise.race([o, i]).then(function() {
            e.g(e.a)
        }, function() {
            e.j(e.a)
        })
    };
    var ot = {
            D: "serif",
            C: "sans-serif"
        },
        rt = null;
    _.prototype.start = function() {
        this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.o.a.offsetWidth, this.A = nt(), R(this)
    };
    var st = null;
    q.prototype.g = function(t) {
        var e = this.a;
        e.g && a(e.f, [e.a.c("wf", t.c, x(t).toString(), "active")], [e.a.c("wf", t.c, x(t).toString(), "loading"), e.a.c("wf", t.c, x(t).toString(), "inactive")]), S(e, "fontactive", t), this.o = !0, W(this)
    }, q.prototype.h = function(t) {
        var e = this.a;
        if (e.g) {
            var n = l(e.f, e.a.c("wf", t.c, x(t).toString(), "active")),
                i = [],
                o = [e.a.c("wf", t.c, x(t).toString(), "loading")];
            n || i.push(e.a.c("wf", t.c, x(t).toString(), "inactive")), a(e.f, i, o)
        }
        S(e, "fontinactive", t), W(this)
    }, M.prototype.load = function(t) {
        this.c = new i(this.j, t.context || this.j), this.g = !1 !== t.events, this.f = !1 !== t.classes, z(this, new k(this.c, t), t)
    }, U.prototype.load = function(t) {
        function e() {
            if (r["__mti_fntLst" + i]) {
                var n, o = r["__mti_fntLst" + i](),
                    s = [];
                if (o)
                    for (var a = 0; a < o.length; a++) {
                        var l = o[a].fontfamily;
                        void 0 != o[a].fontStyle && void 0 != o[a].fontWeight ? (n = o[a].fontStyle + o[a].fontWeight, s.push(new y(l, n))) : s.push(new y(l))
                    }
                t(s)
            } else setTimeout(function() {
                e()
            }, 50)
        }
        var n = this,
            i = n.a.projectId,
            o = n.a.version;
        if (i) {
            var r = n.c.m;
            f(this.c, V(n, i, o), function(o) {
                o ? t([]) : (r["__MonotypeConfiguration__" + i] = function() {
                    return n.a
                }, e())
            }).id = "__MonotypeAPIScript__" + i
        } else t([])
    }, X.prototype.load = function(t) {
        var e, n, i = this.a.urls || [],
            o = this.a.families || [],
            r = this.a.testStrings || {},
            s = new p;
        for (e = 0, n = i.length; e < n; e++) d(this.c, i[e], h(s));
        var a = [];
        for (e = 0, n = o.length; e < n; e++)
            if (i = o[e].split(":"), i[1])
                for (var l = i[1].split(","), c = 0; c < l.length; c += 1) a.push(new y(i[0], l[c]));
            else a.push(new y(i[0]));
        g(s, function() {
            t(a, r)
        })
    };
    var at = "//fonts.googleapis.com/css",
        lt = {
            latin: "BESbswy",
            "latin-ext": "çöüğş",
            cyrillic: "йяЖ",
            greek: "αβΣ",
            khmer: "កខគ",
            Hanuman: "កខគ"
        },
        ct = {
            thin: "1",
            extralight: "2",
            "extra-light": "2",
            ultralight: "2",
            "ultra-light": "2",
            light: "3",
            regular: "4",
            book: "4",
            medium: "5",
            "semi-bold": "6",
            semibold: "6",
            "demi-bold": "6",
            demibold: "6",
            bold: "7",
            "extra-bold": "8",
            extrabold: "8",
            "ultra-bold": "8",
            ultrabold: "8",
            black: "9",
            heavy: "9",
            l: "3",
            r: "4",
            b: "7"
        },
        ut = {
            i: "i",
            italic: "i",
            n: "n",
            normal: "n"
        },
        dt = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,
        ft = {
            Arimo: !0,
            Cousine: !0,
            Tinos: !0
        };
    Z.prototype.load = function(t) {
        var e = new p,
            n = this.c,
            i = new Q(this.a.api, c(n), this.a.text),
            o = this.a.families;
        K(i, o);
        var r = new J(o);
        Y(r), d(n, G(i), h(e)), g(e, function() {
            t(r.a, r.c, ft)
        })
    }, tt.prototype.load = function(t) {
        var e = this.a.id,
            n = this.c.m;
        e ? f(this.c, (this.a.api || "https://use.typekit.net") + "/" + e + ".js", function(e) {
            if (e) t([]);
            else if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
                e = n.Typekit.config.fn;
                for (var i = [], o = 0; o < e.length; o += 2)
                    for (var r = e[o], s = e[o + 1], a = 0; a < s.length; a++) i.push(new y(r, s[a]));
                try {
                    n.Typekit.load({
                        events: !1,
                        classes: !1,
                        async: !0
                    })
                } catch (l) {}
                t(i)
            }
        }, 2e3) : t([])
    }, et.prototype.load = function(t) {
        var e = this.f.id,
            n = this.c.m,
            i = this;
        e ? (n.__webfontfontdeckmodule__ || (n.__webfontfontdeckmodule__ = {}), n.__webfontfontdeckmodule__[e] = function(e, n) {
            for (var o = 0, r = n.fonts.length; o < r; ++o) {
                var s = n.fonts[o];
                i.a.push(new y(s.name, C("font-weight:" + s.weight + ";font-style:" + s.style)))
            }
            t(i.a)
        }, f(this.c, c(this.c) + (this.f.api || "//f.fontdeck.com/s/css/js/") + u(this.c) + "/" + e + ".js", function(e) {
            e && t([])
        })) : t([])
    };
    var pt = new M(window);
    pt.a.c.custom = function(t, e) {
        return new X(e, t)
    }, pt.a.c.fontdeck = function(t, e) {
        return new et(e, t)
    }, pt.a.c.monotype = function(t, e) {
        return new U(e, t)
    }, pt.a.c.typekit = function(t, e) {
        return new tt(e, t)
    }, pt.a.c.google = function(t, e) {
        return new Z(e, t)
    };
    var ht = {
        load: n(pt.load, pt)
    };
    "function" == typeof define && define.amd ? define(function() {
        return ht
    }) : "undefined" != typeof module && module.exports ? module.exports = ht : (window.WebFont = ht, window.WebFontConfig && pt.load(window.WebFontConfig))
}(), $(function() {
    $('iframe[src*="youtube.com"]').each(function() {
        $(this).hasClass("embed-responsive-item") || ($(this).wrap("<div class='row'><div class='col-sm-6 padding-left-0'><div class='embed-responsive embed-responsive-16by9'></div></div></div>"), $(this).addClass("embed-responsive-item"))
    }), WebFont.load({
        google: {
            families: ["Open+Sans:400,700:latin-ext"]
        }
    }), $("body").floatingSocialShare({
        buttons: ["facebook", "twitter", "google-plus"],
        text: ""
    }), $("img.chosen-one").click(function() {
        $('input[name="language"]').val($(this).attr("alt")), $("#anakin-skywalker").submit()
    })
});
