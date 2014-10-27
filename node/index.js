/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-10-27 11:26:18
 * @version $Id$
 */

var server = require("./server/server.js");
var route = require("./route/route.js");
var requestHandlers = require("./requestHandlers/requestHandlers.js");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(route.route,handle);