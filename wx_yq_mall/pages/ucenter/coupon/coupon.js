var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');



var app = getApp();

Page({
  data: {
    couponList: null
  },
  onLoad: function (options) {
    this.loadListData()
  },

  loadListData: function () {
    let that = this;

    util.request(api.CouponList).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          couponList: res.data
        });
      }
    });
  },

  onPullDownRefresh(){
      // 显示顶部刷新图标
      wx.showNavigationBarLoading();
      // 增加下拉刷新数据的功能
      var self = this;
      this.loadListData();
      // 隐藏导航栏加载框
      wx.hideNavigationBarLoading();
      // 停止下拉动作
      wx.stopPullDownRefresh();
  },

  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭
  }
})