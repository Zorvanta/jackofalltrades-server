import { findUserByUsername } from "../queries/users.queries.js";
//controller function for creating a user
export async function createUser(req,res){
const { email, username, password } = req.body;
	if(!email || !username || !password){
		return res.status(400).json({
			 error: "email, username, and password are required"
			});
	}
	try{
		const existingUser = await findUserByUsername(username);
		
		if (existingUser.rowCount > 0){
			return res.status(409).json({
				error: "username already exists"
			});
		}
	return res.status(200).json({
			message: "username is available"
		});
	} catch (error) {
		console.error("Error checking username:", error);
		
		return res.status(500).json({
			error: "internal server error"
		});
	}

}
