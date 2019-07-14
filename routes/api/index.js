const express = require('express');
const router = express.Router();
const sql = require('../../controlers/mysql2ORMController')
const loginkeys = require('../../config/loginKeys');



// /api/


router.post("/login", async function(req, res) {
    try {
        let connection = await sql.GetConnection();
        let passwordHash = await sql.selectSomethingWhere(connection, password, users, userName, req.body.data.userName);
        let validateLogin = await bcrypt.compare(req.body.data.password, passwordHash);
        if (validateLogin) {
            res.send(true)
        } else {
            res.send(false)
        }
    } catch (err) {
        throw err

    }
});

router.post("/signup", async function(req, res) {
    try {
        let hash = await bcrypt.hash(req.body.data.password, 10);
        let signUpData = {
            userName: req.body.data.userName,
            password: hash,
            email: req.body.data.eMail,
            phone: req.body.data.phone,
            default_currency: req.body.data.default_currency,
            watchlistArray: null,
            notificationArray: null,
            exchangeSecret: null,

        };
        let con = await sql.GetConnection();
        let addToDB = await sql.insertNewUsers(con, "users", signUpData)

        let loginHash = await bcrypt.hash(signUpData.password + signUpData.userName, 10);
        loginkeys.key.push(loginHash);
        res.send(loginHash)
    } catch (err) {

    }

});


    router.get("/", function(req, res) {

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
});


module.exports = router;