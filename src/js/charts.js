// const xValues = [" ","A","B","C"," "];
// const yValues = [null,41,50,52,null];
// var dotColors = [null,"red","green","blue",null];
// var legend = [null,"2016","By end of first year of EdReports' full K-12 Coverage","By end of 2024",null];

// new Chart("myChart", {
//   type: "line",
//   data: {
//     labels: xValues,
//     datasets: [{
//       fill: false,
//       lineTension: 0,
//       backgroundColor:"rgba(10, 62, 89, 1)",
//       borderColor:"rgba(10, 62, 89, 1)",
//       data: yValues,
//       pointRadius: 10
//     }]
//   },
//   options: {
//     legend: {
//       display: true,
//       gnerateLabels: true,
//       labels: { 
//         text: legend,
//       },
//     },
//     generateLabels: true,
//     scales: {
//       yAxes: [{ticks: {min: 35, max:60}}],
//     }
//   }
// });


const xArray = ["2016: Innaugural Year, Grades K-8 Only", "2017: By end of first year of EdReports' full K-12 Coverage", "By end of 2024"];
const yArray = [41, 50, 52];

const data = [{
  x:xArray,
  y:yArray,
  type:"bar"
}];

const layout = {
  yaxis:{title:"Percentage", range:[40, 54]}
};

Plotly.newPlot("myPlot", data, layout);