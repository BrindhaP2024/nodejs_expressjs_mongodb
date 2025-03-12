const buf1 = Buffer.from(' brindha');
console.log(buf1[0]);
console.log(buf1[1]);
console.log(buf1[2]);
console.log(buf1[3]);
console.log(buf1[4]);
console.log(buf1[5]);
console.log(buf1[6]);
console.log(buf1[7]);


console.log(buf1);  //aSCII IN hex value

console.log(buf1.toString());
console.log(buf1.length);
console.log(buf1.byteLength);
console.log(buf1.byteOffset);
console.log(buf1.BYTES_PER_ELEMENT);
console.log(buf1.readBigInt64BE());

for(const i of buf1){
    console.log(i);
    
}
//alloc 
console.log("-------");

const buf = Buffer.alloc(4);
buf.write('brindha'); //actual content to ve passed in a write
console.log(buf[0]);
console.log(buf[1]);
console.log(buf[2]);
console.log(buf[3]);
console.log(buf[4]);//taking in only 4 places further undefined
console.log("----------");

console.log(buf);
const copyBuf = Buffer.alloc(7);
copyBuf.set(buf);
console.log(copyBuf);

const bufA = Buffer.from('Node ');
const bufB = Buffer.from('JS');

const concat_buffer = Buffer.concat([bufA,bufB]);
console.log(concat_buffer.toString(), concat_buffer.toLocaleString());

console.log(concat_buffer.toJSON());

bufB.copy(bufA, 2,0,0); 
// Copy from bufA (from index 1 to 4) into bufB at index 3
console.log("--------");

console.log(bufB.toString());

//encoding
const bufEncode = Buffer.from('Encode action!','latin1');
console.log(bufEncode.toString('base64')); 

// buffer swaping
const buf64 = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x9A, 0xBC, 0xDE, 0xF0]);
console.log(buf64);  

buf64.swap32();
console.log(buf64);
buf64.swap16();
console.log(buf64); 
buf64.swap64();
console.log(buf64);



