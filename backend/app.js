const express = require("express");
const app = express();

app.use(express.json());

// Importing the routes
const medication = require("./routes/medication");

// Utilizing the required routes
app.use("/api/v1", medication);

module.exports = app;
