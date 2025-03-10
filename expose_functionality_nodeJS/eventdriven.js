const EventEmitter = require('events');
const { listeners } = require('process');
const eventEmitter = new EventEmitter();


eventEmitter.on('addTocart', (cartId, userId) => {
    console.log(`Cart id: ${cartId}, UserId: ${userId}`);
});

// Order placed event handler
eventEmitter.on('orderPlaced', (orderId, amount) => {
    console.log(`Order ID: ${orderId}, Amount: $${amount}`);
});

// Emit events
eventEmitter.emit('addTocart', 223, 323);
eventEmitter.emit('orderPlaced', 12345, 250);
eventEmitter.emit('orderPlaced', 123, 900);

eventEmitter.once('register', () => {
    console.log('User registers in!');
});

eventEmitter.emit('register'); 
eventEmitter.emit('register');

eventEmitter.removeListener('addTocart',listeners);
