import { errorHandler } from "../utils/error.js";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
export const signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      username,
    });

    await newUser.save();
    res.status(201).json({ message: "user created successfully 🎉", newUser });
  } catch (error) {
    next(errorHandler(500, "unable to sign you in😪😪"));
  }
};
