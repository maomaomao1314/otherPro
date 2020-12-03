<view class="index-container">
 <image class="bg" src="/img/bg.jpg"></image>
  <view class="title-box">
    <image class="question-img" src="/img/question.png"></image>
    <text class="title1">您的分数</text>
    <text class="title2">{{score}}</text>
  </view>
  <view class="score-box" qq:for="{{scorelist}}" qq:key="item.question">
   {{index+1}}、{{item.result == item.answer?'正确':'错误'}}
  </view>
</view>
