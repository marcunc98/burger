var mysql = require("mysql");

var conncection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "H@mletgq98",
    database: "burgers_db"
});

conncection.connect(function(err){
if (err) {
    console.error("error connecting: " + errstack);
    return;
}
console.log("connected as id " + connection.threadId);
});

module.exports = connection;