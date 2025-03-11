const fs = require("fs");

fs.stat("examplefile.txt", (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stats);
  console.log(`Is File: ${stats.isFile()}`);
  console.log(`Is Directory: ${stats.isDirectory()}`);
});
