var btnSubmit  =   document.forms['register-form']['btn-submit'];

btnSubmit.onclick = function () {
    if(valueForm()){
        doRegister();
    }
};


function doRegister() {
   var _firstName = document.forms['register-form']['FirstName'].value;
   var _lastName = document.forms['register-form']['LastName'].value;
   var _adress = document.forms['register-form']['Adress'].value;
   var _password = document.forms['register-form']['Password'].value;
   var _email = document.forms['register-form']['Email'].value;
   var _avatar = document.forms['register-form']['Avatar'].value;
   var _gender = document.forms['register-form']['gender'].value;
   var _date = document.forms['register-form']['Date'].value;
   var _phone = document.forms['register-form']['phone'].value;
   
   var registerInformation = {
       firstName : _firstName,
       lastName : _lastName,
       password : _password,
       address :_adress,
       phone : _phone,
       avatar : _avatar,
       gender : _gender,
       email : _email,
       birthday : _date,
   }
   var sendData = JSON.stringify(registerInformation);

   var xhr =  new XMLHttpRequest();
   xhr.onreadystatechange = function () {
       if(xhr.readyState == 4 && xhr.status == 201){
           var  reponseData = JSON.parse(xhr.responseText);
           alert('Register Success !');
           document.forms['register-form'].reset();
       }else if(xhr.readyState == 4){
           alert('Register fails, please try again! ' + xhr.responseText);
       }
   }
   xhr.open('POST', 'https://2-dot-backup-server-002.appspot.com/_api/v2/members',true);
   xhr.setRequestHeader('Content-Type','application/json');
   xhr.send(sendData);
}


function valueForm() {

    var isvalue  = true;
    var isvalueFirstName = true;
    var isvalueLastName  = true;
    var isvalueAdress  = true;
    var isvalueConfirmPassword  = true;
    var isvaluePassword = true;
    var isvalueEmail  = true;
    var isvalueAvatar  = true;
    var isvaluePhone  = true;




    var txtFirstName = document.forms['register-form']['FirstName'];
    var msgFirstName = txtFirstName.nextElementSibling;
    if(txtFirstName.value == null || txtFirstName.value.length == 0){
        msgFirstName.classList.remove('msg-success');
        msgFirstName.classList.add('msg-error');
        txtFirstName.style.marginLeft = '11.8%';
        msgFirstName.innerHTML = 'First Name is required !';
        isvalueFirstName = false;
    }
    else {
        msgFirstName.classList.add('msg-success');
        msgFirstName.classList.remove('msg-error');
        msgFirstName.innerHTML = 'OK!';
        txtFirstName.style.marginLeft = '2.4%';
    }

    var txtLastName = document.forms['register-form']['LastName'];
    var msgLastName = txtLastName.nextElementSibling;
    if(txtLastName.value == null || txtLastName.value.length == 0){
        msgLastName.classList.remove('msg-success');
        msgLastName.classList.add('msg-error');
        txtLastName.style.marginLeft = '11.7%';
        msgLastName.innerHTML = 'Last Name is required !';
        isvalueLastName = false;
    }
    else {
        msgLastName.classList.add('msg-success');
        msgLastName.classList.remove('msg-error');
        msgLastName.innerHTML = 'OK!';
        txtLastName.style.marginLeft = '2.4%';
    }

    var txtAdress = document.forms['register-form']['Adress'];
    var msgAdress = txtAdress.nextElementSibling;
    if(txtAdress.value == null || txtAdress.value.length == 0){
        msgAdress.classList.remove('msg-success');
        msgAdress.classList.add('msg-error');
        txtAdress.style.marginLeft = '9.7%';
        msgAdress.innerHTML = 'Adress is required !';
        isvalueAdress = false;
    }
    else {
        msgAdress.classList.add('msg-success');
        msgAdress.classList.remove('msg-error');
        msgAdress.innerHTML = 'OK!';
        txtAdress.style.marginLeft = '2.4%';
    }

    var txtPassword = document.forms['register-form']['Password'];
    var msgPassword = txtPassword.nextElementSibling;
    if(txtPassword.value == null || txtPassword.value.length == 0){
        msgPassword.classList.remove('msg-success');
        msgPassword.classList.add('msg-error');
        msgPassword.innerHTML = 'Password is required !';
        txtPassword.style.marginLeft = '11%';
        isvaluePassword = false;
    }
    else {
        msgPassword.classList.add('msg-success');
        msgPassword.classList.remove('msg-error');
        msgPassword.innerHTML = 'OK!';
        txtPassword.style.marginLeft = '2.4%';
    }

    var txtConfirmPassword = document.forms['register-form']['ConfirmPassword'];
    var msgConfirmPassword = txtConfirmPassword.nextElementSibling;
    if(txtConfirmPassword.value == null || txtConfirmPassword.value.length == 0 || txtConfirmPassword.value != txtPassword.value){
        msgConfirmPassword.classList.remove('msg-success');
        msgConfirmPassword.classList.add('msg-error');
        msgConfirmPassword.innerHTML = 'Confirm Password is required !';
        txtConfirmPassword.style.marginLeft = '15.4%';
        isvalueConfirmPassword = false;
    }

    else {
        msgConfirmPassword.classList.add('msg-success');
        msgConfirmPassword.classList.remove('msg-error');
        msgConfirmPassword.innerHTML = 'OK!';
        txtConfirmPassword.style.marginLeft = '2.4%';
    }


    var txtEmail = document.forms['register-form']['Email'];
    var msgEmail = txtEmail.nextElementSibling;
    if(txtEmail.value == null || txtEmail.value.length == 0){
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Email is required !';
        txtEmail.style.marginLeft = '9.3%';
        isvalueEmail = false;
    }
    else {
        msgEmail.classList.add('msg-success');
        msgEmail.classList.remove('msg-error');
        msgEmail.innerHTML = 'OK!';
        txtEmail.style.marginLeft = '2.4%';
    }

    var txtAvatar = document.forms['register-form']['Avatar'];
    var msgAvatar = txtAvatar.nextElementSibling;
    if(txtAvatar.value == null || txtAvatar.value.length == 0){
        msgAvatar.classList.remove('msg-success');
        msgAvatar.classList.add('msg-error');
        msgAvatar.innerHTML = 'Avatar is required !';
        txtAvatar.style.marginLeft = '9.6%';
        isvalueAvatar = false;
    }
    else {
        msgAvatar.classList.add('msg-success');
        msgAvatar.classList.remove('msg-error');
        msgAvatar.innerHTML = 'OK!';
        txtAvatar.style.marginLeft = '2.4%';
    }

    var txtPhone = document.forms['register-form']['phone'];
    var msgPhone = txtPhone.nextElementSibling;
    if(txtPhone.value == null || txtPhone.value.length == 0){
        msgPhone.classList.remove('msg-success');
        msgPhone.classList.add('msg-error');
        msgPhone.innerHTML = 'Phone is required !';
        txtPhone.style.marginLeft = '9.4%';
        isvaluePhone = false;
    }
    else {
        msgPhone.classList.add('msg-success');
        msgPhone.classList.remove('msg-error');
        msgPhone.innerHTML = 'OK!';
        txtPhone.style.marginLeft = '2.4%';
    }


    isvalue = isvalueFirstName && isvalueLastName && isvalueAdress && isvalueAvatar && isvalueEmail
              && isvaluePassword && isvalueConfirmPassword && isvaluePhone ;
    return isvalue;
}