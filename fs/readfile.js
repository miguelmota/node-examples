var fs = require('fs');

fs.readFile('file.txt', {encoding: 'utf8'}, function(err, data) {
  if (err) throw err;
  console.log('data:', data);
});
