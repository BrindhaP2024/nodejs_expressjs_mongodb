import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const input = createReadStream('example.txt');
const output = createWriteStream('output.txt.gz');

input.pipe(createGzip()).pipe(output);
