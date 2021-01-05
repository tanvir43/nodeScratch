var fs = require('fs')
fs.open('open.txt', 'r', function(err, file){
	if (err) throw err;
	console.log("Saved and open!!")
})
