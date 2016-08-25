var mongoose = require("mongoose");

var database = require("../models/dbconnect");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
	love: Number,
	pic: String,
	title: String,
	content: String,
	time: Date
});

var articleModel = mongoose.model('Article', articleSchema);

// test database is connected
// var db = mongoose.connection;
// db.on('error',console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// 	console.log('We are connected.');
// });

module.exports = articleModel;