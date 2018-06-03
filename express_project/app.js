var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./db_connect');
var mysql = require('mysql');
var passport = require('passport');
var passportLocal = require('passport-local').Strategy;
var bodyParser = require('body-parser');
var session = require('express-session');
var md5 = require('js-md5');
var cookieSession = require('cookie-session');
var flash = require('connect-flash');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pcBuilderRouter = require ('./routes/PCBuilder');
var signUpRouter = require ( './routes/signup');
var confirmPasswordRouter = require('./routes/confirmPassword');
var passwordRenewRouter = require('./routes/passwordRenew');
var productsRouter = require('./routes/products');
var shopCartRouter = require('./routes/shopCart');
var productManagerPageRouter = require('./routes/productManagerPage');
var loginRouter = require('./routes/login');
var paymentRouter = require('./routes/payment');
var invoiceRouter = require('./routes/invoice');
var indexProductManager = require('./routes/indexproduct');
var category = require('./routes/category');
var navbar = require('./routes/navbar');
var salesManagerRouter = require('./routes/salesManager');
var userRouter = require('./routes/user');
var search = require('./routes/search');
var userOrdersRouter = require('./routes/userOrders');

var app = express();

db.query('USE cs308', function (err) {
    if (err) console.log("CANNOT CONNECT TO DATABASE.\n");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
/*
app.use(cookieSession({
  name: 'session', 
  keys:['ourkey'],
  MaxAge: 24*60*60*1000,
  secure:true
}));
*/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(session({ 
  secret: process.env.SESSION_SECRET || 'secret' ,
  cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    saveUninitialized: true ,
    resave: true ,
    cookie: { secure: false } 
  }));



app.use(passport.initialize());
app.use(passport.session());

app.get('*',function(req,res,next){
	res.locals.user = req.user || null;
	next();
});




/*
app.get('/', function (req, res, next) {
  // Update views
  req.session.views = (req.session.views || 0) + 1

  // Write response
  res.end(req.session.views + ' views')
});
*/


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
      console.log("isLoggedIn");
        return next();
    }
    console.log(req.isAuthenticated())
    res.redirect("/signup");
};

function isProductManager(req,res,next){

   
       var q=db.query("SELECT * FROM `customers` WHERE `status` = 1;" ,function(err,manager){
         console.log("isProductManager");
         console.log(manager);
         console.log(req.user.email);
         console.log(manager[0].email);
         if(req.user.email==manager[0].email){
         console.log("product manager");
         return next();
         }
         res.redirect("/");
       });

};

function isSalesManager(req,res,next){

   
       var q=db.query("SELECT * FROM `customers` WHERE `status` = 2;" ,function(err,manager){
         console.log("isSalesManager");
         console.log(manager);
         console.log(req.user.email);
         console.log(manager[0].email);
         if(req.user.email==manager[0].email){
         console.log("sales manager");
         return next();
         }
         res.redirect("/");
       });

};

/*
function isLoggedOut (req, res, next) {
     if (req.isUnauthenticated()) {
         return next();
     } 
     res.redirect('/');
 };
 
*/

app.use('/', indexRouter);


passport.serializeUser(function (user, done){
  console.log("in serializeUser");
  console.log(user.cid);
  done(null, user.cid);
});

passport.deserializeUser(function (id, done){
  console.log("in deserializeUser");
   db.query("select * from `customers` where `cid` = '"+id+ "'",function(err,rows){	
			done(err, rows[0]);
		});
});

app.use(flash());

//login//////////////////////
passport.use('local-login',new passportLocal({
            // by default, local strategy uses username and password, we will override with email
            username: 'username',
            password: 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback

          },(function(req,username, password, done){

            db.query("SELECT * FROM `customers` WHERE `email` = '" + username + "'",function(err,rows){
             if (err){
                console.log("err");
                return done(err);
              }

              if (!rows.length) {
                 console.log("not found");
                 
                 //return done(null, false, { message: req.flash( "email is incorrect.") }); // req.flash is the way to set flashdata using connect-flash
                return done(null, false, { failureFlash: "email is incorrect." });
              } 
      
      // if the user is found but the password is wrong

               if (!( rows[0].pass == md5(password))){ // we need to change this and hash the password in frontend
                 console.log(rows);
                 console.log(rows[0]);
                 console.log(rows[0].pass);
                 console.log(md5(password));  
                 console.log("password wrong");
                 
                 //return done(null, false, { message:  req.flash("password is incorrect.")}); // create the loginMessage and save it to session as flashdata
                return done(null, false, {failureFlash: "password is incorrect."});
                 }
      
            // all is well, return successful user
            
            console.log(req.isAuthenticated());
            console.log("success");
            console.log(rows[0]);
            //console.log(req.sesssion.passport.user);
            
            //return done(null, rows[0]);  
            return done(null, rows[0],{successFlash: "Welcome!"});        
    
    }); 
})));



app.get('/', isLoggedIn, function(req, res, next) {
  res.render('index', { title: 'Home' });
});

app.use('/signup', signUpRouter);
app.use('/indexproduct', indexProductManager);

app.get('/productManagerPage', isLoggedIn, isProductManager, function(req, res, next) {
  console.log("product manager page");
  res.render('productManagerPage', { title: 'Product Manager Page' });
});

app.get('/salesManager', isLoggedIn, isSalesManager, function(req, res, next) {
  console.log("sales manager page");
  res.render('salesManager', { title: 'Sales Manager Page' });
});


app.post("/signup", passport.authenticate("local-login", {
    //successRedirect: "/",
    failureRedirect: "/signup",
    failureFlash: true // allow flash messages
}) , function(req, res){
      console.log("req.user");
      console.log(req.user);
    if(req.user.email=='salesmanager@gmail.com'){
      res.redirect('/salesManager');
    }
    else if(req.user.email=='productmanager@gmail.com'){
      res.redirect('/productManagerPage');
    }
    else 
      res.redirect('/');
}); 

/*
app.get('/indexproduct', isLoggedIn, isProductManager, function(req,res,next){
  console.log('index product page');
  res.render('indexproduct', {title: 'Home/Product Manager'});

});
*/

app.get('/logout', function(req,res){
  req.logout();
  res.redirect('/');
});




app.use('/users', usersRouter);
app.use('/PCBuilder', pcBuilderRouter);
app.use('/confirmPassword', confirmPasswordRouter);
app.use('/passwordRenew', passwordRenewRouter);
app.use('/products', productsRouter);
app.use('/shopCart', shopCartRouter);
app.use('/productManagerPage', productManagerPageRouter);
app.use('/login', loginRouter);
app.use('/payment', paymentRouter);
app.use('/invoice', invoiceRouter);
app.use('/category', category);
app.use('/user', userRouter);
app.use('/search', search);
app.use('/userOrders', userOrdersRouter);
app.use('/navbar', navbar);
app.use('/salesManager', salesManagerRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
	
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
