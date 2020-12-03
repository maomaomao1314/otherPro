var e = getApp();

Page({
    data: {
        key: "",
        name: "",
        intro: ""
    },
    previewImage: function(e) {
        var t = e.target.dataset.src;
        wx.previewImage({
            urls: [ t ]
        });
    },
    onShareAppMessage: function() {
        var e = this.data;
        return {
            title: e.name,
            desc: e.intro,
            path: "/pages/app/index?type=" + e.key
        };
    },
    onLoad: function(t) {
        var a = this;
        t.type && e.getRecommend(function(e) {
            var n;
            e.forEach(function(e) {
                e.key == t.type && (n = e);
            }), n && (wx.setNavigationBarTitle({
                title: n.name + " 小程序介绍"
            }), a.setData(n));
        });
    }
});