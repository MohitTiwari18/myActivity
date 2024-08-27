const express = require("express");
const app = express();
const main = require("./db/connect"); //import main function from "./db/connect.js"
const products_routes = require("./routes/products"); //import routes
app.get("/", (req, resp) => {
  resp.send("Hi, I am live");
});
app.listen(5000, async () => {
  console.log("This is connected to the Server");
  await main(); //function call to connect with database directed to file - connect.js
});
//Using middleware or to set router
app.use("/api/products", products_routes);
