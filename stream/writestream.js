var fs = require('fs');

var stream = fs.createWriteStream('output.txt', {encoding: 'utf8'});

stream.once('open', function(fd) {
  stream.write('My first row\n');
  stream.write('My second row\n');
  stream.end();
  console.log('file written.');
});
