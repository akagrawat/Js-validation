function validation() {

    var x = document.getElementsByTagName("input"); // Array of input field  
    var c = document.getElementsByClassName("error"); // Array of error field
    var error = 0; 

    /* initialize all error tag */
    for (var i = 0; i < x.length - 1; i++) {

        /* Check empty field */

        if (x[i].value == "") {
            x[i].style.border = "2px solid maroon";

            if (i > 1) {
                c[i - 1].innerHTML = "**Field should not be empty**";
            }
            else
                c[0].innerHTML = "**Field should not be empty**";
        }
        else {
            var z = i;

            /* Check condition if field not empty */

            switch (z) {
                /* Condtion for name field */
                case 0:
                case 1:
                    if (x[z].value.length < 2 || x[z].value.length > 32 ) 
                     {
                        x[z].style.border = "2px solid maroon";
                        c[0].innerHTML = "Name  min 2 & max 32 char";
                        error++;
                    }
                    else if(x[0].value.length < 2 || x[0].value.length > 32
                            && x[1].value.length < 2 || x[1].value.length > 32)
                            {
                                x[z].style.border = "2px solid maroon";
                                c[0].innerHTML = "Name  min 2 & max 32 char";
                                error++;
                            }
                            else if(x[0].value.charCodeAt(i) <= 65 || x[0].value.charCodeAt(i) >= 90
                            && x[0].value.charCodeAt(i) <=97 || x[0].value.charCodeAt(i)>=122 ||
                            x[1].value.charCodeAt(i) <= 65 || x[1].value.charCodeAt(i) >= 90
                            && x[1].value.charCodeAt(i) <=97 || x[1].value.charCodeAt(i)>=122
                            )
                            {
                                x[z].style.border = "2px solid maroon";
                                c[0].innerHTML = "Name should be characters";
                                error++;
                            }
                            else{
                        c[0].innerHTML = "";
                        x[z].style.border = "2px solid lightgreen";
                            }

        
                    
                    break;

                    /* Check phone number */
                case 2:
                    if (x[z].value.length != 10) {
                        x[z].style.border = "2px solid maroon";
                        c[1].innerHTML = "Phone must 10 number";
                        error++;
                    }
                    else if (x[z].value.length == 10 && isNaN(x[z].value))
                    {
                        c[1].innerHTML = "Only number allowed";
                        error++;
                    }

                    else {
                        c[1].innerHTML = "";
                        x[z].style.border = "2px solid lightgreen";
                    }

                    break;

                    /* Check email */
                case 3:
                    c[2].innerHTML = "";
                    x[z].style.border = "2px solid lightgreen";
                    break;

                    /* Check DOB */
                case 4:
                    c[3].innerHTML = "";
                    x[z].style.border = "2px solid lightgreen";
                    break;

                    /* Check address field */
                case 5:
                    c[4].innerHTML = "";
                    x[z].style.border = "2px solid lightgreen";
                    
                case 6:
                    if (x[z].value.length < 2 || x[z].value.length > 100) {
                        x[z].style.border = "2px solid maroon";
                        c[5].innerHTML = "Address min 2 char & more";
                        error++;
                    }
                    else {
                        c[5].innerHTML = "";
                        x[z].style.border = "2px solid lightgreen";
                    }

                    break;

                    /* Check city */
                case 7:
                    if (x[z].value.length < 4 || x[z].value.length > 32) {
                        x[z].style.border = "2px solid maroon";
                        c[6].innerHTML = "City min 4 char & more ";
                        error++;
                    }
                    else if (!isNaN(x[z].value))
                    {
                        c[6].innerHTML = "Only char allowed";
                        error++;
                    }

                    else {
                        c[6].innerHTML = "";
                        x[z].style.border = "2px solid lightgreen";
                    }

                    break;

                    /* Check postal code */
                case 8:
                    if (x[z].value.length < 4 || x[z].value.length > 12) {
                        x[z].style.border = "2px solid maroon";
                        c[7].innerHTML = "code min 4 & more char";
                        error++;
                    }
                    else {
                        c[7].innerHTML = "";
                        x[z].style.border = "2px solid lightgreen";
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
        document.getElementById("error").innerHTML = "**Please select state**";
        error++;
    }

    else
        document.getElementById("error").innerHTML = "";

    /* Condition to submit form */
    if (error > 0)
        return false;
    else
    window.alert("Employee Info submit successfully" );
        return true;
}



