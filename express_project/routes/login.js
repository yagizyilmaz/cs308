var express = require('express'),
router = express.Router();
var passport = require('passport');
var passportLocal = require('passport-local').Strategy;


router.get('/', function(req,res,next){
	res.render('login', {title: 'login'});

});

router.post('/', function(req,res){
	passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/signup'
	})
});

module.exports = router;