const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.write("Bad Request");
      console.error('Error reading file:', err);
    } else {
      res.write(data);
    }
    res.end();
  });
});

const port = 3001;
server.listen(port, () => {
  console.log('Server is running on port ' + port);
});
