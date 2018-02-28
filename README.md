# 微信轮播图


*不管是做APP开发还是小程序，移动端离不开轮播图的功能，下面就写一个小程序的轮播图功能分享给大家*

#### 效果图：

![carousel.png](http://upload-images.jianshu.io/upload_images/4041074-6cef2440ae2cfa44.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###### step1:页面index.wxml代码

```
<!--index.wxml-->
<view class="container">
    <!--轮播图-->
  <swiper class="home-swiper" indicator-dots="true" autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}">
    <block wx:for-items="{{lunboData}}">
      <swiper-item>
        <image src="{{item.imgurl}}" class="slide-image" />
      </swiper-item>
    </block>
  </swiper>
</view>
```

###### step2:配置信息

```
//index.js
Page({
  data: {
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1200
  },
  onLoad: function () {
    var that = this; 
    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "../../images/a1.jpg"
        },
        {
          "id": 2,
          "imgurl": "../../images/a2.jpg"
        },
        {
          "id": 3,
          "imgurl": "../../images/a3.jpg"
        },
        {
          "id": 4,
          "imgurl": "../../images/a4.jpg"
        }
      ]
    }; 
    that.setData({
      lunboData: data.datas
    })
  }
})
```

###### step3:样式文件

```
/**index.wxss**/

/*轮播控件*/

.home-swiper {
  width: 95%;
  height: 360rpx;
}

.slide-image {
  width: 100%;
  height: 100%;
}
```
