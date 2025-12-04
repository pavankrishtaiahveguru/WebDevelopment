// oninput event handler
let errorStatement=document.getElementById("error_statement");

// handler function
function validatePasswordLength(){
    let password=document.getElementById("password_input").value;
    if(password.length==0){
        errorStatement.textContent=""
    }
    else if(password.length<8){
        errorStatement.textContent="Password is too week."
        errorStatement.style.color="red";
    }
    else if(password.length>=8 && password.length<=16){
        errorStatement.textContent="Password is Strong."
        errorStatement.style.color="green";
    }
    else if(password.length>16){
        errorStatement.textContent="Password is too Strong."
        errorStatement.style.color="orange";
    }
}