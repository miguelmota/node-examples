var fs = require('fs');

fs.readdir('.', function(err, files) {
  if (err) throw err;
  console.log('files:', files); // array of files
});
