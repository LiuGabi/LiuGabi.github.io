var express = require("express");
var shots = express.Router();

var moment = require("moment");

var shotModel = require('../models/articleModel');



shots.get('/shots', function(req, res) {

	var query =  shotModel.find({}, function(err, results) {

		var handleResults = [];

		for(var i = 0; i < results.length; i++) {

			handleResults.push({

				id: results[i].id,
				love: results[i].love,
				pic: results[i].pic,
				title: results[i].title,
				content: results[i].content,
				time: moment(results[i].time).endOf('day').fromNow()

			});

		}


		if (err) {

			console.log(err);

			console.log("Gabi");

		} else {

			res.render('layout/default', {

				css: 'css/shots.css',
				layout: '../shots/index',
				item: handleResults

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