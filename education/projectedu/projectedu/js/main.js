// document.addEventListener('keydown' . function(event) {
    
// })





function setFormMessage(formElement, type , message) {
    const messageElement = formElement.querySelector('.form__message');
   
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success","form__message--error")
    messageElement.classList.add(`form__message--${type}`)
 
}


function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;

}
function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}




 document.addEventListener('DOMContentLoaded', () => {
     const loginForm = document.querySelector('#login')
     const createAccountForm = document.querySelector('#signUp')
    //  const createAccountContinuebutton = document.querySelector('#submit_button')
    document.querySelector('#linkCreateAccount').addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.add('form--hidden');
        createAccountForm.classList.remove('form--hidden');
    });

    document.querySelector('#linkLogin').addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.remove('form--hidden');
        createAccountForm.classList.add('form--hidden');
    
    });
    loginForm.addEventListener("submite", e => {
        e.preventDefault();
    
        setFormMessage(loginForm, 'error' , 'Invalid username/password');
    
    });
    
    
    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();
    
        setFormMessage(createAccountForm, 'error' , 'Fill the informations correctly');
    
    });
    
    document.querySelectorAll(".form__input").forEach(inputElement =>{
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 3) {
                setInputError(inputElement, "Username must be at least 3 characters");
            }
        });
        inputElement.addEventListener('input', e => {
            clearInputError(inputElement)
        })


        inputElement.addEventListener("blur", e => {
            if (e.target.id === "password" && e.target.value.length > 0 && e.target.value.length < 5 ){
                   setInputError(inputElement, "Your Password must contain at least 5 characters");
               
           }
              
           });
       
           
           inputElement.addEventListener('input', e => {
               clearInputError(inputElement)
           })
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "confirm-pass" && e.target.value !== e.target.id === 'password' ) {
                   setInputError(inputElement, "the password must be the same");
               
           }
              
           });
           inputElement.addEventListener('input', e => {
               clearInputError(inputElement)
           })
       });
      
    })
    
    
function newPage() {
    var Username = document.getElementById('signupUsername').value
    var confirm = document.getElementById('confirm-pass').value
    var password = document.getElementById('password').value    
    var email = document.getElementById('email').value
    
     if ((Username && password && email && confirm !== "") &&  (password === confirm))  {
            window.open('../html/homepage.html') 
    }else {

    }  
}
function newPageLog() {
    var loginPass = document.getElementById('loginPass').value
    var emailPass = document.getElementById('emailPass').value
    if(loginPass === 'natanim'){
        window.open('../html/homepage.html') 
    }else{
        alert('no account exist')
    }
}

