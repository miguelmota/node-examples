var domain = require('domain');
var d = domain.create();
var fs = require('fs');

fs.readFile('fake.txt', d.bind(function(err, data) {
  if (err) throw err;
}));

d.on('error', function(err) {
  console.error('Error:', err); // Error: { [Error: ENOENT, open 'fake.txt'] }
});
