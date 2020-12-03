function e(e, p, a) {
    return p in e ? Object.defineProperty(e, p, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[p] = a, e;
}

var p;

getApp();

Page({
    data: (p = {
        list: null
    }, e(p, "list", [ {
        id: "1",
        appid: "1110109419",
        path: "",
        imgurl: "/pages/moreapp/images/app1.jpg",
        title: "心理测试",
        des: "性格、情感、情商智商",
        time: "100W+",
        order: "11"
    }, {
        id: "3",
        appid: "1110230556",
        path: "",
        imgurl: "/pages/moreapp/images/app3.jpg",
        title: "恶搞制作",
        des: "一键生成恶搞趣味图",
        time: "200W+",
        order: "9"
    }, {
        id: "4",
        appid: "1110282608",
        path: "",
        imgurl: "/pages/moreapp/images/app4.jpg",
        title: "前世今生",
        des: "获取你的前世档案",
        time: "80W+",
        order: "7"
    }, {
        id: "5",
        appid: "1110188150",
        path: "",
        imgurl: "/pages/moreapp/images/app5.jpg",
        title: "塔罗爱情",
        des: "复合、新恋情、爱情发展",
        time: "50W+",
        order: "3"
    }, {
        id: "6",
        appid: "1110206337",
        path: "",
        imgurl: "/pages/moreapp/images/app6.jpg",
        title: "恋爱测试",
        des: "我的恋爱检测报告",
        time: "120W+",
        order: "0"
    }, {
        id: "7",
        appid: "1110130903",
        path: "",
        imgurl: "/pages/moreapp/images/app7.jpg",
        title: "塔罗占卜",
        des: "提供自助抽牌人工解析",
        time: "100W+",
        order: "0"
    } ]), e(p, "adunit", wx.gg.bannerId), e(p, "adunit_kp", wx.gg.kpId), e(p, "adunit_feeds", wx.gg.feedsId), 
    p),
    onLoad: function(e) {},
    getList: function() {},
    onShareAppMessage: function() {},
    copyClick: function() {
        wx.setClipboardData({
            data: "WLmiaoxingren",
            success: function(e) {
                wx.getClipboardData({
                    success: function(e) {
                        wx.showToast({
                            title: "复制成功",
                            icon: "success",
                            duration: 1500
                        });
                    }
                });
            }
        });
    }
});