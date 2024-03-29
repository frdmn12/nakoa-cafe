const express = require("express");
const router = express.Router();
const { productController } = require("../controllers");

// Get All Product
router.get("/", productController.product_index);

// Get Product by Id
router.get("/:id", productController.product_details);

// Get Product Food
router.get("/category/food", productController.product_food);

// Get Product Drink
router.get("/category/drink", productController.product_drink);

// Create Product
router.post("/create", productController.product_create);

// Delete Product
router.delete("/:id", productController.product_delete);

module.exports = router;
