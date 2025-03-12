import { createHook } from 'async_hooks';

const hook = createHook({
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
    }
});

hook.enable();
