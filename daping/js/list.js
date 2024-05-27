// list块自动向下滚动
$(function(){
  var aLi = $('.j-list li');
   var t = $('.j-list .move').position().top;
   var aHeight = aLi.height()+12;
   var n = 0;  
   function tab(){
        n++;
        if(n==aLi.length){
         n=0;
         $('.j-list .move').animate({top:'12px'},500, function(){$(document).trigger("chart-data-change");});
         //console.log(n);
        }else{
         var num = t+n*aHeight;
         //console.log(num);
         $('.j-list .move').animate({top:num+'px'},1000, function(){$(document).trigger("chart-data-change");});
        }
   }
    setInterval(tab,5000);
  })
