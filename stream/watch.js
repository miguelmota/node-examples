var fs = require('fs');

var filename = 'file.txt',
    watcher;

function listener(event, filename) {
  console.log('event:', event);
  console.log('triggered by file:', filename);

  watcher.close();
}

// persistent: run process as long as files being watched
watcher = fs.watch(filename, {persistent: true, interval: 1000}, listener);
