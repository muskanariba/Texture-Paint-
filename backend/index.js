import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import adminAuthRoutes from "./src/routes/adminAuthRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import serviceRoutes from "./src/routes/serviceRoutes.js";
import galleryRoutes from "./src/routes/galleryRoutes.js";
import testimonialRoutes from "./src/routes/testimonialRoutes.js";
import heroRoutes from "./src/routes/heroRoutes.js"
import aboutRoutes from "./src/routes/aboutRoutes.js"
import projectRoutes from "./src/routes/projectRoutes.js"
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connect
connectDB();

// Default Route
app.get("/", (req, res) => {
  res.send("Backend API is running...");
});

app.use("/api/admin", adminAuthRoutes);
app.use("/api/products", productRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/projects", projectRoutes);


app.use("/uploads", express.static("uploads"));

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`);
});
