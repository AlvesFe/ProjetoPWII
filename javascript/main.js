//BLOCO FORM LOGIN

//Declaração de elementos
const userInputElement = document.querySelector('#user');
const passInputElement = document.querySelector('#pass');

//evento responsavel por inserir animação após o carregamento do elemento
document.getElementById('loginForm').onload = document.getElementById('loginForm').classList.add('animated', 'fadeIn');


const formElement = document.forms['loginForm'];
formElement.addEventListener('submit', function (e) {

    function validarLogin(campo, idSmall, nomeCampo) {
        if (campo.value == "") {

            e.preventDefault();

            document.getElementById(idSmall).innerHTML = "Campo " + nomeCampo + " não pode estar em branco";
            document.getElementById(idSmall).style.color = '#d20000';
            document.getElementById(idSmall).classList.add('animated', 'flash');

            campo.classList.add('border-danger');
        }
    }

    validarLogin(userInputElement, "userWarn", "Usuário");
    validarLogin(passInputElement, "passWarn", "Senha");

});

function clearFields(campo, idSmall) {
    if (campo.value != "" && document.getElementById(idSmall).innerHTML != "") {
        document.getElementById(idSmall).innerHTML = "";
        document.getElementById(idSmall).classList.remove('animated', 'flash');
        campo.classList.remove('border-danger');
    }
}

userInputElement.oninput = function () {
    clearFields(userInputElement, "userWarn");
}
passInputElement.oninput = function () {
    clearFields(passInputElement, "passWarn");
}

//BLOCO FORM CADASTRO

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

registerForm.addEventListener('submit', function (e) {

    function validarRegistro(campo, idSmall, nomeCampo) {
        if (campo.value == "") {

            e.preventDefault();

            document.getElementById(idSmall).innerHTML = "Campo " + nomeCampo + " obrigatório";
            document.getElementById(idSmall).style.color = '#d20000';
            document.getElementById(idSmall).classList.add('animated', 'flash');

            campo.classList.add('border-danger');
        }
    }
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

    validarRegistro(rgElement, "rgWarn", "RG");
    validarRegistro(cpfElement, "cpfWarn", "CPF");

    if (termsElement.checked == 0) {
        e.preventDefault();

        document.querySelector('#termsWarn').innerHTML = "Termos devem ser aceitos para continuar";
        document.querySelector('#termsWarn').style.color = '#d20000';
        document.querySelector('#termsWarn').classList.add('animated', 'flash');
    }

});

nameElement.oninput = function () {
    clearLoign
}
surnameElement.oninput = function () {
    if (surnameElement.value != "" && document.querySelector('#surnameWarn').innerHTML != "") {
        document.querySelector('#surnameWarn').innerHTML = "";
        surnameElement.classList.remove('border-danger');
    }
}
emailElement.oninput = function () {
    if (emailElement.value != "" && document.querySelector('#emailWarn').innerHTML != "") {
        document.querySelector('#emailWarn').innerHTML = "";
        emailElement.classList.remove('border-danger');
    }
}
userRegElement.oninput = function () {
    if (userRegElement.value != "" && document.querySelector('#userRegWarn').innerHTML != "") {
        document.querySelector('#userRegWarn').innerHTML = "";
        userRegElement.classList.remove('border-danger');
    }
}
passRegElement.oninput = function () {
    if (passRegElement.value != "" && document.querySelector('#passRegWarn').innerHTML != "") {
        document.querySelector('#passRegWarn').innerHTML = "";
        passRegElement.classList.remove('border-danger');
    }
}
passConfElement.oninput = function () {
    if (passConfElement.value != "" && document.querySelector('#passConfWarn').innerHTML == "Campo confirmar senha obrigatório") {
        document.querySelector('#passConfWarn').innerHTML = "";
        passConfElement.classList.remove('border-danger');
    }
    if (passConfElement.value == passRegElement.value && document.querySelector('#passConfWarn').innerHTML == "Senhas não conferem") {
        document.querySelector('#passConfWarn').innerHTML = "";
        passConfElement.classList.remove('border-danger');
    }
}
birthElement.oninput = function () {
    if (birthElement.value != "" && document.querySelector('#birthWarn').innerHTML != "") {
        document.querySelector('#birthWarn').innerHTML = "";
        birthElement.classList.remove('border-danger');
    }
}
sexElement.oninput = function () {
    if (sexElement.value != "none" && document.querySelector('#sexWarn').innerHTML != "") {
        document.querySelector('#sexWarn').innerHTML = "";
        sexElement.classList.remove('border-danger');
    }
}
rgElement.oninput = function () {
    if (rgElement.value != "" && document.querySelector('#rgWarn').innerHTML != "") {
        document.querySelector('#rgWarn').innerHTML = "";
        rgElement.classList.remove('border-danger');
    }
}
cpfElement.oninput = function () {
    if (cpfElement.value != "" && document.querySelector('#cpfWarn').innerHTML != "") {
        document.querySelector('#cpfWarn').innerHTML = "";
        cpfElement.classList.remove('border-danger');
    }
}
termsElement.oninput = function () {
    if (termsElement.value != "0" && document.querySelector('#termsWarn').innerHTML != "") {
        document.querySelector('#termsWarn').innerHTML = "";
    }
}