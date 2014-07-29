var fs = require('fs');

// file contains: 1234
// after: 12
fs.truncate('file.txt', 2, function(err) {
  if (err) throw err;
  console.log('truncated.');
});
