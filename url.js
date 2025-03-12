import { URL } from 'node:url';

const myURL = new URL('https://www.bing.com/search?q=node+js&cvid=1062e68062d54669b2004481ba2ac34a&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYTyBggGEAAYQDIGCAcQABhAMgYICBBFGDwyCAgJEOkHGPxV0gEIMzA4MGowajmoAgiwAgE&FORM=ANAB01&PC=U531');

console.log('Full URL:', myURL.href);
console.log('Origin:', myURL.origin);
console.log('Protocol:', myURL.protocol);
console.log('Host:', myURL.host);
console.log('Hostname:', myURL.hostname);
console.log('Port:', myURL.port || '(default port)');
console.log('Pathname:', myURL.pathname);
console.log('Query String:', myURL.search);
console.log('Hash:', myURL.hash);
console.log('Search Parameters:', myURL.searchParams.toString());

console.log('Search Query:', myURL.searchParams.get('q'));

myURL.searchParams.set('q', 'express.js');
myURL.searchParams.append('lang', 'en');
console.log('Updated URL:', myURL.toString());

const params = new URLSearchParams(myURL.search);
console.log('All keys:', [...params.keys()]); 
console.log('All Values:', [...params.values()]); 


const inputUrl = 'https://www.bing.com/search?q=node+js&cvid=1062e68062d54669b2004481ba2ac34a&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQABhAMgYICBBFGDwyCAgJEOkHGPxV0gEIMzA4MGowajmoAgiwAgE&FORM=ANAB01&PC=U531';

// Parse URL
const urlObj = new URL(inputUrl);

console.log('Parsed URL Object:', {
    protocol: urlObj.protocol,
    host: urlObj.host,
    pathname: urlObj.pathname,
    search: urlObj.search,
    searchParams: Object.fromEntries(urlObj.searchParams),
});

// new params 
urlObj.searchParams.set('newParam', '15676');

console.log('Updated URL:', urlObj.toString());
