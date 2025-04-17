// import Transaction from '../models/Transaction'; // Import the Transaction model
// import User from '../models/User'; // Import the User model
// import { generateVerificationCode } from '../utils/verificationCode'; // Import utility for generating verification codes

import User from "../models/user.model.js";
import Transaction from "../models/transactions.model.js";

// Create a deposit transaction
export async function createDeposit(req, res) {
  const { username, amount } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const transaction = new Transaction({
      user_id: user._id,
      type: "deposit",
      amount,
      status: "pending",
    });

    await transaction.save();

    return res
      .status(201)
      .json({ success: true, message: "Deposit request created" });
  } catch (error) {
    console.error("Error creating deposit:", error);
    return res
      .status(500)
      .json({ error: "Failed to create deposit", message: error.message });
  }
}

// Get pending deposits for a specific user
export async function getPendingDeposits(req, res) {
  const { userId } = req.params;

  try {
    const deposits = await Transaction.find({
      user_id: userId,
      type: "deposit",
      status: "pending",
    });
    return res.status(200).json(deposits);
  } catch (error) {
    return res
      .status(500)
      .json({
        error: "Failed to fetch pending deposits",
        message: error.message,
      });
  }
}

// Set deposit status (success or failed)
export async function setDepositStatus(req, res) {
  const { depositId } = req.params;
  const { status } = req.body;

  if (!status || !["pending", "success", "failed"].includes(status)) {
    return res.status(400).json({ error: "Invalid status" });
  }

  try {
    const transaction = await Transaction.findById(depositId);
    if (!transaction || transaction.type !== "deposit") {
      return res.status(404).json({ error: "Invalid deposit transaction" });
    }

    if (status === "success") {
      const user = await User.findById(transaction.user_id);
      if (user) {
        user.deposit += transaction.amount;
        user.total_balance += transaction.amount;
        await user.save();
      }
    }

    transaction.status = status;
    await transaction.save();

    res
      .status(200)
      .json({ success: true, message: `Deposit status set to ${status}` });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to set deposit status", message: error.message });
  }
}

// Get all pending deposits (admin access)
export async function getAllPendingDeposits(req, res) {
  try {
    const deposits = await Transaction.find({ type: "deposit" });
    res.status(200).json(deposits);
  } catch (error) {
    return res
      .status(500)
      .json({
        error: "Failed to fetch all pending deposits",
        message: error.message,
      });
  }
}
