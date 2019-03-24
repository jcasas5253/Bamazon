## Description
This application implements a simple command line based store using the npm inquirer package and the MySQL database backend together with the npm mysql package.
### Customer Interface

The customer interface allows the user to view the current inventory of store items: item IDs, department in which the item is located and the price. The user is then able to purchase one of the items by entering the item ID and then their desired quantity. If the selected quantity is in stock, the user's order is processed, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to change the quantity of their order.

To run the customer interface please follow the steps below:

	git clone https://github.com/jcasas5253/Bamazon.git
	cd Bamazon
	npm install
	node bamazoncustomer.js
  To run bamazoncustomer.js we run the command "node bamazoncustomer.js"
![Screenshot (9)](https://user-images.githubusercontent.com/43353267/54886381-af760200-4e44-11e9-94bb-91947b02875d.png)
This will then display all of the inventory of the store including: the product ID, the product name, department name, price and stock quantity. 
![Screenshot (8)](https://user-images.githubusercontent.com/43353267/54886455-5195ea00-4e45-11e9-88fd-bd1eebd88e2d.png)
From here you will be asked for the product's ID number as well as how many you would like to buy. So long as the store can match your quantity, your purchase will go through.
![Screenshot (10)](https://user-images.githubusercontent.com/43353267/54886494-a89bbf00-4e45-11e9-8cc8-5b6c8a5e3a28.png)
However, if the user's quanity choice is more than the store has, they will be propted to change their quantity.
![Screenshot (11)](https://user-images.githubusercontent.com/43353267/54886519-f31d3b80-4e45-11e9-888f-8a2679ea402f.png)
