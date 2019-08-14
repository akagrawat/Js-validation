//check characters
$("document").ready(function(){
$.validator.addMethod('checkCharacters', function(value,element){
    return isNaN(value);
},  'Integers are not allowed');

//check Integers
$.validator.addMethod('checkIntegers', function(value,element){
    return !isNaN(value);
},  'Characters are not allowed');

    $('#empForm').validate({
        rules:{
            fname: {
                required: true,
                checkCharacters: true
            }
                ,
                lname: {
                    required: true,
                    checkCharacters: true
                },
            phone: {
                required: true,
                minlength: 10,
                maxlength:10,
                checkIntegers: true

            },
            email: {
                required: true,
                email:true,
            },
            dob: 'required',
            firstaddress: 'required',
            city:{
                required:true,
                minlength:4,
                maxlength:32,
                checkCharacters: true
            },
            postal:{
                required:true,
                minlength:4,
                maxlength:8,
            },
            state:{
                required: true
            }

        },

        messages: {
            fname: {
                required:'**This field is required**'
        },
            lname: { required: '**This field is required**'
        },
            phone: {
                required: '**This field is required**',
                minlength: '**Phone must be at least 10 characters long**',
                maxlength: '**Phone must be max  10 characters long**'
            },
            email: {
                required: '**This field is required**',
                email: '**Enter a valid email**',
            },
            dob: '**This field is required**',
            firstaddress: '**This field is required**',
            city:{
                required: '**This field is required**',
                minlength: '**City must be at least 4 characters long**',
                maxlength: '**City must be max 32 characters long**',
            },
            postal:{
                required: '**This field is required**',
                minlength: '**Postal code must be at least 4 characters long**',
                maxlength: '**Postal code must be max 8 characters long**',
            },
            state:{
                required: '**This field is required**',
            }

        },

        submitHandler: function(form) {
            form.submit();
            alert('Form submit successfully');
          }
    })
})