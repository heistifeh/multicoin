import { errorHandler } from "../utils/error.js";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { sendVerificationEmail } from "../mailtrap/emails.js";
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


// verify email
export const verifyEmail = async (req, res, next) => {
  try {
    
  }
  catch(error){
    next(error)
  }
}