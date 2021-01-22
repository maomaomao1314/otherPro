<view class="record-container">
    <view class="title">答题记录</view>
    <view class="log-list">
        <view class="log-row" >
            <view class="log-item time head">时间</view>
            <view class="log-item score head">分数</view>
        </view>
    <block qq:for="{{data}}">
        <view class="log-row">
            <view class="log-item time">{{item.time}}</view>
            <view class="log-item score">{{item.score}}</view>
        </view>
    </block>
    </view>
</view>
