var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, t = t || {}, r = r || {}, o = o || {}, n = n || {};

r.__wcc_version__ = "v0.5vv_20190703_syb_scopedata", r.__wcc_version_info__ = {
    customComponents: !0,
    fixZeroRpx: !0,
    propValueDeepCopy: !1
};

var a;

$gwx = function(t, r) {
    function n(e, t) {
        void 0 !== t && e.children.push(t);
    }
    function i(e) {
        return void 0 !== e ? {
            tag: "virtual",
            wxKey: e,
            children: []
        } : {
            tag: "virtual",
            children: []
        };
    }
    function p(e) {
        if (++a >= 16e3) throw "Dom limit exceeded, please check if there's any mistake you've made.";
        return {
            tag: "wx-" + e,
            attr: {},
            children: [],
            n: [],
            raw: {},
            generics: {}
        };
    }
    function c(e) {
        for (var t = e.split("\n    "), r = 0; r < t.length; ++r) 0 != r && (")" === t[r][t[r].length - 1] ? t[r] = t[r].replace(/\s\(.*\)$/, "") : t[r] = "at anonymous function");
        return t.join("\n    ");
    }
    function u(t) {
        function r(e, r, n, a, i) {
            var p, c, u, s, l = e[0][1];
            switch (l) {
              case "?:":
                return p = o(e[1], r, n, a, i, !1), u = t && "h" === wh.hn(p), s = wh.rv(p) ? o(e[2], r, n, a, i, !1) : o(e[3], r, n, a, i, !1), 
                s = u && "n" === wh.hn(s) ? wh.nh(s, "c") : s;

              case "&&":
                return p = o(e[1], r, n, a, i, !1), u = t && "h" === wh.hn(p), s = wh.rv(p) ? o(e[2], r, n, a, i, !1) : wh.rv(p), 
                s = u && "n" === wh.hn(s) ? wh.nh(s, "c") : s;

              case "||":
                return p = o(e[1], r, n, a, i, !1), u = t && "h" === wh.hn(p), s = wh.rv(p) ? wh.rv(p) : o(e[2], r, n, a, i, !1), 
                s = u && "n" === wh.hn(s) ? wh.nh(s, "c") : s;

              case "+":
              case "*":
              case "/":
              case "%":
              case "|":
              case "^":
              case "&":
              case "===":
              case "==":
              case "!=":
              case "!==":
              case ">=":
              case "<=":
              case ">":
              case "<":
              case "<<":
              case ">>":
                switch (p = o(e[1], r, n, a, i, !1), c = o(e[2], r, n, a, i, !1), u = t && ("h" === wh.hn(p) || "h" === wh.hn(c)), 
                l) {
                  case "+":
                    s = wh.rv(p) + wh.rv(c);
                    break;

                  case "*":
                    s = wh.rv(p) * wh.rv(c);
                    break;

                  case "/":
                    s = wh.rv(p) / wh.rv(c);
                    break;

                  case "%":
                    s = wh.rv(p) % wh.rv(c);
                    break;

                  case "|":
                    s = wh.rv(p) | wh.rv(c);
                    break;

                  case "^":
                    s = wh.rv(p) ^ wh.rv(c);
                    break;

                  case "&":
                    s = wh.rv(p) & wh.rv(c);
                    break;

                  case "===":
                    s = wh.rv(p) === wh.rv(c);
                    break;

                  case "==":
                    s = wh.rv(p) == wh.rv(c);
                    break;

                  case "!=":
                    s = wh.rv(p) != wh.rv(c);
                    break;

                  case "!==":
                    s = wh.rv(p) !== wh.rv(c);
                    break;

                  case ">=":
                    s = wh.rv(p) >= wh.rv(c);
                    break;

                  case "<=":
                    s = wh.rv(p) <= wh.rv(c);
                    break;

                  case ">":
                    s = wh.rv(p) > wh.rv(c);
                    break;

                  case "<":
                    s = wh.rv(p) < wh.rv(c);
                    break;

                  case "<<":
                    s = wh.rv(p) << wh.rv(c);
                    break;

                  case ">>":
                    s = wh.rv(p) >> wh.rv(c);
                }
                return u ? wh.nh(s, "c") : s;

              case "-":
                return p = 3 === e.length ? o(e[1], r, n, a, i, !1) : 0, c = 3 === e.length ? o(e[2], r, n, a, i, !1) : o(e[1], r, n, a, i, !1), 
                u = t && ("h" === wh.hn(p) || "h" === wh.hn(c)), s = u ? wh.rv(p) - wh.rv(c) : p - c, 
                u ? wh.nh(s, "c") : s;

              case "!":
                return p = o(e[1], r, n, a, i, !1), u = t && "h" == wh.hn(p), s = !wh.rv(p), u ? wh.nh(s, "c") : s;

              case "~":
                return p = o(e[1], r, n, a, i, !1), u = t && "h" == wh.hn(p), s = ~wh.rv(p), u ? wh.nh(s, "c") : s;

              default:
                $gwn("unrecognized op" + l);
            }
        }
        function o(n, a, i, p, u, l) {
            var f = n[0];
            if (void 0 !== l && (u.ap = l), "object" === (void 0 === f ? "undefined" : e(f))) {
                var v, w, y, h, g, b, _, x, m;
                switch (f[0]) {
                  case 2:
                    return r(n, a, i, p, u);

                  case 4:
                    return o(n[1], a, i, p, u, !1);

                  case 5:
                    switch (n.length) {
                      case 2:
                        return M = o(n[1], a, i, p, u, !1), t ? [ M ] : [ wh.rv(M) ];

                      case 1:
                        return [];

                      default:
                        return M = o(n[1], a, i, p, u, !1), w = o(n[2], a, i, p, u, !1), M.push(t ? w : wh.rv(w)), 
                        M;
                    }
                    break;

                  case 6:
                    M = o(n[1], a, i, p, u);
                    D = u.ap;
                    if (_ = "h" === wh.hn(M), v = _ ? wh.rv(M) : M, u.is_affected |= _, t) return null === v || void 0 === v ? _ ? wh.nh(void 0, "e") : void 0 : (w = o(n[2], a, i, p, u, !1), 
                    x = "h" === wh.hn(w), y = x ? wh.rv(w) : w, u.ap = D, u.is_affected |= x, null === y || void 0 === y || "__proto__" === y || "prototype" === y || "caller" === y ? _ || x ? wh.nh(void 0, "e") : void 0 : ("function" != typeof (h = v[y]) || D || (h = void 0), 
                    m = "h" === wh.hn(h), u.is_affected |= m, _ || x ? m ? h : wh.nh(h, "e") : h));
                    if (null === v || void 0 === v) return;
                    if (w = o(n[2], a, i, p, u, !1), x = "h" === wh.hn(w), y = x ? wh.rv(w) : w, u.ap = D, 
                    u.is_affected |= x, null === y || void 0 === y || "__proto__" === y || "prototype" === y || "caller" === y) return;
                    return "function" != typeof (h = v[y]) || D || (h = void 0), m = "h" === wh.hn(h), 
                    u.is_affected |= m, m ? wh.rv(h) : h;

                  case 7:
                    switch (n[1][0]) {
                      case 11:
                        return u.is_affected |= "h" === wh.hn(p), p;

                      case 3:
                        if (g = wh.rv(i), b = wh.rv(a), w = n[1][1], p && p.f && p.f.hasOwnProperty(w) ? (M = p.f, 
                        u.ap = !0) : M = g && g.hasOwnProperty(w) ? i : b && b.hasOwnProperty(w) ? a : void 0, 
                        t) {
                            if (M) return _ = "h" === wh.hn(M), v = _ ? wh.rv(M) : M, h = v[w], m = "h" === wh.hn(h), 
                            u.is_affected |= _ || m, h = _ && !m ? wh.nh(h, "e") : h;
                        } else if (M) return _ = "h" === wh.hn(M), v = _ ? wh.rv(M) : M, h = v[w], m = "h" === wh.hn(h), 
                        u.is_affected |= _ || m, wh.rv(h);
                        return;
                    }
                    break;

                  case 8:
                    return M = {}, M[n[1]] = o(n[2], a, i, p, u, !1), M;

                  case 9:
                    M = o(n[1], a, i, p, u, !1), w = o(n[2], a, i, p, u, !1);
                    var O = function(e, r, o) {
                        _ = "h" === wh.hn(e), x = "h" === wh.hn(r), v = wh.rv(e), y = wh.rv(r);
                        for (var n in y) !o && v.hasOwnProperty(n) || (v[n] = t ? x ? wh.nh(y[n], "e") : y[n] : wh.rv(y[n]));
                        return e;
                    }, j = M, P = !0;
                    return "object" === e(n[1][0]) && 10 === n[1][0][0] && (M = w, w = j, P = !1), "object" === e(n[1][0]) && 10 === n[1][0][0] ? O(O(S = {}, M, P), w, P) : O(M, w, P);

                  case 10:
                    return M = o(n[1], a, i, p, u, !1), M = t ? M : wh.rv(M);

                  case 12:
                    var S;
                    if (M = o(n[1], a, i, p, u), !u.ap) return t && "h" === wh.hn(M) ? wh.nh(S, "f") : S;
                    var D = u.ap;
                    w = o(n[2], a, i, p, u, !1), u.ap = D, _ = "h" === wh.hn(M), x = s(w), v = wh.rv(M), 
                    y = wh.rv(w), snap_bb = d(y, "nv_");
                    try {
                        S = "function" == typeof v ? d(v.apply(null, snap_bb)) : void 0;
                    } catch (a) {
                        a.message = a.message.replace(/nv_/g, ""), a.stack = a.stack.substring(0, a.stack.indexOf("\n", a.stack.lastIndexOf("at nv_"))), 
                        a.stack = a.stack.replace(/\snv_/g, " "), a.stack = c(a.stack), p.debugInfo && (a.stack += "\n    at " + p.debugInfo[0] + ":" + p.debugInfo[1] + ":" + p.debugInfo[2], 
                        console.error(a)), S = void 0;
                    }
                    return t && (x || _) ? wh.nh(S, "f") : S;
                }
            } else {
                if (3 === f || 1 === f) return n[1];
                if (11 === f) {
                    for (var M = "", C = 1; C < n.length; C++) {
                        var T = wh.rv(o(n[C], a, i, p, u, !1));
                        M += void 0 === T ? "" : T;
                    }
                    return M;
                }
            }
        }
        return function(e, t, r, n, a, i) {
            return "11182016" == e[0] ? (n.debugInfo = e[2], o(e[1], t, r, n, a, i)) : (n.debugInfo = null, 
            o(e, t, r, n, a, i));
        };
    }
    function s(t) {
        if ("h" == wh.hn(t)) return !0;
        if ("object" !== (void 0 === t ? "undefined" : e(t))) return !1;
        for (var r in t) if (t.hasOwnProperty(r) && s(t[r])) return !0;
        return !1;
    }
    function l(e, t, r, o, n) {
        var a = d(o, "", 2);
        n.ap && a && a.constructor === Function && (t = "$wxs:" + t, e.attr.$gdc = d), (n.is_affected || s(o)) && (e.n.push(t), 
        e.raw[t] = o), e.attr[t] = a;
    }
    function f(e, t, r, o, n, a, i) {
        i.opindex = o;
        var p = {};
        l(t, r, o, grb(e[o], n, a, i, p), p);
    }
    function v(e, t, r, o, n) {
        n.opindex = t;
        var a = {}, i = grb(e[t], r, o, n, a);
        return i && i.constructor === Function ? void 0 : i;
    }
    function w(e, t, r, o, n, a, i) {
        for (var c = p(t), u = 0, s = 0; s < r.length; s += 2) u + r[s + 1] < 0 ? c.attr[r[s]] = !0 : (f(e, c, r[s], u + r[s + 1], n, a, i), 
        0 === u && (u = r[s + 1]));
        for (s = 0; s < o.length; s += 2) if (u + o[s + 1] < 0) c.generics[o[s]] = ""; else {
            var l = grb(e[u + o[s + 1]], n, a, i);
            "" != l && (l = "wx-" + l), c.generics[o[s]] = l, 0 === u && (u = o[s + 1]);
        }
        return c;
    }
    function d(e, t, r) {
        if (null === (e = wh.rv(e)) || void 0 === e) return e;
        if (e.constructor === String || e.constructor === Boolean || e.constructor === Number) return e;
        if (e.constructor === Object) {
            n = {};
            for (var o in e) e.hasOwnProperty(o) && (void 0 === t ? n[o.substring(3)] = d(e[o], t, r) : n[t + o] = d(e[o], t, r));
            return n;
        }
        if (e.constructor === Array) {
            for (var n = [], a = 0; a < e.length; a++) n.push(d(e[a], t, r));
            return n;
        }
        if (e.constructor === Date) return (n = new Date()).setTime(e.getTime()), n;
        if (e.constructor === RegExp) {
            var i = "";
            return e.global && (i += "g"), e.ignoreCase && (i += "i"), e.multiline && (i += "m"), 
            new RegExp(e.source, i);
        }
        if (r && e.constructor === Function) {
            if (1 == r) return d(e(), void 0, 2);
            if (2 == r) return e;
        }
        return null;
    }
    function y(e) {
        "wx-wx-scope" == e.tag && (e.tag = "virtual", e.wxCkey = "11", e.wxScopeData = e.attr["wx:scope-data"], 
        delete e.n, delete e.raw, delete e.generics, delete e.attr);
        for (var t = 0; e.children && t < e.children.length; t++) y(e.children[t]);
        return e;
    }
    function h() {
        return o.ops_cached.$gwx_1 ? o.ops_cached.$gwx_1 : (o.ops_cached.$gwx_1 = [], function(e) {
            function t(t) {
                e.push(t);
            }
            t([ 3, "formid" ]), t([ [ 2, "&&" ], [ [ 6 ], [ [ 7 ], [ 3, "config" ] ], [ 3, "contact" ] ], [ [ 2, "==" ], [ [ 6 ], [ [ 7 ], [ 3, "config" ] ], [ 3, "auth1" ] ], [ 1, 0 ] ] ]), 
            t([ [ 2, "&&" ], [ [ 2, "==" ], [ [ 6 ], [ [ 7 ], [ 3, "config" ] ], [ 3, "isshow" ] ], [ 1, 0 ] ], [ [ 2, "==" ], [ [ 6 ], [ [ 7 ], [ 3, "config" ] ], [ 3, "auth1" ] ], [ 1, 0 ] ] ]), 
            t([ [ 6 ], [ [ 7 ], [ 3, "config" ] ], [ 3, "appid" ] ]), t([ [ 6 ], [ [ 7 ], [ 3, "config" ] ], [ 3, "showpic" ] ]), 
            t([ [ 6 ], [ [ 7 ], [ 3, "config" ] ], [ 3, "customer" ] ]), t([ [ 2, "&&" ], [ [ 2, "==" ], [ [ 7 ], [ 3, "dialog" ] ], [ 1, 1 ] ], [ [ 6 ], [ [ 7 ], [ 3, "config" ] ], [ 3, "contact" ] ] ]);
        }(o.ops_cached.$gwx_1), o.ops_cached.$gwx_1);
    }
    function g() {
        return o.ops_cached.$gwx_2 ? o.ops_cached.$gwx_2 : (o.ops_cached.$gwx_2 = [], o.ops_cached.$gwx_2, 
        o.ops_cached.$gwx_2);
    }
    function b() {
        return o.ops_cached.$gwx_3 ? o.ops_cached.$gwx_3 : (o.ops_cached.$gwx_3 = [], o.ops_cached.$gwx_3, 
        o.ops_cached.$gwx_3);
    }
    function _() {
        return o.ops_cached.$gwx_4 ? o.ops_cached.$gwx_4 : (o.ops_cached.$gwx_4 = [], function(e) {
            function t(t) {
                e.push(t);
            }
            t([ 3, "formid" ]), t([ [ 2, "==" ], [ [ 7 ], [ 3, "examine" ] ], [ 1, 0 ] ]), t(e[1]);
        }(o.ops_cached.$gwx_4), o.ops_cached.$gwx_4);
    }
    function x() {
        return o.ops_cached.$gwx_5 ? o.ops_cached.$gwx_5 : (o.ops_cached.$gwx_5 = [], function(e) {
            function t(t) {
                e.push(t);
            }
            t([ 3, "formid" ]), t([ [ 2, "==" ], [ [ 6 ], [ [ 7 ], [ 3, "template" ] ], [ 3, "config" ] ], [ 1, "0" ] ]), 
            t(e[1]), t([ [ 2, "==" ], [ [ 6 ], [ [ 7 ], [ 3, "template" ] ], [ 3, "config" ] ], [ 1, "1" ] ]), 
            t([ [ 2, "==" ], [ [ 6 ], [ [ 7 ], [ 3, "template" ] ], [ 3, "config" ] ], [ 1, "2" ] ]);
        }(o.ops_cached.$gwx_5), o.ops_cached.$gwx_5);
    }
    function m() {
        return o.ops_cached.$gwx_6 ? o.ops_cached.$gwx_6 : (o.ops_cached.$gwx_6 = [], o.ops_cached.$gwx_6, 
        o.ops_cached.$gwx_6);
    }
    void 0 === r && (r = {}), void 0 === o && (o = {}), o.modules = o.modules || {}, 
    $gwn = console.warn, $gwl = console.log, wh = function() {
        function t() {}
        return t.prototype = {
            hn: function(t, r) {
                if ("object" == (void 0 === t ? "undefined" : e(t))) {
                    var o = 0, n = !1, a = !1;
                    for (var i in t) if (n |= "__value__" === i, a |= "__wxspec__" === i, ++o > 2) break;
                    return 2 == o && n && a && (r || "m" !== t.__wxspec__ || "h" === this.hn(t.__value__)) ? "h" : "n";
                }
                return "n";
            },
            nh: function(e, t) {
                return {
                    __value__: e,
                    __wxspec__: t || !0
                };
            },
            rv: function(e) {
                return "n" === this.hn(e, !0) ? e : this.rv(e.__value__);
            },
            hm: function(t) {
                if ("object" == (void 0 === t ? "undefined" : e(t))) {
                    var r = 0, o = !1, n = !1;
                    for (var a in t) if (o |= "__value__" === a, n |= "__wxspec__" === a, ++r > 2) break;
                    return 2 == r && o && n && ("m" === t.__wxspec__ || this.hm(t.__value__));
                }
                return !1;
            }
        }, new t();
    }(), gra = u(!0), grb = u(!1);
    var O = function() {
        Object.defineProperty(Object.prototype, "nv_constructor", {
            writable: !0,
            value: "Object"
        }), Object.defineProperty(Object.prototype, "nv_toString", {
            writable: !0,
            value: function() {
                return "[object Object]";
            }
        });
    }, j = function() {
        Object.defineProperty(Function.prototype, "nv_constructor", {
            writable: !0,
            value: "Function"
        }), Object.defineProperty(Function.prototype, "nv_length", {
            get: function() {
                return this.length;
            },
            set: function() {}
        }), Object.defineProperty(Function.prototype, "nv_toString", {
            writable: !0,
            value: function() {
                return "[function Function]";
            }
        });
    }, P = function() {
        Object.defineProperty(Array.prototype, "nv_toString", {
            writable: !0,
            value: function() {
                return this.nv_join();
            }
        }), Object.defineProperty(Array.prototype, "nv_join", {
            writable: !0,
            value: function(t) {
                t = void 0 == t ? "," : t;
                for (var r = "", o = 0; o < this.length; ++o) 0 != o && (r += t), null == this[o] || void 0 == this[o] ? r += "" : "function" == typeof this[o] ? r += this[o].nv_toString() : "object" == e(this[o]) && "Array" === this[o].nv_constructor ? r += this[o].nv_join() : r += this[o].toString();
                return r;
            }
        }), Object.defineProperty(Array.prototype, "nv_constructor", {
            writable: !0,
            value: "Array"
        }), Object.defineProperty(Array.prototype, "nv_concat", {
            writable: !0,
            value: Array.prototype.concat
        }), Object.defineProperty(Array.prototype, "nv_pop", {
            writable: !0,
            value: Array.prototype.pop
        }), Object.defineProperty(Array.prototype, "nv_push", {
            writable: !0,
            value: Array.prototype.push
        }), Object.defineProperty(Array.prototype, "nv_reverse", {
            writable: !0,
            value: Array.prototype.reverse
        }), Object.defineProperty(Array.prototype, "nv_shift", {
            writable: !0,
            value: Array.prototype.shift
        }), Object.defineProperty(Array.prototype, "nv_slice", {
            writable: !0,
            value: Array.prototype.slice
        }), Object.defineProperty(Array.prototype, "nv_sort", {
            writable: !0,
            value: Array.prototype.sort
        }), Object.defineProperty(Array.prototype, "nv_splice", {
            writable: !0,
            value: Array.prototype.splice
        }), Object.defineProperty(Array.prototype, "nv_unshift", {
            writable: !0,
            value: Array.prototype.unshift
        }), Object.defineProperty(Array.prototype, "nv_indexOf", {
            writable: !0,
            value: Array.prototype.indexOf
        }), Object.defineProperty(Array.prototype, "nv_lastIndexOf", {
            writable: !0,
            value: Array.prototype.lastIndexOf
        }), Object.defineProperty(Array.prototype, "nv_every", {
            writable: !0,
            value: Array.prototype.every
        }), Object.defineProperty(Array.prototype, "nv_some", {
            writable: !0,
            value: Array.prototype.some
        }), Object.defineProperty(Array.prototype, "nv_forEach", {
            writable: !0,
            value: Array.prototype.forEach
        }), Object.defineProperty(Array.prototype, "nv_map", {
            writable: !0,
            value: Array.prototype.map
        }), Object.defineProperty(Array.prototype, "nv_filter", {
            writable: !0,
            value: Array.prototype.filter
        }), Object.defineProperty(Array.prototype, "nv_reduce", {
            writable: !0,
            value: Array.prototype.reduce
        }), Object.defineProperty(Array.prototype, "nv_reduceRight", {
            writable: !0,
            value: Array.prototype.reduceRight
        }), Object.defineProperty(Array.prototype, "nv_length", {
            get: function() {
                return this.length;
            },
            set: function(e) {
                this.length = e;
            }
        });
    }, S = function() {
        Object.defineProperty(String.prototype, "nv_constructor", {
            writable: !0,
            value: "String"
        }), Object.defineProperty(String.prototype, "nv_toString", {
            writable: !0,
            value: String.prototype.toString
        }), Object.defineProperty(String.prototype, "nv_valueOf", {
            writable: !0,
            value: String.prototype.valueOf
        }), Object.defineProperty(String.prototype, "nv_charAt", {
            writable: !0,
            value: String.prototype.charAt
        }), Object.defineProperty(String.prototype, "nv_charCodeAt", {
            writable: !0,
            value: String.prototype.charCodeAt
        }), Object.defineProperty(String.prototype, "nv_concat", {
            writable: !0,
            value: String.prototype.concat
        }), Object.defineProperty(String.prototype, "nv_indexOf", {
            writable: !0,
            value: String.prototype.indexOf
        }), Object.defineProperty(String.prototype, "nv_lastIndexOf", {
            writable: !0,
            value: String.prototype.lastIndexOf
        }), Object.defineProperty(String.prototype, "nv_localeCompare", {
            writable: !0,
            value: String.prototype.localeCompare
        }), Object.defineProperty(String.prototype, "nv_match", {
            writable: !0,
            value: String.prototype.match
        }), Object.defineProperty(String.prototype, "nv_replace", {
            writable: !0,
            value: String.prototype.replace
        }), Object.defineProperty(String.prototype, "nv_search", {
            writable: !0,
            value: String.prototype.search
        }), Object.defineProperty(String.prototype, "nv_slice", {
            writable: !0,
            value: String.prototype.slice
        }), Object.defineProperty(String.prototype, "nv_split", {
            writable: !0,
            value: String.prototype.split
        }), Object.defineProperty(String.prototype, "nv_substring", {
            writable: !0,
            value: String.prototype.substring
        }), Object.defineProperty(String.prototype, "nv_toLowerCase", {
            writable: !0,
            value: String.prototype.toLowerCase
        }), Object.defineProperty(String.prototype, "nv_toLocaleLowerCase", {
            writable: !0,
            value: String.prototype.toLocaleLowerCase
        }), Object.defineProperty(String.prototype, "nv_toUpperCase", {
            writable: !0,
            value: String.prototype.toUpperCase
        }), Object.defineProperty(String.prototype, "nv_toLocaleUpperCase", {
            writable: !0,
            value: String.prototype.toLocaleUpperCase
        }), Object.defineProperty(String.prototype, "nv_trim", {
            writable: !0,
            value: String.prototype.trim
        }), Object.defineProperty(String.prototype, "nv_length", {
            get: function() {
                return this.length;
            },
            set: function(e) {
                this.length = e;
            }
        });
    }, D = function() {
        Object.defineProperty(Boolean.prototype, "nv_constructor", {
            writable: !0,
            value: "Boolean"
        }), Object.defineProperty(Boolean.prototype, "nv_toString", {
            writable: !0,
            value: Boolean.prototype.toString
        }), Object.defineProperty(Boolean.prototype, "nv_valueOf", {
            writable: !0,
            value: Boolean.prototype.valueOf
        });
    }, M = function() {
        Object.defineProperty(Number, "nv_MAX_VALUE", {
            writable: !1,
            value: Number.MAX_VALUE
        }), Object.defineProperty(Number, "nv_MIN_VALUE", {
            writable: !1,
            value: Number.MIN_VALUE
        }), Object.defineProperty(Number, "nv_NEGATIVE_INFINITY", {
            writable: !1,
            value: Number.NEGATIVE_INFINITY
        }), Object.defineProperty(Number, "nv_POSITIVE_INFINITY", {
            writable: !1,
            value: Number.POSITIVE_INFINITY
        }), Object.defineProperty(Number.prototype, "nv_constructor", {
            writable: !0,
            value: "Number"
        }), Object.defineProperty(Number.prototype, "nv_toString", {
            writable: !0,
            value: Number.prototype.toString
        }), Object.defineProperty(Number.prototype, "nv_toLocaleString", {
            writable: !0,
            value: Number.prototype.toLocaleString
        }), Object.defineProperty(Number.prototype, "nv_valueOf", {
            writable: !0,
            value: Number.prototype.valueOf
        }), Object.defineProperty(Number.prototype, "nv_toFixed", {
            writable: !0,
            value: Number.prototype.toFixed
        }), Object.defineProperty(Number.prototype, "nv_toExponential", {
            writable: !0,
            value: Number.prototype.toExponential
        }), Object.defineProperty(Number.prototype, "nv_toPrecision", {
            writable: !0,
            value: Number.prototype.toPrecision
        });
    }, C = function() {
        Object.defineProperty(Math, "nv_E", {
            writable: !1,
            value: Math.E
        }), Object.defineProperty(Math, "nv_LN10", {
            writable: !1,
            value: Math.LN10
        }), Object.defineProperty(Math, "nv_LN2", {
            writable: !1,
            value: Math.LN2
        }), Object.defineProperty(Math, "nv_LOG2E", {
            writable: !1,
            value: Math.LOG2E
        }), Object.defineProperty(Math, "nv_LOG10E", {
            writable: !1,
            value: Math.LOG10E
        }), Object.defineProperty(Math, "nv_PI", {
            writable: !1,
            value: Math.PI
        }), Object.defineProperty(Math, "nv_SQRT1_2", {
            writable: !1,
            value: Math.SQRT1_2
        }), Object.defineProperty(Math, "nv_SQRT2", {
            writable: !1,
            value: Math.SQRT2
        }), Object.defineProperty(Math, "nv_abs", {
            writable: !1,
            value: Math.abs
        }), Object.defineProperty(Math, "nv_acos", {
            writable: !1,
            value: Math.acos
        }), Object.defineProperty(Math, "nv_asin", {
            writable: !1,
            value: Math.asin
        }), Object.defineProperty(Math, "nv_atan", {
            writable: !1,
            value: Math.atan
        }), Object.defineProperty(Math, "nv_atan2", {
            writable: !1,
            value: Math.atan2
        }), Object.defineProperty(Math, "nv_ceil", {
            writable: !1,
            value: Math.ceil
        }), Object.defineProperty(Math, "nv_cos", {
            writable: !1,
            value: Math.cos
        }), Object.defineProperty(Math, "nv_exp", {
            writable: !1,
            value: Math.exp
        }), Object.defineProperty(Math, "nv_floor", {
            writable: !1,
            value: Math.floor
        }), Object.defineProperty(Math, "nv_log", {
            writable: !1,
            value: Math.log
        }), Object.defineProperty(Math, "nv_max", {
            writable: !1,
            value: Math.max
        }), Object.defineProperty(Math, "nv_min", {
            writable: !1,
            value: Math.min
        }), Object.defineProperty(Math, "nv_pow", {
            writable: !1,
            value: Math.pow
        }), Object.defineProperty(Math, "nv_random", {
            writable: !1,
            value: Math.random
        }), Object.defineProperty(Math, "nv_round", {
            writable: !1,
            value: Math.round
        }), Object.defineProperty(Math, "nv_sin", {
            writable: !1,
            value: Math.sin
        }), Object.defineProperty(Math, "nv_sqrt", {
            writable: !1,
            value: Math.sqrt
        }), Object.defineProperty(Math, "nv_tan", {
            writable: !1,
            value: Math.tan
        });
    }, T = function() {
        Object.defineProperty(Date.prototype, "nv_constructor", {
            writable: !0,
            value: "Date"
        }), Object.defineProperty(Date, "nv_parse", {
            writable: !0,
            value: Date.parse
        }), Object.defineProperty(Date, "nv_UTC", {
            writable: !0,
            value: Date.UTC
        }), Object.defineProperty(Date, "nv_now", {
            writable: !0,
            value: Date.now
        }), Object.defineProperty(Date.prototype, "nv_toString", {
            writable: !0,
            value: Date.prototype.toString
        }), Object.defineProperty(Date.prototype, "nv_toDateString", {
            writable: !0,
            value: Date.prototype.toDateString
        }), Object.defineProperty(Date.prototype, "nv_toTimeString", {
            writable: !0,
            value: Date.prototype.toTimeString
        }), Object.defineProperty(Date.prototype, "nv_toLocaleString", {
            writable: !0,
            value: Date.prototype.toLocaleString
        }), Object.defineProperty(Date.prototype, "nv_toLocaleDateString", {
            writable: !0,
            value: Date.prototype.toLocaleDateString
        }), Object.defineProperty(Date.prototype, "nv_toLocaleTimeString", {
            writable: !0,
            value: Date.prototype.toLocaleTimeString
        }), Object.defineProperty(Date.prototype, "nv_valueOf", {
            writable: !0,
            value: Date.prototype.valueOf
        }), Object.defineProperty(Date.prototype, "nv_getTime", {
            writable: !0,
            value: Date.prototype.getTime
        }), Object.defineProperty(Date.prototype, "nv_getFullYear", {
            writable: !0,
            value: Date.prototype.getFullYear
        }), Object.defineProperty(Date.prototype, "nv_getUTCFullYear", {
            writable: !0,
            value: Date.prototype.getUTCFullYear
        }), Object.defineProperty(Date.prototype, "nv_getMonth", {
            writable: !0,
            value: Date.prototype.getMonth
        }), Object.defineProperty(Date.prototype, "nv_getUTCMonth", {
            writable: !0,
            value: Date.prototype.getUTCMonth
        }), Object.defineProperty(Date.prototype, "nv_getDate", {
            writable: !0,
            value: Date.prototype.getDate
        }), Object.defineProperty(Date.prototype, "nv_getUTCDate", {
            writable: !0,
            value: Date.prototype.getUTCDate
        }), Object.defineProperty(Date.prototype, "nv_getDay", {
            writable: !0,
            value: Date.prototype.getDay
        }), Object.defineProperty(Date.prototype, "nv_getUTCDay", {
            writable: !0,
            value: Date.prototype.getUTCDay
        }), Object.defineProperty(Date.prototype, "nv_getHours", {
            writable: !0,
            value: Date.prototype.getHours
        }), Object.defineProperty(Date.prototype, "nv_getUTCHours", {
            writable: !0,
            value: Date.prototype.getUTCHours
        }), Object.defineProperty(Date.prototype, "nv_getMinutes", {
            writable: !0,
            value: Date.prototype.getMinutes
        }), Object.defineProperty(Date.prototype, "nv_getUTCMinutes", {
            writable: !0,
            value: Date.prototype.getUTCMinutes
        }), Object.defineProperty(Date.prototype, "nv_getSeconds", {
            writable: !0,
            value: Date.prototype.getSeconds
        }), Object.defineProperty(Date.prototype, "nv_getUTCSeconds", {
            writable: !0,
            value: Date.prototype.getUTCSeconds
        }), Object.defineProperty(Date.prototype, "nv_getMilliseconds", {
            writable: !0,
            value: Date.prototype.getMilliseconds
        }), Object.defineProperty(Date.prototype, "nv_getUTCMilliseconds", {
            writable: !0,
            value: Date.prototype.getUTCMilliseconds
        }), Object.defineProperty(Date.prototype, "nv_getTimezoneOffset", {
            writable: !0,
            value: Date.prototype.getTimezoneOffset
        }), Object.defineProperty(Date.prototype, "nv_setTime", {
            writable: !0,
            value: Date.prototype.setTime
        }), Object.defineProperty(Date.prototype, "nv_setMilliseconds", {
            writable: !0,
            value: Date.prototype.setMilliseconds
        }), Object.defineProperty(Date.prototype, "nv_setUTCMilliseconds", {
            writable: !0,
            value: Date.prototype.setUTCMilliseconds
        }), Object.defineProperty(Date.prototype, "nv_setSeconds", {
            writable: !0,
            value: Date.prototype.setSeconds
        }), Object.defineProperty(Date.prototype, "nv_setUTCSeconds", {
            writable: !0,
            value: Date.prototype.setUTCSeconds
        }), Object.defineProperty(Date.prototype, "nv_setMinutes", {
            writable: !0,
            value: Date.prototype.setMinutes
        }), Object.defineProperty(Date.prototype, "nv_setUTCMinutes", {
            writable: !0,
            value: Date.prototype.setUTCMinutes
        }), Object.defineProperty(Date.prototype, "nv_setHours", {
            writable: !0,
            value: Date.prototype.setHours
        }), Object.defineProperty(Date.prototype, "nv_setUTCHours", {
            writable: !0,
            value: Date.prototype.setUTCHours
        }), Object.defineProperty(Date.prototype, "nv_setDate", {
            writable: !0,
            value: Date.prototype.setDate
        }), Object.defineProperty(Date.prototype, "nv_setUTCDate", {
            writable: !0,
            value: Date.prototype.setUTCDate
        }), Object.defineProperty(Date.prototype, "nv_setMonth", {
            writable: !0,
            value: Date.prototype.setMonth
        }), Object.defineProperty(Date.prototype, "nv_setUTCMonth", {
            writable: !0,
            value: Date.prototype.setUTCMonth
        }), Object.defineProperty(Date.prototype, "nv_setFullYear", {
            writable: !0,
            value: Date.prototype.setFullYear
        }), Object.defineProperty(Date.prototype, "nv_setUTCFullYear", {
            writable: !0,
            value: Date.prototype.setUTCFullYear
        }), Object.defineProperty(Date.prototype, "nv_toUTCString", {
            writable: !0,
            value: Date.prototype.toUTCString
        }), Object.defineProperty(Date.prototype, "nv_toISOString", {
            writable: !0,
            value: Date.prototype.toISOString
        }), Object.defineProperty(Date.prototype, "nv_toJSON", {
            writable: !0,
            value: Date.prototype.toJSON
        });
    }, k = function() {
        Object.defineProperty(RegExp.prototype, "nv_constructor", {
            writable: !0,
            value: "RegExp"
        }), Object.defineProperty(RegExp.prototype, "nv_exec", {
            writable: !0,
            value: RegExp.prototype.exec
        }), Object.defineProperty(RegExp.prototype, "nv_test", {
            writable: !0,
            value: RegExp.prototype.test
        }), Object.defineProperty(RegExp.prototype, "nv_toString", {
            writable: !0,
            value: RegExp.prototype.toString
        }), Object.defineProperty(RegExp.prototype, "nv_source", {
            get: function() {
                return this.source;
            },
            set: function() {}
        }), Object.defineProperty(RegExp.prototype, "nv_global", {
            get: function() {
                return this.global;
            },
            set: function() {}
        }), Object.defineProperty(RegExp.prototype, "nv_ignoreCase", {
            get: function() {
                return this.ignoreCase;
            },
            set: function() {}
        }), Object.defineProperty(RegExp.prototype, "nv_multiline", {
            get: function() {
                return this.multiline;
            },
            set: function() {}
        }), Object.defineProperty(RegExp.prototype, "nv_lastIndex", {
            get: function() {
                return this.lastIndex;
            },
            set: function(e) {
                this.lastIndex = e;
            }
        });
    };
    void 0 !== o && void 0 !== o.wxs_nf_init || (O(), j(), P(), S(), D(), M(), C(), 
    T(), k()), void 0 !== o && (o.wxs_nf_init = !0);
    ({}).nv_log = function() {
        for (var e = "WXSRT:", t = 0; t < arguments.length; ++t) e += arguments[t] + " ";
        console.log(e);
    };
    parseInt, parseFloat, isNaN, isFinite, decodeURI, decodeURIComponent, encodeURI, 
    encodeURIComponent;
    var I = {};
    I.nv_stringify = function(e) {
        return JSON.stringify(e), JSON.stringify(d(e));
    }, I.nv_parse = function(e) {
        if (void 0 !== e) return d(JSON.parse(e), "nv_");
    };
    var A = {};
    void 0 === r.entrys && (r.entrys = {}), A = r.entrys;
    var N = {};
    void 0 === r.defines && (r.defines = {}), N = r.defines;
    var U = {};
    void 0 === r.modules && (r.modules = {}), U = r.modules || {};
    o.ops_cached = o.ops_cached || {}, o.ops_set = o.ops_set || {}, o.ops_init = o.ops_init || {};
    var L = o.ops_set.$gwx || [];
    o.ops_set.$gwx = L, o.ops_init.$gwx = !0;
    !function() {
        var e = {}, t = {};
    }();
    var $ = [ "./pages/index/index.wxml", "./pages/kefu/kefu.wxml", "./pages/list/list.wxml", "./pages/preview/preview.wxml", "./pages/template/template.wxml", "./pages/webview/webview.wxml" ];
    N[$[0]] = {};
    A[$[0]] = {
        f: function(e, t, r, o) {
            var a = h(), p = w(a, "form", [ "reportSubmit", -1, "bindsubmit", 0 ], [], e, t, o), c = i();
            n(p, c), v(a, 1, e, t, o) && (c.wxVkey = 1);
            var u = i();
            if (n(p, u), v(a, 2, e, t, o)) {
                u.wxVkey = 1;
                var s = i();
                n(u, s), v(a, 3, e, t, o) && (s.wxVkey = 1);
                var l = i();
                n(u, l), v(a, 4, e, t, o) && (l.wxVkey = 1);
                var f = i();
                n(u, f), v(a, 5, e, t, o) && (f.wxVkey = 1), s.wxXCkey = 1, l.wxXCkey = 1, f.wxXCkey = 1;
            }
            var d = i();
            return n(p, d), v(a, 6, e, t, o) && (d.wxVkey = 1), c.wxXCkey = 1, u.wxXCkey = 1, 
            d.wxXCkey = 1, n(r, p), r;
        },
        j: [],
        i: [],
        ti: [],
        ic: []
    }, N[$[1]] = {};
    A[$[1]] = {
        f: function(e, t, r, o) {
            g();
            return r;
        },
        j: [],
        i: [],
        ti: [],
        ic: []
    }, N[$[2]] = {};
    A[$[2]] = {
        f: function(e, t, r, o) {
            b();
            return r;
        },
        j: [],
        i: [],
        ti: [],
        ic: []
    }, N[$[3]] = {};
    A[$[3]] = {
        f: function(e, t, r, o) {
            var a = _(), p = w(a, "form", [ "reportSubmit", -1, "bindsubmit", 0 ], [], e, t, o), c = i();
            n(p, c), v(a, 1, e, t, o) && (c.wxVkey = 1);
            var u = i();
            return n(p, u), v(a, 2, e, t, o) && (u.wxVkey = 1), c.wxXCkey = 1, u.wxXCkey = 1, 
            n(r, p), r;
        },
        j: [],
        i: [],
        ti: [],
        ic: []
    }, N[$[4]] = {};
    A[$[4]] = {
        f: function(e, t, r, o) {
            var a = x(), p = w(a, "form", [ "reportSubmit", -1, "bindsubmit", 0 ], [], e, t, o), c = i();
            n(p, c), v(a, 1, e, t, o) && (c.wxVkey = 1);
            var u = i();
            n(p, u), v(a, 2, e, t, o) && (u.wxVkey = 1);
            var s = i();
            n(p, s), v(a, 3, e, t, o) && (s.wxVkey = 1);
            var l = i();
            return n(p, l), v(a, 4, e, t, o) && (l.wxVkey = 1), c.wxXCkey = 1, u.wxXCkey = 1, 
            s.wxXCkey = 1, l.wxXCkey = 1, n(r, p), r;
        },
        j: [],
        i: [],
        ti: [],
        ic: []
    }, N[$[5]] = {};
    if (A[$[5]] = {
        f: function(e, t, r, o) {
            m();
            return r;
        },
        j: [],
        i: [],
        ti: [],
        ic: []
    }, t && A[t]) return function(e, r, o) {
        a = 0;
        var n = {
            tag: "wx-page"
        };
        n.children = [];
        var i = A[t].f;
        void 0 === o && (o = {}), o.f = d(U[t], "", 1);
        try {
            i(e, {}, n, o), y(n);
        } catch (e) {
            console.log(e);
        }
        return n;
    };
}, t["pages/webview/webview.json"] = {
    usingComponents: {}
}, n.delayedGwx ? t["pages/webview/webview.wxml"] = [ $gwx, "./pages/webview/webview.wxml" ] : t["pages/webview/webview.wxml"] = $gwx("./pages/webview/webview.wxml"), 
define("utils/util.js", function(e, t, r, o, n, a, i, p, c, u, s, l, f, v, w, d, y, h, g, b, _) {
    var x = function(e) {
        return (e = e.toString())[1] ? e : "0" + e;
    };
    t.exports = {
        formatTime: function(e) {
            var t = e.getFullYear(), r = e.getMonth() + 1, o = e.getDate(), n = e.getHours(), a = e.getMinutes(), i = e.getSeconds();
            return [ t, r, o ].map(x).join("/") + " " + [ n, a, i ].map(x).join(":");
        }
    };
}), define("app.js", function(e, t, r, o, n, a, i, p, c, u, s, l, f, v, w, d, y, h, g, b, _) {
    App({
        onLaunch: function() {},
        onShow: function(e) {}
    });
}), require("app.js"), define("pages/index/index.js", function(e, t, r, o, n, a, i, p, c, u, s, l, f, v, w, d, y, h, g, b, _) {
    getApp(), Page({
        data: {
            sex: 1,
            dialog: 0
        },
        onLoad: function(e) {
            this.config(), wx.getStorageSync("openid") || wx.login({
                success: function(e) {
                    wx.request({
                        url: " ",
                        method: "get",
                        data: {
                            code: e.code
                        },
                        success: function(e) {
                            wx.setStorageSync("openid", e.data.openid);
                        }
                    });
                }
            });
        },
        config: function() {
            var e = this;
            wx.request({
                url: " ",
                method: "get",
                data: {},
                success: function(t) {
                    e.setData({
                        config: t.data
                    });
                }
            });
        },
        kefu: function() {
            this.setData({
                dialog: 1
            });
        },
        close: function() {
            this.setData({
                dialog: 0
            });
        },
        auth: function() {
            var e = this, t = wx.getStorageSync("userInfo"), r = e.data.config.auth1;
            wx.showLoading({
                title: "正在测试中..."
            }), 0 == r ? t.nickName ? (wx.navigateTo({
                url: "/pages/preview/preview?nickname=" + t.nickName + "&sex=" + e.data.sex + "&examine=" + r
            }), wx.hideLoading()) : wx.login({
                success: function(t) {
                    wx.getUserInfo({
                        success: function(t) {
                            var o = t.userInfo;
                            wx.setStorageSync("userInfo", o), wx.navigateTo({
                                url: "/pages/preview/preview?nickname=" + o.nickName + "&sex=" + e.data.sex + "&examine=" + r
                            }), wx.hideLoading();
                        },
                        fail: function() {
                            wx.hideLoading();
                        }
                    });
                }
            }) : (wx.navigateTo({
                url: "/pages/preview/preview?nickname=&sex=&examine=" + r
            }), wx.hideLoading());
        },
        radioChange: function(e) {
            this.setData({
                sex: e.detail.value
            });
        },
        preview: function() {
            var e = this.data.config.showpic;
            wx.previewImage({
                current: e,
                urls: [ e ]
            });
        },
        formid: function(e) {
            var t = e.detail.formId, r = wx.getStorageSync("openid");
            wx.request({
                url: " ",
                method: "get",
                data: {
                    openid: r,
                    formid: t
                },
                success: function(e) {}
            });
        }
    });
}), require("pages/index/index.js"), define("pages/preview/preview.js", function(e, t, r, o, n, a, i, p, c, u, s, l, f, v, w, d, y, h, g, b, _) {
    getApp(), Page({
        data: {
            auth: 0,
            setting_auth: 0,
            examine: 0
        },
        onLoad: function(e) {
            var t = this, r = (e.sex, e.examine), o = "../style/" + Math.floor(7 * Math.random() + 1) + ".png";
            wx.request({
                url: "",
                method: "get",
                data: {},
                success: function(e) {
                    var n = e.data.qrcode;
                    0 == r ? (wx.showLoading({
                        title: "正在生成中..."
                    }), t.loading(n, o)) : t.setData({
                        url: o,
                        examine: r
                    });
                }
            });
        },
        loading: function(e, t) {
            var r = this, o = wx.getStorageSync("userInfo");
            r.setData({
                hiddenLoading: !1
            });
            var n = new Promise(function(e, t) {
                wx.getImageInfo({
                    src: o.avatarUrl,
                    success: function(t) {
                        e(t);
                    }
                });
            }), a = new Promise(function(t, r) {
                wx.getImageInfo({
                    src: e,
                    success: function(e) {
                        t(e);
                    }
                });
            });
            Promise.all([ n, a ]).then(function(e) {
                r.createNewImg(e[0].path, e[1].path, t);
            });
        },
        createNewImg: function(e, t, r) {
            var o = this, n = wx.createCanvasContext("myCanvas");
            n.drawImage(e, 295, 500, 170, 170), n.drawImage(r, 0, 0, 750, 1177), n.drawImage(t, 30, 1010, 140, 140), 
            n.font = "normal bold 50px simhei", n.fillStyle = "#000000";
            var a = wx.getStorageSync("userInfo").nickName, i = 370 - n.measureText(a).width / 2;
            n.fillText(a, i, 200), n.font = "normal bold 24px simhei", n.fillStyle = "#000000", 
            n.fillText("", 175, 1140), n.save(), n.draw(), setTimeout(function() {
                o.preview();
            }, 500);
        },
        createNewImg1: function(e, t, r) {
            var o = this, n = wx.createCanvasContext("myCanvas");
            n.drawImage(e, 295, 500, 170, 170), n.drawImage(r, 0, 0, 750, 1177), n.font = "normal bold 50px simhei", 
            n.fillStyle = "#000000";
            var a = wx.getStorageSync("userInfo").nickName, i = 370 - n.measureText(a).width / 2;
            n.fillText(a, i, 200), n.save(), n.draw(), setTimeout(function() {
                o.preview();
            }, 500);
        },
        preview: function() {
            var e = this;
            wx.canvasToTempFilePath({
                canvasId: "myCanvas",
                success: function(t) {
                    var r = t.tempFilePath;
                    e.setData({
                        url: r
                    }), wx.hideLoading();
                },
                fail: function(e) {}
            });
        },
        save: function(e) {
            var t = this;
            wx.showLoading({
                title: "正在保存中..."
            }), wx.saveImageToPhotosAlbum({
                filePath: t.data.url,
                success: function(e) {
                    wx.hideLoading(), t.setData({
                        setting_auth: 0
                    }), wx.showToast({
                        title: "已保存到相册~",
                        icon: "succes",
                        duration: 1200,
                        mask: !0
                    });
                },
                fail: function(e) {
                    console.log(e), wx.hideLoading(), t.setData({
                        setting_auth: 1
                    });
                }
            });
        },
        handleSetting: function(e) {
            var t = this;
            wx.openSetting({
                success: function(e) {
                    e.authSetting["scope.writePhotosAlbum"] ? console.log("获取权限成功，再次点击图片保存到相册") : console.log("获取权限失败");
                }
            }), 1 == e.detail.authSetting["scope.writePhotosAlbum"] && (t.setData({
                setting_auth: 0
            }), t.save());
        },
        formid: function(e) {
            var t = e.detail.formId, r = wx.getStorageSync("openid");
            wx.request({
                url: " ",
                method: "get",
                data: {
                    openid: r,
                    formid: t
                },
                success: function(e) {}
            });
        },
        onShareAppMessage: function(e) {
            return this.data.config, this.data.id, {
                title: "事业or爱情？属于你的2019年神预测在此！",
                path: "pages/index/index",
                imageUrl: "",
                success: function(e) {},
                fail: function(e) {}
            };
        }
    });
}), require("pages/preview/preview.js"), define("pages/list/list.js", function(e, t, r, o, n, a, i, p, c, u, s, l, f, v, w, d, y, h, g, b, _) {
    getApp(), Page({
        data: {},
        onLoad: function(e) {},
        onReady: function() {},
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {},
        onPullDownRefresh: function() {},
        onReachBottom: function() {},
        onShareAppMessage: function() {},
        preview: function() {
            wx.navigateTo({
                url: "/pages/preview/preview"
            });
        },
        formid: function(e) {
            var t = e.detail.formId, r = wx.getStorageSync("openid");
            wx.request({
                url: " ",
                method: "get",
                data: {
                    openid: r,
                    formid: t
                },
                success: function(e) {}
            });
        }
    });
}), require("pages/list/list.js"), define("pages/kefu/kefu.js", function(e, t, r, o, n, a, i, p, c, u, s, l, f, v, w, d, y, h, g, b, _) {
    getApp(), Page({
        data: {},
        copy: function(e) {
            var t = this.data.kefu;
            wx.setClipboardData({
                data: t,
                success: function(e) {
                    wx.showModal({
                        title: "提示",
                        content: "",
                        showCancel: !1,
                        success: function(e) {
                            e.confirm ? console.log("确定") : e.cancel && console.log("取消");
                        }
                    });
                }
            });
        },
        onLoad: function(e) {
            var t = e.kefu;
            this.setData({
                kefu: t
            });
        },
        onReady: function() {},
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {},
        onPullDownRefresh: function() {},
        onReachBottom: function() {}
    });
}), require("pages/kefu/kefu.js"), define("pages/template/template.js", function(e, t, r, o, n, a, i, p, c, u, s, l, f, v, w, d, y, h, g, b, _) {
    getApp(), Page({
        data: {},
        onLoad: function(e) {
            var t = this;
            wx.getStorageSync("openid") || t.openid(), wx.getSystemInfo({
                success: function(e) {
                    console.log(e.platform), wx.request({
                        url: "",
                        method: "get",
                        data: {
                            platform: e.platform
                        },
                        success: function(e) {
                            var r = e.data.color;
                            t.setData({
                                template: e.data
                            }), wx.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: r
                            });
                        }
                    });
                }
            });
        },
        other: function(e) {
            var t = e.currentTarget.dataset.appid, r = e.currentTarget.dataset.path;
            wx.navigateToMiniProgram({
                appId: t,
                path: r,
                extraData: {
                    foo: "bar"
                },
                envVersion: "release",
                success: function(e) {}
            });
        },
        openid: function(e) {
            wx.login({
                success: function(e) {
                    wx.request({
                        url: " ",
                        method: "get",
                        data: {
                            code: e.code
                        },
                        success: function(e) {
                            wx.setStorageSync("openid", e.data.openid);
                        }
                    });
                }
            });
        },
        formid: function(e) {
            var t = e.detail.formId, r = wx.getStorageSync("openid");
            wx.request({
                url: " ",
                method: "get",
                data: {
                    openid: r,
                    formid: t
                },
                success: function(e) {
                    console.log(t);
                }
            });
        },
        preview: function() {
            var e = this.data.template.showpic;
            wx.previewImage({
                current: e,
                urls: [ e ]
            });
        },
        onReady: function() {},
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {},
        onPullDownRefresh: function() {},
        onReachBottom: function() {},
        onShareAppMessage: function() {}
    });
}), require("pages/template/template.js"), define("pages/webview/webview.js", function(e, t, r, o, n, a, i, p, c, u, s, l, f, v, w, d, y, h, g, b, _) {
    Page({
        data: {},
        onLoad: function(e) {
            var t = e.url;
            this.setData({
                url: t
            });
        },
        onReady: function() {},
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {},
        onPullDownRefresh: function() {},
        onReachBottom: function() {},
        onShareAppMessage: function() {}
    });
}), require("pages/webview/webview.js");