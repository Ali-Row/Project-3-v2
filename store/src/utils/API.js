import axios from "axios";

// Export an object containing methods we'll use to get information from the server.

export default {
  // getAll: Get all records in a table.
  getAll: function(tableName) {
    return axios.get(`/api/${tableName}`);
  },
  // getOne: Get one record in a table WHERE id matches
  getOne: function(tableName, id) {
    return axios.get(`/api/${tableName}/${id}`);
  },
  // getByName: Get one record WHERE name matches
  getByName: function(tableName, name) {
    return axios.get(`/api/${tableName}/n/${name}`);
  },
  // getByType: Get one record in a table WHERE type matches
  getByType: function(tableName, name) {
    return axios.get(`/api/${tableName}/t/${name}`);
  },
  // getByCID: Get one record in a table WHERE customer_id matches
  getByCID: function(tableName, name) {
    return axios.get(`/api/${tableName}/cid/${name}`);
  },
  // getCustomerByEmail: Get a record from the customers table
  //    WHERE customer_id matches
  getCustomerByEmail: function(email) {
    return axios.get(`/api/customers/e/${email}`);
  },
  // delete: Delete one record in a table WHERE id matches
  delete: function(tableName, id) {
    return axios.delete(`/api/${tableName}/${id}`);
  },
  // create: Create a record in a table
  create: function(tableName, objColVals) {
    return axios.post(`/api/${tableName}`, objColVals);
  },
  // update: Update a record in a record WHERE id matches
  update: function(tableName, id, objColVals) {
    return axios.put(`/api/${tableName}/${id}`, objColVals);
  },
  // getShoppingList: Get all records from the shopping_list table
  // WHERE customer_id matches
  getShoppingList: function(id = 1) {
    return axios.get(`/api/customers/list/${id}`);
  },
  // deleteShoppingList: Delete a record from the shopping_list table
  // WHERE list_id matches
  deleteShoppingList: function(id) {
    return axios.delete(`/api/customers/list/${id}`);
  },
  /********************************************************************************
   *  createShoppingList(): This is a bulk insert into the shopping_list table.
   *
   *  Call:
   *  createShoppingList({
   *    "customer_id": id,
   *    "list": [array of product IDs]
   *  });
   ********************************************************************************/
  createShoppingList: function(tableName, objColVals) {
    return axios.post(`/api/customers/list`, objColVals);
  }
};
