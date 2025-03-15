const async_hooks = require('async_hooks');
const { AsyncLocalStorage } = require('async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

asyncLocalStorage.run(new Map(), () => {
    asyncLocalStorage.getStore().set('key', 'value');
    setTimeout(() => {
        console.log(asyncLocalStorage.getStore().get('key'));  // Logs 'value'
    }, 1000);
});
