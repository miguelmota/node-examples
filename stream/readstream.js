var fs = require('fs');

var stream = fs.createReadStream('file.txt', {encoding: 'utf8', autoClose: true}); // autoclose file descriptor after done or error

stream.pipe(process.stdout);
