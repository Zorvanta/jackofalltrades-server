//controller function for creating a user
export async function createUser(req,res){
const { email, username, password } = req.body;
	if(!email || !username || !password){
		return res.status(400).json({
			 error: "email, username, and password are required"
			});
	}else{
		return res.status(200).json({
			fields: "email, username, and password were sent"
		});
	}
}
