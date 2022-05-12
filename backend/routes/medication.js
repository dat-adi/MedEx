const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, isAuthenticatedMedoxer, authorizeRoles } = require("../middlewares/auth");
// The Authenticated Medoxer feature allows for the faculty system in VISP to have multiple roles as well, comprising of adsw, ddsw, et cetera. 

// Importing the required controllers from the controllers folder
const {getAllMedicines, createMedicine} = require("../controllers/medicationController");
const {getMedicine, updateMedicine, deleteMedicine} = require("../controllers/medicationController");

// Calling the respective controllers for the required operations
router.route("/medication").get(getAllMedicines);
router.route("/medication")
    .post(isAuthenticatedMedoxer, authorizeRoles("medoxer"), createMedicine);
router.route("/medication/:medicationId")
    .get(isAuthenticatedUser || isAuthenticatedMedoxer, getMedicine)
    .put(isAuthenticatedUser || isAuthenticatedMedoxer, updateMedicine)
    .delete(isAuthenticatedUser || isAuthenticatedMedoxer, deleteMedicine);

// Exporting the router
module.exports = router;
