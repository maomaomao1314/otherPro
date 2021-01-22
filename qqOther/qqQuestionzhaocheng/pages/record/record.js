const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
      let data = qq.getStorageSync('score') || []
      console.log(data)
    this.setData({
      data
    })
  }
})