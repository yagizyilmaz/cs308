var express = require('express');
var router = express.Router();
var db = require('../db_connect');

router.get('/', function(req, res, next) {
	res.redirect('/');
});

router.get('/:id', function(req, res){
	var searchK = req.params.id;
	var words = searchK.split(" ");
	var query = "";

	for(var i = 0; i < words.length ; i++){
		if (i !== 0) query += ' UNION ';
		query += 'SELECT * FROM products WHERE name like "%'
		+ words[i] + '%" UNION SELECT * FROM products WHERE description like "%'
		+ words[i] + '%"';
	}
	console.log(query);
	db.query(query, function(err, result) {
		res.render('search' ,{print: result} );
		res.end();
	});
});

module.exports = router;