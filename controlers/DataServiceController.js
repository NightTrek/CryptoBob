const axios = require('axios');
const rp = require('request-promise');
const keys = require('../config/keys');


module.exports = {
    buildWatchListDataArray: async function(watchlistArray, market){
        //for(key in watchlistArray){
            console.log(watchlistArray[0]);
            try{

                const requestOptions = {
                    method: 'POST',
                    uri: 'http://35.203.148.145:8080/api/marketDataforToken',
                    data: {
                                ticker: "BTC",
                                market: "usd",
                                key:keys.ptp
                            }
                };
    
                const response = await rp(requestOptions)

                // let response = await axios({
                //     method: 'post',
                //     url: 'http://35.203.148.145:8080/api/marketDataforToken',
                //     data: {
                //         ticker: "BTC",
                //         market: "usd",
                //         key:keys.ptp
                //     }
                //   });
            console.log(response);
        }catch(err){
            console.log("err POSTING FROM THE DATABASE SERVICE")
        }
        //}
    }
}