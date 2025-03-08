
const fs = require('fs');


const path = require('node:path');

module.exports = {
    message: "Hello from moduleA!",
    showPath: () => console.log("Current Directory:", __dirname),
};

// Demonstrating caching
console.log("Module A Loaded");

// Writing to a file (example of fs usage)
fs.writeFileSync(path.join(__dirname, 'text.txt'), "Hello, Node.js!");
