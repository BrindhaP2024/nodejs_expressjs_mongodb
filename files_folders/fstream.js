const fs = require("fs");

const readStream = fs.createReadStream("largeFile.txt", { highWaterMark: 64 * 1024 }); // 64 KB chunk size

readStream.on("data", (chunk) => {
  console.log(`Received ${chunk.length} bytes`);
});
