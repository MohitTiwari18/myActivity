const express = require("express");
const router = express.Router();
//import functions as a controllers
const {
  getAllProducts,
  getAllProductsTesting,
} = require("../controllers/products");
//crearing routes
router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
module.exports = router;
