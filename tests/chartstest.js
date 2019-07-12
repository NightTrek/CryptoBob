// dependencies
const express = require('express');
const sql = require('../controlers/mysql2ORMController.js');

let chart = async function() {
    try {
        let connection = await sql.GetConnection();
        let dataForChart = await sql.selectSomethingWhere(connection, 'dataForChart', 'eth', 'id', '1');
        console.log(dataForChart[0].dataForChart);
        data[0].dataPoints.push(dataForChart[0].dataForChart);
        connection.end();
    } catch (err) {
        console.log(err + " code 500 unable to pull market data for token");
    }
}

// display on chart
window.onload = function() {
        var chart = new CanvasJS.Chart("chartContainer1", {
            title: {
                text: "Multi-Series Line Chart"
            },
            data: [{
                    type: "line",
                    dataPoints: [
                        { x: 10, y: 21 },
                        { x: 20, y: 25 },
                        { x: 30, y: 20 },
                        { x: 40, y: 25 },
                        { x: 50, y: 27 },
                        { x: 60, y: 28 },
                        { x: 70, y: 28 },
                        { x: 80, y: 24 },
                        { x: 90, y: 26 }

                    ]
                },
                {
                    type: "line",
                    dataPoints: [
                        { x: 10, y: 31 },
                        { x: 20, y: 35 },
                        { x: 30, y: 30 },
                        { x: 40, y: 35 },
                        { x: 50, y: 35 },
                        { x: 60, y: 38 },
                        { x: 70, y: 38 },
                        { x: 80, y: 34 },
                        { x: 90, y: 44 }

                    ]
                },
                {
                    type: "line",
                    dataPoints: [
                        { x: 10, y: 45 },
                        { x: 20, y: 50 },
                        { x: 30, y: 40 },
                        { x: 40, y: 45 },
                        { x: 50, y: 45 },
                        { x: 60, y: 48 },
                        { x: 70, y: 43 },
                        { x: 80, y: 41 },
                        { x: 90, y: 28 }

                    ]
                },
                {
                    type: "line",
                    dataPoints: [
                        { x: 10, y: 71 },
                        { x: 20, y: 55 },
                        { x: 30, y: 50 },
                        { x: 40, y: 65 },
                        { x: 50, y: 95 },
                        { x: 60, y: 68 },
                        { x: 70, y: 28 },
                        { x: 80, y: 34 },
                        { x: 90, y: 14 }

                    ]
                }
            ]
        });

        chart.render();
    }
    // pull data from our database 
    // $(document).ready(function() {
    //     $.ajax({
    //         type: "GET",
    //         url: "eth.small.csv",
    //         dataType: "text",
    //         success: function(data) { processData(data); }
    //     });
    // });

// ids= chartContainer1, chartContainer2, chartContainer3