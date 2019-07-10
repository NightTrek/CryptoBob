const express = require('express');
const sql = require('../../controlers/mysql2ORMController')
const router = express.Router();

router.get("/", function (req, res) {
    res.send("/")
});

var mysql = require("mysql2");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "crypto_db"
});

router.get("/generalnews", function (req, res) {
    connection.query("SELECT * FROM cryptoNews WHERE category='Exchanges';", function (err, data) {
        if (err) {
            console.log(err)
            return res.status(500).end();
        }

        res.render("general", { news: data });
        // res.send(data)
    });
});

module.exports = router;