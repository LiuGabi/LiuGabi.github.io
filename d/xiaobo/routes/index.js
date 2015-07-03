var express = require('express');
var router = express.Router();

/* get home page. */
router.get('/', function(req, res, next) {
	res.render('default/', { title: 'XiaoBo' });
});

/* get demo page. */
router.get('/demo', function(req, res, next) {
	res.render('demo/', { title: 'XiaoBo - Demo' });
});

/* get detail page. */
router.get('/detail', function(req, res, next) {
	res.render('default/detail', { title: 'XiaoBo - Detail' });
});

module.exports = router;
