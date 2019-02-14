// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[
      {src:'../result/src/webp.png',
      detail:'预示着有好事，社会地位坚不可摧。在情感方面，梦见大象，可能提示你在人际关系方面，有点不够敏感，比如你需要在圆滑和机智的场合下，因为说话太直接而伤害到他人'
    },
      {src:'../result/src/webp-1.png',
    detail:'梦到那些神奇古怪，而又不易亲近的动物，表示你应该留意自己性格中的某些特质。章鱼能向各个方向伸展触手，这是你应当予以关心的暗示'},
      {src:'../result/src/webp-2.png',
    detail:'这两天你做事比较务实，许多时候都会好好计算一下成本和回报的比例再做决定。同时，对细节也比较关注。但是也因为过于计较，反而影响工作的进度。总的来说，无论是工作还是学业，这两天都是出成绩的一天哦'},
      {src:'../result/src/webp-3.png',
    detail:'梦见树袋熊意味着，放轻松的一天！往往会因为某个事情告一段落而变得心情轻松起来，自己一个人在家光着脚丫走来走去，按着音乐的节奏踩自己的舞步，也会做点自己喜欢吃的小甜点吧！对你来说，有点自恋倾向的这两天，越照镜子，越发现自己可爱'},
      {src:'../result/src/webp-4.png',
    detail:'狮子通常与尊严、力量、荣耀和勇气联系在一起，而这些正是你赖以成功所具备的内容。'},
      {src:'../result/src/webp-5.png',
    detail:'这两天你会花较多精力来集中完成一两个任务，而且往往成为这个过程的领导者。此外，虽然处于昨日，但你并没有多少让自己闲下来的愿望。就算休息，也是考虑问题的时候比较多。健康方面，容易受伤，参加剧烈运动还是小心一点好'},
      {src:'../result/src/webp-6.png',
    detail:'这是暗示感情路上会起波折，恩爱的两人可能会因为某些原因最终有缘无分。如果想挽留这份感情，在乎办法便是减少见面的机会。俗话说：距离产生美，希望这招对你管用'},
      {src:'../result/src/webp-7.png',
    detail:'气氛有些消极味道，自己想说的话却在该说的场合说不出口。无法顺畅地表达己见，不安与不满有积累在心里的感觉。身处人群中反而感到疲累情绪开朗不起来，既然如此就减少一些外出时间，早点回家最好。爱情运也差了些，尤其是暗地里的秘密恋情，最近少碰为妙'},
      {src:'../result/src/webp-8.png',
    detail:'平常对金钱总是看守严谨的你，却有失控的感觉喔。却可能为了当时热络的气氛而一时豪爽。比如为了充面子摆阔大方请客，但是却赢了面子输了里子，事后再来心痛后悔。所以啦，面子并不代表金钱上的慷慨，别搞错了。'},
    ],

    result:'',
    detail:'',

  },

  checkimg:function(){

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var op = options.index || 1;

    this.setData({
      result:this.data.array[op].src,
      detail:this.data.array[op].detail,
    })

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
     return {
           title: '宠物小测试，测测你的近期运程',

         }
   }

})
