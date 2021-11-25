const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const medoxerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"]
    },
    role: {
        type: String,
        default: "medoxer",
        enum: {
            values: ["medoxer", "admin"],
        },
    },
    age: {
        type: Number,
    },
    address: {
        type: String,
    },
    contactNumber: {
        type: Number,
    },
    aadhaarNumber: {
        type: Number,
    },
    pharmaId: {
        type: Number,
    },
})

// Encrypting password before saving user
medoxerSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}

	this.password = await bcrypt.hash(this.password, 10);
});

// Compare user password
medoxerSchema.methods.comparePassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

// Return JWT Token
medoxerSchema.methods.getJwtToken = function () {
	return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_TIME,
	});
};

module.exports = mongoose.model("Medoxer", medoxerSchema);
