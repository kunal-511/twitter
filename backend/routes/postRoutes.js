import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  createPost,
  deletePost,
  likeUnlikePost,
  commentOnPost,
  getAllPosts,
  getLikedPosts,
  getAllFollowingPosts,
  getUserPosts,
} from "../controllers/postController.js";
const router = express.Router();

router.get("/health", (req, res) => {
  res.send("post routes are properly running");
});
router.get("/all", protectRoute, getAllPosts);
router.get("/likes/:id", protectRoute, getLikedPosts);
router.get("/following", protectRoute, getAllFollowingPosts);
router.get("/user/:username", protectRoute, getUserPosts);
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/comment/:id", protectRoute, commentOnPost);
export default router;
