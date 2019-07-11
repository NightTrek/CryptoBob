// pull data from our database or csv file
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "eth.small.csv",
        dataType: "text",
        success: function(data) { processData(data); }
    });
});

// display on charts
// ids= chartContainer1, chartContainer2, chartContainer3

$('#chartContainer1')
$('#chartContainer2')
$('#chartContainer3')