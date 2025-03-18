import express from 'express';
import fs from 'fs';
import { getUserById } from './usercontroller_err.js';

const app = express();

app.use(express.json());

app.get('/sync-error', (req, res, next) => {
  try {
    throw new Error('Synchronous error occurred!');
  } catch (err) {
    next(err);
  }
});

app.get('/async-error', (req, res, next) => {
  fs.readFile('/non-existent-file', (err, data) => {
    if (err) {
      next(err); 
    } else {
      res.send(data);
    }
  });
});

app.get('/async-await-error', async (req, res, next) => {
  try {
    const user = await getUserById(req.query.id); 
   res.send(user);
  } catch (err) {
    next(err);
  }
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err); 
});

app.use((err, req, res, next) => {
  console.error(err.stack);

  if (res.headersSent) {
    return next(err); 
  }

  res.status(err.status || 500);

  if (app.get('env') === 'development') {
    res.json({
      message: err.message,
      error: err.stack,
    });
  } else {
    res.json({
      message: err.message,
    });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
