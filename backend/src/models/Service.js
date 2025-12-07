import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
   description: String ,

    icon: String
 // optional if you want
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);
