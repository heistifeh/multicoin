import Dexie from "dexie";

const db = new Dexie("TradingSimulatorDB");

db.version(1).stores({
  users:
    "++id, username, email, password, deposit, total_profit, total_balance, last_load_time",
  transactions: "++id, user_id, type, amount, status, created_at",
});

export async function initializeDatabase() {
  await db.open();
  // Start the auto-increase process
  return db;
}

export async function signUp(username, password) {
  try {
    const id = await db.users.add({
      username,
      password,
      deposit: 100,
      total_profit: 0,
      total_balance: 100,
    });
    return {
      success: true,
      message: "User registered successfully",
      user: { id, username },
    };
  } catch (error) {
    return { success: false, message: "Username or email already exists" };
  }
}

export async function signIn(username, password) {
  const user = await db.users.where({ username, password }).first();
  if (user) {
    return { success: true, user: { id: user.id, username: user.username } };
  } else {
    return { success: false, message: "Invalid credentials" };
  }
}

export async function getUserBalance(userId) {
  // const user = await db.users.get(userId);
//   const user = {
//     id: 'bhjjhdfhjdf76872637',
//     username: "John Doe",
//     deposit: 200,
//     total_profit: 200,
//     total_balance: 500,
//   };
  if (user) {
    return {
      deposit: user.deposit,
      total_profit: user.total_profit,
      total_balance: user.total_balance,
    };
  } else {
    throw new Error("User not found");
  }
}

export async function createDeposit(username, amount) {
  const user = await db.users.where({ username }).first();
  if (!user) {
    return { success: false, message: "User not found" };
  }

  await db.transactions.add({
    user_id: user.id,
    type: "deposit",
    amount,
    status: "pending",
    created_at: new Date(),
  });
  return { success: true, message: "Deposit request created" };
}

export async function getPendingDeposits(userId) {
  return await db.transactions
    .where({ user_id: userId, type: "deposit", status: "pending" })
    .toArray();
}

export async function setDepositStatus(depositId, status) {
  const transaction = await db.transactions.get(depositId);
  if (!transaction || transaction.type !== "deposit") {
    throw new Error("Invalid deposit transaction");
  }

  await db.transaction("rw", db.transactions, db.users, async () => {
    await db.transactions.update(depositId, { status });

    if (status === "success") {
      const user = await db.users.get(transaction.user_id);
      await db.users.update(transaction.user_id, {
        deposit: user.deposit + transaction.amount,
        total_balance: user.total_balance + transaction.amount,
      });
    }
  });

  return { success: true, message: `Deposit status set to ${status}` };
}

export async function getAllPendingDeposits() {
  return await db.transactions
    .where({ type: "deposit", status: "pending" })
    .toArray();
}

export async function getLastLoadTime(userId) {
  const user = await db.users.get(userId);
  if (user && user.last_load_time) {
    return user.last_load_time;
  } else {
    // If last_load_time doesn't exist, return current time minus 5 seconds (for testing)
    return Date.now() - 5000;
  }
}

export async function updateLastLoadTime(userId, timestamp) {
  await db.users.update(userId, { last_load_time: timestamp });
}

export async function increaseBalance(userId, intervals = 1) {
  try {
    let newBalance = 0;
    await db.transaction("rw", db.users, async () => {
      const user = await db.users.get(userId);
      if (user) {
        // Increase by 0.5% for each interval
        newBalance = user.total_balance * Math.pow(1.005, intervals);
        const profit = newBalance - user.total_balance;
        await db.users.update(userId, {
          total_balance: newBalance,
          total_profit: user.total_profit + profit,
        });
      }
    });
    console.log(
      "Increased balance for user:",
      userId,
      "by",
      intervals,
      "intervals"
    );
    return newBalance;
  } catch (error) {
    console.error("Error in increase balance:", error);
    throw error;
  }
}
