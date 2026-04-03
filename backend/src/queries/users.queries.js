import pool from "../db/db.js";

export async function findUserByUsername(username) {
	const result = await pool.query(
		"SELECT id, email, username, password_hash, created_at FROM users WHERE username = $1", [username]
		);
		return result;
}
export async function createUserQuery(email, username, passwordHash) {
	const result = await pool.query(
		`INSERT INTO users (email, username, password_hash)
		 VALUES ($1, $2, $3)
		 RETURNING id, email, username, created_at`,
		 [email, username, passwordHash]
	);
	return result;

}
export async function findEmailbyEmail(email) {
	const result = await pool.query(
		"SELECT email FROM users WHERE email = $1", [email]
	);
	return result;

}
