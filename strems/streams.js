import { createReadStream, createWriteStream } from 'fs';

// Create a readable stream (Read from input.txt)
const readableStream = createReadStream('input.txt', 'utf8');

const writableStream = createWriteStream('output.txt');

// Pipe the readable stream into the writable stream////
readableStream.pipe(writableStream);            /////help in preventing the backpressure handling when it is slow in writing

readableStream.on('end', () => {
  console.log('File successfully copied!');
});
