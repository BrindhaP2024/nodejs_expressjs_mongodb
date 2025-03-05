const fs = require('fs');

// Asynchronous/Non-blocking file read
console.log('Start reading file...');
fs.readFile('example.txt', 'utf-8', (err, data) => {  // This is non-blocking!
  if (err) throw err;
  console.log('File content:', data);
});
console.log('End reading file.');
