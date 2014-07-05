process.nextTick(function() {
  process.exit(1); // Exit code: 1
});

process.on('exit', function(code) {
  console.log('Exit code:', code);
});
