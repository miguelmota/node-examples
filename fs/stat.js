var fs = require('fs');

fs.stat('file.txt', function(err, stats) {
  if (err) throw err;
  console.log('stats:', JSON.stringify(stats));
  console.log('isFile:', stats.isFile());
  console.log('isDirectory:', stats.isDirectory());
  console.log('isBlockDevice:', stats.isBlockDevice());
  console.log('isCharacterDevice:', stats.isCharacterDevice());
  console.log('isSymbolicLink:', stats.isSymbolicLink());
  console.log('isFIFO:', stats.isFIFO());
  console.log('isSocket:', stats.isSocket());

  // stats: {"dev":16777218,"mode":33188,"nlink":1,"uid":501,"gid":20,"rdev":0,"blksize":4096,"ino":37644732,"size":0,"blocks":0,"atime":"2014-07-29T03:17:19.000Z","mtime":"2014-07-29T03:17:19.000Z","ctime":"2014-07-29T03:17:19.000Z"}

});

fs.lstat('/some-symbolic-link', function(err, stats) {
  //if (err) throw err;
  console.log('symlink stats:', JSON.stringify(stats));
});
