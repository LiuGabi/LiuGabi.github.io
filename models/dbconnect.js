var mongoose = require("mongoose");

var dbconnect = mongoose.connect('mongodb://localhost/vblog');

module.exports = dbconnect;