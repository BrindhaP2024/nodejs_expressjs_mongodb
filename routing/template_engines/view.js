const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("images"));

app.get("/", (req, res) => {
  const user = { name: "John Doe", age: 30 };
  res.render("index", { user });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
