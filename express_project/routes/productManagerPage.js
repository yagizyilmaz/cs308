var express = require('express');
var router = express.Router();
var db = require('../db_connect');
var PDFDocument = require('pdfkit');
var fs = require('fs');
var products;
var obj ;
var customer;
var total = 0;
var object;



router.get('/', function(req, res, next) {
    res.render('productManagerPage', { title: 'productManagerPage' });
});



function queryR(query,res){


	db.query(query, function(err,result){
		
		if(err)
			throw err;
		else{
			console.log('queryR');
			console.log(result);
			res.end(JSON.stringify(result));		
	    }		
	});
}; 

router.post('/AddCategory', function(req3,res3,next3){
	console.log("inside category router.get");
	var category = req3.body;
	//console.log(category);
	//var category = Object.keys(req.query)[0]; //******
	category= category[0];
	console.log(category);

	db.query('SELECT * FROM categories;', function(err,result){
		if(err)
			throw err;

		var lastcategoryID = result[result.length-1].id;
		var newcategoryID = lastcategoryID+1;

		var newcat = {
			name: category,
			path: category,
			id: newcategoryID
		};

		db.query('INSERT INTO categories set ?', newcat, function(error,res){
			if(error){
				throw error;
				res3.send("0");
			}
			res3.send("1");
		
		});
	});
});

router.get('/ListCategory', function (req,res,next){ //***************************
		console.log("inside list categories router.get");
		
    	var arr = [];
		
		//var array = [];
		db.query('SELECT * FROM categories;',function(err,result){
			if(err)
				throw err;

			res.end(JSON.stringify(result));

			/*
			for(var i=0; i<result.length; i++)
				arr.push(result[i]);
			
			var query="";

			for(var i = 0; i < result.length ; i++){
				query += ' UNION ';
				query += 'SELECT * FROM products WHERE pid like '
				+ result[i].id + '%';
			}
				console.log(query);

				db.query(query, function(err, result) {
					console.log("should show pids");
				console.log(result);
				});
				*/

		});
});

router.post('/deleteCategory', function(req3,res3,next3){
	console.log("inside category delete router.get");
	var category = req3.body;
	//console.log(category);
	//var category = Object.keys(req.query)[0]; //******
	category= category[0];
	console.log(category);

	db.query('DELETE FROM categories WHERE id="'+category+'";', function(err,result){
		if(err){
			throw err;
			res3.send("0");
		}
		console.log(result);
		res3.send("1");

		
	});
});


router.post('/delete', function(req1,res1,next1){
	var objectdel = req1.body;
	console.log(objectdel);
	var pid = objectdel[0];
	console.log(pid);
	var q = db.query('DELETE FROM products WHERE pid="' +pid+'";', function(err,result){

		if(err){
			res1.send("0");
			return;
		}

		console.log(result);
		res1.send("1");
	});

});



router.post('/stock',function(req,res,next){
	object= req.body;
	console.log(object);
	var pid = object[0];
	var stock = object[1];
	console.log(pid);
	console.log(stock);
	var q = db.query('UPDATE products SET quantity="'+stock+'" WHERE pid="' + pid+'";', function(err,result){
		console.log("inside stock query");

		if(err){
			console.log(err);
			res.send("0");
			return;
		}

		console.log(result);
		res.send("1");
	});
}); 

router.get('/deliveryDepartmentDelete', function (req,res,next){ //***************************
		console.log("inside deliveryDepartmentDelete router.get");
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



router.get('/deliveryDepartmentStock', function (req,res,next){ //***************************
	console.log("inside deliveryDepartmentStock router.get");
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


router.get('/deliveryDepartment', function(req, res, next) {

	queryR('SELECT invoices.iid, invoices.model_no, invoices.amount, invoices.totalprice, invoices.is_delivered, customers.email, customers.first_name, customers.last_name, customers.home_address, invoices.iid, invoices.price_usd FROM customers ' +
		'RIGHT JOIN invoices ON customers.cid = invoices.cid;' ,res);
	
});


router.post('/deliveryDepartmentSend',function(req,res,next){
	object= req.body;
	console.log(object);
	var iid = object[0];
	var model = object[1];
	console.log(iid);
	var q = db.query('UPDATE invoices SET is_delivered=1 WHERE iid="' + iid+'" AND model_no="' + model + '";', function(err,result){

		if(err){
			res.send("0");
			return;
		}

		console.log(result);
		res.send("1");
	});
}); 

router.get('/deliveryDepartmentListAll',function(req2,res2,next2){
	queryR('SELECT * FROM products;',res2);
}); 


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
    				 
	    	 });   
    	}	   
    }); 
});

router.post('/InsertPage', function(req, res, next) {

	var obj = req.body;
    console.log(obj);
    var type =obj[0];
    var id;

    console.log(type);
    //type= whichGroup(type);
    console.log(type);
	console.log("just before query");

	db.query('SELECT * FROM products WHERE pid LIKE "' + type + '%";', products, function(err,result){
		console.log("entered finding pid query");

		if (err){
	    	console.log("here is nexID function error");
		    console.error(err);
			//return "0";
			return false;
	    } 

	    if(result.length!=0){
	     console.log(result[result.length-1].pid);
	     var lastID = result[result.length-1].pid;
	     console.log(lastID);
	     var newID = lastID + 1;
	     console.log(newID);
	     id = newID;
	     }
	     else{

	     	id = type +"000000";
	     }
	});

	console.log("something");
    console.log("here is optradio");

    var name = obj[1];
    console.log(name);
    var brand = obj[2];
    var modelno = obj[3];
    var description = obj[4];
    var distributor = obj[5];
    var quantity = obj[6];
    	
	console.log("here is InsertPage post name");
	console.log(name);
	console.log("here is InsertPage post brand");
	console.log(brand);
	console.log("here is InsertPage post modelno");
	console.log(modelno);

	db.query("SELECT * FROM products WHERE model_no LIKE '" +modelno +"';", function(err, result){

	 	console.log("result is");
		console.log(result);

		var warranty = obj[7];
   		var price = obj[8];
   		console.log(price);

   		var raw = obj[9];

    	price = price + "$ + Tax";
		warranty = warranty + "yr";
		console.log("under warranty");
	
      	var pid = id;
      	console.log(pid);

      	products = {
			pid: pid,
			brand: brand,
			name: name,
			model_no: modelno,
			quantity: quantity,
			warranty_status: warranty,
			description: description,
			distributor: distributor,
			price_usd: price ,
			price_raw: raw
		};

        console.log(products);

		if(result.length==0){
			var query = db.query('insert into products set ?',products,function(error,results){
				console.log("this is query function");
				console.log(results);
				console.log(products);

				if (error){
					console.log("here is inserting product err");
					console.error(err);
					res.send("0");
					return false;		
				}

				console.error(results);
				res.send("1");
			});
		}
		else{
			res.send("2");
			return false;
		}
	});
});



router.post("/RemovePage",function(req,res,next) {   

	var obj = req.body;
	var modelno = obj[0];
	
	console.log(obj[0]);

	db.query("SELECT * FROM products WHERE model_no LIKE '" + modelno +"';", function(err, result){

	 	if(result.length>0){
		  	var query = db.query( 'DELETE FROM products WHERE model_no = ?  ',[modelno], function(err,result) {
			    if (err){
		  		  console.log("an error occured when deleting");
		  		  console.error(err);
		  		  res.send("0");
		  		  return false;
	 		    }
	 		    res.send("1");			
		    });
	    }
	    else{
	    	console.log("no item with given model no to delete");
	    	res.send("2");
	    }
    });
});


router.post("/ChangeStock",function(req,res,next) {   

	var obj = req.body;
	var modelno = obj[0];
	var stock = obj[1];
	
	console.log(modelno);
	console.log(stock);

	db.query("SELECT * FROM products WHERE model_no LIKE '" + modelno +"';", function(err, result){

	  	if(result.length>0){

	  		console.log("resut bigger");
	   		var q = db.query('UPDATE products SET quantity = "' + stock + '" WHERE model_no = "' + modelno + '";', function(err,result){

				if (err){
					console.log("an error occured while setting stock");
		  			console.error(err);
		  			res.send("0");
					return false;
				}	
				res.send("1");
			});
		}
		else{
			console.log("no item with given model no to change stock");
	    	res.send("2");
		}
    });

});




module.exports = router;
