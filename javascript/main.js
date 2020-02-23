var userInputElement = document.querySelector('#user');
var passInputElement = document.querySelector('#pass');
var userWarnElement = document.querySelector('#userWarn');
var passWarnElement = document.querySelector('#passWarn');
var btnLoginElement = document.querySelector('#login');

function btnLoginEnabler() {
    if (userInputElement.value == "" || passInputElement.value == "") {
        btnLoginElement.setAttribute('disabled', 'disabled');
    }
    else {
        btnLoginElement.removeAttribute('disabled');
    }
}

btnLoginEnabler();

userInputElement.onchange = function () {
    if (userInputElement.value == "" && userWarnElement.childElementCount == 0) {
        var warnElement = document.createElement('small');
        var warnText = document.createTextNode("Campo usuário não pode estar em branco");

        warnElement.appendChild(warnText);
        userWarnElement.appendChild(warnElement);
        userWarnElement.style.color = '#d20000';
    }
    else if (userInputElement.value != "" && userWarnElement.childElementCount != 0) {
        userWarnElement.removeChild(userWarnElement.childNodes[0]);
    }
    btnLoginEnabler();
}
passInputElement.onchange = function () {
    if (userInputElement.value == "" && userWarnElement.childElementCount == 0) {
        var warnElement = document.createElement('small');
        var warnText = document.createTextNode("Campo usuário não pode estar em branco");

        warnElement.appendChild(warnText);
        userWarnElement.appendChild(warnElement);
        userWarnElement.style.color = '#d20000';
    }
    else if (userInputElement.value != "" && userWarnElement.childElementCount != 0) {
        userWarnElement.removeChild(userWarnElement.childNodes[0]);
    }

    if (passInputElement.value == "" && passWarnElement.childElementCount == 0) {
        var warnElement = document.createElement('small');
        var warnText = document.createTextNode("Campo senha não pode estar em branco");

        warnElement.appendChild(warnText);
        passWarnElement.appendChild(warnElement);
        passWarnElement.style.color = '#d20000';
    }
    else if (passInputElement.value != "" && passWarnElement.childElementCount != 0) {
        passWarnElement.removeChild(passWarnElement.childNodes[0]);
    }
    btnLoginEnabler();
}