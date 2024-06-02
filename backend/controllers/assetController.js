const { default: mongoose } = require("mongoose");
const Asset = require("../models/assetModel");

const getAssets = async (req, res) => {
  const assets = await Asset.find({}).sort({ createdAt: -1 });
  res.status(200).json(assets);
};

const createNewAsset = async (req, res) => {
  const { id } = req.query;

  const newAsset = await Asset.findOneAndUpdate(
    { _id: id },
    {
      $addToSet: {
        location: req.body,
      },
    }
  );
  if (!newLocation) {
    return res.status(404).json({ error: "No such form" });
  }

  res.status(200).json(newLocation);
};

const updateAsset = async (req, res) => {
  const { id } = req.query;
  const newStatus = await Asset.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        location: req.body,
      },
    }
  );

  if (!newStatus) {
    return res.status(400).json({ error: "No such form" });
  }

  res.status(200).json(newStatus);
};

module.exports = {
  getAssets,
  updateAsset,
  createNewAsset,
};
