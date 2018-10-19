// pages/about/home.js
var WxParse = require('../../wxParse/wxParse.js');
var network = require("../../utils/http.js")

 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aid:"654654",
    list:[
      {
        title: "固定"
      },
      {
        title: "给对方"
      },

      {
        title: "发送给"
      }
    ],
    list2:[
      {
        title: "宝马",
        cars:[
          {
            name:"宝马1系",
          },
          {
            name:"宝马1系",
          },
          {
            name:"宝马1系",
          },
          {
            name:"宝马1系",
          },
          {
            name:"宝马1系",
          },
          {
            name:"宝马1系",
          },
        ]
      },
      {
        title: "奔驰",
        cars:[
          {
            name:"奔驰1系",
          },
          {
            name:"奔驰1系",
          },
          {
            name:"奔驰1系",
          },
          {
            name:"奔驰1系",
          },
          {
            name:"奔驰1系",
          },
          {
            name:"奔驰1系",
          },
        ]
      },

      {
        title: "本田",
        cars:[
          {
            name:"雅阁",
          },
          {
            name:"思域",
          },
          {
            name:"XR-V",
          },
          {
            name:"CR-V",
          },
          {
            name:"杰德",
          },
          {
            name:"飞度",
          },
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var params = {
            currentPage:1,
            pageSize:8,
            timeType:2
        }; 
    
    network.POST({
      params: params,
      API_URL: "/tuangou/getList",
      success: (res) => {
        // this.setData({
        //   hasRefesh: false,
        //   hasMore: false
        // })
        // if (this.data.orderData.length < res.data.count) {
        //   this.setData({
        //     orderData: this.data.orderData.concat(res.data.data),
        //     pageIndex: ++this.data.pageIndex
        //   })
        // } else {
        //   this.setData({
        //     hidden: true,
        //   })
        // }
        console.log(res)
      },
      fail: function (error) {
        console.log(error)
      }
    })
  },
  
  run(){
    var article = '<div>我是HTML代码</div>';
    /**
    * WxParse.wxParse(bindName , type, data, target,imagePadding)
    * 1.bindName绑定的数据名(必填)
    * 2.type可以为html或者md(必填)
    * 3.data为传入的具体数据(必填)
    * 4.target为Page对象,一般为this(必填)
    * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
    */
    var that = this;
    WxParse.wxParse('article', 'html', article, that, 5);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})