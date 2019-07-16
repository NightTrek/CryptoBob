const express = require('express');
const sql = require('../../controlers/mysql2ORMController');
const dsc = require('../../controlers/DataServiceController');
const router = express.Router();


// /account/

// display home page navebar page
router.get("/", function (req, res) {
    res.render("DisplayAll")
});



//display the watchlist page broken

router.get("/watchlist/:id", async function(req, res) {
    try{
    let connection = await sql.GetConnection();
    let watchlistArray = await sql.selectSomethingWhere(connection, 'watchlistArray', "users", 'ID', req.params.id);
    let array = [];
    console.log(watchlistArray[0])
    if(typeof watchlistArray[0] === "undefined"){
        array = ["BTC","XRP", "ETH","BCH"];

    }
    else{
        array = watchlistArray[0].watchlistArray
    }
    console.log(array);
    connection.end();
    let resp = {watchlistItem: await dsc.buildWatchListDataArray(array,'usd')};
    // console.log(response);
    res.render("watchlist", resp);
    }
    catch(err){
        console.log(err);
        throw err;
    }
});


//


// {watchlistItem:[
//     {
//       ticker: 'BTC',
//       currentPrice: '10809.686',
//       dayVolume: '1643.12042291',
//       dayChange: 2.093215288584705
//     },
//     {
//       ticker: 'XRP',
//       currentPrice: '0.314',
//       dayVolume: '2231042.90002148',
//       dayChange: 3.7006369426751653
//     },
//     {
//       ticker: 'ETH',
//       currentPrice: '228.365',
//       dayVolume: '7705.18962564',
//       dayChange: 15.603529437523253
//     },
//     {
//       ticker: 'BCH',
//       currentPrice: '316.753',
//       dayVolume: '1852.9489777',
//       dayChange: 5.623940420453799
//     }
//   ]}

//display all current notifications 

router.get("/notifications/:id", async function(req, res) {
    // let connection = await sql.GetConnection();
    // let watchlistArray = await sql.selectSomethingWhere(connection, 'notifications', "users", 'ID', req.body.id);
    // console.log(watchlistArray[0].watchlistArray);
    // connection.end();

    res.render("notifications")
});



//add notification page 
router.get("/addnotification", function (req, res) {
    res.render("notificationEdit") //
});

//notification page for testing
router.get("/notifications", function (req, res) {
    res.render("notifications") //
});

//display all current news 
router.get("/news", async function (req, res) {
    const connection = await sql.GetConnection();

    connection.query("SELECT * FROM cryptoNews LIMIT 12", function (err, news) {
        if (err) {
            throw err
            return
        }
        console.log(news)
        res.render("news", { news: news })
    })
    // const results = await sql.selectAllFromTable(connection, "cryptoNews");
    // console.log(results)
    // res.render("news", { news: results })
});

// limited news router
router.get("/limitednews", async function (req, res) {
    const connection = await sql.GetConnection();

    connection.query("SELECT * FROM cryptoNews LIMIT 3", function (err, news) {
        if (err) {
            throw err
            return
        }
        console.log(news)
        res.render("news", { news: news })
    })
    // const results = await sql.selectAllFromTable(connection, "cryptoNews");
    // console.log(results)
    // res.render("news", { news: results })
});

module.exports = router;