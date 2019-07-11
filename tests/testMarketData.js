const md = require("../scripts/getMarketData");
const sql = require('../controlers/mysql2ORMController')
const moment = require("moment");

let test = async function () {
    // let tickerIDPair = await md.storeCurrencyList();
    // console.log(tickerIDPair);
    // let test = setInterval(async function(){
    //     try{
    //     let res = await md.storeLiveCurrencyData();
    //     }
    //     catch(err){
    //         console.log("Test Function failed ")
    //         throw err;
    //     }
    // }, 30000);

    try {
        let connection = await sql.GetConnection();
        let watchlistArray = await sql.selectSomethingWhere(connection, 'watchlistArray', "users", 'ID', '1');
        console.log(watchlistArray[0].watchlistArray);
        connection.end();
    }
    catch (err) {
        console.log(err + "  code 500 unable to POST markat data for token");

    }


    return 0;

}

test();