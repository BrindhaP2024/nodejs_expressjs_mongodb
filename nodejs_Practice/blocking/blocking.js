const fs = require('fs');

// Synchronous/Blocking file read
console.log('Start reading file...');
const data = fs.readFileSync('example.txt', 'utf-8');  // This is blocking here!!!
console.log('File content:', data);
console.log('End reading file.');
