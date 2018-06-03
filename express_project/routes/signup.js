var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var db = require('../db_connect');
var passport = require('passport');
var passportLocal = require('passport-local').Strategy;


/* GET sign-up page. */
router.get('/', function(req, res, next) {
	res.render('signup', { title: 'Sign-Up Page' });
});

router.post('/incomingForm', function(req, res, next) {
    //res.render('signup', { title: 'Sign-Up Page' });
    var obj = req.body;
    console.log(obj);
    var name = obj["name"];
    var surname = obj["surname"];
    var taxid = obj["taxid"];
    var email = obj["email"];
    var address = obj["adress"];
	var passwordString = obj["password"];
	var passwordConfirm = obj["passwordConfirm"];
	var tax = obj["taxid"];
	
	console.log(passwordString);
	
	var users = {
	first_name: name,
	last_name: surname,
	email: email,
	home_address: address,
	pass: passwordString,
	taxID:tax
	
	
};
	
	
	
	var query = db.query('insert into customers set ?',users,function(err,result){
	if (err){
		console.error(err);
		res.send('Mail already exists.');
		return;
	}
	//req.flash('success','You are now registered and can log in');
	console.error(result);
	
});
    
});

/*
router.post("/signup", passport.authenticate("local-login", {
    successRedirect: "/",
    failureRedirect: "/signup"
}) , function(req, res){

});
*/


/*
router.post("/loginForm",function(req,res,next) {    // LOGIN
	var obj = req.body;
	var username = obj[1];
	var pass = obj[2];
	console.log(username);
	
	var query = db.query( 'select * from customers where email = ?  and pass = ? ',[username,pass], function(err,result) {
		if (err){
		console.error(err);
		return;
	}
	const token = jwt.sign({email:username},'secret',{expiresIn: "1h"});
	/* return res.status(200).json({
		message:"Authentication successfull",
		token: token
	});*/
	/*
		console.error(token);
	console.error(result);
		
	});
	
}); */




module.exports = router;
