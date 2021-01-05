var fs = require('fs');
fs.appendFile('append.txt', 'My first appended file', function(err){
	if (err) throw err;
	console.log('Saved!!')
})
