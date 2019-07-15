const express = require('express');
const sql = require('../../controlers/mysql2ORMController');
const dsc = require('../../controlers/DataServiceController');
const router = express.Router();


// /account/

// display home page navebar page
router.get("/", function(req, res) {
    res.render("DisplayAll")
});



//display the watchlist page broken
router.get("/watchlist/:id", async function(req, res) {
    try{
    let connection = await sql.GetConnection();
    let watchlistArray = await sql.selectSomethingWhere(connection, 'watchlistArray', "users", 'ID', req.params.id);
    let array = watchlistArray[0].watchlistArray;
    if(watchlistArray[0].watchlistArray.length===0){
        array = ["BTC","XRP", "ETH","BCH"];
    }
    console.log(array);
    connection.end();
    let res = await dsc.buildWatchListDataArray(array,'usd');
    console.log(res);
    res.send("watchlist", res);
    }
    catch(err){
        console.log(err);
        throw err;
    }
});

//display all current notifications 
router.get("/notifications/:id", async function(req, res) {
    let connection = await sql.GetConnection();
    let watchlistArray = await sql.selectSomethingWhere(connection, 'watchlistArray', "users", 'ID', req.body.id);
    console.log(watchlistArray[0].watchlistArray);
    connection.end();

    res.render("notifications")
});



//add notification page 
router.get("/addnotification", function(req, res) {
    res.render("notificationEdit") //
});

//notification page for testing
router.get("/notifications", function(req, res) {
    res.render("notifications") //
});

//display all current news 
router.get("/news", function(req, res) {
    res.render("news")
});

module.exports = router;