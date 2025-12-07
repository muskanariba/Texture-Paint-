import Product from "../models/Product.js";

// GET ALL
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ADD PRODUCT
export const addProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const image = req.file ? req.file.filename : null;

    const newProduct = new Product({
      name,
      price,
      description,
      image,
    });

    await newProduct.save();

    res.json({ success: true, message: "Product added", product: newProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error adding product" });
  }
};

// UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const updatedData = {
      name,
      price,
      description,
    };

    if (req.file) {
      updatedData.image = req.file.filename;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    res.json({ success: true, message: "Product updated", updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "Update failed" });
  }
};

// DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Delete failed" });
  }
};
