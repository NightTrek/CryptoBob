// dependencies
const BT = require("../controlers/BittrexController");
const sql = require('../controlers/mysql2ORMController');
const md = require('./getMarketData');

module.exports = {
    convertRecentMarketDataIntoGraph: async function(marketDataArray) {
        let output = [];
        for (let i = marketDataArray.length - 1; i >= 0; i--) {
            output.push({ x: marketDataArray[i].unixTimeStamp, y: marketDataArray[i].last })
        }
    }
}