/* Validación de campos*/ 
document.getElementById('submitMsg').addEventListener('click', function(){ 
 
    let name= document.getElementById("fname").value;
    let email= document.getElementById("femail");
    let phone= document.getElementById("fphone");
    let subjet= document.getElementById("fsubjet");
    let message= document.getElementById("fmessage");
    let valid = true;

    
    if (name.length <= 2){
        document.getElementById('fname').style.boxShadow = "0 0 5px 2px #cc0001";
        valid = false;
    } else{
        document.getElementById('fname').style.boxShadow = "0 0 0px 0px";
        }
    
    if (email.value.indexOf("@")==-1 || email.value.indexOf(".")==-1 || email.value.length<7){
        document.getElementById('femail').style.boxShadow = "0 0 5px 2px #cc0001";
        valid = false;
    } else{
        document.getElementById('femail').style.boxShadow = "0 0 0px 0px";
        }

    if (phone.value.length < 8){
        document.getElementById('fphone').style.boxShadow = "0 0 5px 2px #cc0001";
        valid = false;
    } else{
        document.getElementById('fphone').style.boxShadow = "0 0 0px 0px";
        }
    
    if (subjet.value.length < 8){
        document.getElementById('fsubjet').style.boxShadow = "0 0 5px 2px #cc0001";
        valid = false;
    } else{
        document.getElementById('fsubjet').style.boxShadow = "0 0 0px 0px";
        }
    
    if(valid==false)
        return;

    
    console.log("Name: "+name.value,"Email: "+email.value,"Phone: "+phone.value);  
    console.log("Msg: "+message.value);  
});


/* Función para restringir solo a caracteres válidos para el campo */
function numberOnly(input) {
    var num = /[^0-9+]/gi;
    input.value = input.value.replace(num, "");
}

function lettersOnly(input) {
    var num = /[^a-z ]/gi;
    input.value = input.value.replace(num, "");
}

