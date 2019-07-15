const express = require('express');
const router = express.Router();
const sql = require('../../controlers/mysql2ORMController')
const bcrypt = require('bcrypt');
const loginkeys = require('../../config/loginKeys');


// /api/
//req.param.password, passwordHash

router.post("/login", async function(req, res) {
    console.log("sign in")
    console.log(req.body);
    try {
        let connection = await sql.GetConnection(); // SELECT password FROM users WHERE userName = "dsteigman";
        let passwordHash = await connection.query(`SELECT password FROM users WHERE userName = '${req.body.userName}';`)
        let plainTextPassword = `${req.body.pass}`;
        let validateLogin = await bcrypt.compare(plainTextPassword, passwordHash[0][0].password);
        connection.end();
        if (validateLogin) {
            console.log("validLogin")
            let response = { code: 1, res: "valid login attempt" };
            res.json(response)
        } else {
            console.log('invalide Login')
            let response = { code: 0, res: "invalid login attempt" };
            res.json(response)
        }
    } catch (err) {
        throw err
            //
    }
});

router.post("/signup", async function(req, res) {
    console.log("signUp");
    //console.log(req.body); 
    try {
        let con = await sql.GetConnection();
        //check if user is in the db
        let user = await sql.selectWhere(con, "users", "userName", req.body.userName);
        if (user.length === 0) {
            //hash their password
            let hash = await bcrypt.hash(req.body.passWord, 10);
            console.log(hash);
            let signUpData = {
                userName: req.body.userName,
                password: hash,
                email: req.body.eMail,
                phone: req.body.phoneNumber,
                default_currency: req.body.defaultCurrency,
                watchlistArray: null,
                notificationArray: null,
                exchangeSecret: null,

            };
            //load new user into DB with hashed password
            let addToDB = await sql.insertNewUsers(con, "users", signUpData)
            console.log(addToDB);
            con.end();
            res.render("DisplayAll");
        } else {
            console.log("user already exists")
            con.end();
            let response = { code: "0", res: "UserName Already Taken Login or request a new password" };
            res.json(response);
        }
    } catch (err) {
        throw err;
    }

});


router.get("/", function(req, res) {
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

/*
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
*/
const axios = require('axios');
router.get('/convertmarketdata', async function(req, res) {
    let result = ""
    try {
        result = await axios({
            method: 'post',
            url: 'http://35.203.148.145/api/marketDataforToken',
            data: {
                data: {
                    "ticker": 'ETH',
                    "market": 'usd',
                    "key": "bK9uSGlTGfqFHV0O4unF20sLYD82J0iEHyxPW9qL2bIMNpn2OonKfbUe8Q5JHhHq"
                }
            },
            timeout: 3000,
            responseType: 'json',
        })
        res.json({
            message: "OK",
            result: result.data,
        })
    } catch (err) {
        res.json({ error: err })
        return console.log(err)
    }

})

router.get('/convertmarketdatabtc', async function(req, res) {
    let result = ""
    try {
        result = await axios({
            method: 'post',
            url: 'http://35.203.148.145/api/marketDataforToken',
            data: {
                data: {
                    "ticker": 'BTC',
                    "market": 'usd',
                    "key": "bK9uSGlTGfqFHV0O4unF20sLYD82J0iEHyxPW9qL2bIMNpn2OonKfbUe8Q5JHhHq"
                }
            },
            timeout: 3000,
            responseType: 'json',
        })
        res.json({
            message: "OK",
            result: result.data,
        })
    } catch (err) {
        res.json({ error: err })
        return console.log(err)
    }

})


router.get('/convertmarketdataxrp', async function(req, res) {
    let result = ""
    try {
        result = await axios({
            method: 'post',
            url: 'http://35.203.148.145/api/marketDataforToken',
            data: {
                data: {
                    "ticker": 'XRP',
                    "market": 'usd',
                    "key": "bK9uSGlTGfqFHV0O4unF20sLYD82J0iEHyxPW9qL2bIMNpn2OonKfbUe8Q5JHhHq"
                }
            },
            timeout: 3000,
            responseType: 'json',
        })
        res.json({
            message: "OK",
            result: result.data,
        })
    } catch (err) {
        res.json({ error: err })
        return console.log(err)
    }

})
module.exports = router;