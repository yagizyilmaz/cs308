var arr = {};
var arr2  = {};
var data;

 var letter = /[a-zA-Z]/;
 var number = /[0-9]/;
 
 

$('.message span').click(function() {
	$('form').animate({height: "toggle", opacity: "toggle"},"slow");
});


function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
$('#myAnchor').click(function(event) {
	var surname = document.forms["registrationForm"]["surname"].value;
	var name = document.forms["registrationForm"]["name"].value;
	var taxid = document.forms["registrationForm"]["taxid"].value;
	var email = document.forms["registrationForm"]["email"].value;
	var adress = document.forms["registrationForm"]["adress"].value;
	var passwordString = document.forms["registrationForm"]["password"].value;
	var passwordConfirm = document.forms["registrationForm"]["passwordConfirm"].value;

	  

	if (name == "") {                                   // VALIDATION.
		alert("Name must be filled out");
		return false;
	}
	
	else if ( !validateEmail(email)){
		alert("Email format must be correct");
		return false;
	}
	else if (surname == "") {
		alert("Surname must be filled out");
		return false;
	}
	else if (taxid == "" || isNaN(taxid) || taxid.length != 11  ) {
		alert("TaxID must be filled out");
		return false;
	}
	else if (email == "" ) {
		alert("Email Adress must be filled out");
		return false;
	}

	else if (adress == "") {
		alert("Home Adress must be filled out");
		return false;
	}
	else if (passwordString == "" || passwordString !== passwordConfirm){
		alert("Passwords must match or must be filled out");
		return false;
		
	}
	else if (passwordString.length < 6|| !letter.test(passwordString) || !number.test(passwordString)){
		alert("password must contain at least 6 charachters and contain letters and numbers. ");
		return false;
	}
	

	for(i = 1; i < 8 ; i++) {
		var temp = $('#toFill > input[type="text"]:nth-child(' + i +')');
	
		
		if (i != 4){
			
			arr[temp.attr('name')] = temp.val();
			
		} else {
			var passwordS = temp.val();
			var hashedPassword = md5(passwordS);
			//console.log(hashedPassword);
			arr[temp.attr('name')] = hashedPassword;
		}
		
	}

	
		
	
	
	
	$.ajax({
		type: 'POST',
		url: '/signup/incomingForm',
		data: JSON.stringify(arr),
		contentType: "application/json; charset=utf-8",
		dataType: 'json'
	});
	
	//event.preventDefault();
});



 $('.message a').click(function() {
 $('form').animate({height: "toggle", opacity: "toggle"},"slow");
 });
 


/*

$('#loginButton').click(function(event) {					// LOGIN.
	
	
	var username = document.forms["loginForm"]["username"].value;
	var passwordLogin = document.forms["loginForm"]["password"].value;

	if (username == "") {
		alert("USERNAME must be filled out");
		return false;
	}
	else if (passwordLogin == ""){
		alert("PASSWORD must be filled out");
		return false;
	}
	
	
			arr2[1] = username;
			var hashedPassword = md5(passwordLogin);
			arr2[2] = hashedPassword;
	
	
	
	
	$.ajax({
		type: 'POST',
		url: '/login',
		//data: JSON.stringify(arr2),
		//contentType: "application/json; charset=utf-8",
		//dataType: 'json'
	}); 
	
	

	event.preventDefault();


}); 

*/