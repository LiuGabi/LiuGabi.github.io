var express = require("express");

var defaults = express.Router();

defaults.get('/', function(req, res) {

	res.render('layout/default', {

		layout: '../home/index'

	});

});

module.exports = defaults;