import querystring from 'querystring';

const queryString = 'q=node+js&cvid=1062e68062d54669b2004481ba2ac34a';

// **1. Parsing a Query String into an Object**
const parsedObj = querystring.parse(queryString);
console.log('Parsed Object:', parsedObj);

const stringifiedQuery = querystring.stringify(parsedObj);
console.log('Stringified Query:', stringifiedQuery);
const encoded = querystring.escape('node js');
console.log('Encoded String:', encoded);

const decoded = querystring.unescape(encoded);
console.log('Decoded String:', decoded);
