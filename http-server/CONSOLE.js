const x = 1;
const y = 2;
const z = 3;

console.count(
  'The value of x is ' + x + ' and has been checked .. how many times?'
);

console.count(
  'The value of x is ' + x + ' and has been checked .. how many times?'
);

console.count(
  'The value of y is ' + y + ' and has been checked .. how many times?'
);
const oranges = ['html', 'css'];
const apples = ['one'];

oranges.forEach(fruit => {
  console.count(fruit);
});
apples.forEach(fruit => {
  console.count(fruit);
});

console.countReset('css');

oranges.forEach(fruit => {
  console.count(fruit);
});
