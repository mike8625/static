(function(e){function t(t){for(var i,r,o=t[0],u=t[1],c=t[2],h=0,d=[];h<o.length;h++)r=o[h],a[r]&&d.push(a[r][0]),a[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,r=1;r<n.length;r++){var o=n[r];0!==a[o]&&(i=!1)}i&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var i={},r={app:0},a={app:0},s=[];function o(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e7e9298d"}[e]+".js"}function u(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var i="css/"+({about:"about"}[e]||e)+"."+{about:"dfceb672"}[e]+".css",r=u.p+i,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var o=a[s],c=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(c===i||c===r))return t()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){o=h[s],c=o.getAttribute("data-href");if(c===i||c===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var i=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");a.request=i,n(a)},d.href=r;var l=document.getElementsByTagName("head")[0];l.appendChild(d)}).then(function(){r[e]=0}));var i=a[e];if(0!==i)if(i)t.push(i[2]);else{var s=new Promise(function(t,n){i=a[e]=[t,n]});t.push(i[2]=s);var c,h=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=o(e),c=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+i+": "+r+")");s.type=i,s.request=r,n[1](s)}a[e]=void 0}};var l=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,h.appendChild(d)}return Promise.all(t)},u.m=e,u.c=i,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)u.d(n,i,function(t){return e[t]}.bind(null,i));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],h=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=h;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2856:function(e,t,n){},"3c44":function(e,t,n){e.exports=n.p+"img/qx.234b6ff8.png"},5169:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"slide-fade"}},[n("router-view")],1)],1)},a=[],s=(n("5c0b"),n("2877")),o={},u=Object(s["a"])(o,r,a,!1,null,null,null);u.options.__file="App.vue";var c=u.exports,h=n("2f62"),d=n("0e44");i["a"].use(h["a"]);var l=new h["a"].Store({plugins:[Object(d["a"])()],state:{mode:1,speechToken:null},mutations:{setMode:function(e,t){e.mode=t},setSpeechToken:function(e,t){e.speechToken=t}},actions:{}}),A=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._m(0),n("div",{staticClass:"c-homebox"},[n("div",{staticClass:"c-home-iconbox"},[n("div",[n("router-link",{attrs:{to:"/about"}},[n("i",{staticClass:"iconfont icon-guanyuwomen"})])],1),n("div",[n("router-link",{attrs:{to:"/setting"}},[n("i",{staticClass:"iconfont icon-ai-set"})])],1)]),n("div",{staticClass:"c-home-startbox"},[n("router-link",{attrs:{to:e.contentPath}},[n("i",{staticClass:"iconfont icon-duigou1"})])],1)])])},f=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"c-titlebox"},[i("img",{attrs:{src:n("f773")}})])}],p={name:"home",computed:{contentPath:function(){return 2==this.$store.state.mode?"/qxcontent":"/normal-content"}},components:{}},g=p,b=(n("f26e"),Object(s["a"])(g,m,f,!1,null,"7d69ea7f",null));b.options.__file="Home.vue";var v=b.exports,E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("div",{staticStyle:{display:"none"}},[i("button",{on:{click:e.test1}},[e._v("test")]),i("button",{on:{click:e.test2}},[e._v("test2")]),i("button",{on:{click:e.test3}},[e._v("test3")]),i("button",{on:{click:function(t){e.test4()}}},[e._v("test4")]),i("button",{on:{click:function(t){e.test5()}}},[e._v("test5")])]),i("img",{staticClass:"btn-back",attrs:{src:n("6aa2")},on:{click:e.goBack}}),i("div",{staticClass:"qx-con",on:{click:e.ask}},[i("div",{ref:"topBox",staticClass:"qx-box qx-box-top"}),i("div",{ref:"rightBox",staticClass:"qx-box qx-box-right"}),i("div",{ref:"bottomBox",staticClass:"qx-box qx-box-bottom"}),i("div",{ref:"leftBox",staticClass:"qx-box qx-box-left"})])])},w=[],y=n("8afe"),x=(n("ac6a"),n("456d"),n("96cf"),n("3040")),k=(n("7514"),n("7f7f"),n("ac4d"),n("8a81"),n("4f7f"),n("c665")),R=n("aa9a"),B=n("5502"),C=function(){function e(t){Object(k["a"])(this,e),this.el=t.el,this.renderListenerArr=new Set,this.scene=new THREE.Scene,this.modelPath="model/",this.imagePath="images/",this.initLight(),this.initCamera(),this.initRender(),this.animate()}return Object(R["a"])(e,[{key:"initCamera",value:function(){this.camera_top=new THREE.PerspectiveCamera(60,window.innerWidth/(window.innerWidth/2),.1,1e3),this.camera_top.position.x=-120,this.camera_top.up=new THREE.Vector3(0,1,0),this.camera_top.lookAt(this.scene.position),this.camera_right=new THREE.PerspectiveCamera(60,window.innerWidth/2/window.innerWidth,.1,1e3),this.camera_right.position.z=240,this.camera_right.up=new THREE.Vector3(0,0,1),this.camera_right.lookAt(this.scene.position),this.camera_bottom=new THREE.PerspectiveCamera(60,window.innerWidth/(window.innerWidth/2),.1,1e3),this.camera_bottom.position.x=120,this.camera_bottom.up=new THREE.Vector3(0,-1,0),this.camera_bottom.lookAt(this.scene.position),this.camera_left=new THREE.PerspectiveCamera(60,window.innerWidth/2/window.innerWidth,.1,1e3),this.camera_left.position.z=-240,this.camera_left.up=new THREE.Vector3(0,0,-1),this.camera_left.lookAt(this.scene.position)}},{key:"initRender",value:function(){this.renderer_top=new THREE.WebGLRenderer({antialias:!0}),this.renderer_top.setSize(window.innerWidth,window.innerWidth/2),this.el[0].appendChild(this.renderer_top.domElement),this.renderer_right=new THREE.WebGLRenderer({antialias:!0}),this.renderer_right.setSize(window.innerWidth/2,window.innerWidth),this.el[1].appendChild(this.renderer_right.domElement),this.renderer_bottom=new THREE.WebGLRenderer({antialias:!0}),this.renderer_bottom.setSize(window.innerWidth,window.innerWidth/2),this.el[2].appendChild(this.renderer_bottom.domElement),this.renderer_left=new THREE.WebGLRenderer({antialias:!0}),this.renderer_left.setSize(window.innerWidth/2,window.innerWidth),this.el[3].appendChild(this.renderer_left.domElement)}},{key:"initLight",value:function(){this.ambientLight=new THREE.AmbientLight(13421772,.3),this.scene.add(this.ambientLight),this.pointLight=new THREE.PointLight(16777215,.8),this.pointLight.position.z=60,this.pointLight.position.y=60,this.scene.add(this.pointLight)}},{key:"brighten",value:function(){B(this.pointLight,1,{intensity:.9}),B(this.ambientLight,1,{intensity:.5})}},{key:"darken",value:function(){B(this.pointLight,1,{intensity:.2}),B(this.ambientLight,1,{intensity:.3})}},{key:"animate",value:function(){var e=this;this.scene&&(requestAnimationFrame(function(){e.animate()}),this.render())}},{key:"render",value:function(){this.onRender(),this.renderer_top.render(this.scene,this.camera_top),this.renderer_right.render(this.scene,this.camera_right),this.renderer_bottom.render(this.scene,this.camera_bottom),this.renderer_left.render(this.scene,this.camera_left)}},{key:"onRender",value:function(){var e=!0,t=!1,n=void 0;try{for(var i,r=this.renderListenerArr[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){var a=i.value;a.handle()}}catch(e){t=!0,n=e}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}}},{key:"addRenderListener",value:function(e){this.renderListenerArr.add(e)}},{key:"removeRenderListener",value:function(e){this.renderListenerArr.delete(e)}},{key:"removeRenderListenerById",value:function(e){var t=!0,n=!1,i=void 0;try{for(var r,a=this.renderListenerArr[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){var s=r.value;if(s.id==e){this.renderListenerArr.delete(s);break}}}catch(e){n=!0,i=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw i}}}},{key:"loadObjectByRes",value:function(e){var t=this;return new Promise(function(n,i){var r=t.modelPath+e.name+"/";(new THREE.OBJLoader).setPath(r).load(e.name+".obj",function(i){var r=i.children[0];if(r.geometry.center(),r.material.transparent=!0,r.material.side=THREE.DoubleSide,e.texture){var a=new THREE.TextureLoader,s=a.load(t.imagePath+e.texture,function(e){});r.material.map=s}e.scale&&(r.scale.x=r.scale.y=r.scale.z=e.scale),n(r)})})}},{key:"addObjectByRes",value:function(e){var t=this;return this.loadObjectByRes(e).then(function(e){return t.addObject(e),e})}},{key:"addObject",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t.disableAnimate){var n=e.isGroup?e:{children:[e]};n.children.forEach(function(e){e.material.opacity=0,B(e.material,3,{opacity:1})})}t.parent?t.parent.add(e):this.scene.add(e)}},{key:"removeObject",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=[];if(!n.disableAnimate){var r=e.isGroup?e:{children:[e]};i=r.children.map(function(e){return B(e.material,1,{opacity:0})})}Promise.all(i).then(function(){n.parent?n.parent.remove(e):t.scene.remove(e)})}},{key:"showObject",value:function(e){var t=e.isGroup?e:{children:[e]};return t.children.map(function(e){return B(e.material,1,{opacity:1})})}},{key:"hideObject",value:function(e){var t=e.isGroup?e:{children:[e]};return t.children.map(function(e){return B(e.material,1,{opacity:0})})}},{key:"removeObjectById",value:function(e){var t=this.scene.children.find(function(t){return t.uuid==e});t&&this.removeObject(t)}},{key:"destroy",value:function(){this.renderer_top=this.renderer_left=this.renderer_right=this.renderer_bottom=null,this.camera_top=this.camera_left=this.camera_right=this.camera_bottom=null;while(this.scene.children.length)this.scene.remove(this.scene.children[0]);this.scene=null,this.el=null}}]),e}(),I=n("9393"),T=(n("f400"),n("a322")),L=function(){function e(){Object(k["a"])(this,e)}return Object(R["a"])(e,null,[{key:"analyze",value:function(t){if(""==t||/不[想要]/.test(t))return null;var n=new Map([[/^[你您]*是谁[啊呀]*$/,e.WHO_ARE_YOU],[/^[你您]*[都]*[会能]*[算预测]*什么[啊呀]*$/,e.ZHANBU_WHAT],[/^[您你请能帮我想要算一算我今天]*能[不能]*通过面试[吗]*$/,e.INTERVIEW],[/^[您你请能帮我想要算一算我]*今天的面试能[不能]*通过[吗]*$/,e.INTERVIEW],[/^[您你请能帮我想要帮给我(\S{1,4})算一算她]*生[的是]*男[娃孩儿还是生]*女[孩儿娃吗]*$/,e.BOY_GIRL],[/^[您你请能帮我想要算一算我(\S{1,4})]*生[的是]*男[娃孩儿还是生]*女[孩儿娃吗]*$/,e.BOY_GIRL],[/^[您你请能帮我想要算一算我(\S{1,4})]*今天的运气[如何怎么样咋吗]*$/,e.FATE],[/^[镜子魔镜啊]*[请问这个]*世界上谁最[漂亮美丽英俊帅]*$/,e.NICE]]),i=!0,r=!1,a=void 0;try{for(var s,o=n[Symbol.iterator]();!(i=(s=o.next()).done);i=!0){var u=Object(I["a"])(s.value,2),c=u[0],h=u[1];if(c.test(t))return h}}catch(e){r=!0,a=e}finally{try{i||null==o.return||o.return()}finally{if(r)throw a}}return null}}]),e}();Object(T["a"])(L,"WHO_ARE_YOU",Symbol()),Object(T["a"])(L,"ZHANBU_WHAT",Symbol()),Object(T["a"])(L,"INTERVIEW",Symbol()),Object(T["a"])(L,"BOY_GIRL",Symbol()),Object(T["a"])(L,"FATE",Symbol()),Object(T["a"])(L,"NICE",Symbol());var j=["没有什么特别的事情发生,会平平淡淡的度过",3],O=["你会一切顺利,尽情的去做想做的事情吧",5],q=["可能会和人发生口角,言行需谨慎",2],S=["没事最好不要出去,尽量待在家里",2],M=["会有意想不到的事情发生,随时做好准备",4],_=["运气非常好,最好去买张彩票",5],P=["如果外出看管好自己的财务,谨防丢失",2],H=["说话的时候,要特别留意自己的语气,凡事三思而后行",2],V=["你的心情会非常的好,会过的很开心",5],W=["会遇到一个多年不见的朋友",4],G=["会遇到很多机会,好好把握",4],Q=["适合做一些以前不敢做的事情",4],z=["凡事要按规矩来,不要冒险",3],D=["家里会有喜事,好运一整天",5],Z=["适合待在外面,一定会有好事发生",5],J=["最好不要接触利器,避免受伤",2],Y=["今天会遇到一些困难,但是只要努力坚持,就能成功解决",4],N=["尽量低调,不要过于张扬,否则会适得其反",3],X=["如果外出或网聊,会交到新的朋友",4],U=["适合在家里睡一天",3],F=[j,j,j,j,j,j,j,O,O,O,q,q,q,S,M,M,_,P,H,V,V,V,W,G,G,G,Q,z,z,z,D,D,Z,Z,J,Y,N,N,X,U],K=n("5502"),$={name:"qxcontent",data:function(){return{imgLoader:null,defaultImg:"images/jm.png",curMesh:null,hiddenMesh:null,mirrorGroup:null,qx:null,imageLoading:!1,lightTimer:null,starting:!1,recognizeText:"",curSound:null,onBackground:!1,zhanbuSound:n("7824")}},methods:{init:function(){this.qx=new C({el:[this.$refs.topBox,this.$refs.rightBox,this.$refs.bottomBox,this.$refs.leftBox]}),this.addMainObj(10),this.addEvent(),this.setScreenLight()},setScreenLight:function(){brightnessObj.setMaxBrightness()},goBack:function(){this.$router.back()},addEvent:function(){var e=this;this.watchRef=proximityObj.startWatch(function(t){t<5&&e.ask()},function(){}),this.onPauseFun=function(){e.onBackground=!0},this.onResumeFun=function(){e.onBackground=!1},this.onUnloadFun=function(){try{proximityObj.stopWatch(e.watchRef)}catch(e){}},document.addEventListener("pause",this.onPauseFun,!1),document.addEventListener("resume",this.onResumeFun,!1),window.addEventListener("unload",this.onUnloadFun,!1)},ask:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.onBackground){e.next=2;break}return e.abrupt("return");case 2:if(!this.starting){e.next=4;break}return e.abrupt("return");case 4:return this.starting=!0,this.showImage("images/eye.png"),e.next=8,this.speak("您有什么吩咐");case 8:this.listen();case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),answerAndAsk:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.speak("我可以算今天的运气,和,生男生女, 您想算什么");case 2:this.listen();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),listen:function(){var e=this;speechObj.startRecognize(function(t){e.recognizeText=t,e.onLitened()})},onLitened:function(){if(""!=this.recognizeText){var e=this.recognizeText;this.recognizeText="",this.dealText(e)}else this.stopZhanbu()},dealText:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=L.analyze(t),null!=n){e.next=6;break}return e.next=4,this.speak("对不起,我没听明白");case 4:return this.listen(),e.abrupt("return");case 6:if(n!=L.WHO_ARE_YOU){e.next=12;break}return e.next=9,this.speak("我是工程师陈欣开发的魔镜app,我能预知未来");case 9:this.stopZhanbu_timeout(),e.next=29;break;case 12:if(n!=L.ZHANBU_WHAT){e.next=16;break}this.answerAndAsk(),e.next=29;break;case 16:if(n!=L.NICE){e.next=22;break}return e.next=19,this.speak("当然是您了,我的主人");case 19:this.stopZhanbu_timeout(),e.next=29;break;case 22:if(n!=L.INTERVIEW){e.next=28;break}return e.next=25,this.speak("如果您的面试官,聪明,并且,颜值高,我想他一定会让您通过的,呵呵");case 25:this.stopZhanbu_timeout(),e.next=29;break;case 28:n==L.BOY_GIRL?this.zhanbu_boygirl():n==L.FATE&&this.zhanbu_fate();case 29:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),zhanbu_boygirl:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.speak("请在心中默念准妈妈的名字,并耐心等待结果");case 2:return e.next=4,this.startZhanbu();case 4:this.speak("请在镜子中查看结果"),this.showImage(this.getBoygirl()),this.stopZhanbu_timeout();case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getBoygirl:function(){var e=parseInt(100*Math.random());if(e>97)return"images/nn/m.png";var t=e%6;return"images/nn/"+t+".png"},zhanbu_fate:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.speak("好的,请静下心来,耐心等待");case 2:return e.next=4,this.startZhanbu();case 4:t=parseInt(Math.random()*F.length),this.speak("未来一天的运势, "+F[t][0]),this.showImage("images/fate/"+F[t][1]+".png"),this.stopZhanbu_timeout();case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),speak:function(e){var t=this.$store.state.speechToken,n="http://tsn.baidu.com/text2audio?",i={tok:t,lan:"zh",tex:encodeURIComponent(encodeURIComponent(e)),cuid:"370189163",per:2,ctp:1};return n+=Object.keys(i).map(function(e){return e+"="+i[e]}).join("&"),this.playSound(n)},playSound:function(e){var t=this;return new Promise(function(n){t.curSound=new Audio,t.curSound.src=e,t.curSound.play(function(){n()})})},addMainObj:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){var t,n,i,r,a,s,o,u,c,h,d,l,A=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=A.length>0&&void 0!==A[0]?A[0]:0,e.next=3,this.qx.loadObjectByRes({name:"mirror",texture:"skin.jpg",scale:5});case 3:n=e.sent,i=new THREE.PlaneGeometry(50,60),new THREE.TextureLoader,r=new THREE.Texture,this.imgLoader=new THREE.ImageLoader,this.imgLoader.load(this.defaultImg,function(e){r.image=e,r.needsUpdate=!0}),a=new THREE.MeshLambertMaterial({map:r,transparent:!0}),s=new THREE.Mesh(i,a),s.position.y=-10,s.position.z=0,this.curMesh=s,o=new THREE.Group,o.position.y=t,o.add(n),o.add(s),this.mirrorGroup=o,this.qx.addObject(o),u=new THREE.PlaneGeometry(50,60),c=new THREE.Texture,h=new THREE.MeshLambertMaterial({map:c,transparent:!0,opacity:0}),d=new THREE.Mesh(u,h),d.position.y=-10,d.position.z=0,this.qx.addObject(d,{disableAnimate:!0,parent:o}),this.hiddenMesh=d,l={id:"mirror",handle:function(){}},this.qx.addRenderListener(l);case 30:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),addLMX:function(){var e=new THREE.PlaneGeometry(150,150),t=new THREE.Texture;this.imgLoader.load("images/lmx.png",function(e){t.image=e,t.needsUpdate=!0});var n=new THREE.MeshLambertMaterial({map:t,transparent:!0}),i=new THREE.Mesh(e,n);i.material.side=THREE.DoubleSide,i.position.z=-20,this.qx.addObject(i);var r={id:"lmx",handle:function(){i.rotation.z+=.01}};this.qx.addRenderListener(r),this.lmx=i},removeLMX:function(){this.lmx&&(this.qx.removeObject(this.lmx),this.qx.removeRenderListenerById("lmx"),this.lmx=null)},addSunLight:function(){var e=new THREE.PlaneGeometry(500,500),t=new THREE.Texture;this.imgLoader.load("images/sun.png",function(e){t.image=e,t.needsUpdate=!0});var n=new THREE.MeshLambertMaterial({map:t,transparent:!0}),i=new THREE.Mesh(e,n);i.material.side=THREE.DoubleSide,i.position.z=3,this.qx.addObject(i),this.sunLight=i},removeSunLight:function(){this.sunLight&&(this.qx.removeObject(this.sunLight),this.sunLight=null)},showImage:function(e){var t=this;if(!this.imageLoading)return this.imageLoading=!0,new Promise(function(n){t.imgLoader.load(e,function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(i){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.hiddenMesh.material.map.image=i,t.hiddenMesh.material.map.needsUpdate=!0,e.next=4,Promise.all(Object(y["a"])(t.qx.showObject(t.hiddenMesh)).concat(Object(y["a"])(t.qx.hideObject(t.curMesh))));case 4:r=[t.hiddenMesh,t.curMesh],t.curMesh=r[0],t.hiddenMesh=r[1],t.imageLoading=!1,n();case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())});console.log("loading")},showDefaultImage:function(){return this.showImage(this.defaultImg)},test1:function(){this.recognizeText="你能算什么",this.onLitened()},test2:function(){this.recognizeText="我能通过面试吗",this.onLitened()},test3:function(){this.recognizeText="今天的运气",this.onLitened()},test4:function(){this.recognizeText="生男生女",this.onLitened()},test5:function(){this.recognizeText="这个世界上谁最英俊",this.onLitened()},startZhanbu:function(){var e=this;return new Promise(function(){var t=Object(x["a"])(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.addLMX(),t.next=3,e.showDefaultImage();case 3:return e.playSound(e.zhanbuSound),t.next=6,K(e.mirrorGroup.rotation,6,{y:THREE.Math.degToRad(2880)});case 6:e.mirrorGroup.rotation.y=THREE.Math.degToRad(0),e.addSunLight(),setTimeout(function(){e.removeLMX(),e.removeSunLight(),n()},9e3);case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())},stopZhanbu:function(){this.showDefaultImage(),this.removeLMX(),this.removeSunLight(),speechObj.stopRecognize();try{this.curSound&&this.curSound.stop()}catch(e){}this.starting=!1},stopZhanbu_timeout:function(){var e=this;setTimeout(function(){e.stopZhanbu()},8e3)},onBrighten:function(){this.lightTimer&&(clearTimeout(this.lightTimer),this.lightTimer=null),this.qx.brighten()},onDarken:function(){var e=this;this.lightTimer=setTimeout(function(){e.qx.darken()},5e3)}},mounted:function(){this.init()},beforeDestroy:function(){document.removeEventListener("pause",this.onPauseFun,!1),document.removeEventListener("resume",this.onResumeFun,!1),window.removeEventListener("unload",this.onUnloadFun,!1),this.stopZhanbu(),proximityObj.stopWatch(this.watchRef),this.qx.destroy(),brightnessObj.restoreBrightness()}},ee=$,te=(n("c5f9"),Object(s["a"])(ee,E,w,!1,null,"408cbda0",null));te.options.__file="QXContent.vue";var ne=te.exports,ie=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("img",{staticClass:"btn-back",attrs:{src:n("6aa2")},on:{click:e.goBack}}),i("div",{staticStyle:{display:"none"}},[i("button",{on:{click:e.test1}},[e._v("test")]),i("button",{on:{click:e.test2}},[e._v("test2")]),i("button",{on:{click:e.test3}},[e._v("test3")]),i("button",{on:{click:function(t){e.test4()}}},[e._v("test4")]),i("button",{on:{click:function(t){e.test5()}}},[e._v("test5")])]),i("div",{ref:"box",staticClass:"qx-con",on:{click:e.ask}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.queShow,expression:"queShow"}],staticClass:"c-que-list"},[i("div",{on:{click:function(t){e.doZhanbu(3)}}},[e._v("今天的运气")]),i("div",{on:{click:function(t){e.doZhanbu(2)}}},[e._v("生男生女")])])])},re=[],ae=n("dc0a"),se=n("d328"),oe=n("11d9"),ue=(n("5502"),function(e){function t(){return Object(k["a"])(this,t),Object(se["a"])(this,Object(oe["a"])(t).apply(this,arguments))}return Object(R["a"])(t,[{key:"initCamera",value:function(){this.camera=new THREE.PerspectiveCamera(60,window.innerWidth/window.innerWidth,.1,1e3),this.camera.position.z=120,this.camera.lookAt(this.scene.position)}},{key:"initRender",value:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerWidth),this.el.appendChild(this.renderer.domElement)}},{key:"render",value:function(){this.onRender(),this.renderer.render(this.scene,this.camera)}},{key:"destroy",value:function(){this.renderer=null,this.camera=null;while(this.scene.children.length)this.scene.remove(this.scene.children[0]);this.scene=null,this.el=null}}]),Object(ae["a"])(t,e),t}(C)),ce={name:"normal-content",mixins:[ne],data:function(){return{queShow:!1,lanList:{que:n("7c11"),result:n("845a"),yunqi:n("6dfa"),nannv:n("b6e7")}}},methods:{init:function(){this.qx=new ue({el:this.$refs.box}),this.addMainObj(),this.addEvent()},addEvent:function(){var e=this;this.onPauseFun=function(){e.onBackground=!0},this.onResumeFun=function(){e.onBackground=!1},document.addEventListener("pause",this.onPauseFun,!1),document.addEventListener("resume",this.onResumeFun,!1)},beforeDestroy:function(){document.removeEventListener("pause",this.onPauseFun,!1),document.removeEventListener("resume",this.onResumeFun,!1),this.stopZhanbu(),this.qx.destroy()},ask:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.onBackground){e.next=2;break}return e.abrupt("return");case 2:if(!this.starting){e.next=4;break}return e.abrupt("return");case 4:return this.starting=!0,this.showImage("images/eye.png"),e.next=8,this.playSound(this.lanList.que);case 8:this.listen();case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),listen:function(){this.queShow=!0},doZhanbu:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:2==t?this.zhanbu_boygirl():3==t&&this.zhanbu_fate(),this.queShow=!1;case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),zhanbu_boygirl:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.playSound(this.lanList.nannv);case 2:return e.next=4,this.startZhanbu();case 4:this.playSound(this.lanList.result),this.showImage(this.getBoygirl()),this.stopZhanbu_timeout();case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),zhanbu_fate:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.playSound(this.lanList.yunqi);case 2:return e.next=4,this.startZhanbu();case 4:t=parseInt(Math.random()*F.length),this.playSound(this.lanList.result),this.showImage("images/fate/"+F[t][1]+".png"),this.stopZhanbu_timeout();case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},he=ce,de=(n("6d55"),Object(s["a"])(he,ie,re,!1,null,"12c536da",null));de.options.__file="NormalContent.vue";var le=de.exports,Ae=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"setting"},[i("img",{staticClass:"btn-back",attrs:{src:n("6aa2")},on:{click:e.goBack}}),i("div",{staticClass:"c-title"},[e._v("设置")]),i("div",{staticClass:"c-setting-con"},[i("h5",[e._v("显示模式")]),i("div",[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{type:"radio",name:"displayMode",value:"1"},domProps:{checked:e._q(e.mode,"1")},on:{change:[function(t){e.mode="1"},e.onModeChange]}}),e._m(0)]),i("label",{staticStyle:{display:"none"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{type:"radio",name:"displayMode",value:"2"},domProps:{checked:e._q(e.mode,"2")},on:{change:[function(t){e.mode="2"},e.onModeChange]}}),e._m(1)])])])])},me=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("em",[i("img",{attrs:{src:n("e18b")}}),e._v("\n      普通模式"),i("i",{staticClass:"iconfont icon-duigou1"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("em",[i("img",{attrs:{src:n("3c44")}}),e._v("\n      全息模式"),i("i",{staticClass:"iconfont icon-duigou1"})])}],fe={name:"setting-page",data:function(){return{mode:""}},mounted:function(){this.mode=this.$store.state.mode},methods:{goBack:function(){this.$router.back()},onModeChange:function(){console.log(this.mode),this.$store.commit("setMode",this.mode)}}},pe=fe,ge=(n("f160"),Object(s["a"])(pe,Ae,me,!1,null,"373d3e2d",null));ge.options.__file="setting.vue";var be=ge.exports;i["a"].use(A["a"]);var ve=new A["a"]({routes:[{path:"/",name:"home",component:v},{path:"/qxcontent",name:"qxcontent",component:ne},{path:"/normal-content",name:"normal-content",component:le},{path:"/setting",name:"setting-page",component:be},{path:"/about",name:"about-page",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});i["a"].config.productionTip=!1,new i["a"]({store:l,router:ve,created:function(){window.plus},render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("2856"),r=n.n(i);r.a},"6aa2":function(e,t,n){e.exports=n.p+"img/back_off.dd7fc12d.png"},"6d55":function(e,t,n){"use strict";var i=n("b17f"),r=n.n(i);r.a},"6dfa":function(e,t,n){e.exports=n.p+"media/yunqi.35015ff5.mp3"},7824:function(e,t,n){e.exports=n.p+"media/zhanbu.4ee51751.mp3"},"7c11":function(e,t,n){e.exports=n.p+"media/que.e99f8721.mp3"},"845a":function(e,t,n){e.exports=n.p+"media/result.d7ed484f.mp3"},aeb7:function(e,t,n){},b17f:function(e,t,n){},b45b:function(e,t,n){},b6e7:function(e,t,n){e.exports=n.p+"media/nannv.0553b1a2.mp3"},c5f9:function(e,t,n){"use strict";var i=n("5169"),r=n.n(i);r.a},e18b:function(e,t){e.exports="data:image/png;base64,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ADBCQAAARggIAMAIAQEAGCEgAAAjBAQAYISAAACMEBAAgBECAgAwQkAAAEYICADACAEBABghIAAAIwQEAGCEgAAAjBAQAIARAgIAMEJAAABGCAgAwAgBAQAYISAAACMEBABghIAAAIwQEACAEQICADBCQAAARggIAMAIAQEAGCEgAAAjBAQAYISAAACMEBAAgBECAgAwQkAAAEYICADACAEBABghIAAAIwQEAGCEgAAAjBAQAIARAgIAMEJAAABGCAgAwAgBAQAYISAAACMEBABghIAAAIwQEACAEQICADBCQAAARggIAMAIAQEAGCEgAAAjBAQAYISAAACMEBAAgBECAgAwQkAAAEYICADACAEBABghIAAAIwQEAGCEgAAAjBAQAIARAgIAMEJAAABGCAgAwAgBAQAYISAAACMEBABghIAAAIwQEACAEQICADBCQAAARggIAMAIAQEAGCEgAAAjBAQAYISAAACMEBAAgBECAgAwQkAAAEYICADACAEBABghIAAAIwQEAGCEgAAAjBAQAIARAgIAMEJAAABGCAgAwAgBAQAYISAAACMEBABghIAAAIwQEACAEQICADBCQAAARggIAMAIAQEAGCEgAAAjBAQAYISAAACMEBAAgBECAgAwQkAAAEYICADACAEBABghIAAAIwQEAGCEgAAAjBAQAIARAgIAMEJAAABGCAgAwAgBAQAYISAAACMEBABghIAAAIwQEACAEQICADBCQAAARggIAMAIAQEAGCEgAAAjBAQAYISAAACMEBAAgBECAgAwQkAAAEYICADACAEBABghIAAAIwQEAGCEgAAAjBAQAIARAgIAMEJAAABGHNkv+2X/pUu2B9Hv6Hf0O6NH254DACJV6PXQ66HX4+JszyE5kiM5vb2OjJARMqKry/Y8aoVaoVZMnGh7DgCIVGqj2qg2RsDn5GgZLaO7uhyJl3iJ7+y0PY8+ro/r45mZWmuttVK25wGASDHwuegWt7gzM23PI2/IG/JGR4cjbdImbSdP2p5HciVXcidODFQGKgOVc+faHgcAIkVgXmBeYF5mphySQ3Lo7rttzyPn5JycO3nSkckyWSY3N9ueJ0xtUBvUBp+vurq6urra5bI9DwDYUqJLdImOilI5KkfllJXZnmfANJkm05qbHf2+fl+/f/Cg7XkGLJWlsnTmzJbElsSWxPJy2+MAgC0x78W8F/NeZaW0S7u0p6TYnidM1+t6XX/wYJR+WD+sH96zR4mSiNrwsFN2ys7f/S5wKnAqcCo2tju+O747fvny1Wq1Wq36+myPBwA3W3jNy+lNpzed3rRunT6sD+vDK1fanmswV7er29VdV+cUFRcVFxW3tvYXLgK2hQy2VbbK1t/8JjYmNiY2Zv/+8gXlC8oXsLEdwHdf+HMs0BvoDfTOm9dyoeVCy4XGRu3Wbu0uLLQ931XiJV7im5s9Gz0bPRtPnx74APZv92/3by8tVc2qWTU//bTtOa9pqkyVqV99JXVSJ3W7d0u+5Et+a6tu0A26oafH9ngAMJhKU2kqLSZGPaQeUg/de68u1aW6NCMjYjaOX8sSWSJL1qwpGFcwrmBcSclAQAKPBx4PPP6Tn8i78q6829wshVIohfyHDwDo52p3tbvak5Lyy/LL8suOHbsqEIGMQEYgY9cueVAelAcjYH9jAIBV/XvHfvCBt8Xb4m2ZPz98+1XnwtLr9Xq9/tlnbQ8MAIgMOk/n6bx16wbfPuQqqsDHgY8DH+/dKw3SIA3p6bYXAAAwvFSRKlJFu3Z5Q96QNzRv3uC/D3k2XmeZs8xZ9tRTUiM1UvP117YXBAAwTNIlXdIvX1aNqlE1Dr0b8ZAB8TR5mjxNR45or/ZqbyBge3kAAMNDz9Az9AyfzzPDM8Mz4+jRoe53zeuB9GT1ZPVkPfNM/1kgGxpsLxgA4NbQS/VSvfSjj3qkR3qktPRa979mQMJHfjtjnbHO2F/9SoqlWIr/9S/bCwoAuElekBfkhTNn5KyclbO5udd7xo8bPs6jzFfmK/NNm+bMcmY5sz78UA7IATnwgx/YXn4AwA36xuU83O6C7ILsguymput9uPGBgv0hSUtzJjmTnEl/+5u0SIu0cEVBAIh4m2WzbO7okLflbXn7l78sSC5ILkjet+9Gn8b4muj959BqaFC9qlf1pqUNfAUCAESm8CaIVbJKVqWnm4YjzDggYd7F3sXexYcO6Rgdo2NSU8UlLnHV19t+nwAA/cIbx6NmRs2Mmjlz5o2uqhrKTT/XVfgCKDHNMc0xzatWqS7VpboKC6VWaqV2xAgr7x4A3E6uHMcR3h03YWvC1oSta9dmZ2dnZ2cHgzfrZW75yRL9ef48f9599ymf8infiy/KFtkiWzIybvXrAsDtJnzkeOhI6EjoyIoVhcmFyYXJt+6Ks8N+tt1AciA5kDxnjjqmjqljTz+ty3SZLvvFL4Z7DgD4rguf5DB8rqqCtQVrC9YO3yYE66drD59GXhfpIl2Ul6emq+lqek6OlEqplCYm2p4PAKy7ciEnmSNzZE5VVTAlmBJMefPN4jPFZ4rPnDhhayzrARlK/27C99yjzqqz6mx6upqtZqvZ99+vClSBKkhO1mf1WX02IUEWykJZOGaM+MUv/lGjpEqqpCo62vb8AHCVHMmRnN7e/ustXbwo22SbbGtvVxPUBDXh1Ckd0AEdOHp04JrjTVFNUU179+bX59fn13/5pe3xB/sP6OulhWhxXYwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDktMzBUMDA6MDQ6MDUrMDg6MDDQhBikAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA5LTMwVDAwOjA0OjA1KzA4OjAwodmgGAAAAEl0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25fb3Bud2JsaWpwMzgvbm9ybWFsLnN2Z0b87Z4AAAAASUVORK5CYII="},f160:function(e,t,n){"use strict";var i=n("b45b"),r=n.n(i);r.a},f26e:function(e,t,n){"use strict";var i=n("aeb7"),r=n.n(i);r.a},f773:function(e,t,n){e.exports=n.p+"img/title.4d9cd48b.png"}});
//# sourceMappingURL=app.9c0f4c72.js.map