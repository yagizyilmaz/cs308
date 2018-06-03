var delivered = 'PREPARING';
var onsale = 'NO';
var iid;
var model;
var pid;
var stockpid;



$("body").on("click", "#showdeliveries", function() {
	$.getJSON('/productManagerPage/deliveryDepartment', function(result) {
		$('#tablehere').html(" ");

    	$("#tablehere").append( "<div>" + '<table id="t01">' + '<tr>' +

            '<th>' + 'INVOICE ID' + '</th>' +
            '<th>' +'NAME'+ '</th>' +
            '<th>'+'SURNAME' +'</th>' +
            '<th>'+'EMAIL ADDRESS' +'</th>' +
            '<th>'+'MODEL NUMBER' +'</th>' +
            '<th>'+'AMOUNT' +'</th>' +
            '<th>'+'PRICE' +'</th>' +
            '<th>'+'TOTAL PRICE' +'</th>' +
            '<th>'+'ADDRESS TO DELIVER' +'</th>' +
            '<th>'+'STATUS' +'</th>' + 
            '<th>'+'INVOICE' +'</th>' + '<tr>'
        );

		$.each(result, function(){

			if(this.is_delivered == "1")
				delivered = 'DELIVERED';
			if(this.is_delivered=="0")
				delivered='PREPARING';

			iid = this.iid;
			model = "'" + this.model_no + "'";


			$("#tablehere").append( '<tr>' +
		
				 '<td>' +  this.iid  + '</td>' +
				 '<td>' +  this.first_name  + '</td>' +
				 '<td>' +  this.last_name  + '</td>' +
				 '<td>' +  this.email + '</td>' +
				 '<td>' +  this.model_no  + '</td>' +
				 '<td>' +  this.amount  + '</td>' +
				 '<td>' +  this.price_usd + '</td>' +
				 '<td>' +  this.totalprice + ',00 $ + Tax' + '</td>' +
				 '<td>' +  this.home_address  + '</td>' +
				 '<td>' +  delivered  + ( delivered =='PREPARING' ? '<button class="clsActionButton" id="SendButton" onclick="sendButton_onclick('+iid +','+model+');">Send</button> ':'' ) +'</td>' +
				 '<td><a href="/productManagerPage/' + this.iid + '" target="_blank" style="display:block;">&nbsp;</a></td>' +
				'<tr>' + '</table>' + "</div>" );

		});	
	});
	//rowspan();
	//fixit("t01");
	
});

function fixit(selector) {
	console.log("in fixit");
    selector.each(function () {
        var values = $(this).find("tr>td:first-of-type")
        var run = 1
        for (var i=values.length-1;i>-1;i--){
            if ( values.eq(i).text()=== values.eq(i-1).text()){
                values.eq(i).remove()
                run++
            }else{
                values.eq(i).attr("rowspan",run)
                run = 1
            }
        }
    })
}

function rowspan() {
     // clone table to display "before"   
    //var beforeTable = $('#t01').clone().removeAttr('id').appendTo('#before')
    // code for grouping in "after" table
    var $rows = $('#t01 tbody tr');
    var items = [],
        itemtext = [],
        currGroupStartIdx = 0;
    $rows.each(function(i) {
        var $this = $(this);
        var itemCell = $(this).find('td:eq(0)')
        var item = itemCell.text();
        itemCell.remove();
        if ($.inArray(item, itemtext) === -1) {
            itemtext.push(item);
            items.push([i, item]);
            groupRowSpan = 1;
            currGroupStartIdx = i;
            $this.data('rowspan', 1)
        } else {
            var rowspan = $rows.eq(currGroupStartIdx).data('rowspan') + 1;
            $rows.eq(currGroupStartIdx).data('rowspan', rowspan);
        }

    });



    $.each(items, function(i) {
        var $row = $rows.eq(this[0]);
        var rowspan = $row.data('rowspan');
        $row.prepend('<td rowspan="' + rowspan + '">' + this[1] + '</td>');
    });


};


function sendButton_onclick(iid,model){
	var array = [];
	array.push(iid);
	array.push(model);
	console.log(array);
	

	$.ajax({

		type: 'POST',
		url: '/productManagerPage/deliveryDepartmentSend',
		dataType: "json",
		async:false,
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(array),

		success: function(dat){
			if(dat=="1"){
				alert("Product is ready to send!")
		    }
		    if(dat=="0"){
				alert(dat);
				alert("Something is wrong!")
		    }
        },
 
    	error: function(dat) {

    		if(dat=="1"){
				alert("Product is ready to send!")
		    }
		    if(dat=="0"){
				alert("Something is wrong!")
		    }

        }    
 	});
 	location.reload();
}

function deleteButton_onclick(pid){
	var array = [];
	array.push(pid);
	console.log(array);
	

	$.ajax({

		type: 'POST',
		url: '/productManagerPage/delete',
		dataType: "json",
		async:false,
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(array),

		success: function(data){
			
				alert("Product is deleted successfully!");
		  
        },
 
    	error: function(data) {

    		
				alert("Something is wrong!");
		    

        }    
 	});
 	location.reload();
}

function stockButton_onclick(pid,i){
	console.log("stockButton");
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
		url: '/productManagerPage/stock',
		dataType: "json",
		async:false,
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(array),

		success: function(data){
			
			if(data=="1")
				alert("Stock is changed successfully!");
			if(data=="0")
				alert("Something is wrong!");
		   
        },
 
    	error: function(data) {

    		if(data=="1")
				alert("Stock is changed successfully!");
			if(data=="0")
				alert("Something is wrong!");

        }    
 	});
 	location.reload();
}

// delete search
$("body").on("click", "#searchp", function() {
	console.log("inside pmptable searchp click");
	var searchKey = document.forms["toFill2"]["search"].value;
   	console.log(searchKey);
 
	$.getJSON('/productManagerPage/deliveryDepartmentDelete', searchKey, function(res) {
		console.log("inside getjson");
		console.log(res);
		$('#searchtablehere').html(" ");

    	$("#searchtablehere").append( "<div>" + '<table id="t02">' + '<tr>' +

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
            '<th>'+'DELETE?' +'</th>' +'<tr>'
        );

		$.each(res, function(){

			if(this.on_sale == "1")
				onsale = 'YES';

			if(this.on_sale == "0")
				onsale = 'NO';

			pid = this.pid;

			$("#searchtablehere").append( '<tr>' +
		
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
				 '<td>' + '<button class="clsActionButton" id="DeleteButton" onclick="deleteButton_onclick('+ pid +');">Delete</button> ' + '</td>' +
				 '<tr>' + '</table>' + "</div>" 
			);

		});
	});
}); 

$("body").on("click", "#allremoved", function() {
	console.log("inside pmptable allremoved click");
	
	$.getJSON('/productManagerPage/deliveryDepartmentListAll',function(res) {
		console.log("inside getjson");
		console.log(res);
		$('#searchtablehere').html(" ");

    	$("#searchtablehere").append( "<div>" + '<table id="t02">' + '<tr>' +

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
            '<th>'+'DELETE?' +'</th>' +'<tr>'
        );

		$.each(res, function(){

			if(this.on_sale == "1")
				onsale = 'YES';

			if(this.on_sale == "0")
				onsale = 'NO';

			pid = this.pid;

			$("#searchtablehere").append( '<tr>' +
		
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
				 '<td>' + '<button class="clsActionButton" id="DeleteButton" onclick="deleteButton_onclick('+ pid +');">Delete</button> ' + '</td>' +
				 '<tr>' + '</table>' + "</div>" 
			);

		});
	});
}); 

// stock search
$("body").on("click", "#searchp1", function() {
	var searchKey = document.forms["toFill3"]["search1"].value;
   	console.log(searchKey);
   	var i=0;

	$.getJSON('/productManagerPage/deliveryDepartmentStock',searchKey, function(res) {   /// ******** search results
		$('#searchtable1here').html(" ");

    	$("#searchtable1here").append( "<div>" + '<table id="t02">' + '<tr>' +

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
            '<th>'+'CHANGE STOCK?' +'</th>' +'<tr>'
        );

		$.each(res, function(){

			if(this.on_sale == "1")
				onsale = 'YES';

			if(this.on_sale == "0")
				onsale = 'NO';

			stockpid = this.pid;

			$("#searchtable1here").append( '<tr>' +
		
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
				 '<td>' +'<input type="text" name = "stockinput" class="form-control" id="input'+i+'">'+ '<button class="clsActionButton" id="StockButton" onclick="stockButton_onclick('+ stockpid +','+i+');">Change</button> ' + '</td>' +
				 '<tr>' + '</table>' + "</div>" );
		i++;
		});
	});
}); 

$("body").on("click", "#allstock", function() {
   	var i=0;

	$.getJSON('/productManagerPage/deliveryDepartmentListAll',function(res) {   /// ******** search results
		$('#searchtable1here').html(" ");

    	$("#searchtable1here").append( "<div>" + '<table id="t02">' + '<tr>' +

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
            '<th>'+'CHANGE STOCK?' +'</th>' +'<tr>'
        );

		$.each(res, function(){

			if(this.on_sale == "1")
				onsale = 'YES';

			if(this.on_sale == "0")
				onsale = 'NO';

			stockpid = this.pid;

			$("#searchtable1here").append( '<tr>' +
		
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
				 '<td>' +'<input type="text" name = "stockinput" class="form-control" id="input'+i+'">'+ '<button class="clsActionButton" id="StockButton" onclick="stockButton_onclick('+ stockpid +','+i+');">Change</button> ' + '</td>' +
				 '<tr>' + '</table>' + "</div>" );
		i++;
		});
	});
}); 