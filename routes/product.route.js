const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product.controller.js");

//getting products
router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);

//adding new product
router.post("/", createProduct);

//deleting a product
router.delete("/:id", deleteProduct);

//updating existing product
router.put("/:id", updateProduct);

module.exports = router;
