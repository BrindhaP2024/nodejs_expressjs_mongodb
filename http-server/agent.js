const http = require('http');
const fs = require('fs');
const path = require('path');

const agent = new http.Agent({
    keepAlive: true,
    maxSockets: 10,
    maxFreeSockets: 5,
    timeout: 6000  // 60 seconds
  });
  agent.createConnection({ host: 'example.com', port: 80 }, (err, socket) => {
    if (err) throw err;
    console.log('New connection established.');
  });
  console.log('Max free sockets:', agent.maxFreeSockets);
  console.log('Max sockets per host:', agent.maxSockets);
  