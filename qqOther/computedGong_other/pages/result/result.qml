<view class="container">
  <image class="bg" src="/img/bg.jpeg"></image>
   
    <view class="result">
      <view class="result-title">社保缴纳--{{value.name}}</view>
          <view class="t-list">
            <view class="t_item">
              <view class="t_title">应缴</view>
              <view class="t_gongsi"> 公司</view>
              <view class="t_own"> 个人</view>
            </view>
            <view class="t_item">
              <view class="t_title">养老保险</view>
              <view class="t_gongsi"> {{value.yanglaoByCompony}}</view>
              <view class="t_own"> {{value.yanglaoByOwn}}</view>
            </view>
            <view class="t_item">
              <view class="t_title">医疗保险</view>
              <view class="t_gongsi"> {{value.yiliaoByCompany}}</view>
              <view class="t_own"> {{value.yiliaoByOwn}}</view>
            </view>
            <view class="t_item">
              <view class="t_title">生育保险</view>
              <view class="t_gongsi"> {{value.shengyuByCompany}}</view>
              <view class="t_own"> /</view>
            </view>
            <view class="t_item">
              <view class="t_title">工商保险</view>
              <view class="t_gongsi"> {{value.gongshangByCompany}}</view>
              <view class="t_own"> /</view>
            </view>
            <view class="t_item">
              <view class="t_title">公积金</view>
              <view class="t_gongsi"> {{value.p1}}</view>
              <view class="t_own"> {{value.p2}}</view>
            </view>
        </view>
        <view class="result-title">公积金贷款额度</view>
        <view class="result-info">
            贷款额度 = [（借款人月工资总额 + 借款人所在单位住房公积金月缴存额）× 还贷能力系数40% ㄧ 借款人或夫妻双方现有贷款月应还贷额 ] × 12（月）× 贷款年限。
          </view>
        <view class="result-list">
          <view class="result-display">公积金最大贷款额度 <text class="result-value"> {{value.p4}}</text> 元</view>
        </view>
        <view class="result-title">工资水平</view>
        <view class="result-list">
          <view qq:if="{{value.p5 > 0 }}" class="result-display">您的工资超过了全国平均水平 <text class="result-value"> {{value.p5}} </text> 元</view>
          <view qq:if="{{value.p5 < 0 }}" class="result-display">您的工资低于全国平均水平,还需继续努力</view>
        </view>
    </view>
</view>
