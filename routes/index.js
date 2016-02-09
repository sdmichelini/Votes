var express = require('express');
var router = express.Router();

var login = require('./login');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.use('/login',login.login);
router.use('/logout', login.logout);

// define the home page route
router.get('/', isLoggedIn, function(req, res) {
    console.log('GET login');
  	res.render('home', {name: req.user.local.name, email: req.user.local.email});
});

function isLoggedIn(req, res, next){
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the login page
    res.redirect('/login');
}



module.exports = router;
