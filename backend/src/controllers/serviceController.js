import Service from "../models/Service.js";

// ADD SERVICE
export const addService = async (req, res) => {
  try {
    const { title, description, icon } = req.body;

    console.log("REQ BODY:", req.body);   // <-- ADD THIS

    const newService = new Service({ title, description, icon });
    await newService.save();

    res.json({ success: true, message: "Service added", service: newService });
  } catch (err) {
    console.error("SERVICE ERROR:", err);   // <-- ADD THIS
    res.status(500).json({ success: false, message: "Server error" });
  }
};


// GET ALL
export const getServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.json({ success: true, services });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// UPDATE
export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, icon } = req.body;

    await Service.findByIdAndUpdate(id, { title, description, icon });

    res.json({ success: true, message: "Service updated" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// DELETE
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    await Service.findByIdAndDelete(id);

    res.json({ success: true, message: "Service deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
