const async_hooks = require('async_hooks');

const hook = async_hooks.createHook({
    init(asyncId, type) {
        if (type === 'PROMISE') {
            console.log(`Promise initialized with ID: ${asyncId}`);
        }
    },
    promiseResolve(asyncId) {
        console.log(`Promise with ID ${asyncId} resolved.`);
    }
});

hook.enable();

Promise.resolve().then(() => {
    console.log('Promise resolved');
});
