import { inspect, types, deprecate, format, promisify, callbackify } from 'util';
import fs from 'fs';

console.log(format('%s is %d years old', 'Sakshi', 23));

//util.inspect() - Convert objects into readable strings
const object = {
    level1: {
        level2: {
            level3: {
                message: "Hello, World!"
            }
        }
    }
};

console.log(inspect(object, { depth: 1 }));
console.log(inspect(object, { depth: 2 }));
console.log(inspect(object, { depth: null }));

// util.promisify() - Convert callback function to promise-based function
const readFileAsync = promisify(fs.readFile);

readFileAsync('example.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.error(err));

//util.callbackify() - Convert promise-based function into a callback-style function
async function asyncFunc() {
    return "Hello, Brindha!";
}

const callbackFunc = callbackify(asyncFunc);

callbackFunc((err, result) => {
    if (err) throw err;
    console.log(result);
});

// util.types() - Type Checking Functions
console.log(types.isDate(new Date())); // true
console.log(types.isDate('2024-03-12')); // false

console.log(types.isRegExp(/hello/)); 
console.log(types.isRegExp(new RegExp('test'))); 
console.log(types.isRegExp('hello')); 
console.log(types.isRegExp({})); 
console.log(types.isRegExp(null)); 

const promise = new Promise(resolve => resolve("Hello"));
const asyncFunction = async () => "World";

console.log(types.isPromise(promise)); // true
console.log(types.isPromise(asyncFunction())); // true
console.log(types.isPromise({ then: () => {} })); // false
console.log(types.isPromise(123)); // false
console.log(types.isPromise(null)); // false



//util.deprecate() - Mark function as deprecated with a warning message
const oldFunction = deprecate(() => {
    console.log('This function is deprecated!');
}, 'Warning: oldFunction() is deprecated!');

oldFunction();
