import { dirname, basename, extname, join } from "path";

const filePath = "files_folders/examplefile.txt";

console.log("Directory Name:", dirname(filePath));
console.log("Base Name:", basename(filePath));
console.log("Extension Name:", extname(filePath));
console.log("Join Paths:", join(__dirname, "data", "examplefile.txt"));
