
const fs = require('fs');


const path = require('node:path');

module.exports = {
    message: "Hello from moduleA!",
    showPath: () => console.log("Current Directory:", __dirname),
};

console.log("Module A Loaded");

// Writing to a file (example of fs usage)
fs.writeFileSync(path.join(__dirname, 'text.txt'), "learn node js!");
