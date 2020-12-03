<view class="container">
  <image class="bg" src="/img/bg.jpeg"></image>
    <view class="title">
      公积金社保计算
    </view>
    <view class="content">
      <form bindsubmit="formSubmit" bindreset="formReset">
        <view class="section">
          <view class="section__title">您所在地区</view>
         <picker
            mode="region"
            bindchange="bindRegionChange"
            value="{{region}}"
          >
            <view class="picker">
             {{region[0]}} {{region[1]}}
            </view>
          </picker>
        </view>
        <view class="section">
          <view class="section__title">您的月工资</view>
          <input class="section-input" value="{{gongzi}}" type="digit" name="gongzi" placeholder="请输入" />
          <view class="danwei">元</view>
        </view>
        <view class="section">
          <view class="section__title">单位缴存比例</view>
          <input class="section-input" value="{{gongsi}}" type="number" name="gongsi" placeholder="请输入" />
          <view class="danwei">%</view>
        </view>
        <view class="section">
          <view class="section__title">个人缴存比例</view>
          <input class="section-input" value="{{own}}" type="number" name="own" placeholder="请输入" />
          <view class="danwei">%</view>
        </view>
        <view style="font-size:30rpx;text-align:center;margin-top:40rpx;">您已观看广告{{clickIndex}}次</view>
        <view class="btn-area">

          <button class="section-btn btn-submit" form-type="submit">观看广告查看结果</button>
          <button class="section-btn btn-share" open-type="share">分享给朋友</button>
          <button class="section-btn btn-show" bindtap="showRate">查看各地区的社保公积金缴存比列</button>
          <button class="section-btn btn-reset" form-type="reset">清除</button>
        </view>
      </form>
    </view>
</view>
