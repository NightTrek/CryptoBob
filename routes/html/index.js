const express = require('express');
const sql = require('../../controlers/mysql2ORMController')
const router = express.Router();




// display home page navebar page
router.get("/", function (req, res) {
    res.render("DisplayAll")
});

//display the watchlist page
router.get("/watchlist", function (req, res) {
    res.render("watchlist")
});

//display all current notifications 
router.get("/notifications", function (req, res) {
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