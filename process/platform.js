console.log(process.platform); // darwin

// processor architecture
console.log(process.arch); // x64

console.log(process.memoryUsage()); // { rss: 10702848, heapTotal: 4083456, heapUsed: 2162592 }

console.log(process.uptime()); // 0

// returns seconds and nanoseconds tuple array
var time = process.hrtime();
console.log(time); // [ 385092, 676330178 ]

setTimeout(function() {
  var diff = process.hrtime(time);
  console.log(diff); // [ 1, 1397074 ]
  console.log('bechmark took %d nanoseconds', diff[0] * 1e9 + diff[1])
}, 1000);
