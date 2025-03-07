const express = require("express");
const router = express.Router();

const { listSkills,
    showAddForm,
    addNewSkill,
    deleteSkillById,
    showUpdateForm,
    updateSkill,
    getSkillAPI } = require("./controller");
router.get("/api",getSkillAPI);
router.get("/list", listSkills);
router.get("/add", showAddForm);
router.post("/add", addNewSkill);
router.get("/update/:id", showUpdateForm);
router.post("/update/:id", updateSkill);
router.get("/delete/:id", deleteSkillById);
module.exports=router;