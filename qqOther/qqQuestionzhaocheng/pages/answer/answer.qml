<view class="index-container">
 <image class="bg" src="/img/bganswer.png"></image>
  <view class="title-box">
    <text class="title1">您的分数</text>
    <text class="title2">{{score}}</text>
  </view>
  <button style="text-align:center;margin:50rpx 0;width:90vw;color:blue;" plain bindtap="gotoBack">返回观看广告页</button>
  <view class="score-box">
    <view class="score-row" qq:for="{{scorelist}}" qq:key="question">
      {{index+1}}、{{item.result == item.answer?'正确':'错误'}}
    </view>
  </view>
  
</view>