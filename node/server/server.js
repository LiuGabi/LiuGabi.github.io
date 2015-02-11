var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Requestfor"+pathname+"received.");
		request.setEncoding("utf8");
		request.addListener("data",function(postDataChunk){
			postData+=postDataChunk;
			console.log("ReceivedPOSTdatachunk'"+postDataChunk+"'.");
		});
		request.addListener("end",function(){
			route(handle,pathname,response,postData);
		});
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start=start;
start;