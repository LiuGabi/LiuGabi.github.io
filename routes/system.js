var express = require("express");

var system = express.Router();

var systemModel = require('../models/articleModel');

system.get('/system', function(req, res) {

	res.render('layout/default-system', {
		css: 'css/system.css',
		layout: '../system/index'
	});

});

system.post('/system', function(req, res) {
	
	var data = {id: 55, love: 0, pic: "66", title: req.body.title, content: req.body.content, time: "2016-10-20"};

	var p = new systemModel(data);

	console.log(req.body.title);

    p.save(function(err) {
    	console.log(err);
    });

    // upload file

    

});

module.exports = system;