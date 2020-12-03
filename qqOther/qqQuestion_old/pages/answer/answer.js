//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    score:0,
    scorelist:null
  },
  onLoad() {
    
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    });
      let _that = this
      qq.getStorage({
        key:'score',
        success(res){
          _that.setData({
              score:res.data
          })
        }
      })
      qq.getStorage({
        key:'scorelist',
        success(res){
          let scorelist = JSON.parse(res.data)
          console.log(scorelist)
          _that.setData({
              scorelist:scorelist
          })
        }
      })
  }
})
