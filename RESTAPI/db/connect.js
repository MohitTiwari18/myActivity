//use mongoose to connect with database
const mongoose = require("mongoose");
//require("./config");
const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/RESTAPI");
  console.log("connected to the database");
  //   const ProductSchema = new mongoose.Schema({
  //     name: String,
  //     price: Number,
  //   });
  //   const ProductsModel = mongoose.model("Products", ProductSchema);
  //   let data = new ProductsModel({ name: "m8", price: 1000 });
  //   let result = await data.save();
  //   console.log(result);
};
module.exports = main;
