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
  },

})
