const express = require('express');
const router = express.Router();
const apiRoutes =require('./api');
const controller = require('../controlers/UsersController')


router.use('/api', apiRoutes);

//homepage get function
router.get("/", async function(req, res) {
    let sqlData = await controller.findAll(req,res);
    console.log(sqlData);
    res.render("DisplayAll", sqlData);
    // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.
  
  });


module.exports = router