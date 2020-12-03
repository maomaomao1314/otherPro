<view class="container">
  <image class="bg" src="/img/bg.jpg"></image>
  <view class="header">
    <text class="title">美容小助手</text>
   
  </view>
  <view  class="content">
    <scroll-view scroll-y class="question-scroll" style="height: 100%;">
    <view style="font-size:30rpx;text-align:center;margin-top:40rpx;">您已观看广告{{clickIndex}}次</view>
      <view class="list">
        <view class="list-item" qq:for="{{list}}" qq:key="name">
        
          <text class="item-title">{{index+1}}、{{item.name}}</text>
          <image class="item-image" src="{{item.img}}"></image>
          <button class="item-btn" data-row="{{item}}" bindtap="gotoDetail">观看广告查看使用方法>></button>
        </view>
      </view> 
    <ad unit-id="1f627ac7262f0a21d8000c3da9c6ecf0" ad-width="100%" ad-top="150rpx;"></ad>
    </scroll-view>
  </view>
</view>
