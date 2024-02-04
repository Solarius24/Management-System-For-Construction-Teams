const mongoose = require("mongoose");
const User = require("../models/userModel");
const { query } = require("express");

// get all forms
// const getTasks = async (req, res) => {
//   const user = await User.find({}).sort({ createdAt: -1 });

//   res.status(200).json(user);
// };

// get a single form
const getUserTabs = async (req, res) => {
  const { id } = req.query;

  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(404).json({ error: "No such form" });
  // }

  const user = await User.findOne({ id: id });

  if (!user) {
    return res.status(404).json({ error: "No such form" });
  }

  res.status(200).json(user);
};

// create a new form
const createUserTabs = async (req, res) => {
  const { id, tabName, listOfWidgets } = req.body;
  // add to the database
  try {
    const tab = await User.create({
      id,
      tabName,
      listOfWidgets,
    });
    res.status(200).json(tab);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a tab
const deleteUserTabs = async (req, res) => {
  const listOfTasksToDelete = req.body;
  const tab = await User.findOneAndDelete({ _id: id });

  if (!tab) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(tab);
};

// update a tab
const updateUserTabName = async (req, res) => {
  const { id } = req.query;
  const { tabId } = req.body;
  const { tabName } = req.body;
  const tab = await User.findOneAndUpdate(
    { id: id },
    { $set: { "listOfTabs.$[elem].tabName": tabName } },
    { arrayFilters: [{ "elem.id": tabId }] }
  );
  if (!tab) {
    return res.status(400).json({ error: "No such form" });
  }

  res.status(200).json(tab);
};

const updateUserTabs = async (req, res) => {
  const { id } = req.query;
  // const { id } = req.params;

  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(400).json({ error: "No such form" });
  // }
  const tab = await User.findOneAndUpdate(
    { id: id },
    { $addToSet: { listOfTabs: req.body } }
  );

  if (!tab) {
    return res.status(400).json({ error: "No such form" });
  }

  res.status(200).json(tab);
};

module.exports = {
  getUserTabs,
  createUserTabs,
  deleteUserTabs,
  updateUserTabs,
  updateUserTabName,
};
