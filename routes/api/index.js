const express = require('express');
const router = express.Router();


router.get("/", function (req, res) {
    // connection.query("SELECT * FROM mining;", function(err, data) {
    //   if (err) {
    //     return res.status(500).end();
    //   }

    //   res.render("index", { quotes: data });
    // });
    res.send("/api/")
});


module.exports = router;