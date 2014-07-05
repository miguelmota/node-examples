// Callback in this queue will get executed at the very beginning of the next tick of the event loop. More optimized way of doing setTimeout(function(){},0);
process.nextTick(function() {
  console.log('world');
});

console.log('Hello, ');

// Hello,
// world



// The process.maxTickDepth value is the maximum depth of nextTick-calling nextTick-callbacks that will be evaluated before allowing other forms of I/O to occur.
process.maxTickDepth = 1000; // default

// Infinite loop!
/*
process.nextTick(function foo() {
  process.nextTick(foo);
});
*/
