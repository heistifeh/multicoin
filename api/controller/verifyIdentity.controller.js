import Verify from "../models/verify.model.js";
import { errorHandler } from "../utils/error.js";

export const verifyIdentity = async (req, res, next) => {
  try {
    const { ssn, imageUrl } = req.body;

    if (!ssn || !imageUrl)
      return nextTick(errorHandler(400, "all fields are required"));
    await Verify.create({ ssn, imageUrl });
    res.status(200).json({ message: "identity verification in progress..." });
  } catch (error) {
    next(error);
  }
};
