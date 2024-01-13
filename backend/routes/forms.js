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

// GET all workouts
router.get("/forms", getForms);
router.get("/tasks", getTasks);

// GET a single workout
router.get("/forms/:id", getForm);

// POST a new workout
router.post("/forms", createForm);
router.post("/tasks", createTask);

// DELETE a workout
router.delete("/forms/:id", deleteForm);

// UPDATE a workout
router.patch("/:id", updateForm);

module.exports = router;
