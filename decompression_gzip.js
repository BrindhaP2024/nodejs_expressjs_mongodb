const fs = require('fs')
const zlib = require('zlib')
const input = fs.createReadStream('output.txt.gz');
const output = fs.createWriteStream('decompressed.txt');

input.pipe(zlib.createGunzip()).pipe(output);
