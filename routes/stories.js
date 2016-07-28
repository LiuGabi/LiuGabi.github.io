var express = require("express");

var stories = express.Router();

stories.get('/stories', function(req, res) {

	res.render('layout/default', {

		css: 'css/stories.css',
		layout: '../stories/index'

	});

});

module.exports = stories;