//Express and Body Parser
var express      = require('express');
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var path = require('path');
var flash = require('connect-flash');
//Environment
var dotenv = require('dotenv');

var app = express();

//Load the Environment Variables
dotenv.load();

//Load Database
mongoose.connect(process.env.MONGODB);

//Load the routes
var routes = require('./routes/index');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

// required for passport
app.use(session({ secret: process.env.SESSION_SECRET })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
require('./config/passport')(passport); // pass passport for configuration

app.set('views', path.join(__dirname, 'views'));

//Jade for our views
app.set('views', './views');
app.set('view engine', 'jade');

app.use('/',routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        console.log(err.message + err);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log(err.message);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



module.exports = app;
