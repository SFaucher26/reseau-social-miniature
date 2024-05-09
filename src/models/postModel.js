import db from "../services/db.js";

export default class Post {
  constructor(content, image, tags, created_at) {
    this.content = content;
    this.image = image;
    this.tags = tags;
    this.created_at;
  }

  async save() {
    const client = await db.connect();
    try {
      const queryText =
        "INSERT INTO posts (content, image, tags, created_at) VALUES ($1, $2, $3, $4) RETURNING *";
      const values = [this.content, this.image, this.tags];
      const result = await client.query(queryText, values);
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  static async findAllPosts() {
    const client = await db.connect();
    try {
      const queryText = "SELECT * FROM posts";
      const result = await client.query(queryText);
      return result.rows;
    } finally {
      client.release();
    }
  }

  static async findPostTrendings() {
    const client = await db.connect();
    try {
      const queryText = `SELECT
      posts.id,
      posts.content, 
      posts.created_at AS date, 
      COUNT(like_posts.post_id) AS id_like 
      FROM 
      posts 
      INNER JOIN 
      like_posts ON like_posts.post_id = posts.id 
      GROUP BY 
      posts.id, posts.content, posts.created_at
      ORDER BY 
      id_like DESC`;
      const result = await client.query(queryText);
      return result.rows;
    } finally {
      client.release();
    }
  }

  static async findPostNewest() {
    const client = await db.connect();
    try {
      const queryText = `SELECT * FROM posts ORDER BY created_at DESC`;
      const result = await client.query(queryText);
      return result.rows;
    } finally {
      client.release();
    }
  }

  static async findPostById(postId) {
    const client = await db.connect();
    try {
      const queryText = "SELECT * FROM posts WHERE id = $1";
      const values = [postId];
      const result = await client.query(queryText, values);
      return result.rows[0];
    } finally {
      client.release();
    }
  }
}
