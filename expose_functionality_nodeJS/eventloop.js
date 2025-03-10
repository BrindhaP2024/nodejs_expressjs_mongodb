const fs = require('fs');

console.log('Start of script');

// Check Phase 
setImmediate(() => {
  console.log('setImmediate() - Executed in Check Phase');
});
// Process.nextTick
process.nextTick(() => {
  console.log('process.nextTick() - Executed first');
});

// Timers Phase
setTimeout(() => {
  console.log('setTimeout() - Executed in Timers Phase');
}, 1000);



// Poll Phase
fs.readFile(__filename, () => {
  console.log('fs.readFile() - Executed in Poll Phase');

  // Inside I/O callback
  setImmediate(() => console.log('setImmediate inside fs.readFile()'));
  setTimeout(() => console.log('setTimeout inside fs.readFile()'), 2000);

  process.nextTick(() => console.log('process.nextTick inside fs.readFile()'));
});

// Close Callbacks Phase
const readableStream = fs.createReadStream(__filename);
readableStream.close(); // Close the stream immediately
readableStream.on('close', () => {
  console.log('Stream close event - Executed in Close Callbacks Phase');
});

console.log('End of script');
