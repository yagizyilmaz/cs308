var express = require('express');
var router = express.Router();

/* GET PC Builder page. */
router.get('/', function(req, res, next) {
   res.render('confirmPassword', { title: 'confirmPassword' });
    // res.sendFile('./views/PCBuilder.ejs' ) ;

});

module.exports = router;
