// ELA
var trace1 = {
    x: [
        "Innaugural Reports",
        "By End of First Year of EdReport's Full K-12 Coverage",
        "By end of 2024"
    ],
    y: [
        41,
        50,
        52
    ],
    text: [
        "Innaugural Reports",
        "By End of First Year of EdReport's Full K-12 Coverage",
        "By end of 2024"
    ],
    type: "bar",
    font: {
        family: "'Proxima Nova', gotham, 'open sans', sans-serif"
    },
    tickangle: 0,
    marker: {
        color: "rgba(10,62,89, 1)"
    }
};
var elaData = [
    trace1
];
var elaLayout = {
    yaxis: {
        title: "Percentage",
        range: [
            35,
            55
        ]
    },
    xaxis: {
        tickangle: 0,
        type: "cateory",
        tickmode: "array",
        tickvals: [
            0,
            1,
            2
        ],
        ticktext: [
            "2016",
            "2017",
            "By End of 2024"
        ],
        text: [
            "Innaugural Reports",
            "By End of First Year of EdReport's Full K-12 Coverage",
            "By end of 2024"
        ]
    }
};
Plotly.newPlot("elaPlot", elaData, elaLayout);
// MATH
const mathxArray = [
    "2015: Innaugural Reports, Grades K-8 Only",
    "2016: By end of first year of EdReports' full K-12 Coverage",
    "By end of 2024"
];
const mathyArray = [
    14,
    16,
    52
];
const mathData = [
    {
        x: mathxArray,
        y: mathyArray,
        type: "bar"
    }
];
const mathLayout = {
    yaxis: {
        title: "Percentage",
        range: [
            10,
            60
        ]
    }
};
Plotly.newPlot("mathPlot", mathData, mathLayout);
// SCIENCE
const scixArray = [
    "2019: Innaugural Reports, Grades 6-8 Only",
    "2023: By end of first year of EdReports' full K-12 Coverage",
    "By end of 2024"
];
const sciyArray = [
    17,
    27,
    33
];
const sciData = [
    {
        x: scixArray,
        y: sciyArray,
        type: "bar"
    }
];
const sciLayout = {
    yaxis: {
        title: "Percentage",
        range: [
            10,
            40
        ]
    }
};
Plotly.newPlot("sciPlot", sciData, sciLayout);

//# sourceMappingURL=index.41b6f44e.js.map
