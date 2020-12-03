<view class="container">
  <image class="bg" src="/img/detail_bg.jpeg"></image>
  <image class="image" src="{{row.img}}"></image>
  <view class="header">
    <text class="title">{{row.name}}{{type=='food'?'饮食':'运动'}}计划</text>
  </view>
  <view  class="content-box" qq:if="{{type=='food'}}">
    <view class="content">
      <text class="food-title">早餐：</text>
      <text class="food-con">{{row.content1}}</text>
    </view>
    <view class="content">
      <text class="food-title">午餐：</text>
      <text class="food-con">{{row.content2}}</text>
    </view>
    <view class="content">
      <text class="food-title">加餐：</text>
      <text class="food-con">{{row.content3}}</text>
    </view>
    <view class="content">
      <text class="food-title">晚餐：</text>
      <text class="food-con">{{row.content4}}</text>
    </view>
  </view>
   <view  class="content-box" qq:if="{{type=='move'}}">
    <view class="content">
      <text class="food-title">热身：</text>
      <text class="food-con">{{row.content1}}</text>
    </view>
    <view class="content">
      <text class="food-title">锻炼：</text>
      <text class="food-con">{{row.content2}}</text>
    </view>
  </view>
</view>
