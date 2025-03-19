import express from "express";
import { Router } from "express";
import { signup } from "../controller/auth.controller.js";

const router = Router();

// router.get("/test", (req, res) => {
//     res.send("hello world");
// })
router.post("/signup", signup);

export default router;
