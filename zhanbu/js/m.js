var proximityObj= {
  getCurrent: function(successCB, errorCB){
    if(!window.plus) return;
    plus.proximity.getCurrentProximity( successCB, errorCB );
  },
  startWatch: function(successCB, errorCB){
    if(!window.plus) return;
    return plus.proximity.watchProximity( successCB, errorCB );
  },
  stopWatch: function(watchId){
    if(!window.plus) return;
    plus.proximity.clearWatch( watchId );
  }
}

var brightnessObj= {
  curBrightness: null,
  setMaxBrightness: function() {
    if(!window.plus) return;
    var n = plus.screen.getBrightness();
    if(n == 1){
      return;
    }
    this.curBrightness = n;
    plus.screen.setBrightness(1);
  },
  restoreBrightness: function() {
    if(!window.plus) return;
    if(this.curBrightness === null) return;
    plus.screen.setBrightness(this.curBrightness);
  }
}

var speechObj = {
  startRecognize: function(cb){
    if(!window.plus) return;
		//20181011新添加的百度的语音引擎只有hbuilderX可以, 测试可以加listener startRecognize的第二个回调也可以,
		//但是第二个回调以前的接口是实时的,采用+=来赋值,现在好像只返回一次结果了,原来options里面的onend已经废弃了.所以listener好还是回调好,自己斟酌,回调比较省事,
		
		//这样加不行 每调用一次就会加一个listener 触发多次
// 		plus.speech.addEventListener("recognition", function(e){
// 			cb(e.result);
// 		});
// 		plus.speech.addEventListener("error", function(e){
// 			console.log("语音识别失败："+e.message)
// 			plus.speech.stopRecognize()
// 			cb("");
// 		});
		this.running = true;
		var options = {
			engine: "baidu",
			userInterface: false,//科大讯飞的有bug 无法隐藏界面 engine改为baidu没事了 2018-10-10更新的
			punctuation: false,
		}
		var that = this;
    plus.speech.startRecognize( options, function(s){
			cb(s);
			that.running = false;
		}, function ( e ) {
      console.log( "语音识别失败："+e.message );
      plus.speech.stopRecognize();
      cb("");   
			that.running = false;
    } );
  },
  stopRecognize: function() {
    if(!window.plus) return;
		if(!this.running) return;
    plus.speech.stopRecognize();
  }
}

;(function(){
  //pc测试环境添加播放完成的回调
  try{
    if(window.location.href.indexOf("http") == 0) {
      Audio.prototype._play =  Audio.prototype.play;
      Audio.prototype.play = function(cb){
        this.addEventListener("ended", function(){
            cb && cb();
        })
        this._play();
      }
    }
  }catch(e){console.log("play sound error!", e)}

  if(!window.plus)
    window.plus = window.parent.plus;
  if(!window.plus){
    document.addEventListener('plusready',initSoundClass,false);
  }
  else{
    initSoundClass();
  }
  function initSoundClass(){
    window.Audio = function(){
      //this.dPath = "_www";
      this.src = "";
      this._loop = false;
      this._muted = false;
      this._pause = false;
      //this.initSound();
    }
    Audio.prototype = {
      initSound: function(){
      	if(!this.src){
      		return;
        }
        //以前好像要这样写 路径里面还有上面那个_www 后来就不用了 20200826
      	// if(this.src.indexOf("http") == 0){
      	//   this.sound = plus.audio.createPlayer(this.src);
      	// }
      	// else{
        //   // var letter = "";
        //   // if(this.src.indexOf("/") != 0){
        //   //   letter = "/";
        //   // }        
        //  // this.sound = plus.audio.createPlayer(this.dPath + letter + this.src);
        // }
        this.sound = plus.audio.createPlayer({src:this.src});
      },
      play: function(cb){
      	if(!this.sound){
      		this.initSound();
      	}
        if(this.mute)
          return;
        var that = this;  
        this.sound.play(function(){
            //播放完了 貌似自己就销毁了 所以只能再重新创建一个..
            that.sound = that.initSound(that.src);
            if(that.loop){
              that.play();
            }
            else{
              cb && cb();
            }
        }, function ( e ) {
          console.log( "Audio play error: " + e.message + "\n " + that.src); 
        });
      },
      seekTo: function(n){
        this.sound.seekTo(n);
      },
      getDuration: function(){
        return this.sound.getDuration();
      },
      getPosition: function(){
        return this.sound.getPosition();
      },
      pause: function(){
        this.sound.pause();
      },
      stop: function(){
        this.sound.stop();
      },
      get loop(){
        return this._loop;
      },
      set loop(b){
        this._loop = b;
      },
      get muted(){
        return this._muted;
      },
      set muted(b){
        this._muted = b;
        if(b){
          this.sound.pause();
        }
        else{
          this.sound.resume();
        }
      }       
    }
  }
})();


try{
    //取消浏览器的所有事件，使得active的样式在手机上正常生效
    document.addEventListener('touchstart',function(){
        return false;
    },true);
    // 禁止选择
    document.oncontextmenu=function(){
      return false;
    };
    // H5 plus事件处理
    function plusReady(){
      // 隐藏滚动条
      plus.webview.currentWebview().setStyle({scrollIndicator:'none'});
      var _flag = false;
      // Android处理返回键
      plus.key.addEventListener('backbutton',function(){
        //console.log(location.href);
        if(location.href.lastIndexOf("#/") < location.href.length-2 && location.href.indexOf("#/?") < 0){
          history.back();
          return true;
        }
        
        setTimeout(function(){
          _flag = false;
        }, 2000);
        if(_flag){
          quitApp();
        }
        else{
          plus.nativeUI.toast("再按一次退出");
          _flag = true;
        }
        return false;
        
      },false);
//    //mui.back = function(){};
      
      compatibleAdjust();
      //屏幕常亮
      plus.device.setWakelock( true );
      //横屏(在调试的时候使用 , 发布以后在manifest里面设置了 所以这就不用了)
      //plus.screen.lockOrientation( "landscape-primary" );
    }
    if(window.plus){
      plusReady();
    }else{
      document.addEventListener('plusready',plusReady,false);
    }
    // DOMContentLoaded事件处理
    var _domReady=false;
    document.addEventListener('DOMContentLoaded',function(){
      _domReady=true;
      compatibleAdjust();
    },false);
    // 兼容性样式调整
    var _adjust=false;
    function compatibleAdjust(){
      if(_adjust||!window.plus||!_domReady){
        return;
      }
      _adjust=true;
      // iOS平台使用div的滚动条
    //  if('iOS'==plus.os.name){
    //    document.getElementById('content').className='scontent';
    //  }
      // 预创建二级窗口
    //  preateWebviews();
      // 关闭启动界面
      setTimeout(function(){
        plus.navigator.closeSplashscreen();
      },500);
    }
    //退出app
    function quitApp(){         
      plus.runtime.quit();      
    }
   
}catch(e){console.log(e)}   
