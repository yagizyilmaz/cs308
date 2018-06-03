var express = require('express');
var router = express.Router();
var db = require('../db_connect');

var obj = {};
router.get('/', function(req, res){
	db.query('SELECT * FROM products', function(err, result) {
		if(err) throw err;
        else {
            obj = {print: result};
            res.render('demo', obj);                
        }
    });
});

module.exports = router;
