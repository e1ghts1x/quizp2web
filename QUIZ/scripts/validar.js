const name = document.getElementById("name");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const elementName = document.getElementById("elementName");
const elementEmail = document.getElementById("elementEmail");
const elementCpf = document.getElementById("elementCpf");


// Validar Nome
function validarNome(){
    if(name.value.trim()==="" || !name.value.includes(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"])){ //consertar
        name.style.background = "#5952d4";
        elementName.innerHTML = "Insira um Username válido";
        return false;
    }
    else{
        name.style.background = "#161923";
        elementName.innerHTML = "Username"
        return true;
    }
}

//Verificar e impedir a existência de números ou símbolos... 

// Validar Email
function validarEmail(){
    if(email.value.trim()==="" || !email.value.includes("@") || !email.value.includes(".com")){
        email.style.background = "#5952d4";
        elementEmail.innerHTML = "Insira um Email válido";
        return false;
    }
    else{
        email.style.background = "#161923";
        elementEmail.innerHTML = "E-mail";
        return true;
    }
}


//Validar CPF
function validarCPF(){
    if(cpf.value.trim()===""){
        cpf.style.background = "#5952d4";
        elementCpf.innerHTML = "Insira um CPF válido"
        return false;
    }
    else{
        cpf.style.background == "#161923";
        elementCpf.innerHTML = "CPF";
        return false;
    }
}

//finalizar