import { EOL, availableParallelism, arch, constants, cpus, devNull, freemem, getPriority, homedir, hostname, machine, networkInterfaces, platform, release, tmpdir, totalmem, type, uptime, userInfo, version } from 'os';

console.log(" OS Module - Examples");

console.log("EOL:", JSON.stringify(EOL));
console.log("availableParallelism:", availableParallelism());
console.log("arch:", arch());
console.log("constants:", constants);
console.log("--------------------------");

console.log("cpus:", cpus());
console.log("--------------------------");

console.log("devNull:", devNull);
console.log("freemem:", freemem());
console.log("getPriority:", getPriority());
console.log("homedir:", homedir());
console.log("hostname:", hostname());

console.log("machine:", machine());
console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");

console.log("networkInterfaces:", networkInterfaces());
console.log("platform:", platform());
console.log("release:", release());
console.log("tmpdir:", tmpdir());
console.log("totalmem:", totalmem());
console.log("--------------------");
console.log("type:", type());
console.log("--------------------");

console.log("uptime:", uptime());
console.log("--------------------");

console.log("userInfo:", userInfo());
console.log("version:", version());
console.log("--------------------");

console.log("\nPOSIX error constants:");
console.log(constants.errno);


