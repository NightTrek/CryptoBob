const express = require('express');
const sql = require('../../controlers/mysql2ORMController')
const moment = require('moment');
const rp = require('request-promise');
const md = require("../scripts/getMarketData");
const router = express.Router();


//signup 
router.post("/signup", async function (req, res) {
    let connection = await sql.GetConnection();
    let watchlistArray = await sql.selectSomethingWhere(connection, 'watchlistArray', "users", 'ID', req.body.id);
    console.log(watchlistArray[0].watchlistArray);
    connection.end();
    //lookup in mysql for the user req.body.id and return there watchlist

    res.send("watchlist", { news: data });
});



//display the watchlist page broken
router.get("/watchlist:id", async function (req, res) {
    try {
        let watchlistItem = [];
        let connection = await sql.GetConnection();
        let watchlistArray = await sql.selectSomethingWhere(connection, 'watchlistArray', "users", 'ID', req.body.id);
        console.log(watchlistArray[0].watchlistArray);
        //request to databser backend to get each coins data 
        for (let i = 0; i < watchlistArray[0].watchlistArray.length; i++) {
            const requestOptions = {
                method: 'POST',
                uri: 'http://154a194a.ngrok.io/api/marketDataforToken',
                body: {
                    "data": {
                        "ticker": watchlistArray[0].watchlistArray[i],
                        "market": "usd",
                        "key": "bK9uSGlTGfqFHV0O4unF20sLYD82J0iEHyxPW9qL2bIMNpn2OonKfbUe8Q5JHhHq"
                    }
                }
            };
            const response = await rp(requestOptions)
            watchlistItem.push({
                currency: watchlistArray[0].watchlistArray[i],
                currencyLong: watchlistArray[0].watchlistArray[i],
                price: response[0].last,
                Volume: response[0].Volume,
                dayAvg: null
            })

        }


let percentchange response[0].last response[response.length-1].last

        //loop through watchlist array and for each
        //get currency datait will be 1000 points decs order 
        //loop backwards through the currency data 
        //moment().unix("unixtimestamp")
        //moment.now compared to unix time stamp from 12 hours ago
        //+- 30 seconds for data point


        connection.end();
        //lookup in mysql for the user req.body.id and return there watchlist

        res.send("watchlist", watchlistItem);
    }
    catch (err) {
        console.log("watchlist get error");
        throw err;
    }
});

//display all current notifications 
router.get("/notifications:id", async function (req, res) {
    let connection = await sql.GetConnection();
    let watchlistArray = await sql.selectSomethingWhere(connection, 'watchlistArray', "users", 'ID', req.body.id);
    console.log(watchlistArray[0].watchlistArray);
    connection.end();

    res.render("notifications")
});



//add notification page 
router.get("/addnotification", function (req, res) {
    res.render("notificationEdit")//
});

//display all current news 
router.get("/news", async function (req, res) {
    try {
        let connection = await sql.GetConnection();
        let data = await sql.selectWhere(connection, 'cryptoNews', 'category', 'Exchanges')

        res.send("news", { news: data });
    }
    catch (err) {
        console.log(err)
        return res.status(500).end();
    }
});

module.exports = router;