import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3000;

app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Welcome to the Express.js Cookie Example! Use /set, /get, /update, /delete.");
});

app.get("/set", (req, res) => {
    res.cookie("user", "JohnDoe", {
        maxAge: 1000 * 60 * 60 * 24, 
        httpOnly: true, 
        secure: false,
        sameSite: "Lax"
    });
    res.send("Cookie 'user' has been set!");
});

app.get("/get", (req, res) => {
    const cookies = req.cookies;
    res.json({ cookies });
});

app.get("/update", (req, res) => {
    res.cookie("user", "JaneDoe", {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        httpOnly: true
    });
    res.send("Cookie 'user' has been updated!");
});

app.get("/delete", (req, res) => {
    res.clearCookie("user");
    res.send("Cookie 'user' has been deleted!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
