import {
    isValidPassword,
    isValidUserName
} from "./commen.js";

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
*/


const form = document.querySelector(".s-l-form");

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    //if (isValidPassword(userpwd.value) && isValidUserName(username.value)) {
        //usernameError.style.display = 'none';
        //userpwdError.style.display = 'none';
        form.submit();
    //}
    
    /*
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/connexion');
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        }
        else {
            console.log('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send(new FormData(form));   */
});


