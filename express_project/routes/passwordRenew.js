var express = require('express');
var router = express.Router();

/* GET PC Builder page. */
router.get('/', function(req, res, next) {
   res.render('passwordRenew', { title: 'passwordRenew' });
    // res.sendFile('./views/PCBuilder.ejs' ) ;

});

module.exports = router;
