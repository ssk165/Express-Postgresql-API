/* Replace with your SQL commands */

INSERT INTO users (firstName, lastName, password) VALUES ('Shubham', 'Singh', 'shubham');

INSERT INTO users (firstName, lastName, password) VALUES ('Shreyansh', 'Jindal', 'shreyansh');


INSERT INTO products (name, price) VALUES ('Bitcoin', 50000);

INSERT INTO products (name, price) VALUES ('Ethereum', 5000);

INSERT INTO products (name, price) VALUES ('Chainlink', 10);


INSERT INTO orders (product_id, quantity, user_id, status)
  VALUES (1, 1, 1, 'Purchased');

INSERT INTO orders (product_id, quantity, user_id, status)
  VALUES (2, 2, 1, 'Pending');