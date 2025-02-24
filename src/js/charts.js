// ELA
var elaX = [0,1,2];
var elaY = [41, 50, 52];
var textList = ["inaugural Reports,<br>Grades 3\u20138 Only", "By end of first year of<br>EdReports' full K\u201312 Coverage", "By end of 2024"];

var elaData = [{
  x:elaX,
  y:elaY,
  type:"bar",
  text: ['2016:<br>41%','2017:<br>50%','2024:<br>52%'],
  textposition: "auto",
  marker: {
    color: "rgba(10,62,89,1)"
  }
}];

var elaLayout = {
  yaxis:{
    title:"ELA Percentage"
  },
  xaxis: {
    tickangle: 0,
    tickmode: "array",
    tickvals: [0,1,2],
    ticktext: textList
  }
};
Plotly.newPlot("elaPlot", elaData, elaLayout, {displayModeBar: false, responsive: true});

// MATH
var mathX = [0,1,2];
var mathY = [14, 16, 52];
var mathTextList = ["inaugural Reports,<br>Grades K\U+20148 Only", "By end of first year of<br>EdReports' full K-12 Coverage", "By end of year"];

var mathData = [{
  x:mathX,
  y:mathY,
  type:"bar",
  text: ['2015:<br>41%','2016:<br>16%','2024:<br>52%'],
  textposition: "auto",
  marker: {
    color: "rgba(10,62,89,1)"
  }
}];

var mathLayout = {
  yaxis:{
    title:"Math Percentage"
  },
  xaxis: {
    tickangle: 0,
    tickmode: "array",
    tickvals: [0,1,2],
    ticktext: textList
  }
};
Plotly.newPlot("mathPlot", mathData, mathLayout, {displayModeBar: false, responsive: true});

// sci
var sciX = [0,1,2];
var sciY = [17, 27, 33];
var sciTextList = ["inaugural Reports,<br>Grades 6\U+20148 Only", "By end of first year of<br>EdReports' full K-12 Coverage", "By end of year"];

var sciData = [{
  x:sciX,
  y:sciY,
  type:"bar",
  text: ['2019:<br>17%','2023:<br>27%','2024:<br>33%'],
  textposition: "auto",
  marker: {
    color: "rgba(10,62,89,1)"
  }
}];

var sciLayout = {
  yaxis:{
    title:"Science Percentage"
  },
  xaxis: {
    tickangle: 0,
    tickmode: "array",
    tickvals: [0,1,2],
    ticktext: textList
  }
};
Plotly.newPlot("sciPlot", sciData, sciLayout, {displayModeBar: false, responsive: true});


// twentyNineteenPgView
var twentyNineteenPgViewX = [0,1,2];
var twentyNineteenPgViewY = ['500,000', '2,000,000', '5,000,000'];
var twentyNineteenPgViewTextList = ["2015", "2017", "2019"];

var twentyNineteenPgViewData = [{
  x:twentyNineteenPgViewX,
  y:twentyNineteenPgViewY,
  type:"line",
  text: ['2015','2017','2019'],
  textposition: "auto",
  responsive: true,
  marker: {
    color: "rgba(10,62,89,1)"
  }
}];

var twentyNineteenPgViewLayout = {
  yaxis:{
    title:"Views"
  },
  xaxis: {
    tickangle: 0,
    tickmode: "array",
    tickvals: [0,1,2],
    ticktext: twentyNineteenPgViewTextList
  }
};
Plotly.newPlot("twentyNineteenPgViewPlot", twentyNineteenPgViewData, 
  twentyNineteenPgViewLayout, 
  {displayModeBar: false, responsive: true});

  // twentyOnePgView
var twentyOnePgViewX = [0,1,2,3];
var twentyOnePgViewY = ['500,000', '2,000,000', '5,000,000', '10,000,000'];
var twentyOnePgViewTextList = ["2015", "2017", "2019","2021"];

var twentyOnePgViewData = [{
  x:twentyOnePgViewX,
  y:twentyOnePgViewY,
  type:"line",
  responsive: true,
  marker: {
    color: "rgba(10,62,89,1",
  },
}];

var twentyOnePgViewLayout = {
  yaxis:{
    title:"Views"
  },
  xaxis: {
    tickangle: 0,
    tickmode: "array",
    tickvals: [0,1,2,3],
    ticktext: twentyOnePgViewTextList
  }
};
Plotly.newPlot("twentyOnePgViewPlot", twentyOnePgViewData, 
  twentyOnePgViewLayout, 
  {displayModeBar: false, responsive: true});

  
  // twentyThreePgView
  var twentyThreePgViewX = [0,1,2,3,4];
  var twentyThreePgViewY = ['500,000', '2,000,000', '5,000,000', '10,000,000','15,000,000'];
  var twentyThreePgViewTextList = ["2015", "2017", "2019","2021","2023"];
  
  var twentyThreePgViewData = [{
    x:twentyThreePgViewX,
    y:twentyThreePgViewY,
    type:"line",
    responsive: true,
    marker: {
      color: "rgba(10,62,89,1",
    },
  }];
  
  var twentyThreePgViewLayout = {
    yaxis:{
      title:"Views"
    },
    xaxis: {
      tickangle: 0,
      tickmode: "array",
      tickvals: [0,1,2,3,4],
      ticktext: twentyThreePgViewTextList
    }
  };
  Plotly.newPlot("twentyThreePgViewPlot", twentyThreePgViewData, 
    twentyThreePgViewLayout, 
    {displayModeBar: false, responsive: true});