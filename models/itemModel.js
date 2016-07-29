var mongoose = require("mongoose");

var database = require("../models/dbconnect");

var Schema = mongoose.Schema;

var itemSchema = new Schema({
	id: String,
	pic: String 
});

var itemModel = mongoose.model('Item', itemSchema);

// test database is connected
// var db = mongoose.connection;
// db.on('error',console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// 	console.log('We are connected.');
// });

module.exports = itemModel;