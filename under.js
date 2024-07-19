const form =document.getElementById("form");
const username =document.getElementById("username");
const password =document.getElementById("password");


form.addEventListener("submit", function(e){
    e.preventDefault();
    checkInput();
});

function checkInput(){
    const usernameValue= username.value.trim();
    const passwordValue= password.value.trim();
   

if (usernameValue === ""){
    setErrorfor(username, "Sorry! email field can not be empty");
} else{
    setSuccessfor(username);
}



if (passwordValue === ""){
    setErrorfor(password, "Sorry! password field can not be empty");
}else if
(passwordValue.length < 6){
    setErrorfor(password, "password must contain at least 6 characters!");
}else{
    setSuccessfor(password);
}
}



function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidPassword(password) {
    return /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(password);
}



function setErrorfor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText=message;
    formControl.className = "form-control error";
}

function setSuccessfor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


