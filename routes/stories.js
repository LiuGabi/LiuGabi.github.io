var express = require("express");

var stories = express.Router();

stories.get('/stories', function(req, res) {

	res.render('layout/default', {

		layout: '../stories/index'

	});

});

module.exports = stories;