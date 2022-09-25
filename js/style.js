document.getElementById("btn-login").addEventListener('click', function(){
    // console.log("Button Clicked");
    const emailField = document.getElementById('email-field');
    const emailValue = emailField.value;
    // console.log(emailValue);
    const passwordField = document.getElementById('password-field');
    const passwordValue = passwordField.value;
    // console.log(passwordValue);

    if(emailValue === 'soaib.cse@gmail.com' && passwordValue === '12345'){
        window.location.href = 'bank.html';
        alert("Log in Succesful");
    }
    else{
        alert("Please Enter the correct Email & Password");
    }
})
