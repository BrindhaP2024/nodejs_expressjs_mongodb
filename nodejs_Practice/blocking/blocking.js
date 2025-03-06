const fs = require('fs');
console.log('Start reading file...');
const data = fs.readFileSync('example.txt', 'utf-8');  // This is blocking here!!!
console.log('File content:', data);
console.log('End reading file.');
