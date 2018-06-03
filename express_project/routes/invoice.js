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

/*function populateDeliverydb(){
    var deliveryId = 0;
    console.log("yow");
    //checkDb(invoiceId);
    var q = db.query('SELECT MAX(did) AS did FROM delivery', function(err, result) {
        console.log("yow2");
        if(err)
            throw err;
        else {
            //console.log(result);
            if (result === undefined || result.length === 0){
                console.log("setting invoice to zero");
                deliveryId = 0;
            }
            else{
                deliveryId = result[0].did + 1;
            }
        }
    });
    var q1 = db.query('SELECT * FROM delivery WHERE did = 0', function(err, result) {

        for (var i = 0; i < finalarr.length; i++) {
            console.log('sup?');
            console.log(finalarr);
            var total = 0;
            for(var j = 0; j < finalarr.length; j++){
                total += finalarr[j].amount * parseFloat(finalarr[j].price_usd);
            }
            var invoiceObj = {
                did: deliveryId,
                custid: cid,
                model_no: finalarr[i].pid,
                quantity: finalarr[i].amount,
                totalprice: total,
                delivery_address: finalarr[i].home_address
            };
            var query = db.query('insert into delivery set ?', invoiceObj, function (err, result) {
                if (err) {
                    console.error(err);
                    //res.send('Cant insert into invoices');
                    return;
                }
                //req.flash('success','You are now registered and can log in');
                console.error(result);

            });
        }
    });
}*/

function populateInvoicedb(){
    var invoiceId = 0;
    console.log("yow");
    //checkDb(invoiceId);
    for(var j = 0; j < finalarr.length; j++){
        total += finalarr[j].amount * parseFloat(finalarr[j].price_usd);
    }
    total = total/2;
    var q = db.query('SELECT MAX(iid) AS iid FROM invoices', function(err, result) {
        console.log("yow2");
        if(err)
            throw err;
        else {
            //console.log(result);
            if (result === undefined || result.length === 0){
                console.log("setting invoice to zero");
                invoiceId = 0;
            }
            else{
                invoiceId = result[0].iid + 1;
            }
        }
    });
    var q1 = db.query('SELECT * FROM invoices WHERE iid = 0', function(err, result) {

        for (var i = 0; i < finalarr.length; i++) {
            console.log('this is second');
            console.log(invoiceId);
            var invoiceObj = {
                iid: invoiceId,
                cid: cid,
                model_no: finalarr[i].pid,
                amount: finalarr[i].amount,
                price_usd: finalarr[i].price_usd,
                totalPrice: total
            };
            var query = db.query('insert into invoices set ?', invoiceObj, function (err, result) {
                if (err) {
                    console.error(err);
                    res.send('Cant insert into invoices');
                    return;
                }
                //req.flash('success','You are now registered and can log in');
                console.error(result);

            });
        }
    });
    //populateDeliverydb();
}

function pdfCreate(){

    var doc = new PDFDocument;

    //doc.pipe
    //doc = fs.createWriteStream('C:/Users/Tugberk/Desktop/file22.pdf');
    //doc.pipe(fs.createWriteStream('/Users/aynursune/Desktop/file22.pdf'));

    doc.fontSize(18)
        .text('WonderPC.', {align:'center'});

    doc.moveDown(2);
    doc.fontSize(14)
        .text('Thank you for shopping at WonderPC', {align:'center'});
    doc.moveDown(3);
    doc.text('Shipping to:', {align:'left'});

    doc.fontSize(12);
    doc.moveDown(1);
    doc.text(clientInfo[0] + ' ' + clientInfo[1]);

    doc.moveDown(1);
    doc.text(clientInfo[2]);

    doc.moveDown(1);
    doc.fontSize(14);
    doc.text('Products:             Quantity:               Price:');

    doc.moveDown(1);
    doc.fontSize(12);

    for(var i = 0; i < finalarr.length; i++){				// Made  length - 1 because last one is email.
        doc.text(finalarr[i].pid + '                ' + finalarr[i].amount + '              ' + finalarr[i].price_usd);

        var quantity = parseInt(finalarr[i].amount);
        total += (quantity * parseFloat(finalarr[i].price_usd));
        //alert(quantity);
        var q = db.query('UPDATE products SET quantity = quantity - "' + quantity + '" WHERE model_no = "' + finalarr[i].pid + '"', function (err, result) {
            //console.log(q);

            if (err) {
                console.log("an error occured ");
                console.error(err);
                return;
            }


        });
    }

    var emptyCartQuery = db.query('DELETE FROM cart WHERE cid =  "' + cid + '"', function (err, result) {
        //console.log(q);

        if (err) {
            console.log("an error occured ");
            console.error(err);
            return;
        }


    });

    doc.moveDown(3);
    doc.text("Your total is :  " + '     ' + total + ',00 $ + Tax');

    //console.log(finalarr[finalarr.length - 1]);
    var email = finalarr[0].email;
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            /*host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure, // true for 465, false for other ports
            auth: {
                user: account.user, // generated ethereal user
                pass: account.pass // generated ethereal password
            },
            tls:{
                rejectUnauthorized: false
            }*/

            service:"Gmail",
            auth:{
                user: 'wonderstorepc@gmail.com',
                pass: 'p@ssw0rD'
            }



        });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Online Shop" <wonderstorepc@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Invoice ✔', // Subject line
        text: 'Thank you for shopping!', // plain text body
        html: '<b>Thank you for shopping!</b>', // html body
        attachments: [
            {
                filename: 'invoice.pdf',
                contentType: 'application/pdf',
                content:doc
            }]
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});

});

    doc.end();
    populateInvoicedb();
}


router.get('/', function(req, res){
    clientInfo[0] = req.user.first_name;
    clientInfo[1] = req.user.last_name;
    clientInfo[2] = req.user.home_address;
    clientInfo[3] = req.user.email;
    cid = req.user.cid;


    //var query = db.query('SELECT pid, amount, price_usd FROM cart WHERE cid ="'+req.user.cid+'"',function(err,result){
    var query = db.query('SELECT  c.pid, c.amount, c.price_usd, cu.first_name, cu.last_name, cu.home_address, cu.email FROM cart c JOIN customers cu ON c.cid = "'+req.user.cid+'" AND cu.cid = "'+req.user.cid+'"',function(err,result){

        if (err){
            console.error(err);
            res.send('Cant insert into cart');
            return;
        }
        //req.flash('success','You are now registered and can log in');
        //console.error(result);
        finalarr = result;
        //finalarr.push(req.user.email);
        //console.log(result);
        pdfCreate();

        //result['name'] = clientInfo[0];
        obj = {print: result};
        //obj["name"] = clientInfo[0];
        //console.log(obj);
        res.render('invoice', obj);
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

module.exports = router;
