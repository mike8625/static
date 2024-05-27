$.fn.echartslite = function(aOption) {
  var cfgData = chartStore.getData();    
  var chartOption = aOption;
  if(chartOption.styleChange) { //styleChange属性是用来给图表增加 不同类型变化的功能 会在右下角多出一个按钮 来选择不同的类型
    chartOption.type = cfgData.type || chartOption.type;
    chartOption.color = cfgData.color;
  }
  // 为了能支持更多类型的图表 把类型做进一步拆分 添加了一个subType 比如柱状图 还可以再设置为极坐标图
  chartOption.mainType = aOption.type.split("-")[0];
  chartOption.subType = aOption.type.split("-")[1] || null;
  var ratio = 1;
  if($.fn.echartsliteConfig){
    ratio = $.fn.echartsliteConfig.ratio || 1;
    $.fn.echartsliteConfig.ratio = ratio;
  }
  //console.log(ratio)
  //数据
  var _chart = null;
  var that = this;
  var option = {
    title : {
        text: chartOption.title || '',
        subtext: chartOption.subtitle || '',
        left: 'center',
        textStyle: {
          fontSize: 30 * ratio,
          color: "#FFFFFF",
		      fontWeight:500,
        }
    },
    grid: {
      //是否显示边框
      show: false,
      top: 80 * ratio,
      left: "5%",
      right: "3%"
    },
    legend: {
      left: "5%",
      top: 5  * ratio,
      textStyle: {
        fontSize: 20 * ratio,
        color: "#FFFFFF"
      },
      orient: chartOption.lengendOrient || "horizontal"      
    },
    tooltip: {
        formatter: "{a}<br>{c}"
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
            restore: {color: "red"},
            saveAsImage: {
              backgroundColor: "#000"
            },
        },
        iconStyle:{
          normal:{
            borderColor: "#FFFFFF"
          }
        }
    },    
    series : [],
    textStyle: {
      fontSize: 26 * ratio,
      color: "#FFFFFF"
    },
    color: (chartOption.color && chartOption.color.length) ? chartOption.color : ['#3366CC','#DC3912', '#FF9900', '#0099C6', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
  };    
  
  function init(){
    if(!chartOption.data)
      return;
    initLengend();
    initChart();
    initSeries(chartOption.data);
    menubar.init(chartOption.configData)
    //增加一个扩展方法
    if($.fn.echartsliteConfig && $.fn.echartsliteConfig.option){
      $.extend(true, option, $.fn.echartsliteConfig.option );
    }
    if(chartOption.changeOption){
      //可以交给前面去改 还可以让前面返回一个对象 混合
      var o = chartOption.changeOption(option, "init")  
      if(o) {
        $.extend(true, option, o);
      }
    }
     _chart = echarts.init(that[0]);  
     //console.log(JSON.stringify(option))
     // console.log(option)
     _chart.setOption(option);  
  }
  function initXArr(data) {
    // 为更新方法做的判断 更新的时候 xAxis对象可能会被echartsliteConfig.option赋上别的值 不能重新创建
    if(option.xAxis) {
      option.xAxis.data = [];
    }
    else {
      option.xAxis = {
          type : 'category',
          data : []
      }
    }
    for (var i = 0; i < data.length; i++) {
      var xStr = $.trim(data[i][chartOption.x.value]);
      option.xAxis.data.push({
        value: xStr,
        textStyle: {
          //x轴字体
          fontSize: 20 * ratio
        }
      });
    }
  }
  
  function initRadarChart(data){
    option.tooltip.formatter = "{b}<br>{c}";
    var serMap = chartOption.seriesMap;
    if(!$.isArray(serMap)){
      serMap = [serMap];
    }
    var maxArr = [];
    var name = chartOption.x.value;
    for(var i = 0; i < data.length; i++){
      var valueArr = [];
      for(var t = 0; t < serMap.length; t++){
        var key = serMap[t].value;
        valueArr.push(data[i][key]);
      }
      maxArr.push({
        name: data[i][name],
        max: Math.max.apply(Math, valueArr) + 5
      })
    }
    //console.log(arr)
    option.radar= {
      // shape: 'circle',
      center: ['50%','55%'],
      axisLabel:{
        //show: true,
        formatter: function (value, index) {return parseInt(value)}
      },
      radius: "75%",
      indicator: maxArr
    }
  }
  
  function initBarSeries(data){
    var serMap = chartOption.seriesMap;
    if(!$.isArray(serMap)){
      serMap = [serMap];
    }
    for (var i = 0; i < serMap.length; i++) {
      var v = serMap[i].value;
      var name = serMap[i].name;
      var arr = [];
      for (var t = 0; t < data.length; t++) {
        arr.push({
          value: parseFloat(data[t][v]) || 0
        });
      }
      var o = {
        type: chartOption.mainType,
        data: arr,
        name: name
      }
       
      if(chartOption.mainType == "line") {
        //折线图宽度        
        o.lineStyle= {
          normal: {
            width: 5
          }
        }
        o.symbolSize = 8 * ratio;
        // 折线-散点图
        if(chartOption.subType == "scatter") {
          //气泡
          o.type = "scatter"  
          o.symbolSize = 50 * ratio;
        }
        else if(chartOption.subType == "area") {
          //折线-区域
          o.type = 'line';
          o.stack = "总量";  
          o.areaStyle= {normal:{}};
        }
      }
      
      else if(chartOption.mainType == "bar") {
        // 极坐标图表 !!!!需要echarts3.8+ full版本
        if(chartOption.subType == "polar") {
          o.type = 'bar';
          o.coordinateSystem = 'polar';
          //o.name = 'A' + i;
          o.stack = '总量';
        }
        // 堆叠
        else if(chartOption.subType == "stack") {
          o.type = 'bar';
          o.stack = '总量';
        }
        else if(chartOption.subType == "horizontalstack") {
          //两个柱合并 并改变宽度
          o.stack = "总量";
        }
        o.barWidth = null;
      }
      option.series.push(o);
    }
    if(chartOption.subType == "polar") {
      option.radiusAxis = {};
      option.angleAxis = option.xAxis;
      option.xAxis.data = [];
      option.polar = {};   
    }
    else if(chartOption.subType == "horizontal" || chartOption.subType == "horizontalstack") {
      //x和y交换 柱状图横过来
      [option.xAxis, option.yAxis] = [option.yAxis, option.xAxis];  
    }
  }
  
  function initPieSeries(data){
    var serMap = chartOption.seriesMap;
    if(!$.isArray(serMap)){
      serMap = [serMap];
    }
    var arr = [];
    for (var i = 0; i < serMap.length; i++) {
      //console.log(data[i][serMap[i].value])
      var v = parseFloat(data[i][serMap[i].value]) || 0;
      var name = serMap[i].name;
      arr.push({
        name: name,
        value: v 
      })
    } 
    var o = {
      name: "",
      radius : '70%',
      type: chartOption.mainType,
      data: arr,
      label:{
        normal:{
          show: false
        }
      }      
    }
    if(chartOption.subType == "area"){
      o.roseType = "area";
    }
    else if(chartOption.subType == "circle") {
      o.radius = ['60%', '80%'];
    }
    option.series.push(o)  
    //console.log(series)   
  }
  
  function initCircleSeries(data){
    //console.log(data)
    var p = parseFloat(data.percent) / 100;
    var remainNum = data.value / p - data.value;
    //console.log(remainNum)
    option.legend.show = false;
    option.series.push({
      name: "",
      radius : ['70%', '80%'],
      type: "pie",
      tooltip: {
        formatter: function (params, ticket, callback) {
          if (params.dataIndex == 1){
            return "";
          }
          return params.value;
        }
      },
      data: [{value: data.value, name: data.name},{value: remainNum || 1, name: ""}],
      avoidLabelOverlap: false,
      label:{
        normal:{
          show: true,
          position: "center",
          formatter: function(n){
            if(!n.name)
              return "";
            return " " + n.name + "\r\n" + n.value
          },
          textStyle: {
            fontSize: 60 * ratio,
            textAlign: "center"  
          },
          
        }
      },
      color: [chartOption.circleColor || '#3366CC', chartOption.circleRemainColor || 'rgba(145,145,145,.3)']     
    })  
    //console.log(series)   
  }
  
  function initGaugeSeries(data){
    var serMap = chartOption.seriesMap;
    if(!$.isArray(serMap)){
      serMap = [serMap];
    }
    
    for (var i = 0; i < serMap.length; i++) {
      var arr = [];
      //console.log(data[i][serMap[i].value])
      var v = parseFloat(data[i][serMap[i].value]) || 0;
      var name = serMap[i].name;
      arr.push({
        name: name,
        value: v 
      })
      var o ={
        name: '',
        type: 'gauge',
        center: serMap[i].pos || ["50%", "50%"],
        detail: {formatter:'{value}'},
        data: arr,
        title: {
          textStyle:{
            fontSize: 40 * ratio,
            color: "#FFFFFF"
          }
        }
      }      
      option.series.push(o)     
    }     
  }
  
  function initRadarSeries(data){
    var serMap = chartOption.seriesMap;
    if(!$.isArray(serMap)){
      serMap = [serMap];
    }    
    var rData = [];
    for (var i = 0; i < serMap.length; i++) {
      var v = serMap[i].value;
      var name = serMap[i].name;
      var arr = [];
      for (var t = 0; t < data.length; t++) {
        arr.push(parseFloat(data[t][v]) || 0);
      }
      rData.push({
        value: arr,
        name: name  
      })
    }
    option.series.push({
       //name:"radar",
       type: 'radar',
       data: rData  
    });
  }
  
  function initSeries(data) {
    switch(chartOption.mainType){
      case "line":
      case "bar":
        initBarSeries(data);
        break;
      case "pie":
        initPieSeries(data);  
        break;
      case "circle":
        initCircleSeries(data);  
        break;
      case "gauge":
        initGaugeSeries(data);  
        break;
      case "radar":
        initRadarSeries(data);  
    }
    if($.fn.echartsliteConfig && $.fn.echartsliteConfig.seriesOption && $.fn.echartsliteConfig.seriesOption[chartOption.mainType]){
      var typeOption = $.fn.echartsliteConfig.seriesOption[chartOption.mainType];
      for(var i = 0; i < option.series.length; i++){
        $.extend(true, option.series[i], typeOption );
      }      
    }
  }
  
  function initChart() {
    switch(chartOption.mainType){
      case "line":
      case "bar":
        initXArr(chartOption.data);
        option.yAxis = {
          axisLabel:{
            textStyle: {
              fontSize: 20 * ratio
            }
          },
          type: 'value',
          splitLine: {
            show: false,
            lineStyle: {
              opacity: 0.2
            }
          }          
        }
        option.tooltip.formatter = "{a}<br>{c}";
        break;
      case "pie":
        option.tooltip.formatter = "{b}<br>{c}";
        break;
      case "gauge": 
        option.tooltip.formatter = "{a} <br/>{b} : {c}%"
        break;
      case "radar":
        initRadarChart(chartOption.data);
        break;   
          
    }
  }
  
  function initLengend(){
    if(!chartOption.seriesMap)
      return;
    var serMap = chartOption.seriesMap;
    if(!$.isArray(serMap)){
      serMap = [serMap];
    }
    var arr = []; 
    for (var i = 0; i < serMap.length; i++) {
      arr.push(serMap[i].name);
    }     
    //console.log(arr)
    option.legend.data = arr;
  }    
  
  function update(data){
    option.data = data;
    option.series = [];
    initSeries(data);
    initLengend();
    initXArr(chartOption.data);
    // 因为changeOption里面 可能会改变series的东西,所以这里必须再调用一次changeOption 
    if(chartOption.changeOption){
      chartOption.changeOption(option, "update");  // 增加了第二个参数 用来判断是初始化还是更新的时候调用update,主要是为了处理,柱状图横变竖的问题,如果再调用一次就又倒过来了
    }
    _chart.setOption(option);  
  }

  //增加一个按钮 点击后显示菜单 上面显示的是配置出来的选项, 主要记录一些配置, 页面的代码可以根据配置改变颜色,以及可以改变图表的类型
  var menubar = {
    style: '.c-chartmenu-con { '+
          '  font-size: 14px; '+
          '  position: fixed; '+
          '  right: 20px; '+
          '  bottom: 20px;   '+
          '  z-index: 999999;   '+
//          '  opacity: 0; '+
          '} '+
//          '.c-chartmenu-con:hover { '+
//          '  transition: all 2s; '+
//          '  opacity: 1; '+
//          '} '+
          '.c-chartmenu-bar { '+
          '  width: 26px; '+
          '  height:26px; '+
          '  border-radius: 3px; '+
          '  border: solid 1px #FFFFFF; '+
          '  padding: 3px 4px; '+
          '  box-shadow: 0 0 4px 1px #CCCCCC; '+
          '  cursor: pointer; '+
          '  background: #FFFFFF; '+
          '} '+
          '.c-chartmenu-bar i { '+
          '  display: block; '+
          '  width: 100%; '+
          '  height:1px; '+
          '  border-top: solid 3px #888888; '+
          '  margin-top: 4px; '+
          '} '+
          '.c-menubox-lv1 { '+
          '  width: 120px; '+
          '  background: #FFFFFF; '+
          '  border-radius: 3px; '+
          '  color: #555; '+
          '  position: absolute; '+
          '  bottom: 34px; '+
          '  right: 0; '+
          '  box-shadow: 0 0 4px 1px #CCCCCC; '+
          '} '+
          '.c-menuitem-lv1:hover, .c-menuitem-lv1:hover .c-menuitem-lv2 { '+
          '  color: #000; '+
          '} '+
          '.c-menuitem-lv1, .c-menuitem-lv2 { '+
          '  cursor: pointer; '+
          '  padding: 3px 8px; '+
          '  border-bottom: solid 1px #888; '+
          '  position: relative; '+
          '} '+
          '.c-menuitem-lv1:after { '+
          '  content: ""; '+
          '  position:absolute; '+
          '  right: 8px; '+
          '  top: 7px; '+
          '  width: 10px; '+
          '  height: 10px; '+
          '  border-top: solid 1px #888; '+
          '  border-right: solid 1px #888; '+
          '  transform: rotate(45deg); '+
          '} '+
          '.c-menuitem-lv1:last-child { '+
          '  cursor: pointer; '+
          '  border:none; '+
          '} '+
          '.c-menubox-lv2 { '+
          '  width: 120px; '+
          '  background: #FFFFFF; '+
          '  color: #555; '+
          '  position: absolute; '+
          '  left: -99%; '+
          '  bottom: 0; '+
          '  box-shadow: 0 0 4px 1px #CCCCCC; '+
          '  border-radius: 3px; '+
          '} ' +
          '.c-menuitem-spacer {' + 
          '  position: absolute; '+
          '  height: 100px; '+
          '  width: 120px; '+
          '  top: -120px; '+
          '  left: 0;' +  
          '} ' +        
          '.c-menuitem-lv1:hover .c-menubox-lv2 .c-menuitem-lv2:active { '+
          '  font-weight: bold; '+
          '} ',
    tmpl: '<div class="c-chartmenu-con" style="opacity:0;"> '+
          '  <div class="c-chartmenu-bar"> '+
          '    <i></i><i></i><i></i> '+
          '  </div> '+
          '  <ul class="c-menubox-lv1" style="display:none;"> '+
          '    <li class="c-menuitem-lv1 c-menuitem-charttype">图表类型 '+
          '      <div class="c-menuitem-spacer"></div>' +
          '      <ul class="c-menubox-lv2" style="display:none;"> '+
          '        <li class="c-menuitem-lv2" v="" m="type">恢复默认</li> '+
          '      </ul>' + 
          '    </li> '+
          '    <li class="c-menuitem-lv1 c-menuitem-chartcolor">图表颜色 '+
          '      <ul class="c-menubox-lv2" style="display:none;"> '+
          '        <li class="c-menuitem-lv2" m="color" v=\'#c23531,#2f4554,#61a0a8,#d48265,#91c7ae,#749f83,#ca8622,#bda29a,#6e7074,#546570,#c4ccd3\'>方案1</li> '+
          '        <li class="c-menuitem-lv2" m="color" v=\'#fa2c7b,#04c5f3,#0066fe,#8932a5,#c90444,#cb9bff,#434348,#ffa235,#ff38e0,#90ed7d,#f7a35c,#8085e9\'>方案2</li> '+
          '        <li class="c-menuitem-lv2" m="color" v=\'#3b6291,#943c39,#779043,#624c7c,#388498,#bf7334,#3f6899,#9c403d,#7d9847,#675083,#3b8ba1,#c97937\'>方案3</li> '+
          '        <li class="c-menuitem-lv2" m="color" v=\'#0e72cc,#6ca30f,#f59311,#fa4343,#16afcc,#85c021,#d12a6a,#0e72cc,#6ca30f,#f59311,#fa4343,#16afcc\'>方案4</li> '+
          '        <li class="c-menuitem-lv2" m="color" v=\'#37A2DA,#fb7293,#FFDB5C,#9FE6B8,#96BFFF,#ff9f7f,#32C5E9,#E690D1,#8378EA,#e7bcf3,#9d96f5,#67E0E3,#E062AE\'>方案5</li> '+
          '        <li class="c-menuitem-lv2" m="color" v=\'#0AF2FF,#E44152,#F6A678,#2A8DE2,#79F08E,#6288FD,#8E10AF,#73a373,#73b9bc,#7289ab,#91ca8c,#f49f42\'>方案6</li> '+
          '        <li class="c-menuitem-lv2" m="color" v="">恢复默认</li>  '+             
          '      </ul> '+
          '    </li> '+
          '  </ul> '+
          '</div> ',
    bar: null,      
    types: {
      bar:{
          type: [
            {
              value: "bar",
              name: "柱状图"  
            },
            {
              value: "bar-stack",
              name: "堆叠图"  
            },
            {
              value: "bar-polar",
              name: "极坐标图"  
            },
            {
              value: "bar-horizontal",
              name: "横向柱状图"  
            },
            {
              value: "bar-horizontalstack",
              name: "横向堆叠柱状图"  
            },
            {
              value: "line",
              name: "折线图"  
            },
            {
              value: "line-area",
              name: "折线区域图"  
            },
            {
              value: "line-scatter",
              name: "折线散点图"  
            }
          ]
      },
      pie: {
        type: [
          {
            value: "pie",
            name: "饼图"  
          },
          {
            value: "pie-area",
            name: "玫瑰图"  
          },
          {
            value: "pie-circle",
            name: "环形图"  
          }
        ]
      }      
    },
    init: function(data) {
      //为了能够统一处理 加了从config.js里面去读取
      var b; 
      if(typeof(chartOption.styleChange) != "undefined"){
        b = chartOption.styleChange
      }
      else if(window.config && window.config.chartStyleChange){
          b = window.config.chartStyleChange;
      }
      if(!b){
        return;
      }
      this.bar = $(this.tmpl);
      data = data || {};
      var defData;
      switch(chartOption.mainType) {
        case "bar":
        case "line":
          defData = this.types.bar;
          if(parseFloat(echarts.version) < 3.8){  // 3.8-不支持极坐标  最后发现必须是3.8以上且是完全版才可以....
            defData.type = defData.type.filter(function(item){return item.value != 'bar-polar'})
          }
          break;
        case "pie":
          defData = this.types.pie;  
          break;
        default: 
          defData = {};  
      }
      $.extend(true, defData, data);
      this.createElement(defData);
      this.bindEvent();
      var styleEle = document.createElement("style");
      styleEle.textContent = this.style;
      $(document).find("head").append(styleEle);
      $(document.body).append(this.bar)
    },
    createElement: function(data) {
      if(data.type && data.type.length){
        var arr = data.type;
        for(var i = 0; i < arr.length; i++) {
          if(!arr[i].value){
            continue;
          } 
          var item = $('<li class="c-menuitem-lv2" v="" m="type"></li>');
          item.text(arr[i].name);
          item.attr("v", arr[i].value);
          this.bar.find(".c-menuitem-charttype .c-menubox-lv2").children().last().before(item);
        }
      }
      else {
        this.bar.find(".c-menuitem-charttype").hide();
      }
      if(data.color && data.color.length) {
        var arr = data.color;
        for(var i = 0; i < arr.length; i++) {
          var item = $('<li class="c-menuitem-lv2" v="" m="color"></li>');
          item.text(arr[i].name);
          item.attr("v", arr[i].value.join(","));
          this.bar.find(".c-menuitem-chartcolor .c-menubox-lv2").children().last().before(item);
        }            
      }
    },
    bindEvent: function() {
      var that = this;
      // 一开始按钮是透明的 鼠标拂过以后 显示出来
      this.bar.mouseover(function(){
          //that.closeMenubar();
          $(this).css("opacity", 1);
      })
      // 如果第一层菜单收回的时候 鼠标离开按钮才会隐藏起来
      this.bar.mouseout(function(){
          //that.closeMenubar();
          if(!$(this).find(".c-menubox-lv1").is(":visible")){
            $(this).css("opacity", 0);  
          }
      })
      // 点击按钮隐藏和显示菜单 第一层菜单不点击收回的话 不会自动隐藏
      this.bar.find(".c-chartmenu-bar").click(function(){
        if($(".c-menubox-lv1").is(":visible")){
          $(".c-menubox-lv1").hide();
        }
        else {
          $(".c-menubox-lv1").show();
        }
      })
      // 鼠标拂过子项
      this.bar.find(".c-menuitem-lv1").hover(function(){
          $(this).find(".c-menubox-lv2").show();
      },function(){
          $(this).find(".c-menubox-lv2").hide();
      })
      //点击子项
      this.bar.find(".c-menuitem-lv1 .c-menuitem-lv2").click(function(){
          that.closeMenubar();
          var d = chartStore.getData();
          console.log($(this)[0])
          var m = $(this).attr("m");
          var v = $(this).attr("v");
          if(m == "type") {
            d.type = $(this).attr("v");
          }
          else if(m == "color") {
            d.color = v ? $(this).attr("v").split(",") : "";
          }
          chartStore.setData(d);
          if(chartOption.changeCallback) {
            chartOption.changeCallback(m, v);
          }
          else {
            location.reload();
          }
      })
    },
    closeMenubar: function() {
      this.bar.find(".c-menubox-lv1").hide().find(".c-menubox-lv2").hide();
    }
  }
    
  init();  
  
  return {
    chart: _chart,
    option: option,
    chartOption: chartOption,
    update: function(d){
      update(d)
    }
  };
}

// 存储数据对象. 现在主要用在上门的menubar里面
var chartStore= {
  setData: function(o) {
    var d = this.getMainData(); 
    d[location.href] = o;
    localStorage.mychartdata = JSON.stringify(d);
  },
  getData: function(){
    var d = this.getMainData();
    return d[location.href] || {};
  },
  getMainData: function(){
    var ldata;
    try {
      ldata = JSON.parse(localStorage.mychartdata);
    }catch(e){
      ldata = {};
      localStorage.mychartdata = JSON.stringify(ldata);
    }
    return ldata;
  }
}