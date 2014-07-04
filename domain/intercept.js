var domain = require('domain');
var d = domain.create();
var fs = require('fs');

// notice no error parameter
fs.readFile('fake.txt', d.intercept(function(data) {

  return cb(null, data);
}));

d.on('error', function(err) {
  console.error('Error:', err); // Error: { [Error: ENOENT, open 'fake.txt'] }
});
