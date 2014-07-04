var http = require('http');
var domain = require('domain');
var serverDomain = domain.create();

serverDomain.run(function() {
  http.createServer(function(req, res) {

    // each request will have own domain
    var reqd = domain.create();
    reqd.add(req);
    reqd.add(res);
    console.log(req.url);
    reqd.on('error', function(err) {
      console.error('Error:', err, req.url);
      try {
        res.writeHead(500);
        res.end('Error occured sorry.');
      } catch (er) {
        console.log('Error sending 500', er, req.url);
      }
    });
  }).listen(1337);
});
