
import pg from 'pg';

// services / db.js
const pool = new pg.Pool({
  user: process.env.PG_USER ?? 'postgres',
  host: process.env.PG_HOST ?? 'localhost',
  database: process.env.PG_DATABASE ?? 'reseau_social',
  password: process.env.PG_PASSWORD ?? 'postgres',
  port: process.env.PG_PORT ?? 5432
})

export default pool









