App({
    globalData: {
        recommend: null
    },
    getRecommend: function(a) {
        a = a || function() {};
        var t = this;
        t.globalData.recommend ? a(t.globalData.recommend) : wx.request({
            url: "https://api.liantu.cn/static/public/recommend.json",
            method: "GET",
            dataType: "json",
            success: function(e) {
                var n = e.data;
                n.status && (t.globalData.recommend = n.data, a(t.globalData.recommend));
            }
        });
    },
    onLaunch: function() {
        this.getRecommend();
    }
});