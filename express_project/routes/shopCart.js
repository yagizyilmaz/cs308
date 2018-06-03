var express = require('express');
var router = express.Router();
var db = require('../db_connect');
var obj = {};
var obj1  = {};

var authCheck = (req,res,next) => {     //
	if (req.user){
		console.log(req.user.email);
		next();
	}else {
		console.log("Not logged in");
	}
};


router.get('/',authCheck, function(req, res, next) {
    db.query('SELECT * FROM cart WHERE cid = "'+req.user.cid+'"', function(err, result) {
        if(err) throw err;
        else {
            obj = {print: result};
            //console.log(obj.pid);
            res.render('shopCart' ,obj /*, {isAuthenticated: req.isAuthenticated(), user: req.user}*/);
        }
    });

   // res.render('shopCart', { title: 'shopping cart' });
   //   res.sendFile('./views/PCBuilder.ejs' ) ;

});


router.post('/shopCartForm', function(req, res, next){

    console.log(req.body);
    var obj = req.body;
    var pid = obj[0];
    var cid = req.user.cid;
    var price = obj[1];
    var amount = obj[2];

    var qry = db.query('SELECT * FROM cart WHERE pid = "'+pid+'" AND cid = "'+cid+'"',function(err,result){
        if (err){
            console.error(err);
            res.send('Cant select from cart');
            //return;
        }
        //req.flash('success','You are now registered and can log in');
        //console.error(result);
        else{
            if (result === undefined || result.length === 0){
                var cartObj = {
                    cid: cid,
                    pid: pid,
                    amount: amount,
                    price_usd: price
                };
                var query = db.query('insert into cart set ?',cartObj,function(err,result){
                    if (err){
                        console.error(err);
                        res.send('Cant insert into cart');
                        return;
                    }
                    //req.flash('success','You are now registered and can log in');
                    console.error(result);

                });
            }
            else{
                console.log("howdy!");
                var q = db.query('UPDATE cart SET amount = amount + "' + amount + '" WHERE pid = "' + pid + '" AND cid = "'+cid+'"', function (err, result) {
                    //console.log(q);

                    if (err) {
                        console.log("an error occured ");
                        console.error(err);
                        //return;
                    }


                });
            }
        }

    });
    /*var cartObj = {
        cid: cid,
        pid: pid,
        amount: amount,
        price_usd: price
    };
    var query = db.query('insert into cart set ?',cartObj,function(err,result){
        if (err){
            console.error(err);
            res.send('Cant insert into cart');
            return;
        }
        //req.flash('success','You are now registered and can log in');
        console.error(result);

    });*/
	// var obj = req.body;
	// var productId = obj[0];
	// console.log(productId);
	
	
});


router.get('/removeProduct/:id', function(req, res, next){

    // console.log(req.body);
    /*var obj = req.body;
    obj = obj[0];*/
    var cid = req.user.cid;
	var productId = req.params.id;

    var query = db.query('DELETE FROM cart WHERE cid ="'+cid+'" AND pid= "'+ productId+'" ',function(err,result){
        if (err){
            console.error(err);
            res.send('Cant insert into cart');
            return;
        }
        //req.flash('success','You are now registered and can log in');
        console.error(result);
		res.redirect('/shopCart');
    });


});

router.post('/updateProduct',function(req,res,next){
	
	var cid = req.user.cid;
	var pid = req.body.pid;
	var quantity = req.body.quantity;
	
	console.log(req.body);
	
	   var q = db.query('UPDATE cart SET amount =  "' + quantity + '" WHERE pid = "' + pid + '" AND cid = "'+cid+'"', function (err, result) {
                    

                    if (err) {
                        console.log("an error occured ");
                        console.error(err);
						
                        
                    }
					res.redirect('/shopCart');


                });
	
	
	
	
	
});


module.exports = router;

