// 假数据
function rn(base, v) {
    let s = parseInt(Math.random() * 20) % 2 == 0 ? 1 : -1;
    return base + parseInt(v * Math.random()) * s;
}
let mock = {
  lineData() {
    return [
      {
        name: "00:00",
        a: rn(100, 50),
        b: rn(100, 50) 
      },
      {
        name: "04:00",
        a: rn(100, 50),
        b: rn(100, 50) 
      },
      {
        name: "08:00",
        a: rn(100, 50),
        b: rn(100, 50) 
      },
      {
        name: "12:00",
        a: rn(100, 50),
        b: rn(100, 50) 
      },
      {
        name: "16:00",
        a: rn(100, 50),
        b: rn(100, 50) 
      },
      {
        name: "20:00",
        a: rn(100, 50),
        b: rn(100, 50) 
      },
    ]
  },
  relationDataIdx: -1,
  relationData(){
    var data = [
    {
      id: 1,
      name: "某州外贸创新高",
      relation: [
        {
          id: 2,
          name: "网信某州"  
        },
        {
          id: 4,
          name: "某州新闻头条"  
        },        
        {
          id: 3,
          name: "美好某州"  
        },
      ]
    },
    {
      id: 1,
      name: "新奥燃气荣获省级荣誉",
      relation: [
        {
          id: 2,
          name: "网信某州"  
        },
        {
          id: 3,
          name: "美好某州"  
        },
        {
          id: 4,
          name: "某州新闻头条"  
        },
      ]
    },
    {
      id: 1,
      name: "某州警方集中行动",
      relation: [
        {
          id: 2,
          name: "网信某州"  
        },
        {
          id: 3,
          name: "某州政府网"  
        },
      ]
    },
    {
      id: 1,
      name: "打造智慧化项目",
      relation: [
        {
          id: 2,
          name: "某州新闻头条"  
        },
        {
          id: 3,
          name: "某州新闻网"  
        },
      ]
    },
    ]      
    if(this.relationDataIdx >= data.length-1) {
      this.relationDataIdx = 0;
    }
    else {
      this.relationDataIdx++;
    }
    return data[this.relationDataIdx];
  },
  
  barData() {
    return [
      {
        name: "微信",
        a: rn(30, 20),
        b: rn(15, 10),  
      },
      {
        name: "微博",
        a: rn(60, 30),
        b: rn(15, 10),  
      },
      {
        name: "抖音",
        a: rn(40, 20),
        b: rn(22, 10),  
      },
      {
        name: "头条",
        a: rn(50, 10),
        b: rn(28, 10),  
      },
      {
        name: "新浪",
        a: rn(35, 8),
        b: rn(20, 10),  
      },
      {
        name: "网易",
        a: rn(30, 20),
        b: rn(18, 10),  
      },
    ]    
  },
  
  pieData() {
    return [
      {
        name: "正面",
        value: rn(220, 30),
      },
      {
        name: "中性",
        value: rn(50, 20),
      },
      {
        name: "负面",
        value: rn(10, 10),
      },        
    ];
  }  
}