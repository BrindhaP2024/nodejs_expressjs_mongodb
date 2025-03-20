import express, { json } from "express";
const app = express();
app.use(json()); 

let users = [
  { id: 1, name: "Larvel", email: "larvel@example.com" },
  { id: 2, name: "Jack", email: "jacl@example.com" }
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1, // Auto-increment ID
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.status(201).json(newUser); // 201 = Created
});

app.put("/users/:id", (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: "User not found" });

  users[userIndex] = { id: parseInt(req.params.id), name: req.body.name, email: req.body.email };
  res.json(users[userIndex]);
});

app.patch("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });

  if (req.body.name) user.name = req.body.name;
  if (req.body.email) user.email = req.body.email;

  res.json(user);
});

// 📌 DELETE - Remove a user
app.delete("/users/:id", (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.json({ message: "User deleted successfully" });
});

// 📌 OPTIONS - Show allowed HTTP methods
app.options("/users", (req, res) => {
  res.set("Allow", "GET, POST, PUT, PATCH, DELETE, OPTIONS").send();
});

// 📌 HEAD - Return headers without response body
app.head("/users", (req, res) => {
  res.set("Custom-Header", "Hello-World").status(200).end();
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
