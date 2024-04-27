const Process = require("../models/processModel");

const getProcesses = async (req, res) => {
  const processes = await Process.find({}).sort({ createdAt: -1 });
  res.status(200).json(processes);
};

module.exports = {
  getProcesses,
};
