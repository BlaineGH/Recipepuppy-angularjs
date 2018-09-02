// All our requires and server.js global variables
let express = require("express");
	app = express();
	path = require('path');
	session = require('express-session');
	bodyparser = require('body-parser');
	port = 1337;
	routes = require("./server/config/routes.js");

// We require our mongoose for functionality but we are not using mongo for this project.
// require("./server/config/mongoose.js");

// Our Body Parsers for our data.
app.use(bodyparser.urlencoded({ extended: true })); 
app.use(bodyparser.json()); //We are parsing json data.
app.use(express.static(path.join(__dirname + "/client/dist/client/")));

// Session data (not used here, but we like it just incase.)
app.use(session({
	secret: 'hushdonttell',
	proxy: true,
	resave: false,
	saveUninitialized: true
}));



// All out roots are in the ./config/routes.js
routes(app);

// Our server port:
app.listen(port, () => {
	console.log("listening on port 1337");
});

// Socket logic: We are not using this for our project but I like it to stay here.
// var io = require("socket.io").listen(server);
// io.sockets.on('connection', (socket)=> {
// 	console.log("Client/socket is connected!");
// 	console.log("Client/socket id is: ", socket.id);
// 	//Socket code here:
// });