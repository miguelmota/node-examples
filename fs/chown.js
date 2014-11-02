var fs = require('fs');

// u(ser)id, g(roup)id
// $ id
fs.chown('file.txt', 501, 20, function(err) {
  if (err) throw err;
  console.log('changed owner.');
});
