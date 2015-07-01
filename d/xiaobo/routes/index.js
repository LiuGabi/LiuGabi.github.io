var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('default/', { title: 'XiaoBo' });
});

/* GET demo page. */
router.get('/demo', function(req, res, next) {
	res.render('demo/', { title: 'XiaoBo - Demo' });
});

module.exports = router;
