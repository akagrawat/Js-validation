function validations() {

    var inputElements = document.getElementsByTagName("input"); // Array of input field  
    var errorElements = document.getElementsByClassName("errors"); // Array of error field
    var error = 0; 

    /* initialize all error tag */
    for (var i = 0; i < inputElements.length - 1; i++) {

        /* Check empty field */

        if (inputElements[i].value == "") {
            inputElements[i].style.border = "2px solid maroon";

            if (i > 1) {
                errorElements[i - 1].innerHTML = "**Field should not be empty**";
            }
            else
            errorElements[0].innerHTML = "**Field should not be empty**";
        }
        else {
            var z = i;

            /* Check condition if field not empty */

            switch (z) {
                /* Condtion for name field */
                case 0:
                case 1:
                    if (inputElements[z].value.length < 2 || inputElements[z].value.length > 32 ) 
                     {
                        inputElements[z].style.border = "2px solid maroon";
                        errorElements[0].innerHTML = "Name  min 2 & max 32 char";
                        error++;
                    }
                    else if(inputElements[0].value.length < 2 || inputElements[0].value.length > 32
                            && inputElements[1].value.length < 2 || inputElements[1].value.length > 32)
                            {
                                inputElements[z].style.border = "2px solid maroon";
                                errorElements[0].innerHTML = "Name  min 2 & max 32 char";
                                error++;
                            }//check character condition
                            else if(inputElements[0].value.charCodeAt(i) <= 65 || inputElements[0].value.charCodeAt(i) >= 90
                            && inputElements[0].value.charCodeAt(i) <=97 || inputElements[0].value.charCodeAt(i)>=122 ||
                            inputElements[1].value.charCodeAt(i) <= 65 || inputElements[1].value.charCodeAt(i) >= 90
                            && inputElements[1].value.charCodeAt(i) <=97 || inputElements[1].value.charCodeAt(i)>=122
                            )
                            {
                                inputElements[z].style.border = "2px solid maroon";
                                errorElements[0].innerHTML = "Name should be characters";
                                error++;
                            }
                            else{
                                errorElements[0].innerHTML = "";
                        inputElements[z].style.border = "2px solid lightgreen";
                            }

        
                    
                    break;

                    /* Check phone number */
                case 2:
                    if (inputElements[z].value.length != 10) {
                        inputElements[z].style.border = "2px solid maroon";
                        errorElements[1].innerHTML = "Phone must 10 number";
                        error++;
                    }
                    else if (inputElements[z].value.length == 10 && isNaN(inputElements[z].value))
                    {
                        errorElements[1].innerHTML = "Only number allowed";
                        error++;
                    }

                    else {
                        errorElements[1].innerHTML = "";
                        inputElements[z].style.border = "2px solid lightgreen";
                    }

                    break;

                    /* Check email */
                case 3:
                    errorElements[2].innerHTML = "";
                    inputElements[z].style.border = "2px solid lightgreen";
                    break;

                    /* Check DOB */
                case 4:
                    errorElements[3].innerHTML = "";
                    inputElements[z].style.border = "2px solid lightgreen";
                    break;

                    /* Check address field */
                case 5:
                    errorElements[4].innerHTML = "";
                    inputElements[z].style.border = "2px solid lightgreen";
                    
                case 6:
                    if (inputElements[z].value.length < 2 || inputElements[z].value.length > 100) {
                        inputElements[z].style.border = "2px solid maroon";
                        inputElements[5].innerHTML = "Address min 2 char & more";
                        error++;
                    }
                    else {
                        errorElements[5].innerHTML = "";
                        inputElements[z].style.border = "2px solid lightgreen";
                    }

                    break;

                    /* Check city */
                case 7:
                    if (inputElements[z].value.length < 4 ) {
                        inputElements[z].style.border = "2px solid maroon";
                        errorElements[6].innerHTML = "City min 4 char & more ";
                        error++;
                    }
                    else if (!isNaN(inputElements[z].value))
                    {
                        errorElements[6].innerHTML = "Only char allowed";
                        error++;
                    }

                    else {
                        errorElements[6].innerHTML = "";
                        inputElements[z].style.border = "2px solid lightgreen";
                    }

                    break;

                    /* Check postal code */
                case 8:
                    if (inputElements[z].value.length < 4 || inputElements[z].value.length > 12) {
                        inputElements[z].style.border = "2px solid maroon";
                        errorElements[7].innerHTML = "code min 4 & more char";
                        error++;
                    }
                    else {
                        errorElements[7].innerHTML = "";
                        inputElements[z].style.border = "2px solid lightgreen";
                    }

                    break;

                    /* Check country */
                case 9:

                    break;

            }

            /* Switch ends here */
        }

    }
    /* For loop ends here */

    /* Check State */
    var f = document.getElementById("select1").value;
    if (f == "select")
    {
        document.getElementById("errors").innerHTML = "**Please select state**";
        error++;
    }

    else
        document.getElementById("errors").innerHTML = "";

    /* Condition to submit form */
    if (error > 0)
        return false;
    else
    window.alert("Employee Info submit successfully" );
        return true;
}



