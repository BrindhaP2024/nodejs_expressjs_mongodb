const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/data", (req, res) => {
  res.json({ message: "CORS is enabled!" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
