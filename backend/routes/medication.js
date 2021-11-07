const express = require("express");
const router = express.Router();

const {getAllMedicines, createMedicine} = "../controllers/medicationController";
// const {getMedicine, updateMedicine, deleteMedicine} = "../controllers/medicationController";
// 
router.route("/medication").get(getAllMedicines);
// router.route("/medication").post(createMedicine);
// router.route("/medication/:medicationId").get(getMedicine).patch(updateMedicine).delete(deleteMedicine);

// Set up testing routes

router.get('/', function(req, res){
    return res.json({
        message: "This is supposed to be a GET request, I think?",
        success: true
    })
});

router.post('/', function(req, res){
    return res.json({
        message: "This is supposed to be a POST request, I think?",
        success: true
    })
});

module.exports = router;
