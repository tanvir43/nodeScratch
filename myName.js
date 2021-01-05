var http = require('http')
var naming = require('./myFirstModule')
http.createServer(function(req, res){
	res.write(naming.myName("Tanvir Raihan", Date()), );
	res.end();
}).listen('8080')
