var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'Bamazon'
});

function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Whole non-zero numbers only.';
	}
}

function UserPurchase() {

	// Prompt the user to select an item
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Please enter the Item ID which you would like to purchase.',
			validate: validateInput,
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many do you need?',
			validate: validateInput,
			filter: Number
		}
	]).then(function(input) {
		var item = input.item_id;
		var quantity = input.quantity;

		var queryStr = 'SELECT * FROM products WHERE ?';

		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;

			// If the user has selected an invalid item ID, data will be empty
			if (data.length === 0) {
				console.log('ERROR: Invalid Item ID. Please select a valid Item ID to continue.');
				displayInventory();

			} else {
				var productData = data[0];
				// If the quantity requested by the user is in stock
				if (quantity <= productData.stock_quantity) {
					console.log('The product you requested is in stock! Processing your order now!');

					var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

					// Update the inventory
					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log('Your order has been processed! Your total is going to be $' + productData.price * quantity);
                        console.log('Thank you for shopping with us!');
                        console.log('We hope to see you again soon!')
						console.log("\n---------------------------------------------------------------------\n");

						connection.end();
					})
				} else {
					console.log('Sorry but it looks like we are short on supplies and do not have that many.');
					console.log('Please change the quantity of your order.');
					console.log("\n---------------------------------------------------------------------\n");
				}
			}
		})
	})
}
 UserPurchase();