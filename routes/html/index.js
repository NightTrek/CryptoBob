const express = require('express');
const router = express.Router();
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "crypto_db"
});

router.get("/", function (req, res) {
    connection.query("SELECT * FROM cryptoNews", function (err, data) {
        if (err) {
            console.log(err)
            return res.status(500).end();
        }

        res.render("news", { news: data });
    });
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