var userInputElement = document.querySelector('#user');
var passInputElement = document.querySelector('#pass');
var userWarnElement = document.querySelector('#userWarn');
var passWarnElement = document.querySelector('#passWarn');
var btnLoginElement = document.querySelector('#login');

function btnLoginEnabler() {
    if (userInputElement.value == "" || passInputElement.value == "") {
        btnLoginElement.setAttribute('disabled', 'disabled');
        btnLoginElement.classList.remove('btn-primary','animated','pulse');
        btnLoginElement.classList.add('btn-outline-primary');
    }
    else {
        btnLoginElement.removeAttribute('disabled');
        btnLoginElement.classList.remove('btn-outline-primary');
        btnLoginElement.classList.add('btn-primary', 'animated', 'pulse');
    }
}

btnLoginEnabler();

userInputElement.oninput = function () {
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
    btnLoginEnabler();
}
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

document.getElementById('loginForm').onload = document.getElementById('loginForm').classList.add('animated', 'fadeIn');