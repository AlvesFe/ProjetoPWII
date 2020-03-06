//BLOCO FORM LOGIN

//Declaração de elementos
const userInputElement = document.querySelector('#user');
const passInputElement = document.querySelector('#pass');
var userWarnElement = document.querySelector('#userWarn');
var passWarnElement = document.querySelector('#passWarn');

//evento responsavel por inserir animação após o carregamento do elemento
document.getElementById('loginForm').onload = document.getElementById('loginForm').classList.add('animated', 'fadeIn');

const formElement = document.forms['loginForm'];
formElement.addEventListener('submit', function (e) {

    var userPass = false, passwordPass = false;
    if (userInputElement.value == "") {
        e.preventDefault();
        var warnElement = document.createElement('small');//cria uma tag <small>
        var warnText = document.createTextNode("Campo usuário não pode estar em branco");//cria um elemento de texto

        warnElement.appendChild(warnText);//insere o texto criado na tag <small>
        userWarnElement.appendChild(warnElement);//insere a tag <small> na tag <div> de id #userWarn na DOM
        userWarnElement.style.color = '#d20000';//muda a cor da tag <div> para vermelho
        userWarnElement.setAttribute('class', 'animated flash');//adiciona animação de piscar a tag <div>
        userInputElement.classList.add('border-danger');

        userPass = false;
    }

    if (passInputElement.value == "") {
        e.preventDefault();
        var warnElement = document.createElement('small');
        var warnText = document.createTextNode("Campo senha não pode estar em branco");

        warnElement.appendChild(warnText);
        passWarnElement.appendChild(warnElement);
        passWarnElement.style.color = '#d20000';
        passWarnElement.setAttribute('class', 'animated flash');
        passInputElement.classList.add('border-danger');

        passwordPass = false;
    }
});

userInputElement.oninput = function () {
    if (userInputElement.value != "" && userWarnElement.childElementCount != 0) {
        userWarnElement.removeChild(userWarnElement.childNodes[0]);//remove a tag <small> e seus conteudos da tag <div>
        userWarnElement.classList.remove('animated', 'flash');//remove as animações da tag <div>
        userInputElement.classList.remove('border-danger');
    }
}
passInputElement.oninput = function () {
    if (passInputElement.value != "" && passWarnElement.childElementCount != 0) {
        passWarnElement.removeChild(passWarnElement.childNodes[0]);
        passWarnElement.classList.remove('animated', 'flash');
        passInputElement.classList.remove('border-danger');
    }
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

    let validator = true;
    if (nameElement.value == "") {
        document.querySelector('#nameWarn').innerHTML = "Campo nome obrigatório";
        document.querySelector('#nameWarn').style.color = '#d20000';
        document.querySelector('#nameWarn').classList.add('animated', 'flash');

        nameElement.classList.add('border-danger');
        validator = false;
    }

    if (surnameElement.value == "") {
        document.querySelector('#surnameWarn').innerHTML = "Campo sobrenome obrigatório";
        document.querySelector('#surnameWarn').style.color = '#d20000';
        document.querySelector('#surnameWarn').classList.add('animated', 'flash');

        surnameElement.classList.add('border-danger');
        validator = false;
    }

    if (emailElement.value == "") {
        document.querySelector('#emailWarn').innerHTML = "Campo e-mail obrigatório";
        document.querySelector('#emailWarn').style.color = '#d20000';
        document.querySelector('#emailWarn').classList.add('animated', 'flash');

        emailElement.classList.add('border-danger');
        validator = false;
    }

    if (userRegElement.value == "") {
        document.querySelector('#userRegWarn').innerHTML = "Campo usuário obrigatório";
        document.querySelector('#userRegWarn').style.color = '#d20000';
        document.querySelector('#userRegWarn').classList.add('animated', 'flash');

        userRegElement.classList.add('border-danger');
        validator = false;
    }

    if (passRegElement.value == "") {
        document.querySelector('#passRegWarn').innerHTML = "Campo senha obrigatório";
        document.querySelector('#passRegWarn').style.color = '#d20000';
        document.querySelector('#passRegWarn').classList.add('animated', 'flash');

        passRegElement.classList.add('border-danger');
        validator = false;
    }

    if (passConfElement.value == "") {
        document.querySelector('#passConfWarn').innerHTML = "Campo confirmar senha obrigatório";
        document.querySelector('#passConfWarn').style.color = '#d20000';
        document.querySelector('#passConfWarn').classList.add('animated', 'flash');

        passConfElement.classList.add('border-danger');
        validator = false;
    }
    else if (passConfElement.value != passRegElement.value) {
        document.querySelector('#passConfWarn').innerHTML = "Senhas não conferem";
        document.querySelector('#passConfWarn').style.color = '#d20000';
        document.querySelector('#passConfWarn').classList.add('animated', 'flash');

        passConfElement.classList.add('border-danger');
        validator = false;
    }

    if (birthElement.value == "") {
        document.querySelector('#birthWarn').innerHTML = "Campo nascimento obrigatório";
        document.querySelector('#birthWarn').style.color = '#d20000';
        document.querySelector('#birthWarn').classList.add('animated', 'flash');

        birthElement.classList.add('border-danger');
        validator = false;
    }

    if (sexElement.value == "none") {
        e.preventDefault();

        document.querySelector('#sexWarn').innerHTML = "Campo sexo obrigatório";
        document.querySelector('#sexWarn').style.color = '#d20000';
        document.querySelector('#sexWarn').classList.add('animated', 'flash');

        sexElement.classList.add('border-danger');
        validator = false;
    }

    if (rgElement.value == "") {
        document.querySelector('#rgWarn').innerHTML = "Campo RG obrigatório";
        document.querySelector('#rgWarn').style.color = '#d20000';
        document.querySelector('#rgWarn').classList.add('animated', 'flash');

        rgElement.classList.add('border-danger');
        validator = false;
    }

    if (cpfElement.value == "") {
        document.querySelector('#cpfWarn').innerHTML = "Campo CPF obrigatório";
        document.querySelector('#cpfWarn').style.color = '#d20000';
        document.querySelector('#cpfWarn').classList.add('animated', 'flash');

        cpfElement.classList.add('border-danger');
        validator = false;
    }

    if (termsElement.checked == 0) {
        document.querySelector('#termsWarn').innerHTML = "Termos devem ser aceitos para continuar";
        document.querySelector('#termsWarn').style.color = '#d20000';
        document.querySelector('#termsWarn').classList.add('animated', 'flash');
        validator = false;
    }
    if (validator != true) {
        e.preventDefault();
    } else {
        formElement.submit();
    }
});

nameElement.oninput = function () {
    if (nameElement.value != "" && document.querySelector('#nameWarn').innerHTML != "") {
        document.querySelector('#nameWarn').innerHTML = "";
        nameElement.classList.remove('border-danger');
    }
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