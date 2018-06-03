//$('#passbtn').click(function(event) {

function passbtnOnClick(){
    var arr={};
    var pass = document.getElementById('pass').value;
    var pass1 = document.getElementById('pass1').value;
    var hashedPassword = "temp";

    console.log("pass incoming");
    console.log(pass);

    var letter = /[a-zA-Z]/;
    var number = /[0-9]/;

    if(pass === pass1){
        if (pass.length > 6 && letter.test(pass) && number.test(pass)){
            hashedPassword = md5(pass);
            arr[0] = hashedPassword;
            $.ajax({
                type: 'POST',
                url: '/userOrders/updatePassword',
                data: JSON.stringify(arr),
                contentType: "application/json; charset=utf-8",
                dataType: 'json'
            });
            //location.reload();
        }
        else{
            alert("Password must contain at least 6 characters and contain letters and numbers. ");
            return false;
        }

    }
    else
        alert('Passwords do not match');

}