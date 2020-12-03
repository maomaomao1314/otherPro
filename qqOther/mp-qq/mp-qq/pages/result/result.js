(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["pages/result/result"], {
		"27d4": function(e, n, o) {
			"use strict";
			o.r(n);
			var t = o("f875"),
				c = o("4f6e");
			for (var u in c) "default" !== u && function(e) {
				o.d(n, e, (function() {
					return c[e]
				}))
			}(u);
			o("6738");
			var d, i = o("f0c5"),
				a = Object(i["a"])(c["default"], t["b"], t["c"], !1, null, "32ed3284", null, !1, t["a"], d);
			n["default"] = a.exports
		},
		"4f6e": function(e, n, o) {
			"use strict";
			o.r(n);
			var t = o("9bf3"),
				c = o.n(t);
			for (var u in t) "default" !== u && function(e) {
				o.d(n, e, (function() {
					return t[e]
				}))
			}(u);
			n["default"] = c.a
		},
		"5b39": function(e, n, o) {},
		6738: function(e, n, o) {
			"use strict";
			var t = o("5b39"),
				c = o.n(t);
			c.a
		},
		"9bf3": function(e, n, o) {
			"use strict";
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.default = void 0;
			var t = {
				data: function() {
					return {
						nameText: "",
						isActive: !1
					}
				},
				onLoad: function(e) {
					console.log(e.name), this.nameText = e.name
				},
				methods: {
					jiesuo: function() {
						var e = this;
						// try {
						// 	e.videoAd.closeFunc && e.videoAd.offClose(e.videoAd.closeFunc)
						// } catch (n) {
						// 	console.warn("--------------videoAd.offClose error:"), console.error(n)
						// }
						// e.videoAd.closeFunc = function(n) {
						// 	n.isEnded && (e.isActive = !1)
						// }, e.videoAd.onClose(e.videoAd.closeFunc), e.videoAd.show().catch((function() {
						// 	e.videoAd.load().then((function() {
						// 		return e.videoAd.show()
						// 	})).catch((function(e) {
						// 		console.log("激励视频 广告显示失败")
						// 	}))
						// }))
					}
				}
			};
			n.default = t
		},
		a0a2: function(e, n, o) {
			"use strict";
			(function(e) {
				o("35d3");
				t(o("66fd"));
				var n = t(o("27d4"));

				function t(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				e(n.default)
			}).call(this, o("a821")["createPage"])
		},
		f875: function(e, n, o) {
			"use strict";
			var t, c = function() {
					var e = this,
						n = e.$createElement;
					e._self._c
				},
				u = [];
			o.d(n, "b", (function() {
				return c
			})), o.d(n, "c", (function() {
				return u
			})), o.d(n, "a", (function() {
				return t
			}))
		}
	},
	[
		["a0a2", "common/runtime", "common/vendor"]
	]
]);
