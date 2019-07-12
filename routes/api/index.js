const express = require('express');
const router = express.Router();
const sql = require('../../controlers/mysql2ORMController')


//password/userame route
router.post("/api/marketDataforToken", async function (req, res) {
    console.log("POST REQ");
    // console.log(req.body.data.ticker)
    try{
        if(md.key[req.body.data.password] !== undefined){
    let connection = await sql.GetConnection()
    let tokenData = await sql.SelectAllAndOrderByTmestamp(connection, md.key[req.body.data.password], req.body.data.market );
    if(tokenData){
        connection.end();
        res.json(tokenData);
    }
    }else{
        throw "error 404"
    }
    }
    catch(err){
        console.log(err);

    }
    
});





router.get("/", function (req, res) {
    // connection.query("SELECT * FROM mining;", function(err, data) {
    //   if (err) { 
    //     return res.status(500).end();
    //   }

    //   res.render("index", { quotes: data });
    // });
    res.send("/api/")
});
//api which gets news from sql 
router.get("/generalnews", async function (req, res) {
    try{
    let connection = await sql.GetConnection();

    let data = await sql.selectWhere(connection,'cryptoNews', 'category', 'Exchanges')

    res.send("general", { news: data });
    }
    catch(err){
        console.log(err)
            return res.status(500).end();
    }
    
});

module.exports = router;