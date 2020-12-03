//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  //事件处理函数
  gotoFood: function () {
    qq.switchTab({
      url: '../food/food'
    })
  },
  //事件处理函数
  gotoMove: function () {
    qq.switchTab({
      url: '../move/move'
    })
  },
  onLoad: function () {
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })
  }
})
