<view class="container">
  <image class="bg" src="/img/bg.jpeg"></image>
  <view class="result">
      <view class="result-title">各地区社保缴纳比例</view>
          <view class="t-list">
            <view class="row" qq:for="{{rate}}" qq:key="name">
              <view class="t_item">
                <view class="t_title" style="color:red;">{{item.name}}</view>
                <view class="t_upper"> 上限</view>
                <view class="t_down"> 下限</view>
                <view class="t_gongsi"> 公司</view>
                <view class="t_own"> 个人</view>
              </view>
             <view class="t_item">
                <view class="t_title">养老保险</view>
                <view class="t_upper"> {{item.yanglaoUpper}}</view>
                <view class="t_down"> {{item.yanglaoByOwn}}</view>
                <view class="t_gongsi"> {{item.yanglaoByCompany}}</view>
                <view class="t_own"> {{item.yanglaoByOwn}}</view>
            </view>
            <view class="t_item">
              <view class="t_title">医疗保险</view>
                <view class="t_upper"> {{item.yiliaoUpper}}</view>
                <view class="t_down"> {{item.yiliaoByOwn}}</view>
                <view class="t_gongsi"> {{item.yiliaoByCompany}}</view>
                <view class="t_own"> {{item.yiliaoByOwn}}</view>
            </view>
            <view class="t_item">
              <view class="t_title">生育保险</view>
                <view class="t_upper"> {{item.shengyuUpper}}</view>
                <view class="t_down"> {{item.shengyuByOwn}}</view>
                <view class="t_gongsi"> {{item.shengyuByCompany}}</view>
                <view class="t_own"> {{item.shengyuByOwn}}</view>
            </view>
            <view class="t_item">
              <view class="t_title">工商保险</view>
                <view class="t_upper"> {{item.gongshangUpper}}</view>
                <view class="t_down"> {{item.gongshangByOwn}}</view>
                <view class="t_gongsi"> {{item.gongshangByCompany}}</view>
                <view class="t_own"> {{item.gongshangByOwn}}</view>
            </view>
            </view>
        </view>
    </view>
</view>