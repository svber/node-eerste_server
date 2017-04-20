var http = require('http');

function onRequest(request, response){
	console.log('er as een request');
	response.writeHead(200,{'content-type':'text/html'});
	response.write('<H1>Hello World!</H1>');
	response.end();
}

http.createServer(onRequest).listen(3000);

console.log('de server luistert op port 3000');