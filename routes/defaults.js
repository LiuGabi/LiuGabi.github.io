var express = require("express");

var defaults = express.Router();


defaults.get('/', function(req, res) {

	res.render('../index');

});

module.exports = defaults;