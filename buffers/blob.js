import { Blob } from 'buffer';
import { writeFileSync} from 'fs';
import { readFile } from 'fs/promises';

const blob = new Blob(['Hello, this is a Blob example!'], { type: 'text/plain' });

console.log(blob.size);
console.log(blob.type);

blob.text().then(text => console.log(text));

blob.arrayBuffer().then(buffer => {
    console.log(new Uint8Array(buffer));
});

blob.arrayBuffer().then(buffer => {
    writeFileSync('example.txt', Buffer.from(buffer));
    console.log('Blob saved');
});

const fileData = readFile('example.txt');
const fileBlob = new Blob([fileData], { type: 'text/plain' });

fileBlob.text().then(text => console.log(text));
