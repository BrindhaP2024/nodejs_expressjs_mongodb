const http = require("http");
const url = require("url");

const server = http.createServer((req,res) =>{
    const parsedUrl = url.parse(req.url,true);
    console.log(parsedUrl);
    
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>Home page</h1>");
});

server.listen(3000, () =>{
    console.log("server running on http://localhost:3000");
});
