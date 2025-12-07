import About from "../models/About.js";

// Add About
export const addAbout = async (req, res) => {
  try {
    const about = new About(req.body);
    await about.save();
    res.json({ success: true, about });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Abouts
export const getAbout = async (req, res) => {
  try {
    const data = await About.find();
    res.json({ success: true, about: data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete About
export const deleteAbout = async (req, res) => {
  try {
    await About.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update About
export const updateAbout = async (req, res) => {
  try {
    const updated = await About.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ success: true, updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
