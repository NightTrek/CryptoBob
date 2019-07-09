// dependencies
const BT = require("../controlers/BittrexController");
const sql = require('../controlers/mysql2ORMController');

// methods
module.exports = {
    storeCurrencyList: async function() {
        try {
            let connection = await sql.GetConnection();
            let currencyData = await BT.makeCurrencyArray();
            for (let i = 0; i < currencyData.length; i++) {
                datapoint = {
                    fieldA: "currency",
                    fieldB: "currencyLong",
                    fieldC: "txfee",
                    valueA: currencyData[i].currency,
                    ValueB: currencyData[i].currencyLong,
                    ValueC: currencyData[i].TxFee
                }
                let response = await sql.insertOne(connection, "currencies", datapoint)
                console.log(response);
            }
        } catch (err) {
            throw err;
        }


    },
    storeLiveCurrencyData: async function() {
        let connection = await sql.GetConnection();
        let marketSummeries = await BT.getAllMarketSummeries();

    }
}