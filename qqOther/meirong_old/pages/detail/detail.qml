<view class="container">
  <image class="bg" src="/img/bg.jpg"></image>
  <view class="header">
    <text class="title">{{row.name}}</text>
  </view>
  <view  class="content-box">
    <image class="image" src="{{row.img}}"></image>
    <text class="content">使用方法：{{row.content}}</text>
    <button type="default" style="margin-top:50rpx;"  open-type="share">分享给好友</button>
  </view>
</view>
