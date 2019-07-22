const express = require('express');
const router = express.Router();
const sql = require('../../controlers/mysql2ORMController')
const md = require("../../scripts/getMarketData");
const key = require('../../config/keys');
const bcrypt = require('bcrypt');
const passwordHash = "$2b$10$0HyaBW.PDM61SJIP6KBNIOFpl4tzt47UJOugxoCStZIKfSrRLMlKi";
const winston = require("winston");


const logger = winston.createLogger({
    level:"info",
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });


//send market data for a specific coin for a specific market most recent transaction in decs order
router.post("/api/marketDataforToken", async function (req, res) {
    console.log("POST REQ");
    // console.log(req.body.data.ticker)   
    logger.log({
        level: 'info',
        message: `REQ MARKET DATA: FROM:${req.body.data.ticker}||${req.body.data.market}`,

      }); 
    try{
       let isValid = await bcrypt.compare(req.body.data.key, passwordHash);
            if(isValid){
            if(md.key[req.body.data.ticker] !== undefined){
                let connection = await sql.GetConnection();
                let tokenData = await sql.SelectAllAndOrderByTmestamp(connection, md.key[req.body.data.ticker], req.body.data.market );
                if(tokenData){
                    connection.end();
                    logger.log({
                      level: 'info',
                      message: `SUCCESS found ${req.body.data.ticker} in DB for market: ${req.body.data.market} `,
              
                    }); 
                    res.json(tokenData);
                }
                }else{
                  logger.log({
                    level: 'info',
                    message: `ERROR 404 data not found in DB: ${req.body.data.ticker} market: ${req.body.data.market} `,
            
                  }); 
                    throw "error 404"
                }
            }
            else{
                console.log("ERROR INVALID API KEY")
                logger.log({
                    level: 'info',
                    message: `INVALID VALIDATION ATTEMPT: ${req.body}`,
            
                  }); 
                throw "ERROR INVALID API KEY"
            }
    }
    catch(err){
      logger.log({
        level: 'info',
        message: `ERROR retriving market data: ${req.body.data.ticker}`,

      }); 
        console.log(err);

    }
    
});


router.post("/api/currentdata", async function (req, res) {
  console.log("POST REQ current data");
  // console.log(req.body.data.ticker)   
  logger.log({
      level: 'info',
      message: `REQ CURRENT MARKET DATA: FROM:${req.body.data.ticker}||${req.body.data.market}`,

    }); 
  try{
     let isValid = await bcrypt.compare(req.body.data.key, passwordHash);
          if(isValid){
          if(md.key[req.body.data.ticker] !== undefined){
              let connection = await sql.GetConnection();
              let tokenData = await sql.SelectAllAndOrderByTmestamp(connection, md.key[req.body.data.ticker], req.body.data.market );
              if(tokenData){
                  connection.end();
                  logger.log({
                    level: 'info',
                    message: `SUCCESS found ${req.body.data.ticker} in DB for market: ${req.body.data.market} `,
            
                  }); 
                  res.json(tokenData);
              }
              }else{
                logger.log({
                  level: 'info',
                  message: `ERROR 404 data not found in DB: ${req.body.data.ticker} market: ${req.body.data.market} `,
          
                }); 
                  throw "error 404"
              }
          }
          else{
              console.log("ERROR INVALID API KEY")
              logger.log({
                  level: 'info',
                  message: `INVALID VALIDATION ATTEMPT: ${req.body}`,
          
                }); 
              throw "ERROR INVALID API KEY"
          }
  }
  catch(err){
    logger.log({
      level: 'info',
      message: `ERROR retriving market data: ${req.body.data.ticker}`,

    }); 
      console.log(err);

  }
  
});

//entery page for the app/ login page
router.get("/api/", function (req, res) {
    logger.log({
        level: 'info',
        message: `GET REQUEST API`,

      });
    console.log("==========================================================================")
    res.json("testing ")
});

// //entery page for the app/ login page
// router.get("/api/", function (req, res) {
//     res.render("login")
// });

// //entery page for the app/ login page
// router.get("/api/", function (req, res) {
//     res.render("login")
// });



module.exports = router