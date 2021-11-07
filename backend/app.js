const express = require("express");
const app = express();

app.use(express.json());

// Importing the routes
const medication = require("./routes/medication");

app.use("/api/v1", medication);

module.exports = app;
