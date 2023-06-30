const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const JWT = require("jsonwebtoken");
const cookie = require("cookie")

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, "Username is Required"]
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
        minlength: [8, 'Password Lenght should be greater than 6 character']
    },
    customerid: {
        type: String,
        default: ""
    },
    subscription: {
        type: String,
        default: ""
    }
})

UserSchema.pre('save', async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

//Match Password
UserSchema.methods.MatchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

//Generate Token 

UserSchema.methods.getSignedToken = async function () {
    return JWT.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
}

module.exports = mongoose.model("User", UserSchema);