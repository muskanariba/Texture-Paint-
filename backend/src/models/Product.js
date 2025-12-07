import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    image: String, // store file name
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
