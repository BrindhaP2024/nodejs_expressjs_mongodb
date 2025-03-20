import express from 'express';
import compression from 'compression';
import pino from 'pino';
import { createClient } from 'redis';

const app = express();
const logger = pino();
const client = createClient();

// Use Gzip Compression
app.use(compression());

// Example API with Redis Caching
app.get('/data', async (req, res) => {
    try {
        const cache = await client.get('myData');
        if (cache) return res.send(JSON.parse(cache));

        const freshData = { message: 'Hello from Express!' }; // Simulate fetching from DB
        client.setex('myData', 3600, JSON.stringify(freshData));
        res.send(freshData);
    } catch (error) {
        logger.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

process.on('SIGTERM', () => {
    logger.info('Shutting down server...');
    process.exit(0);
});

app.listen(3000, () => 
    logger.info('Server running on port 3000'));
