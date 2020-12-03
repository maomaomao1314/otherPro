<view class="container">
  <image class="bg" src="/img/bg.jpg"></image>
  <view class="header">
    <text class="title">一周饮食计划</text>
  </view>
  <view  class="content">
      
    <view style="font-size:30rpx;text-align:center;margin-top:40rpx;">您已观看广告{{clickIndex}}次</view>
      <view class="list">
        <view class="list-item" qq:for="{{list}}" qq:key="name">
          <button class="item-btn" data-row="{{item}}" bindtap="gotoDetail">
          <view>{{item.name}}</view>
          <view>观看广告查看</view>
          </button>
        </view>
      </view> 
  </view>
  <ad unit-id="512c1b892a5b2589be8f1060f0cc0e48" ad-width="100%" ad-top="150rpx;"></ad>
</view>
