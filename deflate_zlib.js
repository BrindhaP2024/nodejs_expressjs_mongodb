import { deflate } from 'zlib';

deflate('Brindha Palani', (err, buffer) => {
    if (!err) {
      console.log('Compressed:', buffer.toString('utf-8'));
      console.log('Compressed:', buffer.toString('hex'));
      console.log('Compressed:', buffer.toString('base64'));


    }
  });
  