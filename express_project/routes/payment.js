var express = require('express');
var router = express.Router();
var db = require('../db_connect');
var PDFDocument = require('pdfkit');
var fs = require('fs');
var nodemailer = require('nodemailer');

var obj = {};
var finalarr = [];
var clientInfo = [];
var total = 0;
var cid = "";


router.get('/', function(req, res){
    // clientInfo[0] = req.user.first_name;
    // clientInfo[1] = req.user.last_name;
    // clientInfo[2] = req.user.home_address;
    // clientInfo[3] = req.user.email;
    db.query('SELECT pid FROM cart where cid = "'+req.user.cid+'"', function(err, result) {
        if(err) throw err;
        else {
            obj = {print: result};
           // results = result;
            //console.log(results);
            res.render('payment', obj);
        }
    });
    //console.log(results);
    //pdfCreate();

});


router.post('/invoice', function(req, res, next){

    clientInfo[0] = req.user.first_name;
    clientInfo[1] = req.user.last_name;
    clientInfo[2] = req.user.home_address;
    clientInfo[3] = req.user.email;
    cid = req.user.cid;


    var query = db.query('SELECT pid, amount, price_usd FROM cart WHERE cid ="'+req.user.cid+'"',function(err,result){
        if (err){
            console.error(err);
            res.send('Cant insert into cart');
            return;
        }
        //req.flash('success','You are now registered and can log in');
        //console.error(result);
        finalarr = result;
		finalarr.push(req.user.email);
        //console.log(finalarr);
        //console.log(finalarr);
        //pdfCreate();
    });

    /*for(var i = 0; i < finalarr.length - 1; i++) {
        var quantity = parseInt(finalarr[i].amount);
        alert(quantity);
        var q = db.query('UPDATE products SET quantity = quantity - "' + quantity + '" WHERE model_no = "' + finalarr[i].pid + '"', function (err, result) {
            //console.log(q);

            if (err) {
                console.log("an error occured ");
                console.error(err);
                return;
            }


        });
    }*/


});

// router.post('/total', function(req, res, next){
//     console.log(req.body);
//     total = req.body;
//
// });


module.exports = router;