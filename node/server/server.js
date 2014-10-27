/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-10-27 11:26:18
 * @version $Id$
 */
var http = require("http");
var url = require("url");

function start(route,handle) {

	function onRequest(request,response) {

		var pathname = url.parse(request.url).pathname;

		console.log("Request for" + pathname + "recived.");

		route(handle,pathname);

		response.writeHead(200,{"Content-Type":"text/plain"});

		var content = route(handle,pathname);

		response.write(content);
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("server has started.");

}

exports.start = start;