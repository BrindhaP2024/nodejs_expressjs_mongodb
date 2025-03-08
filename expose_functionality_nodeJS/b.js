console.log("Loading module B");
exports.getAMessage = function () {
    const a = require("./a"); 
    return a.message;
};
exports.message = "Hello from B";
