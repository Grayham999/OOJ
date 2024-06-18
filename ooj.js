// Product Class
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// ShoppingCartItem Class
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate total price of the item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// ShoppingCart Class
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Method to add item to the cart
    addItem(product, quantity) {
        // Check if the item is already in the cart
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem);
        }
    }

    // Method to remove item from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to display cart items
    displayCartItems() {
        this.items.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.getTotalPrice()}`);
        });
    }

    // Method to get the total price of items in the cart
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
}

// Testing the implementation
// Creating products
const product1 = new Product(1, 'Laptop', 1000);
const product2 = new Product(2, 'Smartphone', 500);

// Creating a shopping cart
const cart = new ShoppingCart();

// Adding items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);

// Displaying cart items
console.log('Cart Items:');
cart.displayCartItems();

// Getting total price of items in the cart
console.log('Total Price:', cart.getTotalPrice());

// Removing an item from the cart
cart.removeItem(2);

// Displaying cart items after removal
console.log('Cart Items after removal:');
cart.displayCartItems();

// Getting total price of items in the cart after removal
console.log('Total Price after removal:', cart.getTotalPrice());
