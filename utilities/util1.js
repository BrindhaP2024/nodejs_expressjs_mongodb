// const util = require('node:util');

import * as util from 'node:util';

async function asyncFun() {
    return "utilities";
}
const callbackFunc = util.callbackify(asyncFun);
callbackFunc((err,result) =>{
 if (err) throw err;
 console.log(result);
 
});

const debug = util.debuglog('server');
debug('This is a debug message.'); 

const obj = { name: 'debbuger', number: 30, nested: { key: 'value' } };
console.log(util.inspect(obj, { depth: 1, colors: true }));
console.log(util.getSystemErrorName(-2)); 
console.log(util.getSystemErrorMessage(2));
