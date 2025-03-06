//process.argv - command line array
console.log(process.argv[0]);  //path to the node/bin
console.log(process.argv[1]); //here the path to the file that we are running
console.log(process.argv[2]); //args we are passing by the user

// const nameArg = process.argv[2] || "not-undefined";
// console.log(nameArg);

function capitalize(str){
    console.log("Before:" ,str);
    return str.trim(). //removes white space
    toLowerCase().
    split(" ").
    map(word =>word.charAt(0).toUpperCase() + word.slice(1).
    join(" "));
}

