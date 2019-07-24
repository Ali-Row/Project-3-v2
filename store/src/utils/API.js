import axios from "axios";

// Export an object containing methods we'll use to get information from the server.

export default {
  // getAll: Get all records in a table.
  getAll: function(tableName) {
    return axios.get(`/api/${tableName}`);
  },
  // getOne: Get one record in a table WHERE primary key (unique id) matches input id
  getOne: function(tableName, id) {
    return axios.get(`/api/${tableName}/${id}`);
  },
  // getByName: Get one record WHERE name matches input name
  getByName: function(tableName, name) {
    return axios.get(`/api/${tableName}/n/${name}`);
  },
  // getByType: Get one record in a table WHERE type matches input type
  getByType: function(tableName, type) {
    return axios.get(`/api/${tableName}/t/${type}`);
  },
  // getByCID: Get one record in a table WHERE customerId matches input customerId
  getByCID: function(tableName, customerId) {
    return axios.get(`/api/${tableName}/cid/${customerId}`);
  },
  // getCustomerByEmail: Get a record from the customers table WHERE customer_email matches
  getCustomerByEmail: function(email) {
    return axios.get(`/api/customers/e/${email}`);
  },
  // delete: Delete one record in a table WHERE unique id matches unique id
  delete: function(tableName, id) {
    return axios.delete(`/api/${tableName}/${id}`);
  },
  // delete: Delete one record in a table WHERE customer id matches unique id
  deleteByCustomerId: function (tableName, customer_id) {
    console.log(`sending call to: /api/cid/${tableName}/${customer_id}`)
    return axios.delete(`/api/cid/${tableName}/${customer_id}`);
  },
  // create: Create a record in a table
  create: function(tableName, objColVals) {
    return axios.post(`/api/${tableName}`, objColVals);
  },
  // update: Update a record in a record WHERE id matches primary key (unique id) 
  update: function(tableName, id, objColVals) {
    return axios.put(`/api/${tableName}/${id}`, objColVals);
  },
  // getShoppingList: Get all records from the shopping_list table WHERE customer_id matches input id
  getShoppingList: function(customer_id) {
    return axios.get(`/api/customers/list/${customer_id}`);
  },
  // deleteShoppingList: Delete a record from the shopping_list table WHERE list_id matches
  deleteShoppingList: function(list_id) {
    return axios.delete(`/api/customers/list/${list_id}`);
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
