import express from "express";
import {
  addAbout,
  getAbout,
  deleteAbout,
  updateAbout
} from "../controllers/aboutController.js";

const router = express.Router();

router.post("/add", addAbout);
router.get("/all", getAbout);
router.delete("/delete/:id", deleteAbout);
router.put("/update/:id", updateAbout);

export default router;
