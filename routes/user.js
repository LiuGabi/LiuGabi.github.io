var express = require("express");

var user = express.Router();

user.get('/user', function(req, res) {

	res.render('layout/default-user', {
		css: 'css/user.css',
		layout: '../user/index'
	});

});

module.exports = user;