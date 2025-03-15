const async_hooks = require('async_hooks');

const hook = async_hooks.createHook({
    init(asyncId, type) {
        console.log(`Resource with ID: ${asyncId}, Type: ${type}`);
    },
});

hook.enable();

setTimeout(() => {
    console.log('Timeout complete');
}, 1000);

hook.disable();
