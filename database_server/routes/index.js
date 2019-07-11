const express = require('express');
const router = express.Router();
const sql = require('../../controlers/mysql2ORMController')
const md = require("../scripts/getMarketData");




//send market data for a specific coin for a specific market
router.post("/api/marketDataforToken", async function (req, res) {
    try{
        if(md.key[req.body.ticker] !== undefined){
    let connection = await sql.GetConnection()
    let tokenData = await sql.selectWhere(connection,req.body.market,'foreignId', md.key[req.body.ticker]);
    if(tokenData){
        connection.end();
        res.json(tokenData);
    }
    }else{
        throw "error 404"
    }
    }
    catch(err){
        console.log(err);

    }
    
});


//entery page for the app/ login page
router.get("/api/", function (req, res) {
    res.render("login")
});

//entery page for the app/ login page
router.get("/api/", function (req, res) {
    res.render("login")
});

//entery page for the app/ login page
router.get("/api/", function (req, res) {
    res.render("login")
});



module.exports = router