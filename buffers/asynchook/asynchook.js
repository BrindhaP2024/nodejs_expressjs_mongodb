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

console.log(async_hooks.executionAsyncId());  // Logs the current async resource's ID


promiseResolve(asyncId); {
  console.log(`Promise with ID ${asyncId} resolved.`);
}
  