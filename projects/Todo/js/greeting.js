const loginForm = document.getElementById("login-form"),
    loginInput = loginForm.querySelector("input"),
    greeting = document.querySelector("#greeting");
   

    const HIDDEN_CLASSNAME = "hidden";
    const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username)
}


function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerHTML = `Hello ${username}`;
}


const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreeting(savedUserName);
   
}