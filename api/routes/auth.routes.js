import express from "express";
import { Router } from "express";
import { signup, signin, verifyEmail } from "../controller/auth.controller.js";

const router = Router();

// router.get("/test", (req, res) => {
//     res.send("hello world");
// })
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/verify-email", verifyEmail);

export default router;
