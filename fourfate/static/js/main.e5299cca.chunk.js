(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},179:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(185),i=n(184),r=n(9),o=n(32),m=(n(98),n(99),n(17)),u=n(183),s=n(10);n(174);var f=s.b.CheckboxItem,d=function(e){var t,n=Object(a.useContext)(o.a),l=Object(a.useRef)(null);Object(a.useEffect)(function(){return setTimeout(function(){l.current.removeAttribute("style")},50),k(),function(){t()}},[]);var i=Object(a.useState)(!1),r=Object(m.a)(i,2),d=r[0],g=r[1],h=Object(a.useState)(n.getState().watermark.simple),E=Object(m.a)(h,2),p=E[0],v=E[1],b=c.a.createElement(s.g,null,c.a.createElement(s.g.Item,null," ",c.a.createElement(u.a,{to:"/calc"},"\u4e1c\u897f\u56db\u547d\u8ba1\u7b97")),c.a.createElement(s.g.Item,null,c.a.createElement(f,{key:"0",checked:p,onChange:function(e){return w(e)}},"\u4f7f\u7528\u7b80\u5316\u7248\u6c34\u5370")),c.a.createElement(s.g.Item,null," ",c.a.createElement(u.a,{to:"/about"},"\u5173\u4e8e"))),k=function(){t=n.subscribe(function(){var e=n.getState();v(e.watermark.simple)})},w=function(e){console.log(e.target.checked),n.dispatch({type:"wm_type",simple:e.target.checked})};return c.a.createElement("div",{style:{display:"none"},ref:l},c.a.createElement(s.h,{mode:"dark",icon:c.a.createElement(s.d,{type:"ellipsis"}),onClick:function(){return g(!d)}},"\u4e1c\u897f\u56db\u5b85\u8ba1\u7b97"),c.a.createElement(s.c,{onOpenChange:function(){g(!d)},className:"my-drawer",style:{minHeight:.6*document.documentElement.clientHeight},sidebar:b,open:d},c.a.createElement("div",{className:"idx-imgbox"},c.a.createElement(s.e,{onChange:function(t,a,c){e.history.push("/img"),n.dispatch({type:"select_file",file:t[0]})}}),c.a.createElement("div",null,"\u70b9\u51fb\u6dfb\u52a0\u623f\u578b\u56fe"))))},g=(n(175),s.g.Item),h=function(e){return c.a.createElement("div",null,c.a.createElement(s.h,{mode:"dark",leftContent:"\u540e\u9000",onLeftClick:function(){e.history.goBack()}},"\u5173\u4e8e"),c.a.createElement(s.g,{renderHeader:function(){return"\u4e1c\u897f\u56db\u5b85\u8ba1\u7b97"},className:"c-about-list"},c.a.createElement(g,{extra:"MikeChen"},"\u4f5c\u8005")),c.a.createElement(s.g,{className:"c-about-list"},c.a.createElement(g,{extra:"mike8625@163.com"},"\u90ae\u7bb1")))},E=(n(176),function(e){var t=["\u574e","\u5764","\u9707","\u5dfd",["\u5764","\u826e"],"\u4e7e","\u5151","\u826e","\u79bb"],n={"\u9707":["\u4e1c\u56db","\u4e1c","\u6728"],"\u5dfd":["\u4e1c\u56db","\u4e1c\u5357","\u6728"],"\u574e":["\u4e1c\u56db","\u5317","\u6c34"],"\u79bb":["\u4e1c\u56db","\u5357","\u706b"],"\u826e":["\u897f\u56db","\u4e1c\u5317","\u571f"],"\u5764":["\u897f\u56db","\u897f\u5357","\u571f"],"\u5151":["\u897f\u56db","\u897f","\u91d1"],"\u4e7e":["\u897f\u56db","\u897f\u5317","\u91d1"]},l=Object(a.useState)(""),i=Object(m.a)(l,2),r=i[0],o=i[1],u=Object(a.useState)([0]),f=Object(m.a)(u,2),d=f[0],g=f[1],h=Object(a.useState)(),E=Object(m.a)(h,2),p=E[0],v=E[1],b=[{label:c.a.createElement("div",{key:0},c.a.createElement("span",null,"\u7537")),value:0},{label:c.a.createElement("div",{key:1},c.a.createElement("span",null,"\u5973")),value:1}];return c.a.createElement("div",null,c.a.createElement(s.h,{mode:"dark",leftContent:"\u540e\u9000",onLeftClick:function(){return e.history.goBack()}},"\u4e1c\u897f\u56db\u547d\u8ba1\u7b97"),c.a.createElement(s.k,{size:"lg"}),c.a.createElement(s.g,null,c.a.createElement(s.i,{data:b,value:d,cols:1,onChange:function(e){g(e)}},c.a.createElement(s.g.Item,{arrow:"horizontal"},"\u6027\u522b")),c.a.createElement(s.f,{type:"digit",placeholder:"\u8bf7\u8f93\u5165\u51fa\u751f\u5e74\u4efd",onChange:function(e){o(e)},value:r},"\u51fa\u751f\u5e74\u4efd")),c.a.createElement(s.k,{size:"lg"}),c.a.createElement(s.l,null,c.a.createElement(s.a,{type:"ghost",onClick:function(){return function(){if(""!==r.toString().trim()){var e,a,c=+r.toString().slice(2);e=0===d[0]?(100-c)%9||9:(c-4)%9||9,a=4===--e?t[4][d]:t[e];var l="".concat(n[a][0],"\u547d, ").concat(a,"\u5366, ").concat(n[a][1],"\u65b9, \u5c5e").concat(n[a][2]);v(l)}else s.j.info("\u8bf7\u8f93\u5165\u5e74\u4efd")}()}},"\u8ba1\u7b97"),c.a.createElement(s.k,null)),c.a.createElement(s.k,{size:"lg"}),c.a.createElement("div",{className:"fate-result"},p))}),p=n(27),v=n(86),b=n.n(v),k=(n(178),n(179),n(87)),w=n.n(k),y=n(88),j=n.n(y),O=function(e){var t=Object(a.useContext)(o.a),n=Object(a.useRef)(null),l=Object(a.useRef)(null),i=new Image;t.getState().watermark.simple?i.src=w.a:i.src=j.a;var r=document.createElement("canvas");r.width=1600,r.height=1600;var u=r.getContext("2d"),f=Object(a.useState)({finish:!1,img:"",imgData:""}),d=Object(m.a)(f,2),g=d[0],h=d[1];Object(a.useEffect)(function(){var e=t.getState().selectFile.file;e&&setTimeout(function(){E(e)},300)},[]);var E=function(e){h(Object(p.a)({},g,{img:e.url})),s.j.info("\u8bf7\u88c1\u5207\u6389\u6240\u6709\u767d\u8fb9",2,null,!1)},v=function(){var e=n.current.getCroppedCanvas().toDataURL("image/png",.6);k(e)},k=function(e){var t;(t=e,new Promise(function(e,n){var a=new Image;a.src=t,a.onload=function(t){e(this)}})).then(function(e){!function(e){var t,n,a=0,c=0;e.width>e.height?(t=1600,a=(1600-(n=e.height/e.width*1600))/2):(n=1600,c=(1600-(t=e.width/e.height*1600))/2),u.drawImage(e,0,0,e.width,e.height,c,a,t,n),u.globalAlpha=.35,u.drawImage(i,0,0)}(e),y()})},y=function(){var e=r.toDataURL("image/jpeg");h(Object(p.a)({},g,{finish:!0,imgData:e})),new window.PinchZoom.default(l.current.parentNode,{})};return c.a.createElement("div",null,c.a.createElement(s.h,{mode:"dark",leftContent:"\u540e\u9000",onLeftClick:function(){return e.history.goBack()},rightContent:[c.a.createElement("span",{key:"0",onClick:function(){s.j.info("\u5982\u679c\u4e0b\u8f7d\u5931\u8d25\u8bf7\u957f\u6309\u56fe\u7247\u4fdd\u5b58");var e=g.imgData.replace("image/jpeg","image/octet-stream"),t=document.createElementNS("http://www.w3.org/1999/xhtml","a");t.href=e,t.download="house.jpg";var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),t.dispatchEvent(n)},style:{display:g.finish?"block":"none"}},"\u4fdd\u5b58"),c.a.createElement("span",{key:"1",onClick:function(){n.current.rotate(90)},style:{display:g.finish?"none":"block"}},"\u65cb\u8f6c"),c.a.createElement("span",{key:"2",onClick:function(){v()},style:{display:g.finish?"none":"block"}},"\u5b8c\u6210")]}),c.a.createElement(b.a,{ref:n,src:g.img,style:{display:g.finish?"none":"block",height:document.documentElement.clientHeight-45,width:"100%"}}),c.a.createElement("div",{style:{display:g.finish?"flex":"none",height:document.documentElement.clientHeight-45},className:"img-con"},c.a.createElement("div",{style:{height:"100vw",width:"100%"}},c.a.createElement("div",{className:"img-zoombox"},c.a.createElement("img",{src:g.imgData,ref:l}))),c.a.createElement("div",{className:"img-text"},"\u4e1c,\u4e1c\u5357,\u5357,\u5317\u4e3a\u4e1c\u56db\u5b85,\u5176\u4ed6\u4e3a\u897f\u56db\u5b85")))},C=n(37),x={file:null},S={simple:!0},I={selectFile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"select_file":return Object(p.a)({},e,{file:t.file});default:return e}},watermark:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"wm_type":return Object(p.a)({},e,{simple:t.simple});default:return e}}},N=Object(C.a)(I),D=Object(C.b)(N),z=function(){return c.a.createElement("div",{className:"primary-layout"},c.a.createElement("main",null,c.a.createElement(l.a,{path:"/",exact:!0,component:d}),c.a.createElement(l.a,{path:"/about",component:h}),c.a.createElement(l.a,{path:"/calc",component:E}),c.a.createElement(l.a,{path:"/img",component:O})))};Object(r.render)(c.a.createElement(o.a.Provider,{value:D},c.a.createElement(function(){return c.a.createElement(i.a,null,c.a.createElement(z,null))},null)),document.getElementById("root"))},87:function(e,t,n){e.exports=n.p+"static/media/wm.ab9cdb87.png"},88:function(e,t,n){e.exports=n.p+"static/media/wm2.9811e247.png"},93:function(e,t,n){e.exports=n(182)},99:function(e,t,n){}},[[93,1,2]]]);
//# sourceMappingURL=main.e5299cca.chunk.js.map