import express from "express";
import {
  addColor,
  getColors,
  updateColor,
  deleteColor,
} from "../controllers/galleryController.js";

const router = express.Router();

router.post("/", addColor);
router.get("/", async (req, res) => {
  try {
    const colors = await GalleryColor.find();
    res.json({
      success: true,
      colors: colors,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});

router.put("/:id", updateColor);
router.delete("/:id", deleteColor);

export default router;
