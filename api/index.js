import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import verifyRoutes from "./routes/verify.routes.js";
import cookieParser from "cookie-parser";
import transationRoutes from "./routes/transaction.routes.js";
import userDetailRoutes from "./routes/user.routes.js";
import cors from "cors";
import path from "path";
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
// Allow only specific origin
const allowedOrigins = ["https://multicoinapp.com"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allow credentials (cookies, authorization headers)
  })
);
// Serve static files from the React app (build folder)
const __dirname = path.dirname(new URL(import.meta.url).pathname);
// Serve static files from the React app (build folder)
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all route to serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

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
