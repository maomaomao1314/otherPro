//index.js
//获取应用实例
const app = getApp()

let flag = true
Page({
  data: {
    list:[
      {
        name:'周一',
        img:'/img/1.jpg',
        content1:'牛奶一盒，溏心蛋一个，提子吐司两片',
        content2:'莲藕排骨汤一碗，香菇青菜一份，玉米胡萝卜炒虾仁一份，芝麻米饭一碗',
        content3:'苹果一个',
        content4:'紫菜豆腐羹一碗，素炒茼蒿一份，西葫芦鸡丁一份，芝麻米饭一碗'
      },
      {
        name:'周二',
        img:'/img/2.jpg',
        content1:'豆浆一杯，茶叶蛋一个，菜包子一个',
        content2:'小白菜虾皮汤一碗，口蘑炒芦笋一份，青椒肉丝一份，二米饭一碗',
        content3:'橙子一个',
        content4:'银耳莲子羹一碗，蒜蓉娃娃菜一份，清蒸鲈鱼一份，二米饭一碗'
      },
      {
        name:'周三',
        img:'/img/3.jpg',
        content1:'牛奶燕麦粥一碗，煎鸡蛋一个，杏仁8粒',
        content2:'香菇乌鸡汤一碗，素炒圆白菜一份，洋葱猪肝一份，米饭一碗',
        content3:'雪梨一个',
        content4:'西红柿豆腐汤一碗，蚝油生菜一份，酒蒸文蛤一份，米饭一碗'
      },
      {
        name:'周四',
        img:'/img/4.jpg',
        content1:'豆奶一杯，小葱鸡蛋饼一张',
        content2:'时蔬牛肉面一碗',
        content3:'奇异果两颗',
        content4:'萝卜丝银鱼汤一碗，干煸花菜一份，红烧大虾7只，山药米饭一碗'
      },
      {
        name:'周五',
        img:'/img/5.jpg',
        content1:'芥菜鲜肉小馄饨一碗，凉拌海带丝一碟',
        content2:'青菜蘑菇汤一碗，蒜苔肉丝一份，西红柿鸡蛋一份，红豆米饭一碗',
        content3:'香蕉一支',
        content4:'鱼头豆腐汤一碗，酸辣大白菜一份，可乐鸡翅2只，红豆米饭一碗'
      },
      {
        name:'周六',
        img:'/img/6.jpg',
        content1:'八宝粥一碗，虾皮蒸蛋一份，蒸南瓜一块',
        content2:'时蔬三鲜米粉一碗',
        content3:'草莓一碗',
        content4:'粟米蛋花羹一碗，木耳青笋一份，黑椒牛柳一份，米饭一碗'
      },
      {
        name:'周日',
        img:'/img/7.jpg',
        content1:'酸奶一杯，生菜火腿三明治一个',
        content2:'萝卜羊肉煲一份，黑豆米饭一碗',
        content3:'木瓜一碗',
        content4:'小葱蛋花粥一碗，捞汁秋葵一份，香煎银鳕鱼一块'
      }
    ],
    clickIndex:0
  },
  onLoad: function () {

    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })
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
  nowDate(){
    let dd = new Date()
    return ''+dd.getFullYear()+dd.getMonth()+dd.getDate()
  },
  gotoDetail(event){
    
    app.globalData.detail = event.currentTarget.dataset.row
    let videoAd = qq.createRewardedVideoAd({adUnitId: "93c050317293d60b6784166a7b05f8f2"})
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
            url: '/pages/detail/detail?type=food'
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

   
  }
})
