const express = require('express');
const router = express.Router();
const sql = require('../../controlers/mysql2ORMController')
const md = require("../../scripts/getMarketData");
const key = require('../../config/keys');
const bcrypt = require('bcrypt');
const passwordHash = "$2b$10$0HyaBW.PDM61SJIP6KBNIOFpl4tzt47UJOugxoCStZIKfSrRLMlKi";



//send market data for a specific coin for a specific market most recent transaction in decs order
router.post("/api/marketDataforToken", async function (req, res) {
    console.log("POST REQ");
    // console.log(req.body.data.ticker)    
    try{
       let isValid = await bcrypt.compare(req.body.data.key, passwordHash);
            if(isValid){
            if(md.key[req.body.data.ticker] !== undefined){
                let connection = await sql.GetConnection();
                let tokenData = await sql.SelectAllAndOrderByTmestamp(connection, md.key[req.body.data.ticker], req.body.data.market );
                if(tokenData){
                    connection.end();
                    res.json(tokenData);
                }
                }else{
                    throw "error 404"
                }
            }
            else{
                console.log("ERROR INVALID API KEY")
                key.invalideAttempt++;
                throw "ERROR INVALID API KEY"
            }
    }
    catch(err){
        console.log(err);

    }
    
});


//entery page for the app/ login page
router.get("/api/", function (req, res) {
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