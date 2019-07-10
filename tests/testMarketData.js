const md = require("../scripts/getMarketData");

let test = async function() {
    // let tickerIDPair = await md.storeCurrencyList();
    // console.log(tickerIDPair);
    let test = setInterval(async function(){
        let res = await md.storeLiveCurrencyData();
    }, 30000);
    

    return 0;

}

test();