//here we will learn routing in node.js
const express = require("express");
const app = express();
app.get("/", (req, resp) => {
  resp.send([
    {
      Name: "Mohit",
      Email: "mohit@gmail.com",
    },
  ]);
});
app.get("/About", (req, resp) => {
  resp.send([
    {
      companyName: "automateazy",
      companyPlace: "Gurgaon, Delhi",
    },
  ]);
});
app.listen(5001);
