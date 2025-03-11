const os = require('os');

console.log("\nNode.js os Module - Examples\n");

console.log("EOL:", JSON.stringify(os.EOL));
console.log("availableParallelism:", os.availableParallelism());
console.log("arch:", os.arch());
console.log("constants:", os.constants);
console.log("--------------------------");

console.log("cpus:", os.cpus());
console.log("--------------------------");

console.log("devNull:", os.devNull);
console.log("endianness:", os.endianness());
console.log("freemem:", os.freemem());
console.log("getPriority:", os.getPriority());
console.log("homedir:", os.homedir());
console.log("hostname:", os.hostname());
console.log("loadavg:", os.loadavg());
console.log("machine:", os.machine());
console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");

console.log("networkInterfaces:", os.networkInterfaces());
console.log("platform:", os.platform());
console.log("release:", os.release());
console.log("tmpdir:", os.tmpdir());
console.log("totalmem:", os.totalmem());
console.log("--------------------");
console.log("type:", os.type());
console.log("--------------------");

console.log("uptime:", os.uptime());
console.log("--------------------");

console.log("userInfo:", os.userInfo());
console.log("version:", os.version());
console.log("--------------------");


console.log("\nOS Constants:");
console.log("Priority constants:", os.constants.priority);
console.log("Signal constants:", os.constants.signals);
console.log("Error constants:", os.constants.errno);

console.log("\nPOSIX error constants:");
console.log(os.constants.errno);

console.log("\nWindows-specific error constants:");
console.log(os.constants.windows);

console.log("\ndlopen constants:");
console.log(os.constants.dlopen);

console.log("\nPriority constants:");
console.log(os.constants.priority);

console.log("\nlibuv constants:");
console.log(os.constants.libuv);

console.log("\nAll examples executed successfully!");
