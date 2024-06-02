const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AssetSchema = new Schema({
  _id: { type: String },
  title: { type: String },
  listOfItems: {
    itemId: { type: String },
    itemName: { type: String },
    itemLocation: { type: String },
    itemDescription: { type: String },
    createdDate: { type: String },
  },
});

module.exports = mongoose.model("Asset", AssetSchema);
