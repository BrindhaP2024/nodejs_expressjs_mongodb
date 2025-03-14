const util = require('util');
const fs = require('fs');

// 1. Callbackify - Convert async to callback-based function
async function asyncFunction() {
  return 'callback function';
}
const callbackFunction = util.callbackify(asyncFunction);
callbackFunction((err, result) => {
  if (err) throw err;
  console.log('Callbackify:', result);
});

const readFile = util.promisify(fs.readFile);
readFile('package.json', 'utf8')
  .then((data) => console.log('Promisify Read File:', data.slice(0, 50)))
  .catch(console.error);

const debug = util.debuglog('app');
debug('This is a debug message. Run with NODE_DEBUG=app to check this one.');

const deprecatedFn = util.deprecate(() => {
  console.log('Deprecated function called!');
}, 'This function is deprecated.');
deprecatedFn();

console.log(util.format('%s is %d years old', 'John', 25));

const obj = { name: 'John', age: 30, nested: { key: 'value' } };
console.log(util.inspect(obj, { depth: 1, colors: true }));

console.log('System Error Name:', util.getSystemErrorName(2));

function Parent() { this.name = 'Parent'; }
function Child() { Parent.call(this); this.name = 'Child'; }
util.inherits(Child, Parent);
console.log(new Child().name);

const mime = new util.MIMEType('text/html; charset=utf-8');
console.log('MIME Type:', mime.type, mime.subtype);

const args = util.parseArgs();
console.log('Parsed Args:', args);

const encoder = new util.TextEncoder();
const encodedText = encoder.encode('Hello');
console.log('Encoded Text:', encodedText);
const decoder = new util.TextDecoder();
console.log('Decoded Text:', decoder.decode(encodedText));

console.log('Is Promise:', util.types.isPromise(Promise.resolve()));
console.log('Is Set:', util.types.isSet(new Set()));
console.log('Is RegExp:', util.types.isRegExp(/abc/));

const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source);
console.log('Merged Object:', target);
console.log('Is Array:', Array.isArray([1, 2, 3]));
