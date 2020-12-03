//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    qunestionList: [
        {
            question:'中国有一个传统习俗，农历腊月二十三日或二十四日要过“小年”，通常人们要吃',
            selectList:['元宵','饴糖','腊八粥','饺子'],
            answer:2,
            result:null
        },
        {
            question:'一种特殊的工艺美术制品，采用蓝色的原料，用紫铜打成胎型，填上釉料，入炉反复烧结再磨光而成。这指的是',
            selectList:['景泰蓝','彩陶','琉璃','铜鼎'],
            answer:1,
            result:null
        },
        {
            question:'兼听则明，偏信则暗”这一句古代格言出自',
            selectList:['《资治通鉴》','《论语》','《荀子》','《史记》'],
            answer:1,
            result:null
        },
        {
            question:'新党章是何时在什么会议上修改通过的?',
            selectList:['第十一次全国代表大会','第十三次全国代表大会','第十四次全国代表大会','第十六次全国代表大会'],
            answer:4,
            result:null
        },
        {
            question:'人舌头的哪个部位对甜味最敏感',
            selectList:['舌尖','舌两侧','舌根','舌中间'],
            answer:1,
            result:null
        }
    ],
    score:null
  },
  onLoad: function () {
    
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    });
  },
  selectChange(event) {
    console.log(event)
    let id = parseInt(event.currentTarget.dataset.id)-1
    let result = parseInt(event.currentTarget.dataset.selected)
    this.setData({
        [`qunestionList[${id}].result`]: result
    })
  },
  submit(){
    let qList =  JSON.stringify(this.data.qunestionList)
    let p =  this.data.qunestionList.length
    let corrent = this.data.qunestionList.filter(item=>{
        return item.result == item.answer
    }).length
    let score = corrent/p*100
    qq.setStorage({
        key: 'score',
        data: score
    })
    qq.setStorage({
        key: 'scorelist',
        data: qList
    })
    console.log(score,qList)
    qq.navigateTo({
      url: '../answer/answer'
    })
  }
})
