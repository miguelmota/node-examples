var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

function onMessage(msg) {
  console.log('Message:', msg);
}

function onAlert(msg) {
  console.log('Alert:', msg);
}

ee.on('message', onMessage);
ee.on('alert', onAlert);
ee.once('boop', function(msg) {
  console.log('Boop:', msg);
})

ee.emit('message', 'hello'); // "Message: hello"
ee.emit('alert', 'warning'); // "Alert: warning"
ee.emit('boop', 'beep'); // "Boop: beep"
ee.emit('boop', 'bip'); // does nothing

console.log(ee.listeners('message')); // [ [Function: onMessage] ]

ee.removeListener('message', onMessage);
ee.removeAllListeners();

ee.emit('alert', 'warning'); // does nothing
ee.emit('message', 'hello'); // does nothing

ee.setMaxListeners(0); // defaults to 10, 0 is unlimited
