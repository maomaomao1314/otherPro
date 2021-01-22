// pages/answer/answer.js
const app = getApp()
const util = require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    score:0,
    scorelist:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })
  },
  //事件处理函数
  gotoBack: function () {
    qq.navigateBack({
      delta:  1
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let qList =  app.globalData.scrolllist
    let p =  qList.length
    let corrent = qList.filter(item=>{
        return item.result == item.answer
    }).length
    this.setData({
      score:corrent/p*100,
      scorelist:qList
    })
    let scoreList = wx.getStorageSync('score')|| []
    scoreList.push({
      time:util.nowTime(),
      score:corrent/p*100
    })
    wx.setStorageSync('score', scoreList)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
        title: '脑筋急转弯',
        path: "/pages/index/index"
    };
  }
})