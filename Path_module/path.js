const path = require('path');
console.log(path.normalize('/home//user/docs/../examplefile.txt'));

console.log("\nNode.js path Module - Examples\n");

const filePathWin = "C:\\Users\\John\\Documents\\examplefile.txt";
const filePathPosix = "/home/john/Documents/file.txthome//user/docs/../examplefile.txt";

console.log("basename:", path.basename(filePathWin));
console.log("basename with suffix:", path.basename(filePathWin, ".txt"));

console.log("delimiter:", path.delimiter);

console.log("dirname:", path.dirname(filePathWin));

console.log("extname:", path.extname(filePathWin));

const pathObject = { dir: "/home/john/Documents", base: "file.txt" };
console.log("format:", path.format(pathObject));

console.log("isAbsolute (Windows):", path.isAbsolute(filePathWin));
console.log("isAbsolute (POSIX):", path.isAbsolute(filePathPosix));

console.log("join:", path.join("/home", "user", "docs", "file.txt"));

console.log("normalize:", path.normalize("/home//user/docs/../file.txt"));

console.log("parse:", path.parse(filePathWin));

console.log("POSIX join:", path.posix.join("/home", "user", "docs", "file.txt"));
console.log("-------------");

console.log("relative:", path.isAbsolute("/home/user/docs", "/home/user/photos"));

console.log("resolve:", path.resolve("docs", "file.txt"));

console.log("path.sep:", path.sep);

console.log("toNamespacedPath:", path.toNamespacedPath(filePathWin));

console.log("Windows join:", path.win32.join("C:\\Users", "John", "file.txt"));

console.log("Windows path separator:", path.win32.sep);
console.log("POSIX path separator:", path.posix.sep);


