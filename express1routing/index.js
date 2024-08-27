//here i am starting express and creating routes using express
const express = require("express");
const app = express();
app.get("", (req, resp) => {
  console.log(req.query.name);
  resp.send("Welcome," + req.query.name);
});

app.listen(5000);
