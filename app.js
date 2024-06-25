"use strict";

const login_form = document.getElementById('login_form');
const login = document.getElementById('login');
const password = document.getElementById('password');
const submitButton = document.getElementsByClassName('submit')[0];
const errorWindow = document.getElementsByClassName('show_error')[0];
const passwordError = document.getElementsByClassName('password_error')[0];

submitButton.addEventListener('click', function(event) {
 event.preventDefault(); 

if (!login.value || !password.value) {

    password.className = 'input_red';
    login.className = 'input_red';
        setTimeout(() => {
    password.className = '';
    login.className = '';
}, 1500);

if(login.value) {
    login.className = '';
}

    errorWindow.className = 'show_error';
        setTimeout(() => {
    errorWindow.className = 'hidden_error';
    }, 1500);

    submitButton.textContent = 'ERROR';
    submitButton.className = 'red_btn';
        setTimeout(() => {
    submitButton.textContent = 'Войти';
    submitButton.className = 'submit';
}, 1500);

return;
};

//  Проверка длины пароля 

if (password.value.length < 8) {
    passwordError.className = 'password_error';
    password.className = 'input_red';
    setTimeout(() => {
        passwordError.className = 'hidden_password_error';
        password.className ='';
    }, 1500);
    return;
};


//  Отправляем форму
 login_form.submit();
});

