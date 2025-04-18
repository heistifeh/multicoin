import express from "express";

import {
  createDeposit,
  getPendingDeposits,
  setDepositStatus,
  getAllPendingDeposits,
} from "../controller/transaction.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const transationRoutes = express.Router();

// Create deposit request
transationRoutes.post("/create", verifyToken, createDeposit);

// Get pending deposits for a specific user
transationRoutes.get("/pending/:userId", verifyToken, getPendingDeposits);

// Set deposit status (e.g., 'success' or 'failed')
transationRoutes.put("/status/:depositId", setDepositStatus);

// Get all pending deposits (admin access)
transationRoutes.get("/pending", getAllPendingDeposits);

export default transationRoutes;
