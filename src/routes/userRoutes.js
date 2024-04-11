// routes/userRoutes.js
import express from "express";

import {
  getUserByIdController,
  getCurrentUser,
  createUser,
} from "../controllers/userController.js";
import { requireAuthToken } from "../middlewares/authToken.js";

const router = express.Router();

router.get("/users/current", requireAuthToken, getCurrentUser);
router.get("/users/:id", getUserByIdController);
router.post("/users", createUser);

export default router;
