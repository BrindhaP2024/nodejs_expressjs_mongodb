const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

const corsOptions = {
  origin: ["http://localhost:3000", "http://google.com"],
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/public", (req, res) => {
  res.json({ message: "This route is accessible from any allowed origin!" });
});

app.get("/restricted", cors(), (req, res) => {
  res.json({ message: "This route allows cross-origin access explicitly!" });
});

app.post("/submit", (req, res) => {
  const data = req.body;
  res.json({ message: "Data received successfully!", receivedData: data });
});

app.options("/submit", cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
