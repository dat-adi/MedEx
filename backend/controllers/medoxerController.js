const Medoxer = require("../models/medoxer");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");

// Register Medoxer => /api/v1/medoxer/register
exports.registerMedoxer = catchAsyncErrors(async (req, res, next) => {
	const medoxer = await Medoxer.create(req.body);

	sendToken(medoxer, 200, res);
});

// Login Medoxer => /api/v1/medoxer/login
exports.loginMedoxer = catchAsyncErrors(async (req, res, next) => {
	const { email, password } = req.body;

	// checks if email and password is entered by medoxer
	if (!email || !password) {
		return next(new ErrorHandler("Please enter email & password", 400));
	}

	// Finding the medoxer in the database
	const medoxer = await Medoxer.findOne({ email }).select("+password");

	if (!medoxer) {
		return next(new ErrorHandler("Invalid Email Address or Password", 401));
	}

	// Checks if password is correct or not
	const isPasswordMatched = await medoxer.comparePassword(password);

	if (!isPasswordMatched) {
		return next(new ErrorHandler("Invalid Email Address or Password", 401));
	}

	sendToken(medoxer, 200, res);
});
