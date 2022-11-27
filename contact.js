// let allform = document.getElementById('allform');
// let nameInput = document.querySelector("#name")
// let email = document.querySelector("#email")
// let message = document.querySelector("#message")
// let success = document.querySelector("#success")
// let errorNodes = document.querySelectorAll("#error")

// allform.addEventListener('click',(event)=>{
//     if(nameInput.value.length <1){
//         errorNodes.innerText = "Name cannot be blank";
//     }
// })



// for MENU_LIST {
    let menuList = document.getElementById('menu-list');
    menuList.style.maxHeight="0px";

    function togglemenu(){

        if(menuList.style.maxHeight =="0px")
            {
            menuList.style.maxHeight="600px"
            }
        else{
            menuList.style.maxHeight="0px"
        }
        }

//  }
 //INPUTS
let nameError = document.getElementById('name-error')
let emailError = document.getElementById('email-error')
let subjectError = document.getElementById('sbuject-error')
let messageError = document.getElementById('message-error')
let submitError= document.getElementById('submit-error')
let submit= document.getElementById('submit')
let Name= document.getElementById('Name')
let email= document.getElementById('Email')
let Message = document.getElementById('message')

// FOR NAME INPUT
function Name1() {
    let name=Name.value
    if(name.length ==0){
        nameError.innerHTML='name is required'
        return false
    }
     if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='write full name';
        return false
    }
   
    name.innerHTML='<i class="fa-solid fa-check"></i>'
    return true

}

// FOR EMAIL INPUT
function Email1(){
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


// FOR MESSAGE INPUT
function Message1(){
    let message=Message.value
    if(message.length=0){
        messageError.innerHTML='message reqiured'
    }
     if(message.length<30){
        messageError.innerHTML='must be more than 30 characters'
    }

    else if(message.length>30){
        messageError.innerHTML='<i class="fa-solid fa-check"></i>'
    }
}
// SUBMIT BUTTON
submit.addEventListener('click',(sub)=>{
    let name=Name.value
    let Email=email.value
    let message=Message.value
    
    
    if(name.length=0 || Email==='' || message== ""){
        window.alert("Message not sent")
    }
    else {
        window.alert('please fill our the inputs correctly')
    }

    sub.preventDefault()
})