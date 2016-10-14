
$(document).ready(function () {
    $("#submit").click(function () {

        var emailpattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
        var numberpattern = /^[0-9]{11}$/g;
        var namepattern = /[^/s]/i;
        var name = $('#name').val();
        var family = $('#family').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var tmp = "     ";
        if (!namepattern.test(name) || !namepattern.test(family) )
        {
            alert("Insert the correct name & family");
        }
        if( !emailpattern.test(email))
        {
            alert("Insert the correct email");

        }


         if( !numberpattern.test(phone))
         {

             alert("Insert the correct number");
         }
        //if (namepattern.test(name) && !namepattern.test(family) && emailpattern.test(email) && numberpattern.test(phone)) {
           // $('#restab').append('<tr>').append('<td>'+name+'</td>').append('<td>'+tmp+'</td>').append('<td>'+family+'</td>').append('<td>'+tmp+'</td>').append('<td>'+email+'</td>').append('<td>'+tmp+'</td>').append('<td>'+phone+'</td>').append('</tr>');
           else
         {

            alert("*****");
            $('#table1').append('<tr>').append('<td>' + name + '</td>')
                .append('<td>' + family + '</td>').append('<td>' + email + '</td>').append('<td>' + phone + '</td>');

        }
    })
})
