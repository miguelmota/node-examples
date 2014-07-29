var fs = require('fs');

fs.rename('old.txt', 'new.txt', function(err) {
  if (err) throw err;
  console.log('renamed.');
});
