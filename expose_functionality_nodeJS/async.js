const fs = require('fs');

console.log("Start");

fs.readFile('text1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});

console.log("End");
