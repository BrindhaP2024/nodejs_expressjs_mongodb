import { readFile } from 'fs';

console.log('Start reading file...');
readFile('example.txt', 'utf-8', (err, data) => { 
  if (err) throw err;
  console.log('File content:', data);
});
console.log('End reading file.');


