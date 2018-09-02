var path = require("path");
//All routes will default to this path:
module.exports = (app) =>{
	app.all("*", (req,res,next)=>{
		res.sendFile(path.resolve("./client/dist/client/index.html"))
	});
}