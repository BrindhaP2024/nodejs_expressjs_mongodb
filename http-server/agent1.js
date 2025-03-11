const http = require('http');
const path = require('path');

const server = http.createServer((req, res) => {
  let responseText;
  if (req.url === '/') {
    responseText = 'Welcome to the Home Page!';
  } else if (req.url === '/about') {
    responseText = 'About Page: Node.js HTTP Agent demo';
  } else {
    res.statusCode = 404;
    responseText = 'Not Found';
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(responseText);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  makeClientRequests();
});



const agentOptions = {
  keepAlive: true,    
  maxSockets: 3,        
  maxFreeSockets: 2,    
  timeout: 30000       
};

const agent = new http.Agent(agentOptions);

const originalCreateConnection = agent.createConnection;
agent.createConnection = function(options, callback) {
  console.log('Creating new connection with options:', options);
  return originalCreateConnection.call(this, options, callback);
};

const agentKey = agent.getName({ host: 'localhost', port: PORT});
console.log('Agent Name Key:', agentKey);


function makeClientRequests() {
  // Endpoints to request
  const endpoints = ['/', '/about', '/nonexistent'];

  endpoints.forEach((endpoint) => {
    const options = {
      host: 'localhost',
      port: PORT,
      path: endpoint,
      agent: agent 
    };

    http.get(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        console.log(`Response from "${endpoint}": ${data}`);
      });
    }).on('error', (err) => {
      console.error(`Error with request to "${endpoint}":`, err);
    });
  });

  setTimeout(() => {
    console.log('Free Sockets:', agent.freeSockets);
    console.log('Active Sockets:', agent.sockets);
    console.log('Pending Requests:', agent.requests);
    console.log('Max Free Sockets:', agent.maxFreeSockets);
    console.log('Max Sockets per host:', agent.maxSockets);

console.log('\nDestroying agent and closing all sockets...');
    agent.destroy();

    server.close(() => {
      console.log('Server closed.');
    });
  }, 3000);
}
 