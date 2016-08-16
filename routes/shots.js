var express = require("express");
var shots = express.Router();

var shotModel = require('../models/shotModel');



shots.get('/shots', function(req, res) {

	// console.log(req.params.count);

	console.log(req.query.count);

	var query =  shotModel.find({}, function(err, results) {

		if (err) {

			console.log(err);

		} else {

			res.render('layout/default', {

				css: 'css/shots.css',
				layout: '../shots/index',
				item: results

			});

		}

	});	

	// var love = { love: req.query.count };

	// shotModel.update(love, { love: '' }, options, callback);

	var condiction = {_id: req.query.id},
        option = {$set: {love: req.query.count}};

    	shotModel.update({_id: req.query.id}, { $set: { love: req.query.count } } }, callback);


});

module.exports = shots;