var app = getApp();
Page({
  data: {
    username: '',
    code: ''
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    // 页面渲染完成
    
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
  startLogin: function(){
    var that = this;
  },
  bindUsernameInput: function(e){
    
    this.setData({
      username: e.detail.value
    });
  },
  bindCodeInput: function(e){
    
    this.setData({
      code: e.detail.value
    });
  },

  onPullDownRefresh(){
      // 显示顶部刷新图标
      wx.showNavigationBarLoading();
      // 增加下拉刷新数据的功能
      var self = this;
      //this.getGoodsList();
      // 隐藏导航栏加载框
      wx.hideNavigationBarLoading();
      // 停止下拉动作
      wx.stopPullDownRefresh();
  },

  clearInput: function(e){
    switch (e.currentTarget.id){
      case 'clear-username':
        this.setData({
          username: ''
        });
        break;
        case 'clear-code':
        this.setData({
          code: ''
        });
        break;
    }
  }
})