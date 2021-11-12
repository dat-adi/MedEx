const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

// Importing the required controllers from the controllers folder
const {getAllMedicines, createMedicine} = require("../controllers/medicationController");
const {getMedicine, updateMedicine, deleteMedicine} = require("../controllers/medicationController");

// Calling the respective controllers for the required operations
router.route("/medication").get(getAllMedicines);
router.route("/medication")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createMedicine);
router.route("/medication/:medicationId")
    .get(isAuthenticatedUser, getMedicine)
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateMedicine)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteMedicine);

// Exporting the router
module.exports = router;
