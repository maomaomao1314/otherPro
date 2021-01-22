Page({

  /**
   * 页面的初始数据
   */

  data: {
    timeAnimation: '200000000ms'
   
  },

  changeTime: function (e) {   
    this.setData({
      timeAnimation: e.currentTarget.dataset.time,
    })
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = ''
  },
  changestop: function (e) {
    this.setData({
      timeAnimation: e.currentTarget.dataset.time,
    })
  
   
  },
    onShareAppMessage: function (res) {
            if (res.from === 'button') {
            // 来自页面内转发按钮
                console.log(res.target)
            }
    }
})