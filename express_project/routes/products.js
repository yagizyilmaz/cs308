var express = require('express');
var router = express.Router();
var db = require('../db_connect');
var obj2= {};
var obj = {};
var obj3 = {};

var authCheck = (req,res,next) => {     //
  if (req.user){
    console.log(req.user.email);
    next();
  }else {
    console.log("Not logged in");
  }
};



router.get('/:id', function(req, res){
  
   getProduct(req.params["id"]);
   function getProduct(modNo){
       db.query("SELECT * FROM products WHERE model_no = '" + modNo + "'  ", function(err, result1) {
          
               
               db.query("SELECT * FROM comments WHERE product_id = '" + modNo + "' ", function(err, result2) {
           
           db.query('select * from rating  where model_no = "' + modNo + '"',function(err3,result3){
              
               
              console.log(result3);
              
              
              res.render('products', { print : result1, print2: result2,print3: result3 });
              
            });
                      
                   
               
                });
              
           
       });
   }
  


});

router.get('/', function(req, res){
  getProduct("s");
   function getProduct(modNo){
    modNo = "AE-AERO300";
       db.query("SELECT * FROM products WHERE model_no = '" + modNo + "' ", function(err, result) {
           if(err) throw err;
           else {
               obj = {print: result};
               res.render('products', obj);
           }
       });
   }
   



});

router.post('/comments', function(req, res, next){

   // console.log(req.body);
    var obj2 = req.body;
    var comment = obj2[0];


var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    var cid=req.user.first_name;
    var pid=obj2[1];
    var comment_time=utc;

    var commentObj = {
        customer_id: cid,
        comment_info: comment,
        comment_time: comment_time,
        product_id:pid
        
    };

    var query = db.query('insert into comments set ?',commentObj,function(err,result){
        if (err){
            console.error(err);
            res.send('Cant insert into comments');
            return;
        }
        //req.flash('success','You are now registered and can log in');
        console.error(result);

    });
  // var obj = req.body;
  // var productId = obj[0];
  // console.log(productId);
   
  
});




router.post('/rating',function (req,response,next){
  var proModel = req.body.proModel;
  var rating = req.body.rating1;
  var count1 = 1;
  var cid1 = req.user.cid;
  console.log(rating);
  console.log(proModel);
  var query = db.query ('select * from rating where model_no = "'+proModel+'" and cid = "'+cid1+'" ' ,function(err,result){
    if (err){
            console.error(err);
            response.send('Cant select from cart');
            //return;
        }
    else{
      console.log(result);
      if (result === undefined || result.length === 0){
         var rateObj = {
                    
                    model_no: proModel,
                    ratingTotal: rating,
                    cid: cid1
                };
        var query1 = db.query('insert into rating set ? ', rateObj,function(err1,result1){
          if(err1){
            console.error(err1);
                        response.send('Cant insert into cart');
                        return;
          }
          
          console.error(result);
          response.redirect('/shopCart');
        })
      }
      
      else{
        var q = db.query('update rating set ratingTotal =  "' + rating + '"   where model_no = "' + proModel + '" and cid = "'+cid1+'" ',function(err2,result2){
          if (err2) {
                        console.log("an error occured ");
                        console.error(err2);
                        //return;
                    }
          
            response.redirect('/shopCart');
          
          
        })
        
        
        
      }
      
    }
  } );
  
  
  
  
  
});

module.exports = router;
