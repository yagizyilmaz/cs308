var express = require('express');
var router = express.Router();
var db = require('../db_connect');
var nodemailer = require('nodemailer');
var PDFDocument = require('pdfkit');
var blobStream = require('blob-stream');
var fs = require('fs');
var http = require('http');
var Blob = require('blob');


var obj2= {};
var obj3= {};
var obj= {};
/* GET PC Builder page. */
router.get('/', function(req, res, next) {
   res.render('salesManager', { title: 'salesManager' });
    // res.sendFile('./views/PCBuilder.ejs' ) ;

});

router.get('/ListAll',function(req2,res2,next2){
    queryR('SELECT * FROM products;',res2);
}); 

router.post('/price',function(req,res,next){
    object= req.body;
    console.log(object);
    var pid = object[0];
    var price = object[1];
    console.log(pid);
    console.log(price);
    var q = db.query('UPDATE products SET price_usd="'+price+'" WHERE pid="' + pid+'";', function(err,result){
        console.log("inside price query");

        if(err){
            console.log(err);
            res.send("0");
            return;
        }

        console.log(result);
        res.send("1");
    });
}); 


router.get('/ChangePrice', function (req,res,next){ //***************************
    console.log("inside change price router.get");
    console.log(req.query);

        var searchK = Object.keys(req.query)[0];
        console.log(searchK);
        var words = searchK.split(" ");
        console.log(words);
        //var array = [];
        var query = "";

        for(var i = 0; i < words.length ; i++){
            if (i !== 0) query += ' UNION ';
                query += 'SELECT * FROM products WHERE name like "%'
                + words[i] + '%" UNION SELECT * FROM products WHERE description like "%'
                + words[i] + '%"';
        }

        console.log(query);

        db.query(query, function(err, result) {
            res.end( JSON.stringify(result));   
        });
    
});


router.post('/salesMan', function(req, res, next){

    console.log("inside salesMan");
    var obj2 = req.body;
    var price = obj2[0];
    var pid = obj2[1];


    console.log(pid);
    console.log(price);

    var query = db.query('UPDATE products SET price_usd = "' + price + '$ + Tax" WHERE pid = "' + pid + '";',function(err,result){
        console.log("salesMan query");
        if (err){
            console.error(err);
            res.send("0");
            return;
        }
        //req.flash('success','You are now registered and can log in');
        console.log(result);
        res.send("1");
    });


});

router.post('/salesMan3', function(req, res, next){

   // console.log(req.body);
    var obj3 = req.body;
    var firstdate = obj3[0];
    var seconddate = obj3[1];
    /*
    firstdate = firstdate.split("-").reverse().join("-");
    seconddate = seconddate.split("-").reverse().join("-");
    */
    console.log(firstdate);
    console.log(seconddate);

    

    var query = db.query('SELECT price_usd FROM invoices WHERE add_date >= "' + firstdate + '" AND add_date <= "' + seconddate + '";',function(err,result){
        if (err){
            console.error(err);
            res.send("0");
            return;
        }
        //req.flash('success','You are now registered and can log in');
        console.error(result);

        var total_revenue=0;

        for(var i=0 ; i<result.length ; i++)
        {
            total_revenue = total_revenue+ parseFloat(result[i].price_usd);

        }


        console.log(total_revenue);
        res.send("1");

    });
 

  
});

router.post('/salesMan2', function(req, res, next){

    var obj = req.body;
    var discount= obj[0];
    var pid2 = obj[1];
    console.log(discount);
    console.log(pid2);
 
    var query2 = db.query('SELECT price_usd FROM products WHERE model_no = "' + pid2 + '" ;',function(err,result2){
        console.log("query2");
        if (err){
            console.error(err);
            res.send('Cant insert into comments');
            return;
        }
        //req.flash('success','You are now registered and can log in');
        console.log(result2);
       console.log(result2[0]);
        var price= parseFloat(result2[0].price_usd);

        var discount_price= price*(100-discount)/100;

        
        var query3 = db.query('UPDATE products SET price_usd = "' + discount_price + '$ + Tax" WHERE pid = "' + pid2 + '";',function(err,result3){
        
        if (err){
            console.error(err);
            res.send('Cant insert into comments');
            return;
        }
        });


        
        console.log(discount_price);


    });

    var query5=db.query('UPDATE products SET on_sale = 1 WHERE model_no= "' + pid2 + '";',function(err,result3){
      if (err){
            console.error(err);
            res.send('Cant insert into comments');
            return;
        }
        });

   
    var query4= db.query('SELECT email FROM customers; ',function(err,result4){
         if (err){
            console.error(err);
            res.send('Cant insert into comments');
            return;
        }
          var email= new Array();
          for(var i=0 ; i<result4.length ; i++)
          {
           
           email.push(result4[i].email);

          }
          let transporter = nodemailer.createTransport({
            
            service:"Gmail",
            auth:{
                user: 'wonderstorepc@gmail.com',
                pass: 'p@ssw0rD'
            }

        });

    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
      
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Online Shop" <wonderstorepc@gmail.com>', // sender address
        bcc: email, // list of receivers
        subject: 'ON SALE INFORMATION', // Subject line
        text: 'plain text!', // plain text body
        html: '<b>'+"Now you can buy item "+pid2+" with a dicount rate of %"+discount+'</b>' // html body
       
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));


        });

        });
     

     });
    
 

});


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

router.get('/Orders', function(req, res, next) {
	
    queryR('SELECT * FROM invoices ',res);

});

router.get('/Revenue', function(req, res, next) {
    
    queryR('SELECT * FROM invoices',res);

});

/*
router.get('/Users', function(req, res, next) {
    
    queryR('SELECT email FROM customers',res);

});

*/
router.get('/:iid', function(req, response, next) {
    var id = req.params["iid"];
    var obj2 = {};
    var pdfArray = [];
    console.log(id);
   
    var query = db.query('SELECT * FROM invoices where iid="'+ id +'";',function(err,result){

        if (err){

            console.error(err);
            return;
        }
        else {
            console.log("invoice");
            console.log(result);
            customer = result[0].cid;

            var q = db.query('SELECT * FROM customers WHERE cid='+ customer + ';', function(err,res){
                console.log("customer");
                console.log(res);


                if(err){
                    console.error(err);
                    return;
                }

            
                for(var i=0; i< res.length; i++){
                    pdfArray.push(res[i]);
                }

                for(var i=0; i< result.length; i++){
                    pdfArray.push(result[i]);
                }
            

                console.log("pdfArray");
                console.log(pdfArray);

                
               obj2 = {print: pdfArray};
                response.render('invoicePM', obj2);

        

       
        var total=0;

    //doc.pipe
    //doc = fs.createWriteStream('C:/Users/Tugberk/Desktop/file22.pdf');
    //doc.pipe(fs.createWriteStream('/Users/aynursune/Desktop/file22.pdf'));
    var doc = new PDFDocument;
     var file = fs.createWriteStream("/invoice"+id+".pdf");
  //var request = http.get("http://localhost:3000/salesManager/download/"+id+"", function(response) {
      
      console.log("pdf create");
      //console.log(response);

    doc.fontSize(18)
        .text('WonderPC.', {align:'center'});

    doc.moveDown(2);
    doc.fontSize(14)
        .text('Thank you for shopping at WonderPC', {align:'center'});
    doc.moveDown(3);
    doc.text('Shipping to:', {align:'left'});

    doc.fontSize(12);
    doc.moveDown(1);
    doc.text(pdfArray[0].first_name + ' ' + pdfArray[0].last_name);

    doc.moveDown(1);
    doc.text(pdfArray[0].home_address);

    doc.moveDown(1);
    doc.fontSize(14);
    doc.text('Products:             Quantity:               Price:');

    doc.moveDown(1);
    doc.fontSize(12);

    for(var i = 1; i < pdfArray.length; i++){       // Made  length - 1 because last one is email.
        doc.text(pdfArray[i].model_no + '                ' + pdfArray[i].amount + '              ' + pdfArray[i].price_usd);

        var quantity = parseInt(pdfArray[i].amount);
        total += (quantity * parseFloat(pdfArray[i].price_usd));
        //alert(quantity);
    }
    doc.moveDown(3);
    doc.text("Your total is :  " + '     ' + total + ',00 $ + Tax');
   
doc.pipe(file);
/*
var stream = doc.pipe(blobStream())
   
        doc.end();
        stream.on('finish', function() {
         iframe.src = stream.toBlobURL('/Downloads');
        });*/

 doc.end();
    // end and display the document in the iframe to the right
//download(file, "/Downloads", "pdf");
    
  
//}); 

   
                     
             });   
        }   


   
    }); 
});
/*
function download(data, filename, type) {
    var f = new Blob(data, filename, type);
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(f, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(f);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}
*/
/*

router.get('/download/:iid', function(req, response, next) {
    var id = req.params["iid"];
    var obj2 = {};
    var pdfArray = [];
    console.log(id);
   
    var query = db.query('SELECT * FROM invoices where iid="'+ id +'";',function(err,result){

        if (err){

            console.error(err);
            return;
        }
        else {
            console.log("invoice");
            console.log(result);
            customer = result[0].cid;

            var q = db.query('SELECT * FROM customers WHERE cid='+ customer + ';', function(err,res){
                console.log("customer");
                console.log(res);


                if(err){
                    console.error(err);
                    return;
                }

            
                for(var i=0; i< res.length; i++){
                    pdfArray.push(res[i]);
                }

                for(var i=0; i< result.length; i++){
                    pdfArray.push(result[i]);
                }
            

                console.log("pdfArray");
                console.log(pdfArray);

                
               //obj2 = {print: pdfArray};
                response.send(JSON.stringify(pdfArray));

        

    

    //doc.pipe
    //doc = fs.createWriteStream('C:/Users/Tugberk/Desktop/file22.pdf');
    //doc.pipe(fs.createWriteStream('/Users/aynursune/Desktop/file22.pdf'));

   
                     
             });   
        }   


   
    }); 
});

*/
 


module.exports = router;
