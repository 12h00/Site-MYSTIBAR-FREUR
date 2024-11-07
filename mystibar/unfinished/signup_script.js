import {
    isValidEmail,
    isValidPassword,
    isValidUserName
} from "./commen.js";


const form = document.querySelector(".s-l-form");
/*
const username = document.getElementById('username');
const usernameError = document.getElementById('username-error');

username.addEventListener('blur', function () {
    if (!isValidUserName(username.value)) {
        usernameError.style.display = 'block';
    } else {
        usernameError.style.display = 'none';
    }
});

const userpwd = document.getElementById('userpwd');
const userpwdError = document.getElementById('userpwd-error');

userpwd.addEventListener('blur', function () {
    if (!isValidPassword(userpwd.value)) {
        userpwdError.style.display = 'block';
    } else {
        userpwdError.style.display = 'none';
    }
});

const useremail = document.getElementById('useremail');
const useremailError = document.getElementById('useremail-error');

useremail.addEventListener('blur', function () {
    if (!isValidEmail(useremail.value)) {
        useremailError.style.display = 'block';

    } else {
        useremailError.style.display = 'none';
    }
});
*/

form.addEventListener('submit', function (event) {
    event.preventDefault();
    //if (isValidEmail(useremail.value) && isValidPassword(userpwd.value) && isValidUserName(username.value)) {
        //usernameError.style.display = 'none';
        //userpwdError.style.display = 'none';
        //useremailError.style.display = 'none';
        form.submit();
    //}
});