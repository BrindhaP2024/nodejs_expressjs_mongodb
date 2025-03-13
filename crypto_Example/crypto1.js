import crypto from 'crypto';
import { readFileSync } from 'fs';

const publicKey = readFileSync('public.pem', 'utf8');
const privateKey = readFileSync('private.pem', 'utf8');

function encryptRSA(data) {
    return crypto.publicEncrypt(
        {
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING, // Correct padding
        },
        Buffer.from(data)
    ).toString('base64');
}

function decryptRSA(encryptedData) {
    return crypto.privateDecrypt(
        {
            key: privateKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING, // Correct padding
        },
        Buffer.from(encryptedData, 'base64')
    ).toString();
}

// Usage
const encrypted = encryptRSA('Hello RSA!');
console.log('Encrypted:', encrypted);

const decrypted = decryptRSA(encrypted);
console.log('Decrypted:', decrypted);
