const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middlewares/auth");

// Importing the required controllers from the controllers folder
const {getAllMedicines, createMedicine} = require("../controllers/medicationController");
const {getMedicine, updateMedicine, deleteMedicine} = require("../controllers/medicationController");

// Calling the respective controllers for the required operations
router.route("/medication").get(isAuthenticatedUser, getAllMedicines);
router.route("/medication").post(createMedicine);
router.route("/medication/:medicationId").get(getMedicine).put(updateMedicine).delete(deleteMedicine);

// Exporting the router
module.exports = router;
