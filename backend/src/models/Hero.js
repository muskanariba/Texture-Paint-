import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  button1: String,
  button2: String,
  backgroundImage: String
});

export default mongoose.model("Hero", heroSchema);
