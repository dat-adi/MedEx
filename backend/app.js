const express = require("express");
const app = express();

app.use(express.json());

// Importing the routes
const medication = require("./routes/medication");
const user = require("./routes/user");

// Utilizing the required routes
app.use("/api/v1", medication);
app.use("/api/v1", user);

module.exports = app;
