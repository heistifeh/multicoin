import { errorHandler } from "../utils/error.js";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
export const signup = async (req, res, next) => {
  try {
    const { email, password, phone } = req.body;
    if (!password || !email || !phone)
      return res.status(400).json(errorHandler(400, "all fields are required"));
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      phone,
    });

    await newUser.save();
    res.status(201).json({ message: "user created successfully 🎉", newUser });
  } catch (error) {
    next(error);
  }
};
