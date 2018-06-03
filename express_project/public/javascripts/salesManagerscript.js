
var pid;
var onsale="NO";
var modelno;
//var PDFDocument = require('pdfkit');
//var blobStream = require('blob-stream');
var finalarr=[]; 
/*

$('.datepicker').datepicker();
if ( $('#test')[0].type != 'date' ) $('#test').datepicker();
*/
/*
$('#save').click(function(event) {
   //var query = db.query('SELECT pid, amount, price_usd FROM cart WHERE cid ="'+req.user.cid+'"',function(err,result){
    var query = db.query('SELECT  c.pid, c.amount, c.price_usd, cu.first_name, cu.last_name, cu.home_address, cu.email FROM cart c JOIN customers cu ON c.cid = "'+req.user.cid+'" AND cu.cid = "'+req.user.cid+'"',function(err,result){

        if (err){
            console.error(err);
            res.send('Cant insert into cart');
            return;
        }
        //req.flash('success','You are now registered and can log in');
        //console.error(result);
        finalarr = result;

var doc = new PDFDocument

var stream = doc.pipe(blobStream())

 var doc = new PDFDocument;

    //doc.pipe
    //doc = fs.createWriteStream('C:/Users/Tugberk/Desktop/file22.pdf');
    //doc.pipe(fs.createWriteStream('/Users/aynursune/Desktop/file22.pdf'));

    doc.fontSize(18)
        .text('WonderPC.', {align:'center'});

    doc.moveDown(2);
    doc.fontSize(14)
        .text('Thank you for shopping at WonderPC', {align:'center'});
    doc.moveDown(3);
    doc.text('Shipping to:', {align:'left'});

    doc.fontSize(12);
    doc.moveDown(1);
    doc.text(clientInfo[0] + ' ' + clientInfo[1]);

    doc.moveDown(1);
    doc.text(clientInfo[2]);

    doc.moveDown(1);
    doc.fontSize(14);
    doc.text('Products:             Quantity:               Price:');

    doc.moveDown(1);
    doc.fontSize(12);

    for(var i = 0; i < finalarr.length; i++){       // Made  length - 1 because last one is email.
        doc.text(finalarr[i].pid + '                ' + finalarr[i].amount + '              ' + finalarr[i].price_usd);

        var quantity = parseInt(finalarr[i].amount);
        total += (quantity * parseFloat(finalarr[i].price_usd));
        //alert(quantity);
        var q = db.query('UPDATE products SET quantity = quantity - "' + quantity + '" WHERE model_no = "' + finalarr[i].pid + '"', function (err, result) {
            //console.log(q);

            if (err) {
                console.log("an error occured ");
                console.error(err);
                return;
            }


        });
    }
    doc.moveDown(3);
    doc.text("Your total is :  " + '     ' + total + ',00 $ + Tax');

doc.end()
stream.on 'finish', ->
# get a blob you can do whatever you like with
blob = stream.toBlob('application/pdf')

# or get a blob URL for display in the browser
url = stream.toBlobURL('application/pdf')
iframe.src = url


});
});
*/


$('#myAnchor').click(function(event) {
  var arr2 = [];
  var price = document.getElementById('price').value;
  var product = document.getElementById('product').value;

  
  arr2[0] = price;
  arr2[1] = product;

    
    $.ajax({
        type: 'POST',
        url: '/salesManager/salesMan',
        data: JSON.stringify(arr2),
        contentType: "application/json; charset=utf-8",
        dataType: 'json'
      });

  location.reload();

});


$("#productsSearch").click(function() {
//$(document).on("click", "#productsSearch", function() {
  console.log("productsSearch");
  var searchKey = document.forms["changeprice"]["searchproduct"].value;
    console.log(searchKey);
    var i=0;

  $.getJSON('/salesManager/ChangePrice',searchKey, function(res) {   /// ******** search results
    $('#changepricetable').html(" ");

      $("#changepricetable").append( "<div>" + '<table id="t01">' + '<tr>' +

            '<th>' + 'ID' + '</th>' +
            '<th>' +'BRAND'+ '</th>' +
            '<th>'+'NAME' +'</th>' +
            '<th>'+'MODEL NUMBER' +'</th>' +
            '<th>'+'QUANTITY' +'</th>' +
            '<th>'+'WARRANTY STATUS' +'</th>' +
            '<th>'+'ON SALE?' +'</th>' +
            '<th>'+'DESCRIPTION' +'</th>' + 
            '<th>'+'DISTRIBUTOR' +'</th>' + 
            '<th>'+'RAW PRICE($)' +'</th>' +
            '<th>'+'PRICE($)' +'</th>' +
            '<th>'+'CHANGE PRICE?' +'</th>' +'<tr>'
        );

    $.each(res, function(){

      if(this.on_sale == "1")
        onsale = 'YES';

      if(this.on_sale == "0")
        onsale = 'NO';

      pid = this.pid;

      $("#changepricetable").append( '<tr>' +
    
         '<td>' +  this.pid  + '</td>' +
         '<td>' +  this.brand  + '</td>' +
         '<td>' +  this.name  + '</td>' +
         '<td>' +  this.model_no + '</td>' +
         '<td>' +  this.quantity  + '</td>' +
         '<td>' +  this.warranty_status  + '</td>' +
         '<td>' +  onsale + '</td>' +
         '<td>' +  this.description + '</td>' +
         '<td>' +  this.distributor  + '</td>' +
         '<td>' +  this.price_raw +',00 $' + '</td>' +
         '<td>' +  this.price_usd  + '</td>' +
         '<td>' +'<input type="text" name = "priceinput" class="form-control" id="input'+i+'">'+ '<button class="clsActionButton" id="PriceButton" onclick="priceButton_onclick('+ pid +','+i+');">Change</button> ' + '</td>' +
         '<tr>' + '</table>' + "</div>" );
    i++;
    });
  });
}); 

$("#discountSearch").click(function() {
//$(document).on("click", "#productsSearch", function() {
  console.log("discountSearch");
  var searchKey = document.forms["toFill3"]["discountproduct"].value;
    console.log(searchKey);
    var i=0;

  $.getJSON('/salesManager/ChangePrice',searchKey,function(res) {   /// ******** search results
    $('#discounttable').html(" ");

      $("#discounttable").append( "<div>" + '<table id="t02">' + '<tr>' +

            '<th>' + 'ID' + '</th>' +
            '<th>' +'BRAND'+ '</th>' +
            '<th>'+'NAME' +'</th>' +
            '<th>'+'MODEL NUMBER' +'</th>' +
            '<th>'+'QUANTITY' +'</th>' +
            '<th>'+'WARRANTY STATUS' +'</th>' +
            '<th>'+'ON SALE?' +'</th>' +
            '<th>'+'DESCRIPTION' +'</th>' + 
            '<th>'+'DISTRIBUTOR' +'</th>' + 
            '<th>'+'RAW PRICE($)' +'</th>' +
            '<th>'+'PRICE($)' +'</th>' +
            '<th>'+'DISCOUNT RATE' +'</th>' +'<tr>'
        );

    $.each(res, function(){

      if(this.on_sale == "1")
        onsale = 'YES';

      if(this.on_sale == "0")
        onsale = 'NO';

      modelno = "'" +this.model_no +"'";

      $("#discounttable").append( '<tr>' +
    
         '<td>' +  this.pid  + '</td>' +
         '<td>' +  this.brand  + '</td>' +
         '<td>' +  this.name  + '</td>' +
         '<td>' +  this.model_no + '</td>' +
         '<td>' +  this.quantity  + '</td>' +
         '<td>' +  this.warranty_status  + '</td>' +
         '<td>' +  onsale + '</td>' +
         '<td>' +  this.description + '</td>' +
         '<td>' +  this.distributor  + '</td>' +
         '<td>' +  this.price_raw  +',00 $' + '</td>' +
         '<td>' +  this.price_usd  + '</td>' +
          '<td>' +'<input type="text" name = "discountinput" class="form-control" id="input'+i+'">'+ '<button class="clsActionButton" id="DiscountButton" onclick="discountButton_onclick('+ modelno +','+i+');">Change</button> ' + '</td>' +
         '<tr>' + '</table>' + "</div>" );
    i++;
    });
  });
}); 

function priceButton_onclick(pid,i){
  console.log("priceButton");
  var array = [];
  array.push(pid);
  console.log(array);
  var input ="input"+i;
  console.log(input)

  var x= document.getElementById(input).value;
  console.log(x);
  array.push(x);
  

  $.ajax({

    type: 'POST',
    url: '/salesManager/price',
    dataType: "json",
    async:false,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(array),

    success: function(data){
      
      if(data=="1")
        alert("Price is changed successfully!");
      if(data=="0")
        alert("Something is wrong!");
       
        },
 
      error: function(data) {

        if(data=="1")
        alert("Price is changed successfully!");
      if(data=="0")
        alert("Something is wrong!");

        }    
  });
  location.reload();
}

function discountButton_onclick(modelno,i){
  console.log("priceButton");
  var array = [];
  
  var input ="input"+i;
  console.log(input)
  var x= document.getElementById(input).value;
  console.log(x);
  array.push(x);
  array.push(modelno);
  console.log(array);

  $.ajax({

    type: 'POST',
    url: '/salesManager/salesMan2',
    dataType: "json",
    async:false,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(array),

    success: function(data){
      
      if(data=="1")
        alert("Price is changed successfully!");
      if(data=="0")
        alert("Something is wrong!");
       
        },
 
      error: function(data) {

        if(data=="1")
        alert("Price is changed successfully!");
      if(data=="0")
        alert("Something is wrong!");

        }    
  });
  location.reload();
}

$("body").on("click", "#listproducts", function() {
    var i=0;

  $.getJSON('/salesManager/ListAll',function(res) {   /// ******** search results
    $('#changepricetable').html(" ");

      $("#changepricetable").append( "<div>" + '<table id="t02">' + '<tr>' +

            '<th>' + 'ID' + '</th>' +
            '<th>' +'BRAND'+ '</th>' +
            '<th>'+'NAME' +'</th>' +
            '<th>'+'MODEL NUMBER' +'</th>' +
            '<th>'+'QUANTITY' +'</th>' +
            '<th>'+'WARRANTY STATUS' +'</th>' +
            '<th>'+'ON SALE?' +'</th>' +
            '<th>'+'DESCRIPTION' +'</th>' + 
            '<th>'+'DISTRIBUTOR' +'</th>' + 
            '<th>'+'RAW PRICE($)' +'</th>' +
            '<th>'+'PRICE($)' +'</th>' +
            '<th>'+'CHANGE PRICE?' +'</th>' +'<tr>'
        );

    $.each(res, function(){

      if(this.on_sale == "1")
        onsale = 'YES';

      if(this.on_sale == "0")
        onsale = 'NO';

      pid = this.pid;

      $("#changepricetable").append( '<tr>' +
    
         '<td>' +  this.pid  + '</td>' +
         '<td>' +  this.brand  + '</td>' +
         '<td>' +  this.name  + '</td>' +
         '<td>' +  this.model_no + '</td>' +
         '<td>' +  this.quantity  + '</td>' +
         '<td>' +  this.warranty_status  + '</td>' +
         '<td>' +  onsale + '</td>' +
         '<td>' +  this.description + '</td>' +
         '<td>' +  this.distributor  + '</td>' +
         '<td>' +  this.price_raw  +',00 $' + '</td>' +
         '<td>' +  this.price_usd  + '</td>' +
          '<td>' +'<input type="text" name = "priceinput" class="form-control" id="input'+i+'">'+ '<button class="clsActionButton" id="PriceButton" onclick="priceButton_onclick('+ pid +','+i+');">Change</button> ' + '</td>' +
         '<tr>' + '</table>' + "</div>" );
    i++;
    });
  });
}); 

$("body").on("click", "#myAnchor5", function() {
    var i=0;

  $.getJSON('/salesManager/ListAll',function(res) {   /// ******** search results
    $('#discounttable').html(" ");

      $("#discounttable").append( "<div>" + '<table id="t02">' + '<tr>' +

            '<th>' + 'ID' + '</th>' +
            '<th>' +'BRAND'+ '</th>' +
            '<th>'+'NAME' +'</th>' +
            '<th>'+'MODEL NUMBER' +'</th>' +
            '<th>'+'QUANTITY' +'</th>' +
            '<th>'+'WARRANTY STATUS' +'</th>' +
            '<th>'+'ON SALE?' +'</th>' +
            '<th>'+'DESCRIPTION' +'</th>' + 
            '<th>'+'DISTRIBUTOR' +'</th>' + 
            '<th>'+'RAW PRICE($)' +'</th>' +
            '<th>'+'PRICE($)' +'</th>' +
            '<th>'+'DISCOUNT RATE' +'</th>' +'<tr>'
        );

    $.each(res, function(){

      if(this.on_sale == "1")
        onsale = 'YES';

      if(this.on_sale == "0")
        onsale = 'NO';

      modelno = "'" +this.model_no +"'";

      $("#discounttable").append( '<tr>' +
    
         '<td>' +  this.pid  + '</td>' +
         '<td>' +  this.brand  + '</td>' +
         '<td>' +  this.name  + '</td>' +
         '<td>' +  this.model_no + '</td>' +
         '<td>' +  this.quantity  + '</td>' +
         '<td>' +  this.warranty_status  + '</td>' +
         '<td>' +  onsale + '</td>' +
         '<td>' +  this.description + '</td>' +
         '<td>' +  this.distributor  + '</td>' +
         '<td>' +  this.price_raw  +',00 $' + '</td>' +
         '<td>' +  this.price_usd  + '</td>' +
          '<td>' +'<input type="text" name = "discountinput" class="form-control" id="input'+i+'">'+ '<button class="clsActionButton" id="DiscountButton" onclick="discountButton_onclick('+ modelno +','+i+');">Change</button> ' + '</td>' +
         '<tr>' + '</table>' + "</div>" );
    i++;
    });
  });
}); 

//discount
$("body").on("click", "#myAnchor2", function() {  
  var arr = [];
  var product2 = document.getElementById('product2').value;
  var discount = document.getElementById('discount').value;
  
  arr.push(discount);
  arr.push(product2);
    
  $.ajax({

    type: 'POST',
    url: '/salesManager/salesMan2',
    dataType: "json",
    async:false,
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(arr)  
  });
  location.reload();
});

function orderbtnClick2(){
   var firstdate = document.getElementById('firstdate').value;
   var seconddate = document.getElementById('seconddate').value;
   var totalrevenue=0;
    $.getJSON('/salesManager/Revenue', function(result) {
        
        $('#revenue2here').html(" ");


        $.each(result, function(){
          if(this.add_date>=firstdate && this.add_date <= seconddate)
          totalrevenue= totalrevenue+ parseFloat(this.price_usd);
          });

          console.log(totalrevenue);

          $("#revenue2here").append('<h3>'+ "Total Revenue: "+totalrevenue+" $ "+'</h3>');

    });
}


function orderbtnClick3(){

   var year = document.getElementById('year').value;

   var ocakStartDate= year+"-01-01";
   var subatStartDate= year+"-02-01";
   var martStartDate= year+"-03-01";
   var nisanStartDate= year+"-04-01";
   var mayisStartDate= year+"-05-01";
   var hzrnStartDate= year+"-06-01";
   var tmmzStartDate= year+"-07-01";
   var agstsStartDate= year+"-08-01";
   var eylulStartDate= year+"-09-01";
   var ekimStartDate= year+"-10-01";
   var kasimStartDate= year+"-11-01";
   var aralikStartDate= year+"-12-01";
    

    var ocakProfit=0;
    var subatProfit=0;
    var martProfit=0;
    var nisanProfit=0;
    var mayisProfit=0;
    var hzrnProfit=0;
    var tmmzProfit=0;
    var agstsProfit=0;
    var eylulProfit=0;
    var ekimProfit=0;
    var kasimProfit=0;
    var aralikProfit=0;

 
    $.getJSON('/salesManager/Revenue', function(result) {

       console.log(result);

        $.each(result, function(){
          if(this.add_date>=ocakStartDate &&  this.add_date<= subatStartDate)
          ocakProfit= ocakProfit+ parseFloat(this.price_usd);

          if(this.add_date>=subatStartDate && this.add_date <= martStartDate)
          subatProfit= subatProfit+ parseFloat(this.price_usd);

           if(this.add_date>=martStartDate && this.add_date <= nisanStartDate)
          martProfit= martProfit+ parseFloat(this.price_usd);

         if(this.add_date>=nisanStartDate &&this.add_date  <= mayisStartDate)
          nisanProfit= nisanProfit+ parseFloat(this.price_usd);

         if(this.add_date>=mayisStartDate && this.add_date <= hzrnStartDate)
          mayisProfit= mayisProfit+ parseFloat(this.price_usd);

         if(this.add_date>=hzrnStartDate && this.add_date <= tmmzStartDate)
          hzrnProfit=  hzrnProfit+ parseFloat(this.price_usd);

         if(this.add_date>=tmmzStartDate && this.add_date <= agstsStartDate)
          tmmzProfit=  tmmzProfit+ parseFloat(this.price_usd);

         if(this.add_date>=agstsStartDate && this.add_date <= eylulStartDate)
          agstsProfit=  agstsProfit+ parseFloat(this.price_usd);

         if(this.add_date>=eylulStartDate && this.add_date <= ekimStartDate)
          eylulProfit= eylulProfit+ parseFloat(this.price_usd);

         if(this.add_date>=ekimStartDate && this.add_date <= kasimStartDate)
          ekimProfit=  ekimProfit+ parseFloat(this.price_usd);

         if(this.add_date>=kasimStartDate && this.add_date <= aralikStartDate)
          kasimProfit= kasimProfit+ parseFloat(this.price_usd);
          

          });
var chart = new CanvasJS.Chart("chartContainer", {

      title:{
        text: "Profits Over Months"              
      },
      data: [//array of dataSeries              
        { //dataSeries object

         /*** Change type "column" to "bar", "area", "line" or "pie"***/
         type: "column",
         dataPoints: [
         { label: "January", y: ocakProfit },
         { label: "February", y: subatProfit },
         { label: "March", y: martProfit },                                    
         { label: "April", y: nisanProfit },
         { label: "May", y: mayisProfit },
         { label: "June", y: hzrnProfit },
         { label: "July", y: tmmzProfit },
         { label: "August", y: agstsProfit },                                    
         { label: "September", y: eylulProfit },
         { label: "October", y: ekimProfit },
         { label: "November", y: kasimProfit },
         { label: "December", y: 0 }

         ]
       }
       ]
     });

    chart.render();

    });

}



//var delivered = 'PREPARING';
function orderbtnClick(){
    
    var firstdate2 = document.getElementById('firstdate2').value;
    var seconddate2 = document.getElementById('seconddate2').value;
    
    $.getJSON('/salesManager/Orders', function(result) {
        console.log(result);
        $('#invoicetable').html(" ");

        $("#invoicetable").append( "<div>" + '<table id="t01">' + '<tr>' +

            // '<th>' + 'DELIVERY ID' + '</th>' +
            '<th>' +'INVOICE ID'+ '</th>' +
            '<th>'+'ADD DATE' +'</th>' +
            '<th>'+'CUSTOMER ID' +'</th>' +
            '<th>'+'MODEL NUMBER' +'</th>' +
            '<th>'+'AMOUNT' +'</th>' +
            '<th>'+'PRICE' +'</th>' +
            '<th>'+'TOTAL PRICE' +'</th>' +
            '<th>'+'INVOICE' +'</th>' +'</tr>');

        $.each(result, function(){
            
          if(this.add_date>=firstdate2 && this.add_date <= seconddate2)
          {

            $("#invoicetable").append( '<tr>' +

                // '<td>' +  this.did  + '</td>' +
                '<td>' +  this.iid  + '</td>' +
                '<td>' +  this.add_date  + '</td>' +
                '<td>' +  this.cid + '</td>' +
                '<td>' +  this.model_no  + '</td>' +
                '<td>' +  this.amount  + '</td>' +
                '<td>' +  this.price_usd + ',00 $' + '</td>' +
                '<td>' +  this.totalPrice + ',00 $' + '</td>' +
                '<td><a href="/salesManager/' + this.iid + '" target="_blank" style="display:block;">&nbsp;</a></td>' +
                '<tr>' + '</table>' + "</div>" );
          }
        });
    });
}

function orderallbtnClick(){
   
    $.getJSON('/salesManager/Orders', function(result) {
        console.log(result);
        $('#invoicetable').html(" ");

        $("#invoicetable").append( "<div>" + '<table id="t01">' + '<tr>' +

            // '<th>' + 'DELIVERY ID' + '</th>' +
            '<th>' +'INVOICE ID'+ '</th>' +
            '<th>'+'ADD DATE' +'</th>' +
            '<th>'+'CUSTOMER ID' +'</th>' +
            '<th>'+'MODEL NUMBER' +'</th>' +
            '<th>'+'AMOUNT' +'</th>' +
            '<th>'+'PRICE' +'</th>' +
            '<th>'+'TOTAL PRICE' +'</th>' +
            '<th>'+'INVOICE' +'</th>' +'</tr>'
        );

        $.each(result, function(){


            $("#invoicetable").append( '<tr>' +

                // '<td>' +  this.did  + '</td>' +
                '<td>' +  this.iid  + '</td>' +
                '<td>' +  this.add_date  + '</td>' +
                '<td>' +  this.cid + '</td>' +
                '<td>' +  this.model_no  + '</td>' +
                '<td>' +  this.amount  + '</td>' +
                '<td>' +  this.price_usd + ',00 $' + '</td>' +
                '<td>' +  this.totalPrice + ',00 $' + '</td>' +
                '<td><a href="/salesManager/' + this.iid + '" target="_blank" style="display:block;">&nbsp;</a></td>' +        
                '<tr>' + '</table>' + "</div>" );
        });
    });
}

