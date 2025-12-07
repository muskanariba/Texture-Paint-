import express from "express";
import multer from "multer";
import path from "path";
import {
  addProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject
} from "../controllers/projectController.js";

const router = express.Router();

// multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/projects");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = file.fieldname + "-" + Date.now() + ext;
    cb(null, name);
  },
});
const upload = multer({ storage });

// routes
router.post("/add", upload.single("image"), addProject);
router.get("/all", getAllProjects);
router.get("/:id", getProject);
router.put("/update/:id", upload.single("image"), updateProject);
router.delete("/delete/:id", deleteProject);

export default router;
