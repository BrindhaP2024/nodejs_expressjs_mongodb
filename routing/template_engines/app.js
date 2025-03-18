import express from 'express';
const app = express();

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/', (req, res) => {
  const data = {
    name: 'Brindha',
    age: 23,
    hobbies: ['Reading', 'Coding', 'Testing']
  };

  res.render('index', data);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
