var fs = require('fs');

// delete file
fs.unlink('file.txt', function(err) {
  if (err) throw err;
  console.log('deleted.');
});
