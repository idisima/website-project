
let emailError = document.getElementById('email-error')

function validEmail(){
    let Email=email.value

    if(Email === ""){
        emailError.innerHTML='email is required'
        return false
    }
    else if(!Email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='email  Invalid'
        return false
    }

    
        emailError.innerHTML='<i class="fa-solid fa-check"></i>';
        return true
    }

