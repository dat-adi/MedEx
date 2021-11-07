import db from "../config/database";
const Medicine = require("../models/medicine");
const catchAsyncErrors = require("../utils/errorHandler");

let medicationRef = db.ref("medication");

// Get All Medicines => /api/v1/medication
exports.getAllMedicines = catchAsyncErrors(async (res) => {
    // Querying the collection
    let medicines;
    medicationRef.on('value', (snapshot) => {
        medicines = snapshot.val()
    }, (errorObject) => {
        console.log("The read failed: " + errorObject.name);
    });
    res.status(200).json({
        success: true,
        medicines
    });
});

exports.createMedicine = catchAsyncErrors(async (req, res) => {
    const medicine = req.body;
    console.log(medicine);
    res.text(medicine);
});
