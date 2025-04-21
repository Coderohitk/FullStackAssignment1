const projectModel = require("./model");

// List all projects and initialize if no projects exist
const listProject = async (req, res) => {
  let projectData = await projectModel.getProject();
  if (!projectData.length) {
    await projectModel.initializeProject();
    projectData = await projectModel.getProject();
  }
  res.render("project/list", { projects: projectData });
};

// Show the form to add a new project
const showAddForm = (req, res) => {
  res.render("project/addProject");
};

// Add a new project (with image)
const addNewProject = async (req, res) => {
  const { name, description, technology, link } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

  const result = await projectModel.addProject(name, description, technology, link, imageUrl);
  console.log("Project added:", result);
  res.redirect("../list");
};

// Delete a project by ID
const fs = require("fs");
const path = require("path");

const deleteProjectById = async (req, res) => {
  const projectId = req.params.id;

  // Fetch project first to get the image path
  const project = await projectModel.Project.findById(projectId);
  if (!project) {
    return res.status(404).send("Project not found.");
  }

  // Delete image file from uploads (if it exists)
  if (project.imageUrl) {
    const imagePath = path.join(__dirname, "../../..", project.imageUrl); // Adjust path if needed
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error("❌ Failed to delete image:", err.message);
      } else {
        console.log("✅ Image deleted:", imagePath);
      }
    });
  }

  // Then delete the project from the DB
  await projectModel.deleteProject(projectId);
  console.log(`✅ Deleted project with ID: ${projectId}`);
  res.redirect("../list");
};


// Show update project form
const showUpdateForm = async (req, res) => {
  const projectId = req.params.id;
  const project = await projectModel.Project.findById(projectId);
  if (!project) {
    return res.status(404).send("Project not found.");
  }
  res.render("project/updateProject", { project });
};

// Update project (with optional image)
const updateProject = async (req, res) => {
  const projectId = req.params.id;
  const { name, description, technology, link } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  const result = await projectModel.updateProject(projectId, name, description, technology, link, imageUrl);

  if (result.modifiedCount === 0) {
    return res.status(404).send("Project not found or no changes made.");
  }

  console.log("Project updated:", result);
  res.redirect("../list");
};

// API to return all projects as JSON
const getProjectAPI = async (req, res) => {
  let projectList = await projectModel.getProject();
  res.json(projectList);
};

module.exports = {
  listProject,
  showAddForm,
  addNewProject,
  deleteProjectById,
  showUpdateForm,
  updateProject,
  getProjectAPI
};
