const express = require("express");
const router = express.Router();

// Importing the required controllers from the controllers folder
const {registerUser, loginUser, logout} = require("../controllers/userController");

// Calling the respective controllers for the required operations
router.route("/user/register").post(registerUser);
router.route("/user/login").post(loginUser);
router.route("/user/logout").get(logout);

// Exporting the router
module.exports = router;
