import express from "express";
import Hero from "../models/Hero.js";

const router = express.Router();

// Add Hero
router.post("/add", async (req, res) => {
  try {
    const hero = new Hero(req.body);
    await hero.save();
    res.json({ success: true, hero });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

// Get All Hero Sections
router.get("/all", async (req, res) => {
  const heroes = await Hero.find().sort({ createdAt: -1 });
  res.json({ success: true, heroes });
});

// Get Single Hero
router.get("/:id", async (req, res) => {
  const hero = await Hero.findById(req.params.id);
  res.json({ success: true, hero });
});

// Update Hero
router.put("/update/:id", async (req, res) => {
  const hero = await Hero.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({ success: true, hero });
});

// Delete Hero
router.delete("/delete/:id", async (req, res) => {
  await Hero.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;
