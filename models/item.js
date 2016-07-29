var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/vblog');

var itemScheMa = mongoose.Schema({
	id: String ,
	pic: String 
});

var item = mongoose.model('item', itemScheMa);

// var mongoose = require("mongoose");


// var db = mongoose.connection;
// db.on('error',console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// 	console.log('We are connected.');
// });


var query =  item.find(query, "pic", function(err, docs) {

	console.log(docs[0]);

});

module.exports = item;