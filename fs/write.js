var fs = require('fs');

var buf = new Buffer('foo'),
    offset = 0,
    len = buf.length,
    pos = nulll

fs.open('file.txt', function(err, fd) {
  if (err) throw err;

  fs.write(fd, buf, offset, len, pos, function(err, written, buffer) {
    if (err) throw err;
    console.log('bytes wrote:', written);
  });

})
