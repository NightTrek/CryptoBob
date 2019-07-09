const md = require("../scripts/getMarketData");

let test = async function() {
    // let tickerIDPair = await md.storeCurrencyList();
    // console.log(tickerIDPair);
    let res = await md.storeLiveCurrencyData();

    return 0;

}

test();