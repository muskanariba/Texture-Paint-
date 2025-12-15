import Hero from "../models/Hero.js";

// ADD
export const addHero = async (req, res) => {
  try {
    const hero = await Hero.create({
      ...req.body,
      bgImage: req.file?.filename
    });

    res.json({ success: true, hero });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET ALL
export const getAllHero = async (req, res) => {
  const hero = await Hero.find().sort({ createdAt: -1 });
  res.json({ success: true, hero });
};

// UPDATE
export const updateHero = async (req, res) => {
  const data = { ...req.body };
  if (req.file) data.bgImage = req.file.filename;

  await Hero.findByIdAndUpdate(req.params.id, data);
  res.json({ success: true });
};

// DELETE
export const deleteHero = async (req, res) => {
  await Hero.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
