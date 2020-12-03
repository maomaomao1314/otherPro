(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/index"],
  {
    "10fb": function (e, n, t) {
      "use strict";
      var o,
        c = function () {
          var e = this,
            n = e.$createElement;
          e._self._c;
        },
        i = [];
      t.d(n, "b", function () {
        return c;
      }),
        t.d(n, "c", function () {
          return i;
        }),
        t.d(n, "a", function () {
          return o;
        });
    },
    "2ca3": function (e, n, t) {
      "use strict";
      var o = t("761c"),
        c = t.n(o);
      c.a;
    },
    "52c6": function (e, n, t) {
      "use strict";
      t.r(n);
      var o = t("58e2"),
        c = t.n(o);
      for (var i in o)
        "default" !== i &&
          (function (e) {
            t.d(n, e, function () {
              return o[e];
            });
          })(i);
      n["default"] = c.a;
    },
    5874: function (e, n, t) {
      "use strict";
      t.r(n);
      var o = t("10fb"),
        c = t("52c6");
      for (var i in c)
        "default" !== i &&
          (function (e) {
            t.d(n, e, function () {
              return c[e];
            });
          })(i);
      t("2ca3");
      var u,
        a = t("f0c5"),
        d = Object(a["a"])(
          c["default"],
          o["b"],
          o["c"],
          !1,
          null,
          "558f82d6",
          null,
          !1,
          o["a"],
          u
        );
      n["default"] = d.exports;
    },
    "58e2": function (e, n, t) {
      "use strict";
      (function (e) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        var t = {
          data: function () {
            return {
              buttText: "马上查询",
              isActive: !0,
              videoAd: qq.createRewardedVideoAd({
                adUnitId: "7b9614625160089afd01b22e5aa47995",
              }),
              token: "",
              keyww: "",
            };
          },
          onLoad: function () {},
          methods: {
            onKeyInput: function (e) {
              console.log(e.target.value),
                e.target.value.length > 0
                  ? (this.buttText = "看广告查询幸福伴侣")
                  : (this.ishide = "马上查询");
            },
            onShareAppMessage: function (e) {
              switch (e.channel) {
                case "video":
                  return {
                    title: "从你的名字来看你未来伴侣",
                    desc: "从你的名字来看你未来伴侣,很准哦。",
                    path: "/pages/index/index?from=sharebuttonabc",
                    templateId: "这是开发者后台设置的分享素材模板id",
                    success: function () {
                      console.log(
                        "转发发布器已调起，并不意味着用户转发成功，微头条不提供这个时机的回调"
                      );
                    },
                    fail: function () {
                      console.log("转发发布器调起失败");
                    },
                  };
                default:
                  return {
                    title: "从你的名字来看你未来伴侣",
                    desc: "从你的名字来看你未来伴侣,很准哦。",
                    path: "/pages/index/index?from=sharebuttonabc",
                    extra: {
                      videoTopics: ["未来伴侣", "测名字"],
                      videoPath: "",
                    },
                    success: function () {
                      console.log(
                        "转发发布器已调起，并不意味着用户转发成功，微头条不提供这个时机的回调"
                      );
                    },
                    fail: function () {
                      console.log("转发发布器调起失败");
                    },
                  };
              }
            },
            gotos: function () {
              var n = this;
              try {
                n.videoAd.closeFunc && n.videoAd.offClose(n.videoAd.closeFunc);
              } catch (t) {
                console.warn("--------------videoAd.offClose error:"),
                  console.error(t);
              }
              (n.videoAd.closeFunc = function (t) {
                t.isEnded &&
                  e.navigateTo({ url: "../result/result?name=" + n.keyww });
              }),
                n.videoAd.onClose(n.videoAd.closeFunc),
                n.videoAd.show().catch(function () {
                  n.videoAd
                    .load()
                    .then(function () {
                      return n.videoAd.show();
                    })
                    .catch(function (e) {
                      console.log("激励视频 广告显示失败");
                    });
                });
            },
            changeNn: function () {
              this.isActive = !this.isActive;
            },
          },
        };
        n.default = t;
      }.call(this, t("a821")["default"]));
    },
    "761c": function (e, n, t) {},
    f090: function (e, n, t) {
      "use strict";
      (function (e) {
        t("35d3");
        o(t("66fd"));
        var n = o(t("5874"));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        e(n.default);
      }.call(this, t("a821")["createPage"]));
    },
  },
  [["f090", "common/runtime", "common/vendor"]],
]);
