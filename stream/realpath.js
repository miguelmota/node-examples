var fs = require('fs');

// retrieved cached path if one
var cache = {'/etc': '/private/etc'};
fs.realpath('/etc/passwd', cache, function(err, resolvedPath) {
  if (err) throw err;
  console.log('resolved path:', resolvedPath); // /private/etc/passwd
});
