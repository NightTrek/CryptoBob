const express = require('express');
const sql = require('../../controlers/mysql2ORMController')
const router = express.Router();




// display home page navebar page
router.get("/", function (req, res) {
    res.render("DisplayAll")
});

//display the watchlist page broken
router.get("/watchlist:id", async function (req, res) {
    let connection = await sql.GetConnection();
    let watchlistArray = await sql.selectSomethingWhere(connection, 'watchlistArray', "users", 'ID', req.body.id);
    console.log(watchlistArray[0].watchlistArray);
    connection.end();
    //lookup in mysql for the user req.body.id and return there watchlist

    res.send("watchlist", { news: data });
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
router.get("/news", function (req, res) {
    res.render("cryptoNews")
});

module.exports = router;