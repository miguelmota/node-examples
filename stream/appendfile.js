var fs = require('fs');

fs.appendFile('file.txt', 'hello', {encoding: 'utf8', mode: 0666}, function(err) {
  if (err) throw err;
  console.log('appended to file.');
});
