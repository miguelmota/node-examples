var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');

var str = new Buffer('\u03C0');
console.log(decoder.write(str)); // π
// same as
console.log(str.toString('utf8')); // π
