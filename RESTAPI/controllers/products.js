//use mongoose to connect with database
const Product = require("../model/product");
const getAllProducts = async (req, res) => {
  //filteration and search functionality
  const { company, name, featured } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (featured) {
    queryObject.featured = featured;
  }
  //advance search functionality using mongodb regex
  if (name) {
    queryObject.name = {
      $regex: name,
      $options: "i",
    };
  }
  console.log(queryObject);
  //filteration and search functionality end here
  const myData = await Product.find(queryObject);
  res.status(200).json({ myData });
};
const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query);
  console.log(req.query);
  res.status(200).json({ myData });
};
module.exports = { getAllProducts, getAllProductsTesting };
