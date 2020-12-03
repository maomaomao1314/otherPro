//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  onLoad(){
    
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    });
  },
  gotoQuestion() {
    qq.navigateTo({
      url: '../question/question'
    })
  }
})
