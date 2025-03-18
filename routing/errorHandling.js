import express from "express";
const app = express();

app.use((req, res, next) => {
    const error = new Error("Something went wrong!");
    next(error); 
});

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

app.listen(3000, () => console.log("Server running on port 3000"));

