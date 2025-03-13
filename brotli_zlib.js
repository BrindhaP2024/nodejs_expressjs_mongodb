import { brotliCompress } from 'zlib';
brotliCompress(Buffer.from('Hello ZLib !'), (err, buffer) => {
    if (!err) {
      console.log('Brotli Compressed:', buffer.toString('base64'));
    }
  });
  