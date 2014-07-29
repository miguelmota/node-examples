var fs = require('fs');

fs.rmdir('testdir', function(err) {
  if (err) throw err;
  console.log('removed directory.');
});
