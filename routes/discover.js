var express = require("express");

var discover = express.Router();

discover.get('/discover', function(req, res) {

	res.render('layout/default', {

		layout: '../discover/index'

	});

});

module.exports = discover;