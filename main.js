const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('senha')
const passwordConfirmation = document.getElementById('password-conrfimation')

form.addEventListener('submit', (e)=>
{
    
    e.prenventDefault();
    e.checkInputs();
    
});
function checkInputs(){
    const usernameValue = username.value;
    const emailValuee = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue  == ''){
        setErrorFor( username, "O nome de usuário é obrigatório.");
    }
}

    function setErrorFor(input,message){
        
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        // adicionar mensagem de erro
        small.innerText = message;
        //adicionar a classe de erro
        formControl.className = "form-control error";
    }

    function setSuccesFor(input){
        
        const formControl = input.parentElement;
        formcontrol.className = 'form-control success';
    }
    

