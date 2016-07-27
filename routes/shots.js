var express = require("express");

var router = express.Router();

router.get('/shots', function(req, res) {

	res.render('layout/default', {

		layout: 'shots/index'

	});

});

module.exports = router;