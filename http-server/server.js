import { Agent, createServer, request } from "http";
import { Server } from "ws";

const agent = new Agent({ keepAlive: true, maxSockets: 10 });

// Create an HTTP Server
const server = createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Welcome to the Home Page</h1>");
    } 
    else if (req.method === "POST" && req.url === "/data") {
        let body = "";
        req.on("data", chunk => { body += chunk; });
        req.on("end", () => {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Data received", data: body }));
        });
    } 
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

// Start HTTP Server on Port 3000
server.listen(3000, () => {
    console.log("HTTP Server running at http://localhost:3000");
});

const wss = new Server({ server });

wss.on("connection", (ws) => {
    console.log("WebSocket Client Connected");

    ws.on("message", (message) => {
        console.log("Received:", message);
        ws.send("Message received: " + message);
    });

    ws.on("close", () => console.log("WebSocket Client Disconnected"));
});

console.log("WebSocket Server running on ws://localhost:3000");

// HTTP Client to Make an API Request
const options = {
    hostname: "jsonplaceholder.typicode.com",
    path: "/posts/1",
    method: "GET",
    agent: agent,
};

const req = request(options, (res) => {
    let data = "";
    res.on("data", (chunk) => { data += chunk; });
    res.on("end", () => { console.log("API Response:", data); });
});

req.on("error", (err) => { console.error("Request Error:", err); });
req.end();
