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

const router = express.Router();

// GET all tasks/forms
router.get("/forms", getForms);
router.get("/tasks", getTasks);

// GET a single task/form
router.get("/forms/:id", getForm);
router.get("/tasks/:id", getTask);

// POST a new task/form
router.post("/forms", createForm);
router.post("/tasks", createTask);

// DELETE task/form
router.delete("/forms/:id", deleteForm);
router.delete("/task/:id", deleteTask);

// UPDATE task/form
router.patch("/forms/:id", updateForm);
router.patch("/tasks/:id", updateTask);

module.exports = router;
