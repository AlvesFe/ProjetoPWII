//Declaração de elementos
const userInputElement = document.querySelector('#user');
const passInputElement = document.querySelector('#pass');

//Evento responsavel por inserir animação após o carregamento do elemento
$('#loginForm').onload = $('#loginForm').addClass('animated fadeIn');

//Função para adicionar alerta no campo em branco no form de login
function validarLogin(campo, nomeCampo) {
    campo.nextElementSibling.innerHTML = "Campo " + nomeCampo + " não pode estar em branco";
    campo.nextElementSibling.style.color = '#d20000';
    campo.nextElementSibling.classList.add('animated', 'flash');

    campo.classList.add('is-invalid');
}

//Função para adicionar alerta no campo em branco no form de cadastro
function validarRegistro(campo, nomeCampo) {
    campo.nextElementSibling.innerHTML = "Campo " + nomeCampo + " obrigatório";
    campo.nextElementSibling.style.color = '#d20000';
    campo.nextElementSibling.classList.add('animated', 'flash');

    campo.classList.add('is-invalid');
}

//Função para limpar as mensagens de erro
function clearFields(campo) {
    if (campo.value != "" && campo.nextElementSibling.innerHTML != "") {
        campo.nextElementSibling.innerHTML = "";
        campo.nextElementSibling.classList.remove('animated', 'flash');
        campo.classList.remove('is-invalid');
    }
}

//função para validar o login
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

//função que leva a próxima página de cadastro
$("#btnNext").click(function () {
    $("#modalCadastroPag1").addClass("d-none");
    $("#modalCadastroPag1").removeClass("d-block");

    $("#modalCadastroPag2").removeClass("d-none");
    $("#modalCadastroPag2").addClass("d-block");

    $('#btnNext').hide();

    $('#btnBack').addClass("d-block");
    $('#btnBack').removeClass("d-none");

    $('#registerBtn').addClass("d-block");
    $('#registerBtn').removeClass("d-none");
});

//função que volta para a primeira página de cadastro
$("#btnBack").click(function () {
    $("#modalCadastroPag2").addClass("d-none");
    $("#modalCadastroPag2").removeClass("d-block");

    $("#modalCadastroPag1").removeClass("d-none");
    $("#modalCadastroPag1").addClass("d-block");

    $('#btnNext').show();

    $('#btnBack').addClass("d-none");
    $('#btnBack').removeClass("d-block");

    $('#registerBtn').addClass("d-none");
    $('#registerBtn').removeClass("d-block");
});

//função que adiciona mascaras aos campos de telefone, celular, cpf e rg
$(document).ready(function () {
    $('#tel').mask('(00) 0000-0000');
    $('#cel').mask('(00) 00000-0000');
    $('#rg').mask('00.000.000-0');
    $('#cpf').mask('000.000.000-00');
});

//função para validar o cadastro
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

                //Primeira página
                let validatorPagI = true;

                if (data == "ErroNome") {
                    validarRegistro(nameElement, "nome");
                    validatorPagI = false;
                }
                else {
                    clearFields(nameElement);
                }
                if (data == "ErroSobrenome") {
                    validarLogin(surnameElement, "sobrenome");
                    validatorPagI = false;
                }
                else {
                    clearFields(surnameElement);
                }
                if (data == "ErroUsuario") {
                    validarLogin(userRegElement, "usuario");
                    validatorPagI = false;
                }
                else {
                    clearFields(userRegElement);
                }
                if (data == "ErroTamanhoUsuario") {
                    userRegElement.nextElementSibling.innerHTML = "O nome de usuário deve ter no minimo 6 caracteres";
                    userRegElement.nextElementSibling.style.color = '#d20000';
                    userRegElement.nextElementSibling.classList.add('animated', 'flash');

                    userRegElement.classList.add('is-invalid');
                    validatorPagI = false;
                }
                else {
                    clearFields(userRegElement);
                }
                if (data == "ErroEmail") {
                    validarLogin(emailElement, "e-mail");
                    validatorPagI = false;
                }
                else {
                    clearFields(emailElement);
                }
                if (data == "ErroSenha") {
                    validarLogin(passRegElement, "senha");
                    validatorPagI = false;
                }
                else {
                    clearFields(passRegElement);
                }
                if (data == "ErroConfirmarSenha") {
                    validarLogin(passConfElement, "confirmar senha");
                    validatorPagI = false;
                }
                else {
                    clearFields(passConfElement);
                }
                if (data == "ErroDiferenteSenhas") {
                    passConfElement.nextElementSibling.innerHTML = "As senhas não conferem";
                    passConfElement.nextElementSibling.style.color = '#d20000';
                    passConfElement.nextElementSibling.classList.add('animated', 'flash');

                    passConfElement.classList.add('is-invalid');
                    validatorPagI = false;
                }
                else {
                    clearFields(passConfElement);
                }
                if (data == "ErroTamanhoSenha") {
                    passRegElement.nextElementSibling.innerHTML = "A senha deve conter no minimo 8 caracteres";
                    passRegElement.nextElementSibling.style.color = '#d20000';
                    passRegElement.nextElementSibling.classList.add('animated', 'flash');

                    passRegElement.classList.add('is-invalid');
                    validatorPagI = false;
                }
                else {
                    clearFields(passRegElement);
                }
                if (validatorPagI == false) {
                    $('#btnBack').removeClass("btn-outline-primary");
                    $('#btnBack').addClass("btn-outline-danger animated pulse");
                }
                else{
                    $('#btnBack').removeClass("btn-outline-danger animated pulse");
                    $('#btnBack').addClass("btn-outline-primary");                }


                //Segunda pagina
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

                if (data == "SucessoCadastro") {
                    $('#modalCadastro').modal('hide');
                    Swal.fire(
                        'Cadastro concluído',
                        'Seja bem vindo ' + nameElement.value + "!",
                        'success'
                    );
                }
                else if (data == "FalhaCadastro") {
                    $('#modalCadastro').modal('hide');
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