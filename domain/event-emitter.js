var EventEmitter = require('events').EventEmitter;
var domain = require('domain');
var d = domain.create();
var ee = new EventEmitter();

d.on('error', function(err) {
  console.error('Error:', err); // Error: { [Error: Boop error]}
});

d.run(function() {


});

d.add(ee);

ee.on('boop', function() {
  throw new Error('Boop error');
});

ee.emit('boop');

d.remove(ee);
