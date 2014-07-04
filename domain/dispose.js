var domain = require('domain');
var d = domain.create();

d.on('dispose', function() {
  console.log('Disposed'); // Disposed
});

d.dispose();
