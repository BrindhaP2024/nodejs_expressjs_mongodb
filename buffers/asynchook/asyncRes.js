const async_hooks = require('async_hooks');

class MyAsyncResource extends async_hooks.AsyncResource {
    constructor() {
        super('MyAsyncResource');
    }

    doWork() {
        console.log('Doing some async work...');
    }
}

const resource = new MyAsyncResource();

resource.doWork();
