var mongoose = require("mongoose");

var database = require("../models/dbconnect");

var Schema = mongoose.Schema;

var shotSchema = new Schema({
	itemId: String,
	love: Number,
	pic: String 
});

var shotModel = mongoose.model('Shot', shotSchema);

// test database is connected
// var db = mongoose.connection;
// db.on('error',console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// 	console.log('We are connected.');
// });

module.exports = shotModel;