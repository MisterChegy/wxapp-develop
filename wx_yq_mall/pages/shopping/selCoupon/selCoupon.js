var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');



var app = getApp();

Page({
  data: {
    couponList: null,
    buyType: ''
  },
  onLoad: function (options) {
    this.data.buyType = options.buyType
    this.loadListData()
  },

  loadListData: function () {
    let that = this;
    util.request(api.GoodsCouponList, { type: this.data.buyType }).then(function (res) {
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

  /**
   * 点击不使用优惠券
   * 返回上一页
   */
  noUseCoupon: function () {
    app.globalData.userCoupon = 'NO_USE_COUPON'
    wx.navigateBack({
    })
  },

  tapCoupon: function (event) {
    let item = event.currentTarget.dataset.item
    if (item.enabled==0) {
      return
    }
    app.globalData.userCoupon = 'USE_COUPON'
    app.globalData.courseCouponCode = item
    wx.navigateBack({
    })
  }
})