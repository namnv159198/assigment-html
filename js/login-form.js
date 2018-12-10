
var btnSubmit = document.forms['login-form']['btn-submit'];

btnSubmit.onclick = function () {
    if ( valueForm()){
        doLogin();
    }
}


function  doLogin() {
    var _Email = document.forms['login-form']['Email'].value;
    var _Password = document.forms['login-form']['Password'].value;

    var  loginInformation = {
        password : _Password,
        email : _Email,
    }

    var sendData = JSON.stringify(loginInformation);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4  && xhr.status == 201){
            var reponseData = JSON.parse(xhr.responseText);
            alert('Success !' + reponseData.token);
            localStorage.setItem('token-key', reponseData.token);
            document.forms['login-form'].reset();
        }
        else if(xhr.readyState == 4){
            var reponseData = JSON.parse(xhr.responseText);
            alert('Register Fail , Please try again' + xhr.responseText);
        }
    }
    xhr.open('POST' , 'https://2-dot-backup-server-002.appspot.com/_api/v2/members/authentication' , true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(sendData);
}
function  valueForm (){
    var value = true;
    var valueEmail = true;
    var valuePassword = true;

    var textEmail = document.forms['login-form']['Email'];
    var msgEmail = textEmail.nextElementSibling;
    if(textEmail.value == null || textEmail.value.length == 0){
        msgEmail.innerHTML = 'Email is required';
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        valueEmail = false;
    }
    else {
        msgEmail.innerHTML = 'OK !';
        msgEmail.classList.add('msg-success');
        msgEmail.classList.remove('msg-error');
    }

    var textPassword = document.forms['login-form']['Password'];
    var msgPassword = textPassword.nextElementSibling;
    if(textPassword.value == null || textPassword.value.length == 0){
        msgPassword.innerHTML = 'Password is required';
        msgPassword.classList.remove('msg-success');
        msgPassword.classList.add('msg-error');
        valuePassword = false;
    }
    else {
        msgPassword.innerHTML = 'OK !';
        msgPassword.classList.add('msg-success');
        msgPassword.classList.remove('msg-error');
    }

    value = valueEmail && valuePassword;
    return value;
}