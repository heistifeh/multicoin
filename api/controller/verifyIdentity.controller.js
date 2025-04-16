import User from "../models/user.model.js";
import Verify from "../models/verify.model.js";
import { errorHandler } from "../utils/error.js";

export const verifyIdentity = async (req, res, next) => {
  const { id } = req.params; // Get the user ID from params

  try {
    // Find the user by ID
    const user = await User.findById(id);
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    const { ssn, imageUrl } = req.body;

    // Validate that all fields are provided
    if (!ssn || !imageUrl) {
      return next(errorHandler(400, "All fields are required"));
    }

    // Create a verification record
    await Verify.create({ ssn, imageUrl });

    // Update user's ID verification status
    await User.findByIdAndUpdate(user._id, { isIdVerified: true });

    // Respond with the status of the verification
    res
      .status(200)
      .json({
        message: "Identity verification in progress...",
        isIdVerified: user.isIdVerified,
      });
  } catch (error) {
    next(error);
  }
};

export const showIdentity = async (req, res, next) => {};
