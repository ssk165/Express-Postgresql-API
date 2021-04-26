/* Replace with your SQL commands */
/* Replace with your SQL commands */
CREATE TABLE orders_products(
    id SERIAL PRIMARY KEY,
    order_id INTEGER,
    product_id INTEGER,
    quantity INTEGER,

    FOREIGN KEY (order_id) REFERENCES orders(id) ON UPDATE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON UPDATE CASCADE
);