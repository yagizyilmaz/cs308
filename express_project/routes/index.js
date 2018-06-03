var express = require('express');
var router = express.Router();
var db = require('../db_connect');
var app = express();





var obj = {};
router.get('/', function(req, res){

	
    db.query('SELECT * FROM products WHERE pid IN (10000001,10000002,10000003,10000004,10000005,10000006,10000007,10000008)', function(err, result) {
        if(err) throw err;
        else {
				obj = {print: result};
							
				res.render('index' ,obj /*, {isAuthenticated: req.isAuthenticated(), user: req.user}*/);
			
			   
        }
    });
});




module.exports = router;