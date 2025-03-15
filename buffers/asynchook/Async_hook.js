const async_hooks = require('async_hooks');

const hook = async_hooks.createHook({
    init(asyncId, type, triggerAsyncId, resource) {
        console.log(`Init: ${asyncId}, Type: ${type}, Trigger: ${triggerAsyncId}`);
    },

    before(asyncId) {
        console.log(`Before: ${asyncId}`);
    },

    after(asyncId) {
        console.log(`After: ${asyncId}`);
    },

    destroy(asyncId) {
        console.log(`Destroy: ${asyncId}`);
    },

    promiseResolve(asyncId) {
        console.log(`Promise with ID ${asyncId} resolved.`);
    }
});

hook.enable();

console.log(`Current Async ID: ${async_hooks.executionAsyncId()}`);

setTimeout(() => {
    console.log('Timeout complete');
}, 1000);

Promise.resolve('Resolved Promise').then(() => {
    console.log('Promise resolved');
});
