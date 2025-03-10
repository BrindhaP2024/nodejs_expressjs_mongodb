const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const addToCartHandler = (cartId, userId) => {
  console.log(`Cart id: ${cartId}, UserId: ${userId}`);
};

eventEmitter.on('addTocart', addToCartHandler);
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

eventEmitter.emit('register'); //only once
eventEmitter.emit('register'); 

eventEmitter.removeListener('addTocart', addToCartHandler); 


// eventEmitter.emit('addTocart', 223, 323); 
const myListener = () => {
console.log('This listener will be removed!');
  };
  eventEmitter.on('eventName', myListener);
  eventEmitter.removeListener('eventName', myListener);
  //   eventEmitter.emit('eventName');

  