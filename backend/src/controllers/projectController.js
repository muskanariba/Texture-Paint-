import Project from "../models/Project.js";
import fs from "fs";
import path from "path";

// Add project
export const addProject = async (req, res) => {
  try {
    const { title, description, category, link, status } = req.body;
    const image = req.file ? `/uploads/projects/${req.file.filename}` : "";

    if (!title || !description) {
      return res.status(400).json({ success: false, message: "Title and description required" });
    }

    const project = new Project({ title, description, category, link, image, status });
    await project.save();

    res.status(201).json({ success: true, project });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get all
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json({ success: true, projects });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get single
export const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, project });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Update
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category, link, status } = req.body;
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ success: false, message: "Not found" });

    // If new image uploaded, delete old file (optional)
    if (req.file) {
      // delete previous image file if exists and is local
      if (project.image && project.image.startsWith("/uploads/")) {
        const oldPath = path.join(process.cwd(), project.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      project.image = `/uploads/projects/${req.file.filename}`;
    }

    project.title = title ?? project.title;
    project.description = description ?? project.description;
    project.category = category ?? project.category;
    project.link = link ?? project.link;
    project.status = status ?? project.status;

    await project.save();
    res.json({ success: true, project });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Delete
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ success: false, message: "Not found" });

    // delete image file if exists
    if (project.image && project.image.startsWith("/uploads/")) {
      const imgPath = path.join(process.cwd(), project.image);
      if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
    }

    await Project.deleteOne({ _id: id });
    res.json({ success: true, message: "Project deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
