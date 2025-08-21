( () => {
    var e = {
        2633: (e, t, a) => {
            var n = a(2813)(a(7580), "DataView");
            e.exports = n
        }
        ,
        1264: (e, t, a) => {
            var n = a(5139)
              , r = a(9191)
              , l = a(6886)
              , o = a(5842)
              , i = a(9674);
            function s(e) {
                var t = -1
                  , a = null == e ? 0 : e.length;
                for (this.clear(); ++t < a; ) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }
            s.prototype.clear = n,
            s.prototype.delete = r,
            s.prototype.get = l,
            s.prototype.has = o,
            s.prototype.set = i,
            e.exports = s
        }
        ,
        4356: (e, t, a) => {
            var n = a(159)
              , r = a(2795)
              , l = a(5930)
              , o = a(2686)
              , i = a(662);
            function s(e) {
                var t = -1
                  , a = null == e ? 0 : e.length;
                for (this.clear(); ++t < a; ) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }
            s.prototype.clear = n,
            s.prototype.delete = r,
            s.prototype.get = l,
            s.prototype.has = o,
            s.prototype.set = i,
            e.exports = s
        }
        ,
        1056: (e, t, a) => {
            var n = a(2813)(a(7580), "Map");
            e.exports = n
        }
        ,
        2956: (e, t, a) => {
            var n = a(4727)
              , r = a(6995)
              , l = a(8994)
              , o = a(5942)
              , i = a(5118);
            function s(e) {
                var t = -1
                  , a = null == e ? 0 : e.length;
                for (this.clear(); ++t < a; ) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }
            s.prototype.clear = n,
            s.prototype.delete = r,
            s.prototype.get = l,
            s.prototype.has = o,
            s.prototype.set = i,
            e.exports = s
        }
        ,
        503: (e, t, a) => {
            var n = a(2813)(a(7580), "Promise");
            e.exports = n
        }
        ,
        8842: (e, t, a) => {
            var n = a(2813)(a(7580), "Set");
            e.exports = n
        }
        ,
        4702: (e, t, a) => {
            var n = a(4356)
              , r = a(4645)
              , l = a(9365)
              , o = a(924)
              , i = a(1432)
              , s = a(4584);
            function c(e) {
                var t = this.__data__ = new n(e);
                this.size = t.size
            }
            c.prototype.clear = r,
            c.prototype.delete = l,
            c.prototype.get = o,
            c.prototype.has = i,
            c.prototype.set = s,
            e.exports = c
        }
        ,
        1192: (e, t, a) => {
            var n = a(7580).Symbol;
            e.exports = n
        }
        ,
        5493: (e, t, a) => {
            var n = a(7580).Uint8Array;
            e.exports = n
        }
        ,
        8756: (e, t, a) => {
            var n = a(2813)(a(7580), "WeakMap");
            e.exports = n
        }
        ,
        5214: e => {
            e.exports = function(e, t, a) {
                switch (a.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, a[0]);
                case 2:
                    return e.call(t, a[0], a[1]);
                case 3:
                    return e.call(t, a[0], a[1], a[2])
                }
                return e.apply(t, a)
            }
        }
        ,
        1154: e => {
            e.exports = function(e, t) {
                for (var a = -1, n = null == e ? 0 : e.length; ++a < n && !1 !== t(e[a], a, e); )
                    ;
                return e
            }
        }
        ,
        5626: e => {
            e.exports = function(e, t) {
                for (var a = -1, n = null == e ? 0 : e.length, r = 0, l = []; ++a < n; ) {
                    var o = e[a];
                    t(o, a, e) && (l[r++] = o)
                }
                return l
            }
        }
        ,
        384: (e, t, a) => {
            var n = a(3731)
              , r = a(3245)
              , l = a(3224)
              , o = a(2107)
              , i = a(3958)
              , s = a(7736)
              , c = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var a = l(e)
                  , u = !a && r(e)
                  , m = !a && !u && o(e)
                  , d = !a && !u && !m && s(e)
                  , p = a || u || m || d
                  , h = p ? n(e.length, String) : []
                  , f = h.length;
                for (var g in e)
                    !t && !c.call(e, g) || p && ("length" == g || m && ("offset" == g || "parent" == g) || d && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || i(g, f)) || h.push(g);
                return h
            }
        }
        ,
        619: e => {
            e.exports = function(e, t) {
                for (var a = -1, n = t.length, r = e.length; ++a < n; )
                    e[r + a] = t[a];
                return e
            }
        }
        ,
        3784: (e, t, a) => {
            var n = a(4619)
              , r = a(7343)
              , l = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, a) {
                var o = e[t];
                l.call(e, t) && r(o, a) && (void 0 !== a || t in e) || n(e, t, a)
            }
        }
        ,
        7400: (e, t, a) => {
            var n = a(7343);
            e.exports = function(e, t) {
                for (var a = e.length; a--; )
                    if (n(e[a][0], t))
                        return a;
                return -1
            }
        }
        ,
        7828: (e, t, a) => {
            var n = a(4594)
              , r = a(165);
            e.exports = function(e, t) {
                return e && n(t, r(t), e)
            }
        }
        ,
        1723: (e, t, a) => {
            var n = a(4594)
              , r = a(3190);
            e.exports = function(e, t) {
                return e && n(t, r(t), e)
            }
        }
        ,
        4619: (e, t, a) => {
            var n = a(3650);
            e.exports = function(e, t, a) {
                "__proto__" == t && n ? n(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: a,
                    writable: !0
                }) : e[t] = a
            }
        }
        ,
        8216: (e, t, a) => {
            var n = a(4702)
              , r = a(1154)
              , l = a(3784)
              , o = a(7828)
              , i = a(1723)
              , s = a(9205)
              , c = a(4264)
              , u = a(4224)
              , m = a(8351)
              , d = a(6991)
              , p = a(8932)
              , h = a(9075)
              , f = a(5064)
              , g = a(1426)
              , b = a(482)
              , v = a(3224)
              , y = a(2107)
              , E = a(2235)
              , w = a(4866)
              , x = a(3077)
              , N = a(165)
              , C = a(3190)
              , k = "[object Arguments]"
              , _ = "[object Function]"
              , A = "[object Object]"
              , S = {};
            S[k] = S["[object Array]"] = S["[object ArrayBuffer]"] = S["[object DataView]"] = S["[object Boolean]"] = S["[object Date]"] = S["[object Float32Array]"] = S["[object Float64Array]"] = S["[object Int8Array]"] = S["[object Int16Array]"] = S["[object Int32Array]"] = S["[object Map]"] = S["[object Number]"] = S[A] = S["[object RegExp]"] = S["[object Set]"] = S["[object String]"] = S["[object Symbol]"] = S["[object Uint8Array]"] = S["[object Uint8ClampedArray]"] = S["[object Uint16Array]"] = S["[object Uint32Array]"] = !0,
            S["[object Error]"] = S[_] = S["[object WeakMap]"] = !1,
            e.exports = function e(t, a, L, M, T, P) {
                var O, R = 1 & a, I = 2 & a, j = 4 & a;
                if (L && (O = T ? L(t, M, T, P) : L(t)),
                void 0 !== O)
                    return O;
                if (!w(t))
                    return t;
                var D = v(t);
                if (D) {
                    if (O = f(t),
                    !R)
                        return c(t, O)
                } else {
                    var $ = h(t)
                      , z = $ == _ || "[object GeneratorFunction]" == $;
                    if (y(t))
                        return s(t, R);
                    if ($ == A || $ == k || z && !T) {
                        if (O = I || z ? {} : b(t),
                        !R)
                            return I ? m(t, i(O, t)) : u(t, o(O, t))
                    } else {
                        if (!S[$])
                            return T ? t : {};
                        O = g(t, $, R)
                    }
                }
                P || (P = new n);
                var H = P.get(t);
                if (H)
                    return H;
                P.set(t, O),
                x(t) ? t.forEach((function(n) {
                    O.add(e(n, a, L, n, t, P))
                }
                )) : E(t) && t.forEach((function(n, r) {
                    O.set(r, e(n, a, L, r, t, P))
                }
                ));
                var F = D ? void 0 : (j ? I ? p : d : I ? C : N)(t);
                return r(F || t, (function(n, r) {
                    F && (n = t[r = n]),
                    l(O, r, e(n, a, L, r, t, P))
                }
                )),
                O
            }
        }
        ,
        1621: (e, t, a) => {
            var n = a(4866)
              , r = Object.create
              , l = function() {
                function e() {}
                return function(t) {
                    if (!n(t))
                        return {};
                    if (r)
                        return r(t);
                    e.prototype = t;
                    var a = new e;
                    return e.prototype = void 0,
                    a
                }
            }();
            e.exports = l
        }
        ,
        7578: (e, t, a) => {
            var n = a(619)
              , r = a(3224);
            e.exports = function(e, t, a) {
                var l = t(e);
                return r(e) ? l : n(l, a(e))
            }
        }
        ,
        1389: (e, t, a) => {
            var n = a(1192)
              , r = a(3468)
              , l = a(6859)
              , o = n ? n.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? r(e) : l(e)
            }
        }
        ,
        9701: (e, t, a) => {
            var n = a(1389)
              , r = a(8013);
            e.exports = function(e) {
                return r(e) && "[object Arguments]" == n(e)
            }
        }
        ,
        963: (e, t, a) => {
            var n = a(9075)
              , r = a(8013);
            e.exports = function(e) {
                return r(e) && "[object Map]" == n(e)
            }
        }
        ,
        5902: (e, t, a) => {
            var n = a(1929)
              , r = a(5157)
              , l = a(4866)
              , o = a(7656)
              , i = /^\[object .+?Constructor\]$/
              , s = Function.prototype
              , c = Object.prototype
              , u = s.toString
              , m = c.hasOwnProperty
              , d = RegExp("^" + u.call(m).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function(e) {
                return !(!l(e) || r(e)) && (n(e) ? d : i).test(o(e))
            }
        }
        ,
        4061: (e, t, a) => {
            var n = a(9075)
              , r = a(8013);
            e.exports = function(e) {
                return r(e) && "[object Set]" == n(e)
            }
        }
        ,
        1456: (e, t, a) => {
            var n = a(1389)
              , r = a(4577)
              , l = a(8013)
              , o = {};
            o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0,
            o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1,
            e.exports = function(e) {
                return l(e) && r(e.length) && !!o[n(e)]
            }
        }
        ,
        6077: (e, t, a) => {
            var n = a(6456)
              , r = a(5275)
              , l = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!n(e))
                    return r(e);
                var t = [];
                for (var a in Object(e))
                    l.call(e, a) && "constructor" != a && t.push(a);
                return t
            }
        }
        ,
        4574: (e, t, a) => {
            var n = a(4866)
              , r = a(6456)
              , l = a(6264)
              , o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!n(e))
                    return l(e);
                var t = r(e)
                  , a = [];
                for (var i in e)
                    ("constructor" != i || !t && o.call(e, i)) && a.push(i);
                return a
            }
        }
        ,
        3235: (e, t, a) => {
            var n = a(9251)
              , r = a(5336)
              , l = a(3690);
            e.exports = function(e, t) {
                return l(r(e, t, n), e + "")
            }
        }
        ,
        3241: (e, t, a) => {
            var n = a(3697)
              , r = a(3650)
              , l = a(9251)
              , o = r ? function(e, t) {
                return r(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: n(t),
                    writable: !0
                })
            }
            : l;
            e.exports = o
        }
        ,
        3731: e => {
            e.exports = function(e, t) {
                for (var a = -1, n = Array(e); ++a < e; )
                    n[a] = t(a);
                return n
            }
        }
        ,
        8873: (e, t, a) => {
            var n = a(3579)
              , r = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, n(e) + 1).replace(r, "") : e
            }
        }
        ,
        6770: e => {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        }
        ,
        4648: (e, t, a) => {
            var n = a(5493);
            e.exports = function(e) {
                var t = new e.constructor(e.byteLength);
                return new n(t).set(new n(e)),
                t
            }
        }
        ,
        9205: (e, t, a) => {
            e = a.nmd(e);
            var n = a(7580)
              , r = t && !t.nodeType && t
              , l = r && e && !e.nodeType && e
              , o = l && l.exports === r ? n.Buffer : void 0
              , i = o ? o.allocUnsafe : void 0;
            e.exports = function(e, t) {
                if (t)
                    return e.slice();
                var a = e.length
                  , n = i ? i(a) : new e.constructor(a);
                return e.copy(n),
                n
            }
        }
        ,
        3954: (e, t, a) => {
            var n = a(4648);
            e.exports = function(e, t) {
                var a = t ? n(e.buffer) : e.buffer;
                return new e.constructor(a,e.byteOffset,e.byteLength)
            }
        }
        ,
        878: e => {
            var t = /\w*$/;
            e.exports = function(e) {
                var a = new e.constructor(e.source,t.exec(e));
                return a.lastIndex = e.lastIndex,
                a
            }
        }
        ,
        4395: (e, t, a) => {
            var n = a(1192)
              , r = n ? n.prototype : void 0
              , l = r ? r.valueOf : void 0;
            e.exports = function(e) {
                return l ? Object(l.call(e)) : {}
            }
        }
        ,
        5458: (e, t, a) => {
            var n = a(4648);
            e.exports = function(e, t) {
                var a = t ? n(e.buffer) : e.buffer;
                return new e.constructor(a,e.byteOffset,e.length)
            }
        }
        ,
        4264: e => {
            e.exports = function(e, t) {
                var a = -1
                  , n = e.length;
                for (t || (t = Array(n)); ++a < n; )
                    t[a] = e[a];
                return t
            }
        }
        ,
        4594: (e, t, a) => {
            var n = a(3784)
              , r = a(4619);
            e.exports = function(e, t, a, l) {
                var o = !a;
                a || (a = {});
                for (var i = -1, s = t.length; ++i < s; ) {
                    var c = t[i]
                      , u = l ? l(a[c], e[c], c, a, e) : void 0;
                    void 0 === u && (u = e[c]),
                    o ? r(a, c, u) : n(a, c, u)
                }
                return a
            }
        }
        ,
        4224: (e, t, a) => {
            var n = a(4594)
              , r = a(7121);
            e.exports = function(e, t) {
                return n(e, r(e), t)
            }
        }
        ,
        8351: (e, t, a) => {
            var n = a(4594)
              , r = a(5194);
            e.exports = function(e, t) {
                return n(e, r(e), t)
            }
        }
        ,
        92: (e, t, a) => {
            var n = a(7580)["__core-js_shared__"];
            e.exports = n
        }
        ,
        4582: (e, t, a) => {
            var n = a(3235)
              , r = a(1797);
            e.exports = function(e) {
                return n((function(t, a) {
                    var n = -1
                      , l = a.length
                      , o = l > 1 ? a[l - 1] : void 0
                      , i = l > 2 ? a[2] : void 0;
                    for (o = e.length > 3 && "function" == typeof o ? (l--,
                    o) : void 0,
                    i && r(a[0], a[1], i) && (o = l < 3 ? void 0 : o,
                    l = 1),
                    t = Object(t); ++n < l; ) {
                        var s = a[n];
                        s && e(t, s, n, o)
                    }
                    return t
                }
                ))
            }
        }
        ,
        3650: (e, t, a) => {
            var n = a(2813)
              , r = function() {
                try {
                    var e = n(Object, "defineProperty");
                    return e({}, "", {}),
                    e
                } catch (e) {}
            }();
            e.exports = r
        }
        ,
        3877: (e, t, a) => {
            var n = "object" == typeof a.g && a.g && a.g.Object === Object && a.g;
            e.exports = n
        }
        ,
        6991: (e, t, a) => {
            var n = a(7578)
              , r = a(7121)
              , l = a(165);
            e.exports = function(e) {
                return n(e, l, r)
            }
        }
        ,
        8932: (e, t, a) => {
            var n = a(7578)
              , r = a(5194)
              , l = a(3190);
            e.exports = function(e) {
                return n(e, l, r)
            }
        }
        ,
        1242: (e, t, a) => {
            var n = a(9053);
            e.exports = function(e, t) {
                var a = e.__data__;
                return n(t) ? a["string" == typeof t ? "string" : "hash"] : a.map
            }
        }
        ,
        2813: (e, t, a) => {
            var n = a(5902)
              , r = a(3765);
            e.exports = function(e, t) {
                var a = r(e, t);
                return n(a) ? a : void 0
            }
        }
        ,
        706: (e, t, a) => {
            var n = a(1080)(Object.getPrototypeOf, Object);
            e.exports = n
        }
        ,
        3468: (e, t, a) => {
            var n = a(1192)
              , r = Object.prototype
              , l = r.hasOwnProperty
              , o = r.toString
              , i = n ? n.toStringTag : void 0;
            e.exports = function(e) {
                var t = l.call(e, i)
                  , a = e[i];
                try {
                    e[i] = void 0;
                    var n = !0
                } catch (e) {}
                var r = o.call(e);
                return n && (t ? e[i] = a : delete e[i]),
                r
            }
        }
        ,
        7121: (e, t, a) => {
            var n = a(5626)
              , r = a(8760)
              , l = Object.prototype.propertyIsEnumerable
              , o = Object.getOwnPropertySymbols
              , i = o ? function(e) {
                return null == e ? [] : (e = Object(e),
                n(o(e), (function(t) {
                    return l.call(e, t)
                }
                )))
            }
            : r;
            e.exports = i
        }
        ,
        5194: (e, t, a) => {
            var n = a(619)
              , r = a(706)
              , l = a(7121)
              , o = a(8760)
              , i = Object.getOwnPropertySymbols ? function(e) {
                for (var t = []; e; )
                    n(t, l(e)),
                    e = r(e);
                return t
            }
            : o;
            e.exports = i
        }
        ,
        9075: (e, t, a) => {
            var n = a(2633)
              , r = a(1056)
              , l = a(503)
              , o = a(8842)
              , i = a(8756)
              , s = a(1389)
              , c = a(7656)
              , u = "[object Map]"
              , m = "[object Promise]"
              , d = "[object Set]"
              , p = "[object WeakMap]"
              , h = "[object DataView]"
              , f = c(n)
              , g = c(r)
              , b = c(l)
              , v = c(o)
              , y = c(i)
              , E = s;
            (n && E(new n(new ArrayBuffer(1))) != h || r && E(new r) != u || l && E(l.resolve()) != m || o && E(new o) != d || i && E(new i) != p) && (E = function(e) {
                var t = s(e)
                  , a = "[object Object]" == t ? e.constructor : void 0
                  , n = a ? c(a) : "";
                if (n)
                    switch (n) {
                    case f:
                        return h;
                    case g:
                        return u;
                    case b:
                        return m;
                    case v:
                        return d;
                    case y:
                        return p
                    }
                return t
            }
            ),
            e.exports = E
        }
        ,
        3765: e => {
            e.exports = function(e, t) {
                return null == e ? void 0 : e[t]
            }
        }
        ,
        5139: (e, t, a) => {
            var n = a(2571);
            e.exports = function() {
                this.__data__ = n ? n(null) : {},
                this.size = 0
            }
        }
        ,
        9191: e => {
            e.exports = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0,
                t
            }
        }
        ,
        6886: (e, t, a) => {
            var n = a(2571)
              , r = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                if (n) {
                    var a = t[e];
                    return "__lodash_hash_undefined__" === a ? void 0 : a
                }
                return r.call(t, e) ? t[e] : void 0
            }
        }
        ,
        5842: (e, t, a) => {
            var n = a(2571)
              , r = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                return n ? void 0 !== t[e] : r.call(t, e)
            }
        }
        ,
        9674: (e, t, a) => {
            var n = a(2571);
            e.exports = function(e, t) {
                var a = this.__data__;
                return this.size += this.has(e) ? 0 : 1,
                a[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t,
                this
            }
        }
        ,
        5064: e => {
            var t = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var a = e.length
                  , n = new e.constructor(a);
                return a && "string" == typeof e[0] && t.call(e, "index") && (n.index = e.index,
                n.input = e.input),
                n
            }
        }
        ,
        1426: (e, t, a) => {
            var n = a(4648)
              , r = a(3954)
              , l = a(878)
              , o = a(4395)
              , i = a(5458);
            e.exports = function(e, t, a) {
                var s = e.constructor;
                switch (t) {
                case "[object ArrayBuffer]":
                    return n(e);
                case "[object Boolean]":
                case "[object Date]":
                    return new s(+e);
                case "[object DataView]":
                    return r(e, a);
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                    return i(e, a);
                case "[object Map]":
                case "[object Set]":
                    return new s;
                case "[object Number]":
                case "[object String]":
                    return new s(e);
                case "[object RegExp]":
                    return l(e);
                case "[object Symbol]":
                    return o(e)
                }
            }
        }
        ,
        482: (e, t, a) => {
            var n = a(1621)
              , r = a(706)
              , l = a(6456);
            e.exports = function(e) {
                return "function" != typeof e.constructor || l(e) ? {} : n(r(e))
            }
        }
        ,
        3958: e => {
            var t = /^(?:0|[1-9]\d*)$/;
            e.exports = function(e, a) {
                var n = typeof e;
                return !!(a = null == a ? 9007199254740991 : a) && ("number" == n || "symbol" != n && t.test(e)) && e > -1 && e % 1 == 0 && e < a
            }
        }
        ,
        1797: (e, t, a) => {
            var n = a(7343)
              , r = a(5935)
              , l = a(3958)
              , o = a(4866);
            e.exports = function(e, t, a) {
                if (!o(a))
                    return !1;
                var i = typeof t;
                return !!("number" == i ? r(a) && l(t, a.length) : "string" == i && t in a) && n(a[t], e)
            }
        }
        ,
        9053: e => {
            e.exports = function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }
        }
        ,
        5157: (e, t, a) => {
            var n, r = a(92), l = (n = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
            e.exports = function(e) {
                return !!l && l in e
            }
        }
        ,
        6456: e => {
            var t = Object.prototype;
            e.exports = function(e) {
                var a = e && e.constructor;
                return e === ("function" == typeof a && a.prototype || t)
            }
        }
        ,
        159: e => {
            e.exports = function() {
                this.__data__ = [],
                this.size = 0
            }
        }
        ,
        2795: (e, t, a) => {
            var n = a(7400)
              , r = Array.prototype.splice;
            e.exports = function(e) {
                var t = this.__data__
                  , a = n(t, e);
                return !(a < 0) && (a == t.length - 1 ? t.pop() : r.call(t, a, 1),
                --this.size,
                !0)
            }
        }
        ,
        5930: (e, t, a) => {
            var n = a(7400);
            e.exports = function(e) {
                var t = this.__data__
                  , a = n(t, e);
                return a < 0 ? void 0 : t[a][1]
            }
        }
        ,
        2686: (e, t, a) => {
            var n = a(7400);
            e.exports = function(e) {
                return n(this.__data__, e) > -1
            }
        }
        ,
        662: (e, t, a) => {
            var n = a(7400);
            e.exports = function(e, t) {
                var a = this.__data__
                  , r = n(a, e);
                return r < 0 ? (++this.size,
                a.push([e, t])) : a[r][1] = t,
                this
            }
        }
        ,
        4727: (e, t, a) => {
            var n = a(1264)
              , r = a(4356)
              , l = a(1056);
            e.exports = function() {
                this.size = 0,
                this.__data__ = {
                    hash: new n,
                    map: new (l || r),
                    string: new n
                }
            }
        }
        ,
        6995: (e, t, a) => {
            var n = a(1242);
            e.exports = function(e) {
                var t = n(this, e).delete(e);
                return this.size -= t ? 1 : 0,
                t
            }
        }
        ,
        8994: (e, t, a) => {
            var n = a(1242);
            e.exports = function(e) {
                return n(this, e).get(e)
            }
        }
        ,
        5942: (e, t, a) => {
            var n = a(1242);
            e.exports = function(e) {
                return n(this, e).has(e)
            }
        }
        ,
        5118: (e, t, a) => {
            var n = a(1242);
            e.exports = function(e, t) {
                var a = n(this, e)
                  , r = a.size;
                return a.set(e, t),
                this.size += a.size == r ? 0 : 1,
                this
            }
        }
        ,
        2571: (e, t, a) => {
            var n = a(2813)(Object, "create");
            e.exports = n
        }
        ,
        5275: (e, t, a) => {
            var n = a(1080)(Object.keys, Object);
            e.exports = n
        }
        ,
        6264: e => {
            e.exports = function(e) {
                var t = [];
                if (null != e)
                    for (var a in Object(e))
                        t.push(a);
                return t
            }
        }
        ,
        2420: (e, t, a) => {
            e = a.nmd(e);
            var n = a(3877)
              , r = t && !t.nodeType && t
              , l = r && e && !e.nodeType && e
              , o = l && l.exports === r && n.process
              , i = function() {
                try {
                    var e = l && l.require && l.require("util").types;
                    return e || o && o.binding && o.binding("util")
                } catch (e) {}
            }();
            e.exports = i
        }
        ,
        6859: e => {
            var t = Object.prototype.toString;
            e.exports = function(e) {
                return t.call(e)
            }
        }
        ,
        1080: e => {
            e.exports = function(e, t) {
                return function(a) {
                    return e(t(a))
                }
            }
        }
        ,
        5336: (e, t, a) => {
            var n = a(5214)
              , r = Math.max;
            e.exports = function(e, t, a) {
                return t = r(void 0 === t ? e.length - 1 : t, 0),
                function() {
                    for (var l = arguments, o = -1, i = r(l.length - t, 0), s = Array(i); ++o < i; )
                        s[o] = l[t + o];
                    o = -1;
                    for (var c = Array(t + 1); ++o < t; )
                        c[o] = l[o];
                    return c[t] = a(s),
                    n(e, this, c)
                }
            }
        }
        ,
        7580: (e, t, a) => {
            var n = a(3877)
              , r = "object" == typeof self && self && self.Object === Object && self
              , l = n || r || Function("return this")();
            e.exports = l
        }
        ,
        3690: (e, t, a) => {
            var n = a(3241)
              , r = a(262)(n);
            e.exports = r
        }
        ,
        262: e => {
            var t = Date.now;
            e.exports = function(e) {
                var a = 0
                  , n = 0;
                return function() {
                    var r = t()
                      , l = 16 - (r - n);
                    if (n = r,
                    l > 0) {
                        if (++a >= 800)
                            return arguments[0]
                    } else
                        a = 0;
                    return e.apply(void 0, arguments)
                }
            }
        }
        ,
        4645: (e, t, a) => {
            var n = a(4356);
            e.exports = function() {
                this.__data__ = new n,
                this.size = 0
            }
        }
        ,
        9365: e => {
            e.exports = function(e) {
                var t = this.__data__
                  , a = t.delete(e);
                return this.size = t.size,
                a
            }
        }
        ,
        924: e => {
            e.exports = function(e) {
                return this.__data__.get(e)
            }
        }
        ,
        1432: e => {
            e.exports = function(e) {
                return this.__data__.has(e)
            }
        }
        ,
        4584: (e, t, a) => {
            var n = a(4356)
              , r = a(1056)
              , l = a(2956);
            e.exports = function(e, t) {
                var a = this.__data__;
                if (a instanceof n) {
                    var o = a.__data__;
                    if (!r || o.length < 199)
                        return o.push([e, t]),
                        this.size = ++a.size,
                        this;
                    a = this.__data__ = new l(o)
                }
                return a.set(e, t),
                this.size = a.size,
                this
            }
        }
        ,
        7656: e => {
            var t = Function.prototype.toString;
            e.exports = function(e) {
                if (null != e) {
                    try {
                        return t.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }
        }
        ,
        3579: e => {
            var t = /\s/;
            e.exports = function(e) {
                for (var a = e.length; a-- && t.test(e.charAt(a)); )
                    ;
                return a
            }
        }
        ,
        4556: (e, t, a) => {
            var n = a(3784)
              , r = a(4594)
              , l = a(4582)
              , o = a(5935)
              , i = a(6456)
              , s = a(165)
              , c = Object.prototype.hasOwnProperty
              , u = l((function(e, t) {
                if (i(t) || o(t))
                    r(t, s(t), e);
                else
                    for (var a in t)
                        c.call(t, a) && n(e, a, t[a])
            }
            ));
            e.exports = u
        }
        ,
        1680: (e, t, a) => {
            var n = a(8216);
            e.exports = function(e) {
                return n(e, 4)
            }
        }
        ,
        3697: e => {
            e.exports = function(e) {
                return function() {
                    return e
                }
            }
        }
        ,
        8474: (e, t, a) => {
            var n = a(4866)
              , r = a(2257)
              , l = a(1645)
              , o = Math.max
              , i = Math.min;
            e.exports = function(e, t, a) {
                var s, c, u, m, d, p, h = 0, f = !1, g = !1, b = !0;
                if ("function" != typeof e)
                    throw new TypeError("Expected a function");
                function v(t) {
                    var a = s
                      , n = c;
                    return s = c = void 0,
                    h = t,
                    m = e.apply(n, a)
                }
                function y(e) {
                    var a = e - p;
                    return void 0 === p || a >= t || a < 0 || g && e - h >= u
                }
                function E() {
                    var e = r();
                    if (y(e))
                        return w(e);
                    d = setTimeout(E, function(e) {
                        var a = t - (e - p);
                        return g ? i(a, u - (e - h)) : a
                    }(e))
                }
                function w(e) {
                    return d = void 0,
                    b && s ? v(e) : (s = c = void 0,
                    m)
                }
                function x() {
                    var e = r()
                      , a = y(e);
                    if (s = arguments,
                    c = this,
                    p = e,
                    a) {
                        if (void 0 === d)
                            return function(e) {
                                return h = e,
                                d = setTimeout(E, t),
                                f ? v(e) : m
                            }(p);
                        if (g)
                            return clearTimeout(d),
                            d = setTimeout(E, t),
                            v(p)
                    }
                    return void 0 === d && (d = setTimeout(E, t)),
                    m
                }
                return t = l(t) || 0,
                n(a) && (f = !!a.leading,
                u = (g = "maxWait"in a) ? o(l(a.maxWait) || 0, t) : u,
                b = "trailing"in a ? !!a.trailing : b),
                x.cancel = function() {
                    void 0 !== d && clearTimeout(d),
                    h = 0,
                    s = p = c = d = void 0
                }
                ,
                x.flush = function() {
                    return void 0 === d ? m : w(r())
                }
                ,
                x
            }
        }
        ,
        7343: e => {
            e.exports = function(e, t) {
                return e === t || e != e && t != t
            }
        }
        ,
        9251: e => {
            e.exports = function(e) {
                return e
            }
        }
        ,
        3245: (e, t, a) => {
            var n = a(9701)
              , r = a(8013)
              , l = Object.prototype
              , o = l.hasOwnProperty
              , i = l.propertyIsEnumerable
              , s = n(function() {
                return arguments
            }()) ? n : function(e) {
                return r(e) && o.call(e, "callee") && !i.call(e, "callee")
            }
            ;
            e.exports = s
        }
        ,
        3224: e => {
            var t = Array.isArray;
            e.exports = t
        }
        ,
        5935: (e, t, a) => {
            var n = a(1929)
              , r = a(4577);
            e.exports = function(e) {
                return null != e && r(e.length) && !n(e)
            }
        }
        ,
        2107: (e, t, a) => {
            e = a.nmd(e);
            var n = a(7580)
              , r = a(9290)
              , l = t && !t.nodeType && t
              , o = l && e && !e.nodeType && e
              , i = o && o.exports === l ? n.Buffer : void 0
              , s = (i ? i.isBuffer : void 0) || r;
            e.exports = s
        }
        ,
        1929: (e, t, a) => {
            var n = a(1389)
              , r = a(4866);
            e.exports = function(e) {
                if (!r(e))
                    return !1;
                var t = n(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }
        }
        ,
        4577: e => {
            e.exports = function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }
        }
        ,
        2235: (e, t, a) => {
            var n = a(963)
              , r = a(6770)
              , l = a(2420)
              , o = l && l.isMap
              , i = o ? r(o) : n;
            e.exports = i
        }
        ,
        4866: e => {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        }
        ,
        8013: e => {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        }
        ,
        3077: (e, t, a) => {
            var n = a(4061)
              , r = a(6770)
              , l = a(2420)
              , o = l && l.isSet
              , i = o ? r(o) : n;
            e.exports = i
        }
        ,
        4469: (e, t, a) => {
            var n = a(1389)
              , r = a(8013);
            e.exports = function(e) {
                return "symbol" == typeof e || r(e) && "[object Symbol]" == n(e)
            }
        }
        ,
        7736: (e, t, a) => {
            var n = a(1456)
              , r = a(6770)
              , l = a(2420)
              , o = l && l.isTypedArray
              , i = o ? r(o) : n;
            e.exports = i
        }
        ,
        165: (e, t, a) => {
            var n = a(384)
              , r = a(6077)
              , l = a(5935);
            e.exports = function(e) {
                return l(e) ? n(e) : r(e)
            }
        }
        ,
        3190: (e, t, a) => {
            var n = a(384)
              , r = a(4574)
              , l = a(5935);
            e.exports = function(e) {
                return l(e) ? n(e, !0) : r(e)
            }
        }
        ,
        4165: e => {
            e.exports = function() {}
        }
        ,
        2257: (e, t, a) => {
            var n = a(7580);
            e.exports = function() {
                return n.Date.now()
            }
        }
        ,
        8760: e => {
            e.exports = function() {
                return []
            }
        }
        ,
        9290: e => {
            e.exports = function() {
                return !1
            }
        }
        ,
        1741: (e, t, a) => {
            var n = a(8474)
              , r = a(4866);
            e.exports = function(e, t, a) {
                var l = !0
                  , o = !0;
                if ("function" != typeof e)
                    throw new TypeError("Expected a function");
                return r(a) && (l = "leading"in a ? !!a.leading : l,
                o = "trailing"in a ? !!a.trailing : o),
                n(e, t, {
                    leading: l,
                    maxWait: t,
                    trailing: o
                })
            }
        }
        ,
        1645: (e, t, a) => {
            var n = a(8873)
              , r = a(4866)
              , l = a(4469)
              , o = /^[-+]0x[0-9a-f]+$/i
              , i = /^0b[01]+$/i
              , s = /^0o[0-7]+$/i
              , c = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e)
                    return e;
                if (l(e))
                    return NaN;
                if (r(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = r(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = n(e);
                var a = i.test(e);
                return a || s.test(e) ? c(e.slice(2), a ? 2 : 8) : o.test(e) ? NaN : +e
            }
        }
        ,
        2098: function(e, t) {
            var a, n, r;
            n = [],
            a = function e() {
                "use strict";
                var t = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : {}
                  , a = !t.document && !!t.postMessage
                  , n = t.IS_PAPA_WORKER || !1
                  , r = {}
                  , l = 0
                  , o = {
                    parse: function(a, n) {
                        var i = (n = n || {}).dynamicTyping || !1;
                        if (w(i) && (n.dynamicTypingFunction = i,
                        i = {}),
                        n.dynamicTyping = i,
                        n.transform = !!w(n.transform) && n.transform,
                        n.worker && o.WORKERS_SUPPORTED) {
                            var s = function() {
                                if (!o.WORKERS_SUPPORTED)
                                    return !1;
                                var a, n, i = (a = t.URL || t.webkitURL || null,
                                n = e.toString(),
                                o.BLOB_URL || (o.BLOB_URL = a.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", n, ")();"],{
                                    type: "text/javascript"
                                })))), s = new t.Worker(i);
                                return s.onmessage = g,
                                s.id = l++,
                                r[s.id] = s
                            }();
                            return s.userStep = n.step,
                            s.userChunk = n.chunk,
                            s.userComplete = n.complete,
                            s.userError = n.error,
                            n.step = w(n.step),
                            n.chunk = w(n.chunk),
                            n.complete = w(n.complete),
                            n.error = w(n.error),
                            delete n.worker,
                            void s.postMessage({
                                input: a,
                                config: n,
                                workerId: s.id
                            })
                        }
                        var p = null;
                        return o.NODE_STREAM_INPUT,
                        "string" == typeof a ? (a = function(e) {
                            return 65279 === e.charCodeAt(0) ? e.slice(1) : e
                        }(a),
                        p = n.download ? new c(n) : new m(n)) : !0 === a.readable && w(a.read) && w(a.on) ? p = new d(n) : (t.File && a instanceof File || a instanceof Object) && (p = new u(n)),
                        p.stream(a)
                    },
                    unparse: function(e, t) {
                        var a = !1
                          , n = !0
                          , r = ","
                          , l = "\r\n"
                          , i = '"'
                          , s = i + i
                          , c = !1
                          , u = null
                          , m = !1;
                        !function() {
                            if ("object" == typeof t) {
                                if ("string" != typeof t.delimiter || o.BAD_DELIMITERS.filter((function(e) {
                                    return -1 !== t.delimiter.indexOf(e)
                                }
                                )).length || (r = t.delimiter),
                                ("boolean" == typeof t.quotes || "function" == typeof t.quotes || Array.isArray(t.quotes)) && (a = t.quotes),
                                "boolean" != typeof t.skipEmptyLines && "string" != typeof t.skipEmptyLines || (c = t.skipEmptyLines),
                                "string" == typeof t.newline && (l = t.newline),
                                "string" == typeof t.quoteChar && (i = t.quoteChar),
                                "boolean" == typeof t.header && (n = t.header),
                                Array.isArray(t.columns)) {
                                    if (0 === t.columns.length)
                                        throw new Error("Option columns is empty");
                                    u = t.columns
                                }
                                void 0 !== t.escapeChar && (s = t.escapeChar + i),
                                ("boolean" == typeof t.escapeFormulae || t.escapeFormulae instanceof RegExp) && (m = t.escapeFormulae instanceof RegExp ? t.escapeFormulae : /^[=+\-@\t\r].*$/)
                            }
                        }();
                        var d = new RegExp(h(i),"g");
                        if ("string" == typeof e && (e = JSON.parse(e)),
                        Array.isArray(e)) {
                            if (!e.length || Array.isArray(e[0]))
                                return p(null, e, c);
                            if ("object" == typeof e[0])
                                return p(u || Object.keys(e[0]), e, c)
                        } else if ("object" == typeof e)
                            return "string" == typeof e.data && (e.data = JSON.parse(e.data)),
                            Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields || u),
                            e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : "object" == typeof e.data[0] ? Object.keys(e.data[0]) : []),
                            Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [e.data])),
                            p(e.fields || [], e.data || [], c);
                        throw new Error("Unable to serialize unrecognized input");
                        function p(e, t, a) {
                            var o = "";
                            "string" == typeof e && (e = JSON.parse(e)),
                            "string" == typeof t && (t = JSON.parse(t));
                            var i = Array.isArray(e) && 0 < e.length
                              , s = !Array.isArray(t[0]);
                            if (i && n) {
                                for (var c = 0; c < e.length; c++)
                                    0 < c && (o += r),
                                    o += f(e[c], c);
                                0 < t.length && (o += l)
                            }
                            for (var u = 0; u < t.length; u++) {
                                var m = i ? e.length : t[u].length
                                  , d = !1
                                  , p = i ? 0 === Object.keys(t[u]).length : 0 === t[u].length;
                                if (a && !i && (d = "greedy" === a ? "" === t[u].join("").trim() : 1 === t[u].length && 0 === t[u][0].length),
                                "greedy" === a && i) {
                                    for (var h = [], g = 0; g < m; g++) {
                                        var b = s ? e[g] : g;
                                        h.push(t[u][b])
                                    }
                                    d = "" === h.join("").trim()
                                }
                                if (!d) {
                                    for (var v = 0; v < m; v++) {
                                        0 < v && !p && (o += r);
                                        var y = i && s ? e[v] : v;
                                        o += f(t[u][y], v)
                                    }
                                    u < t.length - 1 && (!a || 0 < m && !p) && (o += l)
                                }
                            }
                            return o
                        }
                        function f(e, t) {
                            if (null == e)
                                return "";
                            if (e.constructor === Date)
                                return JSON.stringify(e).slice(1, 25);
                            var n = !1;
                            m && "string" == typeof e && m.test(e) && (e = "'" + e,
                            n = !0);
                            var l = e.toString().replace(d, s);
                            return (n = n || !0 === a || "function" == typeof a && a(e, t) || Array.isArray(a) && a[t] || function(e, t) {
                                for (var a = 0; a < t.length; a++)
                                    if (-1 < e.indexOf(t[a]))
                                        return !0;
                                return !1
                            }(l, o.BAD_DELIMITERS) || -1 < l.indexOf(r) || " " === l.charAt(0) || " " === l.charAt(l.length - 1)) ? i + l + i : l
                        }
                    }
                };
                if (o.RECORD_SEP = String.fromCharCode(30),
                o.UNIT_SEP = String.fromCharCode(31),
                o.BYTE_ORDER_MARK = "\ufeff",
                o.BAD_DELIMITERS = ["\r", "\n", '"', o.BYTE_ORDER_MARK],
                o.WORKERS_SUPPORTED = !a && !!t.Worker,
                o.NODE_STREAM_INPUT = 1,
                o.LocalChunkSize = 10485760,
                o.RemoteChunkSize = 5242880,
                o.DefaultDelimiter = ",",
                o.Parser = f,
                o.ParserHandle = p,
                o.NetworkStreamer = c,
                o.FileStreamer = u,
                o.StringStreamer = m,
                o.ReadableStreamStreamer = d,
                t.jQuery) {
                    var i = t.jQuery;
                    i.fn.parse = function(e) {
                        var a = e.config || {}
                          , n = [];
                        return this.each((function(e) {
                            if ("INPUT" !== i(this).prop("tagName").toUpperCase() || "file" !== i(this).attr("type").toLowerCase() || !t.FileReader || !this.files || 0 === this.files.length)
                                return !0;
                            for (var r = 0; r < this.files.length; r++)
                                n.push({
                                    file: this.files[r],
                                    inputElem: this,
                                    instanceConfig: i.extend({}, a)
                                })
                        }
                        )),
                        r(),
                        this;
                        function r() {
                            if (0 !== n.length) {
                                var t, a, r, s, c = n[0];
                                if (w(e.before)) {
                                    var u = e.before(c.file, c.inputElem);
                                    if ("object" == typeof u) {
                                        if ("abort" === u.action)
                                            return t = "AbortError",
                                            a = c.file,
                                            r = c.inputElem,
                                            s = u.reason,
                                            void (w(e.error) && e.error({
                                                name: t
                                            }, a, r, s));
                                        if ("skip" === u.action)
                                            return void l();
                                        "object" == typeof u.config && (c.instanceConfig = i.extend(c.instanceConfig, u.config))
                                    } else if ("skip" === u)
                                        return void l()
                                }
                                var m = c.instanceConfig.complete;
                                c.instanceConfig.complete = function(e) {
                                    w(m) && m(e, c.file, c.inputElem),
                                    l()
                                }
                                ,
                                o.parse(c.file, c.instanceConfig)
                            } else
                                w(e.complete) && e.complete()
                        }
                        function l() {
                            n.splice(0, 1),
                            r()
                        }
                    }
                }
                function s(e) {
                    this._handle = null,
                    this._finished = !1,
                    this._completed = !1,
                    this._halted = !1,
                    this._input = null,
                    this._baseIndex = 0,
                    this._partialLine = "",
                    this._rowCount = 0,
                    this._start = 0,
                    this._nextChunk = null,
                    this.isFirstChunk = !0,
                    this._completeResults = {
                        data: [],
                        errors: [],
                        meta: {}
                    },
                    function(e) {
                        var t = y(e);
                        t.chunkSize = parseInt(t.chunkSize),
                        e.step || e.chunk || (t.chunkSize = null),
                        this._handle = new p(t),
                        (this._handle.streamer = this)._config = t
                    }
                    .call(this, e),
                    this.parseChunk = function(e, a) {
                        if (this.isFirstChunk && w(this._config.beforeFirstChunk)) {
                            var r = this._config.beforeFirstChunk(e);
                            void 0 !== r && (e = r)
                        }
                        this.isFirstChunk = !1,
                        this._halted = !1;
                        var l = this._partialLine + e;
                        this._partialLine = "";
                        var i = this._handle.parse(l, this._baseIndex, !this._finished);
                        if (!this._handle.paused() && !this._handle.aborted()) {
                            var s = i.meta.cursor;
                            this._finished || (this._partialLine = l.substring(s - this._baseIndex),
                            this._baseIndex = s),
                            i && i.data && (this._rowCount += i.data.length);
                            var c = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                            if (n)
                                t.postMessage({
                                    results: i,
                                    workerId: o.WORKER_ID,
                                    finished: c
                                });
                            else if (w(this._config.chunk) && !a) {
                                if (this._config.chunk(i, this._handle),
                                this._handle.paused() || this._handle.aborted())
                                    return void (this._halted = !0);
                                i = void 0,
                                this._completeResults = void 0
                            }
                            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(i.data),
                            this._completeResults.errors = this._completeResults.errors.concat(i.errors),
                            this._completeResults.meta = i.meta),
                            this._completed || !c || !w(this._config.complete) || i && i.meta.aborted || (this._config.complete(this._completeResults, this._input),
                            this._completed = !0),
                            c || i && i.meta.paused || this._nextChunk(),
                            i
                        }
                        this._halted = !0
                    }
                    ,
                    this._sendError = function(e) {
                        w(this._config.error) ? this._config.error(e) : n && this._config.error && t.postMessage({
                            workerId: o.WORKER_ID,
                            error: e,
                            finished: !1
                        })
                    }
                }
                function c(e) {
                    var t;
                    (e = e || {}).chunkSize || (e.chunkSize = o.RemoteChunkSize),
                    s.call(this, e),
                    this._nextChunk = a ? function() {
                        this._readChunk(),
                        this._chunkLoaded()
                    }
                    : function() {
                        this._readChunk()
                    }
                    ,
                    this.stream = function(e) {
                        this._input = e,
                        this._nextChunk()
                    }
                    ,
                    this._readChunk = function() {
                        if (this._finished)
                            this._chunkLoaded();
                        else {
                            if (t = new XMLHttpRequest,
                            this._config.withCredentials && (t.withCredentials = this._config.withCredentials),
                            a || (t.onload = E(this._chunkLoaded, this),
                            t.onerror = E(this._chunkError, this)),
                            t.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !a),
                            this._config.downloadRequestHeaders) {
                                var e = this._config.downloadRequestHeaders;
                                for (var n in e)
                                    t.setRequestHeader(n, e[n])
                            }
                            if (this._config.chunkSize) {
                                var r = this._start + this._config.chunkSize - 1;
                                t.setRequestHeader("Range", "bytes=" + this._start + "-" + r)
                            }
                            try {
                                t.send(this._config.downloadRequestBody)
                            } catch (e) {
                                this._chunkError(e.message)
                            }
                            a && 0 === t.status && this._chunkError()
                        }
                    }
                    ,
                    this._chunkLoaded = function() {
                        4 === t.readyState && (t.status < 200 || 400 <= t.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : t.responseText.length,
                        this._finished = !this._config.chunkSize || this._start >= function(e) {
                            var t = e.getResponseHeader("Content-Range");
                            return null === t ? -1 : parseInt(t.substring(t.lastIndexOf("/") + 1))
                        }(t),
                        this.parseChunk(t.responseText)))
                    }
                    ,
                    this._chunkError = function(e) {
                        var a = t.statusText || e;
                        this._sendError(new Error(a))
                    }
                }
                function u(e) {
                    var t, a;
                    (e = e || {}).chunkSize || (e.chunkSize = o.LocalChunkSize),
                    s.call(this, e);
                    var n = "undefined" != typeof FileReader;
                    this.stream = function(e) {
                        this._input = e,
                        a = e.slice || e.webkitSlice || e.mozSlice,
                        n ? ((t = new FileReader).onload = E(this._chunkLoaded, this),
                        t.onerror = E(this._chunkError, this)) : t = new FileReaderSync,
                        this._nextChunk()
                    }
                    ,
                    this._nextChunk = function() {
                        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk()
                    }
                    ,
                    this._readChunk = function() {
                        var e = this._input;
                        if (this._config.chunkSize) {
                            var r = Math.min(this._start + this._config.chunkSize, this._input.size);
                            e = a.call(e, this._start, r)
                        }
                        var l = t.readAsText(e, this._config.encoding);
                        n || this._chunkLoaded({
                            target: {
                                result: l
                            }
                        })
                    }
                    ,
                    this._chunkLoaded = function(e) {
                        this._start += this._config.chunkSize,
                        this._finished = !this._config.chunkSize || this._start >= this._input.size,
                        this.parseChunk(e.target.result)
                    }
                    ,
                    this._chunkError = function() {
                        this._sendError(t.error)
                    }
                }
                function m(e) {
                    var t;
                    s.call(this, e = e || {}),
                    this.stream = function(e) {
                        return t = e,
                        this._nextChunk()
                    }
                    ,
                    this._nextChunk = function() {
                        if (!this._finished) {
                            var e, a = this._config.chunkSize;
                            return a ? (e = t.substring(0, a),
                            t = t.substring(a)) : (e = t,
                            t = ""),
                            this._finished = !t,
                            this.parseChunk(e)
                        }
                    }
                }
                function d(e) {
                    s.call(this, e = e || {});
                    var t = []
                      , a = !0
                      , n = !1;
                    this.pause = function() {
                        s.prototype.pause.apply(this, arguments),
                        this._input.pause()
                    }
                    ,
                    this.resume = function() {
                        s.prototype.resume.apply(this, arguments),
                        this._input.resume()
                    }
                    ,
                    this.stream = function(e) {
                        this._input = e,
                        this._input.on("data", this._streamData),
                        this._input.on("end", this._streamEnd),
                        this._input.on("error", this._streamError)
                    }
                    ,
                    this._checkIsFinished = function() {
                        n && 1 === t.length && (this._finished = !0)
                    }
                    ,
                    this._nextChunk = function() {
                        this._checkIsFinished(),
                        t.length ? this.parseChunk(t.shift()) : a = !0
                    }
                    ,
                    this._streamData = E((function(e) {
                        try {
                            t.push("string" == typeof e ? e : e.toString(this._config.encoding)),
                            a && (a = !1,
                            this._checkIsFinished(),
                            this.parseChunk(t.shift()))
                        } catch (e) {
                            this._streamError(e)
                        }
                    }
                    ), this),
                    this._streamError = E((function(e) {
                        this._streamCleanUp(),
                        this._sendError(e)
                    }
                    ), this),
                    this._streamEnd = E((function() {
                        this._streamCleanUp(),
                        n = !0,
                        this._streamData("")
                    }
                    ), this),
                    this._streamCleanUp = E((function() {
                        this._input.removeListener("data", this._streamData),
                        this._input.removeListener("end", this._streamEnd),
                        this._input.removeListener("error", this._streamError)
                    }
                    ), this)
                }
                function p(e) {
                    var t, a, n, r = Math.pow(2, 53), l = -r, i = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, s = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, c = this, u = 0, m = 0, d = !1, p = !1, g = [], b = {
                        data: [],
                        errors: [],
                        meta: {}
                    };
                    if (w(e.step)) {
                        var v = e.step;
                        e.step = function(t) {
                            if (b = t,
                            N())
                                x();
                            else {
                                if (x(),
                                0 === b.data.length)
                                    return;
                                u += t.data.length,
                                e.preview && u > e.preview ? a.abort() : (b.data = b.data[0],
                                v(b, c))
                            }
                        }
                    }
                    function E(t) {
                        return "greedy" === e.skipEmptyLines ? "" === t.join("").trim() : 1 === t.length && 0 === t[0].length
                    }
                    function x() {
                        return b && n && (k("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + o.DefaultDelimiter + "'"),
                        n = !1),
                        e.skipEmptyLines && (b.data = b.data.filter((function(e) {
                            return !E(e)
                        }
                        ))),
                        N() && function() {
                            if (b)
                                if (Array.isArray(b.data[0])) {
                                    for (var t = 0; N() && t < b.data.length; t++)
                                        b.data[t].forEach(a);
                                    b.data.splice(0, 1)
                                } else
                                    b.data.forEach(a);
                            function a(t, a) {
                                w(e.transformHeader) && (t = e.transformHeader(t, a)),
                                g.push(t)
                            }
                        }(),
                        function() {
                            if (!b || !e.header && !e.dynamicTyping && !e.transform)
                                return b;
                            function t(t, a) {
                                var n, r = e.header ? {} : [];
                                for (n = 0; n < t.length; n++) {
                                    var l = n
                                      , o = t[n];
                                    e.header && (l = n >= g.length ? "__parsed_extra" : g[n]),
                                    e.transform && (o = e.transform(o, l)),
                                    o = C(l, o),
                                    "__parsed_extra" === l ? (r[l] = r[l] || [],
                                    r[l].push(o)) : r[l] = o
                                }
                                return e.header && (n > g.length ? k("FieldMismatch", "TooManyFields", "Too many fields: expected " + g.length + " fields but parsed " + n, m + a) : n < g.length && k("FieldMismatch", "TooFewFields", "Too few fields: expected " + g.length + " fields but parsed " + n, m + a)),
                                r
                            }
                            var a = 1;
                            return !b.data.length || Array.isArray(b.data[0]) ? (b.data = b.data.map(t),
                            a = b.data.length) : b.data = t(b.data, 0),
                            e.header && b.meta && (b.meta.fields = g),
                            m += a,
                            b
                        }()
                    }
                    function N() {
                        return e.header && 0 === g.length
                    }
                    function C(t, a) {
                        return n = t,
                        e.dynamicTypingFunction && void 0 === e.dynamicTyping[n] && (e.dynamicTyping[n] = e.dynamicTypingFunction(n)),
                        !0 === (e.dynamicTyping[n] || e.dynamicTyping) ? "true" === a || "TRUE" === a || "false" !== a && "FALSE" !== a && (function(e) {
                            if (i.test(e)) {
                                var t = parseFloat(e);
                                if (l < t && t < r)
                                    return !0
                            }
                            return !1
                        }(a) ? parseFloat(a) : s.test(a) ? new Date(a) : "" === a ? null : a) : a;
                        var n
                    }
                    function k(e, t, a, n) {
                        var r = {
                            type: e,
                            code: t,
                            message: a
                        };
                        void 0 !== n && (r.row = n),
                        b.errors.push(r)
                    }
                    this.parse = function(r, l, i) {
                        var s = e.quoteChar || '"';
                        if (e.newline || (e.newline = function(e, t) {
                            e = e.substring(0, 1048576);
                            var a = new RegExp(h(t) + "([^]*?)" + h(t),"gm")
                              , n = (e = e.replace(a, "")).split("\r")
                              , r = e.split("\n")
                              , l = 1 < r.length && r[0].length < n[0].length;
                            if (1 === n.length || l)
                                return "\n";
                            for (var o = 0, i = 0; i < n.length; i++)
                                "\n" === n[i][0] && o++;
                            return o >= n.length / 2 ? "\r\n" : "\r"
                        }(r, s)),
                        n = !1,
                        e.delimiter)
                            w(e.delimiter) && (e.delimiter = e.delimiter(r),
                            b.meta.delimiter = e.delimiter);
                        else {
                            var c = function(t, a, n, r, l) {
                                var i, s, c, u;
                                l = l || [",", "\t", "|", ";", o.RECORD_SEP, o.UNIT_SEP];
                                for (var m = 0; m < l.length; m++) {
                                    var d = l[m]
                                      , p = 0
                                      , h = 0
                                      , g = 0;
                                    c = void 0;
                                    for (var b = new f({
                                        comments: r,
                                        delimiter: d,
                                        newline: a,
                                        preview: 10
                                    }).parse(t), v = 0; v < b.data.length; v++)
                                        if (n && E(b.data[v]))
                                            g++;
                                        else {
                                            var y = b.data[v].length;
                                            h += y,
                                            void 0 !== c ? 0 < y && (p += Math.abs(y - c),
                                            c = y) : c = y
                                        }
                                    0 < b.data.length && (h /= b.data.length - g),
                                    (void 0 === s || p <= s) && (void 0 === u || u < h) && 1.99 < h && (s = p,
                                    i = d,
                                    u = h)
                                }
                                return {
                                    successful: !!(e.delimiter = i),
                                    bestDelimiter: i
                                }
                            }(r, e.newline, e.skipEmptyLines, e.comments, e.delimitersToGuess);
                            c.successful ? e.delimiter = c.bestDelimiter : (n = !0,
                            e.delimiter = o.DefaultDelimiter),
                            b.meta.delimiter = e.delimiter
                        }
                        var u = y(e);
                        return e.preview && e.header && u.preview++,
                        t = r,
                        a = new f(u),
                        b = a.parse(t, l, i),
                        x(),
                        d ? {
                            meta: {
                                paused: !0
                            }
                        } : b || {
                            meta: {
                                paused: !1
                            }
                        }
                    }
                    ,
                    this.paused = function() {
                        return d
                    }
                    ,
                    this.pause = function() {
                        d = !0,
                        a.abort(),
                        t = w(e.chunk) ? "" : t.substring(a.getCharIndex())
                    }
                    ,
                    this.resume = function() {
                        c.streamer._halted ? (d = !1,
                        c.streamer.parseChunk(t, !0)) : setTimeout(c.resume, 3)
                    }
                    ,
                    this.aborted = function() {
                        return p
                    }
                    ,
                    this.abort = function() {
                        p = !0,
                        a.abort(),
                        b.meta.aborted = !0,
                        w(e.complete) && e.complete(b),
                        t = ""
                    }
                }
                function h(e) {
                    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                }
                function f(e) {
                    var t, a = (e = e || {}).delimiter, n = e.newline, r = e.comments, l = e.step, i = e.preview, s = e.fastMode, c = t = void 0 === e.quoteChar || null === e.quoteChar ? '"' : e.quoteChar;
                    if (void 0 !== e.escapeChar && (c = e.escapeChar),
                    ("string" != typeof a || -1 < o.BAD_DELIMITERS.indexOf(a)) && (a = ","),
                    r === a)
                        throw new Error("Comment character same as delimiter");
                    !0 === r ? r = "#" : ("string" != typeof r || -1 < o.BAD_DELIMITERS.indexOf(r)) && (r = !1),
                    "\n" !== n && "\r" !== n && "\r\n" !== n && (n = "\n");
                    var u = 0
                      , m = !1;
                    this.parse = function(o, d, p) {
                        if ("string" != typeof o)
                            throw new Error("Input must be a string");
                        var f = o.length
                          , g = a.length
                          , b = n.length
                          , v = r.length
                          , y = w(l)
                          , E = []
                          , x = []
                          , N = []
                          , C = u = 0;
                        if (!o)
                            return V();
                        if (e.header && !d) {
                            var k = o.split(n)[0].split(a)
                              , _ = []
                              , A = {}
                              , S = !1;
                            for (var L in k) {
                                var M = k[L];
                                w(e.transformHeader) && (M = e.transformHeader(M, L));
                                var T = M
                                  , P = A[M] || 0;
                                for (0 < P && (S = !0,
                                T = M + "_" + P),
                                A[M] = P + 1; _.includes(T); )
                                    T = T + "_" + P;
                                _.push(T)
                            }
                            if (S) {
                                var O = o.split(n);
                                O[0] = _.join(a),
                                o = O.join(n)
                            }
                        }
                        if (s || !1 !== s && -1 === o.indexOf(t)) {
                            for (var R = o.split(n), I = 0; I < R.length; I++) {
                                if (N = R[I],
                                u += N.length,
                                I !== R.length - 1)
                                    u += n.length;
                                else if (p)
                                    return V();
                                if (!r || N.substring(0, v) !== r) {
                                    if (y) {
                                        if (E = [],
                                        Z(N.split(a)),
                                        W(),
                                        m)
                                            return V()
                                    } else
                                        Z(N.split(a));
                                    if (i && i <= I)
                                        return E = E.slice(0, i),
                                        V(!0)
                                }
                            }
                            return V()
                        }
                        for (var j = o.indexOf(a, u), D = o.indexOf(n, u), $ = new RegExp(h(c) + h(t),"g"), z = o.indexOf(t, u); ; )
                            if (o[u] !== t)
                                if (r && 0 === N.length && o.substring(u, u + v) === r) {
                                    if (-1 === D)
                                        return V();
                                    u = D + b,
                                    D = o.indexOf(n, u),
                                    j = o.indexOf(a, u)
                                } else if (-1 !== j && (j < D || -1 === D))
                                    N.push(o.substring(u, j)),
                                    u = j + g,
                                    j = o.indexOf(a, u);
                                else {
                                    if (-1 === D)
                                        break;
                                    if (N.push(o.substring(u, D)),
                                    B(D + b),
                                    y && (W(),
                                    m))
                                        return V();
                                    if (i && E.length >= i)
                                        return V(!0)
                                }
                            else
                                for (z = u,
                                u++; ; ) {
                                    if (-1 === (z = o.indexOf(t, z + 1)))
                                        return p || x.push({
                                            type: "Quotes",
                                            code: "MissingQuotes",
                                            message: "Quoted field unterminated",
                                            row: E.length,
                                            index: u
                                        }),
                                        U();
                                    if (z === f - 1)
                                        return U(o.substring(u, z).replace($, t));
                                    if (t !== c || o[z + 1] !== c) {
                                        if (t === c || 0 === z || o[z - 1] !== c) {
                                            -1 !== j && j < z + 1 && (j = o.indexOf(a, z + 1)),
                                            -1 !== D && D < z + 1 && (D = o.indexOf(n, z + 1));
                                            var H = q(-1 === D ? j : Math.min(j, D));
                                            if (o.substr(z + 1 + H, g) === a) {
                                                N.push(o.substring(u, z).replace($, t)),
                                                o[u = z + 1 + H + g] !== t && (z = o.indexOf(t, u)),
                                                j = o.indexOf(a, u),
                                                D = o.indexOf(n, u);
                                                break
                                            }
                                            var F = q(D);
                                            if (o.substring(z + 1 + F, z + 1 + F + b) === n) {
                                                if (N.push(o.substring(u, z).replace($, t)),
                                                B(z + 1 + F + b),
                                                j = o.indexOf(a, u),
                                                z = o.indexOf(t, u),
                                                y && (W(),
                                                m))
                                                    return V();
                                                if (i && E.length >= i)
                                                    return V(!0);
                                                break
                                            }
                                            x.push({
                                                type: "Quotes",
                                                code: "InvalidQuotes",
                                                message: "Trailing quote on quoted field is malformed",
                                                row: E.length,
                                                index: u
                                            }),
                                            z++
                                        }
                                    } else
                                        z++
                                }
                        return U();
                        function Z(e) {
                            E.push(e),
                            C = u
                        }
                        function q(e) {
                            var t = 0;
                            if (-1 !== e) {
                                var a = o.substring(z + 1, e);
                                a && "" === a.trim() && (t = a.length)
                            }
                            return t
                        }
                        function U(e) {
                            return p || (void 0 === e && (e = o.substring(u)),
                            N.push(e),
                            u = f,
                            Z(N),
                            y && W()),
                            V()
                        }
                        function B(e) {
                            u = e,
                            Z(N),
                            N = [],
                            D = o.indexOf(n, u)
                        }
                        function V(e) {
                            return {
                                data: E,
                                errors: x,
                                meta: {
                                    delimiter: a,
                                    linebreak: n,
                                    aborted: m,
                                    truncated: !!e,
                                    cursor: C + (d || 0)
                                }
                            }
                        }
                        function W() {
                            l(V()),
                            E = [],
                            x = []
                        }
                    }
                    ,
                    this.abort = function() {
                        m = !0
                    }
                    ,
                    this.getCharIndex = function() {
                        return u
                    }
                }
                function g(e) {
                    var t = e.data
                      , a = r[t.workerId]
                      , n = !1;
                    if (t.error)
                        a.userError(t.error, t.file);
                    else if (t.results && t.results.data) {
                        var l = {
                            abort: function() {
                                n = !0,
                                b(t.workerId, {
                                    data: [],
                                    errors: [],
                                    meta: {
                                        aborted: !0
                                    }
                                })
                            },
                            pause: v,
                            resume: v
                        };
                        if (w(a.userStep)) {
                            for (var o = 0; o < t.results.data.length && (a.userStep({
                                data: t.results.data[o],
                                errors: t.results.errors,
                                meta: t.results.meta
                            }, l),
                            !n); o++)
                                ;
                            delete t.results
                        } else
                            w(a.userChunk) && (a.userChunk(t.results, l, t.file),
                            delete t.results)
                    }
                    t.finished && !n && b(t.workerId, t.results)
                }
                function b(e, t) {
                    var a = r[e];
                    w(a.userComplete) && a.userComplete(t),
                    a.terminate(),
                    delete r[e]
                }
                function v() {
                    throw new Error("Not implemented.")
                }
                function y(e) {
                    if ("object" != typeof e || null === e)
                        return e;
                    var t = Array.isArray(e) ? [] : {};
                    for (var a in e)
                        t[a] = y(e[a]);
                    return t
                }
                function E(e, t) {
                    return function() {
                        e.apply(t, arguments)
                    }
                }
                function w(e) {
                    return "function" == typeof e
                }
                return n && (t.onmessage = function(e) {
                    var a = e.data;
                    if (void 0 === o.WORKER_ID && a && (o.WORKER_ID = a.workerId),
                    "string" == typeof a.input)
                        t.postMessage({
                            workerId: o.WORKER_ID,
                            results: o.parse(a.input, a.config),
                            finished: !0
                        });
                    else if (t.File && a.input instanceof File || a.input instanceof Object) {
                        var n = o.parse(a.input, a.config);
                        n && t.postMessage({
                            workerId: o.WORKER_ID,
                            results: n,
                            finished: !0
                        })
                    }
                }
                ),
                (c.prototype = Object.create(s.prototype)).constructor = c,
                (u.prototype = Object.create(s.prototype)).constructor = u,
                (m.prototype = Object.create(m.prototype)).constructor = m,
                (d.prototype = Object.create(s.prototype)).constructor = d,
                o
            }
            ,
            void 0 === (r = "function" == typeof a ? a.apply(t, n) : a) || (e.exports = r)
        },
        9544: function(e) {
            (function() {
                var t, a, n, r, l, o;
                "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                    return performance.now()
                }
                : "undefined" != typeof process && null !== process && process.hrtime ? (e.exports = function() {
                    return (t() - l) / 1e6
                }
                ,
                a = process.hrtime,
                r = (t = function() {
                    var e;
                    return 1e9 * (e = a())[0] + e[1]
                }
                )(),
                o = 1e9 * process.uptime(),
                l = r - o) : Date.now ? (e.exports = function() {
                    return Date.now() - n
                }
                ,
                n = Date.now()) : (e.exports = function() {
                    return (new Date).getTime() - n
                }
                ,
                n = (new Date).getTime())
            }
            ).call(this)
        },
        9829: (e, t, a) => {
            "use strict";
            var n = a(6550);
            function r() {}
            function l() {}
            l.resetWarningCache = r,
            e.exports = function() {
                function e(e, t, a, r, l, o) {
                    if (o !== n) {
                        var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw i.name = "Invariant Violation",
                        i
                    }
                }
                function t() {
                    return e
                }
                e.isRequired = e;
                var a = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: l,
                    resetWarningCache: r
                };
                return a.PropTypes = a,
                a
            }
        }
        ,
        8713: (e, t, a) => {
            e.exports = a(9829)()
        }
        ,
        6550: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        }
        ,
        6189: (e, t, a) => {
            for (var n = a(9544), r = "undefined" == typeof window ? a.g : window, l = ["moz", "webkit"], o = "AnimationFrame", i = r["request" + o], s = r["cancel" + o] || r["cancelRequest" + o], c = 0; !i && c < l.length; c++)
                i = r[l[c] + "Request" + o],
                s = r[l[c] + "Cancel" + o] || r[l[c] + "CancelRequest" + o];
            if (!i || !s) {
                var u = 0
                  , m = 0
                  , d = [];
                i = function(e) {
                    if (0 === d.length) {
                        var t = n()
                          , a = Math.max(0, 16.666666666666668 - (t - u));
                        u = a + t,
                        setTimeout((function() {
                            var e = d.slice(0);
                            d.length = 0;
                            for (var t = 0; t < e.length; t++)
                                if (!e[t].cancelled)
                                    try {
                                        e[t].callback(u)
                                    } catch (e) {
                                        setTimeout((function() {
                                            throw e
                                        }
                                        ), 0)
                                    }
                        }
                        ), Math.round(a))
                    }
                    return d.push({
                        handle: ++m,
                        callback: e,
                        cancelled: !1
                    }),
                    m
                }
                ,
                s = function(e) {
                    for (var t = 0; t < d.length; t++)
                        d[t].handle === e && (d[t].cancelled = !0)
                }
            }
            e.exports = function(e) {
                return i.call(r, e)
            }
            ,
            e.exports.cancel = function() {
                s.apply(r, arguments)
            }
            ,
            e.exports.polyfill = function(e) {
                e || (e = r),
                e.requestAnimationFrame = i,
                e.cancelAnimationFrame = s
            }
        }
        ,
        4723: (e, t, a) => {
            "use strict";
            var n = a(5206);
            t.H = n.createRoot,
            n.hydrateRoot
        }
        ,
        1755: e => {
            "use strict";
            var t = Object.prototype.hasOwnProperty
              , a = "~";
            function n() {}
            function r(e, t, a) {
                this.fn = e,
                this.context = t,
                this.once = a || !1
            }
            function l(e, t, n, l, o) {
                if ("function" != typeof n)
                    throw new TypeError("The listener must be a function");
                var i = new r(n,l || e,o)
                  , s = a ? a + t : t;
                return e._events[s] ? e._events[s].fn ? e._events[s] = [e._events[s], i] : e._events[s].push(i) : (e._events[s] = i,
                e._eventsCount++),
                e
            }
            function o(e, t) {
                0 == --e._eventsCount ? e._events = new n : delete e._events[t]
            }
            function i() {
                this._events = new n,
                this._eventsCount = 0
            }
            Object.create && (n.prototype = Object.create(null),
            (new n).__proto__ || (a = !1)),
            i.prototype.eventNames = function() {
                var e, n, r = [];
                if (0 === this._eventsCount)
                    return r;
                for (n in e = this._events)
                    t.call(e, n) && r.push(a ? n.slice(1) : n);
                return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
            }
            ,
            i.prototype.listeners = function(e) {
                var t = a ? a + e : e
                  , n = this._events[t];
                if (!n)
                    return [];
                if (n.fn)
                    return [n.fn];
                for (var r = 0, l = n.length, o = new Array(l); r < l; r++)
                    o[r] = n[r].fn;
                return o
            }
            ,
            i.prototype.listenerCount = function(e) {
                var t = a ? a + e : e
                  , n = this._events[t];
                return n ? n.fn ? 1 : n.length : 0
            }
            ,
            i.prototype.emit = function(e, t, n, r, l, o) {
                var i = a ? a + e : e;
                if (!this._events[i])
                    return !1;
                var s, c, u = this._events[i], m = arguments.length;
                if (u.fn) {
                    switch (u.once && this.removeListener(e, u.fn, void 0, !0),
                    m) {
                    case 1:
                        return u.fn.call(u.context),
                        !0;
                    case 2:
                        return u.fn.call(u.context, t),
                        !0;
                    case 3:
                        return u.fn.call(u.context, t, n),
                        !0;
                    case 4:
                        return u.fn.call(u.context, t, n, r),
                        !0;
                    case 5:
                        return u.fn.call(u.context, t, n, r, l),
                        !0;
                    case 6:
                        return u.fn.call(u.context, t, n, r, l, o),
                        !0
                    }
                    for (c = 1,
                    s = new Array(m - 1); c < m; c++)
                        s[c - 1] = arguments[c];
                    u.fn.apply(u.context, s)
                } else {
                    var d, p = u.length;
                    for (c = 0; c < p; c++)
                        switch (u[c].once && this.removeListener(e, u[c].fn, void 0, !0),
                        m) {
                        case 1:
                            u[c].fn.call(u[c].context);
                            break;
                        case 2:
                            u[c].fn.call(u[c].context, t);
                            break;
                        case 3:
                            u[c].fn.call(u[c].context, t, n);
                            break;
                        case 4:
                            u[c].fn.call(u[c].context, t, n, r);
                            break;
                        default:
                            if (!s)
                                for (d = 1,
                                s = new Array(m - 1); d < m; d++)
                                    s[d - 1] = arguments[d];
                            u[c].fn.apply(u[c].context, s)
                        }
                }
                return !0
            }
            ,
            i.prototype.on = function(e, t, a) {
                return l(this, e, t, a, !1)
            }
            ,
            i.prototype.once = function(e, t, a) {
                return l(this, e, t, a, !0)
            }
            ,
            i.prototype.removeListener = function(e, t, n, r) {
                var l = a ? a + e : e;
                if (!this._events[l])
                    return this;
                if (!t)
                    return o(this, l),
                    this;
                var i = this._events[l];
                if (i.fn)
                    i.fn !== t || r && !i.once || n && i.context !== n || o(this, l);
                else {
                    for (var s = 0, c = [], u = i.length; s < u; s++)
                        (i[s].fn !== t || r && !i[s].once || n && i[s].context !== n) && c.push(i[s]);
                    c.length ? this._events[l] = 1 === c.length ? c[0] : c : o(this, l)
                }
                return this
            }
            ,
            i.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = a ? a + e : e,
                this._events[t] && o(this, t)) : (this._events = new n,
                this._eventsCount = 0),
                this
            }
            ,
            i.prototype.off = i.prototype.removeListener,
            i.prototype.addListener = i.prototype.on,
            i.prefixed = a,
            i.EventEmitter = i,
            e.exports = i
        }
        ,
        5206: e => {
            "use strict";
            e.exports = ReactDOM
        }
    }
      , t = {};
    function a(n) {
        var r = t[n];
        if (void 0 !== r)
            return r.exports;
        var l = t[n] = {
            id: n,
            loaded: !1,
            exports: {}
        };
        return e[n].call(l.exports, l, l.exports, a),
        l.loaded = !0,
        l.exports
    }
    a.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return a.d(t, {
            a: t
        }),
        t
    }
    ,
    a.d = (e, t) => {
        for (var n in t)
            a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    a.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    a.nmd = e => (e.paths = [],
    e.children || (e.children = []),
    e),
    ( () => {
        "use strict";
        var e = a(4723);
        const t = React;
        var n = a.n(t);
        const r = String(location.hostname).match(/pubchemdev/i)
          , l = String(location.hostname).match(/testpubchem/i)
          , o = `https://${location.hostname}`
          , i = o
          , s = "/pcfe/home_v2/"
          , c = "/pcfe/search/?collection="
          , u = r ? "/ptable/" : "/periodic-table/"
          , m = r ? "/rest/docs/" : "/docs/"
          , d = "/rest/pug/"
          , p = d + "periodictable/JSON"
          , h = r ? "/rest" : ""
          , f = h + "/element/"
          , g = {
            cid: "compound",
            sid: "substance",
            refsid: "reference",
            aid: "bioassay",
            baid: "bioactivity",
            geneid: "gene",
            protacxn: "protein",
            protein: "protein",
            taxid: "taxonomy",
            pwacc: "pathway",
            pathwayid: "pathway",
            cellid: "cell",
            diseaseid: "disease",
            pmid: "literature",
            pclid: "literature",
            doi: "literature",
            pmcid: "literature",
            publicationnumber: "patent",
            referencesid: "reference"
        }
          , b = {
            compound: "cid",
            substance: "sid",
            reference: "refsid",
            bioassay: "aid",
            gene: "geneid",
            literature: "pmid",
            taxonomy: "taxid"
        }
          , v = {
            protein: "protacxn",
            pathway: "pwacc",
            patent: "publicationnumber"
        }
          , y = "640px"
          , E = "1024px";
        function w(e) {
            (r || l) && console.log(e)
        }
        function x(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.hash
              , a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (!window)
                return;
            let n = ""
              , r = t ? t.replace(/^#/, "") : "";
            const l = new URLSearchParams(r);
            for (const [t,a] of Object.entries(e))
                !1 === a || "false" === a ? l.set(t, String(!1)) : a ? l.set(t, a) : l.delete(t);
            return n = l.toString() ? a ? `#${l.toString()}` : `#${decodeURIComponent(l.toString())}` : "",
            n
        }
        const N = e => {
            const [a,n] = (0,
            t.useState)(!1);
            return (0,
            t.useEffect)(( () => {
                const t = window.matchMedia(e);
                t.matches !== a && n(t.matches);
                const r = () => {
                    n(t.matches)
                }
                ;
                return t.addListener(r),
                () => t.removeListener(r)
            }
            ), [a, e]),
            a
        }
        ;
        const C = {
            event: function(e) {
                try {
                    e.category || (e.category = window.ga_category || "NONE"),
                    e.action || (e.action = "NONE"),
                    e.label || (e.label = "NONE")
                } catch (e) {
                    let t = "GA utils-logging exception...";
                    w(t),
                    w(e.message),
                    w(t)
                }
            }
        }
          , k = {
            400: "Bad Request",
            403: "Forbidden",
            404: "Not Found",
            408: "Request Timeout",
            413: "Payload Too Large",
            414: "URI Too Long",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Time-out"
        }
          , _ = function(e) {
            let a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
            const r = (0,
            t.useRef)({})
              , l = {
                status: "idle",
                error: null,
                data: null,
                url: "",
                requestUrl: ""
            }
              , [o,i] = (0,
            t.useReducer)(( (t, a) => {
                switch (a.type) {
                case "RESET":
                    return {
                        ...l
                    };
                case "FETCHING":
                    return {
                        ...l,
                        status: "fetching",
                        requestUrl: e
                    };
                case "FETCHED":
                    return {
                        ...l,
                        status: "fetched",
                        data: a.payload,
                        requestUrl: e
                    };
                case "FETCH_ERROR":
                    return {
                        ...l,
                        status: "error",
                        error: a.payload,
                        requestUrl: e
                    };
                default:
                    return t
                }
            }
            ), l);
            return (0,
            t.useEffect)(( () => {
                let t = !1;
                if (e)
                    return (async () => {
                        if (r.current[e]) {
                            const t = r.current[e];
                            0 === n ? i({
                                type: "FETCHED",
                                payload: t
                            }) : (i({
                                type: "FETCHING"
                            }),
                            setTimeout(( () => {
                                i({
                                    type: "FETCHED",
                                    payload: t
                                })
                            }
                            ), n))
                        } else {
                            i({
                                type: "FETCHING"
                            });
                            let n = 200
                              , l = ""
                              , o = !1
                              , s = !1;
                            try {
                                String(e).match(/\/SDF|=sdf|\/TXT|\/CSV|\.md|schema\.graphql/i) && (w("text URL found:"),
                                w(e),
                                o = !0)
                            } catch (e) {}
                            try {
                                const c = await fetch(e, {
                                    headers: {
                                        "Content-Type": (o ? "text/plain" : "application/json") + "; charset=utf-8"
                                    }
                                });
                                n = c.status,
                                l = c.statusText,
                                l || (l = k[n] || "");
                                const u = await (o ? c.text() : c.json());
                                if (t)
                                    return;
                                if (o) {
                                    if (200 !== n)
                                        throw s = !0,
                                        new Error(`${n} ${l}`)
                                } else {
                                    let e = "";
                                    if (u)
                                        if (u.Fault)
                                            u.Fault.Code && (e += u.Fault.Code),
                                            u.Fault.Message && (e += `\n${u.Fault.Message}`),
                                            u.Fault.Details && (e += `\n${u.Fault.Details.join("\n")}`);
                                        else if (u.response && 0 !== u.response.status)
                                            u.response.error && (e = Array.isArray(u.response.error) ? u.response.error.join("; ") : u.response.error);
                                        else if (u.SDQOutputSet) {
                                            let t = [];
                                            for (let e = 0; e < u.SDQOutputSet.length; e++)
                                                u.SDQOutputSet[e].status && u.SDQOutputSet[e].status.code < 0 && t.push(u.SDQOutputSet[e].status.error);
                                            t.length && (e = t.join("; "))
                                        }
                                    if (e)
                                        throw s = !0,
                                        new Error(e)
                                }
                                a && (r.current[e] = u),
                                i({
                                    type: "FETCHED",
                                    payload: u
                                })
                            } catch (a) {
                                if (t)
                                    return;
                                i({
                                    type: "FETCH_ERROR",
                                    payload: s ? a.message : 200 !== n ? `${n} ${l}` : a.message
                                }),
                                C.event({
                                    action: "fetch-error",
                                    label: `${a.message.match(/FETCH/i) ? "" : "FETCH ERROR: "}${a.message} URL=${e}`
                                })
                            }
                        }
                    }
                    )(),
                    function() {
                        t = !0
                    }
                    ;
                i({
                    type: "RESET"
                })
            }
            ), [e]),
            o
        }
          , A = "rgba(0,0,0,0)"
          , S = ["GroupBlock", "AtomicMass", "StandardState", "ElectronConfiguration", "OxidationStates", "Electronegativity", "AtomicRadius", "IonizationEnergy", "ElectronAffinity", "MeltingPoint", "BoilingPoint", "Density", "YearDiscovered", "None"]
          , L = {
            None: {
                name: "None"
            },
            AtomicMass: {
                name: "Atomic Mass",
                unit: "u",
                description: n().createElement("div", null, "Relative atomic mass is the ratio of the average mass of the atom to the unified atomic mass unit (symbol: u) or dalton (symbol: Da), which is defined as one twelfth of the mass of a carbon-12 atom in its ground state."),
                color: "rgba(8,212,170,0.75)",
                color_calc: function(e) {
                    if (!e)
                        return A;
                    let t = e / 500;
                    return "linear-gradient(170deg, rgba(8,212,170," + t + "), rgba(8,212,170," + (t + t / 4) + "))"
                },
                hash: "#section=Atomic-Weight",
                subPage: "atomic-mass"
            },
            ElectronConfiguration: {
                name: "Electron Configuration",
                isLong: !0,
                color_prop: "GroupBlock",
                color_calc: function(e, t) {
                    return e.match(/alkali/i) || t < 3 ? "linear-gradient(110deg, rgba(255,0,0,0.2),rgba(255,0,0,0.3))" : e.match(/^transition/i) ? "linear-gradient(110deg, rgba(255,255,0,0.2),rgba(255,255,0,0.3))" : e.match(/actinide|lanthanide/i) ? "linear-gradient(110deg, rgba(0,128,255,0.2),rgba(0,128,255,0.3))" : "linear-gradient(110deg, rgba(0,255,0,0.2),rgba(0,255,0,0.3))"
                },
                hash: "#section=Electron-Configuration"
            },
            Electronegativity: {
                name: "Electronegativity (Pauling Scale)",
                description: n().createElement("div", null, "Electronegativity is a measure of the tendency of an atom to attract a bonding pair of electrons."),
                color: "rgba(8,212,170,0.75)",
                color_calc: function(e) {
                    if (!e)
                        return A;
                    let t = e / 5;
                    return "linear-gradient(170deg, rgba(8,212,170," + t + "), rgba(8,212,170," + (t + t / 5) + "))"
                },
                hash: "#section=Electronegativity",
                subPage: "electronegativity"
            },
            AtomicRadius: {
                name: "Atomic Radius (van der Waals)",
                unit: "pm",
                description: n().createElement("div", null, "The atomic radius of a chemical element is a measure of the size of its atom, usually, the distance from the center of the nucleus to the outermost isolated electron. Because an atom does not have a discrete boundary, there are various non-equivalent definitions of atomic radius, such as Van der Waals radius and covalent radius."),
                color: "rgba(8,212,170,0.75)",
                color_calc: function(e) {
                    if (!e)
                        return A;
                    let t = e / 10 * 1.5;
                    return "radial-gradient(circle, rgba(8,212,170,0.25), rgba(8,212,170,0.4) " + t + "%, rgba(241,241,241,0.1) " + (t + t / 5) + "%)"
                },
                hash: "#section=Atomic-Radius",
                subPage: "atomic-radius"
            },
            IonizationEnergy: {
                name: "Ionization Energy",
                unit: "eV",
                description: n().createElement("div", null, "Ionization energy, also called ionization potential, is the amount of energy required to remove an electron from an isolated atom or molecule."),
                color: "rgba(8,212,170,0.75)",
                color_calc: function(e) {
                    if (!e)
                        return A;
                    let t = e / 30;
                    return "linear-gradient(185deg, rgba(8,212,170," + t + "), rgba(8,212,170," + (t + t / 10) + "))"
                },
                hash: "#section=Ionization-Energy",
                subPage: "ionization-energy"
            },
            ElectronAffinity: {
                name: "Electron Affinity",
                unit: "eV",
                description: n().createElement("div", null, "Electron affinity refers to the energy released when an additional electron is attached to a neutral atom to form a singly charged negative ion. Alternatively, it can also be defined as the energy required to detach an electron from the singly charged negative ion."),
                color: "rgba(8,212,170,0.75)",
                color_calc: function(e) {
                    if (!e)
                        return A;
                    let t = e / 6;
                    return "linear-gradient(185deg, rgba(8,212,170," + t + "), rgba(8,212,170," + (t + t / 5) + "))"
                },
                hash: "#section=Electron-Affinity",
                subPage: "electron-affinity"
            },
            OxidationStates: {
                name: "Oxidation States",
                isLong: !0,
                color_calc: function(e) {
                    if (!e)
                        return A;
                    let t = [];
                    try {
                        const a = e.split(/,\s*/);
                        for (let e = 0; e < a.length; e++) {
                            let n = parseInt(a[e]);
                            n > 0 ? t.push("rgba(255,0,0," + (n / 20 + .1) + ")") : 0 === n ? t.push("rgba(255,255,255,0)") : n < 0 && t.push("rgba(0,255,255," + (Math.abs(n / 20) + .2) + ")")
                        }
                        1 === t.length && t.push(t[0])
                    } catch (e) {}
                    return "linear-gradient(90deg, " + t.join(",") + ")"
                },
                hash: "#section=Oxidation-States"
            },
            MeltingPoint: {
                name: "Melting Point",
                unit: "K",
                description: n().createElement("div", null, "The melting point is the temperature at which a substance changes state from solid to liquid at atmospheric pressure. When considered as the temperature of the reverse change (from liquid to solid), it is referred to as the freezing point."),
                color: "rgba(80,255,255,0.75)",
                color_calc: function(e) {
                    if (!e)
                        return A;
                    let t = e && "0" !== e ? Math.max(.01 + e / 7e3, e / 7e3 * 1.1) : 0;
                    return "linear-gradient(170deg, rgba(0,255,255," + t + "), rgba(0,255,255," + (t + t / 5) + "))"
                },
                hash: "#section=Melting-Point",
                subPage: "melting-point"
            },
            BoilingPoint: {
                name: "Boiling Point",
                unit: "K",
                description: n().createElement("div", null, "The boiling point of a substance is the temperature at which it can change its state from a liquid to a gas."),
                color: "rgba(255,0,0,0.75)",
                color_calc: function(e) {
                    if (!e)
                        return A;
                    let t = e && "0" !== e ? Math.max(.005 + e / 2e4, e / 2e4 * 2) : 0;
                    return "linear-gradient(170deg, rgba(255,0,0," + t + "), rgba(255,0,0," + (t + t / 5) + "))"
                },
                hash: "#section=Boiling-Point",
                subPage: "boiling-point"
            },
            Density: {
                name: "Density",
                unit: "g/cm³",
                description: n().createElement("div", null, "Density is the mass of a unit volume of the element and is commonly expressed in units of g/cm", n().createElement("sup", null, "3"), "."),
                color: "rgba(8,212,170,0.75)",
                color_calc: function(e) {
                    if (!e)
                        return A;
                    let t = e && "0" !== e ? Math.max(.05 + e / 100, e / 100 * 5) : 0;
                    return "linear-gradient(170deg, rgba(8,212,170," + t + "), rgba(8,212,170," + (t + t / 5) + "))"
                },
                hash: "#section=Density",
                subPage: "density"
            },
            GroupBlock: {
                name: "Chemical Group Block",
                isLong: !0,
                color: {
                    "alkali metal": "linear-gradient(110deg, rgba(255,0,0,0.2), rgba(255,0,0,0.25))",
                    "alkaline earth metal": "linear-gradient(110deg, rgba(64,64,255,0.2), rgba(64,64,255,0.25))",
                    "transition metal": "linear-gradient(110deg, rgba(0,128,255,0.2), rgba(0,128,255,0.3))",
                    "post-transition metal": "linear-gradient(110deg, rgba(0,255,0,0.2), rgba(0,255,0,0.3))",
                    metalloid: "linear-gradient(110deg, rgba(140,190,0,0.2), rgba(140,190,0,0.3))",
                    nonmetal: "linear-gradient(110deg, rgba(255,255,0,0.2), rgba(255,255,0,0.3))",
                    halogen: "linear-gradient(110deg, rgba(255,255,0,0.2), rgba(255,255,0,0.3))",
                    "noble gas": "linear-gradient(110deg, rgba(255,152,0,0.2), rgba(255,152,0,0.3))",
                    lanthanide: "linear-gradient(110deg, rgba(0,255,255,0.25), rgba(0,255,255,0.35))",
                    actinide: "linear-gradient(110deg, rgba(64,255,192,0.25), rgba(64,255,192,0.35))"
                },
                hash: "#section=Physical-Description",
                subPage: "atomic-mass",
                subPageProp: "AtomicMass"
            },
            StandardState: {
                name: "Standard State",
                translate: {
                    "expected to be a solid": "solid (expected)",
                    "expected to be a gas": "gas (expected)"
                },
                color: {
                    solid: "linear-gradient(110deg, rgba(214,215,217,0.3),rgba(214,215,217,0.4))",
                    liquid: "linear-gradient(110deg, rgba(255,0,0,0.2), rgba(255,0,0,0.3))",
                    gas: "linear-gradient(110deg, rgba(0,255,255,0.2), rgba(0,255,255,0.3))",
                    "solid (expected)": "linear-gradient(110deg, rgba(214,215,217,0.05), rgba(214,215,217,0.15))",
                    "gas (expected)": "linear-gradient(110deg, rgba(0,255,255,0.05), rgba(0,255,255,0.15))"
                },
                hash: "#section=Physical-Description"
            },
            YearDiscovered: {
                name: "Year Discovered",
                color_calc: function(e) {
                    return e ? "ancient" === e ? "rgba(8,212,170,0.85)" : e < 1700 ? "rgba(8,212,170,0.55)" : e < 1800 ? "rgba(8,212,170,0.45)" : e < 1900 ? "rgba(8,212,170,0.35)" : e < 2e3 ? "rgba(8,212,170,0.15)" : "rgba(8,212,170,0.05)" : A
                },
                hash: "#section=History"
            }
        };
        function M(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , a = "";
            try {
                let n = L[e]
                  , r = n.name
                  , l = n.unit;
                r && (a = `${r || e}${l && t ? `, ${l}` : ""}`,
                t || (a = a.replace(" (Pauling Scale)", "").replace(" (van der Waals)", "")))
            } catch (e) {}
            return a
        }
        const T = () => n().createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-auto w-12 max-w-full text-gray-600 hover:text-gray-700 dark:text-gray-200 dark:hover:text-blue-100 fill-current",
            viewBox: "0 0 600 600",
            preserveAspectRatio: "xMidYMid meet"
        }, n().createElement("g", null, n().createElement("path", {
            className: "stroke-current text-theme",
            fill: "none",
            strokeWidth: "40",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M301.4,35.1 L523.6,173.0 L522.8,434.5 L299.8,558.1 L77.6,420.2 L78.4,158.7 L301.4,35.1 Z"
        }), n().createElement("path", {
            id: "C",
            d: "M374.3,246.2 L438.5,246.2 C436.5,228.4 431.7,212.5 424.1,198.7 C416.5,184.9 406.9,173.3 395.2,163.9 C383.5,154.6 370.3,147.5 355.5,142.6 C340.7,137.7 325.0,135.2 308.4,135.2 C285.3,135.2 264.5,139.4 246.1,147.7 C227.6,156.1 212.1,167.6 199.4,182.3 C186.7,197.0 177.0,214.2 170.3,233.9 C163.5,253.7 160.1,275.1 160.1,298.1 C160.1,320.6 163.5,341.5 170.3,361.0 C177.0,380.4 186.7,397.3 199.4,411.7 C212.1,426.1 227.6,437.4 246.1,445.6 C264.5,453.8 285.3,457.9 308.4,457.9 C327.0,457.9 344.0,455.1 359.5,449.3 C375.0,443.5 388.5,435.2 400.0,424.2 C411.6,413.3 420.9,400.1 427.9,384.5 C435.0,368.9 439.3,351.5 441.0,332.2 L376.8,332.2 C374.3,353.0 367.3,369.7 355.9,382.3 C344.5,395.0 328.7,401.3 308.4,401.3 C293.5,401.3 280.8,398.4 270.4,392.5 C260.0,386.6 251.5,378.7 245.0,368.9 C238.6,359.2 233.8,348.1 230.9,335.9 C227.9,323.7 226.4,311.1 226.4,298.1 C226.4,284.6 227.9,271.5 230.9,258.8 C233.8,246.1 238.6,234.8 245.0,224.9 C251.5,214.9 260.0,207.0 270.4,201.1 C280.8,195.2 293.5,192.2 308.4,192.2 C316.6,192.2 324.4,193.6 331.8,196.3 C339.3,199.1 346.0,202.9 351.9,207.8 C357.8,212.7 362.7,218.4 366.7,224.9 C370.6,231.3 373.2,238.5 374.3,246.2 Z"
        })))
          , P = e => {
            let {isHome: t=!1} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: `inline-block h-auto w-48 ${t ? "lg:w-56 text-white hover:text-blue-100" : "text-gray-600 hover:text-gray-700"} max-w-full  dark:text-gray-200 dark:hover:text-blue-100 fill-current`,
                viewBox: "0 0 685 200",
                preserveAspectRatio: "xMidYMid meet"
            }, n().createElement("g", null, n().createElement("g", null, n().createElement("path", {
                className: "stroke-current text-theme",
                fill: "none",
                strokeWidth: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M329.5,19.5 L396.8,61.3 L396.6,140.5 L329.0,178.0 L261.7,136.2 L261.9,56.9 L329.5,19.5 Z"
            }), n().createElement("path", {
                d: "M351.6,83.5 L371.0,83.5 C370.4,78.1 369.0,73.3 366.7,69.1 C364.4,64.9 361.5,61.4 357.9,58.5 C354.4,55.7 350.4,53.5 345.9,52.1 C341.4,50.6 336.7,49.8 331.6,49.8 C324.6,49.8 318.3,51.1 312.7,53.6 C307.2,56.2 302.4,59.6 298.6,64.1 C294.8,68.5 291.8,73.8 289.8,79.7 C287.7,85.7 286.7,92.2 286.7,99.2 C286.7,106.0 287.7,112.3 289.8,118.2 C291.8,124.1 294.8,129.3 298.6,133.6 C302.4,138.0 307.2,141.4 312.7,143.9 C318.3,146.4 324.6,147.6 331.6,147.6 C337.3,147.6 342.4,146.8 347.1,145.0 C351.8,143.3 355.9,140.7 359.4,137.4 C362.9,134.1 365.7,130.1 367.8,125.4 C370.0,120.7 371.3,115.4 371.8,109.5 L352.4,109.5 C351.6,115.8 349.5,120.9 346.0,124.7 C342.6,128.6 337.8,130.5 331.6,130.5 C327.1,130.5 323.3,129.6 320.1,127.8 C316.9,126.0 314.4,123.6 312.4,120.7 C310.5,117.7 309.0,114.3 308.1,110.6 C307.2,106.9 306.8,103.1 306.8,99.2 C306.8,95.1 307.2,91.1 308.1,87.3 C309.0,83.4 310.5,80.0 312.4,77.0 C314.4,74.0 316.9,71.6 320.1,69.8 C323.3,68.0 327.1,67.1 331.6,67.1 C334.1,67.1 336.5,67.5 338.7,68.4 C341.0,69.2 343.0,70.3 344.8,71.8 C346.6,73.3 348.1,75.0 349.3,77.0 C350.5,79.0 351.2,81.1 351.6,83.5 Z"
            })), n().createElement("g", null, n().createElement("path", {
                d: "M34.9,95.2 L34.9,67.8 L50.5,67.8 C52.8,67.8 55.1,68.0 57.2,68.3 C59.3,68.7 61.2,69.3 62.8,70.3 C64.4,71.3 65.7,72.7 66.7,74.5 C67.7,76.3 68.2,78.6 68.2,81.5 C68.2,84.4 67.7,86.8 66.7,88.6 C65.7,90.3 64.4,91.7 62.8,92.7 C61.2,93.7 59.3,94.4 57.2,94.7 C55.1,95.0 52.8,95.2 50.5,95.2 L34.9,95.2 ZM14.8,52.2 L14.8,143.6 L34.9,143.6 L34.9,110.8 L56.0,110.8 C61.7,110.8 66.6,110.0 70.6,108.3 C74.6,106.7 77.9,104.5 80.4,101.7 C82.9,99.0 84.8,95.9 85.9,92.3 C87.1,88.8 87.6,85.2 87.6,81.5 C87.6,77.8 87.1,74.1 85.9,70.6 C84.8,67.1 82.9,64.0 80.4,61.3 C77.9,58.6 74.6,56.4 70.6,54.7 C66.6,53.0 61.7,52.2 56.0,52.2 L14.8,52.2 Z"
            }), n().createElement("path", {
                d: "M160.4,143.6 L160.4,77.4 L142.2,77.4 L142.2,112.1 C142.2,118.8 141.1,123.7 138.8,126.6 C136.6,129.6 133.0,131.0 128.1,131.0 C123.7,131.0 120.7,129.7 119.0,127.0 C117.3,124.3 116.4,120.3 116.4,114.8 L116.4,77.4 L98.3,77.4 L98.3,118.1 C98.3,122.2 98.6,125.9 99.4,129.3 C100.1,132.7 101.3,135.5 103.1,137.9 C104.9,140.2 107.4,142.1 110.5,143.3 C113.6,144.6 117.6,145.3 122.5,145.3 C126.3,145.3 130.1,144.4 133.7,142.7 C137.4,141.0 140.4,138.2 142.7,134.4 L143.1,134.4 L143.1,143.6 L160.4,143.6 Z"
            }), n().createElement("path", {
                d: "M222.7,110.6 C222.7,113.3 222.4,115.9 221.8,118.5 C221.2,121.1 220.3,123.3 219.0,125.3 C217.7,127.2 216.1,128.8 214.2,130.0 C212.3,131.1 209.9,131.7 207.2,131.7 C204.6,131.7 202.3,131.1 200.3,130.0 C198.3,128.8 196.7,127.2 195.4,125.3 C194.1,123.3 193.2,121.1 192.6,118.5 C192.0,115.9 191.7,113.3 191.7,110.6 C191.7,107.8 192.0,105.1 192.6,102.5 C193.2,99.9 194.1,97.7 195.4,95.7 C196.7,93.8 198.3,92.2 200.3,91.0 C202.3,89.9 204.6,89.3 207.2,89.3 C209.9,89.3 212.3,89.9 214.2,91.0 C216.1,92.2 217.7,93.8 219.0,95.7 C220.3,97.7 221.2,99.9 221.8,102.5 C222.4,105.1 222.7,107.8 222.7,110.6 ZM174.2,52.2 L174.2,143.6 L191.5,143.6 L191.5,135.1 L191.7,135.1 C193.7,138.8 196.6,141.4 200.4,143.0 C204.3,144.5 208.6,145.3 213.5,145.3 C216.8,145.3 220.1,144.6 223.3,143.2 C226.6,141.8 229.5,139.8 232.1,136.9 C234.7,134.1 236.8,130.5 238.4,126.1 C240.1,121.7 240.9,116.5 240.9,110.4 C240.9,104.4 240.1,99.2 238.4,94.8 C236.8,90.4 234.7,86.8 232.1,83.9 C229.5,81.1 226.6,79.0 223.3,77.7 C220.1,76.3 216.8,75.6 213.5,75.6 C209.4,75.6 205.4,76.4 201.6,78.0 C197.8,79.6 194.8,82.1 192.6,85.5 L192.4,85.5 L192.4,52.2 L174.2,52.2 Z"
            })), n().createElement("g", null, n().createElement("path", {
                d: "M419.8,52.2 L419.8,143.6 L438.0,143.6 L438.0,108.9 C438.0,102.2 439.1,97.3 441.3,94.4 C443.5,91.4 447.1,90.0 452.1,90.0 C456.4,90.0 459.5,91.3 461.2,94.0 C462.9,96.7 463.7,100.8 463.7,106.2 L463.7,143.6 L481.9,143.6 L481.9,102.9 C481.9,98.8 481.5,95.1 480.8,91.7 C480.1,88.3 478.8,85.5 477.0,83.1 C475.2,80.8 472.8,78.9 469.7,77.6 C466.6,76.3 462.6,75.6 457.7,75.6 C454.3,75.6 450.8,76.5 447.2,78.2 C443.6,80.0 440.7,82.8 438.4,86.6 L438.0,86.6 L438.0,52.2 L419.8,52.2 Z"
            }), n().createElement("path", {
                d: "M540.3,103.4 L510.7,103.4 C510.8,102.1 511.1,100.7 511.5,99.0 C512.0,97.4 512.8,95.9 514.0,94.4 C515.1,93.0 516.7,91.8 518.6,90.8 C520.5,89.8 522.9,89.3 525.8,89.3 C530.2,89.3 533.6,90.5 535.7,92.9 C537.9,95.3 539.4,98.8 540.3,103.4 ZM510.7,114.9 L558.4,114.9 C558.8,109.8 558.4,104.9 557.2,100.2 C556.0,95.5 554.0,91.3 551.3,87.7 C548.7,84.0 545.2,81.1 541.0,78.9 C536.9,76.7 532.0,75.6 526.3,75.6 C521.3,75.6 516.7,76.5 512.6,78.3 C508.4,80.1 504.9,82.6 501.9,85.7 C498.9,88.8 496.6,92.5 495.0,96.7 C493.3,101.0 492.5,105.6 492.5,110.6 C492.5,115.7 493.3,120.4 494.9,124.6 C496.5,128.9 498.7,132.6 501.6,135.7 C504.5,138.7 508.1,141.1 512.2,142.8 C516.4,144.4 521.1,145.3 526.3,145.3 C533.8,145.3 540.2,143.5 545.5,140.1 C550.8,136.7 554.7,131.0 557.3,123.1 L541.3,123.1 C540.7,125.2 539.1,127.1 536.4,128.9 C533.8,130.8 530.6,131.7 527.0,131.7 C521.8,131.7 517.9,130.4 515.2,127.7 C512.5,125.1 511.0,120.8 510.7,114.9 Z"
            }), n().createElement("path", {
                d: "M569.7,77.4 L569.7,143.6 L587.9,143.6 L587.9,105.2 C587.9,101.9 588.4,99.3 589.3,97.3 C590.2,95.3 591.4,93.8 592.7,92.7 C594.0,91.6 595.4,90.9 596.8,90.5 C598.2,90.2 599.3,90.0 600.2,90.0 C603.1,90.0 605.3,90.4 606.8,91.4 C608.3,92.4 609.3,93.7 610.0,95.3 C610.6,97.0 611.0,98.7 611.1,100.6 C611.1,102.6 611.2,104.5 611.2,106.5 L611.2,143.6 L629.4,143.6 L629.4,106.7 C629.4,104.7 629.5,102.7 629.8,100.6 C630.1,98.6 630.7,96.8 631.6,95.3 C632.5,93.7 633.7,92.4 635.3,91.4 C636.9,90.4 639.0,90.0 641.5,90.0 C644.1,90.0 646.1,90.4 647.6,91.2 C649.1,92.1 650.2,93.2 651.0,94.7 C651.8,96.1 652.2,97.9 652.4,99.8 C652.6,101.8 652.7,103.9 652.7,106.1 L652.7,143.6 L670.8,143.6 L670.8,99.3 C670.8,95.0 670.2,91.4 669.0,88.4 C667.8,85.3 666.2,82.9 664.0,81.0 C661.9,79.1 659.4,77.8 656.4,76.9 C653.4,76.0 650.1,75.6 646.6,75.6 C642.0,75.6 638.0,76.7 634.7,79.0 C631.3,81.2 628.6,83.7 626.7,86.6 C624.9,82.5 622.3,79.7 618.8,78.1 C615.3,76.4 611.5,75.6 607.3,75.6 C603.0,75.6 599.1,76.6 595.8,78.4 C592.4,80.3 589.5,83.0 587.1,86.4 L586.9,86.4 L586.9,77.4 L569.7,77.4 Z"
            }))))
        }
          , O = () => ((0,
        t.useEffect)(( () => {
            const e = document.createElement("script");
            return e.src = `https://${r ? "dev" : l ? "test" : "www"}.ncbi.nlm.nih.gov/core/alerts/alerts.js`,
            e.onload = () => {
                "function" == typeof galert && galert(["noscript"])
            }
            ,
            document.head.appendChild(e),
            () => {
                document.head.removeChild(e)
            }
        }
        ), []),
        null)
          , R = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, n().createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M19 9l-7 7-7-7"
            }))
        }
        ;
        R.defaultProps = {
            className: "size-6 inline-block"
        };
        const I = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, n().createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M5 15l7-7 7 7"
            }))
        }
        ;
        I.defaultProps = {
            className: "size-6 inline-block"
        };
        const j = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                viewBox: "0 0 64 64"
            }, n().createElement("path", {
                fill: "#2378C3",
                fillRule: "evenodd",
                d: "M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0zm0 1.208C14.994 1.208 1.208 14.994 1.208 32S14.994 62.792 32 62.792 62.792 49.006 62.792 32 49.006 1.208 32 1.208zm10.59 38.858a.857.857 0 0 1 .882.822v1.642H18.886v-1.642a.857.857 0 0 1 .882-.822H42.59zM25.443 27.774v9.829h1.642v-9.83h3.273v9.83H32v-9.83h3.272v9.83h1.643v-9.83h3.272v9.83h.76a.857.857 0 0 1 .882.821v.821h-21.3v-.809a.857.857 0 0 1 .88-.82h.762v-9.842h3.272zm5.736-8.188l12.293 4.915v1.642h-1.63a.857.857 0 0 1-.882.822H21.41a.857.857 0 0 1-.882-.822h-1.642v-1.642l12.293-4.915z"
            }))
        }
        ;
        j.defaultProps = {
            className: "size-10 inline-block"
        };
        const D = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                viewBox: "0 0 64 64"
            }, n().createElement("path", {
                fill: "#719F2A",
                fillRule: "evenodd",
                d: "M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0zm0 1.208C14.994 1.208 1.208 14.994 1.208 32S14.994 62.792 32 62.792 62.792 49.006 62.792 32 49.006 1.208 32 1.208zm0 18.886a7.245 7.245 0 0 1 7.245 7.245v3.103h.52c.86 0 1.557.698 1.557 1.558v9.322c0 .86-.697 1.558-1.557 1.558h-15.53c-.86 0-1.557-.697-1.557-1.558V32c0-.86.697-1.558 1.557-1.558h.52V27.34A7.245 7.245 0 0 1 32 20.094zm0 3.103a4.142 4.142 0 0 0-4.142 4.142v3.103h8.284V27.34A4.142 4.142 0 0 0 32 23.197z"
            }))
        }
        ;
        D.defaultProps = {
            className: "size-10 inline-block"
        };
        const $ = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, n().createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M6 18L18 6M6 6l12 12"
            }))
        }
        ;
        $.defaultProps = {
            className: "size-6 inline-block"
        };
        const z = () => {
            const e = !N(`(min-width: ${y})`)
              , [a,r] = (0,
            t.useState)(!1);
            return n().createElement("div", {
                className: " print:hidden bg-gray-100 dark:bg-gray-900 py-2"
            }, n().createElement("div", {
                className: "main-width"
            }, e ? n().createElement("button", {
                className: "pc-bg-us-flag flex flex-wrap w-full items-center gap-1 sm:gap-2 text-xs leading-none",
                "aria-controls": "gov-banner",
                "aria-expanded": a,
                onClick: () => {
                    r(!a)
                }
            }, n().createElement("div", {
                className: "flex-1 text-left font-normal leading-none"
            }, n().createElement("p", null, "An official website of the United States government"), !a && n().createElement("p", {
                className: "regular-link underline"
            }, "Here is how you know ", n().createElement(R, {
                className: "size-3 inline-block ml-px"
            }))), a && n().createElement($, null)) : n().createElement("div", {
                className: "pc-bg-us-flag flex flex-wrap items-center gap-1 sm:gap-2 text-xs leading-none"
            }, n().createElement("p", null, "An official website of the United States government"), n().createElement("button", {
                className: "regular-link underline whitespace-nowrap",
                "aria-controls": "gov-banner",
                "aria-expanded": a,
                onClick: () => {
                    r(!a)
                }
            }, "Here is how you know", a ? n().createElement(I, {
                className: "size-3 inline-block ml-px"
            }) : n().createElement(R, {
                className: "size-3 inline-block ml-px"
            }))), n().createElement("div", {
                id: "gov-banner",
                className: a ? "sm:grid sm:grid-flow-col sm:grid-cols-2 sm:gap-4 py-4" : "hidden",
                hidden: !a,
                "aria-hidden": !a
            }, n().createElement("div", {
                className: "py-2 flex flex-nowrap gap-2"
            }, n().createElement(j, {
                className: "size-10 inline-block flex-none"
            }), n().createElement("div", null, n().createElement("strong", null, "The .gov means it’s official."), n().createElement("p", null, "Federal government websites often end in .gov or .mil. Before sharing sensitive information, make sure you’re on a federal government site."))), n().createElement("div", {
                className: "py-2 flex flex-nowrap gap-2"
            }, n().createElement(D, {
                className: "size-10 inline-block flex-none"
            }), n().createElement("div", null, n().createElement("strong", null, "The site is secure."), n().createElement("p", null, "The ", n().createElement("strong", null, "https://"), " ensures that you are connecting to the official website and that any information you provide is encrypted and transmitted securely."))))))
        }
          , H = () => n().createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-10 w-auto max-w-full",
            viewBox: "0 0 2039.55 243.26",
            fill: "currentColor"
        }, n().createElement("g", null, n().createElement("path", {
            d: "M266.77,67.24V176H248.18v-49.2H199.53V176H180.4V67.24H199v43.19h48.66V67.24ZM161.26,176H142.68V67.24h18.58Zm-37.17,0H104.41L55.76,96.21h-.55V176h-18V67.24H56.85l49.2,79.81h.55V67.24h18V176Zm208.83-54.66L266.77,0H21.87A22.05,22.05,0,0,0,0,22.41V220.85a22.05,22.05,0,0,0,21.87,22.41H266.22Z"
        }), n().createElement("path", {
            d: "M283.17,242.72l66.69-121.36L283.17,0h16.4c9.29,0,20.23,6.56,24.6,14.76l58.49,106.6L324.17,228c-4.37,8.2-15.31,14.76-24.6,14.76Z"
        }), n().createElement("path", {
            d: "M428.15,31.14h16.5L485.4,96.89h.25V31.14h14.88v89.25H484L443.4,54.76H443v65.63H428.15Z"
        }), n().createElement("path", {
            d: "M571.15,106a7.54,7.54,0,0,0,.69,3.75,2.9,2.9,0,0,0,2.69,1.13H576a9.16,9.16,0,0,0,2-.25v9.87c-.5.17-1.15.36-1.94.57s-1.61.39-2.44.56-1.67.29-2.5.37a20,20,0,0,1-2.12.13,13.78,13.78,0,0,1-7.25-1.75q-2.88-1.76-3.75-6.13a25.29,25.29,0,0,1-10.44,6,41.17,41.17,0,0,1-11.94,1.88,29.25,29.25,0,0,1-8.37-1.19,22,22,0,0,1-7.07-3.5,16.81,16.81,0,0,1-4.87-5.87,18.11,18.11,0,0,1-1.81-8.32,19.18,19.18,0,0,1,2.18-9.75,16.27,16.27,0,0,1,5.75-5.87,25.79,25.79,0,0,1,8-3.06,90.4,90.4,0,0,1,8.94-1.44,70.49,70.49,0,0,1,7.38-1.06A34.66,34.66,0,0,0,552,81a9.49,9.49,0,0,0,4.25-2.31A6.37,6.37,0,0,0,557.78,74a7.28,7.28,0,0,0-1.32-4.5,8.78,8.78,0,0,0-3.25-2.68,13.68,13.68,0,0,0-4.31-1.25,34.25,34.25,0,0,0-4.5-.32,17.93,17.93,0,0,0-9.87,2.5,9.74,9.74,0,0,0-4.38,7.75H515.9a21.45,21.45,0,0,1,3-10.37,20.76,20.76,0,0,1,6.69-6.63,27.57,27.57,0,0,1,9.19-3.5,55.13,55.13,0,0,1,10.5-1,44.65,44.65,0,0,1,9.37,1A26.74,26.74,0,0,1,563,58.26a18,18,0,0,1,5.94,5.82,15.93,15.93,0,0,1,2.25,8.68ZM556.9,88a17.36,17.36,0,0,1-8,2.57c-3.17.29-6.33.73-9.5,1.31A30,30,0,0,0,535,93a12.93,12.93,0,0,0-3.75,1.88A8.22,8.22,0,0,0,528.71,98a10.78,10.78,0,0,0-.93,4.69,6,6,0,0,0,1.37,4,10,10,0,0,0,3.31,2.56,15.17,15.17,0,0,0,4.25,1.31,26.44,26.44,0,0,0,4.19.38,23.14,23.14,0,0,0,5.13-.63,16.81,16.81,0,0,0,5.18-2.12,13.72,13.72,0,0,0,4.07-3.81,9.69,9.69,0,0,0,1.62-5.69Z"
        }), n().createElement("path", {
            d: "M580,55.76h10.75V36.39H605V55.76H617.9V66.39H605v34.5a35.69,35.69,0,0,0,.18,3.87,6.71,6.71,0,0,0,.88,2.75,4.15,4.15,0,0,0,2.06,1.69,10.07,10.07,0,0,0,3.75.56q1.5,0,3-.06a14.79,14.79,0,0,0,3-.44v11l-4.62.5a41.2,41.2,0,0,1-4.63.25,31.47,31.47,0,0,1-9.06-1.06,12.17,12.17,0,0,1-5.38-3.12,10.85,10.85,0,0,1-2.62-5.19,38.6,38.6,0,0,1-.81-7.13V66.39H580Z"
        }), n().createElement("path", {
            d: "M628.52,31.14h14.25v13.5H628.52Zm0,24.62h14.25v64.63H628.52Z"
        }), n().createElement("path", {
            d: "M687.9,122.14a35.31,35.31,0,0,1-13.81-2.56,29.4,29.4,0,0,1-10.25-7.07,30.09,30.09,0,0,1-6.38-10.75,43.85,43.85,0,0,1,0-27.37,30.09,30.09,0,0,1,6.38-10.75,29.25,29.25,0,0,1,10.25-7.06,38.39,38.39,0,0,1,27.62,0A29.34,29.34,0,0,1,712,63.64a30.24,30.24,0,0,1,6.38,10.75,44,44,0,0,1,0,27.37A30.24,30.24,0,0,1,712,112.51a29.5,29.5,0,0,1-10.25,7.07A35.31,35.31,0,0,1,687.9,122.14Zm0-11.25a16.37,16.37,0,0,0,8.25-2,17.35,17.35,0,0,0,5.75-5.25,23,23,0,0,0,3.31-7.31,32.91,32.91,0,0,0,0-16.57,22.18,22.18,0,0,0-3.31-7.31,17.83,17.83,0,0,0-5.75-5.19,18,18,0,0,0-16.5,0,17.83,17.83,0,0,0-5.75,5.19,22,22,0,0,0-3.31,7.31,32.61,32.61,0,0,0,0,16.57,22.83,22.83,0,0,0,3.31,7.31,17.35,17.35,0,0,0,5.75,5.25A16.37,16.37,0,0,0,687.9,110.89Z"
        }), n().createElement("path", {
            d: "M732.4,55.76h13.5v9.5l.25.25a23.83,23.83,0,0,1,8.5-8.43A22.56,22.56,0,0,1,766.27,54q10.62,0,16.75,5.5T789.15,76v44.38H774.9V79.76q-.25-7.62-3.25-11.06t-9.38-3.44a15.41,15.41,0,0,0-6.5,1.32,14,14,0,0,0-4.87,3.62,17,17,0,0,0-3.13,5.44,19.38,19.38,0,0,0-1.12,6.62v38.13H732.4Z"
        }), n().createElement("path", {
            d: "M858.27,106a7.54,7.54,0,0,0,.69,3.75,2.9,2.9,0,0,0,2.69,1.13h1.5a9.16,9.16,0,0,0,2-.25v9.87c-.5.17-1.15.36-1.94.57s-1.61.39-2.44.56-1.67.29-2.5.37a20,20,0,0,1-2.12.13,13.78,13.78,0,0,1-7.25-1.75q-2.88-1.76-3.75-6.13a25.29,25.29,0,0,1-10.44,6,41.17,41.17,0,0,1-11.94,1.88A29.25,29.25,0,0,1,814.4,121a22.07,22.07,0,0,1-7.07-3.5,16.81,16.81,0,0,1-4.87-5.87,18.11,18.11,0,0,1-1.81-8.32,19.29,19.29,0,0,1,2.18-9.75,16.27,16.27,0,0,1,5.75-5.87,25.89,25.89,0,0,1,8-3.06,90.4,90.4,0,0,1,8.94-1.44,70.49,70.49,0,0,1,7.38-1.06A34.66,34.66,0,0,0,839.08,81a9.43,9.43,0,0,0,4.25-2.31A6.33,6.33,0,0,0,844.9,74a7.28,7.28,0,0,0-1.32-4.5,8.7,8.7,0,0,0-3.25-2.68A13.68,13.68,0,0,0,836,65.58a34.25,34.25,0,0,0-4.5-.32,17.93,17.93,0,0,0-9.87,2.5,9.74,9.74,0,0,0-4.38,7.75H803a21.45,21.45,0,0,1,3-10.37,20.76,20.76,0,0,1,6.69-6.63A27.57,27.57,0,0,1,821.9,55a55.13,55.13,0,0,1,10.5-1,44.65,44.65,0,0,1,9.37,1,26.65,26.65,0,0,1,8.31,3.25A18,18,0,0,1,856,64.08a15.93,15.93,0,0,1,2.25,8.68ZM844,88a17.36,17.36,0,0,1-8,2.57c-3.17.29-6.33.73-9.5,1.31A30,30,0,0,0,822.15,93a12.93,12.93,0,0,0-3.75,1.88A8.22,8.22,0,0,0,815.83,98a10.78,10.78,0,0,0-.93,4.69,6,6,0,0,0,1.37,4,10,10,0,0,0,3.31,2.56,15.27,15.27,0,0,0,4.25,1.31,26.55,26.55,0,0,0,4.19.38,23.14,23.14,0,0,0,5.13-.63,16.81,16.81,0,0,0,5.18-2.12,13.72,13.72,0,0,0,4.07-3.81A9.69,9.69,0,0,0,844,98.64Z"
        }), n().createElement("path", {
            d: "M874,31.14h14.25v89.25H874Z"
        }), n().createElement("path", {
            d: "M940.52,31.14h15.63v75.75h45.37v13.5h-61Z"
        }), n().createElement("path", {
            d: "M1010.65,31.14h14.25v13.5h-14.25Zm0,24.62h14.25v64.63h-14.25Z"
        }), n().createElement("path", {
            d: "M1040.77,31.14H1055v33h.25a19.61,19.61,0,0,1,3.63-4.25,22.61,22.61,0,0,1,4.68-3.19,24.84,24.84,0,0,1,5.38-2,23.25,23.25,0,0,1,5.56-.69,30.88,30.88,0,0,1,13.31,2.69,26.21,26.21,0,0,1,9.44,7.38A32,32,0,0,1,1102.9,75a46.38,46.38,0,0,1,1.87,13.38,47.08,47.08,0,0,1-1.69,12.62,32.79,32.79,0,0,1-5.12,10.82,25,25,0,0,1-21.06,10.31,50.47,50.47,0,0,1-6.57-.44A24.4,24.4,0,0,1,1064,120a21.45,21.45,0,0,1-5.44-3.25,15.76,15.76,0,0,1-4.06-5.25h-.25v8.88h-13.5Zm49.75,57a32.14,32.14,0,0,0-1.12-8.5,23,23,0,0,0-3.38-7.31,17.35,17.35,0,0,0-5.62-5.13,15.32,15.32,0,0,0-7.75-1.94q-9,0-13.57,6.25t-4.56,16.63a33.14,33.14,0,0,0,1.19,9.06,20.45,20.45,0,0,0,3.56,7.19,17.79,17.79,0,0,0,5.69,4.75,16.19,16.19,0,0,0,7.69,1.75,16,16,0,0,0,8.25-2,17.37,17.37,0,0,0,5.56-5.19,20.85,20.85,0,0,0,3.12-7.25A36.57,36.57,0,0,0,1090.52,88.14Z"
        }), n().createElement("path", {
            d: "M1116.77,55.76h13.37v12.5h.25a14.47,14.47,0,0,1,2.44-5.12,23.55,23.55,0,0,1,4.38-4.56,22.05,22.05,0,0,1,5.68-3.32,17.13,17.13,0,0,1,6.38-1.25,31.47,31.47,0,0,1,3.44.13l1.93.25V68.14c-1-.17-2-.31-3.06-.44a26.73,26.73,0,0,0-3.06-.19,16.32,16.32,0,0,0-6.81,1.44,15.76,15.76,0,0,0-5.57,4.25,21,21,0,0,0-3.75,6.94,30.24,30.24,0,0,0-1.37,9.5v30.75h-14.25Z"
        }), n().createElement("path", {
            d: "M1214.89,106a7.54,7.54,0,0,0,.69,3.75,2.9,2.9,0,0,0,2.69,1.13h1.5a9.16,9.16,0,0,0,2-.25v9.87c-.5.17-1.15.36-1.94.57s-1.6.39-2.44.56-1.66.29-2.5.37a20,20,0,0,1-2.12.13,13.78,13.78,0,0,1-7.25-1.75q-2.88-1.76-3.75-6.13a25.22,25.22,0,0,1-10.44,6,41.07,41.07,0,0,1-11.94,1.88A29.3,29.3,0,0,1,1171,121a21.91,21.91,0,0,1-7.06-3.5,16.73,16.73,0,0,1-4.88-5.87,18.11,18.11,0,0,1-1.81-8.32,19.18,19.18,0,0,1,2.19-9.75,16.11,16.11,0,0,1,5.75-5.87,25.69,25.69,0,0,1,8-3.06,89.73,89.73,0,0,1,8.93-1.44,70.87,70.87,0,0,1,7.38-1.06,34.94,34.94,0,0,0,6.19-1.07A9.54,9.54,0,0,0,1200,78.7a6.37,6.37,0,0,0,1.56-4.69,7.34,7.34,0,0,0-1.31-4.5,8.86,8.86,0,0,0-3.25-2.68,13.74,13.74,0,0,0-4.32-1.25,34.25,34.25,0,0,0-4.5-.32,17.93,17.93,0,0,0-9.87,2.5,9.76,9.76,0,0,0-4.38,7.75h-14.25a21.45,21.45,0,0,1,3-10.37,20.76,20.76,0,0,1,6.69-6.63,27.57,27.57,0,0,1,9.19-3.5,55.13,55.13,0,0,1,10.5-1,44.65,44.65,0,0,1,9.37,1,26.71,26.71,0,0,1,8.32,3.25,18,18,0,0,1,5.93,5.82,15.93,15.93,0,0,1,2.25,8.68Zm-14.25-18a17.32,17.32,0,0,1-8,2.57q-4.74.44-9.5,1.31a30,30,0,0,0-4.37,1.06,12.93,12.93,0,0,0-3.75,1.88,8.1,8.1,0,0,0-2.56,3.12,10.63,10.63,0,0,0-.94,4.69,6,6,0,0,0,1.37,4,9.94,9.94,0,0,0,3.32,2.56,15.07,15.07,0,0,0,4.25,1.31,26.33,26.33,0,0,0,4.18.38,23.07,23.07,0,0,0,5.13-.63,17,17,0,0,0,5.19-2.12,13.8,13.8,0,0,0,4.06-3.81,9.69,9.69,0,0,0,1.62-5.69Z"
        }), n().createElement("path", {
            d: "M1230.27,55.76h13.37v12.5h.25a14.47,14.47,0,0,1,2.44-5.12,23.55,23.55,0,0,1,4.38-4.56,22.05,22.05,0,0,1,5.68-3.32,17.13,17.13,0,0,1,6.38-1.25,31.6,31.6,0,0,1,3.44.13l1.93.25V68.14c-1-.17-2-.31-3.06-.44a26.73,26.73,0,0,0-3.06-.19,16.32,16.32,0,0,0-6.81,1.44,15.76,15.76,0,0,0-5.57,4.25,21,21,0,0,0-3.75,6.94,30.24,30.24,0,0,0-1.37,9.5v30.75h-14.25Z"
        }), n().createElement("path", {
            d: "M1267.14,55.76h15.63L1299.64,104h.25l16.38-48.25h14.87L1306,123.89c-1.17,2.91-2.31,5.71-3.44,8.37a30.11,30.11,0,0,1-4.12,7.07,17.89,17.89,0,0,1-6.07,4.87,20.62,20.62,0,0,1-9.25,1.81,64.81,64.81,0,0,1-9.87-.75v-12c1.16.17,2.29.36,3.37.57a18.63,18.63,0,0,0,3.38.31,11.51,11.51,0,0,0,4.12-.63,6.74,6.74,0,0,0,2.69-1.81,11.22,11.22,0,0,0,1.81-2.81,28.64,28.64,0,0,0,1.38-3.75l1.62-5Z"
        }), n().createElement("path", {
            d: "M1403.52,122.14a35.31,35.31,0,0,1-13.81-2.56,29.4,29.4,0,0,1-10.25-7.07,30.09,30.09,0,0,1-6.38-10.75,43.85,43.85,0,0,1,0-27.37,30.09,30.09,0,0,1,6.38-10.75,29.25,29.25,0,0,1,10.25-7.06,38.39,38.39,0,0,1,27.62,0,29.34,29.34,0,0,1,10.25,7.06A30.24,30.24,0,0,1,1434,74.39a44,44,0,0,1,0,27.37,30.24,30.24,0,0,1-6.38,10.75,29.5,29.5,0,0,1-10.25,7.07A35.35,35.35,0,0,1,1403.52,122.14Zm0-11.25a16.42,16.42,0,0,0,8.25-2,17.35,17.35,0,0,0,5.75-5.25,23,23,0,0,0,3.31-7.31,32.91,32.91,0,0,0,0-16.57,22.18,22.18,0,0,0-3.31-7.31,17.83,17.83,0,0,0-5.75-5.19,18,18,0,0,0-16.5,0,17.73,17.73,0,0,0-5.75,5.19,22,22,0,0,0-3.31,7.31,32.61,32.61,0,0,0,0,16.57,22.83,22.83,0,0,0,3.31,7.31,17.25,17.25,0,0,0,5.75,5.25A16.37,16.37,0,0,0,1403.52,110.89Z"
        }), n().createElement("path", {
            d: "M1441.64,55.76h10.63V50.39a27.59,27.59,0,0,1,1.5-9.94,14,14,0,0,1,4-5.87,13,13,0,0,1,5.68-2.75,31.62,31.62,0,0,1,6.69-.69,41,41,0,0,1,10,.87V43.14a19.9,19.9,0,0,0-2.94-.56,30.26,30.26,0,0,0-3.68-.19,8.73,8.73,0,0,0-4.94,1.37c-1.38.92-2.06,2.71-2.06,5.38v6.62h12.12V66.39h-12.12v54h-14.25v-54h-10.63Z"
        }), n().createElement("path", {
            d: "M1523.89,31.14h22L1570.51,101h.25l24-69.87h21.75v89.25h-14.87V51.51h-.25l-24.75,68.88h-12.88L1539,51.51h-.25v68.88h-14.87Z"
        }), n().createElement("path", {
            d: "M1644.39,91.76a24.75,24.75,0,0,0,1.06,7.25,17.8,17.8,0,0,0,3.19,6.13,15.45,15.45,0,0,0,5.37,4.19,17.77,17.77,0,0,0,7.75,1.56q6.26,0,10.07-2.69a15.89,15.89,0,0,0,5.68-8.06H1691a26.76,26.76,0,0,1-10.5,16.31,28.53,28.53,0,0,1-8.68,4.25,35,35,0,0,1-10.07,1.44,34.36,34.36,0,0,1-13.5-2.5,27.91,27.91,0,0,1-9.93-7,29.73,29.73,0,0,1-6.13-10.75,43.83,43.83,0,0,1-2.06-13.75,38.84,38.84,0,0,1,2.19-13.06,33.28,33.28,0,0,1,6.25-10.88A29.3,29.3,0,0,1,1661.39,54a29.07,29.07,0,0,1,13.69,3.19,30.14,30.14,0,0,1,10.06,8.44A34.3,34.3,0,0,1,1691,77.7a37,37,0,0,1,.94,14.06Zm33.25-9.37a23.13,23.13,0,0,0-1.44-6.5,17.23,17.23,0,0,0-3.25-5.44,16.07,16.07,0,0,0-5-3.75,14.72,14.72,0,0,0-6.56-1.44,17,17,0,0,0-6.81,1.32,15.36,15.36,0,0,0-5.25,3.62,17.84,17.84,0,0,0-3.5,5.44,18.76,18.76,0,0,0-1.44,6.75Z"
        }), n().createElement("path", {
            d: "M1763.64,120.39h-13.5v-8.75h-.25a16.91,16.91,0,0,1-8.38,8.06,28.26,28.26,0,0,1-11.62,2.44,30.85,30.85,0,0,1-13.31-2.69,26.5,26.5,0,0,1-9.44-7.31,31.27,31.27,0,0,1-5.63-10.94,47.43,47.43,0,0,1-1.87-13.56A43.46,43.46,0,0,1,1702,72.51a30.33,30.33,0,0,1,6.32-10.5,24.3,24.3,0,0,1,9-6.06A28.64,28.64,0,0,1,1727.64,54a34,34,0,0,1,6.12.57,26.68,26.68,0,0,1,6,1.81,23.33,23.33,0,0,1,5.32,3.19,17.84,17.84,0,0,1,4.06,4.56h.25v-33h14.25Zm-49.75-31.63a31.5,31.5,0,0,0,1.06,8.13,22.18,22.18,0,0,0,3.25,7.12,15.81,15.81,0,0,0,13.56,6.88,16,16,0,0,0,8.19-2,17,17,0,0,0,5.63-5.25,24.09,24.09,0,0,0,3.25-7.31,33.12,33.12,0,0,0,1.06-8.32q0-10.74-4.81-16.75a15.87,15.87,0,0,0-13.07-6,16.06,16.06,0,0,0-8.43,2.07A17.21,17.21,0,0,0,1718,72.7a22.21,22.21,0,0,0-3.12,7.5A38.78,38.78,0,0,0,1713.89,88.76Z"
        }), n().createElement("path", {
            d: "M1779.51,31.14h14.25v13.5h-14.25Zm0,24.62h14.25v64.63h-14.25Z"
        }), n().createElement("path", {
            d: "M1852.89,77.39q-.89-6-4.82-9.06a15.62,15.62,0,0,0-9.93-3.07,20.65,20.65,0,0,0-5.88.94,14,14,0,0,0-5.75,3.5,19.49,19.49,0,0,0-4.37,7.13,33.82,33.82,0,0,0-1.75,11.93,35.16,35.16,0,0,0,.93,8,22.05,22.05,0,0,0,3,7.13,16.3,16.3,0,0,0,5.32,5.06,15.1,15.1,0,0,0,7.87,1.94,14.29,14.29,0,0,0,10.31-3.88q4.07-3.87,5.07-10.87h14.25q-2,12.63-9.57,19.31t-20.06,6.69a33.22,33.22,0,0,1-13.44-2.56,28.68,28.68,0,0,1-9.81-7A29.59,29.59,0,0,1,1808.2,102a41.12,41.12,0,0,1-2.06-13.25,45,45,0,0,1,2-13.62,31.05,31.05,0,0,1,6-11.06,28,28,0,0,1,9.93-7.38A33.59,33.59,0,0,1,1838,54a38.93,38.93,0,0,1,10.69,1.44,28.42,28.42,0,0,1,9,4.31,23.17,23.17,0,0,1,6.44,7.25,25.06,25.06,0,0,1,3,10.38Z"
        }), n().createElement("path", {
            d: "M1879.14,31.14h14.25v13.5h-14.25Zm0,24.62h14.25v64.63h-14.25Z"
        }), n().createElement("path", {
            d: "M1908.89,55.76h13.5v9.5l.25.25a23.83,23.83,0,0,1,8.5-8.43A22.56,22.56,0,0,1,1942.76,54q10.62,0,16.75,5.5t6.13,16.5v44.38h-14.25V79.76q-.26-7.62-3.25-11.06t-9.38-3.44a15.41,15.41,0,0,0-6.5,1.32,14,14,0,0,0-4.87,3.62,17,17,0,0,0-3.13,5.44,19.38,19.38,0,0,0-1.12,6.62v38.13h-14.25Z"
        }), n().createElement("path", {
            d: "M1991.76,91.76a24.75,24.75,0,0,0,1.06,7.25,17.8,17.8,0,0,0,3.19,6.13,15.48,15.48,0,0,0,5.38,4.19,17.74,17.74,0,0,0,7.75,1.56q6.24,0,10.06-2.69a15.9,15.9,0,0,0,5.69-8.06h13.5a26.88,26.88,0,0,1-10.5,16.31,28.59,28.59,0,0,1-8.69,4.25,34.91,34.91,0,0,1-10.06,1.44,34.29,34.29,0,0,1-13.5-2.5,27.94,27.94,0,0,1-9.94-7,29.73,29.73,0,0,1-6.13-10.75,43.83,43.83,0,0,1-2.06-13.75,38.84,38.84,0,0,1,2.19-13.06A33.46,33.46,0,0,1,1986,64.2,29.3,29.3,0,0,1,2008.76,54a29,29,0,0,1,13.69,3.19,30.14,30.14,0,0,1,10.06,8.44,34.13,34.13,0,0,1,5.81,12.06,37,37,0,0,1,.94,14.06ZM2025,82.39a23.13,23.13,0,0,0-1.44-6.5,17.23,17.23,0,0,0-3.25-5.44,16.07,16.07,0,0,0-5-3.75,14.69,14.69,0,0,0-6.56-1.44,17,17,0,0,0-6.81,1.32,15.55,15.55,0,0,0-5.25,3.62,17.84,17.84,0,0,0-3.5,5.44,18.76,18.76,0,0,0-1.44,6.75Z"
        }), n().createElement("path", {
            d: "M438.78,164.56l19.12,44.33h.15L467,164.56h6.9l-11.33,53.55H454.9l-19-44h-.15l-9.08,44h-6.9l11.33-53.55Z"
        }), n().createElement("path", {
            d: "M479.39,185.45a14.1,14.1,0,0,1,3.79-3.94,15.83,15.83,0,0,1,5.1-2.32,23.15,23.15,0,0,1,5.92-.75,31.06,31.06,0,0,1,5.4.45,13.69,13.69,0,0,1,4.5,1.57,8.55,8.55,0,0,1,3.11,3,9.13,9.13,0,0,1,1.17,4.84,16.68,16.68,0,0,1-.42,3.56c-.27,1.27-.53,2.44-.78,3.49L504.7,206c-.15.8-.36,1.7-.64,2.7a11,11,0,0,0-.41,2.85,2.64,2.64,0,0,0,.53,1.88,1.82,1.82,0,0,0,1.35.52,3.12,3.12,0,0,0,1-.19l1-.33-1,4.72a12.34,12.34,0,0,1-1.92.56,8.91,8.91,0,0,1-2,.27,5.23,5.23,0,0,1-4-1.43,4.69,4.69,0,0,1-1.05-4l-.15-.15a13.35,13.35,0,0,1-5,4.12,18.69,18.69,0,0,1-8,1.43,17.94,17.94,0,0,1-4.62-.57,9.5,9.5,0,0,1-3.71-1.87,9.3,9.3,0,0,1-2.51-3.38,12.1,12.1,0,0,1-.94-5.06,10.71,10.71,0,0,1,1.84-6.67,11.57,11.57,0,0,1,4.69-3.64,23.14,23.14,0,0,1,6.3-1.69q3.45-.45,6.67-.75c1.7-.15,3.16-.31,4.39-.49a9.91,9.91,0,0,0,3-.86,3.81,3.81,0,0,0,1.76-1.72,7.06,7.06,0,0,0,.56-3.08,4.07,4.07,0,0,0-.75-2.55,5.39,5.39,0,0,0-1.87-1.54,8.85,8.85,0,0,0-2.52-.78,16.59,16.59,0,0,0-2.66-.23,17,17,0,0,0-3.56.38,10.28,10.28,0,0,0-3.19,1.23,8.35,8.35,0,0,0-2.4,2.18,7.13,7.13,0,0,0-1.27,3.19H477.4A13.45,13.45,0,0,1,479.39,185.45Zm1.8,26.59a8.86,8.86,0,0,0,4.84,1.35q7.58,0,10.87-5.1a12.73,12.73,0,0,0,2.14-4.73c.37-1.7.79-3.45,1.24-5.25h-.15a8.74,8.74,0,0,1-3.42,1.39c-1.37.27-2.83.49-4.38.64s-3.12.33-4.69.56A18.11,18.11,0,0,0,483.4,202a7.84,7.84,0,0,0-3.07,2.13,6,6,0,0,0-1.28,3.87A4.47,4.47,0,0,0,481.19,212Z"
        }), n().createElement("path", {
            d: "M536.65,179.34l-1.2,5.62h-7.72l-4.8,22.8c0,.45-.1.88-.15,1.28a10.18,10.18,0,0,0-.08,1.27,2.08,2.08,0,0,0,1.16,2.06,6,6,0,0,0,2.67.57,9.48,9.48,0,0,0,1.87-.19,17.19,17.19,0,0,0,1.8-.49l-1.12,5.85c-.75.1-1.5.19-2.25.26a21.2,21.2,0,0,1-2.25.12,20,20,0,0,1-3.38-.27,7.61,7.61,0,0,1-2.74-1,5.52,5.52,0,0,1-1.87-1.91,5.93,5.93,0,0,1-.71-3.08,9.92,9.92,0,0,1,.11-1.57c.07-.5.16-1.05.26-1.65l5.1-24.08h-6.52l1.2-5.62h6.52l2.4-11.48h6.38l-2.4,11.48Z"
        }), n().createElement("path", {
            d: "M550.08,179.34,542,218.11h-6.3l8-38.77Zm-5-7,1.65-7.8h6.45l-1.65,7.8Z"
        }), n().createElement("path", {
            d: "M555.36,193.66a23.64,23.64,0,0,1,4.28-7.8,21.21,21.21,0,0,1,6.82-5.4,20,20,0,0,1,9.11-2q7.88,0,12,4.08t4.13,12a29.67,29.67,0,0,1-1.43,9.15,23.82,23.82,0,0,1-4.2,7.83,20.66,20.66,0,0,1-6.75,5.44,19.69,19.69,0,0,1-9.07,2,18.72,18.72,0,0,1-6.86-1.2A14.26,14.26,0,0,1,555,209.3a18.17,18.17,0,0,1-1.12-6.49A29.11,29.11,0,0,1,555.36,193.66Zm7.62,16.8q2.68,2.92,7.94,2.93a10.78,10.78,0,0,0,6.19-1.8,16.48,16.48,0,0,0,4.5-4.54,21.36,21.36,0,0,0,2.78-6,22,22,0,0,0,.93-6.08,15.3,15.3,0,0,0-.59-4.27,9.33,9.33,0,0,0-1.88-3.49,9.12,9.12,0,0,0-3.19-2.33,11,11,0,0,0-4.54-.86,11.59,11.59,0,0,0-6.45,1.8A16.35,16.35,0,0,0,564,190.4a20.61,20.61,0,0,0-2.81,6,23.25,23.25,0,0,0-.94,6.3A10.89,10.89,0,0,0,563,210.46Z"
        }), n().createElement("path", {
            d: "M609.62,179.34l-1.2,5.85h.15a15.14,15.14,0,0,1,6.08-5.07,18.35,18.35,0,0,1,7.72-1.68c3.65,0,6.37.8,8.14,2.4s2.66,4.12,2.66,7.57a23.49,23.49,0,0,1-.3,3.3c-.2,1.35-.47,2.78-.82,4.28l-4.73,22.12H621l4.95-22.65c.05-.4.12-.86.22-1.39s.2-1.07.3-1.65.19-1.12.27-1.65a10.28,10.28,0,0,0,.11-1.31,4.59,4.59,0,0,0-1.95-4.09,8.44,8.44,0,0,0-4.8-1.31,11.67,11.67,0,0,0-5.21,1.28,14.73,14.73,0,0,0-4.39,3.22,10.53,10.53,0,0,0-2.7,3.64,26.79,26.79,0,0,0-1.58,4.46l-4.5,21.45h-6.3l8.1-38.77Z"
        }), n().createElement("path", {
            d: "M643.34,185.45a14.06,14.06,0,0,1,3.78-3.94,15.83,15.83,0,0,1,5.1-2.32,23.22,23.22,0,0,1,5.93-.75,31.06,31.06,0,0,1,5.4.45,13.69,13.69,0,0,1,4.5,1.57,8.55,8.55,0,0,1,3.11,3,9.13,9.13,0,0,1,1.16,4.84,16.64,16.64,0,0,1-.41,3.56c-.27,1.27-.54,2.44-.79,3.49L668.65,206c-.15.8-.36,1.7-.64,2.7a11,11,0,0,0-.41,2.85,2.64,2.64,0,0,0,.52,1.88,1.82,1.82,0,0,0,1.35.52,3.18,3.18,0,0,0,1-.19l1-.33-1,4.72a12.18,12.18,0,0,1-1.91.56,9,9,0,0,1-2,.27,5.21,5.21,0,0,1-4-1.43,4.69,4.69,0,0,1-1-4l-.15-.15a13.38,13.38,0,0,1-5,4.12,18.69,18.69,0,0,1-7.95,1.43,17.86,17.86,0,0,1-4.61-.57,9.5,9.5,0,0,1-3.71-1.87,9.3,9.3,0,0,1-2.51-3.38,12.1,12.1,0,0,1-.94-5.06,10.71,10.71,0,0,1,1.84-6.67,11.53,11.53,0,0,1,4.68-3.64,23.14,23.14,0,0,1,6.3-1.69q3.45-.45,6.68-.75c1.7-.15,3.16-.31,4.39-.49a9.84,9.84,0,0,0,3-.86,3.84,3.84,0,0,0,1.77-1.72,7.06,7.06,0,0,0,.56-3.08,4.07,4.07,0,0,0-.75-2.55,5.43,5.43,0,0,0-1.88-1.54,8.78,8.78,0,0,0-2.51-.78,16.59,16.59,0,0,0-2.66-.23,17,17,0,0,0-3.56.38,10.28,10.28,0,0,0-3.19,1.23,8.35,8.35,0,0,0-2.4,2.18,7.14,7.14,0,0,0-1.28,3.19h-6.37A13.45,13.45,0,0,1,643.34,185.45Zm1.8,26.59a8.83,8.83,0,0,0,4.83,1.35q7.57,0,10.88-5.1a12.73,12.73,0,0,0,2.14-4.73q.56-2.55,1.23-5.25h-.15a8.69,8.69,0,0,1-3.41,1.39c-1.37.27-2.84.49-4.39.64s-3.11.33-4.68.56a18.11,18.11,0,0,0-4.24,1.09,7.88,7.88,0,0,0-3.08,2.13A6,6,0,0,0,643,208,4.47,4.47,0,0,0,645.14,212Z"
        }), n().createElement("path", {
            d: "M693.55,164.56,682.3,218.11H676l11.17-53.55Z"
        }), n().createElement("path", {
            d: "M755.39,214.17q-5.89,5.15-15.79,5.14-11,0-17-6.11t-6-17.29a37.86,37.86,0,0,1,2-12.41,32.13,32.13,0,0,1,5.82-10.39,27.51,27.51,0,0,1,21.56-9.82,26.66,26.66,0,0,1,8.06,1.16,18.43,18.43,0,0,1,6.45,3.45,15.87,15.87,0,0,1,4.31,5.77,19.64,19.64,0,0,1,1.58,8.14h-7.13q0-6.3-3.71-9.41a14.34,14.34,0,0,0-9.56-3.11,19.47,19.47,0,0,0-9.79,2.36,22.07,22.07,0,0,0-6.94,6.11,26.89,26.89,0,0,0-4.16,8.51,34.16,34.16,0,0,0-1.39,9.64,24.58,24.58,0,0,0,1,7.13,15.14,15.14,0,0,0,2.92,5.51,13.23,13.23,0,0,0,4.92,3.56,17.62,17.62,0,0,0,7,1.28q6.6,0,10.72-3.49a19,19,0,0,0,5.85-9.86h7.13Q761.28,209,755.39,214.17Z"
        }), n().createElement("path", {
            d: "M775.07,204a9.33,9.33,0,0,0,.83,4,8.21,8.21,0,0,0,2.25,2.93,10.91,10.91,0,0,0,3.22,1.8,11.28,11.28,0,0,0,3.75.64,12.12,12.12,0,0,0,7-1.92A11.25,11.25,0,0,0,796.3,206h6.37a16.72,16.72,0,0,1-2.4,5.66,15.16,15.16,0,0,1-4,4,17.5,17.5,0,0,1-5.18,2.44,21.47,21.47,0,0,1-6,.83,19.1,19.1,0,0,1-8-1.47,13.82,13.82,0,0,1-5.06-3.75,13.45,13.45,0,0,1-2.62-5,20,20,0,0,1-.75-5.29,30.46,30.46,0,0,1,1.61-10.16,25.1,25.1,0,0,1,4.35-7.91,19.42,19.42,0,0,1,6.37-5.1,17,17,0,0,1,7.62-1.8q8.55,0,12.48,4.5t3.94,12.67a17.34,17.34,0,0,1-.22,2.85c-.15.9-.28,1.63-.38,2.18H775.3A24.88,24.88,0,0,0,775.07,204Zm23.36-13a9.17,9.17,0,0,0-1.5-3.53,7.9,7.9,0,0,0-2.88-2.47,9.45,9.45,0,0,0-4.43-.94,13.78,13.78,0,0,0-5,.86,12.5,12.5,0,0,0-3.86,2.37,14,14,0,0,0-2.77,3.48,20.71,20.71,0,0,0-1.8,4.24h22.5A14.2,14.2,0,0,0,798.43,191Z"
        }), n().createElement("path", {
            d: "M822.17,179.34l-1.2,5.85h.15a15.14,15.14,0,0,1,6.08-5.07,18.31,18.31,0,0,1,7.72-1.68q5.48,0,8.14,2.4t2.66,7.57a23.49,23.49,0,0,1-.3,3.3c-.2,1.35-.48,2.78-.82,4.28l-4.73,22.12H833.5l5-22.65c0-.4.12-.86.22-1.39s.2-1.07.3-1.65.19-1.12.26-1.65a8.91,8.91,0,0,0,.12-1.31,4.59,4.59,0,0,0-2-4.09,8.44,8.44,0,0,0-4.8-1.31,11.75,11.75,0,0,0-5.22,1.28,14.81,14.81,0,0,0-4.38,3.22,10.41,10.41,0,0,0-2.7,3.64,26.79,26.79,0,0,0-1.58,4.46l-4.5,21.45h-6.3l8.1-38.77Z"
        }), n().createElement("path", {
            d: "M874.22,179.34,873,185H865.3l-4.8,22.8c0,.45-.11.88-.15,1.28a10.18,10.18,0,0,0-.08,1.27,2.08,2.08,0,0,0,1.16,2.06,6,6,0,0,0,2.67.57,9.48,9.48,0,0,0,1.87-.19,17.19,17.19,0,0,0,1.8-.49l-1.12,5.85c-.75.1-1.5.19-2.25.26a21.2,21.2,0,0,1-2.25.12,20,20,0,0,1-3.38-.27,7.61,7.61,0,0,1-2.74-1,5.52,5.52,0,0,1-1.87-1.91,5.93,5.93,0,0,1-.71-3.08,9.92,9.92,0,0,1,.11-1.57c.07-.5.16-1.05.26-1.65l5.1-24.08H852.4l1.2-5.62h6.52l2.4-11.48h6.38l-2.4,11.48Z"
        }), n().createElement("path", {
            d: "M880.67,204a9.19,9.19,0,0,0,.83,4,8.21,8.21,0,0,0,2.25,2.93,10.79,10.79,0,0,0,3.22,1.8,11.28,11.28,0,0,0,3.75.64,12.12,12.12,0,0,0,7-1.92,11.17,11.17,0,0,0,4.12-5.51h6.38a16.72,16.72,0,0,1-2.4,5.66,15.2,15.2,0,0,1-4,4,17.33,17.33,0,0,1-5.17,2.44,21.47,21.47,0,0,1-6,.83,19.1,19.1,0,0,1-8-1.47,13.82,13.82,0,0,1-5.06-3.75,13.3,13.3,0,0,1-2.62-5,20,20,0,0,1-.75-5.29,30.46,30.46,0,0,1,1.61-10.16,25.1,25.1,0,0,1,4.35-7.91,19.42,19.42,0,0,1,6.37-5.1,17,17,0,0,1,7.62-1.8q8.55,0,12.48,4.5t3.94,12.67a17.34,17.34,0,0,1-.22,2.85c-.15.9-.28,1.63-.38,2.18H880.89A26.62,26.62,0,0,0,880.67,204ZM904,191a9.17,9.17,0,0,0-1.5-3.53,7.85,7.85,0,0,0-2.89-2.47,9.38,9.38,0,0,0-4.42-.94,13.78,13.78,0,0,0-5,.86,12.5,12.5,0,0,0-3.86,2.37,14,14,0,0,0-2.77,3.48,20.71,20.71,0,0,0-1.8,4.24h22.5A14.58,14.58,0,0,0,904,191Z"
        }), n().createElement("path", {
            d: "M927.54,179.34l-1.87,8.32h.15a21.18,21.18,0,0,1,5.74-6.6,13.49,13.49,0,0,1,8.36-2.62,7.87,7.87,0,0,0,1.12-.08,3,3,0,0,1,1.13.08l-1.5,6.82a4.6,4.6,0,0,0-1-.07h-.9c-.8,0-1.45,0-1.94,0a9.68,9.68,0,0,0-1.88.34,12.38,12.38,0,0,0-4.69,2.33,16.56,16.56,0,0,0-3.56,4,15.72,15.72,0,0,0-2,4.39c-.5,1.67-.9,3.24-1.2,4.69l-3.67,17.17h-6.3l8-38.77Z"
        }), n().createElement("path", {
            d: "M962,185l1.12-5.62h6.6c.5-2,1-3.85,1.39-5.7a18.7,18.7,0,0,1,1.84-4.92,9.43,9.43,0,0,1,3.34-3.45,11.43,11.43,0,0,1,6-1.31c.9,0,1.8,0,2.7.11a13.47,13.47,0,0,1,2.62.49l-1,5.4c-.55-.1-1.07-.19-1.57-.26a9,9,0,0,0-1.43-.11,6.35,6.35,0,0,0-3.6.86,5.82,5.82,0,0,0-2,2.25,11.28,11.28,0,0,0-1,3.11c-.23,1.15-.52,2.33-.87,3.53h7.43l-1,5.62h-7.5l-7.13,33.15h-6.37l7.2-33.15Z"
        }), n().createElement("path", {
            d: "M984.58,193.66a23.64,23.64,0,0,1,4.28-7.8,21.21,21.21,0,0,1,6.82-5.4,19.92,19.92,0,0,1,9.11-2q7.88,0,12,4.08t4.13,12a29.67,29.67,0,0,1-1.43,9.15,23.82,23.82,0,0,1-4.2,7.83,20.66,20.66,0,0,1-6.75,5.44,19.69,19.69,0,0,1-9.07,2,18.72,18.72,0,0,1-6.86-1.2,14.26,14.26,0,0,1-8.37-8.44,18.17,18.17,0,0,1-1.12-6.49A29.11,29.11,0,0,1,984.58,193.66Zm7.61,16.8q2.7,2.92,7.95,2.93a10.78,10.78,0,0,0,6.19-1.8,16.76,16.76,0,0,0,4.5-4.54,21.36,21.36,0,0,0,2.78-6,22,22,0,0,0,.93-6.08,14.94,14.94,0,0,0-.6-4.27,8.9,8.9,0,0,0-5.06-5.82,11,11,0,0,0-4.54-.86,11.59,11.59,0,0,0-6.45,1.8,16.35,16.35,0,0,0-4.65,4.54,20.61,20.61,0,0,0-2.81,6,23.25,23.25,0,0,0-.94,6.3A10.93,10.93,0,0,0,992.19,210.46Z"
        }), n().createElement("path", {
            d: "M1038.62,179.34l-1.88,8.32h.15a21.18,21.18,0,0,1,5.74-6.6,13.49,13.49,0,0,1,8.36-2.62,8,8,0,0,0,1.13-.08,2.9,2.9,0,0,1,1.12.08l-1.5,6.82a4.49,4.49,0,0,0-1-.07h-.9q-1.2,0-1.95,0a9.82,9.82,0,0,0-1.88.34,12.38,12.38,0,0,0-4.69,2.33,16.56,16.56,0,0,0-3.56,4,15.71,15.71,0,0,0-2,4.39c-.5,1.67-.9,3.24-1.2,4.69l-3.68,17.17h-6.3l8-38.77Z"
        }), n().createElement("path", {
            d: "M1103.94,164.56q7.88,0,11.4,3.38t3.53,9.45a14.08,14.08,0,0,1-2.74,8.28,12.49,12.49,0,0,1-3.19,3,10.55,10.55,0,0,1-4.27,1.62v.15a10.83,10.83,0,0,1,5.85,3.93,11.59,11.59,0,0,1,2.17,7.17,15.94,15.94,0,0,1-1.46,6.9,15.23,15.23,0,0,1-4,5.21,19.06,19.06,0,0,1-6,3.3,23.21,23.21,0,0,1-7.42,1.16h-26.48l11.18-53.55Zm-7.35,47.55a31.91,31.91,0,0,0,3.53-.26,12.71,12.71,0,0,0,4.27-1.35,10.58,10.58,0,0,0,3.64-3.19,9.62,9.62,0,0,0,1.54-5.77,8.29,8.29,0,0,0-.9-4.13,6.12,6.12,0,0,0-2.44-2.4,10.84,10.84,0,0,0-3.53-1.12,27.79,27.79,0,0,0-4.16-.3h-15.3l-3.9,18.52Zm3.75-24.52q11.4,0,11.4-10.2a6.17,6.17,0,0,0-1-3.75,6.31,6.31,0,0,0-2.59-2,11.47,11.47,0,0,0-3.41-.86,33.17,33.17,0,0,0-3.49-.19H1088l-3.6,17Z"
        }), n().createElement("path", {
            d: "M1136.19,179.34l-8.1,38.77h-6.3l8-38.77Zm-5-7,1.65-7.8h6.45l-1.65,7.8Z"
        }), n().createElement("path", {
            d: "M1141.48,193.66a23.62,23.62,0,0,1,4.27-7.8,21.24,21.24,0,0,1,6.83-5.4,19.92,19.92,0,0,1,9.11-2q7.88,0,12,4.08t4.12,12a29.66,29.66,0,0,1-1.42,9.15,23.82,23.82,0,0,1-4.2,7.83,20.66,20.66,0,0,1-6.75,5.44,19.74,19.74,0,0,1-9.08,2,18.76,18.76,0,0,1-6.86-1.2,14.21,14.21,0,0,1-8.36-8.44,18.17,18.17,0,0,1-1.12-6.49A28.83,28.83,0,0,1,1141.48,193.66Zm7.61,16.8q2.7,2.92,8,2.93a10.8,10.8,0,0,0,6.19-1.8,16.76,16.76,0,0,0,4.5-4.54,21.33,21.33,0,0,0,2.77-6,21.66,21.66,0,0,0,.94-6.08,14.94,14.94,0,0,0-.6-4.27,9,9,0,0,0-5.06-5.82,11.08,11.08,0,0,0-4.54-.86,11.59,11.59,0,0,0-6.45,1.8,16.35,16.35,0,0,0-4.65,4.54,20.36,20.36,0,0,0-2.81,6,22.87,22.87,0,0,0-.94,6.3A10.93,10.93,0,0,0,1149.09,210.46Z"
        }), n().createElement("path", {
            d: "M1206.09,179.34l-1.2,5.62h-7.73l-4.8,22.8c0,.45-.1.88-.15,1.28a10.24,10.24,0,0,0-.07,1.27,2.07,2.07,0,0,0,1.16,2.06,6,6,0,0,0,2.66.57,9.59,9.59,0,0,0,1.88-.19,17.19,17.19,0,0,0,1.8-.49l-1.13,5.85c-.75.1-1.5.19-2.25.26a21.2,21.2,0,0,1-2.25.12,19.92,19.92,0,0,1-3.37-.27,7.61,7.61,0,0,1-2.74-1,5.52,5.52,0,0,1-1.87-1.91,5.93,5.93,0,0,1-.72-3.08,9.9,9.9,0,0,1,.12-1.57c.07-.5.16-1.05.26-1.65l5.1-24.08h-6.53l1.2-5.62H1192l2.4-11.48h6.37l-2.4,11.48Z"
        }), n().createElement("path", {
            d: "M1212.54,204a9.33,9.33,0,0,0,.82,4,8.21,8.21,0,0,0,2.25,2.93,11,11,0,0,0,3.23,1.8,11.28,11.28,0,0,0,3.75.64,12.12,12.12,0,0,0,7.05-1.92,11.23,11.23,0,0,0,4.12-5.51h6.38a16.72,16.72,0,0,1-2.4,5.66,15.2,15.2,0,0,1-4,4,17.44,17.44,0,0,1-5.17,2.44,21.47,21.47,0,0,1-6,.83,19.1,19.1,0,0,1-8-1.47,13.73,13.73,0,0,1-5.06-3.75,13.47,13.47,0,0,1-2.63-5,20,20,0,0,1-.75-5.29,30.71,30.71,0,0,1,1.61-10.16,25.31,25.31,0,0,1,4.36-7.91,19.32,19.32,0,0,1,6.37-5.1,16.93,16.93,0,0,1,7.61-1.8q8.55,0,12.49,4.5t3.94,12.67a17.32,17.32,0,0,1-.23,2.85c-.15.9-.27,1.63-.37,2.18h-29.18A24.88,24.88,0,0,0,1212.54,204Zm23.36-13a9.48,9.48,0,0,0-1.5-3.53,8,8,0,0,0-2.89-2.47,9.41,9.41,0,0,0-4.42-.94,13.74,13.74,0,0,0-5,.86,12.38,12.38,0,0,0-3.86,2.37,14.06,14.06,0,0,0-2.78,3.48,20.71,20.71,0,0,0-1.8,4.24h22.5A14.57,14.57,0,0,0,1235.9,191Z"
        }), n().createElement("path", {
            d: "M1274.71,186.05a8.54,8.54,0,0,0-6-2,12.6,12.6,0,0,0-6.49,1.65,15.46,15.46,0,0,0-4.72,4.28,19.2,19.2,0,0,0-2.89,5.88,22.39,22.39,0,0,0-1,6.42,18.44,18.44,0,0,0,.48,4.27,9.62,9.62,0,0,0,1.62,3.53,8,8,0,0,0,3,2.4,10.26,10.26,0,0,0,4.54.9,11.49,11.49,0,0,0,7-2.18,12.45,12.45,0,0,0,4.27-5.77h6.38a17.68,17.68,0,0,1-6.3,10.05,18.39,18.39,0,0,1-11.4,3.45q-8,0-12-4.35t-4-12.3a28.61,28.61,0,0,1,1.39-8.93,23.07,23.07,0,0,1,4.12-7.61,19.9,19.9,0,0,1,15.94-7.31q6.6,0,10.46,3.18t4.09,10h-6.37A7.19,7.19,0,0,0,1274.71,186.05Z"
        }), n().createElement("path", {
            d: "M1303.29,164.56,1298.71,185l.15.15a15.14,15.14,0,0,1,6.08-5.07,18.35,18.35,0,0,1,7.72-1.68q5.47,0,8.14,2.4t2.66,7.57a23.49,23.49,0,0,1-.3,3.3c-.2,1.35-.47,2.78-.82,4.28l-4.73,22.12h-6.37l5-22.65c0-.4.12-.86.22-1.39s.2-1.07.3-1.65.19-1.12.26-1.65a8.91,8.91,0,0,0,.12-1.31,4.59,4.59,0,0,0-1.95-4.09,8.44,8.44,0,0,0-4.8-1.31,11.75,11.75,0,0,0-5.22,1.28,14.81,14.81,0,0,0-4.38,3.22,10.53,10.53,0,0,0-2.7,3.64,26.79,26.79,0,0,0-1.58,4.46l-4.5,21.45h-6.3l11.25-53.55Z"
        }), n().createElement("path", {
            d: "M1341.61,179.34l-1.2,5.85h.15a15.14,15.14,0,0,1,6.08-5.07,18.35,18.35,0,0,1,7.72-1.68q5.48,0,8.14,2.4t2.66,7.57a23.49,23.49,0,0,1-.3,3.3c-.2,1.35-.47,2.78-.82,4.28l-4.73,22.12h-6.37l5-22.65c0-.4.12-.86.22-1.39s.2-1.07.3-1.65.19-1.12.26-1.65a8.91,8.91,0,0,0,.12-1.31,4.59,4.59,0,0,0-2-4.09,8.44,8.44,0,0,0-4.8-1.31,11.75,11.75,0,0,0-5.22,1.28,14.81,14.81,0,0,0-4.38,3.22,10.53,10.53,0,0,0-2.7,3.64,26.79,26.79,0,0,0-1.58,4.46l-4.5,21.45h-6.3l8.1-38.77Z"
        }), n().createElement("path", {
            d: "M1372.1,193.66a23.62,23.62,0,0,1,4.27-7.8,21.24,21.24,0,0,1,6.83-5.4,19.92,19.92,0,0,1,9.11-2q7.88,0,12,4.08t4.13,12a29.67,29.67,0,0,1-1.43,9.15,23.82,23.82,0,0,1-4.2,7.83,20.66,20.66,0,0,1-6.75,5.44,19.69,19.69,0,0,1-9.07,2,18.82,18.82,0,0,1-6.87-1.2,14.28,14.28,0,0,1-8.36-8.44,18.17,18.17,0,0,1-1.12-6.49A28.83,28.83,0,0,1,1372.1,193.66Zm7.61,16.8q2.7,2.92,8,2.93a10.8,10.8,0,0,0,6.19-1.8,16.76,16.76,0,0,0,4.5-4.54,21.33,21.33,0,0,0,2.77-6,21.66,21.66,0,0,0,.94-6.08,14.94,14.94,0,0,0-.6-4.27,8.9,8.9,0,0,0-5.06-5.82,11.08,11.08,0,0,0-4.54-.86,11.59,11.59,0,0,0-6.45,1.8,16.35,16.35,0,0,0-4.65,4.54,20.36,20.36,0,0,0-2.81,6,22.87,22.87,0,0,0-.94,6.3A10.93,10.93,0,0,0,1379.71,210.46Z"
        }), n().createElement("path", {
            d: "M1429.66,164.56l-11.25,53.55h-6.3l11.18-53.55Z"
        }), n().createElement("path", {
            d: "M1431.8,193.66a23.62,23.62,0,0,1,4.27-7.8,21.24,21.24,0,0,1,6.83-5.4,19.92,19.92,0,0,1,9.11-2q7.88,0,12,4.08t4.12,12a29.66,29.66,0,0,1-1.42,9.15,23.82,23.82,0,0,1-4.2,7.83,20.66,20.66,0,0,1-6.75,5.44,19.74,19.74,0,0,1-9.08,2,18.76,18.76,0,0,1-6.86-1.2,14.21,14.21,0,0,1-8.36-8.44,18.17,18.17,0,0,1-1.13-6.49A28.83,28.83,0,0,1,1431.8,193.66Zm7.61,16.8q2.7,2.92,7.95,2.93a10.8,10.8,0,0,0,6.19-1.8,16.76,16.76,0,0,0,4.5-4.54,21.33,21.33,0,0,0,2.77-6,21.66,21.66,0,0,0,.94-6.08,14.94,14.94,0,0,0-.6-4.27,9,9,0,0,0-5.06-5.82,11.08,11.08,0,0,0-4.54-.86,11.59,11.59,0,0,0-6.45,1.8,16.35,16.35,0,0,0-4.65,4.54,20.36,20.36,0,0,0-2.81,6,22.87,22.87,0,0,0-.94,6.3A10.93,10.93,0,0,0,1439.41,210.46Z"
        }), n().createElement("path", {
            d: "M1505.11,218.22a42.28,42.28,0,0,1-1.58,4.77,16.38,16.38,0,0,1-6.9,8.32,21.65,21.65,0,0,1-10.72,2.48,23.88,23.88,0,0,1-5.74-.68,14.84,14.84,0,0,1-4.84-2.1,11.05,11.05,0,0,1-3.41-3.71,11.55,11.55,0,0,1-1.39-5.51h6.3a6.24,6.24,0,0,0,1,3.18,6.06,6.06,0,0,0,2.17,1.95,9.21,9.21,0,0,0,3,1,24,24,0,0,0,3.52.26,12.06,12.06,0,0,0,6-1.35,11.56,11.56,0,0,0,3.86-3.52,18.41,18.41,0,0,0,2.37-5c.57-1.88,1.11-3.76,1.61-5.66l-.15-.15a11.91,11.91,0,0,1-5.25,4.5,17.17,17.17,0,0,1-6.83,1.35,16,16,0,0,1-6.34-1.17,11.82,11.82,0,0,1-4.53-3.3,14.61,14.61,0,0,1-2.74-5.06,20.9,20.9,0,0,1-.94-6.45,27.41,27.41,0,0,1,1.39-8.55,25.65,25.65,0,0,1,4-7.69,20.83,20.83,0,0,1,6.33-5.55,16.87,16.87,0,0,1,8.48-2.13,15,15,0,0,1,4.16.56,15.29,15.29,0,0,1,3.68,1.57,10.67,10.67,0,0,1,2.85,2.48,8.52,8.52,0,0,1,1.61,3.26v.15h.15l1.2-7.12h6l-7,33.15Q1505.86,215.49,1505.11,218.22Zm-24.45-11.88a9.87,9.87,0,0,0,1.76,3.3,8.36,8.36,0,0,0,3,2.28,9.55,9.55,0,0,0,4.2.87,11,11,0,0,0,6.27-1.8,15.09,15.09,0,0,0,4.38-4.58,22.14,22.14,0,0,0,2.59-6,24.36,24.36,0,0,0,.86-6.18,10.75,10.75,0,0,0-2.43-7.35q-2.45-2.78-7.47-2.78a9.72,9.72,0,0,0-5.92,1.88,16.68,16.68,0,0,0-4.28,4.61,22.49,22.49,0,0,0-2.62,5.92,21.83,21.83,0,0,0-.9,5.89A13,13,0,0,0,1480.66,206.34Z"
        }), n().createElement("path", {
            d: "M1525,228.2a16.49,16.49,0,0,1-2.62,2.92,10.93,10.93,0,0,1-3.23,1.95,11.26,11.26,0,0,1-4.2.72,10.54,10.54,0,0,1-2.32-.27,8.76,8.76,0,0,1-2.1-.71l1.12-5.17a7.5,7.5,0,0,0,1.8.75,7.15,7.15,0,0,0,1.8.3,5.2,5.2,0,0,0,3.53-1.17,12.37,12.37,0,0,0,2.47-3l3.9-6.38-6.82-38.77h6.82l4.5,30.82h.15l16.28-30.82h7l-25.65,45.3C1526.58,225.89,1525.78,227.07,1525,228.2Z"
        }), n().createElement("path", {
            d: "M1591,164.56l-11.25,53.55h-7.12l11.25-53.55Z"
        }), n().createElement("path", {
            d: "M1605.45,179.34l-1.2,5.85h.15a15.14,15.14,0,0,1,6.08-5.07,18.35,18.35,0,0,1,7.72-1.68c3.65,0,6.37.8,8.14,2.4s2.66,4.12,2.66,7.57a23.49,23.49,0,0,1-.3,3.3c-.2,1.35-.47,2.78-.82,4.28l-4.73,22.12h-6.37l5-22.65c0-.4.12-.86.22-1.39s.2-1.07.3-1.65.19-1.12.27-1.65a10.28,10.28,0,0,0,.11-1.31,4.59,4.59,0,0,0-2-4.09,8.44,8.44,0,0,0-4.8-1.31,11.67,11.67,0,0,0-5.21,1.28,14.73,14.73,0,0,0-4.39,3.22,10.53,10.53,0,0,0-2.7,3.64,26.79,26.79,0,0,0-1.58,4.46l-4.5,21.45h-6.3l8.1-38.77Z"
        }), n().createElement("path", {
            d: "M1635.53,185l1.12-5.62h6.6c.5-2,1-3.85,1.39-5.7a18.7,18.7,0,0,1,1.84-4.92,9.43,9.43,0,0,1,3.34-3.45,11.43,11.43,0,0,1,6-1.31c.9,0,1.8,0,2.7.11a13.47,13.47,0,0,1,2.62.49l-1,5.4c-.55-.1-1.07-.19-1.57-.26a9,9,0,0,0-1.43-.11,6.35,6.35,0,0,0-3.6.86,5.82,5.82,0,0,0-2,2.25,11.28,11.28,0,0,0-1,3.11c-.23,1.15-.52,2.33-.87,3.53H1657l-1,5.62h-7.5l-7.13,33.15h-6.37l7.2-33.15Z"
        }), n().createElement("path", {
            d: "M1658.14,193.66a23.64,23.64,0,0,1,4.28-7.8,21.21,21.21,0,0,1,6.82-5.4,20,20,0,0,1,9.11-2q7.88,0,12,4.08t4.13,12a29.67,29.67,0,0,1-1.43,9.15,23.82,23.82,0,0,1-4.2,7.83,20.66,20.66,0,0,1-6.75,5.44,19.69,19.69,0,0,1-9.07,2,18.72,18.72,0,0,1-6.86-1.2,14.26,14.26,0,0,1-8.37-8.44,18.17,18.17,0,0,1-1.12-6.49A29.11,29.11,0,0,1,1658.14,193.66Zm7.61,16.8q2.7,2.92,8,2.93a10.78,10.78,0,0,0,6.19-1.8,16.48,16.48,0,0,0,4.5-4.54,21.36,21.36,0,0,0,2.78-6,22,22,0,0,0,.93-6.08,14.94,14.94,0,0,0-.6-4.27,8.9,8.9,0,0,0-5.06-5.82,11,11,0,0,0-4.54-.86,11.59,11.59,0,0,0-6.45,1.8,16.35,16.35,0,0,0-4.65,4.54,20.61,20.61,0,0,0-2.81,6,23.25,23.25,0,0,0-.94,6.3A10.93,10.93,0,0,0,1665.75,210.46Z"
        }), n().createElement("path", {
            d: "M1712.18,179.34l-1.88,8.32h.15a21.18,21.18,0,0,1,5.74-6.6,13.51,13.51,0,0,1,8.36-2.62,8,8,0,0,0,1.13-.08,2.9,2.9,0,0,1,1.12.08l-1.5,6.82a4.49,4.49,0,0,0-1-.07h-.9q-1.2,0-2,0a9.82,9.82,0,0,0-1.88.34,12.27,12.27,0,0,0-4.68,2.33,16.39,16.39,0,0,0-3.57,4,15.71,15.71,0,0,0-2,4.39c-.5,1.67-.9,3.24-1.2,4.69l-3.68,17.17h-6.3l8-38.77Z"
        }), n().createElement("path", {
            d: "M1737.23,179.34l-1.43,5.77.15.15a18.56,18.56,0,0,1,6-5,16,16,0,0,1,7.54-1.83,12,12,0,0,1,6.3,1.57,7.83,7.83,0,0,1,3.45,5.4,16.69,16.69,0,0,1,5.82-5.06,15.48,15.48,0,0,1,7.46-1.91,16.53,16.53,0,0,1,4,.48,11.55,11.55,0,0,1,3.49,1.5,7.46,7.46,0,0,1,2.44,2.67,8.36,8.36,0,0,1,.9,4,23.25,23.25,0,0,1-.38,3.9c-.25,1.45-.5,2.72-.75,3.82l-4.87,23.25h-6.38l5.4-24.6a21.64,21.64,0,0,0,.41-2.14,13.51,13.51,0,0,0,.19-2.06,4.8,4.8,0,0,0-1.69-3.75,6.11,6.11,0,0,0-4.23-1.5,8.83,8.83,0,0,0-2.74.45,15,15,0,0,0-2.66,1.16,15,15,0,0,0-4.35,3.72,11,11,0,0,0-2.33,4,43.53,43.53,0,0,0-1.27,4.73l-4.28,20H1747l4.65-22.12c.35-1.5.64-2.9.86-4.2a20.19,20.19,0,0,0,.34-2.63,5,5,0,0,0-1.39-3.75,5.53,5.53,0,0,0-4-1.35,10.34,10.34,0,0,0-5.22,1.5,17.3,17.3,0,0,0-4.31,3.45,10.93,10.93,0,0,0-2.77,3.94,33.21,33.21,0,0,0-1.35,4.84l-4.35,20.32h-6.3l8.17-38.77Z"
        }), n().createElement("path", {
            d: "M1793.29,185.45a14.1,14.1,0,0,1,3.79-3.94,15.83,15.83,0,0,1,5.1-2.32,23.15,23.15,0,0,1,5.92-.75,31.06,31.06,0,0,1,5.4.45,13.69,13.69,0,0,1,4.5,1.57,8.55,8.55,0,0,1,3.11,3,9.13,9.13,0,0,1,1.17,4.84,16.68,16.68,0,0,1-.42,3.56c-.27,1.27-.53,2.44-.78,3.49L1818.6,206c-.15.8-.36,1.7-.64,2.7a11,11,0,0,0-.41,2.85,2.64,2.64,0,0,0,.53,1.88,1.82,1.82,0,0,0,1.35.52,3.12,3.12,0,0,0,1-.19l1-.33-1,4.72a12.34,12.34,0,0,1-1.92.56,8.91,8.91,0,0,1-2,.27,5.23,5.23,0,0,1-4-1.43,4.69,4.69,0,0,1-1-4l-.15-.15a13.35,13.35,0,0,1-5,4.12,18.69,18.69,0,0,1-8,1.43,17.94,17.94,0,0,1-4.62-.57,9.5,9.5,0,0,1-3.71-1.87,9.3,9.3,0,0,1-2.51-3.38,12.1,12.1,0,0,1-.94-5.06,10.71,10.71,0,0,1,1.84-6.67,11.57,11.57,0,0,1,4.69-3.64,23.14,23.14,0,0,1,6.3-1.69q3.45-.45,6.67-.75c1.7-.15,3.16-.31,4.39-.49a9.91,9.91,0,0,0,3-.86,3.81,3.81,0,0,0,1.76-1.72,7.06,7.06,0,0,0,.56-3.08,4.07,4.07,0,0,0-.75-2.55,5.39,5.39,0,0,0-1.87-1.54,8.85,8.85,0,0,0-2.52-.78,16.59,16.59,0,0,0-2.66-.23,17,17,0,0,0-3.56.38,10.28,10.28,0,0,0-3.19,1.23,8.35,8.35,0,0,0-2.4,2.18,7.13,7.13,0,0,0-1.27,3.19h-6.38A13.45,13.45,0,0,1,1793.29,185.45Zm1.8,26.59a8.86,8.86,0,0,0,4.84,1.35q7.58,0,10.87-5.1a12.73,12.73,0,0,0,2.14-4.73c.37-1.7.79-3.45,1.24-5.25H1814a8.74,8.74,0,0,1-3.42,1.39c-1.37.27-2.83.49-4.38.64s-3.12.33-4.69.56a18.11,18.11,0,0,0-4.24,1.09,7.84,7.84,0,0,0-3.07,2.13A6,6,0,0,0,1793,208,4.47,4.47,0,0,0,1795.09,212Z"
        }), n().createElement("path", {
            d: "M1850.55,179.34l-1.2,5.62h-7.72l-4.8,22.8c0,.45-.1.88-.15,1.28a10.18,10.18,0,0,0-.08,1.27,2.08,2.08,0,0,0,1.16,2.06,6,6,0,0,0,2.67.57,9.48,9.48,0,0,0,1.87-.19,17.19,17.19,0,0,0,1.8-.49l-1.12,5.85c-.75.1-1.5.19-2.25.26a21.2,21.2,0,0,1-2.25.12,20,20,0,0,1-3.38-.27,7.61,7.61,0,0,1-2.74-1,5.52,5.52,0,0,1-1.87-1.91,5.93,5.93,0,0,1-.71-3.08,9.92,9.92,0,0,1,.11-1.57c.07-.5.16-1.05.26-1.65l5.1-24.08h-6.52l1.2-5.62h6.52l2.4-11.48h6.38l-2.4,11.48Z"
        }), n().createElement("path", {
            d: "M1864,179.34l-8.1,38.77h-6.3l8-38.77Zm-5-7,1.65-7.8h6.45l-1.65,7.8Z"
        }), n().createElement("path", {
            d: "M1869.26,193.66a23.64,23.64,0,0,1,4.28-7.8,21.21,21.21,0,0,1,6.82-5.4,20,20,0,0,1,9.11-2q7.88,0,12,4.08t4.13,12a29.67,29.67,0,0,1-1.43,9.15,23.82,23.82,0,0,1-4.2,7.83,20.66,20.66,0,0,1-6.75,5.44,19.69,19.69,0,0,1-9.07,2,18.72,18.72,0,0,1-6.86-1.2,14.26,14.26,0,0,1-8.37-8.44,18.17,18.17,0,0,1-1.12-6.49A29.11,29.11,0,0,1,1869.26,193.66Zm7.61,16.8q2.7,2.92,8,2.93a10.78,10.78,0,0,0,6.19-1.8,16.48,16.48,0,0,0,4.5-4.54,21.36,21.36,0,0,0,2.78-6,22,22,0,0,0,.93-6.08,14.94,14.94,0,0,0-.6-4.27,8.9,8.9,0,0,0-5.06-5.82,11,11,0,0,0-4.54-.86,11.59,11.59,0,0,0-6.45,1.8,16.35,16.35,0,0,0-4.65,4.54,20.61,20.61,0,0,0-2.81,6,23.25,23.25,0,0,0-.94,6.3A10.93,10.93,0,0,0,1876.87,210.46Z"
        }), n().createElement("path", {
            d: "M1923.52,179.34l-1.2,5.85h.15a15.14,15.14,0,0,1,6.08-5.07,18.35,18.35,0,0,1,7.72-1.68c3.65,0,6.37.8,8.14,2.4s2.66,4.12,2.66,7.57a23.49,23.49,0,0,1-.3,3.3c-.2,1.35-.47,2.78-.82,4.28l-4.73,22.12h-6.37l5-22.65c0-.4.12-.86.22-1.39s.2-1.07.3-1.65.19-1.12.27-1.65a10.28,10.28,0,0,0,.11-1.31,4.59,4.59,0,0,0-2-4.09,8.44,8.44,0,0,0-4.8-1.31,11.75,11.75,0,0,0-5.22,1.28,14.81,14.81,0,0,0-4.38,3.22,10.53,10.53,0,0,0-2.7,3.64,26.79,26.79,0,0,0-1.58,4.46l-4.5,21.45h-6.3l8.1-38.77Z"
        })))
          , F = () => n().createElement("div", {
            className: "print:hidden bg-primary-blue dark:bg-primary-blue/80 text-white dark:text-gray-200"
        }, n().createElement("div", {
            className: "main-width leading-none py-4"
        }, n().createElement("a", {
            href: "https://www.ncbi.nlm.nih.gov/",
            className: "inline-block hover:text-blue-100",
            "data-ga-action": "header-link",
            "data-ga-label": "NIH-NLM-NCBI Link"
        }, n().createElement(H, null), n().createElement("span", {
            className: "sr-only"
        }, "NIH National Library of Medicine NCBI"))));
        var Z = a(4556)
          , q = a.n(Z)
          , U = a(1755)
          , B = a.n(U)
          , V = !1;
        if ("undefined" != typeof window)
            try {
                var W = Object.defineProperty({}, "passive", {
                    get: function() {
                        V = !0
                    }
                });
                window.addEventListener("test", null, W),
                window.removeEventListener("test", null, W)
            } catch (e) {}
        const G = V
          , Y = {
            connections: {},
            EE: new (B()),
            enableResizeInfo: !1,
            enableScrollInfo: !1,
            listeners: {},
            removers: [],
            supportPassiveEvent: G
        };
        var J = Y.supportPassiveEvent
          , K = {
            capture: !1,
            passive: !1
        };
        const Q = function(e, t, a, n) {
            var r = "addEventListener"
              , l = "removeEventListener"
              , o = t
              , i = !!J && q()({}, K, n);
            return !e.addEventListener && e.attachEvent && (r = "attachEvent",
            l = "detachEvent",
            o = "on" + t),
            e[r](o, a, i),
            {
                remove: function() {
                    e[l](t, a)
                }
            }
        };
        var X = !1;
        if ("undefined" != typeof navigator) {
            var ee = navigator.userAgent.match(/MSIE (\d+\.\d+)/);
            ee && (X = parseFloat(ee[1], 10) < 9)
        }
        const te = X;
        var ae = a(1680)
          , ne = a.n(ae)
          , re = a(1741)
          , le = a.n(re)
          , oe = a(4165)
          , ie = a.n(oe)
          , se = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }();
        var ce = {
            width: 0,
            height: 0
        }
          , ue = {
            delta: 0,
            top: 0
        }
          , me = {
            axisIntention: "",
            startX: 0,
            startY: 0,
            deltaX: 0,
            deltaY: 0
        }
          , de = function(e) {
            var t = {
                x: 0,
                y: 0
            }
              , a = document.body
              , n = document.documentElement;
            return e.pageX || e.pageY ? (t.x = e.pageX,
            t.y = e.pageY) : (t.x = e.clientX + a.scrollLeft + n.scrollLeft,
            t.y = e.clientY + a.scrollTop + n.scrollTop),
            t
        };
        const pe = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var a = (t.mainType || "").toLowerCase()
                  , n = (t.subType || "").toLowerCase();
                this.mainType = a,
                this.subType = n,
                this.type = a + n.charAt(0).toUpperCase() + n.slice(1) || "",
                this.scroll = ue,
                this.resize = ce,
                this.touch = me
            }
            return se(e, [{
                key: "update",
                value: function(e) {
                    var t = this.mainType
                      , a = this.subType
                      , n = document.documentElement;
                    if (Y.enableScrollInfo && ("scroll" === t || "touchmove" === t)) {
                        var r = n.scrollTop + document.body.scrollTop;
                        r !== this.scroll.top && (this.scroll.delta = r - this.scroll.top,
                        this.scroll.top = r)
                    }
                    if (Y.enableResizeInfo && "resize" === t && (this.resize.width = window.innerWidth || n.clientWidth,
                    this.resize.height = window.innerHeight || n.clientHeight),
                    Y.enableTouchInfo && e.touches && ("touchstart" === t || "touchmove" === t || "touchend" === t)) {
                        var l = void 0
                          , o = void 0
                          , i = void 0;
                        "touchstart" === t || "start" === a ? (l = de(e.touches[0]),
                        this.touch.axisIntention = "",
                        this.touch.startX = l.x,
                        this.touch.startY = l.y,
                        this.touch.deltaX = 0,
                        this.touch.deltaY = 0) : "touchmove" === t && (l = de(e.touches[0]),
                        this.touch.deltaX = l.x - this.touch.startX,
                        this.touch.deltaY = l.y - this.touch.startY,
                        "" === this.touch.axisIntention && (o = Math.abs(this.touch.deltaX),
                        i = Math.abs(this.touch.deltaY),
                        o > 5 && o >= i ? this.touch.axisIntention = "x" : i > 5 && i > o && (this.touch.axisIntention = "y")))
                    }
                }
            }]),
            e
        }();
        var he = a(6189)
          , fe = a.n(he)
          , ge = Date.now || function() {
            return (new Date).getTime()
        }
        ;
        const be = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15
              , a = void 0
              , n = void 0
              , r = 0
              , l = 0
              , o = function o() {
                var i = ge();
                t - (i - r) <= 0 ? (r = i,
                l = 0,
                e.apply(a, n)) : l = fe()(o)
            };
            return function() {
                a = this,
                n = arguments,
                l || (l = fe()(o))
            }
        };
        var ve = Y.connections
          , ye = Y.EE
          , Ee = Y.listeners
          , we = Y.removers
          , xe = void 0
          , Ne = void 0
          , Ce = void 0
          , ke = 0;
        function _e(e) {
            return e.id || "target-id-" + ke++
        }
        function Ae(e, t, a, n) {
            return ye.on(e, t || ie(), a),
            ve[n = n || e] = (ve[n] || 0) + 1,
            {
                _type: e,
                _cb: t,
                _ctx: a,
                unsubscribe: function() {
                    if (this._type) {
                        ye.removeListener(e, t, a),
                        ve[n]--,
                        0 === ve[n] && (Ee[n].remove(),
                        Ee[n] = void 0),
                        this._type = void 0,
                        this._cb = void 0,
                        this._ctx = void 0;
                        for (var r = we.length - 1; r >= 0; r--) {
                            if (we[r] === this) {
                                we.splice(r, 1);
                                break
                            }
                        }
                    }
                }
            }
        }
        function Se(e, t, a) {
            return function(n, r, l, o) {
                var i = l.context
                  , s = l.target
                  , c = s && _e(s)
                  , u = c ? ":" + c : ""
                  , m = t + "Start:" + n + u
                  , d = t + "End:" + n + u
                  , p = t + ":" + n + u
                  , h = Ae(a + ":" + n + u, r, i, p);
                if (we.push(h),
                Ee[p])
                    return h;
                var f = {
                    start: new pe({
                        mainType: t,
                        subType: "start"
                    }),
                    main: new pe({
                        mainType: t
                    }),
                    end: new pe({
                        mainType: t,
                        subType: "end"
                    })
                };
                "raf" === n ? (n = 16,
                v = be(v)) : n > 0 && (v = le()(v, n));
                var g = void 0;
                function b(e) {
                    f.end.update(e),
                    ye.emit(d, e, f.end),
                    g = null
                }
                function v(e) {
                    g || (f.start.update(e),
                    ye.emit(m, e, f.start)),
                    clearTimeout(g),
                    f.main.update(e),
                    ye.emit(p, e, f.main),
                    g = te ? setTimeout((function() {
                        b(ne()(e))
                    }
                    ), n + 100) : setTimeout(b.bind(null, e), n + 100)
                }
                return Ee[p] = Q(s || e, t, v, o),
                h
            }
        }
        function Le(e, t) {
            return function(a, n, r, l) {
                var o = r.context
                  , i = r.target
                  , s = i && _e(i)
                  , c = t + ":0" + (s ? ":" + s : "")
                  , u = Ae(c, n, o);
                if (we.push(u),
                Ee[c])
                    return u;
                var m = new pe({
                    mainType: t
                });
                return Ee[c] = Q(i || e, t, (function(e) {
                    m.update(e),
                    ye.emit(c, e, m)
                }
                ), l),
                u
            }
        }
        "undefined" != typeof window && (Ce = (xe = (Ne = window).document || document).body);
        const Me = {
            scrollStart: Se(Ne, "scroll", "scrollStart"),
            scrollEnd: Se(Ne, "scroll", "scrollEnd"),
            scroll: Se(Ne, "scroll", "scroll"),
            resizeStart: Se(Ne, "resize", "resizeStart"),
            resizeEnd: Se(Ne, "resize", "resizeEnd"),
            resize: Se(Ne, "resize", "resize"),
            visibilitychange: Le(xe, "visibilitychange"),
            touchmoveStart: Se(Ce, "touchmove", "touchmoveStart"),
            touchmoveEnd: Se(Ce, "touchmove", "touchmoveEnd"),
            touchmove: Se(Ce, "touchmove", "touchmove"),
            touchstart: Le(Ce, "touchstart"),
            touchend: Le(Ce, "touchend")
        };
        const Te = function(e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , n = a.useRAF || !1
              , r = parseInt(a.throttleRate, 10)
              , l = a.eventOptions;
            return isNaN(r) && (r = 50),
            n && (r = "raf"),
            te && (r = 0),
            Y.enableScrollInfo = Y.enableScrollInfo || a.enableScrollInfo || !1,
            Y.enableResizeInfo = Y.enableResizeInfo || a.enableResizeInfo || !1,
            Y.enableTouchInfo = Y.enableTouchInfo || a.enableTouchInfo || !1,
            Me[e](r, t, a, l)
        };
        Y.removers;
        var Pe = "undefined" != typeof window;
        function Oe() {
            0
        }
        var Re = Pe ? Te : Oe;
        const Ie = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, n().createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            }))
        }
        ;
        Ie.defaultProps = {
            className: "size-6 inline-block"
        };
        const je = e => {
            let {isEnabled: a, topTrigger: r, title: l, menu: i, isFullScreen: s, isCompact: c, toolbarClassName: u} = e;
            const [{top: m}] = ( () => {
                const [e,a] = (0,
                t.useState)({
                    top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
                    left: window.pageXOffset || 0
                })
                  , [n,r] = (0,
                t.useState)(!1);
                function l(e, t) {
                    a({
                        top: t.scroll.top,
                        left: t.scroll.left
                    })
                }
                function o(e, t) {
                    r(!0)
                }
                function i(e, t) {
                    r(!1)
                }
                return (0,
                t.useEffect)(( () => {
                    const e = Re("scroll", l, {
                        useRAF: !0,
                        enableScrollInfo: !0
                    })
                      , t = Re("scrollStart", o, {
                        useRAF: !1
                    })
                      , a = Re("scrollEnd", i, {
                        useRAF: !1
                    });
                    return function() {
                        e && e.unsubscribe(),
                        t && t.unsubscribe(),
                        a && a.unsubscribe()
                    }
                }
                ), []),
                [e, n]
            }
            )()
              , [d,p] = (0,
            t.useState)(!1);
            return (0,
            t.useEffect)(( () => {
                !d && m > r && (C.event({
                    action: "scroll",
                    label: "Scrolled a little bit"
                }),
                p(!0))
            }
            ), [m, r]),
            a && m > r ? n().createElement("div", {
                className: "sticky-bar print:hidden fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 dark:border-b dark:border-gray-800 py-1 shadow-lg"
            }, n().createElement("div", {
                className: "main-width" + (s ? " fullscreen" : "")
            }, n().createElement("div", {
                className: "flex flex-nowrap items-center max-w-full"
            }, !s && n().createElement("a", {
                href: o,
                className: "leading-none flex-none " + (c ? "w-8" : "w-32"),
                "data-ga-action": "sticky-bar-link",
                "data-ga-label": "Sticky Bar: Logo Link"
            }, c ? n().createElement(T, null) : n().createElement(P, null), n().createElement("span", {
                className: "sr-only"
            }, "PubChem")), l || null, n().createElement("div", {
                className: `text-right whitespace-nowrap ${u}`
            }, i || null, n().createElement("button", {
                className: "pc-gray-button flex-none text-center",
                onClick: e => {
                    window && window.scrollTo(0, 0)
                }
                ,
                title: "Go to top",
                "data-ga-action": "go-top-button",
                "data-ga-label": "Go to top"
            }, n().createElement(Ie, null), n().createElement("div", {
                className: "text-3xs leading-none sm:text-xs"
            }, "TOP")))))) : null
        }
        ;
        je.defaultProps = {
            isEnabled: !0,
            topTrigger: 500,
            isFullScreen: !1,
            isCompact: !1,
            toolbarClassName: "flex-1"
        };
        const De = (e, a) => {
            (0,
            t.useEffect)(( () => {
                const t = t => {
                    e && e.current && !e.current.contains(t.target) && !e.current.contains(t.currentTarget) && a(t)
                }
                ;
                return document.addEventListener("mousedown", t),
                document.addEventListener("touchstart", t),
                () => {
                    document.removeEventListener("mousedown", t),
                    document.removeEventListener("touchstart", t)
                }
            }
            ), [e, a])
        }
          , $e = e => {
            const {containerClassName: a, id: r, children: l, icon: o, iconRight: i, showText: s, buttonClassName: c, label: u, title: m, menuAlign: d, menuTitle: p, trackAction: h, trackLabel: f} = e
              , g = (0,
            t.useRef)(null)
              , [b,v] = (0,
            t.useState)(!1);
            return De(g, ( () => v(!1))),
            n().createElement("div", {
                ref: g,
                className: `relative ${a}`
            }, n().createElement("button", {
                className: c,
                id: r,
                title: m,
                onClick: e => {
                    v(!0)
                }
                ,
                "aria-haspopup": "true",
                "aria-expanded": b,
                "data-ga-action": `${h}-open`,
                "data-ga-label": `${f} Open`
            }, o, n().createElement("span", {
                className: s ? "btn-text" + (c.match(/flex/i) && o && i ? " flex-1" : "") : "sr-only"
            }, u), i), b && n().createElement("div", {
                className: "absolute top-0 min-w-full z-10 shadow pc-gray-border bg-gray-50 dark:bg-gray-900 " + ("right" === d ? "right-0 ml-auto" : "left-0 mr-auto"),
                "aria-labelledby": r
            }, n().createElement("div", {
                className: "flex flex-nowrap gap-2 items-center w-full p-2 pc-heading-text pc-gray-border-b"
            }, n().createElement("div", {
                className: "flex-1 whitespace-nowrap uppercase px-2 text-left"
            }, p || u), n().createElement("button", {
                autoFocus: !0,
                onClick: e => {
                    v(!1)
                }
                ,
                "data-ga-action": `${h}-close`,
                "data-ga-label": `${f} Close`
            }, n().createElement($, null))), n().createElement("div", {
                className: "max-w-screen whitespace-nowrap"
            }, l)))
        }
        ;
        $e.defaultProps = {
            containerClassName: "inline-block",
            menuAlign: "right",
            showText: !0,
            buttonClassName: "pc-gray-button pc-icon-button",
            trackAction: "popup-menu",
            trackLabel: "Popup Menu"
        };
        let ze = 0;
        function He() {
            return ze++ + ""
        }
        const Fe = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "currentColor",
                viewBox: "0 0 24 24"
            }, n().createElement("path", {
                d: "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
            }))
        }
        ;
        Fe.defaultProps = {
            className: "size-6 inline-block"
        };
        const Ze = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "currentColor",
                viewBox: "0 0 24 24"
            }, n().createElement("path", {
                d: "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z"
            }))
        }
        ;
        Ze.defaultProps = {
            className: "size-6 inline-block"
        };
        const qe = e => {
            let {label: a, options: r, selectedOption: l, onChange: o, trackAction: i, trackLabel: s, isDisabled: c, className: u, containerClassName: m, isTabStyle: d, isButtonStyle: p} = e;
            (0,
            t.useMemo)(( () => "radiogroup-" + He()), []);
            const [h,f] = (0,
            t.useState)("object" === l ? l.name : l);
            return (0,
            t.useEffect)(( () => {
                f("object" === l ? l.name : l)
            }
            ), [l]),
            n().createElement("div", {
                className: m
            }, a && n().createElement("div", {
                className: "block text-left text-sm mb-1"
            }, a), n().createElement("div", {
                role: "radiogroup",
                className: u
            }, r.map((e => {
                const t = "object" == typeof e ? e.name : e
                  , a = "object" == typeof e ? e.display_name || e.name : e
                  , l = String(t) === String(h);
                return n().createElement("div", {
                    key: String(t),
                    className: "sm:flex sm:items-center"
                }, n().createElement("div", {
                    className: "flex-none"
                }, n().createElement("button", {
                    type: "button",
                    className: d ? "border-b-4 px-2 " + (l ? "border-theme" : "border-transparent") : p ? "shadow " + (l ? "pc-checked-button h-10" : "pc-unchecked-button h-10") : "flex space-x-1 items-center m-1 px-1 text-sm leading-6",
                    role: "radio",
                    "aria-checked": String(t) === String(h),
                    name: String(t),
                    onClick: e => {
                        const t = e.currentTarget.getAttribute("name");
                        f(t),
                        o && o(t)
                    }
                    ,
                    "data-ga-action": i,
                    "data-ga-label": s + ": " + t,
                    disabled: t === h || c,
                    "aria-disabled": t === h || c
                }, !d && !p && 1 !== r.length && (l ? n().createElement(Ze, null) : n().createElement(Fe, null)), n().createElement("span", {
                    className: "inline-block"
                }, a))), e.explanation && n().createElement("div", {
                    className: "text-xs pt-0 pb-4 sm:pt-1 sm:pb-1 pl-4 sm:pl-0"
                }, "(", e.explanation, ")"))
            }
            ))))
        }
        ;
        qe.defaultProps = {
            trackAction: "radio-select",
            trackLabel: "Radio Select",
            isDisabled: !1,
            className: "",
            containerClassName: "",
            isTabStyle: !1,
            isButtonStyle: !1
        };
        const Ue = e => {
            let {className: a, showTitle: r} = e;
            const [l,o] = (0,
            t.useState)(localStorage.mode || "system");
            return (0,
            t.useEffect)(( () => {
                const e = function() {
                    o(localStorage.mode || "system")
                };
                return window.addEventListener("storage", e),
                () => {
                    window.removeEventListener("storage", e)
                }
            }
            ), []),
            n().createElement("div", {
                className: a
            }, r && n().createElement("h2", {
                className: "mb-2 uppercase"
            }, "Appearance"), n().createElement(qe, {
                label: "SWITCH THEME",
                options: [{
                    name: "light",
                    display_name: "Light Mode"
                }, {
                    name: "dark",
                    display_name: "Dark Mode"
                }, {
                    name: "system",
                    display_name: "System (Recommended)"
                }],
                selectedOption: l,
                onChange: e => {
                    localStorage.setItem("mode", e),
                    o(e),
                    "system" === e ? window.matchMedia("(prefers-color-scheme: dark)").matches ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark") : "dark" === e ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
                }
            }))
        }
        ;
        Ue.defaultProps = {
            className: "pl-4 pc-gray-border-l",
            showTitle: !0
        };
        var Be = a(5206);
        function Ve() {
            window.IS_WIDGET || document.body.classList.remove("has-modal", "has-scroll-width")
        }
        const We = e => {
            let {modalTargetId: a="root-modal", className: r="", containerClassName: l="bg-white dark:bg-gray-800", bodyClassName: o="p-4", footerClassName: i="p-4", isOpen: s=!1, onClose: c, title: u, children: m, footer: d, trackAction: p, trackLabel: h} = e;
            const f = (0,
            t.useMemo)(( () => {
                try {
                    const e = document.getElementById(a) || document.body
                      , t = document.createElement("div");
                    return e.appendChild(t),
                    t
                } catch (e) {
                    return null
                }
            }
            ), [a]);
            return (0,
            t.useEffect)(( () => {
                s ? window.IS_WIDGET || (document.documentElement.style.setProperty("--scrollbar-width", window.innerWidth - document.documentElement.clientWidth + "px"),
                document.body.classList.add("has-modal", "has-scroll-width")) : (c(),
                Ve())
            }
            ), [s]),
            (0,
            t.useEffect)(( () => () => {
                Ve(),
                f?.remove()
            }
            ), [f]),
            f && s ? (0,
            Be.createPortal)(n().createElement("div", {
                onClick: e => {
                    "overlay" === e.target.className && c()
                }
            }, n().createElement("div", {
                className: "scrollbar-placeholder"
            }), n().createElement("div", {
                className: "overlay"
            }, n().createElement("div", {
                className: `modal ${r}`,
                role: "dialog",
                "aria-labelledby": `${p}-title`
            }, n().createElement("div", {
                className: l
            }, n().createElement("div", {
                className: "modal-title flex flex-nowrap items-center uppercase"
            }, n().createElement("div", {
                id: `${p}-title`,
                className: "flex-1 px-4"
            }, u), n().createElement("button", {
                className: "mx-2 rounded-full",
                onClick: c,
                "data-ga-action": `${p}-close`,
                "data-ga-label": `${h} Close`,
                autoFocus: !0
            }, n().createElement($, null), n().createElement("span", {
                className: "sr-only"
            }, "Close"))), n().createElement("div", {
                className: "modal-scrollable pc-gray-border-t"
            }, n().createElement("div", {
                className: o
            }, m)), d && n().createElement("div", {
                className: i
            }, d))))), f) : null
        }
          , Ge = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "currentColor",
                viewBox: "0 0 24 24"
            }, n().createElement("path", {
                d: "M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z"
            }))
        }
        ;
        Ge.defaultProps = {
            className: "size-6 inline-block"
        };
        const Ye = e => {
            let {type: t, message: a, showTitle: r} = e;
            return a ? n().createElement("div", {
                className: `status-message ${t}`
            }, r && n().createElement("h2", {
                className: "capitalize font-bold text-2xl mb-2"
            }, t), n().createElement("div", {
                className: "whitespace-pre-line overflow-x-auto"
            }, a)) : null
        }
        ;
        Ye.defaultProps = {
            type: "error",
            message: "",
            showTitle: !1
        };
        const Je = e => {
            let {seedSmiles: a="", buttonClassName: r="text-sm flex w-full justify-center items-center gap-1 pc-gray-button", showText: l=!1, icon: o=n().createElement(Ge, {
                className: "size-6 sm:size-9"
            }), valueCallback: i} = e;
            const [s,c] = (0,
            t.useState)(a)
              , [u,m] = (0,
            t.useState)(!1)
              , d = () => {
                i ? i(s) : s && (window.location = `#query=${s}`),
                m(!1)
            }
            ;
            return (0,
            t.useEffect)(( () => {
                window.transferSmiles = e => {
                    c(e)
                }
            }
            ), []),
            n().createElement("div", null, n().createElement("button", {
                id: "sketcher-open-btn",
                title: a ? "Edit Structure" : "Draw Structure",
                className: r,
                onClick: e => {
                    e.preventDefault(),
                    m(!0)
                }
                ,
                "data-ga-action": "sketcher-open",
                "data-ga-label": a ? "Edit Structure Modal Open" : "Draw Structure Modal Open"
            }, o, n().createElement("span", {
                className: "sr-only" + (l ? " md:not-sr-only" : "")
            }, a ? "Edit" : "Draw")), n().createElement(We, {
                isOpen: u,
                onClose: d,
                containerClassName: "bg-[#dadada]",
                title: "Draw Structure",
                footerClassName: "px-8 pb-8",
                footer: n().createElement("div", {
                    className: "grid grid-flow-col grid-cols-2 gap-2 sm:gap-4"
                }, n().createElement("button", {
                    className: "pc-blue-button w-full",
                    onClick: d
                }, "Done"), n().createElement("button", {
                    className: "pc-gray-button w-full",
                    onClick: () => {
                        m(!1)
                    }
                }, "Cancel")),
                trackAction: "sketcher-modal",
                trackLabel: "Sketcher Modal"
            }, n().createElement("div", {
                className: "m-auto space-y-2"
            }, n().createElement("iframe", {
                src: "/edit3/index.html" + (a ? "?smiles=" + encodeURIComponent(a) : ""),
                seamless: "seamless",
                style: {
                    border: 0,
                    width: "905px",
                    height: "450px"
                }
            }, n().createElement(Ye, {
                type: "error",
                message: "Your browser does not seem to support interactive structure editing capability. Please try another browser..."
            })))))
        }
          , Ke = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 2,
                stroke: "currentColor"
            }, n().createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            }))
        }
        ;
        Ke.defaultProps = {
            className: "size-6 inline-block"
        };
        const Qe = e => {
            const {query: a, isActive: r, keyDown: l, autoCompleteUrl: o, isAutoCompleteSingleColumn: i, termSelectFunction: s, clickOutsideRef: c} = e
              , [u,m] = (0,
            t.useState)(r)
              , [d,p] = (0,
            t.useState)({})
              , [h,f] = (0,
            t.useState)({
                row: void 0,
                col: void 0
            });
            De(c, ( () => {
                m(!1)
            }
            ));
            const g = (0,
            t.useMemo)(( () => `${o}${encodeURIComponent(a)}`), [o, a])
              , {status: b, data: v, error: y, requestUrl: E} = _(a.length > 2 ? g : "", !0);
            return (0,
            t.useEffect)(( () => {
                if (!a || a.length < 3)
                    p({});
                else if ("fetched" === b && E === g && v)
                    try {
                        const e = v.dictionary_terms || {};
                        if (i) {
                            const t = new RegExp(a,"i")
                              , n = Object.keys(e)
                              , r = []
                              , l = 10;
                            let o = 0;
                            for (let a = 0; a < n.length; a++)
                                for (let i = 0; i < e[n[a]].length && o < l; i++)
                                    e[n[a]][i].match(t) && r.indexOf(e[n[a]][i]) < 0 && (o++,
                                    r.push(e[n[a]][i]));
                            p(r.length ? {
                                composite: r
                            } : {})
                        } else
                            p(e)
                    } catch (e) {}
            }
            ), [b, v, a, i]),
            (0,
            t.useEffect)(( () => {
                try {
                    let e = h.row
                      , t = h.col || 0
                      , a = Object.keys(d);
                    if ("enter" === l)
                        if (void 0 === h.row || void 0 === h.col)
                            m(!1);
                        else {
                            let n = d[a[t]][e];
                            s(n, a[t]),
                            m(!1),
                            p({})
                        }
                    else if ("none" !== l) {
                        switch (l) {
                        case "arrowDown":
                            void 0 === e ? e = 0 : e++;
                            break;
                        case "arrowUp":
                            e > 0 ? e-- : e = void 0;
                            break;
                        case "arrowLeft":
                            void 0 !== e && (t = t ? t - 1 : 0);
                            break;
                        case "arrowRight":
                            void 0 !== e && (t = t + 1 < a.length ? t + 1 : t)
                        }
                        let n = d[a[t]].length;
                        e = e > n - 1 && n > 0 ? n - 1 : e,
                        f({
                            row: e,
                            col: t
                        })
                    }
                } catch (e) {
                    w(`Exception caught in Autocomplete arrow key navigation: ${e.message}`)
                }
            }
            ), [l, d]),
            (0,
            t.useEffect)(( () => {
                r ? m(!0) : f({
                    row: void 0,
                    col: void 0
                })
            }
            ), [r]),
            (0,
            t.useEffect)(( () => {
                if (!i)
                    try {
                        if (void 0 !== h.row && void 0 !== h.col) {
                            document.getElementById(`autocomplete_col${h.col}_row${h.row}`).scrollIntoView({
                                behavior: "smooth",
                                block: "nearest",
                                inline: "center"
                            })
                        }
                    } catch (e) {}
            }
            ), [i, h.col, h.row]),
            n().createElement("div", {
                className: "relative w-full"
            }, u && a.length > 2 && n().createElement("div", {
                className: "absolute z-10 top-0 left-0 w-full "
            }, Object.keys(d).length > 0 && n().createElement("div", {
                className: `w-full max-w-full py-2 overflow-x-auto pc-neutral-background pc-gray-border shadow-xl${i ? "" : " px-2 flex flex-nowrap gap-4"}${"fetching" === b ? " updating" : ""}`
            }, Object.keys(d).map(( (e, t) => n().createElement("div", {
                key: t,
                className: i ? "" : "flex-1"
            }, !i && n().createElement("div", {
                className: "capitalize font-medium text-xl border-b-4 border-theme"
            }, e), n().createElement("ul", {
                className: "list-none space-y-2 " + (i ? "" : " my-4")
            }, d[e].map(( (a, r) => n().createElement("li", {
                id: `autocomplete_col${t}_row${r}`,
                key: r,
                className: "" + (t === h.col && r === h.row ? " bg-theme-lightest" : "")
            }, n().createElement("button", {
                className: "font-normal block px-2 text-left whitespace-nowrap",
                onClick: () => {
                    m(!1);
                    s(a, e),
                    p({})
                }
            }, a)))))))))))
        }
        ;
        Qe.defaultProps = {
            query: "",
            isActive: !1,
            keyDown: "none",
            isAutoCompleteSingleColumn: !0
        };
        const Xe = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "currentColor",
                viewBox: "0 0 24 24"
            }, n().createElement("path", {
                d: "M5,20h14v-2H5V20z M5,10h4v6h6v-6h4l-7-7L5,10z"
            }))
        }
        ;
        function et(e) {
            return e ? e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : e
        }
        Xe.defaultProps = {
            className: "size-6 inline-block"
        };
        var tt = a(2098);
        const at = e => {
            let {className: a, label: r, id: l, accept: o, fileEncoding: i, parserOptions: s, disabled: c, onFileLoaded: u, onError: m, onReset: d} = e;
            const p = (0,
            t.useRef)(null);
            return n().createElement("form", {
                onReset: () => {
                    d && d(),
                    p.current.value = ""
                }
            }, n().createElement("div", {
                className: a
            }, r && n().createElement("label", {
                htmlFor: l,
                className: "text-sm"
            }, r), n().createElement("div", {
                className: "flex w-full items-center p-1 pc-gray-border"
            }, n().createElement("div", {
                className: "flex-1"
            }, n().createElement("input", {
                ref: p,
                type: "file",
                id: l,
                accept: o,
                onChange: e => {
                    let t = new FileReader;
                    const a = e.target.files;
                    if (a.length > 0) {
                        const e = {
                            name: a[0].name,
                            size: a[0].size,
                            type: a[0].type
                        };
                        t.onload = a => {
                            const n = tt.parse(t.result, Object.assign({}, s, {
                                error: m,
                                encoding: i
                            }));
                            u(n ? n.data : [], e.name)
                        }
                        ,
                        t.readAsText(a[0], i)
                    }
                }
                ,
                disabled: c
            })), p && p.current && p.current.value && n().createElement("button", {
                tabIndex: -1,
                className: "pc-minimal-button",
                type: "reset",
                value: "Reset",
                title: "Reset",
                "data-ga-action": "file-reset-button",
                "data-ga-label": "File Reset Button"
            }, n().createElement("span", {
                className: "sr-only"
            }, "Clear"), n().createElement($, null)))))
        }
        ;
        at.defaultProps = {
            className: "",
            label: "Select a file",
            accept: ".csv, text/csv",
            fileEncoding: "UTF-8",
            parserOptions: {},
            disabled: !1
        };
        const nt = "National Center for Biotechnology Information"
          , rt = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."]
          , lt = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
          , ot = "history";
        const it = "localStorage";
        let st;
        const ct = {
            isAvailable: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : it;
                try {
                    if (void 0 === st) {
                        let t = window[e]
                          , a = "__storage_test__";
                        t.setItem(a, a),
                        t.removeItem(a),
                        st = !0
                    }
                } catch (t) {
                    ct.isQuotaExceeded(t) && (st = ct.clear("localStorage") && ct.clear("sessionStorage")),
                    C.event({
                        action: "storage-error",
                        label: "Storage Error: " + e + " Message=" + t.message + " Status after clearing: false"
                    })
                } finally {
                    return st
                }
            },
            isQuotaExceeded(e) {
                let t = !1;
                if (e && e.code)
                    switch (e.code) {
                    case 22:
                        t = !0;
                        break;
                    case 1014:
                        "NS_ERROR_DOM_QUOTA_REACHED" === e.name && (t = !0)
                    }
                return t
            },
            setItem: function(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : it
                  , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                  , r = !1;
                try {
                    if (this.isAvailable(a)) {
                        window[a].setItem(e, t),
                        r = !0
                    }
                } catch (l) {
                    r = !1;
                    const o = "Exception caught in" + a;
                    w(o),
                    w("Retrieving " + e),
                    w(l.message),
                    w(o);
                    try {
                        if (String(l.message).match(/quota/i) && !n && ct.clear(a))
                            return ct.setItem(e, t, a, 1)
                    } catch (e) {}
                } finally {
                    return r
                }
            },
            getItem: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : it;
                try {
                    if (this.isAvailable(t)) {
                        return window[t].getItem(e)
                    }
                } catch (e) {
                    return !1
                }
            },
            removeItem: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : it;
                if (this.isAvailable(t)) {
                    window[t].removeItem(e)
                }
            },
            clear: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : it
                  , t = !1;
                try {
                    let a = window[e]
                      , n = Object.keys(a);
                    for (let e = 0; e < n.length; e++)
                        n[e].match(/^sources|^ptable|^autocomplete|^sdq_|^pugview_'|^pugrest_'|^structure_|^blog_/) && (w("deleting " + n[e]),
                        a.removeItem(n[e]));
                    t = !0
                } finally {
                    return t
                }
            },
            clear_all: function() {
                window[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : it].clear()
            }
        }
          , ut = "localStorage"
          , mt = {
            init: function() {
                ct.getItem(ot, "localStorage") || ct.setItem(ot, JSON.stringify([]), ut)
            },
            clearStorage: function() {
                ct.clear(ut)
            },
            clear: function() {
                ct.setItem(ot, JSON.stringify([]), ut)
            },
            get: function() {
                let e = [];
                try {
                    const t = JSON.parse(ct.getItem(ot, ut)) || [];
                    let a = Date.now();
                    e = t.filter((e => 8 - (a - e.timestamp) / 36e5 > 0))
                } catch (e) {
                    w(`Exception caught in History.get(): ${e.message}`)
                }
                return e
            },
            removeItem: function(e) {
                const t = mt.get() || [];
                for (let a = 0; a < t.length; a++)
                    if (e === t[a].url) {
                        t.splice(a, 1);
                        break
                    }
                ct.setItem(ot, JSON.stringify(t), ut)
            },
            addItem: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , a = {
                    success: !0,
                    isSkipped: !1
                };
                w(`History.addItem: ${e} ${t.name}`);
                const n = mt.get();
                for (let r = 0; r < n.length; r++)
                    if (e === n[r].url) {
                        t.cachekey !== n[r].details.cachekey ? (t.name = n[r].details.name,
                        n.splice(r, 1)) : (a.isSkipped = !0,
                        w("Skipping..."));
                        break
                    }
                return a.isSkipped || (n.unshift({
                    url: e,
                    details: t,
                    timestamp: Date.now()
                }),
                w("This is our new history:"),
                w(n),
                a.success = ct.setItem(ot, JSON.stringify(n), ut)),
                a
            },
            renameItem: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                w(`History.renameItem: ${e} ${t.name}`);
                const a = mt.get();
                for (let n = 0; n < a.length; n++)
                    if (e === a[n].url && t.cachekey === a[n].details.cachekey) {
                        w("Found the URL!"),
                        a[n].details.name = t.name,
                        ct.setItem(ot, JSON.stringify(a), ut);
                        break
                    }
            }
        }
          , dt = e => {
            let {textColorClassName: t} = e;
            return n().createElement("svg", {
                className: "animate-spin size-5 " + t,
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24"
            }, n().createElement("circle", {
                className: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4"
            }), n().createElement("path", {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            }))
        }
        ;
        dt.defaultProps = {
            textColorClassName: "text-theme"
        };
        const pt = e => {
            let {children: t, isLoaded: a, isUpdating: r, isEmpty: l, emptyMessage: o, errorMessage: i, warningMessage: s, showSpinner: c, loaderMessage: u} = e;
            return n().createElement(n().Fragment, null, a || i ? i ? n().createElement(Ye, {
                type: "error",
                message: i,
                showTitle: !0
            }) : l ? n().createElement(Ye, {
                type: "empty",
                message: o
            }) : r ? n().createElement("div", {
                className: "updating"
            }, s && n().createElement(Ye, {
                type: "warning",
                message: s
            }), t) : n().createElement(n().Fragment, null, s && n().createElement(Ye, {
                type: "warning",
                message: s
            }), t) : n().createElement("div", {
                className: "h-[52px] w-full flex flex-col items-center p-4"
            }, n().createElement("div", {
                className: "mt-auto"
            }, u), n().createElement("div", {
                className: "mb-auto"
            }, c && n().createElement(dt, null))))
        }
        ;
        pt.defaultProps = {
            isLoaded: !1,
            isUpdating: !1,
            isEmpty: !1,
            emptyMessage: "Nothing found...",
            errorMessage: "",
            loaderMessage: "",
            showSpinner: !0
        };
        const ht = e => {
            let {fileName: a, data: r, idType: l, setParams: o} = e;
            const [i,c] = (0,
            t.useState)(0)
              , [u,m] = (0,
            t.useState)(null)
              , [d,p] = (0,
            t.useState)("");
            return (0,
            t.useEffect)(( () => {
                m(null),
                p(""),
                c(Date.now()),
                o && o("")
            }
            ), [a, r, l]),
            (0,
            t.useEffect)(( () => {
                if (r && r.length > 0) {
                    const e = i;
                    (function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , a = arguments.length > 2 ? arguments[2] : void 0;
                        const n = {
                            "X-Requested-Sec": "web-api-mdn/10.0"
                        };
                        let r = a;
                        return null !== a && (r = a || "application/json",
                        n["Content-Type"] = r),
                        fetch(e, {
                            method: "POST",
                            mode: "cors",
                            cache: "no-cache",
                            credentials: "same-origin",
                            headers: n,
                            redirect: "follow",
                            referrerPolicy: "no-referrer",
                            body: "application/json" === r && "object" == typeof t ? JSON.stringify(t) : t
                        }).then((t => {
                            const a = t.headers.get("Content-Type");
                            return w(`postData: url=${e}; response_content_type=${a}`),
                            a.match(/text\/plain|chemical\/x-mdl-sdfile/i) ? t.text() : t.json()
                        }
                        )).catch((e => ({
                            error: "Something went wrong trying to retrieve this data from the server..."
                        })))
                    }
                    )(`/list_gateway/list_gateway.cgi?format=json&action=post_to_cache&id_type=${l}`, "ids=" + r.join(","), "application/x-www-form-urlencoded").then((t => {
                        if (e === i)
                            if (t.Response.error)
                                p(t.Response.error);
                            else if (t.Response.cache_key) {
                                const e = {
                                    cachekey: t.Response.cache_key,
                                    cache_id_type: l,
                                    cache_size: t.Response.list_size,
                                    cache_expected_size: t.Response.list_size
                                };
                                m(e),
                                o && o(e.cachekey);
                                const n = `${s}#query=${e.cachekey}`;
                                mt.addItem(n, Object.assign({
                                    name: `${a} [uploaded file]`,
                                    summary: `${a} [uploaded file]`
                                }, e))
                            } else
                                p("Something went wrong trying to upload data to our servers...")
                    }
                    )).catch((t => {
                        e === i && p(t.message)
                    }
                    ))
                }
            }
            ), [a, r, l]),
            n().createElement(pt, {
                isLoaded: u || d,
                errorMessage: d
            }, u && n().createElement("div", null, n().createElement("div", {
                className: "font-medium"
            }, "Uploaded to PubChem servers and saved to history:"), n().createElement("div", {
                className: ""
            }, "List ID: ", u.cachekey), n().createElement("div", {
                className: ""
            }, "List Size: ", u.cache_size)))
        }
          , ft = e => {
            const {idType: a, setParams: r, trackAction: l, trackLabel: o} = e
              , [i,s] = (0,
            t.useState)("")
              , [c,u] = (0,
            t.useState)([])
              , m = (0,
            t.useMemo)(( () => {
                let e = "";
                if (i && c)
                    try {
                        c[0] ? c[0].length > 1 ? e = "Too many columns found... Only a single column containing identifiers should be present." : v[g[a]] || Number.isInteger(Number(c[0][0])) ? !b[g[a]] && Number.isInteger(Number(c[0][0])) && (e = "The format for " + a.toUpperCase() + " identifiers does not appear to be correct...") : e = "Non-integer values found, but " + a.toUpperCase() + " identifiers should be integers... " : e = "The file appears empty or corrupted..."
                    } catch (e) {}
                return e
            }
            ), [i, c, a]);
            return n().createElement("div", {
                className: "space-y-2"
            }, n().createElement(at, {
                id: "id-list-upload",
                label: "Upload a file (one identifier per line)",
                accept: "*.*",
                parserOptions: {
                    skipEmptyLines: !0
                },
                onFileLoaded: (e, t) => {
                    u(e),
                    s(t),
                    console.log(`file loaded: ${t}`)
                }
                ,
                onError: e => {
                    u([]),
                    console.log(`file loading error: ${e.message}`)
                }
                ,
                onReset: () => {
                    u([]),
                    s("")
                }
            }), n().createElement("div", {
                className: ""
            }, i && n().createElement(n().Fragment, null, m && n().createElement(Ye, {
                type: "error",
                showTitle: !0,
                message: m
            }), n().createElement("div", {
                className: "py-2"
            }, c.length > 0 && n().createElement("div", {
                className: "border-l-4 border-theme pl-4"
            }, n().createElement("div", {
                className: "space-y-1"
            }, n().createElement("div", {
                className: "font-medium "
            }, "Preview of ", i), n().createElement("div", {
                className: "text-sm"
            }, "Number of rows: ", et(c.length), " ", c.length > 1e6 ? "( Please consider uploading smaller files since we might have trouble processing such a large data set...)" : ""), n().createElement("div", {
                className: "text-sm"
            }, "Number of columns: ", et(c[0].length))), n().createElement("ul", {
                className: "list-none"
            }, c.slice(0, Math.min(5, c.length)).map(( (e, t) => n().createElement("li", {
                className: "pl-2 whitespace-nowrap text-ellipsis overflow-hidden text-left max-w-full text-sm"
            }, t + 1 + ". " + e))), c.length > 5 && n().createElement("li", {
                className: "ml-2"
            }, "6. ...")))), !m && n().createElement(ht, {
                fileName: i,
                idType: a,
                data: c,
                setParams: r
            }))))
        }
          , gt = e => {
            let {icon: a, buttonClassName: r, showText: l} = e;
            const [o,i] = (0,
            t.useState)(!1);
            return n().createElement("div", null, n().createElement("button", {
                id: "file-upload-open-btn",
                title: "Load from File",
                className: r,
                onClick: e => {
                    e.preventDefault(),
                    i(!0)
                }
                ,
                "data-ga-action": "file-upload-open",
                "data-ga-label": "Load from File Modal Open"
            }, a || n().createElement(Xe, {
                className: "size-6 inline-block"
            }), n().createElement("span", {
                className: "sr-only" + (l ? " md:not-sr-only md:whitespace-nowrap" : "")
            }, "ID File")), o && n().createElement(We, {
                isOpen: o,
                onClose: () => {
                    i(!1)
                }
                ,
                title: "Load from File",
                trackAction: "load-from-file",
                trackLabel: "Load from File: cid"
            }, n().createElement(ft, {
                idType: "cid",
                setParams: e => {
                    w("ID list uploaded")
                }
            })))
        }
        ;
        gt.defaultProps = {
            buttonClassName: "text-sm flex w-full justify-center items-center gap-1 pc-gray-button",
            showText: !1
        };
        var bt = a(8713)
          , vt = a.n(bt);
        const yt = e => {
            let {href: t, target: a, rel: r, trackAction: l, trackLabel: o, className: i, title: s, children: c} = e;
            return t ? n().createElement("a", {
                href: t,
                target: a,
                className: i,
                rel: r,
                "data-ga-action": l,
                "data-ga-label": o,
                title: s
            }, c) : n().createElement(n().Fragment, null, c)
        }
        ;
        yt.defaultProps = {
            href: "",
            className: "regular-link",
            trackAction: "content-link",
            trackLabel: "Content Link",
            rel: "nofollow",
            target: "_parent",
            title: ""
        };
        const Et = [{
            name: "Compounds",
            url: `${c}compound`
        }, {
            name: "Substances",
            url: `${c}substance`
        }, {
            name: "Reference",
            url: `${c}reference`
        }, {
            name: "BioAssays",
            url: `${c}bioassay`
        }, {
            name: "BioActivities",
            url: `${c}bioactivity`
        }, {
            name: "Genes",
            url: `${c}gene`
        }, {
            name: "Proteins",
            url: `${c}protein`
        }, {
            name: "Taxonomies",
            url: `${c}taxonomy`
        }, {
            name: "Pathways",
            url: `${c}pathway`
        }, {
            name: "Cell Lines",
            url: `${c}cell`
        }, {
            name: "Literature",
            url: `${c}literature`
        }, {
            name: "Patents",
            url: `${c}patent`
        }]
          , wt = e => {
            let {label: t, current: a, isCompact: r} = e;
            return n().createElement($e, {
                id: "collection-menu",
                label: t,
                title: "Choose search scope",
                menuAlign: "left",
                showText: !0,
                iconRight: n().createElement(R, {
                    className: (r ? "size-4" : "size-6") + " inline-block"
                }),
                buttonClassName: (r ? "" : "pc-blue-button ") + "pc-icon-button p-1"
            }, n().createElement("div", {
                className: "p-4"
            }, n().createElement("ul", {
                className: "list-none space-y-1"
            }, n().createElement("li", {
                key: "prezero",
                className: "px-1 pb-2 pc-gray-border-b"
            }, n().createElement(yt, {
                href: "/classification/"
            }, "Classifications")), Et.map(( (e, t) => n().createElement("li", {
                key: t,
                className: "p-1" + (e.url.match(a) ? " font-medium bg-theme-lightest" : "")
            }, n().createElement(yt, {
                href: e.url.match(a) ? "" : e.url
            }, e.name)))), n().createElement("li", {
                key: Et.length,
                className: "p-1 pt-2 pc-gray-border-t"
            }, n().createElement(yt, {
                href: "https://www.ncbi.nlm.nih.gov/pccompound"
            }, "Entrez Compound")), n().createElement("li", {
                key: Et.length + 1,
                className: "p-1"
            }, n().createElement(yt, {
                href: "https://www.ncbi.nlm.nih.gov/pcsubstance"
            }, "Entrez Substance")), n().createElement("li", {
                key: Et.length + 2,
                className: "p-1"
            }, n().createElement(yt, {
                href: "https://www.ncbi.nlm.nih.gov/pcassay"
            }, "Entrez BioAssay")))))
        }
        ;
        wt.PropTypes = {
            label: vt().string,
            current: vt().string
        },
        wt.defaultProps = {
            label: "Data Collection",
            current: "none"
        };
        const xt = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "currentColor",
                viewBox: "0 0 24 24"
            }, n().createElement("path", {
                d: "M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3"
            }))
        }
        ;
        xt.defaultProps = {
            className: "size-6 inline-block"
        };
        const Nt = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, n().createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            }))
        }
        ;
        Nt.defaultProps = {
            className: "size-6 inline-block"
        };
        const Ct = [{
            name: "aspirin"
        }, {
            name: "EGFR",
            tab: "gene"
        }, {
            name: "C9H8O4"
        }, {
            name: "57-27-2"
        }, {
            name: "C1=CC=C(C=C1)C=O"
        }, {
            name: "InChI=1S/C3H6O/c1-3(2)4/h1-2H3"
        }, {
            name: "glycolysis",
            tab: "pathway"
        }, {
            name: "homo sapiens",
            tab: "taxonomy"
        }]
          , kt = () => n().createElement("ul", {
            className: "list-none text-sm flex gap-4 flex-wrap whitespace-nowrap overflow-hidden h-10 my-1"
        }, n().createElement("li", {
            key: "label",
            className: "py-2 sm:px-1 text-white"
        }, "Try"), Ct.map((e => n().createElement("li", {
            key: e.name,
            className: "py-2 sm:px-1"
        }, n().createElement("a", {
            href: `#query=${encodeURIComponent(e.name)}${e.tab ? `&tab=${e.tab}` : ""}`,
            className: "py-1 px-2 rounded-full text-white hover:text-blue-100 bg-gray-900/50",
            "data-ga-action": "example-query-link",
            "data-ga-label": "Example Query"
        }, e.name)))))
          , _t = (0,
        t.forwardRef)(( (e, a) => {
            let {externalValue: r, setExternalValue: l, isCompact: o, isHome: i} = e;
            const c = (0,
            t.useRef)(null)
              , [u,m] = (0,
            t.useState)(String(r))
              , [d,p] = (0,
            t.useState)("none")
              , [h,f] = (0,
            t.useState)(!1);
            return (0,
            t.useEffect)(( () => {
                m(String(r))
            }
            ), [r]),
            n().createElement("div", {
                ref: c
            }, n().createElement("div", {
                className: `relative${h ? " shadow-2xl" : ""} pc-neutral-3-background pc-gray-border p-1`
            }, n().createElement("form", {
                role: "search",
                className: "flex flex-nowrap items-center " + (o ? "gap-1" : "gap-4")
            }, n().createElement("div", {
                className: "flex-1 relative"
            }, n().createElement("input", {
                type: "text",
                ref: a,
                id: "pubchem-quick-search",
                autoFocus: i && !r,
                className: i ? "scroll-mt-20 text-base leading-normal placeholder:text-gray-500 dark:placeholder:text-gray-300 lg:text-2xl lg:leading-normal xl:text-3xl xl:leading-normal 2xl:leading-normal block border-0 w-full pl-2 py-1 pr-8 xl:py-2 pc-neutral-3-background focus:outline-none focus:ring-0" : "text-base leading-normal placeholder:text-gray-500 dark:placeholder:text-gray-300 block border-0 w-full pl-2 py-1 pr-8 pc-neutral-3-background focus:outline-none focus:ring-0",
                value: u,
                placeholder: "Search PubChem",
                onChange: e => {
                    m(e.currentTarget.value),
                    e.currentTarget.value || l("")
                }
                ,
                onKeyDown: e => {
                    let t = "none";
                    l && "Enter" === e.key ? (e.preventDefault(),
                    t = "enter",
                    l(e.currentTarget.value),
                    e.currentTarget.blur()) : "ArrowDown" === e.key ? t = "arrowDown" : "ArrowUp" === e.key ? t = "arrowUp" : "ArrowLeft" === e.key ? t = "arrowLeft" : "ArrowRight" === e.key && (t = "arrowRight"),
                    p(t)
                }
                ,
                onKeyUp: e => {
                    p("none")
                }
                ,
                onFocus: e => {
                    f(!0),
                    p("none")
                }
                ,
                onBlur: e => {
                    f(!1),
                    p("none")
                }
            }), u && n().createElement("button", {
                type: "reset",
                className: "pc-minimal-button outline-inner p-px absolute right-0 top-0 h-full",
                onClick: e => {
                    m(""),
                    l(""),
                    a?.current?.focus()
                }
            }, n().createElement($, {
                className: "size-6"
            }), n().createElement("span", {
                className: "sr-only"
            }, "Reset"))), !r && n().createElement(Je, {
                buttonClassName: "pc-minimal-button text-center text-xs",
                showText: !o,
                icon: n().createElement(Ge, {
                    className: "size-6 block m-auto"
                }),
                seedSmiles: r
            }), !r && n().createElement(gt, {
                buttonClassName: "pc-minimal-button text-center text-xs",
                showText: !o,
                icon: n().createElement(Xe, {
                    className: "size-6 block m-auto"
                })
            }), n().createElement("button", {
                type: "submit",
                className: i ? "pc-blue-button outline-inner text-2xl p-2 lg:p-3 xl:p-4" : "pc-blue-button outline-inner",
                onClick: e => {
                    e.preventDefault(),
                    l(u),
                    e.currentTarget.blur(),
                    p("none"),
                    f(!1)
                }
            }, n().createElement(Ke, {
                className: "size-6" + (o ? "" : " md:size-9")
            }), n().createElement("span", {
                className: "sr-only"
            }, "Submit search")))), n().createElement(Qe, {
                query: u,
                isActive: h && !!u,
                keyDown: d,
                autoCompleteUrl: "/rest/autocomplete/compound,gene,taxonomy/",
                isAutoCompleteSingleColumn: !1,
                termSelectFunction: (e, t) => {
                    window.location = `${s}#query=${e.match(/\s/) ? `"${e}"` : e}${t && "compound" !== t ? `&tab=${t}` : ""}`
                }
                ,
                clickOutsideRef: c
            }), i && n().createElement("div", {
                className: "" + (r ? " hidden" : "")
            }, n().createElement(kt, null)), n().createElement("div", {
                className: "space-y-4 xs:space-y-0 xs:flex xs:items-center xs:gap-4 " + (i ? "text-white  " + (r ? "pt-2 text-xs" : "py-8 text-base") : "py-1 text-xs")
            }, n().createElement(wt, {
                label: "Advanced Search",
                isCompact: o || r
            }), n().createElement("div", null, n().createElement(yt, {
                href: "/history",
                className: "pc-icon-button p-1 font-medium"
            }, "Search History", n().createElement(xt, {
                className: (o || r ? "size-4" : "size-6") + " inline-block"
            }))), n().createElement("div", null, n().createElement(yt, {
                href: "/docs/quick-search",
                className: "pc-icon-button p-1 font-medium"
            }, "How to Search", n().createElement(Nt, {
                className: (o || r ? "size-4" : "size-6") + " inline-block"
            })))))
        }
        ));
        _t.defaultProps = {
            externalValue: ""
        };
        const At = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, n().createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M4 6h16M4 12h16M4 18h16"
            }))
        }
        ;
        At.defaultProps = {
            className: "size-6 inline-block"
        };
        const St = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, n().createElement("path", {
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            }))
        }
        ;
        St.defaultProps = {
            className: "size-6 inline-block"
        };
        const Lt = e => {
            let {isHome: a, query: c, isNew: u, activeNavigationTab: d} = e;
            const p = a ? "h1" : "div"
              , h = (0,
            t.useRef)(null)
              , f = !N(`(min-width: ${E})`)
              , g = n().createElement("ul", {
                className: "print:hidden list-none font-medium whitespace-nowrap " + (f ? "divide-y divide-dashed divide-gray-100 dark:divide-gray-700" : "flex-1 px-2" + (a ? "" : " text-sm"))
            }, n().createElement("li", {
                className: `lg:px-2 py-2 lg:py-6 ${"about" === d ? "hidden lg:border-theme lg:border-b-4 lg:bg-theme-lightest" : ""} lg:inline-block`
            }, n().createElement("a", {
                href: r || l ? `${m}about` : "https://pubchem.ncbi.nlm.nih.gov/docs/about",
                className: "block py-px lg:p-2 " + (a & !f ? "text-white hover:text-blue-100" : "hover:text-gray-700 dark:hover:text-blue-100"),
                "data-ga-action": "header-link",
                "data-ga-label": "About Link"
            }, "About")), n().createElement("li", {
                className: `lg:px-2 py-2 lg:py-6 ${"docs" === d ? "hidden lg:border-theme lg:border-b-4 lg:bg-theme-lightest" : ""} lg:inline-block`
            }, n().createElement("a", {
                href: r || l ? m : "https://pubchem.ncbi.nlm.nih.gov/docs",
                className: "block py-px lg:p-2 " + (a & !f ? "text-white hover:text-blue-100" : "hover:text-gray-700 dark:hover:text-blue-100"),
                "data-ga-action": "header-link",
                "data-ga-label": "Docs Link"
            }, "Docs")), n().createElement("li", {
                className: `lg:px-2 py-2 lg:py-6 ${"submit" === d ? "hidden lg:border-theme lg:border-b-4 lg:bg-theme-lightest" : ""} lg:inline-block`
            }, n().createElement("a", {
                href: "https://pubchem.ncbi.nlm.nih.gov/submit/",
                className: "block py-px lg:p-2 " + (a & !f ? "text-white hover:text-blue-100" : "hover:text-gray-700 dark:hover:text-blue-100"),
                "data-ga-action": "header-link",
                "data-ga-label": "Submit Link"
            }, "Submit")), n().createElement("li", {
                className: `lg:px-2 py-2 lg:py-6 ${"contact" === d ? "hidden lg:border-theme lg:border-b-4 lg:bg-theme-lightest" : ""} lg:inline-block`
            }, n().createElement("a", {
                href: r || l ? `${m}contact` : "https://pubchem.ncbi.nlm.nih.gov/docs/contact",
                className: "block py-px lg:p-2 " + (a & !f ? "text-white hover:text-blue-100" : "hover:text-gray-700 dark:hover:text-blue-100"),
                "data-ga-action": "header-link",
                "data-ga-label": "Contact Link"
            }, "Contact")), u && n().createElement("li", {
                className: "lg:px-2 py-4 lg:inline-block"
            }, f ? n().createElement(n().Fragment, null, n().createElement(Ue, {
                className: "",
                showTitle: !1
            })) : n().createElement($e, {
                id: "header-menu",
                label: "Theme Settings",
                title: "Theme Settings",
                icon: n().createElement(St, {
                    className: "size-9"
                }),
                showText: !1,
                buttonClassName: "pc-icon-button p-2 " + (a ? "text-white hover:text-blue-100" : "hover:text-gray-700 dark:hover:text-blue-100"),
                containerClassName: "inline-block align-middle"
            }, n().createElement("div", {
                className: "text-left py-2 px-4 space-y-1"
            }, n().createElement(Ue, {
                className: "",
                showTitle: !1
            })))));
            return n().createElement(n().Fragment, null, n().createElement("div", {
                className: a ? "pc-home-background border-t-4 border-b-4 border-theme" : "pc-gray-border-b"
            }, n().createElement("div", {
                className: "main-width  flex flex-nowrap items-center"
            }, n().createElement("a", {
                href: u ? s : o,
                className: "leading-none flex-initial sm:flex-none py-2" + (a ? " lg:w-60" : ""),
                "data-ga-action": "header-link",
                "data-ga-label": "Logo Link"
            }, n().createElement(P, {
                isHome: a
            }), n().createElement(p, {
                className: "sr-only"
            }, "PubChem")), !f && g, n().createElement("div", {
                className: `print:hidden flex-1 ${u && !f ? "" : "lg:flex-none"} ${f ? "text-right" : "text-left"} whitespace-nowrap font-medium`
            }, !a && n().createElement(n().Fragment, null, u && !f ? n().createElement("div", {
                className: "pt-8"
            }, n().createElement(_t, {
                isHome: a,
                isCompact: !0
            })) : n().createElement("a", {
                href: u ? s : i,
                className: "pc-minimal-button pc-icon-button p-1 hover:text-gray-700 dark:hover:text-blue-100",
                "data-ga-action": "header-link",
                "data-ga-label": "Search PubChem"
            }, n().createElement(Ke, {
                className: "size-12 lg:size-6"
            }), n().createElement("span", {
                className: "leading-normal sr-only lg:not-sr-only lg:whitespace-nowrap"
            }, "Search PubChem"))), f && n().createElement($e, {
                id: "header-menu",
                label: "MENU",
                title: "Menu",
                icon: n().createElement(At, {
                    className: "size-12 lg:size-6"
                }),
                showText: !1,
                buttonClassName: "pc-icon-button p-1 " + (a ? "text-white hover:text-blue-100" : "hover:text-gray-700 dark:hover:text-blue-100")
            }, n().createElement("div", {
                className: "text-left py-2 px-4 space-y-1"
            }, g)))), a && u && n().createElement("div", {
                className: "main-width " + (c ? "pb-8" : "")
            }, n().createElement("div", {
                className: c ? "" : "proportional-pt proportional-pb"
            }, n().createElement("h2", {
                className: "text-white leading-tight font-medium proportional-text-2 proportional-mb-sm" + (c ? " hidden" : "")
            }, "Explore Chemistry"), n().createElement("div", {
                role: "doc-subtitle",
                className: "text-white leading-tight proportional-text proportional-mb-sm" + (c ? " hidden" : "")
            }, "Quickly find chemical information from authoritative sources"), n().createElement(_t, {
                externalValue: c,
                setExternalValue: e => {
                    if (e)
                        window.location = x({
                            query: e
                        }, "");
                    else
                        try {
                            history.pushState("", document.title, `${window.location.pathname}${window.location.search}`),
                            window.dispatchEvent(new HashChangeEvent("hashchange"))
                        } catch (e) {
                            location = "#"
                        }
                }
                ,
                isCompact: f,
                isHome: !0,
                ref: h
            })), n().createElement(je, {
                title: n().createElement("div", {
                    className: "px-4 text-left max-w-full text-sm sm:text-base lg:text-lg flex-1 overflow-hidden"
                }, n().createElement("button", {
                    className: "pc-minimal-button pc-gray-border flex flex-nowrap items-center w-full gap-1",
                    onClick: () => {}
                }, n().createElement(Ke, null), n().createElement("span", {
                    className: "btn-text whitespace-nowrap text-ellipsis overflow-hidden"
                }, c || ""))),
                topTrigger: 500,
                toolbarClassName: "",
                isCompact: f
            }))))
        }
        ;
        Lt.defaultProps = {
            isHome: !1,
            isNew: !1,
            activeNavigationTab: ""
        };
        const Mt = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "currentColor",
                viewBox: "0 0 24 24",
                stroke: "none"
            }, n().createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"
            }))
        }
        ;
        Mt.defaultProps = {
            className: "size-6 inline-block"
        };
        const Tt = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "currentColor",
                viewBox: "0 0 40 40",
                stroke: "none"
            }, n().createElement("path", {
                d: "M6.06736 7L16.8778 20.8991L6.00001 32.2H10.2L18.6 23.1L25.668 32.2H34L22.8 17.5L31.9 7H28.4L20.7 15.4L14.401 7H6.06898H6.06736ZM9.66753 8.73423H12.9327L29.7327 30.4658H26.5697L9.66753 8.73423Z"
            }))
        }
        ;
        Tt.defaultProps = {
            className: "size-6 inline-block"
        };
        const Pt = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, n().createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
            }))
        }
        ;
        Pt.defaultProps = {
            className: "size-6 inline-block"
        };
        const Ot = () => n().createElement("footer", {
            className: "print:hidden"
        }, n().createElement("div", {
            className: "bg-primary-blue dark:bg-primary-blue/80 text-white dark:text-gray:300 pt-6 pb-12"
        }, n().createElement("div", {
            className: "main-width"
        }, n().createElement("div", {
            className: "list-none grid gap-6 grid-cols-1 md:grid-cols-4"
        }, n().createElement("div", {
            className: " md:mx-auto"
        }, n().createElement("div", {
            className: "pb-2"
        }, "Connect with NLM"), n().createElement("ul", {
            className: "flex flex-nowrap space-x-2 list-none"
        }, n().createElement("li", null, n().createElement("a", {
            href: "https://twitter.com/NLM_NIH",
            title: "SM-Twitter",
            className: "size-12 rounded-full border-2 border-white/50 flex items-center justify-center p-2 hover:bg-twitter",
            "data-ga-action": "footer-link",
            "data-ga-label": "NLM Twitter Link",
            target: "_blank"
        }, n().createElement(Tt, null), n().createElement("span", {
            className: "sr-only"
        }, "Twitter"))), n().createElement("li", null, n().createElement("a", {
            href: "https://www.facebook.com/nationallibraryofmedicine",
            title: "SM-Facebook",
            className: "size-12 rounded-full border-2 border-white/50 flex items-center justify-center p-2 hover:bg-facebook",
            "data-ga-action": "footer-link",
            "data-ga-label": "NLM Facebook Link",
            target: "_blank"
        }, n().createElement(Mt, null), n().createElement("span", {
            className: "sr-only"
        }, "Facebook"))), n().createElement("li", null, n().createElement("a", {
            href: "https://www.youtube.com/user/NLMNIH",
            title: "SM-Youtube",
            className: "size-12 rounded-full border-2 border-white/50 flex items-center justify-center p-2 hover:bg-youtube",
            "data-ga-action": "footer-link",
            "data-ga-label": "NLM YouTube Link",
            target: "_blank"
        }, n().createElement(Pt, null), n().createElement("span", {
            className: "sr-only"
        }, "YouTube"))))), n().createElement("address", {
            className: "not-italic md:mx-auto"
        }, n().createElement("a", {
            href: "https://www.google.com/maps/place/8600+Rockville+Pike,+Bethesda,+MD+20894/@38.9959508,-77.101021,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7c95e25765ddb:0x19156f88b27635b8!8m2!3d38.9959508!4d-77.0988323",
            className: "inline-block hover:text-blue-100",
            "data-ga-action": "footer-link",
            "data-ga-label": "NLM Address Link",
            target: "_blank",
            rel: "noopener noreferrer"
        }, "National Library of Medicine ", n().createElement("br", null), "8600 Rockville Pike, Bethesda, MD 20894")), n().createElement("div", {
            className: "space-y-1 md:mx-auto"
        }, n().createElement("a", {
            href: "https://www.nlm.nih.gov/web_policies.html",
            className: "inline-block hover:text-blue-100",
            "data-ga-action": "footer-link",
            "data-ga-label": "Policies Link"
        }, "Web Policies"), n().createElement("br", null), n().createElement("a", {
            href: "https://www.nih.gov/institutes-nih/nih-office-director/office-communications-public-liaison/freedom-information-act-office",
            className: "inline-block hover:text-blue-100",
            "data-ga-action": "footer-link",
            "data-ga-label": "FOIA Link"
        }, "FOIA"), n().createElement("br", null), n().createElement("a", {
            href: "https://www.hhs.gov/vulnerability-disclosure-policy/index.html",
            className: "inline-block hover:text-blue-100",
            "data-ga-action": "footer-link",
            "data-ga-label": "HHS Vulnerability Disclosure Link"
        }, "HHS Vulnerability Disclosure")), n().createElement("div", {
            className: "space-y-1 md:mx-auto"
        }, n().createElement("a", {
            href: "https://support.nlm.nih.gov/",
            className: "inline-block hover:text-blue-100",
            "data-ga-action": "footer-link",
            "data-ga-label": "NLM Support Link"
        }, "Help"), n().createElement("br", null), n().createElement("a", {
            href: "https://www.nlm.nih.gov/accessibility.html",
            className: "inline-block hover:text-blue-100",
            "data-ga-action": "footer-link",
            "data-ga-label": "Accessibility Link"
        }, "Accessibility"), n().createElement("br", null), n().createElement("a", {
            href: "https://www.nlm.nih.gov/careers/careers.html",
            className: "inline-block hover:text-blue-100",
            "data-ga-action": "footer-link",
            "data-ga-label": "Careers Link"
        }, "Careers"))), n().createElement("nav", {
            className: "text-xl leading-none pt-6"
        }, n().createElement("ul", {
            className: "flex justify-start md:justify-center divide-x divide-white divide-opacity-50"
        }, n().createElement("li", {
            className: "pr-2"
        }, n().createElement("a", {
            href: "//www.nlm.nih.gov/",
            className: "hover:text-blue-100",
            "data-ga-action": "footer-link",
            "data-ga-label": "NLM Link"
        }, "NLM")), n().createElement("li", {
            className: "pl-2 pr-2"
        }, n().createElement("a", {
            href: "https://www.nih.gov/",
            className: "hover:text-blue-100",
            "data-ga-action": "footer-link",
            "data-ga-label": "NIH Link"
        }, "NIH")), n().createElement("li", {
            className: "pl-2 pr-2"
        }, n().createElement("a", {
            href: "https://www.hhs.gov/",
            className: "hover:text-blue-100",
            "data-ga-action": "footer-link",
            "data-ga-label": "HHS Link"
        }, "HHS")), n().createElement("li", {
            className: "pl-2"
        }, n().createElement("a", {
            href: "https://www.usa.gov/",
            className: "hover:text-blue-100",
            "data-ga-action": "footer-link",
            "data-ga-label": "USA.gov Link"
        }, "USA.gov")))))))
          , Rt = e => {
            let {isLoading: a, errorMessage: r, isHome: l, query: o, isHiddenOverflow: i, isNew: s, activeNavigationTab: c, children: u} = e;
            return n().createElement(t.Fragment, null, a && n().createElement("div", {
                className: "w-screen h-screen flex items-center"
            }, n().createElement("div", {
                className: "m-auto"
            }, n().createElement(dt, null))), n().createElement("div", {
                className: `relative min-h-screen flex flex-col${a ? " hidden" : ""}${i ? " overflow-x-hidden" : ""}`
            }, n().createElement("header", null, n().createElement(O, null), n().createElement(z, null), n().createElement(F, null), n().createElement(Lt, {
                isHome: l,
                query: o,
                isNew: s,
                activeNavigationTab: c
            })), n().createElement("main", {
                id: "main-content",
                className: "print:border-0 border-b-4 border-theme flex-1"
            }, r ? n().createElement("div", {
                className: "main-width app-wrapper"
            }, n().createElement(Ye, {
                type: "error",
                message: r
            })) : u), n().createElement(Ot, null)))
        }
        ;
        Rt.defaultProps = {
            isLoading: !1,
            errorMessage: "",
            isHome: !1,
            isHiddenOverflow: !1,
            isNew: !1,
            activeNavigationTab: ""
        };
        const It = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, n().createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 5l7 7-7 7"
            }))
        }
        ;
        It.defaultProps = {
            className: "size-6 inline-block"
        };
        const jt = e => {
            const {data: a, className: r} = e;
            return a ? n().createElement("nav", {
                "aria-label": "breadcrumbs",
                className: r
            }, a.map(( (e, a) => n().createElement(t.Fragment, {
                key: a
            }, a > 0 && n().createElement(It, {
                className: "w-3 h-3"
            }), n().createElement(yt, {
                href: e.url,
                className: "regular-link my-1",
                trackAction: "breadcrumbs-link",
                trackLabel: `BreadCrumbs Link: ${e.name}`,
                target: "_parent",
                rel: "follow"
            }, e.name))))) : null
        }
        ;
        jt.defaultProps = {
            data: void 0,
            className: "flex flex-wrap items-center uppercase text-sm gap-1"
        };
        const Dt = (0,
        t.forwardRef)(( (e, a) => {
            const {id: r, isSearch: l, className: o, type: i, autofocus: s, icon: c, externalValue: u, valueCallback: m, onEnter: d, label: p, labelClassName: h, placeholder: f, trackAction: g, trackLabel: b, extraButtons: v, autoCompleteUrl: y, isAutoCompleteSingleColumn: E, termSelectFunction: w} = e
              , x = (0,
            t.useRef)(null)
              , N = a || (0,
            t.useRef)(null)
              , [k,_] = (0,
            t.useState)(u)
              , [A,S] = (0,
            t.useState)("none")
              , [L,M] = (0,
            t.useState)(!1);
            return (0,
            t.useEffect)(( () => {
                _(u)
            }
            ), [u]),
            n().createElement("div", {
                ref: x,
                className: "relative" + (p && !h ? " pt-6" : "")
            }, n().createElement("div", {
                className: `input-wrapper flex flex-nowrap items-center overflow-hidden ${o}`
            }, n().createElement("label", {
                className: "block w-full"
            }, n().createElement("span", {
                className: h || "text-sm absolute top-px left-px text-gray-600 dark:text-gray-300 max-w-full whitespace-nowrap text-ellipsis overflow-hidden"
            }, p), n().createElement("input", {
                ref: N,
                id: r,
                type: i,
                autoFocus: s,
                autoComplete: "off",
                spellCheck: !1,
                className: "form-input text-lg text-gray-600 dark:text-gray-200 block w-full pl-2 py-px border-0 bg-transparent border-transparent focus:outline-none focus:ring-0",
                value: k,
                placeholder: f,
                onChange: e => {
                    const t = e.currentTarget.value;
                    _(t),
                    t ? (d || C.event({
                        action: `${g}`,
                        label: `${b}: ${t}`
                    }),
                    m(t)) : m("")
                }
                ,
                onFocus: e => {
                    M(!0),
                    S("none")
                }
                ,
                onBlur: e => {
                    M(!1),
                    S("none")
                }
                ,
                onKeyDown: e => {
                    let t = "none";
                    d && "Enter" === e.key ? (e.preventDefault(),
                    t = "enter",
                    d(e.currentTarget.value),
                    C.event({
                        action: `${g}-enter`,
                        label: `${b}: ${k}`
                    }),
                    e.currentTarget.blur()) : "ArrowDown" === e.key ? (y && e.preventDefault(),
                    t = "arrowDown") : "ArrowUp" === e.key ? (y && e.preventDefault(),
                    t = "arrowUp") : "ArrowLeft" === e.key ? t = "arrowLeft" : "ArrowRight" === e.key && (t = "arrowRight"),
                    S(t)
                }
                ,
                onKeyUp: e => {
                    S("none")
                }
            })), n().createElement("button", {
                type: "reset",
                tabIndex: -1,
                disabled: !k,
                "aria-disabled": !k,
                className: "p-0.5 text-gray-500 dark:text-gray-300 " + (k ? "" : "invisible"),
                onClick: e => {
                    _(""),
                    m(""),
                    N.current?.focus()
                }
                ,
                "data-ga-action": `${g}-clear-button`,
                "data-ga-label": `${b} Clear Button`
            }, n().createElement($, {
                className: "size-6"
            }), n().createElement("span", {
                className: "sr-only"
            }, "Reset")), v && v, (l || c) && n().createElement("button", {
                type: "submit",
                tabIndex: -1,
                className: "p-1 " + (k ? " bg-theme text-white" : "text-gray-500 dark:text-gray-300"),
                onClick: e => {
                    e.preventDefault(),
                    m && m(k),
                    d && d(k),
                    e.currentTarget.blur()
                }
                ,
                "data-ga-action": `${g}-submit-button`,
                "data-ga-label": `${b}: ${k}`
            }, n().createElement(Ke, null), n().createElement("span", {
                className: "sr-only"
            }, "Submit search"))), y && n().createElement(Qe, {
                autoCompleteUrl: y,
                isAutoCompleteSingleColumn: E,
                query: k,
                isActive: L && !!k,
                keyDown: A,
                termSelectFunction: w,
                clickOutsideRef: x
            }))
        }
        ));
        Dt.defaultProps = {
            isSearch: !1,
            className: "shadow bg-gray-100 dark:bg-gray-800 rounded-sm",
            type: "text",
            autofocus: !1,
            externalValue: "",
            label: "",
            labelClassName: "",
            placeholder: "",
            hint: null,
            trackAction: "input",
            trackLabel: "Input",
            autoCompleteUrl: "",
            isAutoCompleteSingleColumn: !0
        };
        const $t = e => {
            let {title: a} = e;
            if (!a)
                return null;
            const r = (0,
            t.useMemo)(( () => String(a).length), [a]);
            return n().createElement("h1", {
                className: r <= 10 ? "short" : ""
            }, a)
        }
        ;
        function zt(e) {
            if ("string" != typeof e)
                return "";
            let t = e;
            try {
                const a = e.split(/(\W)/g);
                for (let e = 0; e < a.length; e++)
                    a[e] = a[e].charAt(0).toUpperCase() + a[e].slice(1);
                t = a.join("")
            } catch (e) {}
            return t
        }
        $t.defaultProps = {
            title: ""
        };
        const Ht = e => {
            let {richTextString: a} = e;
            if (!a)
                return null;
            const r = (0,
            t.useRef)(null)
              , [l,o] = (0,
            t.useState)("");
            return (0,
            t.useEffect)(( () => {
                l && setTimeout(( () => {
                    o("")
                }
                ), 3e3)
            }
            ), [l]),
            n().createElement("div", {
                className: "flow-root"
            }, n().createElement("div", {
                ref: r,
                className: "inline p-1 rounded-sm" + ("Copied" === l ? " bg-yellow-100 dark:bg-yellow-800" : ""),
                dangerouslySetInnerHTML: {
                    __html: a
                }
            }), n().createElement("div", {
                className: "inline-block float-right text-xs m-2" + ("Copied" === l ? " text-white" : "")
            }, n().createElement("button", {
                className: "w-12 py-1 rounded-sm " + ("Copied" === l ? "bg-theme dark:bg-theme/20 " : "bg-gray-200 dark:bg-gray-200/20"),
                onClick: e => {
                    try {
                        let t = document.createRange();
                        t.selectNode(r.current),
                        window.getSelection().addRange(t);
                        let a = document.execCommand("copy");
                        a ? (o("Copied"),
                        e.currentTarget.blur()) : (w(`Did not succeed in document.execCommand('copy'); ${a}`),
                        o("Try Again"));
                        try {
                            window.removeRange(t)
                        } catch (e) {
                            window.getSelection().removeAllRanges()
                        }
                    } catch (e) {
                        w(`Exception caught in Copy button handler: ${e.message}`)
                    }
                }
                ,
                "data-ga-action": "citation-copy-button",
                "data-ga-label": "Copy Citation: " + a
            }, l || "Copy")))
        }
        ;
        Ht.defaultProps = {
            richTextString: ""
        };
        const Ft = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "currentColor",
                viewBox: "0 0 24 24"
            }, n().createElement("path", {
                d: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
            }), n().createElement("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }))
        }
        ;
        Ft.defaultProps = {
            className: "size-6 inline-block"
        };
        const Zt = e => {
            let {BLOB: a} = e;
            const [r,l] = (0,
            t.useState)(!1)
              , [i,s] = (0,
            t.useState)("");
            (0,
            t.useEffect)(( () => {
                i && setTimeout(( () => {
                    s("")
                }
                ), 3e3)
            }
            ), [i]);
            const c = (0,
            t.useMemo)(( () => {
                const e = {
                    exists: !0,
                    values: []
                };
                let t = o;
                try {
                    const n = function() {
                        const e = document.querySelector('link[rel="canonical"]');
                        return e && e.getAttribute("href")
                    }();
                    n && (t = `${n}${x({
                        datasheet: a.META.datasheet,
                        sid: a.META.sid,
                        cid: a.META.cid
                    }, "")}`),
                    t = '<a href="' + t + '">' + t + "</a>";
                    const r = new Date
                      , l = r.getUTCFullYear()
                      , o = rt[r.getUTCMonth()]
                      , i = lt[r.getUTCMonth()]
                      , s = r.getUTCDate();
                    let c = a.RecordTitle;
                    a.META.UID_TYPE && a.META.UID_VALUE && (c = "PubChem ",
                    "ConceptID" === a.META.UID_TYPE ? c += "Compound Summary for " : a.META.UID_NAME && a.META.PAGE_TYPE && (c += zt(a.META.UID_NAME) + " " + zt(a.META.datasheet || a.META.PAGE_TYPE) + " for "),
                    a.RecordType && "ANID" !== a.META.UID_TYPE && "ConceptID" !== a.META.UID_TYPE && (c += (a.META.UID_TYPE.match(/evidence|patent/i) ? "" : a.RecordType + " ") + (a.RecordNumber || a.RecordAccession)),
                    c += "Bioactivity" !== a.RecordType && a.RecordTitle.length <= 100 && a.META.UID_VALUE !== a.RecordTitle ? `, ${a.RecordTitle}` : "",
                    a.META.UID_SOURCE && (c += ", Source: " + a.META.UID_SOURCE));
                    const u = {
                        type: "APA"
                    };
                    u.citation = nt + " (" + l + "). " + c,
                    u.citation += ". Retrieved " + i + " " + s + ", " + l + " from " + t + ".",
                    e.values.push(u);
                    const m = {
                        type: "AMA"
                    };
                    m.citation = nt + ". " + c,
                    m.citation += ". " + t,
                    m.citation += ". Accessed " + o + " " + s + ", " + l + ".",
                    e.values.push(m);
                    const d = {
                        type: "MLA"
                    };
                    d.citation = nt + '. "' + c + '" ',
                    d.citation += "<i>PubChem</i>, " + t + ". ",
                    d.citation += "Accessed " + s + " " + i + ", " + l + ".",
                    e.values.push(d);
                    const p = {
                        type: "NLM"
                    };
                    p.citation = "PubChem [Internet]. Bethesda (MD): National Library of Medicine (US), " + nt + "; 2004-. ",
                    p.citation += c,
                    p.citation += "; [cited " + l + " " + o + " " + s + "]. ",
                    p.citation += "Available from: " + t,
                    e.values.push(p)
                } catch (e) {}
                return e
            }
            ), [a]);
            return a && a.META && a.RecordTitle ? n().createElement("div", null, n().createElement("button", {
                id: "page-cite-btn",
                className: "text-sm flex w-full justify-center items-center gap-1 pc-gray-button",
                disabled: !!a.META.IS_PREVIEW,
                onClick: () => l(!0),
                "data-ga-action": "citation-info-open",
                "data-ga-label": "Citation Info Open"
            }, n().createElement(Ft, null), "Cite"), r && n().createElement(We, {
                isOpen: r,
                onClose: () => {
                    l(!1)
                }
                ,
                title: "Cite This Page",
                trackAction: "citation-info",
                trackLabel: "Citation Info"
            }, n().createElement(n().Fragment, null, n().createElement("div", {
                className: "inner-links bg-theme-lightest border-l-4 border-theme p-4 space-y-4"
            }, c.values.map((e => n().createElement("div", null, n().createElement("strong", {
                className: "text-lg uppercase mb-1"
            }, e.type), n().createElement(Ht, {
                richTextString: e.citation
            }))))), n().createElement("div", {
                className: "py-2"
            }, "For more information, please refer to ", n().createElement("a", {
                className: "regular-link",
                href: `${m}citation-guidelines`,
                "data-ga-action": "help-link",
                "data-ga-label": "Help Link: PubChemDocs Citation Guidelines"
            }, "PubChem Citation Guidelines"), ".")))) : null
        }
        ;
        Zt.defaultProps = {};
        const qt = e => {
            let {options: a, active: r, hrefRule: l, className: o} = e;
            const i = (0,
            t.useRef)(null)
              , [s,c] = (e => {
                let {root: a=null, rootMargin: n, threshold: r=[0, .75]} = e;
                const [l,o] = (0,
                t.useState)({})
                  , [i,s] = (0,
                t.useState)(null)
                  , c = (0,
                t.useRef)(null);
                return (0,
                t.useEffect)(( () => {
                    c.current && c.current.disconnect(),
                    c.current = new window.IntersectionObserver((e => {
                        let[t] = e;
                        return o(t)
                    }
                    ),{
                        root: a,
                        rootMargin: n,
                        threshold: r
                    });
                    const {current: e} = c;
                    return i && e.observe(i),
                    () => e.disconnect()
                }
                ), [i, a, n, r]),
                [s, l]
            }
            )({
                threshold: [.1, .2, .3, .4, .5, .6, .7, .8, .9]
            })
              , u = !N(`(min-width: ${y})`)
              , [m,d] = (0,
            t.useState)(!1);
            return (0,
            t.useEffect)(( () => {
                c.isIntersecting ? !m && u && (i.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center"
                }),
                d(!0)) : d(!1)
            }
            ), [m, u, c, i.current]),
            n().createElement("ul", {
                ref: s,
                className: `list-none font-medium flex flex-nowrap overflow-x-auto sm:flex-wrap items-center space-x-4 ${o}`
            }, a.map((e => {
                const t = "object" == typeof e ? e.name : e
                  , a = ("object" == typeof e ? e.display_name : e) || t
                  , o = "object" == typeof e ? e.count : "";
                return n().createElement("li", {
                    key: String(t),
                    ref: r === t ? i : null,
                    className: "capitalize text-center whitespace-nowrap border-b-8 lg:px-4 " + (r === t ? "border-theme" : "border-transparent")
                }, r === t || decodeURIComponent(r) === t ? n().createElement("div", {
                    className: "p-1"
                }, a, (o || 0 === o) && n().createElement("div", null, "(", et(o), ")")) : n().createElement("a", {
                    className: "block p-1",
                    href: "inline" === l ? e.href : `${l}${t}`,
                    "data-ga-action": "tabs-link",
                    "data-ga-label": `Tabs Link: ${a}`
                }, a, (o || 0 === o) && n().createElement("div", null, "(", et(o), ")")))
            }
            )))
        }
        ;
        qt.defaultProps = {
            className: "pc-gray-border-b"
        };
        const Ut = e => {
            let {input: a} = e;
            const r = (0,
            t.useMemo)(( () => {
                let e = [];
                try {
                    e = a.split(/\s/);
                    for (let t = 0; t < e.length; t++)
                        e[t] = e[t].replace(/(\d+)$/, "<sup>$1</sup>"),
                        e[t] = e[t].replace("(", '<span class="hidden"> ('),
                        e[t] = e[t].replace(")", ")</span>")
                } catch (e) {}
                return e.join("")
            }
            ), [a]);
            return n().createElement("span", {
                dangerouslySetInnerHTML: {
                    __html: r
                }
            })
        }
        ;
        function Bt(e, t, a) {
            let n = "";
            try {
                "ElectronConfiguration" === a ? n = e[t - 1][a] : e[t - 1][a] && (n = String(e[t - 1][a]).toLowerCase().trim()),
                L[a].translate && L[a].translate[n] && (n = L[a].translate[n])
            } catch (e) {}
            return n
        }
        function Vt(e, t, a) {
            let n, r, l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            try {
                if (r = Bt(e, t, a),
                L[a].color && (n = L[a].color[r]),
                L[a].color_prop) {
                    const l = L[a].color_prop;
                    r = Bt(e, t, l),
                    n = L[l].color[r]
                }
                if (void 0 !== L[a].color_calc && (n = L[a].color_calc(r, t)),
                l && n && n.match(/gradient/i))
                    if (n.match(/radial/i))
                        n = "none";
                    else
                        try {
                            const e = new RegExp(/.*,\s*(rgb.*\(.+\))\s*,.*/i);
                            n = n.match(e)[1] || "none"
                        } catch (e) {
                            n = "none"
                        }
            } catch (e) {}
            return n
        }
        const Wt = e => {
            let {data: a, an: r, property: l, showDetails: o, isCompact: i, isLegend: s} = e;
            const c = (0,
            t.useMemo)(( () => Bt(a, r, l)), [r, l])
              , u = (0,
            t.useMemo)(( () => Vt(a, r, l) || "transparent"), [r, l]);
            return n().createElement("button", {
                className: "block w-full text-center leading-none py-px sm:py-1 print:sm:pb-2 shadow-inner pc-gray-border",
                disabled: s,
                "aria-disabled": s,
                onClick: e => {
                    window.history.replaceState("", document.title, `${window.location.pathname}${window.location.search}${x({
                        popup: r
                    })}`),
                    window.dispatchEvent(new HashChangeEvent("hashchange"))
                }
                ,
                "data-ga-action": "element-info-open",
                "data-ga-label": "Element Info Popup Open",
                style: {
                    background: u
                }
            }, n().createElement("div", {
                className: "w-full xl:flex xl:flex-nowrap xl:items-center xl:px-1"
            }, n().createElement("div", {
                className: "text-center xl:text-left font-medium text-3xs xs:text-xs xl:text-sm 2xl:text-base xl:flex-1 xl:pr-1 " + (s ? "legend-item " + (i ? "legend-item-right" : "legend-item-left") : ""),
                "data-tooltip": "Atomic Number"
            }, r), "AtomicMass" !== l && n().createElement("div", {
                className: "hidden xl:block text-2xs py-1  " + (s ? "legend-item legend-item-right" : "truncate"),
                "data-tooltip": "Atomic Mass, u"
            }, a[r - 1].AtomicMass)), n().createElement("div", {
                className: "font-medium text-3xs xxs:text-2xs xs:text-sm sm:text-base md:text-lg lg:text-xl print:lg:text-2xl xl:text-2xl print:font-bold " + (s ? "legend-item legend-item-right" : ""),
                "data-tooltip": "Symbol"
            }, a[r - 1].Symbol), o && n().createElement("div", {
                className: "hidden lg:block text-3xs xl:text-2xs 2xl:text-xs " + (s ? "legend-item legend-item-left" : "truncate"),
                "data-tooltip": "Name"
            }, a[r - 1].Name), o && "None" !== l && n().createElement(n().Fragment, null, c ? n().createElement("div", {
                className: `hidden lg:block pt-1 ${L[l].isLong ? "text-3xs" : "text-3xs xl:text-2xs"}  ${s ? "legend-item legend-item-right" : "truncate"}`,
                "data-tooltip": M(l)
            }, "ElectronConfiguration" === l ? n().createElement(Ut, {
                input: c
            }) : n().createElement("span", {
                className: "capitalize"
            }, c)) : n().createElement("div", {
                className: "hidden lg:block pt-1 " + (L[l].isLong ? "text-3xs" : "text-2xs")
            }, " ")))
        }
        ;
        Wt.defaultProps = {
            an: 1,
            property: "GroupBlock",
            showDetails: !0,
            isCompact: !1,
            isLegend: !1
        };
        const Gt = e => {
            const {id: a, label: r, options: l, externalSelected: o, selectedCallback: i, className: s, containerClassName: c, labelClassName: u, isDisabled: m, title: d} = e
              , [p,h] = (0,
            t.useState)(o);
            return (0,
            t.useEffect)(( () => {
                h(o)
            }
            ), [o]),
            l ? n().createElement("div", {
                className: c
            }, r && n().createElement("label", {
                for: a,
                className: u
            }, r), n().createElement("select", {
                id: a,
                className: `${s} block w-full max-w-full truncate`,
                onChange: e => {
                    const t = e.currentTarget.value;
                    h(t),
                    i && i(t)
                }
                ,
                disabled: m,
                "aria-disabled": m,
                title: d
            }, l.map((e => {
                const t = "object" == typeof e ? e.name : String(e)
                  , a = "object" == typeof e ? e.display_name || e.name : String(e);
                return n().createElement("option", {
                    value: t,
                    selected: p == t
                }, a || "Please choose one")
            }
            )))) : null
        }
        ;
        Gt.defaultProps = {
            className: "pc-gray-select",
            containerClassName: "inline-block max-w-full",
            label: "",
            labelClassName: "block text-left text-xs uppercase m-1 whitespace-nowrap",
            isDisabled: !1,
            title: ""
        };
        const Yt = e => {
            const {property: a} = e
              , r = (0,
            t.useMemo)(( () => {
                const e = [];
                for (let t = 0; t < S.length; t++)
                    e.push({
                        name: S[t],
                        display_name: M(S[t])
                    });
                return e
            }
            ), []);
            return n().createElement("div", {
                className: "print:hidden text-sm text-center"
            }, n().createElement(Gt, {
                externalSelected: a || S[0],
                options: r,
                selectedCallback: e => {
                    window.location.replace(x({
                        property: e
                    }))
                }
                ,
                id: "select-property",
                label: "Display Property/Trend"
            }))
        }
          , Jt = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, n().createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            }))
        }
        ;
        Jt.defaultProps = {
            className: "size-6 inline-block"
        };
        const Kt = e => {
            let {property: a, className: r} = e;
            const l = (0,
            t.useMemo)(( () => L[a] ? L[a].subPage : null), [a]);
            return l ? n().createElement(yt, {
                href: `${u}${l}/`,
                className: r,
                target: "_blank",
                rel: "follow",
                trackLabel: `Content Link: Property Plot - ${a}`
            }, n().createElement("span", {
                className: "flex-1"
            }, "Plot ", L[L[a].subPageProp || a].name), n().createElement(Jt, null)) : null
        }
        ;
        Kt.defaultProps = {
            property: "AtomicMass",
            className: "print:hidden pc-gray-button pc-icon-button text-sm m-auto"
        };
        const Qt = e => {
            const {data: a, property: r, refContainer: l, refCell: o} = e;
            if (!a || !l || !o)
                return null;
            const i = function() {
                let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                const [a,n] = (0,
                t.useState)({
                    width: window.innerWidth,
                    height: window.innerHeight,
                    isResizing: void 0
                });
                function r(e, t) {
                    (a.width !== t.resize.width || a.width === t.resize.width && a.height === t.resize.height) && n({
                        ...a,
                        isResizing: !0
                    })
                }
                function l(e, t) {
                    (a.width !== t.resize.width || a.width === t.resize.width && a.height === t.resize.height) && n({
                        width: t.resize.width,
                        height: t.resize.height,
                        isResizing: !1
                    })
                }
                return (0,
                t.useEffect)(( () => {
                    const t = Re("resizeStart", r, {
                        enableResizeInfo: !0,
                        useRAF: !1,
                        throttleRate: 0
                    })
                      , a = Re(e ? "resizeEnd" : "resize", l, {
                        enableResizeInfo: !0,
                        useRAF: !0,
                        throttleRate: 16
                    });
                    return function() {
                        t && t.unsubscribe(),
                        a && a.unsubscribe()
                    }
                }
                ), []),
                a
            }(!1)
              , [s,c] = (0,
            t.useState)(null)
              , [u,m] = (0,
            t.useState)(null)
              , [d,p] = (0,
            t.useState)(null);
            return (0,
            t.useEffect)(( () => {
                if (l && l.current) {
                    let e = l.current.getBoundingClientRect();
                    if (c(e),
                    o && o.current) {
                        let t = o.current.getBoundingClientRect();
                        m(t);
                        let a = e.height
                          , n = t.height;
                        p((a - 4 * n) / 4)
                    }
                }
            }
            ), [a, r, i.width, i.height, l, o]),
            s && u && d ? n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "absolute stroke-gray-200 dark:stroke-gray-200/20 stroke-1",
                width: "100%",
                height: "100%",
                fill: "none",
                viewBox: `0 0 ${s.width} ${s.height}`
            }, n().createElement("polygon", {
                points: `0,0 ${s.width},${2 * u.height + 3 * d} ${s.width},${s.height - u.height - 2 * d} 0,${u.height - d}`,
                fill: Vt(a, 57, r, !0)
            }), n().createElement("polygon", {
                points: `0,${u.height + 2 * d} ${s.width},${s.height - u.height + d} ${s.width},${s.height} 0,${2 * u.height + d}`,
                fill: Vt(a, 89, r, !0)
            })) : void 0
        }
          , Xt = e => {
            let {data: a, property: r, showPropertySelector: l, isCompact: o, isWidget: i, branding: s} = e;
            if (!a)
                return null;
            const c = (0,
            t.useRef)(null)
              , u = (0,
            t.useRef)(null);
            return n().createElement("div", {
                className: "break-before-avoid break-inside-avoid"
            }, o && l && n().createElement(Yt, {
                property: r
            }), n().createElement("div", {
                className: "ptable px-2 py-6",
                role: "list"
            }, n().createElement("div", {
                id: "ptable-top-right",
                className: "relative -top-1 xl:top-0 px-4"
            }, !o && l && n().createElement(Yt, {
                property: r
            }), !i && n().createElement("div", {
                className: "hidden print:block text-center relative -top-2"
            }, n().createElement(P, null))), n().createElement("div", {
                id: "ptable-center-cell",
                className: "text-center legend xs:scale-125 xl:scale-150"
            }, n().createElement(Wt, {
                data: a,
                an: 17,
                property: r,
                showDetails: !o,
                isCompact: o,
                isLegend: !0
            })), !o && !i && n().createElement("div", {
                id: "ptable-center-bottom",
                className: "flex w-full items-center justify-center"
            }, n().createElement(Kt, {
                property: r
            })), a.map(( (e, t) => n().createElement("div", {
                id: `an-${e.AtomicNumber}`,
                key: t,
                className: "element",
                role: "listitem"
            }, n().createElement(Wt, {
                data: a,
                an: e.AtomicNumber,
                property: r,
                showDetails: !o,
                isCompact: o
            })))), n().createElement("div", {
                id: "ptable-57",
                ref: u
            }), n().createElement("div", {
                id: "ptable-extra",
                ref: c,
                className: "relative"
            }, n().createElement(Qt, {
                data: a,
                property: r,
                refContainer: c,
                refCell: u
            })), s && s), !i && o && l && n().createElement("div", {
                className: "text-center"
            }, n().createElement(Kt, {
                property: r
            })))
        }
        ;
        Xt.defaultProps = {
            showPropertySelector: !0,
            isWidget: !1
        };
        const ea = (0,
        t.forwardRef)(( (e, t) => {
            const {data: a, hasHeader: r, isFirstColumnHeader: l, containerClassName: o, tableClassName: i} = e;
            return a && a.length ? n().createElement("div", {
                className: o
            }, n().createElement("table", {
                ref: t,
                className: i
            }, r && n().createElement("thead", null, n().createElement("tr", null, a[0].map(( (e, t) => n().createElement("th", {
                key: t,
                className: "font-bold text-left px-4 py-2 align-top"
            }, e))))), n().createElement("tbody", null, a.map(( (e, t) => r && !t ? null : n().createElement("tr", {
                key: t
            }, e.map(( (e, t) => !t && l ? n().createElement("th", {
                key: t,
                className: "font-medium px-4 py-1 align-middle"
            }, e) : n().createElement("td", {
                key: t,
                className: "px-4 py-1 middle"
            }, e))))))))) : null
        }
        ));
        ea.defaultProps = {
            data: [],
            hasHeader: !0,
            isFirstColumnHeader: !1,
            containerClassName: "pc-gray-border text-sm overflow-x-auto break-words",
            tableClassName: "pc-table-rowed table-fixed text-left w-full"
        };
        const ta = e => {
            let {data: a, an: r, property: l, showSplash: o, isWidget: i} = e;
            if (!r)
                return null;
            const s = (0,
            t.useMemo)(( () => Vt(a, r, l)), [r, l])
              , c = (0,
            t.useMemo)(( () => {
                let e = null;
                try {
                    const t = [];
                    for (let e = 0; e < S.length; e++) {
                        let l = S[e];
                        const i = L[l].name || ""
                          , s = L[l].hash || ""
                          , c = L[l].unit || ""
                          , u = Bt(a, r, l);
                        let m = n().createElement(n().Fragment, null, "ElectronConfiguration" === l ? n().createElement(Ut, {
                            input: u
                        }) : n().createElement(n().Fragment, null, n().createElement("span", {
                            className: "capitalize"
                        }, u), n().createElement("span", null, " ", c || "")));
                        s && (m = n().createElement(yt, {
                            href: `${f}${r}${s}`,
                            trackLabel: `Content Link (List View):  ${a[r - 1].Symbol}; ${i} Property Value`,
                            rel: "noopener",
                            target: "_blank"
                        }, m),
                        "" === u || "GroupBlock" === l && ("GroupBlock" !== l || o) || t.push([i, m]))
                    }
                    e = t
                } catch (e) {}
                return e
            }
            ), [r, l]);
            return n().createElement("div", {
                className: "break-before-page break-inside-avoid" + (o ? " sm:grid sm:grid-cols-2 sm:gap-4" : "")
            }, o && n().createElement("div", {
                className: "py-4 px-1 text-center flex flex-col justify-center space-y-1",
                style: {
                    background: s || "inherit"
                }
            }, n().createElement("div", {
                className: "text-4xl"
            }, r), n().createElement("div", {
                className: "text-6xl"
            }, a[r - 1].Symbol), n().createElement("div", {
                className: "text-2xl"
            }, a[r - 1].Name), n().createElement("div", {
                className: "text-sm capitalize"
            }, a[r - 1].GroupBlock), n().createElement("div", {
                className: "text-center text-sm print:hidden"
            }, n().createElement(yt, {
                href: `${f}${r}`,
                rel: "noopener",
                target: "_blank",
                trackLabel: `Content Link (List View): ${a[r - 1].Symbol}`,
                className: "text-sm pc-gray-button pc-icon-button"
            }, a[r - 1].Name, " Element Page", n().createElement(Jt, null)))), n().createElement(ea, {
                data: c,
                hasHeader: !1,
                isFirstColumnHeader: !0,
                containerClassName: "text-sm py-4 px-1"
            }))
        }
        ;
        ta.defaultProps = {
            an: 1,
            property: "GroupBlock",
            showSplash: !0,
            isWidget: !1
        };
        const aa = e => {
            const {data: t, property: a, popup: r, isWidget: l, hideAllHeadings: o} = e;
            return t && r ? n().createElement(We, {
                isOpen: !!r,
                title: l && o ? n().createElement("div", {
                    className: "capitalize"
                }, n().createElement(yt, {
                    href: `${f}${r}`,
                    className: "pc-gray-button pc-icon-button",
                    rel: "noopener",
                    target: "_blank",
                    trackLabel: `Content Link (Element Popup): ${t[r - 1].Symbol}`
                }, n().createElement("span", {
                    className: ""
                }, n().createElement("sup", null, r), t[r - 1].Symbol, " ", t[r - 1].Name), n().createElement(Jt, null))) : "Element Properties",
                showFooter: !1,
                onClose: () => {
                    window.history.replaceState("", document.title, `${window.location.pathname}${window.location.search}${x({
                        popup: ""
                    })}`),
                    window.dispatchEvent(new HashChangeEvent("hashchange"))
                }
                ,
                trackAction: "element-info",
                trackLabel: "Element Info Popup"
            }, n().createElement(ta, {
                data: t,
                an: r,
                property: a,
                isWidget: l,
                showSplash: !o
            })) : null
        }
        ;
        aa.defaultProps = {
            popup: 0,
            isWidget: !1,
            hideAllHeadings: !1
        };
        const na = () => n().createElement("article", {
            className: "print:hidden space-y-8 py-8"
        }, n().createElement("section", {
            className: "space-y-4"
        }, n().createElement("h2", {
            className: "text-2xl font-medium"
        }, "Why Arrange Elements in a Table?"), n().createElement("p", null, "Seeing chemical elements arranged in the modern periodic table is as familiar as seeing a map of the world, but it was not always so obvious."), n().createElement("p", null, "The creator of the periodic table, ", n().createElement("a", {
            className: "regular-link",
            href: "https://www.chemistryworld.com/features/the-father-of-the-periodic-table/3009828.article"
        }, "Dmitri Mendeleev"), ", in 1869 began collecting and sorting known properties of elements, like he was playing a game, while traveling by train. He noticed that there were groups of elements that exhibited similar properties, but he also noticed that there were plenty of exceptions to the emerging patterns."), n().createElement("p", null, 'Incredibly, instead of giving up, he tried altering the measured property values to better fit the patterns! He also predicted that certain elements must exist which didn’t at the time – again, in an effort to get the patterns in his "game" to work out.'), n().createElement("p", null, 'There were plenty of skeptics and it took years to gain international acceptance, but once newly-discovered elements matched the ones that Mendeleev predicted, his patterns could not be dismissed. In addition, some of the properties that he "fudged" were later recalculated and found to be much closer to his predictions.')), n().createElement("section", {
            className: "space-y-4"
        }, n().createElement("h2", {
            className: "text-2xl font-medium"
        }, "Does the Modern Periodic Table Change? If So, How and Who Does That?"), n().createElement("p", null, "The periodic table as we know it today is managed by ", n().createElement("a", {
            className: "regular-link",
            href: "https://iupac.org/what-we-do/periodic-table-of-elements/"
        }, "the International Union of Pure and Applied Chemistry, or IUPAC"), " (eye-you-pack)."), n().createElement("p", null, "While much of what is in the periodic table is stable and unlikely to change, the IUPAC organization is responsible for deciding what needs to be changed. They have created criteria for what constitutes the discovery of a new element."), n().createElement("p", null, "In addition, any new element must be assigned a temporary name and symbol, and if validated, given an official name. Such was the case when IUPAC recently reviewed elements 113, 115, 117 and 118, and decided to give them official names and symbols (goodbye, ununseptium and hello, tennessine!)."), n().createElement("p", null, "Atomic weights found within a periodic table one might think are constant. The truth is that ", n().createElement("a", {
            className: "regular-link",
            href: "http://ciaaw.org/historical-atomic-weights.htm"
        }, "atomic weights have changed as a function of time"), ". Since 1899 the IUPAC Commission on Isotopic Abundances and Atomic Weights (", n().createElement("a", {
            className: "regular-link",
            href: "http://ciaaw.org/"
        }, "CIAAW"), ") has been evaluating atomic weights and abundances. For example, Carbon had an atomic weight of 12.00 in 1902 but today it is [12.0096, 12.0116]! Times sure have changed as the source of the sample will determine the value."), n().createElement("p", null, "Finally, IUPAC assigns collective names (lanthanoids and actinoids) and group numbering (1 to 18) and has investigated the membership of the group 3 elements."), n().createElement("p", null, "PubChem is working with IUPAC to help make information about the elements and the periodic table machine-readable. (The machine-readable data used to render the periodic table on this page, are available for download by clicking the ", n().createElement("i", null, "Download"), " button at the top of this page.)")), n().createElement("section", {
            className: "space-y-4"
        }, n().createElement("h2", {
            className: "text-2xl font-medium"
        }, "Chemical Element Data in PubChem"), n().createElement("p", null, "PubChem is providing this periodic table page in order to help navigate abundant chemical element data available in PubChem. When exploring the table or list views on this page, please note the links to dedicated pages for each element. These individual element summary pages contain a lot of additional information as well as references. Please refer to them for details about provenance of the element property information."), n().createElement("h3", {
            className: "text-xl font-medium"
        }, "Exploring Property Trends"), n().createElement("p", null, "The following properties are available for look up or trend visualization (by selecting ", n().createElement("i", null, "Display Property"), " at the top of this page). Additionally, where indicated, the properties have dedicated pages with interactive plots."), n().createElement("ul", {
            className: "ml-8"
        }, S.map(( (e, t) => {
            if ("None" === e)
                return null;
            let a = "GroupBlock" !== e && L[e].subPage
              , r = a ? n().createElement(Kt, {
                property: e,
                className: "regular-link font-medium inline-flex flex-nowrap gap-1 items-center"
            }) : "";
            return n().createElement("li", {
                className: "py-1",
                key: e
            }, a ? r : n().createElement("span", null, L[e].name))
        }
        )))), n().createElement("section", {
            className: "space-y-4"
        }, n().createElement("h2", {
            className: "text-2xl font-medium"
        }, "Printable Images of the Periodic Table"), n().createElement("p", null, "Printable Images (PNGs) and PDFs of the Periodic Table are available from the ", n().createElement("i", null, "Download"), " menu at the top of this page.")))
          , ra = e => {
            let {data: a, matching: r, isWidget: l} = e;
            const o = (0,
            t.useMemo)(( () => {
                let e = [];
                if (a)
                    try {
                        e = "" === r ? a : a.filter((e => {
                            const t = new RegExp("^" + r,"i");
                            return String(e.AtomicNumber) === String(r) || e.Symbol.match(t) || e.Name.match(t)
                        }
                        ))
                    } catch (e) {}
                return e
            }
            ), [a, r]);
            return n().createElement("div", {
                className: "space-y-8"
            }, o.length > 0 ? n().createElement("ul", {
                className: "list-none space-y-8"
            }, o.map((function(e, t) {
                return n().createElement("li", {
                    key: t,
                    className: "rounded-sm pc-gray-border print:border-0" + (l ? "" : " shadow print:shadow-none")
                }, n().createElement(ta, {
                    data: a,
                    an: e.AtomicNumber,
                    isWidget: l
                }))
            }
            ))) : n().createElement(n().Fragment, null, r && n().createElement(Ye, {
                type: "empty",
                message: n().createElement("div", null, "No elements matching your search found... Please consider ", n().createElement(yt, {
                    href: `${i}`,
                    trackAction: "search-suggestion-link",
                    trackLabel: "Search Suggestion Link: Search All PubChem"
                }, "searching all of PubChem"), " instead"),
                showTitle: !1
            })))
        }
        ;
        ra.defaultProps = {
            matching: "",
            isWidget: !1
        };
        const la = e => {
            const {data: a, an: r, difficulty: l, status: o, guessAction: i} = e
              , s = (0,
            t.useMemo)(( () => {
                let e = "";
                switch (o) {
                case "correct":
                    e = " bg-theme-lighter";
                    break;
                case "incorrect":
                    e = " bg-gray-500";
                    break;
                case "unavailable":
                    e = " opacity-10"
                }
                return `block w-full text-center leading-none py-px print:sm:pb-2 shadow-none sm:shadow-inner pc-gray-border${e}`
            }
            ), [o]);
            return n().createElement("button", {
                className: s,
                disabled: "available" !== o,
                "aria-disabled": "available" !== o,
                onClick: e => {
                    i && i(r)
                }
                ,
                "data-ga-action": "game-guess-button",
                "data-ga-label": "Game Guess"
            }, n().createElement("div", {
                className: "font-normal text-3xs xs:text-xs xl:text-sm 2xl:text-base" + (l.match(/^hard/i) && "correct" !== o ? " invisible" : "")
            }, a[r - 1].AtomicNumber), n().createElement("div", {
                className: "font-medium py-px  text-3xs xxs:text-2xs xs:text-sm sm:text-base md:text-lg lg:text-xl print:lg:text-2xl print:font-bold " + (l.match(/^easy/i) || "correct" === o ? "" : " invisible")
            }, a[r - 1].Symbol))
        }
        ;
        la.defaultProps = {
            status: "beforeGame"
        };
        const oa = {
            period_1: [1, 2],
            period_2: [3, 4, 5, 6, 7, 8, 9, 10],
            period_3: [11, 12, 13, 14, 15, 16, 17, 18],
            period_4: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
            period_5: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
            period_6: [55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
            period_7: [87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
            group_1: [1, 3, 11, 19, 37, 55, 87],
            group_2: [4, 12, 20, 38, 56, 88],
            group_3: [21, 39, 71, 103],
            group_4: [22, 40, 72, 104],
            group_5: [23, 41, 73, 105],
            group_6: [24, 42, 74, 106],
            group_7: [25, 43, 75, 107],
            group_8: [26, 44, 76, 108],
            group_9: [27, 45, 77, 109],
            group_10: [28, 46, 78, 110],
            group_11: [29, 47, 79, 111],
            group_12: [30, 48, 80, 112],
            group_13: [5, 13, 31, 49, 81, 113],
            group_14: [6, 14, 32, 50, 82, 114],
            group_15: [7, 15, 33, 51, 83, 115],
            group_16: [8, 16, 34, 52, 84, 116],
            group_17: [9, 17, 35, 53, 85, 117],
            group_18: [2, 10, 18, 36, 54, 86, 118]
        }
          , ia = [...oa.period_1, ...oa.period_2, ...oa.period_3]
          , sa = [...ia, ...oa.period_4]
          , ca = [...sa, ...oa.period_5]
          , ua = {
            difficulty: [{
                name: "Easy",
                display_name: "Easy"
            }, {
                name: "EasyPeriod_1_2_3",
                display_name: "Easy: periods 1-3 only"
            }, {
                name: "EasyPeriod_1_2_3_4",
                display_name: "Easy: periods 1-4 only"
            }, {
                name: "EasyPeriod_1_2_3_4_5",
                display_name: "Easy: periods 1-5 only"
            }, {
                name: "Medium",
                display_name: "Medium"
            }, {
                name: "MediumPeriod_1_2_3",
                display_name: "Medium: periods 1-3 only"
            }, {
                name: "MediumPeriod_1_2_3_4",
                display_name: "Medium: periods 1-4 only"
            }, {
                name: "MediumPeriod_1_2_3_4_5",
                display_name: "Medium: periods 1-5 only"
            }, {
                name: "Hard",
                display_name: "Hard"
            }, {
                name: "HardPeriod_1_2_3",
                display_name: "Hard: periods 1-3 only"
            }, {
                name: "HardPeriod_1_2_3_4",
                display_name: "Hard: periods 1-4 only"
            }, {
                name: "HardPeriod_1_2_3_4_5",
                display_name: "Hard: periods 1-5 only"
            }],
            score: {
                Easy: {
                    correct: 100,
                    incorrect: -50
                },
                EasyPeriod_1_2_3: {
                    correct: 70,
                    incorrect: -50,
                    subset: ia
                },
                EasyPeriod_1_2_3_4: {
                    correct: 80,
                    incorrect: -50,
                    subset: sa
                },
                EasyPeriod_1_2_3_4_5: {
                    correct: 90,
                    incorrect: -50,
                    subset: ca
                },
                Medium: {
                    correct: 200,
                    incorrect: -50
                },
                MediumPeriod_1_2_3: {
                    correct: 170,
                    incorrect: -50,
                    subset: ia
                },
                MediumPeriod_1_2_3_4: {
                    correct: 180,
                    incorrect: -50,
                    subset: sa
                },
                MediumPeriod_1_2_3_4_5: {
                    correct: 190,
                    incorrect: -50,
                    subset: ca
                },
                Hard: {
                    correct: 300,
                    incorrect: -50
                },
                HardPeriod_1_2_3: {
                    correct: 270,
                    incorrect: -50,
                    subset: ia
                },
                HardPeriod_1_2_3_4: {
                    correct: 280,
                    incorrect: -50,
                    subset: sa
                },
                HardPeriod_1_2_3_4_5: {
                    correct: 290,
                    incorrect: -50,
                    subset: ca
                }
            }
        };
        function ma() {
            const e = ct.getItem("difficulty") || ua.difficulty[0].name
              , [t,a] = da(e);
            return {
                difficulty: e,
                highScore: ct.getItem("highScore") || 0,
                gameOn: !1,
                gameEnded: !1,
                guessArr: t,
                subsetCount: a
            }
        }
        function da(e) {
            const t = new Array(118);
            let a = ua.score[e].subset
              , n = a ? a.length : 118;
            for (let e = 0; e < t.length; e++)
                !a || a.includes(e + 1) ? t[e] = "available" : t[e] = "unavailable";
            return [t, n]
        }
        function pa(e) {
            let t = 0
              , a = [];
            for (let t = 0; t < e.length; t++)
                "available" === e[t] && a.push(t + 1);
            if (a.length > 0) {
                const e = 0
                  , n = a.length;
                t = a[Math.floor(Math.random() * (n - e)) + e]
            }
            return t
        }
        function ha(e) {
            clearInterval(e.intervalID);
            let t, a = "";
            try {
                const r = e.guessArr.filter((e => "correct" === e)).length
                  , l = e.score / e.maxScore * 100
                  , o = r / e.guessCount * 100
                  , i = r === e.subsetCount
                  , s = r / e.subsetCount * 100;
                C.event({
                    action: "game-end-stats",
                    label: "Game Stats: guessed=" + +r + "/" + e.subsetCount + " score=" + e.score + " difficulty=" + e.difficulty + " attempts=" + e.guessCount
                }),
                a = "Don't give up, try again!",
                i ? 100 === o ? a = l > 80 ? "You have achieved perfection!" : l > 50 ? "You have achieved perfection, while taking time to think, way to go!" : "Perfect, slow and steady wins the race!" : o > 90 ? a = "Great, you are becoming a periodic table expert!" : o > 80 ? a = "Nice, you are getting very good at this!" : o > 70 && (a = "Way to persevere!") : s > 5 && (100 === o ? a = "Hard" !== e.difficulty ? "This is too easy for you! Try a harder level?" : "Don't give up on perfection, play again!" : o > 85 ? a = "You are well on your way to becoming an expert, don't stop now, play again!" : o > 70 && (a = "Doing very well, play again!")),
                t = n().createElement(Ye, {
                    message: n().createElement(n().Fragment, null, n().createElement("p", null, "You found ", n().createElement("span", {
                        className: "font-bold"
                    }, r, "/", e.subsetCount), " elements in ", n().createElement("span", {
                        className: "font-bold"
                    }, e.guessCount), " attempts, and scored ", n().createElement("span", {
                        className: "font-bold"
                    }, et(e.score)), "."), n().createElement("p", {
                        className: "pt-2"
                    }, a)),
                    type: i ? "info" : "error"
                })
            } catch (e) {}
            return t
        }
        const fa = e => {
            let {data: a, isCompact: r, branding: l} = e;
            if (!a)
                return null;
            const o = (0,
            t.useRef)(null)
              , i = (0,
            t.useRef)(null);
            const [s,c] = (0,
            t.useReducer)((function(e, t) {
                switch (t.type) {
                case "difficulty":
                    return ct.setItem("difficulty", t.payload),
                    {
                        ...ma(),
                        difficulty: t.payload
                    };
                case "start":
                    {
                        const [t,a] = da(e.difficulty);
                        return {
                            ...ma(),
                            guessArr: t,
                            subsetCount: a,
                            maxScore: ua.score[e.difficulty].correct * a,
                            gameOn: !0,
                            intervalID: window.setInterval(( () => {
                                c({
                                    type: "decrementScore"
                                })
                            }
                            ), 3e3),
                            score: 0,
                            guessCount: 0,
                            guessStatus: void 0,
                            challenge: pa(t)
                        }
                    }
                case "challenge":
                    return pa(e.guessArr) ? {
                        ...e,
                        challenge: pa(e.guessArr),
                        guessStatus: void 0
                    } : {
                        ...e,
                        gameOn: !1,
                        gameEnded: !0,
                        gameEndMessage: ha(e)
                    };
                case "guess":
                    {
                        clearInterval(e.intervalID);
                        const a = parseInt(t.payload) === parseInt(e.challenge);
                        let n = [...e.guessArr];
                        if (n[t.payload - 1] = a ? "correct" : "incorrect",
                        a)
                            for (let e = 0; e < n.length; e++)
                                "incorrect" === n[e] && (n[e] = "available");
                        const r = e.score + (a ? 3 + ua.score[e.difficulty].correct : ua.score[e.difficulty].incorrect)
                          , l = Math.max(e.highScore, r);
                        return l > e.highScore && ct.setItem("highScore", l),
                        a && setTimeout(( () => {
                            c({
                                type: "challenge"
                            })
                        }
                        ), 2e3),
                        {
                            ...e,
                            guessCount: e.guessCount + 1,
                            guessArr: n,
                            score: r,
                            highScore: l,
                            guessStatus: a,
                            intervalID: window.setInterval(( () => {
                                c({
                                    type: "decrementScore"
                                })
                            }
                            ), 3e3)
                        }
                    }
                case "guessStatus":
                    return {
                        ...e,
                        guessStatus: t.payload
                    };
                case "end":
                    return {
                        ...e,
                        gameOn: !1,
                        gameEnded: !0,
                        gameEndMessage: ha(e)
                    };
                case "decrementScore":
                    return {
                        ...e,
                        score: e.score - 3,
                        guessStatus: void 0
                    };
                default:
                    w("reducer default case reached...")
                }
            }
            ), 0, ma);
            return n().createElement(n().Fragment, null, s.gameEnded && s.gameEndMessage, n().createElement("div", {
                className: "ptable px-2 py-6",
                role: "list"
            }, a.map(( (e, t) => {
                let r = "beforeGame";
                try {
                    s.guessArr && (r = s.guessArr[e.AtomicNumber - 1],
                    s.gameOn && !s.guessStatus || "available" !== r || (r = "beforeGame"))
                } catch (e) {}
                return n().createElement("div", {
                    id: `an-${e.AtomicNumber}`,
                    key: t,
                    className: "element animate-bounceIn motion-safe:animate-none",
                    role: "listitem"
                }, n().createElement(la, {
                    data: a,
                    an: e.AtomicNumber,
                    difficulty: s.difficulty,
                    status: r,
                    guessAction: e => {
                        c({
                            type: "guessStatus",
                            payload: void 0
                        }),
                        setTimeout(( () => {
                            c({
                                type: "guess",
                                payload: e
                            })
                        }
                        ), 10)
                    }
                }))
            }
            )), n().createElement("div", {
                id: "ptable-center-all",
                className: "text-center leading-tight relative"
            }, n().createElement("div", {
                className: "block space-y-2 xs:space-y-4 sm:inline-block max-w-full px-2 relative -top-4"
            }, !s.gameOn && n().createElement(n().Fragment, null, n().createElement("div", {
                className: "text-clamp-1/2-1"
            }, n().createElement(Gt, {
                id: "select-game-difficulty",
                options: ua.difficulty,
                label: "Difficulty",
                externalSelected: s.difficulty,
                selectedCallback: e => {
                    c({
                        type: "difficulty",
                        payload: e
                    })
                }
                ,
                labelClassName: "block text-left text-clamp-1/2-1 leading-tight uppercase mx-px sm:mx-1 mb-px sm:mb-1"
            })), n().createElement("button", {
                className: "pc-blue-button w-full font-medium  whitespace-nowrap leading-tight lg:px-4 text-clamp-1-5/2",
                onClick: () => {
                    c({
                        type: "start"
                    })
                }
                ,
                "data-ga-action": "start-game-button",
                "data-ga-label": "Start Game"
            }, "Play ", s.gameEnded ? "Again" : "Now", "!")), s.gameOn && s.challenge && n().createElement(n().Fragment, null, n().createElement("div", {
                className: s.guessStatus ? "animate-fadeOut" : ""
            }, n().createElement("div", {
                className: "text-clamp-1/2-1"
            }, "FIND"), n().createElement("div", {
                className: "text-clamp-1-5/2 font-bold"
            }, a[s.challenge - 1].Name)), n().createElement("div", null, n().createElement("div", {
                className: "text-clamp-1/2-1 mb-px sm:mb-1"
            }, "SCORE"), n().createElement("div", {
                className: "inline-block text-clamp-1-5/2 font-bold pc-gray-border pc-gray-background px-2 shadow-lg"
            }, s.score))), s.gameOn && void 0 !== s.guessStatus && n().createElement(n().Fragment, null, s.guessStatus ? n().createElement("div", {
                className: "absolute z-10 pc-centered-element p-2 whitespace-nowrap bg-white shadow text-green-600 font-bold uppercase animate-fadeOut"
            }, "Correct! +", ua.score[s.difficulty].correct) : n().createElement("div", {
                className: "absolute z-10 pc-centered-element p-2 whitespace-nowrap bg-white shadow text-red-600 font-bold uppercase animate-fadeOut"
            }, "Incorrect! ", ua.score[s.difficulty].incorrect)))), n().createElement("div", {
                id: "ptable-top-right",
                className: "relative text-center -top-4 sm:top-0 px-1 sm:px-4 text-clamp-1/2-1 leading-tight"
            }, !s.gameOn && s.highScore > 0 && n().createElement("div", null, "YOUR HIGH SCORE: ", et(s.highScore)), s.gameOn && n().createElement("div", {
                className: "flex flex-nowrap items-center justify-center gap-2"
            }, !r && n().createElement("div", {
                className: "whitespace-nowrap"
            }, "Beat: ", et(s.highScore), "!"), n().createElement("button", {
                className: "pc-blue-button w-full sm:w-auto",
                onClick: () => {
                    c({
                        type: "end"
                    })
                }
                ,
                "data-ga-action": "end-game-button",
                "data-ga-label": "End Game"
            }, r ? "DONE" : "END THIS GAME"))), n().createElement("div", {
                id: "ptable-57",
                ref: i
            }), n().createElement("div", {
                id: "ptable-extra",
                ref: o,
                className: "relative" + (s.subsetCount < 118 ? " opacity-40" : "")
            }, n().createElement(Qt, {
                data: a,
                refContainer: o,
                refCell: i
            })), l && l))
        }
          , ga = e => {
            let {className: t} = e;
            return n().createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                fill: "currentColor",
                viewBox: "0 0 24 24"
            }, n().createElement("path", {
                d: "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"
            }))
        }
        ;
        ga.defaultProps = {
            className: "size-6 inline-block"
        };
        const ba = e => {
            let {children: a} = e;
            const [r,l] = (0,
            t.useState)(!1);
            return n().createElement("div", null, n().createElement("button", {
                id: "page-download-btn",
                className: "text-sm flex w-full justify-center items-center gap-1 pc-gray-button",
                onClick: () => l(!0),
                "data-ga-action": "download-info-open",
                "data-ga-label": "Download Info Open"
            }, n().createElement(ga, null), n().createElement("span", {
                className: "ml-1"
            }, "Download")), r && n().createElement(We, {
                isOpen: r,
                onClose: () => {
                    l(!1)
                }
                ,
                title: "Download",
                trackAction: "download-info",
                trackLabel: "Download Info"
            }, n().createElement(n().Fragment, null, a)))
        }
          , va = e => {
            let {formatList: a, fileLabel: r, bCompress: l, containerClassName: o, trackAction: i, trackLabel: s} = e;
            if (!a)
                return null;
            const c = (0,
            t.useMemo)(( () => r ? `&response_basename=${r}` : ""), [r]);
            return n().createElement("ul", {
                className: `list-none ${o}`
            }, a.map(( (e, t) => {
                const a = e.url.match(/response_type=save/) ? e.url : `${e.url}${e.url.match(/\?/) ? "&" : "?"}response_type=save`
                  , r = a.replace("=save", "=display");
                return n().createElement("li", {
                    key: t
                }, e.title && n().createElement("div", {
                    className: "font-bold px-2 py-1"
                }, e.title), n().createElement("div", {
                    className: "py-1 px-2 flex flex-nowrap items-center gap-2"
                }, n().createElement("div", {
                    className: "w-12 text-right uppercase text-base"
                }, e.formatName), n().createElement(yt, {
                    href: `${a}${c}${l ? "&compress=1" : ""}`,
                    className: "pc-gray-button pc-icon-button",
                    trackAction: i,
                    trackLabel: `${s}; ${e.formatName} - Save`,
                    title: "Save data to a file on your device",
                    disableOnClick: !0
                }, n().createElement(ga, {
                    className: "size-4 inline-block"
                }), "Save"), n().createElement(yt, {
                    href: r,
                    className: "pc-gray-button pc-icon-button",
                    trackAction: i,
                    trackLabel: `${s}; ${e.formatName} - Display`,
                    target: "_blank",
                    title: "View data in a new browser tab",
                    disableOnClick: !0
                }, "Display", n().createElement(Jt, {
                    className: "size-4 inline-block"
                }))))
            }
            )))
        }
        ;
        va.defaultProps = {
            bCompress: !1,
            containerClassName: "text-sm flex flex-wrap items-center justify-start gap-x-4 w-full",
            trackAction: "download",
            trackLabel: "Download"
        };
        const ya = e => {
            let {additional: a} = e;
            const r = (0,
            t.useMemo)(( () => {
                const e = ["CSV", "JSON", "XML", "ASNT"]
                  , t = [];
                for (let a = 0; a < e.length; a++)
                    t.push({
                        formatName: e[a],
                        url: p.replace("JSON", e[a])
                    });
                return n().createElement(va, {
                    formatList: t,
                    fileLabel: "PubChemElements_all",
                    trackAction: "download-ptable-data",
                    trackLabel: "Download PTable Data"
                })
            }
            ), []);
            return n().createElement(ba, null, n().createElement("div", {
                className: "space-y-4"
            }, r && n().createElement("div", {
                className: "pc-theme-box"
            }, n().createElement("strong", {
                className: "text-lg"
            }, "Machine-Readable Periodic Table Data"), r), a && a, n().createElement("p", null, "For more information, please refer to ", n().createElement(yt, {
                href: "https://pubchem.ncbi.nlm.nih.gov/docs/downloads",
                trackAction: "help-link",
                trackLabel: "Help Link: PubChemDocs Downloads"
            }, "PubChem Downloads help document"), ".")))
        }
          , Ea = e => {
            let {containerClassName: t} = e;
            return n().createElement("div", {
                className: `pc-gray-background mt-3 p-4 text-sm space-y-2 ${t}`
            }, n().createElement("p", null, "Test your knowledge of chemical elements by playing this ", n().createElement("i", null, "find an element in the periodic table"), " game."), n().createElement("div", null, n().createElement("strong", {
                className: "text-lg"
            }, "How to Play")), n().createElement("ol", {
                className: "ml-8"
            }, n().createElement("li", null, "Choose game difficulty. If unsure, start with the ", n().createElement("i", null, "easy"), " level."), n().createElement("li", null, "Click ", n().createElement("i", null, "Play Now!"), " button."), n().createElement("li", null, "When shown an element name, click on the corresponding element cell in the periodic table as quickly as you can! Keep going until all the elements are found."), n().createElement("li", null, "If it seems too easy, try a harder level!")), n().createElement("p", null, "Note that the periodic table game available on this page is for entertainment purposes only, and should not be used to grade students on their knowledge of chemical elements."))
        }
        ;
        Ea.defaultProps = {
            containerClassName: "block"
        };
        const wa = e => {
            const a = (0,
            t.useMemo)(( () => {
                let e;
                try {
                    let t = [];
                    for (let e = 0; e < S.length; e++) {
                        let a = M(S[e], !1);
                        const n = `Periodic_Table_of_Elements_w_${a.replace("None", "Names").replace(/\s+/g, "_")}`
                          , r = `${u}pdf/${n}_PubChem.pdf`
                          , l = `${u}png/${n}_PubChem.png`;
                        t.push({
                            name: a,
                            img_url: l,
                            pdf_url: r
                        })
                    }
                    e = t
                } catch (e) {
                    console.log(e.message)
                }
                return e
            }
            ), []);
            return n().createElement("div", {
                className: "flex flex-wrap justify-around"
            }, a && a.map((function(e, t) {
                return n().createElement("div", {
                    className: "relative w-60 p-4"
                }, n().createElement("figure", null, n().createElement("a", {
                    href: e.img_url,
                    target: "_blank",
                    rel: "noopener",
                    "data-ga-action": "view-ptable-image",
                    "data-ga-label": "View PTable Image: PNG; Download Menu; " + e.name
                }, n().createElement("img", {
                    className: "max-w-full  pc-gray-border",
                    src: e.img_url.replace("PubChem", "small_PubChem"),
                    alt: `Periodic Table of Elements with ${e.name}`,
                    width: 1650,
                    height: 1100
                })), n().createElement("caption", {
                    className: "block text-center uppercase pc-gray-text text-xs py-1"
                }, "None" === e.name ? "Name and Symbol Only" : e.name)), n().createElement("div", {
                    className: "pc-centered-element text-sm"
                }, n().createElement("div", {
                    className: "grid grid-flow-col grid-cols-2 gap-2"
                }, n().createElement("div", null, n().createElement("a", {
                    href: e.img_url,
                    download: !0,
                    className: "pc-gray-button",
                    "data-ga-action": "donwload-ptable-image",
                    "data-ga-label": "Download PTable Image: PNG Link; Download Menu; " + e.name
                }, "PNG")), n().createElement("div", null, n().createElement("a", {
                    href: e.pdf_url,
                    download: !0,
                    className: "pc-gray-button",
                    "data-ga-action": "donwload-ptable-image",
                    "data-ga-label": "Download PTable Image: PDF Link; Download Menu; " + e.name
                }, "PDF")))))
            }
            )))
        }
          , xa = e => {
            let {children: a} = e;
            return (e => {
                const [a,n] = (0,
                t.useState)(e ? "loading" : "idle");
                (0,
                t.useEffect)(( () => {
                    if (!e)
                        return void n("idle");
                    let t = document.querySelector(`script[src="${e}"]`);
                    if (t)
                        n(t.getAttribute("data-status"));
                    else {
                        t = document.createElement("script"),
                        t.src = e,
                        t.async = !0,
                        t.setAttribute("data-status", "loading"),
                        document.body.appendChild(t);
                        const a = e => {
                            t.setAttribute("data-status", "load" === e.type ? "ready" : "error")
                        }
                        ;
                        t.addEventListener("load", a),
                        t.addEventListener("error", a)
                    }
                    const a = e => {
                        n("load" === e.type ? "ready" : "error")
                    }
                    ;
                    return t.addEventListener("load", a),
                    t.addEventListener("error", a),
                    () => {
                        t && (t.removeEventListener("load", a),
                        t.removeEventListener("error", a))
                    }
                }
                ), [e])
            }
            )("/pcfe/libs/iframeResizer.contentWindow.min.js"),
            n().createElement(n().Fragment, null, a)
        }
        ;
        xa.propTypes = {
            children: vt().oneOfType([vt().arrayOf(vt().node), vt().node]).isRequired
        };
        const Na = () => {
            const e = !N(`(min-width: ${E})`)
              , [a,r] = (0,
            t.useState)(!1)
              , l = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                const a = () => {
                    if (window)
                        return new URLSearchParams(window.location.hash ? window.location.hash.substring(1) : "")
                }
                  , [n,r] = (0,
                t.useState)(a());
                function l(e) {
                    r(a())
                }
                return (0,
                t.useEffect)(( () => (window.addEventListener("hashchange", l),
                function() {
                    window.removeEventListener("hashchange", l)
                }
                )), []),
                e ? Object.fromEntries(n) || {} : n
            }()
              , i = (0,
            t.useMemo)(( () => l.get("view") || "table"), [window.location.hash])
              , s = (0,
            t.useMemo)(( () => l.get("embed") || !1), [window.location.hash])
              , c = (0,
            t.useMemo)(( () => s && l.get("hide_title") || !1), [window.location.hash])
              , m = (0,
            t.useMemo)(( () => s && l.get("hide_all_headings") || !1), [window.location.hash])
              , d = (0,
            t.useMemo)(( () => {
                try {
                    const e = l.get("property");
                    return e && L[e] ? e : "GroupBlock"
                } catch {
                    return "None"
                }
            }
            ), [window.location.hash])
              , h = (0,
            t.useMemo)(( () => {
                try {
                    const e = parseInt(l.get("popup"));
                    return e >= 1 && e <= 118 ? e : ""
                } catch {
                    return ""
                }
            }
            ), [window.location.hash])
              , f = (0,
            t.useMemo)(( () => {
                const e = l.get("matching") || "";
                return e.match(/[<>]/) ? "" : e
            }
            ), [window.location.hash])
              , {status: g, data: b} = _(p)
              , v = (0,
            t.useMemo)(( () => function(e) {
                let t = null;
                try {
                    let a = []
                      , n = e.Table
                      , r = n.Columns.Column;
                    for (let e = 0; e < n.Row.length; e++) {
                        a.push({});
                        for (let t = 0; t < n.Row[e].Cell.length; t++)
                            a[e][r[t]] = n.Row[e].Cell[t]
                    }
                    t = a
                } catch (e) {}
                return t
            }(b)), [b])
              , y = (0,
            t.useMemo)(( () => {
                if (!s || m)
                    return null;
                try {
                    const e = [{
                        url: o,
                        name: "PubChem"
                    }, {
                        url: u,
                        name: "Periodic Table"
                    }];
                    return "list" === i ? (e.push({
                        url: `${u}#view=list`,
                        name: "Element List"
                    }),
                    f && e.push({
                        url: `${u}#view=list&matching=${f}`,
                        name: f
                    })) : "game" === i && e.push({
                        url: `${u}#view=game`,
                        name: "Game"
                    }),
                    n().createElement(jt, {
                        data: e,
                        className: "flex flex-wrap items-center uppercase text-sm gap-1 pc-gray-border-b"
                    })
                } catch {
                    return null
                }
            }
            ), [s, m, i, f])
              , w = (0,
            t.useMemo)(( () => s ? n().createElement("div", {
                id: "ptable-bottom-left",
                className: "relative"
            }, n().createElement(yt, {
                href: u,
                className: "pc-centered-element w-8 xs:w-12 sm:w-20 lg:w-32 xl:w-40",
                trackAction: "logo-link",
                trackLabel: "Periodic Table Widget: Logo Link",
                target: "_blank"
            }, e ? n().createElement(T, null) : n().createElement(P, null), n().createElement("span", {
                className: "sr-only"
            }, "Go to PubChem"))) : null), [s, e])
              , C = n().createElement(n().Fragment, null, "table" === i && n().createElement(n().Fragment, null, n().createElement(Xt, {
                data: v,
                property: d,
                isCompact: e,
                isWidget: s,
                branding: w
            }), !s && n().createElement(na, null), n().createElement(aa, {
                data: v,
                property: d,
                popup: h,
                isWidget: s,
                hideAllHeadings: m
            })), "list" === i && n().createElement(n().Fragment, null, !s && n().createElement("div", {
                className: "print:hidden w-full sm:w-96 mx-auto py-4"
            }, n().createElement(Dt, {
                id: "element-search-input",
                type: "text",
                isSearch: !0,
                externalValue: f,
                label: "Element Name, Symbol or Atomic Number",
                valueCallback: e => {
                    window.history.replaceState("", document.title, `${window.location.pathname}${window.location.search}${x({
                        matching: e
                    })}`),
                    window.dispatchEvent(new HashChangeEvent("hashchange"))
                }
                ,
                trackAction: "search",
                trackLabel: "Search"
            })), n().createElement(ra, {
                data: v,
                matching: f
            })), "game" === i && n().createElement(fa, {
                data: v,
                isCompact: e,
                branding: w
            }));
            return s ? n().createElement(xa, null, n().createElement("div", {
                className: "main-width fullscreen widget-wrapper space-y-4"
            }, y, !c && !m && n().createElement("h1", {
                className: "text-clamp-1-5/2"
            }, "Periodic Table of Elements"), C)) : n().createElement(Rt, {
                isLoading: "fetched" !== g && "error" !== g
            }, n().createElement("div", {
                className: "main-width app-wrapper space-y-4"
            }, n().createElement("div", {
                className: "print:hidden"
            }, n().createElement("div", {
                className: "lg:flex lg:items-center w-full"
            }, n().createElement("div", {
                className: "lg:flex-1 lg:pr-4"
            }, n().createElement($t, {
                title: "Periodic Table of Elements"
            })), n().createElement("div", {
                className: "max-w-xs grid grid-flow-col grid-cols-2 gap-2 py-2"
            }, n().createElement(Zt, {
                BLOB: {
                    RecordTitle: "Periodic Table of Elements",
                    META: {}
                }
            }), n().createElement(ya, {
                additional: n().createElement("div", {
                    className: "pc-theme-box"
                }, n().createElement("strong", {
                    className: "text-lg"
                }, "Printable Images (PNGs) and PDFs of the Periodic Table"), n().createElement(wa, null))
            })))), n().createElement("div", {
                className: "hidden print:block"
            }, n().createElement("h1", {
                className: "uppercase text-center text-lg xs:text-xl sm:text-3xl lg:text-5xl xl:text-6xl"
            }, "Periodic Table of Elements", "game" === i ? " Game" : ""), "table" === i && d && "None" !== d && n().createElement("h2", {
                className: "mt-4 text-center text-base sm:text-2xl lg:text-3xl xl:text-4xl"
            }, M(d, !1))), n().createElement("div", {
                className: "print:hidden pc-gray-border-b"
            }, n().createElement("div", {
                className: "flex flex-nowrap w-full leading-none"
            }, n().createElement(qt, {
                hrefRule: "#view=",
                options: [{
                    name: "table",
                    display_name: "TABLE"
                }, {
                    name: "list",
                    display_name: e ? "LIST" : "LIST W/PROPERTIES"
                }, {
                    name: "game",
                    display_name: "GAME"
                }],
                active: i,
                className: "border-0 flex-1"
            }), "game" === i && n().createElement("div", {
                className: "text-right"
            }, n().createElement("button", {
                type: "button",
                title: "What is this information?",
                onClick: () => r(!a),
                className: "pc-minimal-button leading-3 outline-inner" + (a ? " arrow-after" : ""),
                "data-ga-action": a ? "helptip-close" : "helptip-open",
                "data-ga-label": a ? "Helptip Close" : "Helptip Open"
            }, n().createElement(Nt, null)))), n().createElement(Ea, {
                containerClassName: a && "game" === i ? "block" : "hidden"
            })), C))
        }
        ;
        e.H(document.getElementById("root")).render(React.createElement(Na, null))
    }
    )()
}
)();
