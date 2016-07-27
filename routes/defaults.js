var express = require("express");

var router = express.Router();

router.get('/', function(req, res) {

	res.render('layout/default', {

		title: 'export',
		layout: 'home/index'

	});

});

module.exports = router;