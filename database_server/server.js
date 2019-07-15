const express = require('express');
const md = require("../scripts/getMarketData");
const winston = require("winston");

const logger = winston.createLogger({
    level:"info",
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });

// Sets up the Express App
// =============================================================
var app = express();

// so it will work in heroku
var PORT = process.env.PORT || 8080;

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
app.listen(PORT, "10.138.0.2", function() {
    console.log("App listening on PORT " + PORT);
});

let test = setInterval(async function(){
    try{
    let res = await md.storeLiveCurrencyData();
    }
    catch(err){
        logger.log({
            level: 'info',
            message: `ERROR store live currency bittrex failed: ${err}`,
    
          }); 
        console.log("Store live currency Function failed ")
        throw err;
    }
}, 30000);




