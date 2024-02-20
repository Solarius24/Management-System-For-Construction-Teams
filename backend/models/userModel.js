const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: { type: String },
  listOfTabs: [
    {
      tabName: { type: String },
      listOfWidgets: [
        {
          widgetName: { type: String },
          widgetType: { type: String },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
