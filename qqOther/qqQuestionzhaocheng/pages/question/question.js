// pages/question/question.js
const app = getApp()
var jsonData = require('../../utils/data.js');
var flag = true
Page({
  /**
   * 页面的初始数据
   */
  data: {
    qunestionList:null,
    clickIndex:0,
  },
  selectChange(event) {
    let id = parseInt(event.currentTarget.dataset.id)-1
    let result = parseInt(event.currentTarget.dataset.selected)
    this.setData({
        [`qunestionList[${id}].result`]: result
    })
  },
  submit(){
    app.globalData.scrolllist = this.data.qunestionList

    let videoAd = qq.createRewardedVideoAd({
      adUnitId: 'f8e9b3888335ac399c8be3988a7462ea'
    })
    videoAd.onError(function(res){
      console.log('videoAd onError',res)
    })
    videoAd.onLoad(function(res){
      console.log('videoAd onLoad',res)
    })
    videoAd.onClose(function(res){
       if(flag){
          flag = false
          setTimeout(()=>{flag = true},500)
          if(res.isEnded){
              app.setClickIndex()
                qq.navigateTo({
                url: '../answer/answer'
              })
            }else{
              qq.showModal({
                title:"未观看完成",
                content:"请支持开发者维护这个应用，看完后，会自动提交！"
              })
            }
        }
    })
    videoAd.load()
      .then(() => {
        console.log('激励视频加载成功');
        videoAd.show().then(() => {
          console.log('激励视频 广告显示成功')
        })
        .catch(err => {
          console.log('激励视频 广告显示失败')
        })
      })
      .catch(err => {
        console.log('激励视频加载失败');
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })
    let qunestionList = null
    if(options.id==1){
      qunestionList =jsonData.dataList
    }else if(options.id==2){
      qunestionList =jsonData.dataList1
    }
    this.setData({
      qunestionList
    })
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    app.getClickIndex((e)=>{
      this.setData({
        clickIndex:e
      })
    })
  },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {
      return {
          title: '脑筋急转弯',
          path: "/pages/index/index"
      };
    },
})