<view class='whole'>
  <view class='v'></view>

  <view class='animationSlow' style='animation-duration: {{timeAnimation}};-webkit-animation-duration: {{timeAnimation}};'>
    <image class='img2' src='/img/fan/2.png'></image>
  </view>
</view>

<image class='img3' src='/img/fan/3.png'></image>

<button bindtap='changestop' data-time='0' class='a'>⊙</button>
<button bindtap='changeTime' data-time='800ms' class='b'>❃</button>
<button bindtap='changeTime' data-time='500ms' class='c'>❃❃</button>
<button bindtap='changeTime' data-time='300ms' class='d'>❃❃❃</button>

<button class='fx' open-type='share' >分享</button>