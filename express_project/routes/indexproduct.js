var express = require('express');
var router = express.Router();
var db = require('../db_connect');


var authCheck = (req,res,next) => {     //
	if (req.user){
		
		console.log(req.user.first_name);
		res.render('indexproduct',{username: req.user.first_name});
		
	}else {
		console.log("Not logged in");
		
	}
};

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
      console.log("isLoggedIn");
        return next();
    }
    console.log(req.isAuthenticated())
    res.redirect("/signup");
};

function isProductManager(req,res,next){

   
       var q=db.query("SELECT * FROM `customers` WHERE `status` = 1;" ,function(err,manager){
         console.log("isProductManager");
         console.log(manager);
         console.log(req.user.email);
         console.log(manager[0].email);
         if(req.user.email==manager[0].email){
         console.log("product manager");
         return next();
         }
         res.redirect("/");
       });

};

var obj = {};
router.get('/', isLoggedIn, isProductManager, function(req, res){
	
    db.query('SELECT * FROM products WHERE pid IN (10000001,10000002,10000003,10000004,10000005,10000006,10000007,10000008)', function(err, result) {
        if(err) throw err;
        else {
            obj = {print: result};
            res.render('indexproduct' ,obj /*, {isAuthenticated: req.isAuthenticated(), user: req.user}*/);
        }
    });
});




module.exports = router;