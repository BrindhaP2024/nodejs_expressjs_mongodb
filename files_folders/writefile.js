const fs = require('fs');

fs.writeFile('examplefile.txt', 'Node JS File systems re-written!', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully');
});
