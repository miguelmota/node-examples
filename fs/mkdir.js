var fs = require('fs');

fs.mkdir('testdir', 0775, function(err) {
  if (err) throw err;
  console.log('directory created.');
});
