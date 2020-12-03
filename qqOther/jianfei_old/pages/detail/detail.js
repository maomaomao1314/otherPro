//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    type:null,
    row:null,
  },
  onLoad(options) {
    this.setData({
       type:options.type
    })
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })
  },
  onShow(){
    let clickIndex = qq.getStorageSync('clickIndex'+this.nowDate())
    clickIndex++
    qq.setStorageSync('clickIndex'+this.nowDate(), clickIndex)
    this.setData({
      row:app.globalData.detail
    })
  },
  nowDate(){
    let dd = new Date()
    return ''+dd.getFullYear()+dd.getMonth()+dd.getDate()
  },
})
