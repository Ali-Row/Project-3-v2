# This is for your local database if you choose to drop & restore it.
# You cannot drop the heroku database
DROP DATABASE IF EXISTS store_db;
CREATE DATABASE store_db;

# Heroku database
USE j1at0jsvnpolxqjn;

# Local database
USE store_db;


# The shopping_list table must be dropped before the customers and products tables
# because it has dependencies on them via foreign keys.
DROP TABLE IF EXISTS shopping_list;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS departments;

# The products and customers tables must be created before the shopping_list table
# because the shopping_list has dependencies on both via foreign keys.
CREATE TABLE products (
	item_id INT AUTO_INCREMENT,
	product_name VARCHAR(30) NOT NULL,
    product_type VARCHAR (30) NOT NULL,
    product_image VARCHAR (255) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	row_id VARCHAR(10),
	column_id VARCHAR (10),
	shelf_id VARCHAR (10),
	price DECIMAL(10,2) NOT NULL,
	sale_price DECIMAL(10,2) NOT NULL,
	stock_quantity INT NOT NULL,
	on_sale BOOLEAN DEFAULT false,
	clicks_without_sale INT DEFAULT 0,
    createdAt TIMESTAMP DEFAULT NULL,
	PRIMARY KEY (item_id)
);

CREATE TABLE customers (
	customer_id INT AUTO_INCREMENT,
    customer_first_name VARCHAR(25),
    customer_second_name VARCHAR(25),
    customer_email VARCHAR(40),
    searches VARCHAR(200),
    product_interests VARCHAR(200),
    createdAt TIMESTAMP DEFAULT NULL,
    PRIMARY KEY (customer_id)
);

CREATE TABLE shopping_list (
	list_id INT AUTO_INCREMENT,
    createdAt TIMESTAMP DEFAULT NULL,
    customer_id INT NOT NULL,
    product_id INT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (product_id) REFERENCES products(item_id), 
    PRIMARY KEY (list_id)
);

CREATE TABLE departments (
   department_id INT AUTO_INCREMENT,
   department_name VARCHAR(30) NOT NULL,
   over_head_cost DECIMAL(10,2) NOT NULL,
   total_profit DECIMAL(10,2) NOT NULL,
   PRIMARY KEY (department_id)
);