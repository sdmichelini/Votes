var express = require('express');
var loginRouter = express.Router();
var logoutRouter = express.Router();
var passport = require('passport');

// define the home page route
loginRouter.get('/', function(req, res) {
    console.log('In Login router Get.');
  	res.render('login', { message: req.flash('message') , error: req.flash('error')});
});
loginRouter.post('/', function(req,res,next){
    console.log('Login Post');
    next();
},passport.authenticate('local-login', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));


logoutRouter.get('/', function(req, res){
    req.flash('message', 'You have successfully logged out.');
    res.redirect('/login');
});

module.exports = {
    login: loginRouter,
    logout: logoutRouter
};
