import crypto, { createHash } from 'crypto';
if (!crypto) {
    console.error('Crypto module is not available!');
} else {
    console.log('Crypto module is available.');
}
// comments to create private ,public key
// openssl genrsa -out private.pem 2048
// openssl rsa -in private.pem -outform PEM -pubout -out public.pem
// hashing -one way enc...


const hash = createHash('sha512')
                   .update('Hello Crypto! basic hash encryption here is happening here')
                   .digest('hex');

console.log('SHA-256 Hash:', hash.length);
console.log('SHA-256 Hash:', hash);

//HASHED Message authentication code -HMAC

const hmac = crypto.createHmac('sha256','secretkeyishere')
 .update('Helllo cypertext')
 .digest('hex');
 console.log(hmac);
 
console.log('Hmac:',hmac.length);

//AES sym encryption
const alg = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text){
    const cipher = crypto.createCipheriv(alg,key,iv);
    let encrypts = cipher.update(text,'utf-8','hex');
    encrypts += cipher.final('hex');
    return {encryptedData: encrypts, iv:iv.toString('hex')};
}
const encrypted = encrypt(alg)
console.log('Encrypted:', encrypted.encryptedData);

function decrypt(encryptedData,ivHex){
    const decipher = crypto.createDecipheriv(alg,key,Buffer.from(ivHex,'hex'));
    let decrypted = decipher.update(encryptedData,'hex','utf-8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// const decrypted = decrypt(encrypted.encryptedData,encrypted.iv);
// console.log(decrypted);

// Decrypt the text
const decrypted = decrypt(encrypted.encryptedData, encrypted.iv);
console.log('Decrypted:', decrypted);