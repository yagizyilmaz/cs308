var delivered;
//var db = require('../../db_connect');
var iidArray = [];
var modelNoArray = [];

function deletbtnClick(){

    console.log(iidArray);
    var query = db.query('DELETE FROM invoices WHERE iid ="'+iid+'" AND model_no= "'+ model_no+'" ',function(err,result){
        if (err){
            console.error(err);
            res.send('Cant delete from invoices');
            return;
        }
        //req.flash('success','You are now registered and can log in');
        console.error(result);
        res.redirect('/userOrders');
    });
}

function orderbtnClick(){
    $.getJSON('/userOrders/Orders', function(result) {
        //console.log(result);
        $('#table2here').html(" ");

        $("#table2here").append( "<div>" + '<table id="t01">' + '<tr>' +

            // '<th>' + 'DELIVERY ID' + '</th>' +
            '<th>' +'NAME'+ '</th>' +
            '<th>'+'SURNAME' +'</th>' +
            '<th>'+'EMAIL ADDRESS' +'</th>' +
            '<th>'+'MODEL NUMBER' +'</th>' +
            '<th>'+'AMOUNT' +'</th>' +
            '<th>'+'TOTAL PRICE' +'</th>' +
            '<th>'+'ADDRESS TO DELIVER' +'</th>' +
            '<th>'+'STATUS' +'</th>' +
            '<th>'+'Order Cancellation' +'</th>' + '<tr>'
        );

        $.each(result, function(){
            //console.log(this.is_delivered);
            if(this.is_delivered === 1){
                delivered = 'DELIVERED';

                $("#table2here").append( '<tr>' +

                    // '<td>' +  this.did  + '</td>' +
                    '<td>' +  this.first_name  + '</td>' +
                    '<td>' +  this.last_name  + '</td>' +
                    '<td>' +  this.email + '</td>' +
                    '<td>' +  this.model_no  + '</td>' +
                    '<td>' +  this.amount  + '</td>' +
                    '<td>' +  this.totalPrice + ',00 $' + '</td>' +
                    '<td>' +  this.home_address  + '</td>' +
                    '<td>' +  delivered  + '</td>' +
                    //if(delivered == )
                    '<td><button type="button" class="btn btn-primary" id ="deletebtn" disabled>Delete Order</button></td>' +
                    '<tr>' + '</table>' + "</div>" );
            }
            else{
                delivered = 'PREPARING';
                //console.log('iid here:');
                //console.log(iid);
                iidArray.push(this.iid);
                modelNoArray.push(this.model_no);
                var model_no = this.model_no;
                $("#table2here").append( '<tr>' +

                    // '<td>' +  this.did  + '</td>' +
                    '<td>' +  this.first_name  + '</td>' +
                    '<td>' +  this.last_name  + '</td>' +
                    '<td>' +  this.email + '</td>' +
                    '<td>' +  this.model_no  + '</td>' +
                    '<td>' +  this.amount  + '</td>' +
                    '<td>' +  this.totalPrice + ',00 $' + '</td>' +
                    '<td>' +  this.home_address  + '</td>' +
                    '<td>' +  delivered  + '</td>' +
                    '<td><button type="button" class="btn btn-primary" id ="deletebtn" onclick="deletbtnClick()">Delete Order</button></td>' +
                    '<tr>' + '</table>' + "</div>" );
            }


        });
    });
}

/*$("body").on("click", "#ordersbtn", function() {
    $.getJSON('/userOrders/Orders', function(result) {
        console.log("sup");
        $('#table2here').html(" ");

        $("#table2here").append( "<div>" + '<table id="t01">' + '<tr>' +

            '<th>' + 'DELIVERY ID' + '</th>' +
            '<th>' +'NAME'+ '</th>' +
            '<th>'+'SURNAME' +'</th>' +
            '<th>'+'EMAIL ADDRESS' +'</th>' +
            '<th>'+'MODEL NUMBER' +'</th>' +
            '<th>'+'AMOUNT' +'</th>' +
            '<th>'+'TOTAL PRICE' +'</th>' +
            '<th>'+'ADDRESS TO DELIVER' +'</th>' +
            '<th>'+'STATUS' +'</th>' +
            '<th>'+'INVOICE' +'</th>' + '<tr>'
        );

        $.each(result, function(){


            $("#table2here").append( '<tr>' +

                '<td>' +  this.did  + '</td>' +
                '<td>' +  this.first_name  + '</td>' +
                '<td>' +  this.last_name  + '</td>' +
                '<td>' +  this.email + '</td>' +
                '<td>' +  this.model_no  + '</td>' +
                '<td>' +  this.quantity  + '</td>' +
                '<td>' +  this.totalprice + ',00 $' + '</td>' +
                '<td>' +  this.home_address  + '</td>' +
                '<td>' +  delivered  + '</td>' +
                '<tr>' + '</table>' + "</div>" );

        });
    });
});*/