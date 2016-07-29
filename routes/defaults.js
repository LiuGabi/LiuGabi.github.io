var express = require("express");
var defaults = express.Router();

// var mongoose = require("mongoose");
// 	mongoose.connect('mongodb://localhost/vblog');

// var db = mongoose.connection;
// db.on('error',console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// 	console.log('We are connected.');
// });

var item = require('../models/item');



// var query = item.find({}, {pic: true});


/* get home page */
defaults.get('/', function(req, res) {

	res.render('layout/default', {

		css: 'css/home.css',
		layout: '../home/index'

	});

});

module.exports = defaults;