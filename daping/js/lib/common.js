var util={
    //返回指定格式的时间
    getTime: function (date) {
        date = date || new Date();
        function formatNumber(n) {
            n = n.toString();
            return n[1] ? n : '0' + n
        }
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();

        return [formatNumber(year), formatNumber(month), formatNumber(day)].join('-') + ' ' + [formatNumber(hour), formatNumber(minute), formatNumber(second)].join(':')
    },

    getDate: function (date) {
        return this.getTime(date).split(" ")[0];
    },
    
    addDays: function(date, days){
        return this.addTimes(date, 60, 60, 24, days);     
    },
    addHours: function(date, hours){
        return this.addTimes(date, 60, 60, hours, 1);      
    },
    addMinutes: function(date, minutes){
        return this.addTimes(date, 60, minutes, 1, 1);
    },
    addSeconds: function(date, secs){
        return this.addTimes(date, secs, 1, 1, 1);      
    },
    addTimes: function(date, s, m, h, days){
      //new时间对象
      date = date || new Date();
      //转换成毫秒
      var mt = date.getTime();
      //把毫秒时间对象减7天，转换成时间对象
      var premt = mt + 1000 * s * m * h * days;
      var dt = new Date(premt);
      return dt;        
    },
    
    //格式化时间  
    //参数: 时间对象 
    //      要转换换的格式 年:yyyy 月:MM 日: dd  时(24):HH 时(12):hh 分:mm 秒:ss 
    //返回值: 按传的参数输出字符串
    formatTime: function(obj, arg){
      function fixNum(num)
      {
        num = parseInt(num);
        if(num < 10)
          return "0" + num;
        return num;  
      }
      function to12Hour(num)
      {
         num = parseInt(num);
         if(num > 12)
         {
           return num - 12; 
         } 
         return num;
      }
      if(!obj)
        obj = new Date();
      var year = obj.getFullYear();
      var month = fixNum(obj.getMonth() + 1);
      var date = fixNum(obj.getDate());
      var hour24 = fixNum(obj.getHours());
      var hour12 = fixNum(to12Hour(obj.getHours()));
      var minute = fixNum(obj.getMinutes());
      var second = fixNum(obj.getSeconds());
      if(!arg)
      {
        return "" + year + month + date + hour24 + minute + second;  
      }
      arg = arg.replace(/yyyy/g, year);
      arg = arg.replace(/MM/g, month);
      arg = arg.replace(/dd/g, date);
      arg = arg.replace(/HH/g, hour24);
      arg = arg.replace(/hh/g, hour12);
      arg = arg.replace(/mm/g, minute);
      arg = arg.replace(/ss/g, second);
      return arg;      
    },
    //秒转成xx天xx小时xx分xx秒
    timeConvert: function( mss, level ){
      mss = mss * 1000;
      function cvtNum(n){
        return n >> 0;
      }
      function fixNum(num){
        num = parseInt(num);
        if(num < 10)
          return "0" + num;
        return num + "";  
      }
      var days = cvtNum(mss / (1000 * 60 * 60 * 24));
      var hours = cvtNum((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = cvtNum((mss % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = cvtNum((mss % (1000 * 60)) / 1000);
      var arr = [seconds, minutes, hours, days];
      if(level){
        var list = [1, 60, 60, 24];
        for(var i = arr.length - 1; i >= level; i--){
          arr[i-1] += arr[i] * list[i];
        }
        arr = arr.slice(0, level);
      }
      for(var i = 0; i < arr.length; i++){
        arr[i] = fixNum(arr[i]);
      }
      return arr;
    },    
    
    getQueryString: function (queryStringName){
        var returnValue="";
        var URLString = window.location.href;
        var serachLocation=-1;
        var queryStringLength=queryStringName.length;
        do{
            serachLocation=URLString.indexOf(queryStringName+"\=");
            if (serachLocation!=-1)
            {
                if ((URLString.charAt(serachLocation-1)=='?') || (URLString.charAt(serachLocation-1)=='&'))
                {
                    URLString=URLString.substr(serachLocation);
                    break;
                }
                URLString=URLString.substr(serachLocation+queryStringLength+1);
            }

        }
        while (serachLocation!=-1)
        if (serachLocation!=-1){
            var seperatorLocation=URLString.indexOf("&");
            if (seperatorLocation==-1)
            {
                returnValue=URLString.substr(queryStringLength+1);
            }
            else
            {
                returnValue=URLString.substring(queryStringLength+1,seperatorLocation);
            }
        }
        return returnValue;
    },
    setTimeAgo: function(){
      if(!timeago){
        return;
      }
      timeago().render(document.querySelectorAll('.w-time'));
//      $(".w-time").each(function(){
//        $(this).addClass("w-time" + $(this).attr("unit"));  
//      })
    },
    
    loadingTmpl:'<div class="spinner" style="display:none;">\
      <div class="rect1"></div>\
      <div class="rect2"></div>\
      <div class="rect3"></div>\
      <div class="rect4"></div>\
      <div class="rect5"></div>\
    </div><div class="spinner-mask" style="display:none;"></div>',
    
    showLoading: function(con){
      if(!this.loading){
        this.loading = $(this.loadingTmpl);
      }
      if(con){
        con.append(this.loading);
      }
      else{
        $(document.body).append(this.loading);
      }
      this.loading.show();
      return this.loading;
    },
    hideLoading: function(){
      if(this.loading)
        this.loading.hide();
    },
    
    autoScrollList: function(ele){
      var intervalTime = parseInt(ele.attr("auto-scroll-time"));
      if(!intervalTime){
        intervalTime = config.autoScrollListInterval || 3000;
      }
      var fun = function(con){
        var items = con.children();
        if(items.length < 2){
          return;
        }
        var h = 0;
        for(var i = 0; i < items.length; i++){
          h += $(items[i]).outerHeight(true);
        }
        if(h <= con.parent().outerHeight(true)){
          return;
        }
        
        items.eq(0).slideUp(function(){
          items.eq(0).appendTo(con).fadeIn(); 
        })         
      }
      return setInterval(function(){fun(ele)}, intervalTime); 
    },
    //es6 请求数据
    reqData: function(aUrl, aData) {
      return new Promise(function(resolve, reject) {
        $.ajax({
          type: "POST",
          url: config.domain + aUrl,
          dataType: "json",
          contentType: "application/json; charset=utf-8",
          data: aData ? JSON.stringify(aData) : undefined,     
          success: function(d, status, xhr){
            d = d.result ? d.result : d;
            if(d.success != true){
              console.log("error => " + d.errorMessage);
              reject(d.errorMessage);
              return;
            }
//            if(!d.data.length && (d.data.list && !d.data.list.length)){
//              console.warn("list is empty");
//            }              
            resolve(d.data);
          } 
        })          
      });
    },
    //es6 get请求
    reqData_Get: function(aUrl, aData) {
      return new Promise(function(resolve, reject) {
        $.ajax({
          type: "GET",
          cache: false,
          url: config.domain + aUrl,
          dataType: "json",
          data: aData || undefined,     
          success: function(d, status, xhr){
            if(d.success != true){
              console.log("error => " + d.errorMessage);
              reject(d.errorMessage);
              return;
            }
            if(!d.data.length && (d.data.list && !d.data.list.length)){
              console.warn("list is empty");
            }              
            resolve(d.data);
          } 
        })          
      });      
    }    
};

//全局设置ajax
$.ajaxSetup({
  timeout: 20000,
  //type: "post",
  //dataType: "json",
  contentType: "application/json; charset=utf-8",
  beforeSend: function(){
    //util.showLoading();
  },
  success: function(d, status, xhr){
    if(this.dataListSuccess){
      if(typeof(d) != "object"){
        d = JSON.parse(d);
      }
      if(d.success != true){
        console.log("error => " + d.errorMessage);
        return;
      }
      var data = d.data.list;
      this.dataListSuccess(data, status, xhr);
    }
  },
  error: function(xhr, textStatus, e){
    console.log("error: => \nurl: " + this.url + "\ncode: " + textStatus, e);
  },
  complete: function(){
    //util.hideLoading();
  }
});

/* for REM */
//designWidth:设计稿的实际宽度值，需要根据实际设置
//maxWidth:制作稿的最大宽度值，需要根据实际设置
//这段js的最后面有两个参数记得要设置，一个为设计稿实际宽度，一个为制作稿最大宽度，例如设计稿为1440，最大宽度为1440，则为(1440,1440)
;(function(designWidth, maxWidth) {
  //可以在url后面调整字体,并且优先级最高
  var fSize = util.getQueryString("font-size");
  //console.log(fSize)
  if(fSize){
    $(document.documentElement).css("font-size", parseInt(fSize) + "px");
   // $('.w-ifrSize').contents().find('html').css('fontSize', '50px');
    return;
  }
  
  //html根标签上加上font-size
//  fSize = document.documentElement.getAttribute("font-size");
//  if(fSize != null){
//    $(document.documentElement).css("font-size", parseInt(fSize) + "px; !important");
//    return;
//  }
  
  //默认不开启自适应,在html标签上加上auto-font-size或者在url上面加上auto-font-size=1才会开始自适应
  var autoResize = util.getQueryString("auto-font-size");
  if(document.documentElement.getAttribute("auto-font-size") == null && !autoResize){
    return;
  }
  var doc = document,
  win = window,
  docEl = doc.documentElement,
  remStyle = document.createElement("style"),
  tid;

  function refreshRem() {
    var width = docEl.getBoundingClientRect().width;
    maxWidth = maxWidth || 540;
    width>maxWidth && (width=maxWidth);
    var rem = width * 100 / designWidth;
    remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
    //$('.w-ifrSize').contents().find('html').css('fontSize', '50px');
  }

  if (docEl.firstElementChild) {
    docEl.firstElementChild.appendChild(remStyle);
  } else {
    var wrap = doc.createElement("div");
    wrap.appendChild(remStyle);
    doc.write(wrap.innerHTML);
    wrap = null;
  }
  //要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
  refreshRem();

  win.addEventListener("resize", function() {
    clearTimeout(tid); //防止执行两次
    tid = setTimeout(refreshRem, 300);
  }, false);

  win.addEventListener("pageshow", function(e) {
    if (e.persisted) { // 浏览器后退的时候重新计算
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false);

  if (doc.readyState === "complete") {
    doc.body.style.fontSize = "16px";
  } else {
    doc.addEventListener("DOMContentLoaded", function(e) {
      doc.body.style.fontSize = "16px";
    }, false);
  }
})(1440, 1920);


//handlerbars
(function($) {
    var compiled = {};
    $.fn.handlebars = function(templateEle, data) {
      var template = $(templateEle).html();
      compiled[template] = Handlebars.compile(template);
      this.html(compiled[template](data));
    };
})(jQuery);

$(function(){
  if(!window.Handlebars){
    return;
  }
  Handlebars.registerHelper({  
    //格式化时间  
    //参数: 时间字符串  例如: 2017/10/12 12:13:05
    //返回值: 2017.10.12
    'formatDate' : function(timeString) {
      var d = new Date(timeString);
      return util.getDate(d).replace(/-/g, ".");
    }, 
    //格式化时间  
    //参数: 时间字符串  例如: 2017/10/12 12:13:05
    //      要转换换的格式 年:yyyy 月:MM 日:dd  时(24):HH 时(12):hh 分:mm 秒:ss  
    //返回值: 按传的参数输出字符串
    'formatTime' : function(timeString, arg) {
      var d = new Date(timeString);
      return util.formatTime(d, arg);
    },
    //判断是否为偶数
    'if_even' : function(value, options) {
      if((value % 2) == 0) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    } 
  });    
})

$.fn.fadeShow = function(){
  this.css({opacity: 0}).animate({opacity:1}, 500)
}

//列表自动滚动
$(function(){
  $(".auto-scroll-list").each(function(){
    util.autoScrollList($(this));  
  })  
})

//防抖动函数
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

//去掉背景参数
(function(){
  var nobg = util.getQueryString("no-bg");
  if(nobg) {
    $(document.body).css("cssText", "background: none transparent !important;").addClass("w-ingroup");
  }
})();
//去掉边框参数
(function(){
  var nobd = util.getQueryString("no-bd");
  if(nobd) {
    $(document.body).addClass("w-nobd");
  }
})();

//类型条
var typebar = {
  box: null,
  tmpl: '<div class="typebar"><div class="typebar-wrapper"><div class="typebar-con"></div></div></div>',
  init(arr){
    if(!this.box) {
      this.box = $(this.tmpl);
      $(document.body).append(this.box);
    }
    else{
      this.box.find(".typebar-con").empty();
    }
    for(var item of arr){
      var obj = $("<span></span>");
      obj.text(item.label).attr("label", item.label);
      this.box.find(".typebar-con").append(obj);
    }
  },
  setCurrent(act){
    console.log(this.box.find('.typebar-con span[label="'+ act  +  '"]').siblings())
    this.box.find('.typebar-con span[label="'+ act  +  '"]').addClass("active").siblings().removeClass("active").end()[0].scrollIntoView();;
  }
}
//typebar.init([{label: "南开"},{label: "虹桥"},{label: "河东"},{label: "河西"},{label: "和平"},{label: "津南"}]);
//iframe窗口根据父页面 字号大小响应式
$(function(){
  var aText=util.getQueryString("allow-parent");
  if(aText!=1){ return }
  var isinner = window !== window.parent
  if(!isinner) { return }
  var parent = window.parent,
      fontSize = $(parent.document).find('html').css('fontSize');
    $('html').css({ fontSize: fontSize })
})