"use strict";
const express = require("express");
const router = express.Router();
const model = require("../models/model.js");

/**************************************************
 * Routes for products table
 **************************************************/

// POST a new product
router.post("/api/products", function(req, res) {
  const cols = Object.keys(req.body);
  const rows = Object.values(req.body);

  model.create("products", cols, rows, function(result) {
    // Send back the ID
    res.json({
      id: result.insertId
    });
  });
});

// GET all products
router.get("/api/products", function(req, res) {
  model.all("products", function(data) {
    const hbsObject = {
      products: data
    };
    res.json(hbsObject);
  });
});

// GET a product WHERE product_id matches input id
router.get("/api/products/:id", function(req, res) {
  const condition = `item_id = ${req.params.id}`;

  model.getWhere("products", condition, function(data) {
    const hbsObject = {
      products: data
    };
    res.json(hbsObject);
  });
});

// GET a product WHERE product_name matches input name
router.get("/api/products/n/:name", function(req, res) {
  const condition = `product_name LIKE '%${req.params.name}%'`;
  model.getWhere("products", condition, function(data) {
    const hbsObject = {
      products: data
    };
    res.json(hbsObject);
  });
});

// GET a product WHERE product_type matches input type
router.get("/api/products/t/:type", function(req, res) {
  const condition = `product_type LIKE '%${req.params.type}%'`;
  model.getWhere("products", condition, function(data) {
    const hbsObject = {
      products: data
    };
    res.json(hbsObject);
  });
});

// UPDATE a product WHERE product_id matches input id
router.put("/api/products/:id", function(req, res) {
  const condition = "item_id = " + req.params.id;

  model.update("products", req.body, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// DELETE a product WHERE product_id matches input id
router.delete("/api/products/:id", function(req, res) {
  const condition = `item_id = ${req.params.id}`;

  model.delete("products", condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

/*******************************************************
 * Routes for customers table
 *******************************************************/

// POST a new customer
router.post("/api/customers", function(req, res) {
  const cols = Object.keys(req.body);
  const rows = Object.values(req.body);

  model.create("customers", cols, rows, function(result) {
    // Send back the ID
    res.json({
      id: result.insertId
    });
  });
});

// GET all customers
router.get("/api/customers", function(req, res) {
  model.all("customers", function(data) {
    const hbsObject = {
      customers: data
    };
    res.json(hbsObject);
  });
});

// GET a customer WHERE customer_id matches input id
router.get("/api/customers/:id", function(req, res) {
  const condition = `customer_id = ${req.params.id}`;

  model.getWhere("customers", condition, function(data) {
    const hbsObject = {
      products: data
    };
    res.json(hbsObject);
  });
});

// GET a customer WHERE customer_name matches input name
router.get("/api/customers/n/:name", function(req, res) {
  const condition = `(customer_first_name LIKE '%${
    req.params.name
  }%') OR (customer_first_name LIKE '%${req.params.name}%');`;
  model.getWhere("customers", condition, function(data) {
    const hbsObject = {
      customers: data
    };
    res.json(hbsObject);
  });
});

// GET a customer where customer_email matches input email
router.get("/api/customers/e/:email", function(req, res) {
  const condition = `customer_email = '${req.params.email}'`;

  model.getWhere("customers", condition, function(data) {
    const hbsObject = {
      customers: data
    };
    res.json(hbsObject);
  });
});

// UPDATE a customer WHERE customer_id matches input id
router.put("/api/customers/:id", function(req, res) {
  const condition = "customer_id = " + req.params.id;

  model.update("customers", condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// DELETE a customer WHERE customer_id matches input id
router.delete("/api/customers/:id", function(req, res) {
  const condition = `customer_id = ${req.params.id}`;

  model.delete("customers", condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

/*******************************************************
 *  Routes for shopping_list table
 *******************************************************/

/* POST a shopping list to the shopping_list table
    Input is in the form of { customer_id: customer_id, list: [array of product_id]
    Convert it to the following format to pass to model.createBulk():
      cols = [customer_id, product_id]
      vals = [[cust_id, prod_id-1], [cust_id, prod_id-2], . . .[cust_id, prod_id-n]]]
*/
router.post("/api/customers/list", function (req, res) {
  // get customer id & product list
  const tmp = Object.values(req.body);
  const customerId = parseInt(tmp[0]);
  const list = tmp[1];
  const cols = ["customer_id", "product_id"];
  let rows = [];

  // loop through the list of product id's & pair them with customer id's
  if (list != undefined && list.length > 0) {
    rows = list.map(item => {
      return `(${customerId}, ${item})`;
    });
  } else {
    console.log("Empty list.");
  }
  model.createBatch("shopping_list", cols, rows, function(result) {
    // Send back the ID
    res.json({
      id: result.insertId
    });
  });
});

router.get("/api/customers/list/:id", function(req, res) {
  model.findAndJoinCustomers(req.params.id, function(data) {
    res.json(data);
  });
});

// DELETE shopping_list item WHERE list_id matches input id
router.delete("/api/customers/list/:id", function (req, res) {
  const condition = `list_id = ${req.params.id}`;

  model.delete("shopping_list", condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// DELETE all records in the shopping_list table WHERE customer_id matches input id
router.delete('/api/cid/shopping_list/:customer_id', function (req, res) {
  const condition = `customer_id = ${req.params.customer_id}`;

  model.delete("shopping_list", condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  }); 
});

/**************************************************
 * Routes for departments table
 **************************************************/

// POST a new department
router.post("/api/departments", function(req, res) {
  const cols = Object.keys(req.body);
  const rows = Object.values(req.body);

  model.create("departments", cols, rows, function(result) {
    // Send back the ID
    res.json({
      id: result.insertId
    });
  });
});

// GET all products
router.get("/api/departments", function(req, res) {
  model.all("departments", function(data) {
    const hbsObject = {
      departments: data
    };
    res.json(hbsObject);
  });
});

// GET a product by department_id
router.get("/api/departments/:id", function(req, res) {
  const condition = `department_id = ${req.params.id}`;

  model.getWhere("departments", condition, function(data) {
    const hbsObject = {
      products: data
    };
    res.json(hbsObject);
  });
});

// GET a product by product_name
router.get("/api/departments/n/:name", function(req, res) {
  const condition = `department_name LIKE '%${req.params.name}%'`;
  model.getWhere("products", condition, function(data) {
    const hbsObject = {
      products: data
    };
    res.json(hbsObject);
  });
});

// PUT (update) a product
router.put("/api/departments/:id", function(req, res) {
  const condition = "department_id = " + req.params.id;

  model.update("departments", req.body, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// DELETE a product
router.delete("/api/departments/:id", function(req, res) {
  const condition = `department_id = ${req.params.id}`;

  model.delete("departments", condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
