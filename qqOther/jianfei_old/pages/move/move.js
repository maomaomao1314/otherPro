//index.js
//获取应用实例
const app = getApp()

let flag = true
Page({
  data: {
    list:[
      {
        name:'周一',
        img:'/img/move1.jpg',
        content1:'跑步5分钟，配速9速（9km/h），拉筋压腿',
        content2:'胸大肌、肱三头肌、腹肌，锻炼方式与器械：仰卧哑铃飞鸟（胸大肌，胸部），下斜哑铃卧推（下胸肌，胸部），上斜哑铃卧推（上胸肌，胸部），杠铃卧推（胸大肌，胸部），腹肌撕裂者X1（腹直肌，腰腹部），坐姿杠铃屈臂伸（靠椅）（肱三头肌，上肢）'
      },
      {
        name:'周二',
        img:'/img/move2.jpg',
        content1:'跑步5分钟，配速9速（9km/h），拉筋压腿',
        content2:'背阔肌、肱二头肌、腹肌，锻炼方式与器械：引体向上(宽握)（背阔肌，背部），单手哑铃划船（背阔肌，背部），杠铃划船（背阔肌，背部），卷腹（腹直肌，腰腹部），空中蹬车（腹直肌，腰腹部），屈腿硬拉（竖脊肌，腰腹部），哑铃交替弯举（肱二头肌，上肢）'
      },
      {
        name:'周三',
        img:'/img/move3.jpg',
        content1:'跑步5分钟，配速9速（9km/h），拉筋压腿',
        content2:'背阔肌、肱二头肌、腹肌，锻炼方式与器械：哑铃交替前举（三角肌前束，肩部），俯身哑铃侧平举（三角肌后束，肩部），哑铃侧平举（三角肌中束，肩部），坐姿哑铃推举（双臂）（三角肌前束，三角肌前束），阿诺德哑铃推举（三角肌前束，肩部），腹肌撕裂者X1（腹直肌，腰腹部）'
      },
      {
        name:'周四',
        img:'/img/move4.jpg',
        content1:'跑步5分钟，配速9速（9km/h），拉筋压腿',
        content2:'肱二头肌、肱三头肌、腹肌，锻炼方式与器械：垂直举腿（腹直肌，腰腹部），卷腹（腹直肌，腰腹部），仰卧坐姿收腿（腹直肌，腰腹部），卷腹（腹直肌，腰腹部），哑铃集中弯举（肱二头肌，上肢），窄距俯卧撑（肱三头肌，上肢），哑铃交替弯举（肱二头肌，上肢），杠铃臂弯举（直杆）（肱二头肌，上肢），俯身臂屈伸（肱三头肌，上肢），坐姿杠铃颈后臂屈伸（肱三头肌，上肢）'
      },
      {
        name:'周五',
        img:'/img/move5.jpg',
        content1:'跑步5分钟，配速9速（9km/h），拉筋压腿',
        content2:'股四头肌、腹肌，锻炼方式与器械：腹肌撕裂者X1（腹直肌，腰腹部），单手哑铃划船（小腿肌肉，腿部），箭步蹲（股四头肌，腿部），单哑铃深蹲（股四头肌，腿部），杠铃深蹲（股四头肌，腿部）'
      },
      {
        name:'周六',
        img:'/img/move6.gif',
        content1:'跑步5分钟，配速9速（9km/h），拉筋压腿',
        content2:'背阔肌、肱二头肌、腹肌，锻炼方式与器械：引体向上(宽握)（背阔肌，背部），单手哑铃划船（背阔肌，背部），杠铃划船（背阔肌，背部），卷腹（腹直肌，腰腹部），空中蹬车（腹直肌，腰腹部），屈腿硬拉（竖脊肌，腰腹部），哑铃交替弯举（肱二头肌，上肢）'
      },
      {
        name:'周日',
        img:'/img/move7.jpg',
        content1:'休息',
        content2:'休息'
      }
    ],
    clickIndex:0
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
  onLoad: function () {

    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })
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
            url: '/pages/detail/detail?type=move'
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
