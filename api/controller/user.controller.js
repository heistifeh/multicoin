import User from "../models/user.model.js"; //port the User mode
// Get the user's balance info (deposit, total_profit, total_balance)
import { increaseBalance } from "../utils/increaseBalance.js";
import Transaction from "../models/transactions.model.js";
import { errorHandler } from "../utils/error.js";
export async function getUserBalance(req, res) {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({
      deposit: user.deposit,
      total_profit: user.total_profit,
      total_balance: user.total_balance,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to get user balance", message: error.message });
  }
}

// Get the last load time for a user
export async function getLastLoadTime(req, res) {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res
      .status(200)
      .json({ lastLoadTime: user.last_load_time || Date.now() - 5000 });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to get last load time", message: error.message });
  }
}

// Update last load time for a user
export async function updateLastLoadTime(req, res) {
  const { userId } = req.params;
  const { timestamp } = req.body;

  try {
    await User.findByIdAndUpdate(userId, { last_load_time: timestamp });
    return res.status(200).json({ message: "Last load time updated" });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to update last load time",
      message: error.message,
    });
  }
}

// Increase the balance for a user
export async function increaseBalanceForUser(req, res) {
  const { userId } = req.params;
  const { intervals } = req.body; // Optional number of intervals to increase balance

  try {
    // Fetch current user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Calculate the balance increment
    const increaseAmount = intervals || 1; // Default to 1 if no intervals specified

    // Update the balance (You may need to customize the logic based on your use case)
    const newBalance = user.total_balance + increaseAmount;

    // Update the user's balance in the database
    user.total_balance = newBalance;

    // Save the updated user data to the database
    await user.save();

    // Return the updated balance
    return res.status(200).json({ newBalance });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to increase balance", message: error.message });
  }
}

export async function getUserTransactions(req, res, next) {
  try {
    const { userId } = req.params;
    const userTxns = await Transaction.find({ user_id: userId });

    if (!userTxns) {
      next(errorHandler(404, "No transactions found"));
    }
    return res.status(200).json(userTxns);
  } catch (error) {
    next(error);
  }
}
