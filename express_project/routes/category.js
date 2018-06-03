var express = require('express');
var router = express.Router();
var db = require('../db_connect');
var app = express();

let notIfOnSale = (req, res, next) => {
	if (req.params.path === 'onsale') return next('route');
	next();
};


router.get('/', function(req, res, next) {
	res.redirect('/');
});




router.get('/:path', notIfOnSale, function(req, res, next) {
	var path = req.params["path"];

	var opquery = db.query("SELECT id FROM categories WHERE  path = '" + path + "'  ", function(err, result) {
		if (err) {
			console.error(err);
			return;
		} else {
			if(result!="") {
				var query = db.query("SELECT * FROM products WHERE pid like '" + result[0].id + "%'  ", function(error, result1) {
					if (err) {
						console.error(err);
					}
					res.render('search', {print: result1});
					res.end();
					//db.release();
				});
			} else {
				res.redirect('/');
				res.end();
			}
		}
	});
});

router.get('/onsale', function(req, res, next) {
	var query = db.query("SELECT * FROM products WHERE on_sale = 1", function(error, result1) {
		if (error) {
			console.error(error);
		}
		res.render('search', {print: result1});
		res.end();
	});
});

module.exports = router;