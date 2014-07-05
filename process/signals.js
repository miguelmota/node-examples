console.log('What is typed will be echoed out. Control-C to send SIGINT.');

process.stdin.resume();

process.stdin.on('data', function(data) {
  console.log('Echo:', data.toString());
});

process.on('SIGINT', function() {
  console.log('Got SIGINT. Press Control-D to exit.');
});
