var express = require("express");

var defaults = express.Router();

defaults.get('/', function(req, res) {

	res.render('layout/default', {

		css: 'css/home.css',
		layout: '../home/index'

	});

});

module.exports = defaults;