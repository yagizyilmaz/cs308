var arr = [];
var arr2 = [];
var arr3 = [];

var table ='';
var rows;
var cols;


$('#addp').click(function(event){

	console.log("clicked");
	var optradio = document.forms["registrationForm"]["optradio"].value;
	console.log(optradio);
	var name = document.forms["registrationForm"]["name"].value;
	var brand = document.forms["registrationForm"]["brand"].value;
	var modelno = document.forms["registrationForm"]["modelno"].value;
	var description = document.forms["registrationForm"]["description"].value;
	var distributor = document.forms["registrationForm"]["distributor"].value;
	var quantity = document.forms["registrationForm"]["quantity"].value;
	var warranty = document.forms["registrationForm"]["warranty"].value;
	var price = document.forms["registrationForm"]["price"].value;
	var raw = document.forms["registrationForm"]["rawprice"].value;



	if (name == "" || optradio == "" || brand == "" || modelno == "" || description == "" || distributor =="" || quantity == "" || warranty == "" || price == "" || raw == "") {                                   // VALIDATION.
		console.log("in if");
		alert("All fields must be filled out");
		return false;
	}
	if (isNaN(quantity)) {                                  
		alert("Quantity must be a number");
		return false;
	}
	if (isNaN(warranty)) {                                 
		alert("Warranty must be a number");
		return false;
	}
	/*
	if (isNaN(price)) {    //sadece virgul ve rakam olacak                   
		alert("Price must be a number");
		return false;
	}
   */
 	arr.push(optradio);
 	arr.push(name);
 	arr.push(brand);
 	arr.push(modelno);
 	arr.push(description);
 	arr.push(distributor);
 	arr.push(quantity);
 	arr.push(warranty);
 	arr.push(raw);
 	arr.push(price);


    $.ajax({

		type: 'POST',
		url: '/productManagerPage/InsertPage',
		dataType: "json",
		async:false,
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(arr),

		success: function(dat){

				if(dat==2)
                alert("A product with entered model number already exists.");
            	if(dat==1)
            		alert("New product added successfully!");
                if(dat==0)
               	alert("An error occured while adding the new product");
        },
 
    	error: function(dat) {
    			
                alert("An error occured. " + dat);

                if(dat==2)
                alert("A product with entered model number already exists.");
            	if(dat==1)
            		alert("New product added successfully!");
                if(dat==0)
               	alert("An error occured while adding the new product");
        }    
 	});



 	location.reload();
});




$('#remove').click(function(event){

	var modelno = document.forms["toFill2"]["model"].value;

	if (modelno == "") {                                  
		alert("Model Number must be filled out");
		return false;
	}


	arr2.push(modelno);
	console.log(arr2);

	$.ajax({

		type: 'POST',
		url: '/productManagerPage/RemovePage',
		contentType: "application/json; charset=utf-8",
		dataType:"json",
		async:false,
		data: JSON.stringify(arr2),
	
		success: function(dat){
		
			if(dat==2)
            	alert("No such product exist with given model number.");
        	if(dat==1)
            	alert("Product deleted successfully!");
        	if(dat==0)
           	alert("An error occured while deleting the new product");
		},
		error: function(dat){

			alert("An error occured. " + dat);
		
	    	if(dat==2)
            	alert("No such product exist with given model number.");
        	if(dat==1)
           		 alert("Product deleted successfully!");
        	if(dat==0)
            	alert("An error occured while deleting the new product");
		}
	});



	location.reload();
});


$('#change').click(function(event){

	var modelno = document.forms["toFill3"]["mno"].value;
	var stock = document.forms["toFill3"]["newstock"].value;

	if (modelno == "") {                                   
		alert("Model number must be filled out");
		return false;
	}

	if (stock == "") {                                   
		alert("Stock must be filled out");
		return false;
	}

	if (isNaN(stock)) {                                 
		alert("Stock must be a number");
		return false;
	}

	arr3.push(modelno);
	arr3.push(stock);
	console.log(arr3);

	$.ajax({

		type: 'POST',
		url: '/productManagerPage/ChangeStock',
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		async:false,
		data: JSON.stringify(arr3),
	
		success: function(dat){
		
	    	if(dat==2)
           	 alert("No such product exist with given model number.");

        	if(dat==1)
           	 alert("New number of stock is set as '" + stock + "' for model number '" + modelno +"'.");
               
        	if(dat==0)
             alert("An error occured while setting the stock of new product");
		},
		error: function(dat){
		
			alert("An error occured. "+ dat);

			if(dat==2)
             alert("No such product exist with given model number.");

        	if(dat==1)
             alert("New number of stock is set as '" + stock + "' for model number '" + modelno +"'.");
               
        	if(dat==0)
           	 alert("An error occured while setting the stock of new product");
		}	
	});

	location.reload();
});


$('#create').click(function(event){

	var cat = document.forms["toFill4"]["newcategory"].value;
	//category= JSON.stringify(category);
	console.log(cat);
	var catarray = [];
	catarray.push(cat);
	$.ajax({

		type: 'POST',
		url: '/productManagerPage/AddCategory',
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		async: false,
		data: JSON.stringify(catarray),
	
		success: function(dat){
		
	    	if(dat==0)
           	 alert("Category could not be added!");

        	if(dat==1)
           	 alert("New category '" + cat + "' is added successfully!");
		},
		error: function(dat){
			if(dat==0)
           	 alert("Category could not be added!");

        	if(dat==1)
           	 alert("New category '" + cat+ "' is added successfully!");
		}	
	});

	location.reload();
	
});

$('#home-tab').click(function(event){
	init();


});

function init() {
	$.getJSON('/navbar/categories', function(data) {
		$.each(data, function() {
			$("#allcats").append('<div class="radioSelector" id="'+this.name+'" align="center"><label class="radio-inline"><input type="radio" value = "'+this.id+'" name="optradio">'+this.name+'</label></div>');
		});
	});
};


$('#categoryshow').click(function(event){

	$.getJSON('/productManagerPage/ListCategory',function(res) {   /// ******** search results
		$('#categorytable').html(" ");

    	$("#categorytable").append( "<div>" + '<table id="t03">' + '<tr>' +

            '<th>' + 'CATEGORY NAME' + '</th>' +
            '<th>' +'CATEGORY ID'+ '</th>' +
           // '<th>'+'NUMBER OF PRODUCTS' +'</th>' +
            '<th>'+'DELETE CATEGORY?' +'</th>' +'<tr>'
        );

		$.each(res, function(){


			$("#categorytable").append( '<tr>' +
		
				 '<td>' +  this.name  + '</td>' +
				 '<td>' +  this.id  + '</td>' +
				 '<td>' + '<button class="clsActionButton" id="DeleteButton" onclick="deleteCategory_onclick('+ this.id +');">Delete</button> ' + '</td>' +
				 '<tr>' + '</table>' + "</div>" );
		
		});
	});	
});

function deleteCategory_onclick(id){
	var array = [];
	array.push(id);
	console.log(array);
	

	$.ajax({

		type: 'POST',
		url: '/productManagerPage/deleteCategory',
		dataType: "json",
		async:false,
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(array),

		success: function(data){
			
				alert("Category is deleted successfully!");
		  
        },
 
    	error: function(data) {

    		
				alert("Something is wrong!");
		    

        }    
 	});
 	location.reload();
}

