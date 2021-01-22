//app.js
const util = require('./utils/util.js')
App({
  onLaunch: function () {
    this.clearClickInfo()
  },
  globalData: {
    scrolllist:null
  },
  clearClickInfo(){
    qq.removeStorageSync('clickIndex'+util.preDate())
  },
  setClickIndex(){
    let clickIndex = wx.getStorageSync('clickIndex'+util.nowDate())
    if(clickIndex){
      clickIndex++
    }else{
      clickIndex = 1
    }
    wx.setStorageSync('clickIndex'+util.nowDate(), clickIndex)
  },
  getClickIndex(callback){
    let clickIndex = wx.getStorageSync('clickIndex'+util.nowDate())
    callback(clickIndex = clickIndex?clickIndex:0)
  }
})