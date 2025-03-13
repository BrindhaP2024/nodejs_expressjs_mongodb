import { createSign, createVerify } from 'crypto';
import { readFileSync } from 'fs';


const privateKey = readFileSync('private.pem', 'utf8');
const publicKey = readFileSync('public.pem', 'utf8');

const sign = createSign('sha256');
sign.update('This is my message');
sign.end();

const signature = sign.sign(privateKey, 'hex');
console.log('Signature:', signature);

const verify = createVerify('sha256');
verify.update('This is my message');
verify.end();

const isVerified = verify.verify(publicKey, signature, 'hex');
console.log('Signature Verified:', isVerified); // ✅ Should print `true`
