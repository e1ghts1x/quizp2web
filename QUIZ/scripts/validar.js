const name = document.getElementById("name");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const elementName = document.getElementById("elementName");
const elementEmail = document.getElementById("elementEmail");
const elementCpf = document.getElementById("elementCpf");


// Validar Nome
function validarNome(){
    if(name.value.trim()===""){
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
    if(email.value.trim()===""){
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

//Verificar se existem os parâmetros @ e .com

//Validar CPF
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

//Testa CPF

f/*unction testaCPF(cpf){
    var soma;
    var resto;
    soma = 0
    if(cpf == "00000000000") return false;

    for (i=1; i<=9; i++) soma = soma + parseInt(cpf.substring(i-1,))*(12-i);
    resto = (soma * 10) % 11;
    
    if((resto == 10) || (resto == 11)) resto=0;
    if (resto != parseInt(cpf.substring(10,11))){
        cpf.style.background = "#5952d4";
        elementCpf.innerHTML = "Insira um CPF válido";
        return false;
    } 
    return true;
}*/
//finalizar