const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProcessSchema = new Schema(
  {
    title: { type: String, require: true },
    columns: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Process", ProcessSchema);
