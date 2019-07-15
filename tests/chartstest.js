// dependencies
const CanvasJS = require('canvasjs');
const express = require('express');
// const sql = require('../controlers/mysql2ORMController.js');
const convertMarketData = require('../scripts/convertMarketData.js');
const chartController = require('./../controlers/chartController.js');

// pull data from our database

// $(document).ready(function() {
//     chartController.getChartData('ETH', 'usd');
//     chartController.getChartData('BTC', 'usd');
//     chartController.getChartData('XRP', 'usd');
//     lineChart('ETH');
//     lineChart('BTC');
//     lineChart('XRP');
// });

window.onload = function() {
    convertMarketData.convertRecentMarketDataIntoGraph(chartController.getChartData('ETH', 'usd'));
};
// push data for chart for specified ticker inputted 
// chart to display in chart container1
const chart = new CanvasJS.Chart("chartContainer1", {
    title: {
        text: `ETH Line Chart`
    },
    // the chart parameters 
    data: [{
            type: "line",
            // output is defined in the convertrecentmarketdataintograph function
            dataPoints: output,
        }
        // other lines if necessary for future comparisons
        // {
        //     type: "line",
        //     dataPoints: [
        //         { x: 10, y: 31 },
        //         { x: 20, y: 35 },
        //         { x: 30, y: 30 },
        //         { x: 40, y: 35 },
        //         { x: 50, y: 35 },
        //         { x: 60, y: 38 },
        //         { x: 70, y: 38 },
        //         { x: 80, y: 34 },
        //         { x: 90, y: 44 }

        //     ]
        // },
        // {
        //     type: "line",
        //     dataPoints: [
        //         { x: 10, y: 45 },
        //         { x: 20, y: 50 },
        //         { x: 30, y: 40 },
        //         { x: 40, y: 45 },
        //         { x: 50, y: 45 },
        //         { x: 60, y: 48 },
        //         { x: 70, y: 43 },
        //         { x: 80, y: 41 },
        //         { x: 90, y: 28 }

        //     ]
        // },
    ]
});
// renders chart
chart.render();