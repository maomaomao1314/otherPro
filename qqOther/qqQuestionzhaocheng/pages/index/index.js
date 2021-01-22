//index.js
//获取应用实例
const app = getApp()
Page({
  data: {},
  gotoQuestion() {
    qq.navigateTo({
      url: '/pages/question/question'
    })
  },
  onLoad: function () {
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })
     
  },
  onShareAppMessage: function() {
      return {
          title: '学习小助手',
          path: "/pages/index/index"
      };
  },
})