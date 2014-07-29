var fs = require('fs');

// types: dir, file, junction
fs.symlink('file.txt', 'filelink.txt', 'file', function(err) {
  if (err) throw err;
  console.log('linked.');
});
