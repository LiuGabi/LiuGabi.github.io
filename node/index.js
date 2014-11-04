var server = require("./server/server");
var route = require("./route/route");
var requestHandlers = require("./requestHandlers/requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(route.route,handle);