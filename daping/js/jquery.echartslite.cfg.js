$.fn.echartsliteConfig = {
  option:{
    color: ['#646EDD','#FEAB1F','#31DAB3','#3366CC','#E9E700','#F86464','#33A5FE','#DC3912', '#FF9900', '#0099C6', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
    toolbox: {show:false},  
    legend: {
      show: true,
      left: "auto",
      right: 30,
      top: 10,
    },
    grid:{
      top: 60,
      bottom: 30,
      left: 30
    },
    xAxis: {
//      axisLabel:{
//        textStyle: {
//          color: "#76BBFE"
//        }
//      },
      axisLine: {
        lineStyle: {
          color: "#FFFFFF"
        }
      }
    },                  
    yAxis: {
//      axisLabel:{
//        textStyle: {
//          color: "#76BBFE"
//        }
//      },
      axisLine: {
        lineStyle: {
          color: "#FFFFFF"
        }
      }
    },
    animationDurationUpdate: 2000                    
  },
  seriesOption:{
    bar: {
      label: {
        normal: {
          show: false,
          position: 'top',
        }
      },
    },
    line: this.bar,
    radar: {
      label: {
        normal: {
          show: true,
          formatter:function(params) {
            return params.value;
          }
        }
      }          
    },
    pie: {
      label:{
        normal:{
          show: true
        }
      }      
    }
  },
  ratio: .7,
  methods: {
    changeLineOpt(opt){
      for(let i = 0; i < opt.series.length; i++){
        //opt.series[i].symbolSize = 2;
        opt.series[i].itemStyle = {normal:{color : opt.color[i], borderWidth:4}};
        opt.series[i].lineStyle= {normal:{width : 2}};
      }
      opt.yAxis.splitLine.lineStyle.opacity = 0.6;  
    },
    changeBarOpt(opt){
      
    },
    cropEnd(str, n) {
      var num = 0;
    	var len = 0;
    	for(var i = 0; i < str.length; i++)
    	{
    	  if(escape(str.charAt(i)).length >= 4)
    	  {
    	    num += 2;
    	  }
    	  else
    	  {  
    	    num++; 
    	  }
    	  if(num < n-1)
    	  {
    	    len++;
    		}
    		else if(num > n)
    		{
    		  str = str.substring(0,len) + "..."; 
    		  break; 
    		}	    
    	}	
    	return str;            
    }
  }
}
$(document).on("page-ratio-set", function(e, ratio){
  //$.fn.echartsliteConfig.onRatioSet(ratio);  
})
