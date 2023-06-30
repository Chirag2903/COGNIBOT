const ErrorHandler = require("../utils/errorhandler")

const errormiddleware = (err, res, req, next) => {
    let error = { ...err }
    error.message = err.message

    // Wrong Mongodb Id error
    if (err.name === "CastError") {
        const message = `Resource not found. Invalid: ${err.path}`;
        error = new ErrorHandler(message, 400);
    }

    // Mongoose duplicate key error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        error = new ErrorHandler(message, 400);
    }

    //Validation Error 
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message)
        error = new ErrorHandler(message, 400);
        res.status(error.statusCode || 500).json({
            success: true,
            error: error.message || "Server Error"
        })
    }

    // Wrong JWT error
    if (err.name === "JsonWebTokenError") {
        const message = `Json Web Token is invalid, Try again `;
        error = new ErrorHandler(message, 400);
    }

    // JWT EXPIRE error
    if (err.name === "TokenExpiredError") {
        const message = `Json Web Token is Expired, Try again `;
        error = new ErrorHandler(message, 400);
    }

}

module.exports = errormiddleware;