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
    if (userInputElement.value == "" && userWarnElement.childElementCount == 0) {
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
    else if (userInputElement.value != "" && userWarnElement.childElementCount != 0) {
        userPass = true;
    }

    if (passInputElement.value == "" && passWarnElement.childElementCount == 0) {
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
    else if (passInputElement.value != "" && passWarnElement.childElementCount != 0) {
        passwordPass = true;
    }
    if (userPass == true && passwordPass == true) {
        formElement.submit();
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