const rp = require('request-promise');
const convertMarketData = require('../scripts/convertMarketData.js');

module.exports = {
    getChartData: async function(ticker, market) {
        try {
            const requestOptions = {
                method: 'POST',
                url: 'http://ccce8a57.ngrok.io/api/marketDataforToken',
                data: {
                    "ticker": ticker,
                    "market": market,
                    "key": "bK9uSGlTGfqFHV0O4unF20sLYD82J0iEHyxPW9qL2bIMNpn2OonKfbUe8Q5JHhHq"
                },
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            };

            const response = await rp(requestOptions)
                // console.log(response[1]);
            return new Promise((resolve, reject) => {
                if (response) {
                    let object = JSON.parse(response)
                    resolve(object);
                } else {
                    reject({ err: "get chart data rejected promise" });
                }
            });
        } //
        catch (err) {
            throw err;
        }

    }
};