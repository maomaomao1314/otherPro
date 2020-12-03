getApp(), Page({
    data: {
        auth: 0,
        setting_auth: 0,
        examine: 0,
        resultPng: "",
        savePng: "",
        adunit: wx.gg.bannerId,
        adunit_sp: wx.gg.spId,
        adunit_qt: wx.gg.qtId
    },
    onLoad: function(e) {
        this.setData({
            resultPng: "/images/result/" + e.id + ".jpg",
            savePng: "/images/save/" + e.id + ".jpg"
        });
    },
    onReady: function() {},
    showInsertAd: function() {
        wx.createInterstitialAd && setTimeout(function() {
            wx.createInterstitialAd({
                adUnitId: wx.gg.insertId
            }).show().catch(function(e) {});
        }, 1e3);
    },
    loading: function(e, t) {
        var a = this, n = wx.getStorageSync("userInfo");
        a.setData({
            hiddenLoading: !1
        });
        var i = new Promise(function(e, t) {
            wx.getImageInfo({
                src: n.avatarUrl,
                success: function(t) {
                    e(t);
                }
            });
        }), s = new Promise(function(t, a) {
            wx.getImageInfo({
                src: e,
                success: function(e) {
                    t(e);
                }
            });
        });
        Promise.all([ i, s ]).then(function(e) {
            a.createNewImg(e[0].path, e[1].path, t);
        });
    },
    createNewImg: function(e, t, a) {
        var n = this, i = wx.createCanvasContext("myCanvas");
        i.drawImage(e, 295, 500, 170, 170), i.drawImage(a, 0, 0, 750, 1177), i.drawImage(t, 30, 1010, 140, 140), 
        i.font = "normal bold 50px simhei", i.fillStyle = "#000000";
        var s = wx.getStorageSync("userInfo").nickName, o = 370 - i.measureText(s).width / 2;
        i.fillText(s, o, 200), i.font = "normal bold 24px simhei", i.fillStyle = "#000000", 
        i.fillText("", 175, 1140), i.save(), i.draw(), setTimeout(function() {
            n.preview();
        }, 500);
    },
    createNewImg1: function(e, t, a) {
        var n = this, i = wx.createCanvasContext("myCanvas");
        i.drawImage(e, 295, 500, 170, 170), i.drawImage(a, 0, 0, 750, 1177), i.font = "normal bold 50px simhei", 
        i.fillStyle = "#000000";
        var s = wx.getStorageSync("userInfo").nickName, o = 370 - i.measureText(s).width / 2;
        i.fillText(s, o, 200), i.save(), i.draw(), setTimeout(function() {
            n.preview();
        }, 500);
    },
    preview: function() {
        var e = this;
        wx.canvasToTempFilePath({
            canvasId: "myCanvas",
            success: function(t) {
                var a = t.tempFilePath;
                e.setData({
                    url: a
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
            filePath: t.data.savePng,
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
        var t = e.detail.formId, a = wx.getStorageSync("openid");
        wx.request({
            url: " ",
            method: "get",
            data: {
                openid: a,
                formid: t
            },
            success: function(e) {}
        });
    },
    onShareAppMessage: function(e) {
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