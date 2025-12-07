import express from "express";
import upload from "../middleware/upload.js";
import {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";

const router = express.Router();

// Get all products
router.get("/", getProducts);

// Add product with image
router.post("/add", upload.single("image"), addProduct);

// Update product
router.put("/:id", upload.single("image"), updateProduct);

// Delete product
router.delete("/:id", deleteProduct);

export default router;
