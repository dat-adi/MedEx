const express = require("express");
const router = express.Router();

// Importing the required controllers from the controllers folder
const {registerUser, loginUser, logout} = require("../controllers/userController");
const {registerMedoxer, loginMedoxer} = require("../controllers/medoxerController");

// Calling the respective controllers for the required operations
router.route("/user/register").post(registerUser);
router.route("/user/login").post(loginUser);
router.route("/user/logout").get(logout);
//
// Calling the respective controllers for the medoxers
router.route("/medoxer/register").post(registerMedoxer);
router.route("/medoxer/login").post(loginMedoxer);
router.route("/medoxer/logout").get(logout);

// Exporting the router
module.exports = router;
