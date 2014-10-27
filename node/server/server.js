/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-10-27 11:26:18
 * @version $Id$
 */
console.log("server");
var http = require("http");

function start() {
	function onRequest(request,response) {
		console.log("request received")
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("Hello World");
		response.end();
	}	
	http.createServer(onRequest).listen(8888);
	console.log("server has started.")
}
exports.start = start;