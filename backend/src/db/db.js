// test-db.js
import dotenv from "dotenv";
import pg from "pg";
import path from "path";

dotenv.config({ path: path.resolve("/home/av/projects/jack-of-all-trades/backend/.env") });

const { Pool } = pg;

// Create a new connection pool
// A pool is very important and should be reuseable
// it works as a connection key for other directories,
// a doorman by Queuing requests, and a traffic controller
const pool = new Pool({
	host: process.env.PGHOST,
	port: Number(process.env.PGPORT),
	database: process.env.PGDATABASE,
	user: process.env.PGUSER,
	password: process.env.PGPASSWORD,

});
async function testConnection() {
  try {
    // Run a simple query
    const res = await pool.query("SELECT NOW() AS current_time");
    console.log("✅ Connection successful!");
    console.log("Server time:", res.rows[0].current_time);
  } catch (err) {
    console.error("❌ Connection failed:", err.message);
  }
}

// Run the test
testConnection();
export default pool;
