import { open, close } from "fs";

open("examplefile.txt", "r", (err, fd) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`File Descriptor: ${fd}`);
  close(fd, () => console.log("File closed"));
});
