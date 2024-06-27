import express from "express";
import { logIn, logOut, signUp } from "../controllers/authController.js";
const router = express.Router();

router.get("/health", (req, res) => {
  res.send("Auth Routes are properly running");
});

router.post("/signUp", signUp);

export default router;
