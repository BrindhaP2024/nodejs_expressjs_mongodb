//using console.logs
console.log("Hello, Node.js!"); 
console.log("The current year is:", new Date().getFullYear());



const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {
    console.log(`Hello, ${name}!`);
    rl.close();
});

console.log("Arguments received:", process.argv);
const args = require("minimist")(process.argv.slice(2));
console.log("Port:", args.port);
console.log("Mode:", args.mode);
