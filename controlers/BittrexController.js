const key = require('../config/keys')
const rp = require('request-promise');


module.exports = {
    getCurrencies: async function() {
        try {
            const requestOptions = {
                method: 'GET',
                uri: 'https://api.bittrex.com/api/v1.1/public/getcurrencies'
            };

            const response = await rp(requestOptions)
                // console.log(response[1]);
            return new Promise((resolve, reject) => {
                if (response) {
                    let object = JSON.parse(response)
                    resolve(object);
                } else {
                    reject({ err: "get Currencies rejected promise" });
                }
            });
        } //
        catch (err) {
            throw err;
        }

    },

    getTickerData: async function(marketTicker = "USD", loopupTicker = "ETH") {
        try {
            let market = marketTicker + '-' + loopupTicker;
            const requestOptions = {
                method: 'GET',
                uri: `https://api.bittrex.com/api/v1.1/public/getticker?market=${market}`
            };

            const response = await rp(requestOptions)
                // console.log(response[1]);
            return new Promise((resolve, reject) => {
                if (response) {
                    let resObject = JSON.parse(response)
                    if (resObject.success) {
                        resolve({
                            market: market,
                            result: resObject.result
                        })
                    } else {
                        reject({ err: "failed Market probebly invalid try a different pair" })
                    }

                } else {
                    reject({ err: "get Currencies rejected promise" });
                }
            });
        } //
        catch (err) {
            throw err;
        }

    },

    getAllMarketSummeries: async function() {
        try {
            const requestOptions = {
                method: 'GET',
                uri: `https://api.bittrex.com/api/v1.1/public/getmarketsummaries`
            };

            const response = await rp(requestOptions)
                // console.log(response[1]);
            return new Promise((resolve, reject) => {
                if (response) {
                    let resObject = JSON.parse(response)
                    if (resObject.success) {
                        resolve(resObject.result)
                    } else {
                        reject({ err: "returned false on success message" })
                    }

                } else {
                    reject({ err: "get all markets rejected promise" });
                }
            });
        } //
        catch (err) {
            throw err;
        }

    },

    getMarketSummery: async function(marketTicker = "USD", loopupTicker = "ETH") {
        try {
            let market = marketTicker + '-' + loopupTicker;
            const requestOptions = {
                method: 'GET',
                uri: `https://api.bittrex.com/api/v1.1/public/getmarketsummary?market=${market}`
            };

            const response = await rp(requestOptions)
                // console.log(response[1]);
            return new Promise((resolve, reject) => {
                if (response) {
                    let resObject = JSON.parse(response)
                    if (resObject.success) {
                        resolve({
                            market: market,
                            result: resObject.result
                        })
                    } else {
                        reject({ err: "failed Market probebly invalid try a different pair" })
                    }

                } else {
                    reject({ err: "get specific market rejected promise" });
                }
            });
        } //
        catch (err) {
            throw err;
        }

    },

    getOrderBook: async function(marketTicker = "USD", loopupTicker = "ETH") {
        try {
            let market = marketTicker + '-' + loopupTicker;
            const requestOptions = {
                method: 'GET',
                uri: `https://api.bittrex.com/api/v1.1/public/getorderbook?market=${market}&type=both`
            };

            const response = await rp(requestOptions)
                // console.log(response[1]);
            return new Promise((resolve, reject) => {
                if (response) {
                    let resObject = JSON.parse(response)
                    if (resObject.success) {
                        resolve({
                            market: market,
                            result: resObject.result
                        })
                    } else {
                        reject({ err: "failed Market probebly invalid try a different pair" })
                    }

                } else {
                    reject({ err: "get orderbook rejected promise" });
                }
            });
        } //
        catch (err) {
            throw err;
        }

    },
    makeCurrencyArray: async function() {
        try {
            let currencies = await this.getCurrencies();
            // console.log(currencies)
            return new Promise((resolve, reject) => {
                if (currencies) {
                    let output = [];
                    // console.log(currencies.result)
                    currencies.result.forEach(ticker => {
                        output.push({
                            currency: ticker.Currency,
                            currencyLong: ticker.CurrencyLong,
                            TxFee: ticker.TxFee
                        })

                    });

                    resolve(output);
                } else {
                    reject({ err: "error in this.makeCurrencyArray" })
                }
            })
        } catch (err) {
            console.log(err)
        }

    }

}