var express = require("express");

var user = express.Router();

var userModel = require('../models/shotModel');

user.get('/user', function(req, res) {

	res.render('layout/default-user', {
		css: 'css/user.css',
		layout: '../user/index'
	});

});

user.post('/user', function(req, res) {
	
	var data = {id: 55, love: 22, pic: "66", title: req.body.title, content: req.body.content, time: "2016-10-20"};

	var p = new userModel(data);

	console.log(req.body.title);

    p.save();

});

module.exports = user;