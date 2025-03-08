import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);
   const _dirname = path.dirname(_filename);
   
   const server = http.createServer((req,res)=>{
      const filePath = path.join(_dirname,"example.txt");

    fs.readFile(filePath,"utf-8",(err,data) => {
     if (err){
        res.writeHead(500,{"content-type":"text/plain"});
        res.end("error reading file");
     }else {
        res.writeHead(200,{"content-type": "text/plain"});
        res.end(data);
     }
    });
});
server.listen(3000,() =>{
    console.log("Server is running on port 3000");
});
