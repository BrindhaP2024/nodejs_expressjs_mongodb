const express = require("express");
const app = express();
const router = express.Router();

app.use((req, res, next) => {
    console.log("Middleware executed!");
    next();
});

app.get("/", (req, res) => {
    res.send("Express Middlewares");
});

router.use((req, res, next) => {
    console.log("Router Middleware executed!");
    next();
});

router.get("/", (req, res) => {
    res.send("API Home Page");
});

app.use("/api", router);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
