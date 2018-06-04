var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

var orm = {
    selectAll: function(tableData) {
      var queryString = "SELECT * FROM " + tableData;
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(whatToInsert) {
      var queryString = "INSERT INTO burgers_db (burger) VALUES (?)" + whatToInsert;
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(whatToUpdate, [burger, id]) {
      var queryString = "UPDATE burgers_db SET burger = ? WHERE id = ?";
  connection.query(queryString,[burger,id],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;