import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  category: { type: String, default: "" },
  link: { type: String, default: "" },
  image: { type: String, default: "" }, // store image path or URL
  status: { type: String, enum: ["active","inactive"], default: "active" },
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);
export default Project;
