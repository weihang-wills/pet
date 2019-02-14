//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: "凭直觉选择一种动物",
    motto2: "测出你最近发生的事",
    array:[
      {src:'../result/src/webp.png'},
      {src:'../result/src/webp-1.png'},
      {src:'../result/src/webp-2.png'},
      {src:'../result/src/webp-3.png'},
      {src:'../result/src/webp-4.png'},
      {src:'../result/src/webp-5.png'},
      {src:'../result/src/webp-6.png'},
      {src:'../result/src/webp-7.png'},
        {src:'../result/src/webp-8.png'},
    ],


    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function(event) {
    wx.navigateTo({
      url: '../result/result?index='+event.target.dataset.index,
    })
  },

  onShareAppMessage: function () {
    return {
          title: '宠物小测试，测测你的近期运程',

        }
  },




  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
