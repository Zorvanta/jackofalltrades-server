import bcrypt from "bcrypt";
import { findUserByUsername } from "../queries/users.queries.js";
//controller function for creating a user
export async function createUser(req,res){
const { email, username, password } = req.body;
//the amount of work bcrypt does
const saltRounds = 10;
//validate email, username, and password were input
	if(!email || !username || !password){
		return res.status(400).json({
			 error: "email, username, and password are required"
			});
	}
//query the database to see if the input username is unique
	try{
		const existingUser = await findUserByUsername(username);
		
		if (existingUser.rowCount > 0){
			return res.status(409).json({
				error: "username already exists"
			});
		}
	} catch (error) {
		console.error("Error checking username:", error);
		
		return res.status(500).json({
			error: "internal server error"
		});
	}
//hash password
const passwordHash = await bcrypt.hash(password, saltRounds);
console.log(password);
console.log(passwordHash);
return res.status(200);
}
