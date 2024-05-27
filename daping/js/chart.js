// chart
//左上折线图 热度趋势
$(function(){
  let chartObj;
  async function getData() {
    let data = mock.lineData();  
    showData(data);  
  }

  function showData(d){   
    var sMap = [
      {        
        name: "今天",  //数值的名称
        value: "a" //图表y轴取数据中的哪个属性
      },
      {        
        name: "昨天",  //数值的名称
        value: "b" //图表y轴取数据中的哪个属性
      }
    ]
    var opt = {
      title: "",
      subtitle:"",
      data: d,  //数据 
      type: "line", //图表类型
      x: {
        name: "", //数值的名称
        value: "name" //图表x轴取数据中的哪个属性
      },
      seriesMap: sMap,  
      changeOption: function(opt){
        //console.log(opt)
        opt.color[0] = "#FFBE00";
        opt.color[1] = "#2689FE";
        $.fn.echartsliteConfig.methods.changeLineOpt(opt);
      }                
    } 
    if(!chartObj) {
      chartObj = $("#chartRdqs").echartslite(opt);  
    }       
    else {
      chartObj.update(d);
    }
    
  }
  
  getData();
  $(document).on("chart-data-change", function(e){
    getData();
  })
}) 

// 左下关系图 溯源分析
$(function(){
  let myChart;
  async function getData() {
    let data = mock.relationData();  
    showData(convertData(data));  
  }
  function showData(d){
    
    let option = {
        title: {
            text: '',
            subtext: '',
        },
        tooltip: {},
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                name: '',
                type: 'graph',
                layout: 'force',
                data: d.nodes,
                links: d.links,
                //categories: categories,
                roam: true,
                zoom: 1.5,
                //focusNodeAdjacency: true,
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1,
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                },
                label: {
                    position: 'right',
                    formatter: '{b}'
                },
                lineStyle: {
                    // color: 'source',
                    curveness: 0.3,
                },
                emphasis: {
                    lineStyle: {
                        width: 10
                    }
                }
            }
        ]
    };
    if(!myChart) {
      myChart = echarts.init(document.getElementById('chartSyfx'));
    }
    setTimeout(function(){
      myChart.setOption(option);   
    }, 200)
    
    
  }

  function generateId(){
    return ((new Date()).getTime()-parseInt(Math.random()*10000)).toString();
  }
  function convertData(d) {
    let colors = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];
    let rootId = generateId();
    let rootNode = {
      id: rootId,
      name: d.name,
      symbolSize:28,
      itemStyle:{
        normal: {
          color: colors[0]
        }
      },    
      attributes:{
          modularity_class: 0
      },
      label: {
        show: true,
        fontSize: 18,
        color: "#FFFFFF"
      }    
    }
    let nodes = [rootNode];
    let links = [];
    let subNodes = [];
    let subLinks = [];
    d.relation.forEach(function(item, index){
      //console.log(index)
      let tId = generateId();
      let tColor = colors[index+1];
      let n = {
        id: tId,
        name: item.name,
        symbolSize: 20,
        itemStyle:{
          normal: {
            color: tColor
          }
        },    
        attributes:{
            modularity_class: 0
        },
        label: {
          normal: {
            show: true,
            fontSize: 16,
            color: "#FFFFFF"
          }
        }      
      }
      
      nodes.push(n)
      console.log(rootId, tId)
      let l = {
          id: tId,
          name:null,
          source: rootId,
          target: tId,
          lineStyle:{
              normal:{
                width: 5,
                color: tColor
              }
          }
      }
      links.push(l)
      for(var i = 0; i < 5; i++) {
        createSubNode({
          id: tId,
          color: tColor,
          subLinks,
          subNodes 
        })
      }
      
    }) 
    nodes = nodes.concat(subNodes);
    links = links.concat(subLinks);
    console.log(nodes, links)
    return {
      nodes,
      links
    }
  }
  function createSubNode(o){
      let tId = generateId();
      let tColor = o.color;
      let n = {
        id: tId,
        name: "",
        symbolSize: 10,
        itemStyle:{
          normal: {
            color: tColor
          }
        },    
        attributes:{
            modularity_class: 1
        }      
      }
      o.subNodes.push(n);
      
      let l = {
          id: tId,
          name:null,
          source: o.id,
          target: tId,
          lineStyle:{
              normal:{
                width: 2,
                color: tColor
              }
          }
      }
      o.subLinks.push(l)  
  }
  $(window).on("load", function(){
    setTimeout(function(){
      getData();    
    }, 300)
  })
  
  $(document).on("chart-data-change", function(e){
    getData();
  })
}); 

// 右上柱状图 关键媒体
$(function(){
  let chartObj;
  async function getData() {
    let data = mock.barData();  
    showData(data);  
  }

  function showData(d){   
    var sMap = [
      {        
        name: "占比",  //数值的名称
        value: "b" //图表y轴取数据中的哪个属性
      },
      {        
        name: "关键媒体",  //数值的名称
        value: "a" //图表y轴取数据中的哪个属性
      }
    ]
    var opt = {
      title: "",
      subtitle:"",
      data: d,  //数据 
      type: "bar", //图表类型
      x: {
        name: "", //数值的名称
        value: "name" //图表x轴取数据中的哪个属性
      },
      seriesMap: sMap,  
      changeOption: function(opt){
        //console.log(opt)
        //opt.legend.left = 30;
        //opt.legend.right = "auto";
        opt.color[0] = "#FFBE00";
        opt.color[1] = "#01C7F4";
        $.fn.echartsliteConfig.methods.changeLineOpt(opt);
        opt.series[0].type = "line";
        opt.series[1].barWidth = 30;
      }                
    } 
    if(!chartObj) {
      chartObj = $("#chartGjmt").echartslite(opt);  
    }       
    else {
      chartObj.update(d);
    }
    
  }
  
  getData();
  $(document).on("chart-data-change", function(e){
    getData();
  })
})

// 右下饼图 情感分析
am4core.ready(function() {
  let chart
  async function getData(){
    let arr = ["#09C8F2", "#F3C319", "#DF48D3"];
    let list = mock.pieData();
    let data = list.map((n, idx)=>{
      return {
        ...n,
        color: arr[idx]
      }  
    })    
    if(!chart) {
      showData(data)
    }
    else {
      updateData(data);
    }
  }
  function showData(d) {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    chart = am4core.create("chartQgfx", am4charts.PieChart3D);
    chart.angle = 40; // 倾斜度
    chart.depth = 20; //高度
    chart.radius = am4core.percent(100);
    //console.log(chart)
    chart.legend = new am4charts.Legend();
    //console.log(chart.legend)
    chart.legend.valueLabels.template.disabled = true;
    chart.legend.labels.template.fill = am4core.color("white");
    chart.legend.labels.template.text = "{name}";
    chart.legend.position = "right";
    
    chart.legend.maxWidth = 200;
    chart.data = d;
    var series = chart.series.push(new am4charts.PieSeries3D());
    series.slices.template.propertyFields.fill = "color";
    series.tooltip.autoTextColor = false;
    //series.tooltip.label.fill = am4core.color("#FFFFFF");
    console.log(series.labels)
    //series.labels.template.text = "{category}: {value}({value.percent.formatNumber('#.0')}%)"
    series.labels.template.text = "{category}: {value}"
    series.labels.template.fill = am4core.color("#FFFFFF");
    series.ticks.template.strokeWidth = 3;
    series.ticks.template.stroke = am4core.color("#FFFFFF");
    //console.log(am4charts)
    //console.log(series)
    //series.colors.list.unshift(new series.colors)
    series.dataFields.value = "value";
    series.dataFields.category = "name";
    // 动画效果
    series.hiddenState.properties.endAngle = -90;
//  //fly in
//    series.slices.template.showOnInit = true;
//    series.slices.template.hiddenState.properties.shiftRadius = 1;

//  // zoom in
//    chart.hiddenState.properties.radius = am4core.percent(0);

  //  setTimeout(function(){
  //    chart.data.push({
  //        name: "22",
  //        value: 80,
  //        "color": am4core.color("#09C8F2"),      
  //    })
  //    
  //    chart.validateData();    
  //    //chart.invalidateRawData();
  //    chart.appear();
  //  },2000);    
  }

  function updateData(d) {
    chart.data = d;
    chart.validateData(); 
    //chart.appear();   
  }

  getData();
  $(document).on("chart-data-change", function(e){
    getData();
  })
}); // end am4core.ready()  
  

//setInterval(function(){
//  //$(document).trigger("chart-data-change");
//}, 3000)
