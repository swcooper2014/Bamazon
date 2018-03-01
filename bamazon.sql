CREATE DATABASE bamazon_db;


CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('AUX Cable', 'Electronics', 9.59, 200),
		('Laptop Sleeve', 'Computers', 15.99, 570),
        ('Nike Running Shoes', 'Clothing', 79.98, 25),
        ('4" x 6" Self-Adhesive Magnets', 'Home and Decore', 40.00, 100),
        ('Wallet', 'Clothing', 10.20, 60),
        ('Headphones', 'Electonics', 9.99, 300),
        ('Picture Frames', 'Home and Decore', 6.00, 200),
        ('Lenovo Tab 4, 10.1', 'Computers', 169.99, 20),
        ('The Maze Runner', 'Books', 8.88, 15),
        ('A Series of Unfortunate Events', 'Books', 14.69, 3);

use bamazon_db;

CREATE TABLE departments(
    department_id MEDIUMINT AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    over_head_costs DECIMAL(10,2) NOT NULL,
    total_sales DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(department_id));

INSERT INTO departments (department_name, over_head_costs, total_sales)
VALUES ('Electronics', 50000.00, 15000.00),
    ('Computers', 20000.00, 12000.00),
    ('Clothing', 30000.00, 15000.00),
    ('Home and Decore', 3000.00, 12000.00),
    ('Books', 1200.00, 15000.00);

SELECT * FROM products;

SELECT * FROM departments;
