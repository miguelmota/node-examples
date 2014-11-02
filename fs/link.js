var fs = require('fs');

fs.link('file.txt', 'file2.txt', function(err) {
  if (err) throw err;
  console.log('copied.');
});
