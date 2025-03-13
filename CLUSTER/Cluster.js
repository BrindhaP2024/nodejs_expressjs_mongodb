import cluster from "cluster";
import http from "http";
import { cpus } from "os";

if (cluster.isPrimary) {
  const numCPUs = cpus().length;

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });

} else {
  const port = 3000 + cluster.worker.id; 

  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello from Worker ${process.pid} on port ${port}`);
  }).listen(port);

  console.log(`Worker ${process.pid} started on port ${port}`);
}
