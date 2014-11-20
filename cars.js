var http = require("http");
http.createServer(function(req, response) {

	var body = '<html>'+
	'<head>'+
	'<meta http-equiv="Content-Type" content="text/html; '+
	'charset=UTF-8" />'+
	'</head>'+
	'<body>'+
	'<a href="/index.html">'+
	'ok'+
	'</a>'
	'</body>'+
	'</html>';
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();

}).listen(88,"127.0.0.1");