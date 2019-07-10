const express = require('express');
const router = express.Router();

const apiRoutes = require('./api');
const htmlRoutes = require("./html");


// router.use('/', htmlRoutes);
router.use('/api', apiRoutes);
router.use('/account', htmlRoutes);

//entery page for the app/ login page
router.get("/", function (req, res) {
    res.render("login")
});

module.exports = router