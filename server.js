var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 7000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ exteneded: true }));


// parse appliation/json
app.use(bodyParser.json());

// Set Handlebards.
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

// app.use(routes);

// Start our server so that it can begin listening to client request.
app.listen(PORT, function() {
// Log (server-side) when our serve has started
console.log("Server listening on: http://localhost:" + PORT);
});

