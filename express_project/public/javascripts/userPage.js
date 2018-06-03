$('#mailbtn').click(function(event) {

                function validateEmail(email) {
                    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return re.test(email);
                }
                var arr={};
                var mail = document.getElementById('mail').value;

                if(validateEmail(mail)){
                    arr[0] = mail;
                    $.ajax({
                        type: 'POST',
                        url: '/user/updateMail',
                        data: JSON.stringify(arr),
                        contentType: "application/json; charset=utf-8",
                        dataType: 'json'
                    });
                }
                else if(!validateEmail(mail))
                    alert("E-mail is not valid.")

            });


            $('#addressbtn').click(function(event) {
                var arr={};
                var address = document.getElementById('address').value;

                arr[0] = address;
                $.ajax({
                    type: 'POST',
                    url: '/user/updateAddress',
                    data: JSON.stringify(arr),
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json'
                });
            });

   /* $('#passbtn').click(function(event) {
        var arr={};
        var pass = document.getElementById('pass').value;
        var pass1 = document.getElementById('pass1').value;

        var letter = /[a-zA-Z]/;
        var number = /[0-9]/;

        if(pass === pass1){
            if (pass.length > 6 && letter.test(pass) && number.test(pass)){
                arr[0] = pass;
                $.ajax({
                    type: 'POST',
                    url: '/user/updatePassword',
                    data: JSON.stringify(arr),
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json'
                });
            }
            else{
                alert("Password must contain at least 6 characters and contain letters and numbers. ");
                return false;
            }

                }
        else
            alert('Passwords do not match');

    });*/