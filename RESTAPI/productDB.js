const main = require("./db/connect");
const Product = require("./model/product");
const ProductJson = require("./products.json");
const start = async () => {
  try {
    await main();
    await Product.deleteMany(); //deleteMany mean one data added once, not many time along with refresh.
    await Product.create(ProductJson);
    console.log("success!");
  } catch (error) {
    console.log(error);
  }
};
start();
