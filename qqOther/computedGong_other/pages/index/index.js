//index.js
//获取应用实例
const app = getApp()
let flag = true
Page({
  data: {
    gongzi:5000,//您的月工资
    avage:2836,//平均工资
    gongsi:8,//公司缴存比列
    own:8,//个人缴存比例
    moneyByMonth:0,//每个月公积金
    moneyByGongsi:0,//公司缴费
    moneyByOwn:0,//个人缴费
    region:['江苏省','南京市'],
    clickIndex:0
  },
  onLoad: function () {
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    });
  },
  bindRegionChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  showRate(){
    qq.navigateTo({
      url: '../placerate/placerate'
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '公积金计算',
      path: '/page/index/index',
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  },
  
  nowDate(){
    let dd = new Date()
    return ''+dd.getFullYear()+dd.getMonth()+dd.getDate()
  },
  
  onShow(){
    let clickIndex = qq.getStorageSync('clickIndex'+this.nowDate())
    if(clickIndex){
      this.setData({
        clickIndex
      })
    }else{
      this.setData({
        clickIndex:0
      })
    }
  },
  formSubmit(e) {
    let value = e.detail.value
    value.region = this.data.region[1]
    app.globalData.value = value
   
    let _that = this
    let videoAd = qq.createRewardedVideoAd({adUnitId: "aac9e661dcd6b645193aef3f7d446376"})
      //发生错误的回调
      videoAd.onError(function (res) {
        console.log('videoAd onError', res)
      })
       //加载的回调
    videoAd.onLoad(function (res) {
      console.log('videoAd onLoad', res)
    })
   //视频被关掉的回调，这里注意，回调有个参数res.isEnded是判断用户中途关闭广告的！
    videoAd.onClose(function (res) {
      console.log('videoAd onClose', res)
      if(flag){
        flag = false
        setTimeout(()=>{flag = true},10000)
        if(res.isEnded){
           qq.navigateTo({
            url: '../result/result'
          })
        }else{
          qq.showModal({
            title:"未观看完成",
            content:"请支持开发者维护这个应用，看完后，会自动提交！"
          })
        }
      }
      })
      //这里才是打开广告，展示给用户！
      videoAd.load().then(() => {
        console.log('激励视频加载成功');
        videoAd.show().then(() => {
          console.log('激励视频 广告显示成功')
        }).catch(err => {
          console.log('激励视频 广告显示失败')
        })
      }).catch(err => {
        console.log('激励视频加载失败');
      })

    
  },
  formReset() {
    console.log('form发生了reset事件')
    this.setData({
      moneyByGongsi:0,
      moneyByOwn:0,
      moneyByMonth:0
    })
  }
})
