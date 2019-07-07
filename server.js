const express = require('express');


// Sets up the Express App
// =============================================================
var app = express();

// so it will work in heroku
var PORT = process.env.PORT || 3000;

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
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});