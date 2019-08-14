/* Check Null values */
function checkEmpty(id, type) {
    if ($(id).val() == "") {
        $(id).css("border", "2px  solid maroon")
            .after("<span class='error'>**" + type + " " + "should not be empty**</p>");
        return false;
    } else {
        $(id).next().remove(".error"); // remove error field
        return true;
    }
}

/* Check name validation */
function validateName(id, type) {
    $(id).next().remove(".error");
    let flag = false;
    if (checkEmpty(id, type)) {
        ($(id).val().length < 2 || !isNaN($(id).val())) ? ($(id).css("border", "2px  solid maroon")
            .after("<span class='error'>**" + type + " " + "min 2 & max 32 char**</p>"), flag = false) : ($(id)
                .css("border", "2px  solid green"), flag = true);

    } return flag;
}

/* Check phone validation */
function validatePhone(id, type) {
    $(id).next().remove(".error");
    let flag = false;
    if (checkEmpty(id, type)) {
        if ($(id).val().length == 10) {
            // check integer value
            if (isNaN($(id).val()) == false) {
                $(id).after("").css("border", "2px  solid green");
                flag = true;
            }
            else {
                $(id).css("border", "2px  solid maroon")
                    .after("<span class='error'>**" + type + " " + " no. must be 10 digits");
                flag = false;
            }

        }
        else {
            $(id).css("border", "2px  solid maroon")
                .after("<span class='error'>**" + type + " " + " no. must be 10 digits");
            flag = false;
        }

    } 
    return flag;
}

/* Check city validation */
function validateCity(id, type) {
    $(id).next().remove(".error");
    let flag = false;
    if (checkEmpty(id, type)) {
        ($(id).val().length > 32 || !isNaN($(id).val())) ?
            ($(id).css("border", "2px  solid maroon").after("<span class='error'>**" + type + " " + "should be a valid name"), flag = false)
            : ($(id).after("").css("border", "2px  solid green"), flag = true);

    } return flag;
}
/* Check state validation */
function validateState(id, type) {
    $(id).next().remove(".error");
    let flag = false;
    if ($(id).find(":selected").val() == "") {
        $(id).css("border", "2px  solid maroon")
            .after("<span class='error'>**" + type + " " + "should not be empty**</p>");
        flag = false;
    } else {
        $(id).css("border", "2px  solid green");
        flag = true;
    } return flag;
}
/* Check postal validation */
function validatePostal(id, type) {

    $(id).next().remove(".error");
    let flag = false;
    if (checkEmpty(id, type)) {
        ($(id).val().length < 5 || $(id).val().length > 10) ?
            ($(id).css("border", "2px  solid maroon").after("<span class='error'>**" + type + " " + "must be valid formate & min 5 char"), flag = false)
            : ($(id).after("").css("border", "2px  solid green"), flag = true);

    } return flag;
}
/* Check DOB validation */

function validateDob(id, type) {
    $(id).next().remove(".error");
    let flag = false;
    if (checkEmpty(id, type)) {
        $(id).css("border", "2px  solid green");
        flag = true;
    } return flag;

}
/* Check Email validation */

function validateEmail(id, type) {
    $(id).next().remove(".error");
    let flag = false;
    if (checkEmpty(id, type)) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/; //email validation
        regexValue = regex.test($(id).val());

        (!regexValue) ? ($(id).css("border", "2px  solid maroon")
            .after("<span class='error'>**" + type + " " + "must be valid formate"), flag = false)
            : ($(id).after("").css("border", "2px  solid green"), flag = true);
    } return flag;
}

/* Validation */
function validation() {
    if (validatePhone("#phone", "Phone") & validateCity("#city", "city")
        & validateName('#fname', 'First name') & validateName('#lname', 'Last name')
        & validateName('#address1', 'Address') & validatePostal('#postal', 'Postal') & validateDob('#dob', 'D.O.B') &
        validateEmail('#email', 'Email') & validateState('#state', 'State')) {
        // if all function values true than form submit
        alert('Form submit succesfully');
        return true;

    } else
        alert('Please fill all required field');
    return false;
}