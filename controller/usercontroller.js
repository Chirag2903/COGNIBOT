const ErrorHandler = require("../utils/errorhandler")
const User = require("../models/usermodels")
const asyncHandler = require("../middlewares/catchasynchandler");
const sendToken = require("../utils/jwtToken")


//Register Function
exports.register = asyncHandler(async (req, res, next) => {

    const { username, email, password } = req.body;

    const existingemail = await User.findOne({ email });
    if (existingemail) {
        return next(new ErrorHandler("Email is already register", 500))
    }
    const user = await User.create({ username, email, password })
    sendToken(user, 201, res);

});


//Login
exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Enter Email or Password"))
    }

    const user = await User.findOne({ email })
    if (!user) {
        return next(new ErrorHandler("Invalid Credential", 401));
    }

    const ismatch = await user.MatchPassword(password);
    if (!ismatch) {
        return next(new ErrorHandler("Invalid Credential", 401));
    }

    sendToken(user, 200, res);
})



//Logout
exports.logout = asyncHandler(async (req, res, next) => {

    res.clearCookie('token');
    return res.status(200).json({
        success: true,
        message: "Logout Successful"
    })
})

