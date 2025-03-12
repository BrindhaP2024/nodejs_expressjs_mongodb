import { EventEmitter } from 'events';

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

emitter.on('eventCheck', (name) => {
    console.log(`Hello, ${name}!`);
});

emitter.once('welcome', (name) => {
    console.log(`Welcome, ${name}! This will run only once.`);
});

// Prepend listener to run before others
emitter.prependListener('eventCheck', (name) => {
    console.log(`First Greet: ${name}`);
});

// Prepend once listener 
emitter.prependOnceListener('welcome', (name) => {
    console.log(`Prepend Once Welcome: ${name}`);
});

emitter.emit('eventCheck', 'Brindha');
emitter.emit('welcome', 'Node.js');
emitter.emit('welcome', 'Node.js');

console.log(emitter.eventNames());
console.log(emitter.getMaxListeners());
console.log(emitter.listenerCount('eventCheck'));
console.log(emitter.listeners('eventCheck'));
console.log(emitter.rawListeners('eventCheck'));

// Remove one listener
emitter.removeListener('eventCheck', emitter.listeners('eventCheck')[0]);
console.log(emitter.listenerCount('eventCheck')); // Should decrease by 1

// Remove all listeners
emitter.removeAllListeners('eventCheck');
console.log(emitter.listenerCount('eventCheck')); // 0

emitter.on('error', (err) => {
    console.log(`Error: ${err.message}`);
});

emitter.emit('error', new Error('Something went wrong!'));

emitter.on('asyncEvent', async () => {
    try {
        throw new Error('Async Error!');
    } catch (err) {
        console.log(`Caught async error: ${err.message}`);
    }
});

emitter.emit('asyncEvent');

process.on('unhandledRejection', (reason) => {
    console.log(`Unhandled Promise Rejection: ${reason.message}`);
});

const eventTarget = new EventTarget();

const eventListener = (event) => {
    console.log(`Event Target Triggered: ${event.type}`);
};

eventTarget.addEventListener('customEvent', eventListener);
eventTarget.dispatchEvent(new Event('customEvent'));
eventTarget.removeEventListener('customEvent', eventListener);

class MyNodeEventTarget extends EventEmitter {}

const nodeTarget = new MyNodeEventTarget();
nodeTarget.on('nodeEvent', () => console.log('NodeEventTarget event fired!'));
nodeTarget.emit('nodeEvent');
