<view class="question-container">
  <view class="content">
        <scroll-view scroll-y class="question-scroll" style="height: 100%;">
          
          <ad unit-id="8cc26ae55083ea6d776a44ae2df7527f"></ad>
     <navigator  style="text-align:center;margin-top:50rpx;width:90vw;color:orange;" url="/pages/clickLogs/clickLogs" hover-class="navigator-hover">您已观看广告{{clickIndex}}次</navigator>     
    
           <view class="question-list">
                <view class="quetion-item" qq:for="{{qunestionList}}" qq:key="question">
                   <view class="quetion-item-inner">
                     <text class="question-title"> {{index+1}} {{item.question}}</text>
                     <image qq:if="{{item.img}}" class="question-img" src="{{item.img}}"></image>
                      <view class="question-select">
                          <view qq:for="{{item.selectList}}" qq:key="item"  qq:for-index="id" qq:for-item="listdata">
                              <button size="default" class="{{item.result == id+1?'radio selected':'radio'}}" data-id="{{index+1}}" data-selected="{{id+1}}" bindtap="selectChange">
                                <text style="margin-left:10rpx;" qq:if="{{id==0}}">A、</text>
                                <text style="margin-left:10rpx;" qq:if="{{id==1}}">B、</text>
                                <text style="margin-left:10rpx;" qq:if="{{id==2}}">C、</text>
                                <text style="margin-left:10rpx;" qq:if="{{id==3}}">D、</text>
                                {{listdata}}
                              </button>
                          </view>
                      </view>
                      <view class="question-result">
                        <view style="width:100%;"> 您选中的答案是</view>
                        <view class="result-text" qq:if="{{item.result==1}}">A</view>
                        <view class="result-text" qq:if="{{item.result==2}}">B</view>
                        <view class="result-text" qq:if="{{item.result==3}}">C</view>
                        <view class="result-text" qq:if="{{item.result==4}}">D</view>
                      </view>
                   </view>
                </view>
           </view>
        </scroll-view>
           <view class="page-bottom" style="text-align:center;width:100%;">
            <button style="text-align:center;width:90vw;"  bindtap="submit" type="primary">观看广告查看答案</button>
           </view>
  </view>
</view>
