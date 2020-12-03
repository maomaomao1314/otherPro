//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    row:{
      name:'啤酒收缩毛孔',
      img:'/img/meirong1.jpeg',
      content:'取面膜碗，倒入适量的啤酒，再将压缩面膜浸入啤酒中，三分钟后，取出，稍柠出一点多余的水分。敷于脸部，待水分快吸干时，在浸入反复如此，敷半个小时，再用冷水洗净脸部，毛孔不见了，肌肤也会变得非常的紧致。'
      
    }
  },
  
  nowDate(){
    let dd = new Date()
    return ''+dd.getFullYear()+dd.getMonth()+dd.getDate()
  },
  onLoad() {
      qq.showShareMenu({
        showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
      });
  },
  onShow(){
    let clickIndex = qq.getStorageSync('clickIndex'+this.nowDate())
    clickIndex++
    qq.setStorageSync('clickIndex'+this.nowDate(), clickIndex)
    this.setData({
      row:app.globalData.detail
    })
  },
  onShareAppMessage: function (res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target)
      }
      return {
        title: '美妆小程序',
        path: '/page/index/index'
      }
    }
})
