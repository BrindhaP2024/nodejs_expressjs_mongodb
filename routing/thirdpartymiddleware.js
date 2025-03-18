const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev")); 
app.get("/", (req, res) => {
    res.send("Hello, Middleware!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
