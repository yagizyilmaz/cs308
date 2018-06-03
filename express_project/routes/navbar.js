var express = require('express');
var router = express.Router();
var db = require('../db_connect');

router.get('/categories', function(req, res) {
	db.query('SELECT * FROM categories', 
		function (err, result)  {
			if(err){
				throw err;
			} else {
				var objs = [];
				for (var i = 0;i < result.length; i++) {
					objs.push(result[i]);
				}
				res.end(JSON.stringify(objs));            
			}
		});
});

module.exports = router;