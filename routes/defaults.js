var express = require("express");
var defaults = express.Router();

var itemModel = require('../models/itemModel');

defaults.get('/', function(req, res) {

	var query =  itemModel.find({}, 'pic', function(err, results) {

		if (err) {

			console.log(err);

		} else {

			res.render('layout/default', {

				css: 'css/home.css',
				layout: '../home/index',
				item: results

			});

		}

	});	

});

module.exports = defaults;