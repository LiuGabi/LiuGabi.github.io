var express = require("express");

var now = express.Router();

now.get('/now', function(req, res) {

	res.render('layout/default', {

		layout: '../now/index'

	});

});

module.exports = now;