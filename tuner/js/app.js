var vueApp = new Vue({
  el: "#app",
  data: function () {
    return {
      // 音的总个数
      maxKey: keyList.length,
      // 最长时间
      maxTime: 60,
      // 每秒几次采样
      cy_time: 5,
      // 一屏界面显示几秒的数据
      scr_time_count: 5,
      working: false
    };
  },
  created: function () {
    this.initA4()
    this.tuner = new Tuner(this.a4)
  },
  mounted: function() {
    this.start();
    this.initChart();
  },
  methods: {
    test1: function() {
      var list = ["C3", "D3", "E3", "#D3", "C4", "D4"];
      var n = parseInt(Math.random() * list.length);
      let k = list[n];
      this.curKey = keyMap[k];
      
      if(!this.timer) {
        this.doDetect();
      }           
    },
    
    initA4:function () {
      this.a4 = 440;  // 高音la
    },
    start: function() {
      const that = this
      this.tuner.onNoteDetected = function(note) {
        if(!that.working){
          return;
        }
        //console.log((new Date()).getSeconds())
        // 
        var k = note.name;
        if(k.length > 1) {
          k = "#" + k[0];
        }
        // console.log(111, k + note.octave)
        if(!keyMap[k + note.octave]) {
          return;
        }
        that.curKey = keyMap[k + note.octave];
        //console.log(note)
        that.frequencyData = new Uint8Array(that.tuner.analyser.frequencyBinCount);
        that.tuner.analyser.getByteFrequencyData(that.frequencyData)
        //console.log(that.frequencyData.length)
        // 尝试取中位数 发现
        //var tList = [];
        var total = 0;
        var len = that.frequencyData.length;
        for(var i = 0; i < len; i++) {
          total += Math.abs(that.frequencyData[i]);
          //tList.push(Math.abs(that.frequencyData[i]))
        }
        var avg = total / len;
//        console.log("avg->", avg)
        if(avg < 20) {
          return;
        }
// 想取中位数 测试也不太准        
//        tList = tList.sort(function(a,b){return a - b});
//        var v  = tList[parseInt(tList.length / 2)];
//        console.log(v)
//        if(v < 20){
//          return;
//        }
        // 这个是网上找的分贝计算公式 测试了一下 好像不太准...
//          var db = 20 * Math.log10(total/1024)  //32767
//          if(db < 30) {
//            return;
//          }
//        var db2 = Math.abs((Math.log(total/1024)/Math.LN10)*20);
//        console.log(db, db2)
        //console.log(that.frequencyData[0])
//        that.doDetect();
//        return;
        
        if(!that.timer) {
          that.doDetect();
        }
        
        //console.log(note)
      }
      // for test  手动测试 可以把return的注释去掉 然后点开始 然后按test1
      // return;
      swal.fire('音调检测,最多保留一分钟的数据.点确定后请开启麦克风权限.').then(function() {
        that.tuner.init()
      })
    },
    
    initChart: function() {
      
      var dataArr = [];
      var that = this;
//      for(var i = 0; i < 10; i++) {
//        dataArr.push(i + 1);
//      }
      
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById('keyChart'));
      
      var len = that.cy_time * that.scr_time_count;
      // 指定图表的配置项和数据
      this.option = {
        // animation: false,
        tooltip: {
          show: false
        },
        grid: {
          top: 20,
          bottom: 60
        },
        legend: {
          show:false
        },
        xAxis: {
          data: dataArr,
          // 去掉文字
          axisLabel: {
            show: false
          },
          //去掉刻度
          axisTick: {
            show: false,
          },
          // 网格线
          splitLine: {
            show: true,
          }
        },
        yAxis: {
          minInterval: 1,
          maxInterval: 1,
          min: 0,
          max: that.maxKey,
          interval: 1,
          axisLabel: {
            formatter: function (value, index) {
                //console.log(value)
                //return valueMap[value];
                return valueMap[Math.round(value)];
            },          
          },
          splitLine: {
            lineStyle: {
              interval: 0,
              color: ["#aaa"]
            }
          }
           
        },
        // 缩放
        dataZoom: [ 
          // 内部放大 横向 例如鼠标拖动 
          {
            id: "hscroll",
            type: 'inside',
            startValue: 0,
            xAxisIndex: 0,
            endValue: len,
            minSpanValue: len,
            //zoomLock: true,
            filterMode: 'none'
          },
          // slider 下面的滑块
          {
            id: "bottom",
            handleIcon:'path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            startValue: 0,
            endValue: len,
            minSpanValue: len,
            // 隐藏拖动时候左右两边显示的数字
            showDetail: false,
            // 拖动实时刷新
            realtime:false,
            // 划选功能
            brushSelect: false
          },    
          // 内部放大 纵向      
          {
            id: "vscroll",
            type: 'inside',
            startValue: 25,
            yAxisIndex: 0,
            endValue: 45,
            minValueSpan: 20,
            //maxValueSpan: 20,
            //zoomLock: true,
            filterMode: 'none'
          },
          // 右边的滑块
          {
            id: "left",
            type: 'slider',
            startValue: 25,
            yAxisIndex: 0,
            endValue: 45,
            minSpanValue: 20,
            filterMode: 'none',
            showDetail: false,
            brushSelect: false,
            realtime:false,
            labelPrecision:0,
            //zoomLock: true,
            handleIcon:'path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          },

        ],        
              
        series: [
          {
            symbol: "none",
            smooth: true,
            //折线图在数据量远大于像素点时候的降采样策略，开启后可以有效的优化图表的绘制效率，默认关闭，也就是全部绘制不过滤数据点。
            //sampling: "lttb",
            name: '音高',
            type: 'line',
            data: []
          }
        ]
      };
      
//      // for test
//      this.option.xAxis.data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];
//      this.option.series[0].data = [5,6,7,8,9,4,3,2,8,6,7,8,9,4,3,2,8,6,7,8,9,4,3,2,8,6,7,8,9,4,3,2,8,9]
//      this.setZoomData();
      
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(this.option); 
      var that = this;     
      this.myChart.on("datazoom", function(e){
        // return;
        //console.log(e)
        var obj, hObj;
        if(e.batch) {
          obj = that.getVScrollZoomById(e.batch);
          hObj = that.getHScrollZoomById(e.batch);
        }
        else {
          if(e.dataZoomId == "left" || e.dataZoomId == "vscroll") {
            obj = e;
          }
          else {
            hObj = e;
          }
        }
        // 只移动了x 不管, 只处理y轴的移动 不让它有小数在刻度上
        if(obj) {
           // start是整数 但是它是百分比 除以100 等于百分数 然后乘以音的总个数 就是当前的音
          that.option.dataZoom[2].startValue = parseInt(obj.start * that.maxKey / 100)
          that.option.dataZoom[3].startValue = parseInt(obj.start * that.maxKey / 100)
          that.option.dataZoom[2].endValue = parseInt(obj.end * that.maxKey / 100)
          that.option.dataZoom[3].endValue = parseInt(obj.end * that.maxKey / 100)
        }
        if(hObj) {
          //不设置或者设置都会有问题 无法在内部横向拖动 只有置为undefined才行 大概就是不设置 做默认的
//          var l = that.option.xAxis.data.length
//          that.option.dataZoom[0].startValue = hObj.start * l / 100
//          that.option.dataZoom[1].startValue = hObj.start * l / 100
//          that.option.dataZoom[0].endValue = hObj.end * l / 100
//          that.option.dataZoom[1].endValue = hObj.end * l / 100   
          that.option.dataZoom[0].startValue = undefined
          that.option.dataZoom[1].startValue = undefined
          that.option.dataZoom[0].endValue = undefined
          that.option.dataZoom[1].endValue = undefined  
        }
        //console.log(333, that.option.dataZoom)
        that.myChart.setOption(that.option);
      })
    },
    
    getVScrollZoomById: function(arr) {
      for(var i = 0; i < arr.length; i++) {
        if(arr[i].dataZoomId == "left" || arr[i].dataZoomId == "vscroll") {
          return arr[i]
        }
      }
      return null;
    },
    getHScrollZoomById: function(arr) {
      for(var i = 0; i < arr.length; i++) {
        if(arr[i].dataZoomId == "bottom" || arr[i].dataZoomId == "hscroll") {
          return arr[i]
        }
      }
      return null;
    },
    
    updateChart: function(v) {
      // 设置数据
      var maxTime = this.maxTime * this.cy_time;
      if(this.option.xAxis.data.length < maxTime) {
        var count = this.option.xAxis.data.length;
        this.option.xAxis.data.push(count + 1);
      }
      if(this.option.series[0].data.length >= maxTime) {
        var count = this.option.series[0].data.length - maxTime;
        this.option.series[0].data.splice(0, count);
      }
      this.option.series[0].data.push(v);
      
      // x range
      this.setZoomData_X();
      
      // Y 
      this.setZoomData_Y(v);
      
      this.myChart.setOption(this.option);
    },
    
    // 设置范围
    setZoomData_X: function() {
      var dataLen = this.option.series[0].data.length;
      var len = this.cy_time * this.scr_time_count;
      var zoom = this.option.dataZoom;
      var zval1 = zoom[0];
      var zval2 = zoom[1];
      if(dataLen > len) {
        zval1.startValue = dataLen - len;
        zval1.endValue = dataLen;
        zval2.startValue = dataLen - len;
        zval2.endValue = dataLen;
      }
      else {
        zval1.startValue = 0;
        zval1.endValue = len;
        zval2.startValue = 0;
        zval2.endValue = len;        
      }     
    },
    
    setZoomData_Y: function(v) {
      if(v == -1) {
        this.option.dataZoom[2].startValue = 25;
        this.option.dataZoom[3].startValue = 25;
        this.option.dataZoom[2].endValue = 45;
        this.option.dataZoom[3].endValue = 45;   
        return;      
      }
      var start = this.option.dataZoom[2].startValue;
      var end = this.option.dataZoom[2].endValue;
      var span = end - start;
      if(v <= start && v > 0) {
        start = v - 1;
        end = start + span;
      }
      else if(v >= end && v < this.maxKey) {
        end = v + 1;
        start = end - span;
      }
      
      this.option.dataZoom[2].startValue = start;
      this.option.dataZoom[3].startValue = start;
      this.option.dataZoom[2].endValue = end;
      this.option.dataZoom[3].endValue = end;  
    },
    
    beginDetect: function() {
      this.working = true;
    },
    
    stopDetect: function() {
      clearTimeout(this.timer);
      this.timer = null;
      this.working = false;
    },  
    
    doDetect: function() {
      if(!this.working) {
        return;
      }
//      console.log("-----", this.curKey)
//      this.updateChart(this.curKey)
//      return;
      var v = null;
      if(this.curKey) {
        v = this.curKey;
        this.curKey = null;
      }
      //console.log("->", v)
      this.updateChart(v);
      var that = this;
      this.timer = setTimeout(function(){
        that.doDetect();
      }, 1000 / this.cy_time);
    },
    
    // clear
    clear: function() {
      this.option.xAxis.data = [];
      this.option.series[0].data = []
      this.setZoomData_X();      
      this.setZoomData_Y(-1);      
      this.myChart.setOption(this.option);
    },
    
    showAbout: function() {
      swal.fire('作者: 小欣\nWX: miniknow')
    }
         
  }

});
