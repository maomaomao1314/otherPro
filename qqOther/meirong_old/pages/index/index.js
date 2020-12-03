//index.js
//获取应用实例
const app = getApp()
var flag = true
Page({
  data: {
    list:[
      {
        name:'啤酒收缩毛孔',
        img:'/img/meirong1.jpeg',
        content:'取面膜碗，倒入适量的啤酒，再将压缩面膜浸入啤酒中，三分钟后，取出，稍柠出一点多余的水分。敷于脸部，待水分快吸干时，在浸入反复如此，敷半个小时，再用冷水洗净脸部，毛孔不见了，肌肤也会变得非常的紧致。'
      },
      {
        name:'酸奶蜂蜜保湿',
        img:'/img/meirong2.jpg',
        content:'将酸奶和蜂蜜取同样的.分量混合均匀，均匀的涂抹在脸部，15分钟后洗净，肌肤会变得非常光滑水嫩，还能持久锁住肌肤角质层的水分。'
      },
      {
        name:'小苏打去黑头',
        img:'/img/meirong3.jpg',
        content:'洗脸的时候，将小苏打于洗面奶混合一起洗脸，泡沫会变得非常细腻而且富有弹性，洗完之后，你会发现黑头减少很多，毛孔也缩小了不少。长期坚持，黑头就会消失了。'
      },
      {
        name:'牙膏消痘',
        img:'/img/meirong4.jpg',
        content:'牙膏具有非常好的清凉消炎作用，在痘痘红肿比较严重的时候，可取适量白色的牙膏涂抹在上面，能快速消除红肿，一个小时后洗净。'
      },
      {
        name:'茉莉花紧肤液',
        img:'/img/meirong5.jpeg',
        content:'将茉莉花的花苞浸泡入冷水中，倒入一可密封的容器中，再兑入少许的医用酒精。可每日清洁好脸部后，去适量拍打在脸部。肌肤会变得非常的清爽，毛孔也会细致很多。'
      },
      {
        name:'蜂蜜按摩',
        img:'/img/meirong6.jpg',
        content:'清洁好脸部后，趁水分还未干，取适量蜂蜜于掌心，双手掌对搓，再覆于面膜由内往外打圈按摩，动作要轻柔。按摩5分钟后，用清水洗净。脸部会变得非常细嫩、光泽，无紧绷感。'
      },
      {
        name:'玫瑰美容',
        img:'/img/meirong7.jpg',
        content:'将未全开放的玫瑰花朵，泡入香醋中，放置一星期。再兑入适量冷开水制作成洁肤水，早晚洗一次脸，长期坚持，可消除粉刺肌肤，令肌肤光滑细嫩。'
      },
      {
        name:'燕麦去角质',
        img:'/img/meirong8.jpg',
        content:'将燕麦片用鲜牛奶浸泡半小时，再搅拌成糊状，涂抹在脸部15分钟后，用清水洗净。可有效去除肌肤表层老化的角质，同时美白肌肤，使肌肤光滑细腻。'
      },
      {
        name:'草莓酸奶祛痘',
        img:'/img/meirong9.jpg',
        content:'将草莓去蒂洗净榨汁，加入酸奶喝面粉混合均匀，敷于脸部20分钟后用清水洗净。草莓具有消炎和收敛肌肤的作用，混合酸奶能改善肌肤油脂的分泌，能有效缓解痘痘的生长。'
      },
      {
        name:'白醋洗脸',
        img:'/img/meirong10.jpeg',
        content:'每日清洁脸部时，在洗脸盆中加入3~5滴白醋。长期坚持，能调节肌肤油水平衡，白醋具有的消炎效果，能抑制痘痘的生长，消除痘痘。'
      }
    ],
    clickIndex:0
  },
  onLoad: function () {
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    });
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
  gotoDetail(event){
    app.globalData.detail = event.currentTarget.dataset.row
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
      if(flag){
        flag = false
        setTimeout(()=>{flag = true},10000)
        if(res.isEnded){
            qq.navigateTo({
              url: '../detail/detail'
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
