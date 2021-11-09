const Medicine = require("../models/medicine");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");


// Get All Medicines => /api/v1/medication
exports.getAllMedicines = catchAsyncErrors(async (req, res, next) => {
    // Querying the collection
    const medicines = await Medicine.find();

    // Sending a success response
    console.log(res);
    res.status(200).json({
        success: true,
        medicines
    });
});

// Creating a new medicine => /api/v1/medication
exports.createMedicine = catchAsyncErrors(async (req, res, next) => {
    // Creating the object from the request body
    const medicine = await Medicine.create(req.body);

    // Sending a success response
    res.status(201).json({
        success: true,
        medicine
    });
});

// Get a medicine by ID => /api/v1/medication/{medicationId}
exports.getMedicine = catchAsyncErrors(async (req, res, next) => {
    console.log("Params", req);
    let medicine = await Medicine.findById(req.params.medicationId);
    if(!medicine){
        return next(new ErrorHandler("Medicine not found", 404));
    }

    // Sending a success response
    res.status(200).json({
        success: true,
        medicine
    });
})

// Update a medicine by ID => /api/v1/medication/{medicationId}
exports.updateMedicine = catchAsyncErrors(async (req, res, next) => {
    let medicine = await Medicine.findById(req.params.medicationId);
    if(!medicine){
        return next(new ErrorHandler("Medicine not found", 404));
    }

    medicine = await Medicine.findByIdAndUpdate(req.params.medicationId, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    // Sending a success response
    res.status(200).json({
        success: true,
        medicine
    });
});

// Delete a medicine => /api/v1/medication/{medicationId}
exports.deleteMedicine = catchAsyncErrors(async (req, res, next) => {
    let medicine = await Medicine.findById(req.params.medicationId);
    if(!medicine){
        return next(new ErrorHandler("Medicine not found", 404));
    }

    await medicine.remove();

    // Sending a success response
    res.status(200).json({
        success: true,
        message: "Medicine has been deleted."
    });
})
