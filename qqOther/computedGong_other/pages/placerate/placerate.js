//index.js
//获取应用实例
//引入本地json数据，这里引入的就是第一步定义的json数据
var jsonData = require('../../data/rate.js');

const app = getApp()
Page({
  data: {
    rate:null
  },
  onLoad() {
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    });
    this.setData({
      rate: jsonData.dataList
    });
  }
})
