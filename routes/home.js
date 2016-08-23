var express = require("express");

var home = express.Router();


home.get('/', function(req, res) {

	res.render('layout/default', {
		css: 'css/home.css',
		layout: '../home/index'
	});

});

module.exports = home;