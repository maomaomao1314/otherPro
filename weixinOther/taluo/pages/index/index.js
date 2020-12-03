getApp(), Page({
    data: {
        sex: 1,
        dialog: 0,
        adunit: wx.gg.bannerId,
        adunit_sp: wx.gg.spId,
        adunit_qt: wx.gg.qtId
    },
    onLoad: function(t) {
        this.config(), wx.getStorageSync("openid") || wx.login({
            success: function(t) {
                wx.request({
                    url: " ",
                    method: "get",
                    data: {
                        code: t.code
                    },
                    success: function(t) {
                        wx.setStorageSync("openid", t.data.openid);
                    }
                });
            }
        });
    },
    onReady: function() {
        this.showInsertAd();
    },
    showInsertAd: function() {
        wx.createInterstitialAd && setTimeout(function() {
            wx.createInterstitialAd({
                adUnitId: wx.gg.insertId
            }).show().catch(function(t) {});
        }, 1e3);
    },
    getToday: function() {
        var t = new Date();
        return t.getFullYear() + t.getMonth() + t.getDate();
    },
    isFrist: function(t) {
        var e = this.getToday();
        return wx.getStorageSync(t) != e;
    },
    createVideoAd: function() {
        var t = this;
        wx.createRewardedVideoAd ? (this.videoAd = wx.createRewardedVideoAd({
            adUnitId: wx.gg.videoId
        }), this.videoAd.onError(function(e) {
            t.success && t.success();
        }), this.videoAd.onClose(function(e) {
            e && e.isEnded ? t.success && t.success() : t.fail && t.fail();
        }), this.videoAd.show().catch(function() {
            t.videoAd.load().then(function() {
                return t.videoAd.show();
            }).catch(function(t) {});
        })) : this.success && this.success();
    },
    showVideoAd: function(t, e) {
        this.videoAd ? (this.videoAd.offClose(), this.videoAd.offError(), this.videoAd.offLoad(), 
        this.createVideoAd()) : this.createVideoAd();
    },
    auth: function(t) {
        var e = this, o = this.isFrist("chou"), i = Number(wx.getStorageSync("chou_count") || 0);
        o && (wx.setStorageSync("chou_count", 0), i = 0), this.success = function() {
            wx.showToast({
                title: "解析成功",
                icon: "none",
                duration: 2e3
            });
            var t = e.getToday();
            wx.setStorageSync("chou", t), wx.setStorageSync("chou_count", ++i), wx.navigateTo({
                url: "/pages/preview/preview?id=" + Math.floor(17 * Math.random() + 1)
            });
        }, this.fail = function() {
            wx.showToast({
                title: "您还没看完视频哦！",
                icon: "none",
                duration: 2e3
            });
        }, wx.gg.isGG ? wx.showModal({
            title: "提示",
            content: "看完视频，免费显示结果",
            success: function(t) {
                t.confirm ? e.showVideoAd(e.success, e.fail) : t.cancel;
            }
        }) : this.success();
    },
    config: function() {
        var t = this;
        wx.request({
            url: " ",
            method: "get",
            data: {},
            success: function(e) {
                t.setData({
                    config: e.data
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
    radioChange: function(t) {
        this.setData({
            sex: t.detail.value
        });
    },
    preview: function() {
        var t = this.data.config.showpic;
        wx.previewImage({
            current: t,
            urls: [ t ]
        });
    },
    formid: function(t) {
        var e = t.detail.formId, o = wx.getStorageSync("openid");
        wx.request({
            url: " ",
            method: "get",
            data: {
                openid: o,
                formid: e
            },
            success: function(t) {}
        });
    },
    onShareAppMessage: function(t) {
        return {
            title: "快来一起免费测塔罗牌吧！",
            path: "pages/index/index"
        };
    },
    moreapp: function() {
        wx.navigateTo({
            url: "/pages/moreapp/moreapp"
        });
    }
});