var domain = require('domain');
var d = domain.create();

console.log(process.cwd());

d.on('error', function(err) {
  console.error('Error:', err);
});

d.run(function() {
  process.chdir('/tmp');
  console.log(process.cwd());
});
