const express = require("express");
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data (in-memory storage for simplicity)
let data = [(name = "mohit tiwari"), (branch = "ECE")];

// GET endpoint
app.get("/", (req, res) => {
  res.json(data);
});

// POST endpoint
app.post("/", (req, res) => {
  const newApi = req.body;
  data.push(newApi);
  res.status(201).json(newItem);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
