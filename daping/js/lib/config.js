var config = {
  //域
  domain: "http://sg.byqmt.net:8086/", //domain: "http://10.1.1.28:8086/", //"http://dp.byqmt.net:8084/", //"http://188.168.4.218:6235", //"http://hngd.rongcm.com:8086", //http://dp.byqmt.net:8081/ 
  //页面请求数据的时间间隔
  getDataInterval: 500000,
  // 获取新闻列表时间间隔
  getDataIntervallist: 200000,
  //获取大样时间间隔
  getDataIntervalDayang: 600000,
  //列表滚动间隔
  autoScrollListInterval: 3000,
  //新闻列表时间颜色
  //默认1分钟之内, 10分钟之内, 1小时之内, 1小时以后
  timeagoColor: [60, 60 * 10, 60 * 60]
}