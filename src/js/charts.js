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

// ELA
const elaxArray = ["2016: Innaugural Reports, Grades 3-8 Only", "2017: By end of first year of EdReports' full K-12 Coverage", "By end of 2024"];
const elayArray = [41, 50, 52];

const elaData = [{
  x:elaxArray,
  y:elayArray,
  type:"bar"
}];

const elaLayout = {
  yaxis:{title:"Percentage", range:[40, 54]}
};

Plotly.newPlot("elaPlot", elaData, elaLayout);

// MATH
const mathxArray = ["2015: Innaugural Reports, Grades K-8 Only", "2016: By end of first year of EdReports' full K-12 Coverage", "By end of 2024"];
const mathyArray = [14, 16, 52];

const mathData = [{
  x:mathxArray,
  y:mathyArray,
  type:"bar"
}];

const mathLayout = {
  yaxis:{title:"Percentage", range:[10, 60]}
};
Plotly.newPlot("mathPlot", mathData, mathLayout);

// SCIENCE
const scixArray = ["2019: Innaugural Reports, Grades 6-8 Only", "2023: By end of first year of EdReports' full K-12 Coverage", "By end of 2024"];
const sciyArray = [17, 27, 33];
const sciData = [{
  x:scixArray,
  y:sciyArray,
  type:"bar"
}];
const sciLayout = {
  yaxis:{title:"Percentage", range:[10, 40]}
};

Plotly.newPlot("sciPlot", sciData, sciLayout);