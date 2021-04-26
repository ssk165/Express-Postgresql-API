/* Replace with your SQL commands */

INSERT INTO users (firstName, lastName, password) VALUES ('Shubham', 'Singh', 'shubham');

INSERT INTO users (firstName, lastName, password) VALUES ('Shreyansh', 'Jindal', 'shreyansh');


INSERT INTO products (name, price) VALUES ('Bitcoin', 50000);

INSERT INTO products (name, price) VALUES ('Ethereum', 5000);

INSERT INTO products (name, price) VALUES ('Chainlink', 10);


INSERT INTO orders (user_id, status)
  VALUES (1, 'Purchased');

INSERT INTO orders (user_id, status)
  VALUES (1, 'Pending');

INSERT INTO orders (user_id, status)
  VALUES (2, 'Pending');

INSERT INTO orders_products (order_id, product_id, quantity) VALUES (1, 1, 1);

INSERT INTO orders_products (order_id, product_id, quantity) VALUES (1, 2, 1);

INSERT INTO orders_products (order_id, product_id, quantity) VALUES (2, 2, 4);
