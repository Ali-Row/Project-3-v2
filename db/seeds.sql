INSERT INTO products (product_name, product_type, product_image, department_name, row_id, column_id, shelf_id, price, sale_price, stock_quantity, on_sale) VALUES ('Lego Helicopter', 'Toy', 'https://sh-s7-live-s.legocdn.com/is/image/LEGO/60179?scl=1.7&op_sharpen=1', 'Toys', '61', '3', '5', 19.99, 12.99, 50, TRUE);
INSERT INTO products (product_name, product_type, product_image, department_name, row_id, column_id, shelf_id, price, sale_price, stock_quantity, on_sale) VALUES ('Yoga Mat', 'Exercise', 'http://cdn.shopify.com/s/files/1/0763/3069/products/1397140002_-_C_grande.jpg?v=1531407649', 'Sports', '5', '5', '1', 12.95, 7.99, 50, TRUE);
INSERT INTO products (product_name, product_type, product_image, department_name, row_id, column_id, shelf_id, price, sale_price, stock_quantity, on_sale) VALUES ('Toaster', 'Small Appliance', 'https://secure.img2-fg.wfcdn.com/im/16856549/compr-r85/3293/32937120/4-slice-toaster.jpg', 'Household', '60', '8', 'D4', 74.49, 74.49, 50, FALSE);
INSERT INTO products (product_name, product_type, product_image, department_name, row_id, column_id, shelf_id, price, sale_price, stock_quantity, on_sale) VALUES ('Tent', 'Camping', 'https://images-na.ssl-images-amazon.com/images/I/81VP0Q0z1WL._SX425_.jpg', 'Sports','10', '8', 'D4', 34.99, 34.99, 50, FALSE);
INSERT INTO products (product_name, product_type, product_image, department_name, row_id, column_id, shelf_id, price, sale_price, stock_quantity, on_sale) VALUES ('Coffee Mug', 'Kitchenware', 'https://thunderranchinc.com/wp-content/uploads/Thunder_Ranch_Coffee_Mug_A.jpg', 'Household', '21', '5', '1', 8.99, 8.99, 50, FALSE);
INSERT INTO products (product_name, product_type, product_image, department_name, row_id, column_id, shelf_id, price, sale_price, stock_quantity, on_sale) VALUES ('Hair Dryer', 'Hair Products', 'https://www.dhresource.com/0x0s/f2-albu-g6-M00-01-07-rBVaR1u3KviAEdj1AAGSpkp-Sic221.jpg/hair-dryer-professional-blow-hairdryer-hot.jpg', 'Hygeine', '60', '8', 'D4', 44.99, 39.99, 50, TRUE);
INSERT INTO products (product_name, product_type, product_image, department_name, row_id, column_id, shelf_id, price, sale_price, stock_quantity, on_sale) VALUES ('Swivel Chair', 'Office Furniture', 'https://c1.neweggimages.com/ProductImage/195-000A-00084-01.jpg', 'Furniture', '60', '8', 'D4', 199.99, 199.99, 50, FALSE);
INSERT INTO products (product_name, product_type, product_image, department_name, row_id, column_id, shelf_id, price, sale_price, stock_quantity, on_sale) VALUES ('Macbook Pro', 'Computer', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp13touch/space/mbp13touch-space-gallery2-201807_GEO_US_FMT_WHH?wid=4000&hei=3072&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1530142199588', 'Electronics','60', '8', 'D4', 1099.99, 1099.99, 50, FALSE);
INSERT INTO products (product_name, product_type, product_image, department_name, row_id, column_id, shelf_id, price, sale_price, stock_quantity, on_sale) VALUES ('Coffee Machine', 'Small Appliance', 'https://assets.epicurious.com/photos/5c7848cb0bf9d330b3b8d6ae/16:9/w_1280,c_limit/Best-Espresso-Machines-28022019.jpg', 'Household','60', '8', 'D4', 79.99, 1099.99, 50, FALSE);
INSERT INTO products (product_name, product_type, product_image, department_name, row_id, column_id, shelf_id, price, sale_price, stock_quantity, on_sale) VALUES ('Lampshade', 'Decoration', 'https://assets.catawiki.nl/assets/2018/3/15/f/e/7/fe7bad08-d77d-412d-8420-8f0cc02d9344.jpg', 'Household','60', '8', 'D4', 14.95, 14.95, 50, FALSE);
INSERT INTO products (product_name, product_type, product_image, department_name, row_id, column_id, shelf_id, price, sale_price, stock_quantity, on_sale) VALUES ('Tablecloth', 'Decoration', 'https://5.imimg.com/data5/CU/PK/MY-624414/checked-table-cloth-500x500.jpg', 'Household','60', '8', 'D4', 4.99, 4.99, 50, FALSE);
INSERT INTO products (product_name, product_type, product_image, department_name, row_id, column_id, shelf_id, price, sale_price, stock_quantity, on_sale) VALUES ('Teddy', 'Stuffed Animals', 'https://scripture-lullabies.com/wp-content/uploads/2018/11/TeddyBear-6.jpg', 'Toys','60', '8', 'D4', 2.99, 2.99, 50, FALSE);
    
# Seeds for "customers" table
INSERT INTO customers (customer_first_name, customer_second_name, customer_email) VALUES ('Joe', 'Flake', 'joeflake@northpole.com');
INSERT INTO customers (customer_first_name, customer_second_name, customer_email) VALUES ('Snow', 'Flake', 'snowflake@northpole.com');
INSERT INTO customers (customer_first_name, customer_second_name, customer_email) VALUES ('Bugs', 'Bunny', 'bugsbunny@looneytunes.com');
INSERT INTO customers (customer_first_name, customer_second_name, customer_email) VALUES ('Elmar', 'Fudd', 'elmarfudd@looneytunes.com');
INSERT INTO customers (customer_first_name, customer_second_name, customer_email) VALUES ('Test', 'Test', 'test@test.com');

# Seeds for "shopping_list" table
INSERT INTO shopping_list (customer_id, product_id) VALUES (1, 1);
INSERT INTO shopping_list (customer_id, product_id) VALUES (1, 2);
INSERT INTO shopping_list (customer_id, product_id) VALUES (1, 3);
INSERT INTO shopping_list (customer_id, product_id) VALUES (1, 4 );

#Seeds for "departments" table
INSERT INTO departments (department_name, over_head_cost, total_profit) VALUES ('Toys', 2000.00, -2000.00);
INSERT INTO departments (department_name, over_head_cost, total_profit) VALUES ('Cosmetics', 3000.00, -3000.00);
INSERT INTO departments (department_name, over_head_cost, total_profit) VALUES ('Sporting Goods', 4000.00, -4000.00);
INSERT INTO departments (department_name, over_head_cost, total_profit) VALUES ('Sporting Goods', 4000.00, -4000.00);
