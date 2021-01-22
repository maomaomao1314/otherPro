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
  /**
   * 生命周期函数--监听页面加载
   */


  onLoad: function () {
  
  },
 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },


 onShareAppMessage: function (res) {
        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target)
        }
 }
})