const name = document.getElementById("name");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const elementName = document.getElementById("elementName");
const elementEmail = document.getElementById("elementEmail");
const elementCpf = document.getElementById("elementCpf");

function validarNome(){
    if(name.value.trim()===""){
        name.style.background = "#5952d4";
        elementName.innerHTML = "Insira um nome válido";
        return false;
    }
    else{
        return true;
    }
}

function validarEmail(){
    if(email.value.trim()===""){
        email.style.background = "#5952d4";
        elementEmail.innerHTML = "Insira um Email válido";
        return false;
    }
    else{
        return false;
    }
}

function validarCPF(){
    if(cpf.value.trim()===""){
        cpf.style.background = "#5952d4";
        elementCpf.innerHTML = "Insira um CPF válido"
        return false;
    }
    else{
        return false;
    }
}

//finalizar