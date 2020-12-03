//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  
  onLoad: function () {
   
  },
  openGG(){
     let videoAd = qq.createRewardedVideoAd({adUnitId: "a03b89a5b3f8042de6ff350dab128353"})
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
      if(res.isEnded){
        console.log('观看完成')
        // let params = {content, email, name, number, title, yzm}
        // _this.props.asyncSub(_this.props.message.cookieData.cookie, params)
      }else{
        console.log('半途而废')
        qq.showModal({
          title:"未观看完成",
          content:"请支持开发者维护这个应用，看完后，会自动提交！"
        })
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


  }
})
