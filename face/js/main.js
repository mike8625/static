var vueApp = new Vue({
  el: "#app",
  data: function () {
    return {
      expressions: {
          normal: {
            // 左眼：圆心(120,130)，半径20
            leftEye: "M120,110 C131,110 140,119 140,130 C140,141 131,150 120,150 C109,150 100,141 100,130 C100,119 109,110 120,110 Z",
            // 右眼：圆心(280,130)，半径20
            rightEye: "M280,110 C291,110 300,119 300,130 C300,141 291,150 280,150 C269,150 260,141 260,130 C260,119 269,110 280,110 Z",
            mouth: "M150 200 C188 200 220 200 250 200"
          },
          surprise: {
            // 左眼：圆心(120,120)，半径25（比之前的35缩小）
            leftEye: "M120,95 C134,95 145,106 145,120 C145,134 134,145 120,145 C106,145 95,134 95,120 C95,106 106,95 120,95 Z",
            // 右眼：圆心(280,120)，半径25
            rightEye: "M280,95 C294,95 305,106 305,120 C305,134 294,145 280,145 C266,145 255,134 255,120 C255,106 266,95 280,95 Z",
            mouth: "M201 169 C143 239 262 239 201 169"
          },
          smile: {
            leftEye: "M120,110 C131,110 140,119 140,130 C140,141 131,150 120,150 C109,150 100,141 100,130 C100,119 109,110 120,110 Z",
            rightEye: "M280,110 C291,110 300,119 300,130 C300,141 291,150 280,150 C269,150 260,141 260,130 C260,119 269,110 280,110 Z",
            mouth: "M150 200 C180 230 220 230 250 200"
          },
          // 新增：害怕（fearful）表情配置
          fearful: {
            // 左眼：圆心(120,120)，半径25（比之前的35缩小）
            leftEye: "M120,85 C134,95 145,106 145,120 C145,134 134,145 120,145 C106,145 95,134 95,120 C95,106 106,95 120,85 Z",
            // 右眼：圆心(280,120)，半径25
            rightEye: "M280,85 C294,95 305,106 305,120 C305,134 294,145 280,145 C266,145 255,134 255,120 C255,106 266,95 280,85 Z",
            // 害怕时嘴巴：小而圆的弧线（表现紧张、抿嘴的状态）
            mouth: "M150 200 C195 236 205 168 250 200"
          },      
          sad: {
            // 左眼：圆心(120,140)，半径20（下移）
            leftEye: "M120,120 C131,120 140,129 140,140 C140,151 131,160 120,160 C109,160 100,151 100,140 C100,129 109,120 120,120 Z",
            // 右眼：圆心(280,140)，半径20
            rightEye: "M280,120 C291,120 300,129 300,140 C300,151 291,160 280,160 C269,160 260,151 260,140 C260,129 269,120 280,120 Z",
            mouth: "M150 220 C180 185 220 185 250 220"
          },
          angry: {
            leftEye: "M79 82 C80 82 79 82 82 82 81 81 82 82 82 84 81 81 81 84 176 111 158 148 80 116 79 83 Z",
            rightEye: "M321 82 C320 82 321 82 318 82 319 81 318 82 318 84 319 81 319 84 224 111 242 148 320 116 321 83 Z",
            mouth: "M150 210 C180 190 220 190 250 210"
          }
      },
      dict: {
        'neutral': "normal",
        'happy': "smile",
        'sad': "sad",
        'angry': "angry",
        'fearful': "fearful",
        'disgusted': "normal",
        'surprised' : "surprise",        
      },
      // 设置
      optShow: false,
      // loading
      loading: true,
      // 视频
      vdShow: false,
    }
  },
  
  created: function() {
    // 监听屏幕方向变化
    window.addEventListener('resize', this.checkOrientation);
    // 初始检查
    this.checkOrientation();
    //屏幕常亮
    window.navigator.wakeLock.request("screen");
  },
  
  mounted: function () {
    this.loadModel();
  },
  
  unmounted: function() {
    window.addEventListener('resize', this.checkOrientation);
  },

  methods: {
    init() {
      this.loading = false;
      this.setVd();
      this.setExpression('normal');
    },
    async loadModel() {
      // load face detection and face expression recognition models
      // and load face landmark model for face alignment
      await faceapi.nets.tinyFaceDetector.load('./model/');
      await faceapi.loadSsdMobilenetv1Model('./model/');      
      await faceapi.loadFaceLandmarkModel('./model/')
      await faceapi.loadFaceExpressionModel('./model/')
      
      this.init()
    },
    
    async setVd() {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      console.log(stream)
      this.$refs.vd.srcObject = stream; 
      this.$refs.vd.play();       
    },
    
    async onPlay() {
      const videoEl = this.$refs.vd;
      if (videoEl.paused || videoEl.ended || this.optShow) {
        return setTimeout(() => this.onPlay());
      }
      const result = await faceapi.detectSingleFace(videoEl).withFaceExpressions();
      var s = this.getExpressionResult(result?.expressions);
      console.log(s)
      if(this.dict[s]){
        this.setExpression(this.dict[s])
      }
      setTimeout(() => {this.onPlay()}, 500);
    },    
    
    getExpressionResult(expression) {
      if (!expression) return;
      const keys = [
        'neutral',
        'happy',
        'sad',
        'angry',
        'fearful',
        'disgusted',
        'surprised',
      ];
      //disgusted 厌恶
    
      const curExpression = keys.reduce((prev, cur) => {
        if (!prev) {
          return cur;
        } else {
          return expression[cur] > expression[prev] ? cur : prev;
        }
      }, '');
      return curExpression;
    },    
    
    checkOrientation() {
      const orientation = window.screen.orientation.type;
       if (orientation === "landscape-primary" || orientation === "landscape-secondary") {
            console.log("设备处于横屏模式");
            console.log(document.documentElement.clientHeight )
            this.boxHeight = document.documentElement.clientHeight;
            this.boxWidth = this.boxHeight / 3 * 4;
        } else {
            this.boxWidth = document.documentElement.clientWidth;
            this.boxHeight = this.boxWidth / 4 * 3
            console.log("设备处于竖屏模式");
        }
    },
    setExpression(expression) {
      const expr = this.expressions[expression];
      this.$refs.leftEye.setAttribute('d', expr.leftEye);
      this.$refs.rightEye.setAttribute('d', expr.rightEye);
      this.$refs.mouth.setAttribute('d', expr.mouth);
    },
  },
  computed: {

  },

});
