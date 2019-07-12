require("dotenv").config();


//js


console.log('this is loaded');


const keys = {
  key: process.env.Bittrex_key,
  secret: process.env.Bittrex_SECRET,
  ptp: process.env.DataBaseHomeSecret,
  invalideAttempt:process.env.InvalideBackEndLoginAttempts
};





module.exports = keys