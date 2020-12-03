var t = require("../../lib/relationship.js"), e = getApp();

Page({
    data: {
        value: "",
        items: [],
        recommendApp: []
    },
    bindInput: function(t) {
        this.setData({
            value: t.detail.value,
            items: []
        });
    },
    bindConfirm: function(e) {
        var i = this.data.value, n = t({
            text: i,
            type: "chain"
        });
        n.length ? this.setData({
            items: n
        }) : this.setData({
            items: [ "未找到相应关系！" ]
        });
    },
    onLoad: function() {
        var t = this;
        e.getRecommend(function(e) {
            var i = e.sort(function() {
                return Math.random() - .5;
            });
            (i = i.filter(function(t) {
                return "qinqi" != t.key;
            })).length = 3, t.setData({
                recommendApp: i
            });
        });
    }
});