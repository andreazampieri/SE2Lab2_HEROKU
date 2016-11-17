var http = require('http');

var server = http.createServer(function(req,res)
{
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.end("helloworld!");
});

server.listen(42424,'127.0.0.1');

console.log('Server running on localhost:42424');

