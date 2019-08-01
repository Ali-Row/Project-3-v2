// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const model = {
  // get all
  all: function(tableName, cb) {
    orm.all(tableName, function(res) {
      cb(res);
    });
  },
  // get WHERE a condition is met
  getWhere: function(tableName, condition, cb) {
    orm.getWhere(tableName, condition, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are key and value arrays.
  create: function(tableName, cols, vals, cb) {
    orm.create(tableName, cols, vals, function(res) {
      cb(res);
    });
  },
  // This is a batch insert
  createBatch: function(tableName, cols, vals, cb) {
    orm.createBatch(tableName, cols, vals, function(res) {
      cb(res);
    });
  },
   // update (objColVals) is an object with column value pairs
  update: function(tableName, objColVals, condition, cb) {
    orm.update(tableName, objColVals, condition, function(res) {
      cb(res);
    });
  },
    // delete row that matches the condition
  delete: function(tableName, condition, cb) {
    orm.delete(tableName, condition, function(res) {
      cb(res);
    });
  },
   // find customer's shopping list
  findAndJoinCustomers: function(id, cb) {
    orm.findAndJoinCustomers(id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (controller.js).
module.exports = model;
