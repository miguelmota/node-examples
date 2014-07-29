var fs = require('fs');

// a(ccess)time, m(odified)time
fs.utimes('file.txt', new Date(2014,01,02), new Date(2014,01,01), function(err) {
  if (err) throw err;
  console.log('updated utimes.'); // 2 Feb  1
});
