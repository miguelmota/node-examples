var buf, buf2, buf3, len, str;

// write

buf = new Buffer(256); // allocates 256 octets
len = buf.write('\u00bd + \u00bc = \u00be', 0); // string, offset, length, encoding
str = buf.toString('utf8', 0, len); // encoding, start, end
console.log(len + ' bytes: ' +  str);  // 12 bytes: ½ + ¼ = ¾
console.log(buf.length); // 256



// stringify

buf = new Buffer('moogs');
console.log(JSON.stringify(buf)); // [109,111,111,112]



// toString

str = 'moogs';
buf = new Buffer(str.length);
[].slice.call(str).forEach(function(v,i) {
  buf[i] = str.charCodeAt(i); // 109, 111, 111, 103, 115
});

console.log(buf); //  <Buffer 93 6f 6f 67 73>
console.log(buf.toString()); // moogs



// isBuffer

buf = new Buffer(8);
console.log(Buffer.isBuffer(buf)); // true
console.log(Buffer.isBuffer({})); // false



// length vs byteLength

str = '\u00bd + \u00bc = \u00be';
console.log(str + ': ' + str.length + ' characters, ' + Buffer.byteLength(str, 'utf8') + ' bytes'); // ½ + ¼ = ¾: 9 characters, 12 bytes



// concat

buf = new Buffer('hello, ');
buf2 = new Buffer('world');
buf3 = Buffer.concat([buf,buf2]);
console.log(buf3.toString()); // hello, world



// fill

buf = new Buffer(25);
buf.fill('a');
var str = buf.toString()
console.log(str.length, str); // 25 'aaaaaaaaaaaaaaaaaaaaaaaaa



// copy
buf = new Buffer(32);
buf2 = new Buffer(32);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97; // a
  buf2[i] = 33; // !
}
// copy buf to buf2,
// starting at 8th byte on buf2,
// and bytes 16 to 19 only from buf
buf.copy(buf2, 8, 16, 20);
console.log(buf2.toString('ascii', 0, 25)); // !!!!!!!!qrst!!!!!!!!!!!!!



// slice

buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97; // a
}
buf2 = buf.slice(0,3);
console.log(buf2.toString('ascii')); // abc
