var fs = require('fs');

fs.open('file.txt', 'r+', 0775, function(err, fd) {
  if (err) throw err;
  console.log('open:', fd); // file descriptor
});
