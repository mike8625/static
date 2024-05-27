(function(){
  var brversion = /MSIE ([0-8.]+)/.exec(window.navigator.userAgent);
  if(brversion && brversion.length && parseInt(brversion[1]) < 8){
    alert("您使用的浏览器版本过低,建议您使用360浏览器,以保证页面的正常显示!");
  }  
})();


$(function(){
  $(".c-searchbtn").click(function(){
    var txt = $.trim($(".c-searchtext").val());
    if(txt === "") {
      alert("请输入关键字");
      return;
    }
    txt = txt.substring(0, 20);
    location.href = "search.html?key=" + txt;
      
  })  
})