import User from "../models/user.model.js";

export async function increaseBalance(userId, intervals = 1) {
  try {
    const user = await User.findById(userId);
    if (user) {
      let newBalance = user.total_balance * Math.pow(1.1, intervals);
      let profit = newBalance - user.total_balance;

      user.total_balance = newBalance;
      user.total_profit += profit;

      await user.save();

      console.log(
        "Increased balance for user:",
        userId,
        "by",
        intervals,
        "intervals"
      );
      return newBalance;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error increasing balance:", error.message);
    throw error;
  }
}
