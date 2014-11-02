var fs = require('fs');

var filename = 'file.txt';

function listener(curr, prev) {
  console.log('current mtime:', curr.mtime);
  console.log('previous mtime:', prev.mtime);

  fs.unwatchFile(filename, listener);
}

// persistent: run process as long as files being watched
fs.watchFile(filename, {persistent: true, interval: 1000}, listener);
