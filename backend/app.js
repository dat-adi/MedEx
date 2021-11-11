const express = require("express");
var cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());

// Importing the routes
const medication = require("./routes/medication");
const user = require("./routes/user");

// Utilizing the required routes
app.use("/api/v1", medication);
app.use("/api/v1", user);

module.exports = app;
