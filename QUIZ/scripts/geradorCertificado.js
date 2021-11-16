function dados(){
    var usuario = document.formulario.name.value;
    var email =  document.formulario.email.value;
    var cpf = document.formulario.cpf.value;
    var msg = "Nome: " + usuario + "Email: " + email + "CPF: " + cpf;
    alert(msg);
}