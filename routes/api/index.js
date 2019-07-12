const express = require('express');
const router = express.Router();
const sql = require('../../controlers/mysql2ORMController')


// /api/

router.get("/login", function(req, res) {
    // connection.query("SELECT * FROM mining;", function(err, data) {
    //   if (err) { 
    //     return res.status(500).end();
    //   }

    //   res.render("index", { quotes: data });
    // });
    res.send("/api/")
});

router.post("/login", function(req, res) {
    let loginData = req.body;

    res.send("/api/")
});

router.post("/signup", function(req, res) {
    let loginData = req.body;

    res.send("/api/")
});


//api which gets news from sql 
router.get("/generalnews", async function(req, res) {
    try {
        let connection = await sql.GetConnection();

        let data = await sql.selectWhere(connection, 'cryptoNews', 'category', 'Exchanges')

        res.send("general", { news: data });
    } catch (err) {
        console.log(err)
        return res.status(500).end();
    }

});

module.exports = router;