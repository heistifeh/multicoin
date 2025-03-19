import express from "express";
import { Router } from "express";
import { signup, verifyEmail } from "../controller/auth.controller.js";

const router = Router();

// router.get("/test", (req, res) => {
//     res.send("hello world");
// })
router.post("/signup", signup);
router.post("/verify-email", verifyEmail);

export default router;
