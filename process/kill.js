process.on('SIGHUP', function() {
  console.log('Got SIGHUP signal.');
});

process.nextTick(function() {
  // suicide
  process.kill(process.pid, 'SIGHUP');
});
