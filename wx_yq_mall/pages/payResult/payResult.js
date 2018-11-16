var util = require('../../utils/util.js');
var api = require('../../config/api.js');
const pay = require('../../services/pay.js');

var app = getApp();
Page({
  data: {
    status: false,
    orderId: 0
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      orderId: options.orderId || 24,
      status: options.status
    })
    this.updateSuccess()
  },
  onReady: function () {

  },
  onShow: function () {
    // 页面显示

  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭

  },
  
  updateSuccess: function () {
    let that = this
    util.request(api.OrderQuery, { orderId: this.data.orderId}).then(function (res) {
    })
  },

  onPullDownRefresh(){
      // 显示顶部刷新图标
      wx.showNavigationBarLoading();
      // 增加下拉刷新数据的功能
      var self = this;
     // this.getGoodsList();
      // 隐藏导航栏加载框
      wx.hideNavigationBarLoading();
      // 停止下拉动作
      wx.stopPullDownRefresh();
  },

  payOrder() {
    pay.payOrder(parseInt(this.data.orderId)).then(res => {
      this.setData({
        status: true
      });
    }).catch(res => {
      util.showErrorToast('支付失败');
    });
  }
})