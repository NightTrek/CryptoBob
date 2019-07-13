const express = require('express');
const md = require("../scripts/getMarketData");

// Sets up the Express App
// =============================================================
var app = express();

// so it will work in heroku
var PORT = process.env.PORT || 3001;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//link too the routing folder with all the routes.
const routes = require('./routes')
app.use(routes);

//server starting section
//-==============================================================
app.listen(PORT, "35.203.148.145", function() {
    console.log("App listening on PORT " + PORT);
});

let test = setInterval(async function(){
    try{
    let res = await md.storeLiveCurrencyData();
    }
    catch(err){
        console.log("Store live currency Function failed ")
        throw err;
    }
}, 30000);




