"use strict";
let connection = require("../config/connection.js");

// HELPER FUNCTIONS FOR SQL SYNTAX

// Create an array of "num" question marks and converts them to a string
function printQuestionMarks(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Convert object key/value pairs to SQL syntax
function objToSql(ob) {
  let arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (let key in ob) {
    let value = ob[key];

    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      if (isNaN(value)) {
        // Escape single quotes within strings, not needed if value is not a string
        value = value.replace("'", "\\'");

        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        // if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // Put quotes around the string, ie.(Lana Del Grey => 'Lana Del Grey')
      value = "'" + value + "'";

      // push key/value onto the array
      arr.push(key + "=" + value);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// OBJECT FOR ALL SQL STATEMENT FUNCTIONS
let orm = {
  // get all rows
  all: function(tableInput, cb) {
    let queryString = `SELECT * FROM ${tableInput};`;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }, // all

  // get a row where condition is met
  getWhere: function(tableInput, condition, cb) {
    let queryString = `SELECT * FROM ${tableInput} WHERE ${condition};`;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }, // getWhere

  // Insert a row
  create: function(tableInput, cols, vals, cb) {
    let queryString = `INSERT INTO ${tableInput} (${cols.toString()}) VALUES (${printQuestionMarks(
      vals.length
    )})  `;

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }, // create

  // Insert a group of rows
  createBatch: function(tableInput, cols, vals, cb) {
    let queryString = `INSERT INTO ${tableInput} (${cols.join(
      ", "
    )}) VALUES ${vals.join(", ")}`;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // Update a row
  update: function(tableInput, objColVals, condition, cb) {
    let queryString = `UPDATE ${tableInput} SET ${objToSql(
      objColVals
    )} WHERE ${condition} `;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }, // update

  delete: function(tableInput, condition, cb) {
    // let queryString = "DELETE FROM " + table;
    // queryString += " WHERE ";
    // queryString += condition;

    let queryString = `DELETE FROM ${tableInput} WHERE ${condition}`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }, // delete
  findAndJoinCustomers: function(id, cb) {
    const queryString = `SELECT * FROM customers JOIN shopping_list ON customers.customer_id = shopping_list.customer_id JOIN products ON shopping_list.product_id = products.item_id WHERE customers.customer_id = ${id};`;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
}; // orm

// Export the orm object for the model.
module.exports = orm;
