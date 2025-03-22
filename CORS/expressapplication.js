import express, { json } from 'express';
const app = express();

app.use(json());

app.get('/', (req, res) => {
    const name = req.query.name || 'Guest';
    res.send(`Hello, ${name}! Welcome to the Express app.`);
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `User ID: ${userId}` });
});

app.post('/create', (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ error: 'Name and age are required' });
    }

    res.status(201).json({
        message: 'User created successfully',
        data: { name, age }
    });
});

app.delete('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `User with ID ${userId} has been deleted` });
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});
