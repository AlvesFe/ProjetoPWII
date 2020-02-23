//Declaração de elementos
var userInputElement = document.querySelector('#user');
var passInputElement = document.querySelector('#pass');
var userWarnElement = document.querySelector('#userWarn');
var passWarnElement = document.querySelector('#passWarn');
var btnLoginElement = document.querySelector('#login');

//função responsável por permitir que o botão login seja apertado (após verificar que os campos não estão vazios)
function btnLoginEnabler() {
    if (userInputElement.value == "" || passInputElement.value == "") {
        btnLoginElement.setAttribute('disabled', 'disabled');//desabilita o botão
        btnLoginElement.classList.remove('btn-primary', 'animated', 'pulse');//remove as classes de animação
        btnLoginElement.classList.add('btn-outline-primary');//adiciona o visual de linhas azuis e corpo branco ao botão
    }
    else {
        btnLoginElement.removeAttribute('disabled');//habilita o botão
        btnLoginElement.classList.remove('btn-outline-primary');//remove o visual de linhas azuis e corpo branco do botão
        btnLoginElement.classList.add('btn-primary', 'animated', 'pulse');//adiciona as classes de animação
    }
}

//evento para verificar se o campo de login está vazio
userInputElement.oninput = function () {
    if (userInputElement.value == "" && userWarnElement.childElementCount == 0) {
        var warnElement = document.createElement('small');//cria uma tag <small>
        var warnText = document.createTextNode("Campo usuário não pode estar em branco");//cria um elemento de texto

        warnElement.appendChild(warnText);//insere o texto criado na tag <small>
        userWarnElement.appendChild(warnElement);//insere a tag <small> na tag <div> de id #userWarn na DOM
        userWarnElement.style.color = '#d20000';//muda a cor da tag <div> para vermelho
        userWarnElement.setAttribute('class', 'animated flash');//adiciona animação de piscar a tag <div>
    }
    else if (userInputElement.value != "" && userWarnElement.childElementCount != 0) {
        userWarnElement.removeChild(userWarnElement.childNodes[0]);//remove a tag <small> e seus conteudos da tag <div>
        userWarnElement.classList.remove('animated', 'flash');//remove as animações da tag <div>
    }
    btnLoginEnabler();//chama a verificação do botão login
}

//evento para verificar se o campo de login e senha está vazio
passInputElement.oninput = function () {
    if (userInputElement.value == "" && userWarnElement.childElementCount == 0) {
        var warnElement = document.createElement('small');
        var warnText = document.createTextNode("Campo usuário não pode estar em branco");

        warnElement.appendChild(warnText);
        userWarnElement.appendChild(warnElement);
        userWarnElement.style.color = '#d20000';
        userWarnElement.setAttribute('class', 'animated flash');

    }
    else if (userInputElement.value != "" && userWarnElement.childElementCount != 0) {
        userWarnElement.removeChild(userWarnElement.childNodes[0]);
        userWarnElement.classList.remove('animated', 'flash');
    }

    if (passInputElement.value == "" && passWarnElement.childElementCount == 0) {
        var warnElement = document.createElement('small');
        var warnText = document.createTextNode("Campo senha não pode estar em branco");

        warnElement.appendChild(warnText);
        passWarnElement.appendChild(warnElement);
        passWarnElement.style.color = '#d20000';
        passWarnElement.setAttribute('class', 'animated flash');
    }
    else if (passInputElement.value != "" && passWarnElement.childElementCount != 0) {
        passWarnElement.removeChild(passWarnElement.childNodes[0]);
        passWarnElement.classList.remove('animated', 'flash');
    }
    btnLoginEnabler();
}

//evento responsavel por inserir animação após o carregamento do elemento
document.getElementById('loginForm').onload = document.getElementById('loginForm').classList.add('animated', 'fadeIn');
document.getElementById('loginForm').onload = btnLoginEnabler();