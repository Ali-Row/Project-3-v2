// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const model = {
  all: function(tableName, cb) {
    orm.all(tableName, function(res) {
      cb(res);
    });
  },
  getWhere: function(tableName, condition, cb) {
    orm.getWhere(tableName, condition, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(tableName, cols, vals, cb) {
    orm.create(tableName, cols, vals, function(res) {
      cb(res);
    });
  },
  createBatch: function(tableName, cols, vals, cb) {
    orm.createBatch(tableName, cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(tableName, objColVals, condition, cb) {
    orm.update(tableName, objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(tableName, condition, cb) {
    orm.delete(tableName, condition, function(res) {
      cb(res);
    });
  },
  findAndJoinCustomers: function(id, cb) {
    orm.findAndJoinCustomers(id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (controller.js).
module.exports = model;
