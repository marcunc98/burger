var orm = require("../config/orm.js");

var burgerOptions = {
// Find all the pets ordering by the lowest price to the highest price.
all: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insert: function(cols, vals, cb) {
    orm.insertOne("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateAll("burger", objColVals, condition, function(res) {
      cb(res);
    });
  }

};
// Export the database functions for the controller (catsController.js).
module.exports = burgerOptions;

