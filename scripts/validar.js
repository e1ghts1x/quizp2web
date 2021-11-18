const nome = document.getElementById("name");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const elementName = document.getElementById("elementName");
const elementEmail = document.getElementById("elementEmail");
const elementCpf = document.getElementById("elementCpf");
const botao = document.querySelector("button");


// Validar Nome
function validarNome(){
    if(nome.value.trim()===""){
        nome.style.background = "#5952d4";
        elementName.innerHTML = "Insira um Nome válido";
        botao.disabled = true;
    }
    else{
        nome.style.background = "#161923";
        elementName.innerHTML = "Nome"
        botao.disabled = false;
    }
}

// Validar Email
function validarEmail(){
    if(email.value.trim()==="" || !email.value.includes("@") || !email.value.includes(".com")){
        email.style.background = "#5952d4";
        elementEmail.innerHTML = "Insira um Email válido";
        botao.disabled = true;
    }
    else{
        email.style.background = "#161923";
        elementEmail.innerHTML = "E-mail";
        botao.disabled = false;
    }
}

//Validar CPF
function validarCPF(){
    soma = (cpf.value)
    if(cpf.value.trim()==="" || cpf.value.length < 14){
        cpf.style.background = "#5952d4";
        elementCpf.innerHTML = "Insira um CPF válido"
        botao.disabled = true;
    }
    else{
        cpf.style.background = "#161923";
        elementCpf.innerHTML = "CPF";
        botao.disabled = false;
    }
}

//Somente números no campo CPF
function onlyNumber(){
    cpf.value = cpf.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
}

//Somente letras no campo Username
function onlyLetters(){
    nome.value = nome.value.replace(/[0-9.]/g, '');
}


//Máscara de CPF em jquery
$(document).ready(function(){
    $("#cpf").mask("999.999.999-99");
});