var domain = require('domain');
var d = domain.create();
var fs = require('fs');

d.on('error', function(err) {
  console.error('Error:', err); // Error: { [Error: ENOENT, open 'fake.txt'] }
  console.log(err.domain);
  console.log(err.domainEmitter);
  console.log(err.domainBound);
});

d.run(function() {
  fs.readFile('fake.txt', function(err, data) {
    if (err) throw err;
    console.log(data);
  });
});

console.log(d.members);
