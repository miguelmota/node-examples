var fs = require('fs');

var buf = new Buffer(3), // buffer to write to
    offset = 0, // offset in buffer to write to
    len = 3, // number of bytes to ready
    pos = null; // where to begin reading from file

fs.open('file.txt', 'r+', function(err, fd) {
  if (err) throw err;

  fs.read(fd, buf, offset, len, pos, function(err, bytesRead, buffer) {
    if (err) throw err;
    console.log('bytes read:', bytesRead);
    console.log('buffer:', buf.toString());
  });

})
