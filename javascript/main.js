//Declaração de elementos
const userInputElement = document.querySelector('#user');
const passInputElement = document.querySelector('#pass');

//evento responsavel por inserir animação após o carregamento do elemento
document.getElementById('loginForm').onload = document.getElementById('loginForm').classList.add('animated', 'fadeIn');

function validarLogin(campo, nomeCampo) {
    campo.nextElementSibling.innerHTML = "Campo " + nomeCampo + " não pode estar em branco";
    campo.nextElementSibling.style.color = '#d20000';
    campo.nextElementSibling.classList.add('animated', 'flash');

    campo.classList.add('is-invalid');
}

function validarRegistro(campo, nomeCampo) {
    campo.nextElementSibling.innerHTML = "Campo " + nomeCampo + " obrigatório";
    campo.nextElementSibling.style.color = '#d20000';
    campo.nextElementSibling.classList.add('animated', 'flash');

    campo.classList.add('is-invalid');
}

function clearFields(campo) {
    if (campo.value != "" && campo.nextElementSibling.innerHTML != "") {
        campo.nextElementSibling.innerHTML = "";
        campo.nextElementSibling.classList.remove('animated', 'flash');
        campo.classList.remove('is-invalid');
    }
}

$(function () {
    $('#loginForm').submit(function () {
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function (data) {
                if (data == "ErroEmail") {
                    validarLogin(userInputElement, "usuário");
                }
                else {
                    clearFields(userInputElement);
                }
                if (data == "ErroSenha") {
                    validarLogin(passInputElement, "senha");
                }
                else {
                    clearFields(passInputElement);
                }
                if (data == "FalhaLogin") {
                    Swal.fire(
                        'Falha',
                        'Usuário ou senha inválidos',
                        'error'
                    );
                }
                if (data == "SucessoCliente") {
                    Swal.fire(
                        'Sucesso',
                        'Logado como cliente',
                        'success'
                    );
                }
                if (data == "SucessoADM") {
                    Swal.fire(
                        'Sucesso',
                        'Logado como administrador',
                        'success'
                    );
                }
            },
        });
        return false;
    });
});

const nameElement = document.querySelector('#name');
const surnameElement = document.querySelector('#surname');
const userRegElement = document.querySelector('#regUser');
const emailElement = document.querySelector('#email');
const passRegElement = document.querySelector('#regPass');
const passConfElement = document.querySelector('#passConf');
const birthElement = document.querySelector('#birth');
const sexElement = document.querySelector('#gender');
const rgElement = document.querySelector('#rg');
const cpfElement = document.querySelector('#cpf');
const termsElement = document.querySelector('#terms');

$(document).ready(function(){
    $('#tel').mask('(00) 0000-0000');
    $('#cel').mask('(00) 00000-0000');
    $('#rg').mask('00.000.000-0');
    $('#cpf').mask('000.000.000-00');
});

    
$(function () {
    $('#registerForm').submit(function () {
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function (data) {
                if (data == "ErroNome") {
                    validarRegistro(nameElement, "nome");
                }
                else {
                    clearFields(nameElement);
                }
                if (data == "ErroSobrenome") {
                    validarLogin(surnameElement, "sobrenome");
                }
                else {
                    clearFields(surnameElement);
                }
                if (data == "ErroUsuario") {
                    validarLogin(userRegElement, "usuario");
                }
                else {
                    clearFields(userRegElement);
                }
                if (data == "ErroTamanhoUsuario") {
                    userRegElement.nextElementSibling.innerHTML = "O nome de usuário deve ter no minimo 6 caracteres";
                    userRegElement.nextElementSibling.style.color = '#d20000';
                    userRegElement.nextElementSibling.classList.add('animated', 'flash');

                    userRegElement.classList.add('is-invalid');
                }
                else {
                    clearFields(userRegElement);
                }
                if (data == "ErroEmail") {
                    validarLogin(emailElement, "e-mail");
                }
                else {
                    clearFields(emailElement);
                }
                if (data == "ErroSenha") {
                    validarLogin(passRegElement, "senha");
                }
                else {
                    clearFields(passRegElement);
                }
                if (data == "ErroConfirmarSenha") {
                    validarLogin(passConfElement, "confirmar senha");
                }
                else {
                    clearFields(passConfElement);
                }
                if (data == "ErroDiferenteSenhas") {
                    passConfElement.nextElementSibling.innerHTML = "As senhas não conferem";
                    passConfElement.nextElementSibling.style.color = '#d20000';
                    passConfElement.nextElementSibling.classList.add('animated', 'flash');

                    passConfElement.classList.add('is-invalid');
                }
                else {
                    clearFields(passConfElement);
                }
                if (data == "ErroTamanhoSenha") {
                    passRegElement.nextElementSibling.innerHTML = "A senha deve conter no minimo 8 caracteres";
                    passRegElement.nextElementSibling.style.color = '#d20000';
                    passRegElement.nextElementSibling.classList.add('animated', 'flash');

                    passRegElement.classList.add('is-invalid');
                }
                else {
                    clearFields(passRegElement);
                }
                if (data == "ErroNascimento") {
                    validarLogin(birthElement, "nascimento");
                }
                else {
                    clearFields(birthElement);
                }
                if (data == "ErroJovemDemais") {
                    birthElement.nextElementSibling.innerHTML = "Voce tem menos de 13 anos!";
                    birthElement.nextElementSibling.style.color = '#d20000';
                    birthElement.nextElementSibling.classList.add('animated', 'flash');

                    birthElement.classList.add('is-invalid');
                }
                else {
                    clearFields(birthElement);
                }
                if (data == "ErroSexo") {
                    validarLogin(sexElement, "sexo");
                }
                else {
                    clearFields(sexElement);
                }
                if (data == "ErroRG") {
                    validarLogin(rgElement, "RG");
                }
                else {
                    clearFields(rgElement);
                }
                if (data == "ErroTamanhoRg") {
                    rgElement.nextElementSibling.innerHTML = "RG deve possuir 9 digitos";
                    rgElement.nextElementSibling.style.color = '#d20000';
                    rgElement.nextElementSibling.classList.add('animated', 'flash');

                    rgElement.classList.add('is-invalid');
                }
                else {
                    clearFields(rgElement);
                }
                if (data == "ErroCPF") {
                    validarLogin(cpfElement, "CPF");
                }
                else {
                    clearFields(cpfElement);
                }
                if (data == "ErroTamanhoCpf") {
                    cpfElement.nextElementSibling.innerHTML = "RG deve possuir 9 digitos";
                    cpfElement.nextElementSibling.style.color = '#d20000';
                    cpfElement.nextElementSibling.classList.add('animated', 'flash');

                    cpfElement.classList.add('is-invalid');
                }
                else {
                    clearFields(cpfElement);
                }

                if(data == "SucessoCadastro"){
                    Swal.fire(
                        'Cadastro concluído',
                        'Seja bem vindo '+ nameElement.value + "!",
                        'success'
                    );
                }
                else if(data == "FalhaCadastro"){
                    Swal.fire(
                        'Falha no cadastro',
                        'Tente novamente mais tarde',
                        'error'
                    );
                }

            },
        });
        return false;
    });
});