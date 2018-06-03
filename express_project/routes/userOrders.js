var express = require('express');
var router = express.Router();
var db = require('../db_connect');
var app = express();

var obj = {};


function queryR(query,res){


    db.query(query, function(err,result){

        if(err)
            throw err;
        else{
            //console.log("you have arrived");
            //console.log(result);
            res.end(JSON.stringify(result));

        }

    });
}

router.get('/', function(req, res, next) {
    res.render('userOrders', { title: 'userOrders' });
});

router.get('/Orders', function(req, res, next) {
    queryR('SELECT  i.iid, i.model_no, i.amount, i.price_usd, i.totalPrice, i.is_delivered, cu.first_name, cu.last_name, cu.home_address, cu.email FROM invoices i JOIN customers cu ON i.cid = "'+req.user.cid+'" AND cu.cid = "'+req.user.cid+'"',res);

});

router.get('/cancelOrder/:identifier', function(req, res, next){

    console.log("you're at /cancelOrder");
    //console.log(req.params.identifier);
    var id = req.params.identifier;
    var temp = id.split('_');
    var iid = temp[0];
    var model_no = temp[1];
    console.log(iid);
    console.log(model_no);
    /*var obj = req.body;
    obj = obj[0];*/
    /*var cid = req.user.cid;
    var productId = req.params.id;*/

    var query = db.query('DELETE FROM invoices WHERE iid ="'+iid+'" AND model_no= "'+ model_no+'" ',function(err,result){
    //var query = db.query('SELECT * FROM cart',function(err,result){

        if (err){
            console.error(err);
            res.send('Cant insert into cart');
            return;
        }
        //req.flash('success','You are now registered and can log in');
        console.error(result);
        res.redirect('/userOrders');
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
        res.render('/userOrders');
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
        res.render('/userOrders');
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