import express from 'express';
import { createClient } from 'redis';

const app = express();
const client = createClient();

client.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
  await client.connect();
  console.log('Connected to Redis');
})();

app.get('/data', async (req, res) => {
  const cacheData = await client.get('myData');

  if (cacheData) {
    return res.send(JSON.parse(cacheData));
  }

  const freshData = { message: "Fresh data from DB!", timestamp: new Date() };
  await client.setEx('myData', 3600, JSON.stringify(freshData));
  
  res.send(freshData);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
