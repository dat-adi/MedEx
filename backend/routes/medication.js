const express = require("express");
const router = express.Router();

import {getAllMedicines, createMedicine} from "../controllers/medicationController";
import {getMedicine, updateMedicine, deleteMedicine} from "../controllers/medicationController";

router.route("/medication").get(getAllMedicines).post(createMedicine);
router.route("/medication/:medicationId").get(getMedicine).patch(updateMedicine).delete(deleteMedicine);

module.exports = router;
