var fs = require('fs');

fs.chmod('file.txt', 0775, function(err) {
  if (err) throw err;
  console.log('changed permissions.');
});
