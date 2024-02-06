const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: { type: String },
  listOfTabs: [
    {
      // id: { type: String },
      tabName: { type: String },
      listOfWidgets: { type: Array },
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
