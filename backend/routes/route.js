const express = require("express");
const {
  getForms,
  getForm,
  createForm,
  deleteForm,
  updateForm,
} = require("../controllers/formController");
const {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

const {
  getFormsSchedule,
  getFormSchedule,
  createFormSchedule,
  deleteFormSchedule,
  updateFormSchedule,
} = require("../controllers/formScheduleController");

const {
  getUserTabs,
  createUserTabs,
  deleteUserTabs,
  updateUserTabs,
} = require("../controllers/userController");

const router = express.Router();

// GET all tasks/forms
router.get("/forms", getForms);
router.get("/forms_schedule", getFormsSchedule);
router.get("/tasks", getTasks);

// GET a single task/form
router.get("/forms/:id", getForm);
router.get("/forms_schedule/:id", getFormSchedule);
router.get("/tasks/:id", getTask);
router.get("/userData", getUserTabs);

// POST a new task/form
router.post("/forms", createForm);
router.post("/forms_schedule", createFormSchedule);
router.post("/tasks", createTask);
router.post("/userData", createUserTabs);

// DELETE task/form/userdata
router.delete("/forms", deleteForm);
router.delete("/forms_schedule", deleteFormSchedule);
router.delete("/tasks", deleteTask);
router.delete("/userData", deleteUserTabs);

// UPDATE task/form/userData
router.patch("/forms/:id", updateForm);
router.patch("/forms_schedule/:id", updateFormSchedule);
router.patch("/tasks/:id", updateTask);
router.patch("/userData", updateUserTabs);

module.exports = router;
