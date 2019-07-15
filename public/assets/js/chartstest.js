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
let load = {};

window.onload = function() {
    convertMarketData.convertRecentMarketDataIntoGraph(chartController.getChartData('ETH', 'usd'));
};
// push data for chart for specified ticker inputted 
// chart to display in chart container1
load = {
    // the chart parameters 
    data: output,
    // output is defined in the convertrecentmarketdataintograph function
};
// renders chart
// chart.render();