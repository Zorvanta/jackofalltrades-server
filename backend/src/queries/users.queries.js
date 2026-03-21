import pool from "../db/db.js";

export async function findUserByUsername(username) {
const result = await pool.query(
	"SELECT id, email, username, password_hash, created_at FROM users WHERE username = $1", [username]
	);
	return result;
}
