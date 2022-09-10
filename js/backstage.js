// const ctx = document.getElementById('myChart').getContext('2d');
// const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

//------

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
  // </block:actions>
  
  // <block:config:1>
  const config = {
    type: 'line',
    data: data,
    options: {
      plugins: {
        filler: {
          propagate: false,
        },
        title: {
          display: true,
          text: (ctx) => 'Fill: ' + ctx.chart.data.datasets[0].fill
        }
      },
      interaction: {
        intersect: false,
      }
    },
  };
  // </block:config>
  
  module.exports = {
    actions: actions,
    config: config,
  };