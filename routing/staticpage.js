const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express Static Server</h1> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpLZY4G_ZM8gYW3Mc68SG3cOUdnTYp1c9VQ&s" width="100">');
    res.send('<h1>Welcome to Express Static Server</h1> <img src="expressJS/routing/images/image.jpeg" width="100">');

});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
