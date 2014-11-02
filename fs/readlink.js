var fs = require('fs');

fs.readlink('filelink.txt', function(err, linkString) {
  if (err) throw err;
  console.log('link:', linkString); // file.txt
});
