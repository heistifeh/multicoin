import express from "express";
import { verifyToken } from "../utils/verifyToken.js";
import { verifyIdentity } from "../controller/verifyIdentity.controller.js";

const router = express.Router();

router.post("/verify-identity", verifyToken, verifyIdentity);

export default router;
