console.log("Loading module A");
exports.getBMessage = function () {
    const b = require("./b"); 
    return b.message;
};
exports.message = "Hello from A";
