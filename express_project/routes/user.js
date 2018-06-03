var express = require('express');
var router = express.Router();
var db = require('../db_connect');
var app = express();

var obj = {};

router.get('/', function(req, res){


    db.query('SELECT * FROM products WHERE pid = 1', function(err, result) {
        if(err) throw err;
        else {
            obj = {print: result};
            res.render('user' ,obj /*, {isAuthenticated: req.isAuthenticated(), user: req.user}*/);


        }
    });
});

router.post('/updateMail', function(req, res, next){

    console.log(req.body);
    var obj = req.body;
    obj = obj[0];
    var cid = req.user.cid;
    //var productId = req.params.id;
    console.log(obj);

    var query = db.query('UPDATE customers SET email="'+obj+'" WHERE cid ="'+cid+'" ',function(err,result){
        if (err){
            console.error(err);
            res.send('Cant update email');
            return;
        }
        //req.flash('success','You are now registered and can log in');
        console.error(result);
        res.render('/user');
    });


});


router.post('/updateAddress', function(req, res, next){

    console.log(req.body);
    var obj = req.body;
    obj = obj[0];
    var cid = req.user.cid;
    //var productId = req.params.id;
    console.log(obj);

    var query = db.query('UPDATE customers SET home_address="'+obj+'" WHERE cid ="'+cid+'" ',function(err,result){
        if (err){
            console.error(err);
            res.send('Cant update address');
            return;
        }
        //req.flash('success','You are now registered and can log in');
        console.error(result);
        res.render('/user');
    });


});

router.post('/updatePassword', function(req, res, next){

    //console.log(req.body);
    var obj = req.body;
    obj = obj[0];
    var cid = req.user.cid;
    console.log("b4 hash");
    console.log(obj);

   /*var hashedPassword = md5(obj);

    console.log("after hash");
    console.log(hashedPassword);*/

    var query = db.query('UPDATE customers SET pass="'+obj+'" WHERE cid ="'+cid+'" ',function(err,result){
        if (err){
            console.error(err);
            res.send('Cant update password');
            return;
        }
        //req.flash('success','You are now registered and can log in');
        console.error(result);
        res.render('/user');
    });


});


module.exports = router;