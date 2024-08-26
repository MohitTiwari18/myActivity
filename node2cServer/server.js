//get data at client side using node.js server
const express = require("express");
const app = express();
const port = 5001;
//middleware to parse json bodies
app.use(express.json());
//define a router
app.get("/", (req, resp) => {
  resp.json({ message: "hello, Welcome to the API" });
});

//start server
app.listen(port, () => {
  console.log("server is running now...");
});
