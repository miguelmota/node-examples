// node --harmony process/argv.js one two=three four

console.log(process.argv);
/*
[ 'node',
  '/Users/moogs/Dropbox/Development/workspace/node-examples/process/argv.js',
  '0',
'foo=1' ]
*/

// start up options preceding script name
console.log(process.execArgv); // [ '--harmony' ]
