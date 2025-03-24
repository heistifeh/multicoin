import { errorHandler } from "../utils/error.js";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import {
  sendPasswordResetEmail,
  sendResetSuccessEmail,
  sendVerificationEmail,
  sendWelcomeEmail,
} from "../mailtrap/emails.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
export const signup = async (req, res, next) => {
  try {
    const { email, password, phone } = req.body;

    // if there is no password, email or phone input
    if (!password || !email || !phone)
      return res.status(400).json(errorHandler(400, "all fields are required"));

    // if user already exists
    const userALreadyExists = await User.findOne({ email });
    if (userALreadyExists)
      return res.status(400).json(errorHandler(400, "user already exists 🐇"));
    const hashedPassword = bcrypt.hashSync(password, 10);

    // create a verification token
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // also pass verification token
    const newUser = await User.create({
      email,
      password: hashedPassword,
      phone,
      verificationToken,
      // set the verification token to expire in 24 hours
      verificationTokenExpiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });

    await sendVerificationEmail(newUser.email, verificationToken);

    await newUser.save();

    res.status(201).json({ message: "user created successfully 🎉", newUser });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(errorHandler(400, "Input all credentials"));
    }
    // check if email exists
    const verifiedUser = await User.findOne({
      email: email,
    });

    if (!verifiedUser) {
      return next(errorHandler(404, "user does not exist."));
    }
    // hash password to compare with database
    const validPassword = bcrypt.compareSync(password, verifiedUser.password);

    // if comparison fails
    if (!validPassword) {
      return next(errorHandler(401, "wrong credentials."));
    }

    if (!verifiedUser.isVerified) {
      return next(errorHandler(401, " You have to verify before signing in"));
    }
    // then we authnticate user
    const token = jwt.sign({ id: verifiedUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...detailsWithoutPassword } = verifiedUser._doc;
    res
      .cookie("token", token, { httpOnly: true })
      .status(201)
      .send(detailsWithoutPassword);
  } catch (error) {
    next(error);
  }
};

// verify email
export const verifyEmail = async (req, res, next) => {
  const { code } = req.body;

  try {
    // find user by token code
    const verifyUser = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });
    // check if code is incorrect
    if (!verifyUser) {
      return res
        .status(400)
        .json(errorHandler(400, "invalid verification code☹☹"));
    }
    // if code is correct, set isVerified to true
    verifyUser.isVerified = true;
    verifyUser.verificationToken = undefined;
    verifyUser.verificationTokenExpiresAt = undefined;
    await verifyUser.save();

    // send a welcome email
    await sendWelcomeEmail(verifyUser.email, verifyUser.name);
    res.status(200).json({ message: "email verified successfully 🎉" });
  } catch (error) {
    next(error);
  }
};

export const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return next(errorHandler(404, "user does not exist"));

    // Generate token and set 24 hours expiration
    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetPasswordExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = resetPasswordExpiresAt;
    await user.save();

    const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

    // send mail
    await sendPasswordResetEmail(user.email, resetUrl);
    res
      .status(200)
      .json({ message: "reset email sent successfully", resetToken });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    const { resetToken } = req.params;
    const { password } = req.body;
    const user = await User.findOne({
      resetPasswordToken: resetToken,
      resetPasswordExpiresAt: { $gt: Date.now() },
    });
    const hashedPassword = bcrypt.hashSync(password, 10);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;

    await user.save();

    sendResetSuccessEmail(user.email);
    res.status(200).json({
      message: "password reset successful",
    });
  } catch (error) {
    next(error);
  }
};
