const md = require("../scripts/getMarketData");

let test = async function() {
    // let tickerIDPair = await md.storeCurrencyList();
    // console.log(tickerIDPair);
    let test = setInterval(async function(){
        try{
        let res = await md.storeLiveCurrencyData();
        }
        catch(err){
            console.log("Test Function failed ")
            throw err;
        }
    }, 30000);
    

    return 0;

}

test();