import express from "express";
import {
  signup,
  signin,
  updateProfile,
  checkAuth,
} from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/check-auth", authMiddleware, checkAuth);
router.put("/update-profile", authMiddleware, updateProfile);

export default router;
