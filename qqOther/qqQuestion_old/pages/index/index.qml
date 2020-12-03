<view class="index-container">
 <image class="bg" src="/img/bg.jpg"></image>
  <!-- <view class="userinfo">
    <button wx:if="{{!hasUserInfo && canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
    <block wx:else>
      <image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" mode="cover"></image>
      <text class="userinfo-nickname">{{userInfo.nickName}}</text>
    </block>
  </view> -->
  <view class="title-box">
    <image class="question-img" src="/img/question.png"></image>
    <text class="title1">知识问答</text>
    <text class="title2">学习新知识，开启新世界</text>
  </view>
  <view class="usermotto">
    <!-- <text class="user-motto">{{motto}}</text> -->
    <button type="warn" bindtap="gotoQuestion"> 开始答题 </button>
  </view>
</view>
