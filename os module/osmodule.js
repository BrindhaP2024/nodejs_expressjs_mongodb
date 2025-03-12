// import { EOL, availableParallelism, arch, constants, cpus, devNull, freemem, getPriority, homedir, hostname, machine, networkInterfaces, platform, release, tmpdir, totalmem, type, uptime, userInfo, version } from 'os';

import os from 'node:os';
import constants from 'node:constants';
console.log(" OS Module - Examples");

// console.log("EOL:", JSON.stringify(EOL));
// console.log("availableParallelism:", availableParallelism());
console.log("arch:", os.arch());
console.log("constants:", os.constants);
console.log("--------------------------");

console.log("cpus:", os.cpus());
console.log("--------------------------");

console.log("devNull:", os.devNull);
console.log("freemem:", os.freemem());
console.log("getPriority:", os.getPriority());
console.log("homedir:",os.homedir());
console.log("hostname:", os.hostname());

console.log("machine:",os.machine());
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


console.log(os.arch());
console.log(os.type());
console.log(os.homedir());


