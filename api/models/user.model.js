import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    lastLogin: {
        type: Date,
        default: Date.now,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
    deposit: {
        type: Number,
        default: 0,
    },
    total_profit: {
        type: Number,
        default: 0,
    },
    total_balance: {
        type: Number,
        default: 0,
    },
    last_load_time: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;