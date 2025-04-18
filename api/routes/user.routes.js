import express from "express";
// import { getUserBalance, getLastLoadTime, updateLastLoadTime, increaseBalanceForUser } from '../controllers/userController';
// getUserBalance
import { verifyToken } from "../utils/verifyToken.js";
// import { getUserBalance } from '../services/accountSevices';
import {
  getUserBalance,
  getLastLoadTime,
  updateLastLoadTime,
  increaseBalanceForUser,
} from "../controller/user.controller.js";

const userDetailRoutes = express.Router();

// Get user balance
userDetailRoutes.get("/:userId/balance", verifyToken, getUserBalance);

// Get last load time for a user
userDetailRoutes.get("/:userId/last-load-time", verifyToken, getLastLoadTime);

// Update last load time for a user
userDetailRoutes.put(
  "/:userId/last-load-time",
  verifyToken,
  updateLastLoadTime
);

// Increase balance for a user
userDetailRoutes.post(
  "/:userId/increase-balance",
  verifyToken,
  increaseBalanceForUser
);


export default userDetailRoutes;
