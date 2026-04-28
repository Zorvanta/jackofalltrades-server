
export async function userLogin(req, res){
	const { username, password } = req.body;
	if(!username || !password){
		return res.status(400).send({
		message : "provide username and password"
		});
	}
	
	res.status(200).send({
		end : "end of stream"
	});
}
