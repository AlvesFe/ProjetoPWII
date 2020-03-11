//Declaração de elementos
const userInputElement = document.querySelector('#user');
const passInputElement = document.querySelector('#pass');

//evento responsavel por inserir animação após o carregamento do elemento
document.getElementById('loginForm').onload = document.getElementById('loginForm').classList.add('animated', 'fadeIn');

function validarLogin(campo, idSmall, nomeCampo) {
    document.getElementById(idSmall).innerHTML = "Campo " + nomeCampo + " não pode estar em branco";
    document.getElementById(idSmall).style.color = '#d20000';
    document.getElementById(idSmall).classList.add('animated', 'flash');

    campo.classList.add('is-invalid');
}

function clearFields(campo, idSmall) {
    if (campo.value != "" && document.getElementById(idSmall).innerHTML != "") {
        document.getElementById(idSmall).innerHTML = "";
        document.getElementById(idSmall).classList.remove('animated', 'flash');
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
                    validarLogin(userInputElement, userInputElement.nextElementSibling.getAttribute('id'), "Usuário");
                }
                else {
                    clearFields(userInputElement, userInputElement.nextElementSibling.getAttribute('id'));
                }
                if (data == "ErroSenha") {
                    validarLogin(passInputElement, passInputElement.nextElementSibling.getAttribute('id'), "Senha");
                }
                else {
                    clearFields(passInputElement, passInputElement.nextElementSibling.getAttribute('id'));
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
const registerForm = document.forms['registerForm'];

let validatorReg = true;
function validarRegistro(campo, idSmall, nomeCampo) {
    if (campo.value == "") {
        document.getElementById(idSmall).innerHTML = "Campo " + nomeCampo + " obrigatório";
        document.getElementById(idSmall).style.color = '#d20000';
        document.getElementById(idSmall).classList.add('animated', 'flash');

        campo.classList.add('is-invalid');
        validarorReg = false;
    }
    else {
        clearFields(campo, idSmall);
    }
}

registerForm.addEventListener('submit', function (e) {
    validatorReg = true;

    validarRegistro(nameElement, "nameWarn", "nome");
    validarRegistro(surnameElement, "surnameWarn", "sobrenome");
    validarRegistro(emailElement, "emailWarn", "e-mail");
    validarRegistro(userRegElement, "userRegWarn", "usuário");
    validarRegistro(passRegElement, "passRegWarn", "senha");
    validarRegistro(passConfElement, "passConfWarn", "confirmar senha");

    if (passConfElement.value != passRegElement.value) {

        e.preventDefault();

        document.querySelector('#passConfWarn').innerHTML = "Senhas não conferem";
        document.querySelector('#passConfWarn').style.color = '#d20000';
        document.querySelector('#passConfWarn').classList.add('animated', 'flash');

        passConfElement.classList.add('border-danger');
    }

    validarRegistro(birthElement, "birthWarn", "nascimento");

    if (sexElement.value == "none") {

        e.preventDefault();

        document.querySelector('#sexWarn').innerHTML = "Campo sexo obrigatório";
        document.querySelector('#sexWarn').style.color = '#d20000';
        document.querySelector('#sexWarn').classList.add('animated', 'flash');

        sexElement.classList.add('border-danger');
    }
    else if (sexElement.value != "none" && document.querySelector('#sexWarn').innerHTML != "") {

        document.querySelector('#sexWarn').innerHTML = "";
        sexElement.classList.remove('border-danger');
    }

    validarRegistro(rgElement, "rgWarn", "RG");
    validarRegistro(cpfElement, "cpfWarn", "CPF");

    if (termsElement.checked == 0) {

        e.preventDefault();

        document.querySelector('#termsWarn').innerHTML = "Termos devem ser aceitos para continuar";
        document.querySelector('#termsWarn').style.color = '#d20000';
        document.querySelector('#termsWarn').classList.add('animated', 'flash');
    }
    else if (termsElement.value != "0" && document.querySelector('#termsWarn').innerHTML != "") {
        document.querySelector('#termsWarn').innerHTML = "";
    }

    if (validatorReg == false) {
        e.preventDefault();
        validatorReg = true;
    }

});
