// Importing moduleA multiple times to check caching
const moduleA1 = require('./moduleA');
const moduleA2 = require('./moduleA');

console.log("Module A First Import:", moduleA1.message);
console.log("Module A Second Import (Cached):", moduleA2.message);

// Testing require.resolve()
console.log("Resolved Path of moduleA:", require.resolve('./moduleA'));

// Checking built-in modules
console.log("Built-in Modules:", require('module').builtinModules);

// Checking __dirname and __filename
console.log("__dirname:", __dirname);
console.log("__filename:", __filename);

// Using fs to read the file written by moduleA
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'text.txt');
console.log("File Content:", fs.readFileSync(filePath, 'utf8'));

//require.cache
console.log("Is moduleA cached?", !!require.cache[require.resolve('./moduleA')]);

// require.main
console.log("Is this the main module?", require.main === module);
