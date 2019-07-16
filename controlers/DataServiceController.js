const axios = require('axios');
const rp = require('request-promise');
const keys = require('../config/keys');
const sql = require('../controlers/mysql2ORMController');


module.exports = {
    buildWatchListDataArray: async function (watchlistArray, market) {
        let outputArray = [];
        return new Promise(async (resolve, reject) => {
            for (key in watchlistArray) {
                // console.log(watchlistArray[key]);
                  try {
                     let response = await this.getMarketData(watchlistArray[key], market)
                      console.log(response[0].last)
                      // if(response.length>0){
                      // //outputArray.push(
                        let watchlistItem = {
                          ticker:watchlistArray[key],
                          currentPrice: parseFloat(response[0].last),
                          dayVolume: parseFloat(response[0].Volume),
                          dayChange: parseFloat((response[response.length-1].last-response[0].last)/response[0].last*100)
                      }
                      console.log(watchlistItem);
                      outputArray.push(watchlistItem);
                  //}
                  } catch (err) {
                    reject({errMsg:"output array empty for watchlist array builder", err});
                      console.log(err)
                      console.log("err POSTING FROM THE DATABASE SERVICE")
                  }
      
             }
             if(outputArray.length>0){
                 resolve(outputArray)
             }else{
                 reject({err:"output array empty for watchlist array builder"});
             }
        })
        
        
    },
    getMarketData: function(ticker, market){
        return new Promise( function(resolve, reject){
            axios.post('http://35.203.148.145:80/api/marketDataforToken', {
                data: {
                    ticker: ticker,
                    market: market,
                    key: keys.ptp
                }
            }).then( res => {
                if(res){
                    //console.log(res.data)
                    resolve(res.data);
                }else{
                    reject({err:"unable to get market data from service"});
                }
            }).catch((err)=>{
                console.log(err)
                console.log("error getting market data")
                reject({err:"unable to get market data from service"});
            });
        })
       
                
    }
}