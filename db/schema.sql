CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Shampoo', 'Cosmetics', 5.75, 200),
		('Conditioner', 'Cosmetics', 6.25, 200),
		('Trash Bags', 'Grocery', 5.99, 300),
		('Towels', 'Grocery', 4.25, 300),
		('Apples', 'Produce', 0.35, 500),
		('Bannana', 'Produce', 0.20, 500),
		('Orange Juice', 'Grocery', 4.45, 150),
		('Milk', 'Grocery', 4.50, 150),
		('Diapers', 'Children', 2.75, 400),
		('Toiler Paper', 'Grocery', 12.99, 400),
		('Baby Wipes', 'Children', 1.50, 200),
		('Yoga Mat', 'Sports', 12.75, 100),
		('15lb Dumb bell', 'Sports', 7.99, 20),
		('T-Shirt', 'Clothing', 5.55, 250),
		('Shorts', 'Clothing', 17.88, 250),
		('Cat Food', 'Pet', 7.25, 100),
		('Advil', 'Pharmacy', 4.95, 300),
		('Band-Aid', 'Pharmacy', 3.25, 200),
		('Ice Cream', 'Grocery', 3.25, 100);