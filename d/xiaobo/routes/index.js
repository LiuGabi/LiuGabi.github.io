var express = require('express');
var router = express.Router();

/* get home page. */
router.get('/', function(req, res, next) {
	res.render('default/', { title: 'XiaoBo' });
});

/* get blog detail page. */
router.get('/detail', function(req, res, next) {
	res.render('default/detail', { title: 'XiaoBo - Detail' });
});

/* get tag page. */
router.get('/tag', function(req, res, next) {
	res.render('default/tag', { title: 'XiaoBo - Tag' });
});

/* get classify page. */
router.get('/leave-word', function(req, res, next) {
	res.render('default/leave-word', { title: 'XiaoBo - Classify' });
});

module.exports = router;
