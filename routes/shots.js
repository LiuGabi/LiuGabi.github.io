var express = require("express");
var shots = express.Router();

var moment = require("moment");

var shotModel = require('../models/shotModel');



shots.get('/shots', function(req, res) {

	var query =  shotModel.find({}, function(err, results) {




		if (err) {

			console.log(err);

		} else {


			for(var i = 0; i < results.length; i++) {

				results[i].time = moment(results[i].time).format("MMM Do YY");

				console.log(moment(results[i].time).format("MMM Do YY"));

			}

			res.render('layout/default', {

				css: 'css/shots.css',
				layout: '../shots/index',
				item: results

			});

		}

	});

});


// Update love data
shots.post('/shots', function(req, res) {
	
	var where = {id: req.body.id},
    option = {$set: {love: req.body.count}};

    shotModel.update(where, option, function(err) {

    	if (err) {

    		console.log('update error');

    		res.json({error: "error"});

    	} else {

    		console.log('update success:');

    		res.json({success: "success"});

    	}

    });

});



module.exports = shots;