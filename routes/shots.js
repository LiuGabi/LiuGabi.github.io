var express = require("express");

var shots = express.Router();

shots.get('/shots', function(req, res) {

	res.render('layout/default', {

		css: 'css/shots.css',
		layout: '../shots/index'

	});

});

module.exports = shots;