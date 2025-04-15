import express from "express";
import { Router } from "express";

const router = Router();

router.get("/test", (req, res) => {
    res.send("hello world");
})

router.get("/show-identity", showIdentity)
export default router