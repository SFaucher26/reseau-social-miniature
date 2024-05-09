import express from "express";

import { getAllPost, getNewestPost, getTrendingsPost, getPostById } from "../controllers/postController.js";

const router = express.Router();

router.get("/posts", getAllPost);
router.get("/posts/trendings", getTrendingsPost);
router.get("/posts/newest", getNewestPost);
router.get("/posts/:id", getPostById)

export default router;
