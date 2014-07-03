var EventEmitter = require('events').EventEmitter;

function Robot() {
  EventEmitter.call(this);

  this.move = function(direction) {
    this.emit('move', direction);
  };
}


Robot.prototype = Object.create(EventEmitter.prototype);

var robot = new Robot();

robot.on('move', function(direction) {
  console.log('Move:', direction);
});

robot.move({left: 10}); // "Move: { left: 10 }"
