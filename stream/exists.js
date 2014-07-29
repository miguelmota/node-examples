var fs = require('fs');

fs.exists('file.txt', function(exists) {
  console.log('exists:', exists);
});
