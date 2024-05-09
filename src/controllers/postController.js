import Post from "../models/postModel.js";

export async function getAllPost(req, res) {
  const posts = await Post.findAllPosts();
  if (posts) {
    res.json(posts);
  } else {
    res.status(500).send("Internal error");
  }
}

export async function getTrendingsPost(req, res) {
  const posts = await Post.findPostTrendings();
  if (posts) {
    res.json(posts);
  } else {
    res.status(500).send("Internal error");
  }
}
export async function getNewestPost(req, res) {
  const posts = await Post.findPostNewest();
  if (posts) {
    res.json(posts);
  } else {
    res.status(500).send("Internal error");
  }
}

export async function getPostById(req, res) {
  const requestedId = req.params.id;
  const post = await Post.findPostById(requestedId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: "User not found" });
  }
}
