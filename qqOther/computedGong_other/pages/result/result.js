//index.js
//获取应用实例
//引入本地json数据，这里引入的就是第一步定义的json数据
var jsonData = require('../../data/rate.js');

const app = getApp()
Page({
  data: {
    value:null,
    tb:null,
    rate:null
  },
  onShow(){
    let clickIndex = qq.getStorageSync('clickIndex'+this.nowDate())
    clickIndex++
    qq.setStorageSync('clickIndex'+this.nowDate(), clickIndex)
      let value = app.globalData.value
      let gongzi = parseFloat(value.gongzi)
      //社保公积金
      let pp = jsonData.dataList.filter(item=>item.name==value.region)
      let rateObject = pp?pp[0]:jsonData.dataList.rate[0]
      console.log(rateObject)
      value.name = rateObject.name

      value.yanglaoByCompony = gongzi * this.toPoint(rateObject.yanglaoByCompany)
      value.yanglaoByOwn = gongzi * this.toPoint(rateObject.yanglaoByOwn)

      value.yiliaoByCompany = gongzi * this.toPoint(rateObject.yiliaoByCompany)
      value.yiliaoByOwn = gongzi * this.toPoint(rateObject.yiliaoByOwn)

      value.shengyuByCompany = gongzi * this.toPoint(rateObject.shengyuByCompany)
      value.shengyuByOwn = gongzi * this.toPoint(rateObject.shengyuByOwn)

      value.gongshangByCompany = gongzi * this.toPoint(rateObject.gongshangByCompany)
      value.gongshangByOwn = gongzi * this.toPoint(rateObject.gongshangByOwn)


      let p1 = gongzi * parseFloat(value.gongsi) /100
      let p2 = gongzi * parseFloat(value.own) /100
      let p3 = p1 + p2
      let p4 = (gongzi+p1)*0.4*12*30
      let p5 = gongzi - 5750
      
      value.p1 = p1
      value.p2 = p2
      value.p3 = p3
      value.p4 = p4
      value.p5 = p5
      this.setData({
        value: value
      });
  },
  
  nowDate(){
    let dd = new Date()
    return ''+dd.getFullYear()+dd.getMonth()+dd.getDate()
  },
  onLoad() {
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    });
     this.setData({
      rate: jsonData.dataList
    });
  },
  toPoint(percent){
    var str=percent.replace("%","");
    str= parseInt(str)/100;
    return str;
	}
})
