require("dotenv").config();


//js

console.log(process.env.SPOTIFY_ID) 

console.log(process.env.SPOTIFY_SECRET)

console.log('this is loaded');


var bittrexKeys = {
  key: process.env.Bittrex_key,
  secret: process.env.Bittrex_SECRET
};




module.exports = bittrexKeys