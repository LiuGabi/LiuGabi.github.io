var express      = require('express');
var path         = require('path');
// var favicon      = require('serve-favicon');
var bodyParser   = require('body-parser');

var home       = require('./routes/home');
var shots       = require('./routes/shots');
var discover       = require('./routes/discover');
var stories       = require('./routes/stories');
var now       = require('./routes/now');
var user       = require('./routes/user');

var app          = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'static')));

app.use('/', home);
app.use('/', shots);
app.use('/', discover);
app.use('/', stories);
app.use('/', now);
app.use('/', user);

app.use(function (req, res, next) {
    var err    = new Error('Not Found');
    err.status = 404;
    next(err);
});


if (app.get('env') === 'development') {
    app.use(function (err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error  : err
        });
    });
}

app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error  : {}
    });
});

module.exports = app;