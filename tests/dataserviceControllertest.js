const dsc = require('../controlers/DataServiceController');


let main = async function(){
  
    try{
        //   let res = await dsc.getMarketData("BTC","usd");
    let res = await dsc.buildWatchListDataArray(["BTC","XRP", "ETH","BCH"],'usd');
    console.log(res);
    }catch(err){
        throw err;
    }
}
main();
