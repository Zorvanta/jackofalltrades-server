import { Router } from "express";
import pool from "../db/db.js";

const router = Router();

router.get("/", async (req,res) => {
	try {
	const result = await pool.query(
		`SELECT id,
		name
	        FROM skills
		ORDER BY id ASC`
	);
	res.json(result.rows);
	} catch (err) {
	console.error(err);
	res.status(500).json({ error: err.message });
	}
});
export default router;

