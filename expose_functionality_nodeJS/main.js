const a = require("./a");
const b = require("./b");

console.log("In module A, B says:", a.getBMessage());
console.log("In module B, A says:", b.getAMessage());
