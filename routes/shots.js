var express = require("express");

var shots = express.Router();

shots.get('/shots', function(req, res) {

	res.render('layout/default', {

		layout: '../shots/index'

	});

});

module.exports = shots;