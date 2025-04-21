const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Setup multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

const { 
  listProject, 
  showAddForm, 
  addNewProject, 
  deleteProjectById, 
  getProjectAPI, 
  showUpdateForm, 
  updateProject 
} = require("./controller");

// API to fetch all projects as JSON
router.get("/api", getProjectAPI);

// UI Routes
router.get("/list", listProject); // Show project list
router.get("/add", showAddForm);  // Show add form
router.post("/add/submit", upload.single('image'), addNewProject); // ⬅️ Image upload handled here

router.get("/update/:id", showUpdateForm);
router.post("/update/:id", upload.single('image'), updateProject); // ⬅️ With image upload

router.get("/delete/:id", deleteProjectById);

module.exports = router;
