import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./src/config/db.js";
import adminAuthRoutes from "./src/routes/adminAuthRoutes.js";

import serviceRoutes from "./src/routes/serviceRoutes.js";
import galleryRoutes from "./src/routes/galleryRoutes.js";
import testimonialRoutes from "./src/routes/testimonialRoutes.js";
import heroRoutes from "./src/routes/heroRoutes.js";
import aboutRoutes from "./src/routes/aboutRoutes.js";
import projectRoutes from "./src/routes/projectRoutes.js";
import collectionRoutes from "./src/routes/collectionRoutes.js"

dotenv.config();

const app = express();

// ---------------- BASIC MIDDLEWARE ----------------
app.use(cors());
app.use(express.json());

// ---------------- DB ----------------
connectDB();

// ---------------- __dirname FIX (ES MODULE) ----------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------------- STATIC FILES (FINAL & SAFE) ----------------
// This MUST match multer destination exactly
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

// ---------------- ROUTES ----------------
app.get("/", (req, res) => {
  res.send("Backend API is running...");
});

app.use("/api/admin", adminAuthRoutes);

app.use("/api/services", serviceRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/testimonials", testimonialRoutes);

app.use("/api/about", aboutRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/collection", collectionRoutes);


app.use("/api/hero", heroRoutes);

// ---------------- SERVER ----------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
