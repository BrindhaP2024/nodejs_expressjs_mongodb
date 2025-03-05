// Module js 
import {createServer} from 'node:http';
const hostname = '127.0.0.1';
const port = 4000;
const server = createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/plain');
    res.end("Node JS started!");

});
server.listen(port,hostname,() =>{
    console.log(`server is running at http://${hostname}:${port}/`);
    
});