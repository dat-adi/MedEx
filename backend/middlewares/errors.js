const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    // TODO Improve this section with PROD Error handling.

    if (process.env.NODE_ENV === "DEVELOPMENT") {
        res.status(err.statusCode).json({
            success: false,
            error: err,
            errMessage: err.message,
            stack: err.stack,
        });
    }

    if (process.env.NODE_ENV === "PRODUCTION") {
        let error = { ...err };
        error.message = err.message;

        // Wrong mongoose Object ID Error
        if (err.name === "CastError") {
            const message = `Resource not found, Invalid: ${err.path}`;
            error = new ErrorHandler(message, 400);
        }

        // Handling Mongoose Validation Error
        if (err.name === "ValidationError") {
            const message = Object.values(err.values).map(
                (value) => value.message
            );
            error = new ErrorHandler(message, 400);
        }

        // Handling Type Error
        if (err.name === "TypeError") {
            const message = "Something doesn't match up. Check your account type and whether you are granted access";
            error = new ErrorHandler(message, 400);
        }

        // Handling Mongoose duplicate key errors
        if (err.code === 11000) {
            const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
            error = new ErrorHandler(message, 400);
        }

        // Handling wrong JWT error
        if (err.name === "JsonWebTokenError") {
            const message = `JSON Web Token is invalid, try again.`;
            error = new ErrorHandler(message, 400);
        }

        // Handling expired JWT error
        if (err.name === "TokenExpiredError") {
            const message = `JSON Web Token has expired, try again.`;
            error = new ErrorHandler(message, 400);
        }


        res.status(error.statusCode).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
}
