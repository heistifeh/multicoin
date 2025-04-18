import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import verifyRoutes from "./routes/verify.routes.js";
import cookieParser from "cookie-parser";
import transationRoutes from "./routes/transaction.routes.js";
import userDetailRoutes from "./routes/user.routes.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
// Allow all origins (for development)
app.use(cors());

// Or allow only specific origin
// app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/verify", verifyRoutes);
app.use("/api/transactions", transationRoutes);
app.use("/api/user", userDetailRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong☹☹";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
app.get("/", (req, res) => {
  res.send("Backend is running baby");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
