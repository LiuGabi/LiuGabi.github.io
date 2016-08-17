var express = require("express");
var shots = express.Router();

var shotModel = require('../models/shotModel');



shots.get('/shots', function(req, res) {

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


	var where = {id: req.query.id},
    option = {$set: {love: req.query.count}};

    shotModel.update(where, option, function(err) {

    	if (err) {

    		console.log('update error');

    	} else {

    		console.log('update success');

    	}

    });


});

module.exports = shots;