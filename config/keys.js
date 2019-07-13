const dotenv = require("dotenv")

const result = dotenv.config()
 
if (result.error) {
  throw result.error
}
//js


console.log('this is loaded');
console.log(process.env.BITTREX_KEY)
// console.log(process.env.DataBaseHomeSecret)


const keys = {
  key: process.env.BITTREX_KEY,
  secret: process.env.BITTREX_SECRET,
  ptp: process.env.DBHOMESECRET,
  mysqlpass:process.env.GCC_MYSQLPASS,
};


console.log(keys);


module.exports = keys