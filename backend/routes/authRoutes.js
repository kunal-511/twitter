import express from "express";
import { getMe, logIn, logOut, signUp } from "../controllers/authController.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

router.get("/health", (req, res) => {
  res.send("Auth Routes are properly running");
});
router.get("/me", protectRoute, getMe);
router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/logout", logOut);

export default router;
