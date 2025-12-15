import Project from "../models/Project.js";

export const addProject = async (req, res) => {
  try {
    const images = req.files.map(file => file.filename);

    const project = await Project.create({
      title: req.body.title,
      description: req.body.description,
      images,
    });

    res.json({ success: true, project });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET ALL PROJECTS
export const getProjects = async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json({ success: true, projects });
};

export const updateProject = async (req, res) => {
  const data = {
    title: req.body.title,
    description: req.body.description,
  };

  if (req.files && req.files.length > 0) {
    data.images = req.files.map(file => file.filename);
  }

  await Project.findByIdAndUpdate(req.params.id, data);
  res.json({ success: true });
};


// DELETE PROJECT
export const deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
