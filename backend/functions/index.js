const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ origin: true }));

app.get("/", (reg, res) => {
  return res.status(200).send("Hi there what is up");
});

const PORT = 3005;
app.listen(PORT, console.log(`listening on PORT ${PORT}`));

exports.app = functions.https.onRequest(app);
