//canvas 網站性別比 -----------------------------------------------------
var ctx = document.getElementById('chart_gender');
var myChart = new Chart(ctx, {
  type: 'pie', //圖表類型。line / bar長條圖 / radar雷達圖 / polarArea / pie圓餅圖 / doughnut甜甜圈 / bebble泡泡圖
  data: {
    //標題
    labels: ['女性', '男性', '其他',], //定義標籤代表的意思
    datasets: [{
      label: '# test', //標籤
      data: [55, 40, 5], //編輯資料
      //圖表背景色
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(141, 200, 255, 1)',
        'rgba(117, 217, 100, 1)',
      ],
      //圖表外框線色
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(141, 200, 255, 1)',
        'rgba(117, 217, 100, 1)',
      ],
      //外框線寬度
      borderWidth: 0
    }]
  },
  options: {
    plugins: {
      title: {
        
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          responsive: true //符合響應式
        }
      }]
    }
  }
});

//canvas 今日瀏覽人數長條圖 -----------------------------------------------------
var ctx1 = document.getElementById('chart_todayVisit');

var myChart = new Chart(ctx1, {
  type: 'bar', //圖表類型。line / bar長條圖 / radar雷達圖 / polarArea / pie圓餅圖 / doughnut甜甜圈 / bebble泡泡圖
  data: {
    //標題
    labels: [ //定義標籤代表的意思
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
      '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22',
      '23'
    ], 
    datasets: [{
      label: '今日瀏覽人數(千人)', //編輯折線圖線條名稱
      data: [ //編輯資料
        1500, 834, 526, 0, 0, 0, 0, 0, 78, 93, 687, 1245, 1467, 1678, 2378, 2875, 3567, 3789, 3985, 4145,
        4679, 5689, 3234, 2456 
      ], 
      //圖表背景色
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
      ],
      //圖表外框線色
      borderColor: [],
      //外框線寬度
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: false, //是否要顯示標題?
        text: 'Chart.js Line Chart' //標題文字
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true
          text: '時間(hr)'
        }
      },
      y: {
        display: true,
        title: {
          display: true, //是否要顯示Y軸標題?
          text: '人數(千人)' //標題文字
        },
        suggestedMin: 0, //Y軸最小值
        suggestedMax: 6000 //Y軸最大值
      }
    }
  }
});


//------------------------------------------------------------

// <block:setup:2>
const inputs = {
    min: -100,
    max: 100,
    count: 8,
    decimals: 2,
    continuity: 1
  };
  
  const generateLabels = () => {
    return Utils.months({count: inputs.count});
  };
  
  const generateData = () => (Utils.numbers(inputs));
  // </block:setup>
  
  // <block:data:0>
  const data = {
    labels: generateLabels(),
    datasets: [
      {
        label: 'Dataset',
        data: generateData(),
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red),
        fill: false
      }
    ]
  };
  // </block:data>
  
  // <block:actions:3>
  let smooth = false;
  
  const actions = [
    {
      name: 'Fill: false (default)',
      handler: (chart) => {
        chart.data.datasets.forEach(dataset => {
          dataset.fill = false;
        });
        chart.update();
      }
    },
    {
      name: 'Fill: origin',
      handler: (chart) => {
        chart.data.datasets.forEach(dataset => {
          dataset.fill = 'origin';
        });
        chart.update();
      }
    },
    {
      name: 'Fill: start',
      handler: (chart) => {
        chart.data.datasets.forEach(dataset => {
          dataset.fill = 'start';
        });
        chart.update();
      }
    },
    {
      name: 'Fill: end',
      handler: (chart) => {
        chart.data.datasets.forEach(dataset => {
          dataset.fill = 'end';
        });
        chart.update();
      }
    },
    {
      name: 'Randomize',
      handler(chart) {
        chart.data.datasets.forEach(dataset => {
          dataset.data = generateData();
        });
        chart.update();
      }
    },
    {
      name: 'Smooth',
      handler(chart) {
        smooth = !smooth;
        chart.options.elements.line.tension = smooth ? 0.4 : 0;
        chart.update();
      }
    }
  ];


  //-----------------------------------------------------------------

  // </block:actions>
  
  // <block:config:1>
  // const config = {
  //   type: 'line',
  //   data: data,
  //   options: {
  //     plugins: {
  //       filler: {
  //         propagate: false,
  //       },
  //       title: {
  //         display: true,
  //         text: (ctx) => 'Fill: ' + ctx.chart.data.datasets[0].fill
  //       }
  //     },
  //     interaction: {
  //       intersect: false,
  //     }
  //   },
  // };
  // // </block:config>
  
  // module.exports = {
  //   actions: actions,
  //   config: config,
  // };