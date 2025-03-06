import { readFileSync } from 'fs';
console.log('Start reading file...');
const data = readFileSync('example.txt', 'utf-8');  // This is blocking here!!!
console.log('File content:', data);
console.log('End reading file.');
console.log(global);





