// Import statements for path, environment and database
const { join, resolve } = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const connectDatabase = () => {
  // Loading configuration based on status of NODE_ENV
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    dotenv.config({
      path: resolve(join(__dirname, "/development.env"))
    });

    console.log("Development environment is being loaded");
  } else if (process.env.NODE_ENV === "PRODUCTION") {
    dotenv.config({
      path: resolve(join(__dirname, "/production.env"))
    });

    console.log("Production environment is being loaded");
  } else {
    console.log("No environment file found, proceeding with default variables");
  }

  // Setting up the connection for MongoDB
  mongoose
    .connect(
      process.env.CONNECTION_STRING,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
      console.log("<----------DBCONNECTION ERROR MESSAGE START---------->");
      console.log(err.message);
      console.log("<----------DBCONNECTION ERROR MESSAGE END---------->");
      process.exit(1);
    });
};

module.exports = connectDatabase;

